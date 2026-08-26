import { z } from "zod";

export const createTranslationKeyBulkParameters = z.object({
  translationKeys: z
    .array(
      z.object({
        key: z.string().describe("The translation key name. Must be unique within the namespace."),
        namespace: z
          .string()
          .optional()
          .describe("The namespace for the translation key. Defaults to an empty string if not provided."),
        description: z.string().optional().describe("A description of the translation key."),
        codeDescription: z.string().optional().describe("A description of the code context for the translation key."),
        tags: z
          .array(z.string().describe("A tag for the translation key."))
          .optional()
          .describe("Tags to categorize the translation key."),
        charactersLimit: z
          .number()
          .min(-1)
          .optional()
          .describe("The character limit for the translation key value. -1 means unlimited."),
      }),
    )
    .max(100)
    .describe("Array of translation keys to create (max 100)."),
});

export const updateTranslationKeyParameters = z.object({
  key: z.string().min(1).describe("Existing translation key name to update."),
  namespace: z.string().optional().describe("Existing namespace for the translation key (optional)."),
  newKey: z.string().min(1).optional().describe("New translation key name (optional)."),
  newNamespace: z.string().optional().describe("New namespace for the translation key (optional)."),
  description: z.string().optional().describe("New description (optional)."),
  codeDescription: z.string().optional().describe("New code context description (optional)."),
  tags: z.array(z.string().min(1)).max(5).optional().describe("New tags (optional, max 5)."),
  charactersLimit: z
    .number()
    .min(-1)
    .optional()
    .describe("New character limit for the key value (-1 means unlimited)."),
  lock: z.boolean().optional().describe("Lock/unlock the key (optional)."),
  deprecated: z.boolean().optional().describe("Mark as deprecated (optional)."),
});

export const updateTranslationsBulkParameters = z.object({
  translations: z
    .array(
      z.object({
        key: z.string().describe("The translation key name."),
        language: z.string().describe("The language key (e.g. en, pl_PL)."),
        text: z.string().describe("The translation text."),
        customerId: z.string().optional().describe("The customer ID for customer-specific translations."),
        namespace: z.string().optional().describe("The namespace for the translation key."),
        reviewStatus: z
          .enum(["REVIEWED", "NOT_REVIEWED", ""])
          .optional()
          .describe("Review status: REVIEWED, NOT_REVIEWED or empty."),
      }),
    )
    .max(100)
    .describe("Array of translations to update (max 100)."),
});

export const deleteTranslationKeysBulkParameters = z
  .object({
    translationKeys: z
      .array(
        z.object({
          key: z.string().min(1).describe("Translation key name to delete."),
          namespace: z.string().optional().describe("Namespace for the translation key (optional)."),
        }),
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
  textStatus: z
    .enum(["EMPTY", "NOT_EMPTY", ""])
    .optional()
    .describe("Filter by text status: EMPTY, NOT_EMPTY or empty."),
  customerId: z.string().optional().describe("Filter by customer ID."),
  baseOnly: z.boolean().optional().describe("If true, returns only base translations (no customer overrides)."),
  reviewStatus: z
    .enum(["REVIEWED", "NOT_REVIEWED", ""])
    .optional()
    .describe("Filter by review status: REVIEWED, NOT_REVIEWED or empty."),
  page: z.number().optional().describe("Page number for pagination (default 0)."),
  size: z.number().optional().describe("Page size for pagination (default 100, max 2500)."),
  sortBy: z
    .enum(["lastModifiedAt", ""])
    .optional()
    .describe("Sort translations by lastModifiedAt or empty (default alphabetical sort)."),
  sortOrder: z.enum(["asc", "desc", ""]).optional().describe("Sort order: asc, desc (default)."),
});

const environmentKeySchema = z
  .string()
  .min(1, "environmentKey is required")
  .max(64, "environmentKey is too long")
  .regex(/^[a-zA-Z0-9_-]+$/, "environmentKey can contain only letters, digits, '_' and '-'")
  .describe(
    "Environment key (e.g. _latest, _production or custom key). If user doesn't specify an environment, then _latest should be used.",
  );

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
      .describe("Optional labels. Labels can be specified only for the _latest environment. Max 50."),
  })
  .describe(
    "Publish translations to the specified environment in your SimpleLocalize project. Environment must by specified",
  );

