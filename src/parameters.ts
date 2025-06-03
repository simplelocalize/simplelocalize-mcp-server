import { z } from "zod";

export const createTranslationKeyParameters = z.object({
  key: z.string().describe("The translation key name. Must be unique within the namespace."),
  namespace: z.string().optional().describe("The namespace for the translation key. Defaults to an empty string if not provided."),
  description: z.string().optional().describe("A description of the translation key."),
  codeDescription: z.string().optional().describe("A description of the code context for the translation key."),
  tags: z.array(z.string().describe("A tag for the translation key.")).optional().describe("Tags to categorize the translation key."),
  charactersLimit: z.number().min(-1).optional().describe("The character limit for the translation key value. -1 means unlimited."),
});

export const updateTranslationKeyParameters = z.object({
  key: z.string().describe("The translation key name to update."),
  namespace: z.string().optional().describe("The namespace for the translation key. Defaults to an empty string if not provided."),
  description: z.string().optional().describe("A description of the translation key."),
  codeDescription: z.string().optional().describe("A description of the code context for the translation key."),
  tags: z.array(z.string().describe("A tag for the translation key.")).optional().describe("Tags to categorize the translation key."),
  charactersLimit: z.number().min(-1).optional().describe("The character limit for the translation key value. -1 means unlimited."),
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
});
