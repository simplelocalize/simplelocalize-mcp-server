import { z } from "zod";

export const createTranslationKeyBulkParameters = z.object({
  translationKeys: z.array(z.object({
    key: z.string().describe("The translation key name. Must be unique within the namespace."),
    namespace: z.string().optional().describe("The namespace for the translation key. Defaults to an empty string if not provided."),
    description: z.string().optional().describe("A description of the translation key."),
    codeDescription: z.string().optional().describe("A description of the code context for the translation key."),
    tags: z.array(z.string().describe("A tag for the translation key.")).optional().describe("Tags to categorize the translation key."),
    charactersLimit: z.number().min(-1).optional().describe("The character limit for the translation key value. -1 means unlimited."),
  })).max(100).describe("Array of translation keys to create (max 100)."),
});

export const updateTranslationKeyParameters = z.object({
  key: z.string().min(1).describe("Existing translation key name to update."),
  namespace: z.string().optional().describe("Existing namespace for the translation key (optional)."),
  newKey: z.string().min(1).optional().describe("New translation key name (optional)."),
  newNamespace: z.string().optional().describe("New namespace for the translation key (optional)."),
  description: z.string().optional().describe("New description (optional)."),
  codeDescription: z.string().optional().describe("New code context description (optional)."),
  tags: z.array(z.string().min(1)).max(5).optional().describe("New tags (optional, max 5)."),
  charactersLimit: z.number().min(-1).optional().describe("New character limit for the key value (-1 means unlimited)."),
  lock: z.boolean().optional().describe("Lock/unlock the key (optional)."),
  deprecated: z.boolean().optional().describe("Mark as deprecated (optional)."),
});

export const updateTranslationsBulkParameters = z.object({
  translations: z.array(z.object({
    key: z.string().describe("The translation key name."),
    language: z.string().describe("The language key (e.g. en, pl_PL)."),
    text: z.string().describe("The translation text."),
    customerId: z.string().optional().describe("The customer ID for customer-specific translations."),
    namespace: z.string().optional().describe("The namespace for the translation key."),
    reviewStatus: z.enum(["REVIEWED", "NOT_REVIEWED", ""]).optional().describe("Review status: REVIEWED, NOT_REVIEWED or empty."),
  })).max(100).describe("Array of translations to update (max 100)."),
});

export const deleteTranslationKeysBulkParameters = z
  .object({
    translationKeys: z
      .array(
        z.object({
          key: z.string().min(1).describe("Translation key name to delete."),
          namespace: z.string().optional().describe("Namespace for the translation key (optional)."),
        })
      )
      .min(1)
      .max(100)
      .describe("Array of translation keys to delete (min 1, max 100)."),
  })
  .describe("Delete up to 100 translation keys in bulk.");

export const getAllTranslationKeysParameters = z.object({}).describe("No parameters required.");

export const getTranslationKeyDetailsParameters = z.object({
  key: z.string().describe("The translation key name."),
  namespace: z.string().optional().describe("The namespace for the translation key."),
});

export const getTagsParameters = z.object({}).describe("No parameters required.");

export const createTagParameters = z.object({
  name: z.string().describe("Tag name. Must be unique within the project."),
  color: z.string().describe("Tag color in hex format (e.g. 6e56ce)."),
});

export const getLanguagesParameters = z.object({}).describe("No parameters required.");

export const createLanguageParameters = z.object({
  key: z.string().describe("The language key (e.g. en, pl_PL)."),
  name: z.string().optional().describe("The language name (optional, e.g. English, Polish)."),
});

export const getTranslationsParameters = z.object({
  key: z.string().optional().describe("Filter by translation key name."),
  namespace: z.string().optional().describe("Filter by namespace."),
  language: z.string().optional().describe("Filter by language key (e.g. en, pl_PL)."),
  text: z.string().optional().describe("Search translations by text value (min 3 chars)."),
  textStatus: z.enum(["EMPTY", "NOT_EMPTY", ""]).optional().describe("Filter by text status: EMPTY, NOT_EMPTY or empty."),
  customerId: z.string().optional().describe("Filter by customer ID."),
  baseOnly: z.boolean().optional().describe("If true, returns only base translations (no customer overrides)."),
  reviewStatus: z.enum(["REVIEWED", "NOT_REVIEWED", ""]).optional().describe("Filter by review status: REVIEWED, NOT_REVIEWED or empty."),
  page: z.number().optional().describe("Page number for pagination (default 0)."),
  size: z.number().optional().describe("Page size for pagination (default 100, max 2500)."),
  sortBy: z.enum(["lastModifiedAt", ""]).optional().describe("Sort translations by lastModifiedAt or empty (default alphabetical sort)."),
  sortOrder: z.enum(["asc", "desc", ""]).optional().describe("Sort order: asc, desc (default).")
});

const environmentKeySchema = z
  .string()
  .min(1, "environmentKey is required")
  .max(64, "environmentKey is too long")
  .regex(/^[a-zA-Z0-9_-]+$/, "environmentKey can contain only letters, digits, '_' and '-'")
  .describe("Environment key (e.g. _latest, _production or custom key). If user doesn't specify an environment, then _latest should be used.");

export const getEnvironmentsParameters = z.object({}).describe("No parameters required.");

export const getEnvironmentDetailsParameters = z.object({
  environmentKey: environmentKeySchema,
});

export const publishTranslationsParameters = z
  .object({
    environmentKey: environmentKeySchema,
    labels: z
      .array(z.string().min(1))
      .max(50)
      .optional()
      .describe(
        "Optional labels. Labels can be specified only for the _latest environment. Max 50."
      ),
  })
  .describe(
    "Publish translations to the specified environment in your SimpleLocalize project. Environment must by specified"
  );