export const createEnvironmentParameters = z.object({
  key: z
    .string()
    .min(3)
    .max(32)
    .regex(/^[a-z0-9-]+$/, "key must contain only lowercase letters, digits and dashes")
    .describe(
      "Unique environment key. Lowercase letters, digits and dashes only. Cannot be '_latest' or '_production'.",
    ),
  name: z.string().min(3).max(32).describe("Display name for the environment."),
  color: z
    .string()
    .length(6)
    .regex(/^[0-9a-fA-F]+$/, "color must be a 6-character hex value")
    .describe("Environment color in hex format for the Web UI (e.g. ff5733), without the leading '#'."),
});

export const getTranslationKeysParameters = z.object({
  key: z.string().optional().describe("Filter by translation key name."),
  namespace: z.string().optional().describe("Filter by namespace."),
  sort: z
    .enum(["last_seen_at", "modified_at", "created_at", "deprecated_at"])
    .optional()
    .describe("Sort translation keys by the given field."),
  page: z.number().min(0).optional().describe("Page number for pagination (default 0)."),
  size: z.number().min(0).max(2500).optional().describe("Page size for pagination (default 100, max 2500)."),
});

export const createTranslationKeyParameters = z.object({
  key: z.string().min(1).max(500).describe("The translation key name. Must be unique within the namespace."),
  namespace: z
    .string()
    .max(128)
    .optional()
    .describe("The namespace for the translation key. Defaults to an empty string if not provided."),
  description: z.string().max(500).optional().describe("A description of the translation key (max 500 characters)."),
  codeDescription: z
    .string()
    .max(500)
    .optional()
    .describe("A description of the code context for the translation key (max 500 characters)."),
  tags: z.array(z.string()).max(5).optional().describe("Tags to categorize the translation key (max 5)."),
  charactersLimit: z
    .number()
    .min(-1)
    .optional()
    .describe("The character limit for the translation key value. -1 means unlimited."),
});

export const deleteTranslationKeyParameters = z.object({
  key: z.string().min(1).max(500).describe("Translation key name to delete."),
  namespace: z.string().max(128).optional().describe("Namespace for the translation key (optional)."),
});

export const updateTranslationKeyByIdParameters = z.object({
  id: z.string().min(1).describe("The translation key ID to update."),
  key: z.string().optional().describe("New translation key name (optional)."),
  namespace: z.string().optional().describe("New namespace for the translation key (optional)."),
  description: z.string().max(500).optional().describe("New description (optional, max 500 characters)."),
  codeDescription: z
    .string()
    .max(500)
    .optional()
    .describe("New code context description (optional, max 500 characters)."),
  tags: z.array(z.string()).max(5).optional().describe("New tags (optional, max 5)."),
  charactersLimit: z.number().optional().describe("New character limit for the key value (-1 means unlimited)."),
  lock: z.boolean().optional().describe("Lock/unlock the key (optional)."),
  deprecated: z.boolean().optional().describe("Mark as deprecated (optional)."),
});

export const getAllTranslationKeysV2Parameters = z
  .object({
    id: z.string().optional().describe("Filter by translation key ID (optional)."),
  })
  .describe("Get all translation keys (id, key and namespace only, no metadata). No pagination needed.");

export const uploadTranslationKeyScreenshotParameters = z.object({
  key: z.string().min(1).describe("The translation key name."),
  namespace: z.string().optional().describe("The namespace for the translation key (optional)."),
  base64: z
    .string()
    .min(1)
    .describe("Screenshot image encoded in base64 (PNG/JPG/JPEG, max 2MB). Replaces any existing screenshot."),
});

export const uploadTranslationKeyScreenshotFileParameters = z.object({
  key: z.string().min(1).describe("The translation key name."),
  namespace: z.string().optional().describe("The namespace for the translation key (optional)."),
  filePath: z
    .string()
    .min(1)
    .describe(
      "Absolute local path to a PNG/JPG/JPEG screenshot file (max 4MB) to upload. Replaces any existing screenshot.",
    ),
});

export const uploadTranslationKeyScreenshotsBulkParameters = z.object({
  base64: z.string().min(1).describe("Screenshot image encoded in base64."),
  name: z.string().min(1).describe("Screenshot file name."),
  ocr: z.array(z.string()).optional().describe("OCR text extracted from the screenshot (optional)."),
  translationKeys: z
    .array(
      z.object({
        key: z.string().min(1).max(500).describe("Translation key name."),
        namespace: z.string().max(128).optional().describe("Namespace for the translation key (optional)."),
      }),
    )
    .min(1)
    .max(1000)
    .describe("Translation keys to attach the screenshot to (min 1, max 1000)."),
});

export const updateTranslationParameters = z.object({
  key: z.string().min(1).describe("The translation key name."),
  language: z.string().min(1).describe("The language key (e.g. en, pl_PL)."),
  text: z.string().max(65535).describe("The translation text."),
  namespace: z.string().optional().describe("The namespace for the translation key (optional)."),
  customerId: z.string().optional().describe("The customer ID for customer-specific translations (optional)."),
  reviewStatus: z
    .enum(["REVIEWED", "NOT_REVIEWED", ""])
    .optional()
    .describe("Review status: REVIEWED, NOT_REVIEWED or empty (defaults to NOT_REVIEWED if omitted)."),
});

export const updateTagParameters = z.object({
  tagName: z.string().min(2).max(16).describe("Existing tag name to update."),
  name: z.string().min(2).max(16).optional().describe("New tag name (optional, 2-16 characters)."),
  color: z.string().optional().describe("New tag color in hex format (e.g. 6e56ce) (optional)."),
});

export const deleteTagParameters = z.object({
  tagName: z.string().min(2).max(16).describe("Tag name to delete."),
});

export const getLanguageParameters = z.object({
  languageKey: z.string().min(1).describe("The language key (e.g. en, pl_PL)."),
});

export const updateLanguageParameters = z.object({
  languageKey: z.string().min(1).describe("Existing language key to update."),
  key: z.string().max(20).optional().describe("New language key (optional, max 20 characters)."),
  name: z.string().max(200).optional().describe("New language display name (optional, max 200 characters)."),
});

export const deleteLanguageParameters = z.object({
  languageKey: z.string().min(1).describe("The language key to delete (e.g. en, pl_PL)."),
});

export const getCustomersParameters = z.object({}).describe("No parameters required.");

export const getFileFormatsParameters = z.object({}).describe("No parameters required.");

export const createCustomerParameters = z.object({
  key: z.string().min(1).describe("Unique customer ID/key."),
  description: z.string().optional().describe("Customer description (optional)."),
});

export const getCustomerParameters = z.object({
  customerKey: z.string().min(1).describe("The customer key."),
});

export const updateCustomerParameters = z.object({
  customerKey: z.string().min(1).describe("Existing customer key to update."),
  key: z.string().optional().describe("New customer key (optional)."),
  description: z.string().optional().describe("New customer description (optional)."),
});

export const deleteCustomerParameters = z.object({
  customerKey: z.string().min(1).describe("The customer key to delete."),
});

export const autoTranslateTextParameters = z.object({
  sourceText: z.string().min(1).describe("Source text to translate."),
  targetLanguage: z.string().min(1).describe("Provider target language key (e.g. en_US)."),
  translationProvider: z.enum(["GOOGLE_TRANSLATE", "DEEPL", "OPEN_AI"]).describe("Auto-translation provider to use."),
  sourceLanguage: z
    .string()
    .optional()
    .describe("Provider source language key (optional). Auto-detected if not provided."),
  sourceProjectLanguage: z
    .string()
    .optional()
    .describe(
      "Project source language key (optional), used to load provider-specific configuration (e.g. DeepL glossary).",
    ),
  targetProjectLanguage: z
    .string()
    .optional()
    .describe(
      "Project target language key (optional), used to load provider-specific configuration (e.g. DeepL glossary).",
    ),
  deeplFormality: z.enum(["default", "more", "less"]).optional().describe("DeepL formality setting (optional)."),
  description: z.string().optional().describe("Additional context to improve translation quality (optional)."),
});

export const createAutoTranslationJobsParameters = z.object({
  languageKeys: z
    .array(z.string())
    .optional()
    .describe(
      "Project source language keys to auto-translate. If not provided, all languages are translated. Uses the latest auto-translation configuration (provider, source language, etc.) and cannot customize it.",
    ),
  options: z
    .array(z.enum(["FORCE_REPLACE", "AUTO_PUBLISH", "EXCLUDE_VARIABLES", "USE_TRANSLATION_KEYS"]))
    .optional()
    .describe("Auto-translation options (optional)."),
});

export const getAutoTranslationJobsParameters = z.object({
  status: z.string().optional().describe("Filter jobs by status (optional)."),
});

export const getAutoTranslationJobParameters = z.object({
  jobId: z.string().min(1).describe("The auto-translation job ID."),
});

export const importTranslationsParameters = z.object({
  filePath: z.string().min(1).describe("Absolute local path to the file to import."),
  uploadFormat: z
    .enum([
      "android",
      "android-strings",
      "android-xml",
      "csv-translations",
      "tsv",
      "excel",
      "java-properties",
      "localizable-xcstrings",
      "localizable-strings",
      "localizable-strings-dict",
      "po-pot",
      "php-array",
      "string-resources",
      "simplelocalize-json",
      "single-language-json",
      "multi-language-json",
      "javascript",
      "module-exports",
      "yaml",
      "qt-linguist",
      "resx",
    ])
    .describe("Format of the file being imported."),
  importOptions: z
    .array(
      z.enum([
        "PUBLISH_AFTER_IMPORT",
        "REPLACE_TRANSLATION_IF_FOUND",
        "TRIM_LEADING_TRAILING_SPACES",
        "UNESCAPE_NEW_LINES",
        "UNESCAPE_SINGLE_QUOTES",
        "SHEETS_AS_NAMESPACES",
        "MULTI_LANGUAGE",
        "LANGUAGES_NESTED",
      ]),
    )
    .optional()
    .describe("Import options (optional)."),
  languageKey: z
    .string()
    .optional()
    .describe("Language key to import translations into (optional, depends on format)."),
  customerId: z.string().optional().describe("Customer ID to import customer-specific translations for (optional)."),
  namespace: z.string().optional().describe("Namespace to import translations into (optional)."),
  tags: z.array(z.string()).optional().describe("Tags to assign to imported translation keys (optional)."),
});

export const exportTranslationsParameters = z.object({
  downloadFormat: z
    .enum([
      "android",
      "android-strings",
      "android-xml",
      "csv-translations",
      "tsv",
      "excel",
      "java-properties",
      "localizable-xcstrings",
      "localizable-strings",
      "localizable-strings-dict",
      "po-pot",
      "php-array",
      "string-resources",
      "simplelocalize-json",
      "single-language-json",
      "multi-language-json",
      "javascript",
      "module-exports",
      "yaml",
      "qt-linguist",
      "resx",
    ])
    .optional()
    .describe("Format of the exported file(s) (optional)."),
  downloadOptions: z
    .array(
      z.enum([
        "SPLIT_BY_LANGUAGES",
        "SPLIT_BY_NAMESPACES",
        "INCLUDE_DESCRIPTIONS",
        "ONLY_NOT_TRANSLATED",
        "ONLY_TRANSLATED",
        "WRITE_NESTED",
        "ESCAPE_NEW_LINES",
        "ESCAPE_SINGLE_QUOTES",
        "ZIP_FILES",
        "SHEETS_AS_NAMESPACES",
        "MULTI_LANGUAGE",
        "LANGUAGES_NESTED",
      ]),
    )
    .optional()
    .describe("Export options (optional)."),
  languageKeys: z.array(z.string()).optional().describe("Limit export to given language keys (optional)."),
  tags: z.array(z.string()).optional().describe("Limit export to translation keys with given tags (optional)."),
  languageOrder: z.array(z.string()).optional().describe("Order of languages in the exported file(s) (optional)."),
  customerId: z
    .string()
    .optional()
    .describe("Export customer-specific translations for the given customer ID (optional)."),
  sort: z
    .enum(["DEFAULT", "NEWEST_KEYS_FIRST", "NEWEST_KEYS_LAST", "NAMESPACES", "IMPORT_ORDER"])
    .optional()
    .describe("Sort order for translation keys in the exported file(s) (optional)."),
});

export const getActivityParameters = z.object({
  page: z.number().min(0).optional().describe("Page number for pagination (default 0)."),
  size: z
    .number()
    .min(1)
    .max(50)
    .optional()
    .describe("Page size for pagination (default 10, max 50). Up to 500 latest entries can be fetched."),
});

export const getActivityChangesParameters = z.object({
  activityId: z.string().min(1).describe("The activity ID to get changes for."),
});

export const getProjectDetailsParameters = z
  .object({})
  .describe("No parameters required. Returns details for the project identified by the current Project API Key.");

export const getGlossaryEntriesParameters = z.object({}).describe("No parameters required.");

export const createGlossaryEntryParameters = z.object({
  sourceText: z.string().min(1).max(128).describe("Term in the source language (e.g. Sign in)."),
  sourceLanguage: z.string().min(1).describe("Source language key, must exist in the project (e.g. en)."),
  targets: z
    .array(
      z.object({
        targetLanguage: z.string().min(1).describe("Target language key, must exist in the project (e.g. pl)."),
        targetText: z.string().max(128).describe("Term translated into the target language (e.g. Zaloguj się)."),
      }),
    )
    .min(1)
    .describe("Translations of the term, one entry per target language."),
});

export const deleteGlossaryEntryParameters = z.object({
  sourceText: z.string().min(1).max(128).describe("Source term of the glossary entry to delete."),
});
