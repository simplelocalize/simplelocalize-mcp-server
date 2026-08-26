export const createTranslationKeyPrompt = `
This tool will create multiple translation keys in your SimpleLocalize project in bulk.
- Provide an array of translation key objects (max 100).
- Each object must include 'key' and can include 'namespace', 'description', 'codeDescription', 'tags', and 'charactersLimit'.
- It doesn't throw an error if translation key already exists, but it returns a list of failures.
`;

export const updateTranslationsBulkPrompt = `
This tool will update multiple translations in bulk in your SimpleLocalize project.
- Provide an array of translation objects (max 100).
- Each object must include 'key', 'language', and 'text'.
- Optionally include 'namespace', 'customerId', and 'reviewStatus'.
- Use this for efficient mass updates.
`;

export const getAllTranslationKeysPrompt = `
This tool will return all translation keys (key and namespace only) in your SimpleLocalize project.
- No parameters required.
- Use this to quickly fetch all keys for reference or validation.
`;

export const getTranslationKeyDetailsPrompt = `
This tool will return details for a specific translation key in your SimpleLocalize project.
- Provide 'key' (required) and optionally 'namespace'.
- Returns metadata such as description, codeDescription, tags, and charactersLimit.
`;

export const getTagsPrompt = `
This tool will list all tags in your SimpleLocalize project.
- No parameters required.
- Use this to see available tags for categorizing translation keys.
`;

export const createTagPrompt = `
This tool will create a new tag in your SimpleLocalize project.
- Provide a unique 'name' and a 'color' in hex format (e.g. 6e56ce).
- Tags help organize and filter translation keys.
`;

export const getLanguagesPrompt = `
This tool will list all languages configured in your SimpleLocalize project.
- No parameters required.
- Use this to see available languages for translations.
`;

export const getTranslationsPrompt = `
This tool will list translations in your SimpleLocalize project.
- You can filter by key, namespace, language, text, customerId, reviewStatus, and more.
- Supports pagination with 'page' and 'size'.
- Supports sort with 'sortBy' and 'sortOrder'.
- Use 'text' to search for translations containing a specific value (min 3 characters).
`;

export const createLanguagePrompt = `
This tool will create a new language in your SimpleLocalize project.
- 'key' is required and must be a valid language key (e.g. en, pl_PL).
- 'name' is optional and can be used to provide a display name for the language.
`;

export const updateTranslationKeyPrompt = `
This tool will update a translation key (metadata and/or key/namespace) in your SimpleLocalize project.
- Provide the existing 'key' and optionally 'namespace' to identify the translation key.
- Provide optional fields to update: newKey, newNamespace, description, codeDescription, tags, charactersLimit, lock, deprecated.
- Use this to rename keys, move keys between namespaces, or update key metadata.
`;

export const deleteTranslationKeysBulkPrompt = `
This tool will delete translation keys in bulk in your SimpleLocalize project.
- Provide 'translationKeys' array (min 1, max 100) with 'key' and optional 'namespace'.
- It doesn't throw an error if a key doesn't exist, but returns failures list (if any).
- Use this to clean up unused keys efficiently.
`;

export const getEnvironmentsPrompt = `
This tool will list all Translation Hosting environments available in your SimpleLocalize project.
- No parameters required.
- Returns environments including built-in ones like _latest and _production (if available) and any custom environments.
`;

export const getEnvironmentDetailsPrompt = `
This tool will retrieve hosting status/details for a specific environment in your SimpleLocalize project.
- Provide 'environmentKey' (required), e.g. _latest, _production or your custom environment key.
- Use this to verify whether a given environment is available and check its hosting status.
`;

export const publishTranslationsPrompt = `
This tool will publish translations to the specified environment in your SimpleLocalize project.
- If no environment is specified by the user, then _latest environment should be used as 'environmentKey'.
- Optionally provide 'labels' (array of strings). Labels can be specified only for the _latest environment.
- Translations are always published in order that they were specified in the Translation Hosting environments list.
`;

export const createEnvironmentPrompt = `
This tool will create a new Translation Hosting environment in your SimpleLocalize project.
- Provide a unique 'key' (lowercase letters, digits, dashes), 'name', and 'color' (hex, no leading '#').
- The key cannot be '_latest' or '_production' (reserved built-in environments).
- The created environment can then be used with the publish tool.
`;

export const getTranslationKeysPrompt = `
This tool will return translation keys with full metadata for your SimpleLocalize project, with pagination.
- Optionally filter by 'key' and 'namespace' (exact match, case sensitive).
- Optionally sort by 'sort' (last_seen_at, modified_at, created_at, deprecated_at).
- Supports pagination via 'page' (default 0) and 'size' (default 100, max 2500).
- Use this instead of get_all_translation_keys when you need metadata (descriptions, tags, limits, etc.) or pagination.
`;

export const createTranslationKeyPromptSingle = `
This tool will create a single translation key in your SimpleLocalize project.
- Provide 'key' (required) and optionally 'namespace', 'description', 'codeDescription', 'tags', and 'charactersLimit'.
- Throws an error if the translation key already exists. Use create_translation_key_bulk to create multiple keys or to ignore existing ones.
`;

export const deleteTranslationKeyPrompt = `
This tool will delete a single translation key from your SimpleLocalize project.
- Provide 'key' (required) and optionally 'namespace'.
- Use delete_translation_keys_bulk to delete multiple keys at once.
`;

export const updateTranslationKeyByIdPrompt = `
This tool will update a translation key (metadata and/or key/namespace) in your SimpleLocalize project by its ID.
- Provide the existing 'id' to identify the translation key.
- Provide optional fields to update: key, namespace, description, codeDescription, tags, charactersLimit, lock, deprecated.
- Use this when you already know the translation key's ID (e.g. from get_all_translation_keys_v2).
`;

export const getAllTranslationKeysV2Prompt = `
This tool will return all translation keys (id, key and namespace only, no metadata) in your SimpleLocalize project.
- No pagination required, all keys are returned at once.
- Optionally filter by 'id'.
- Use this when you need translation key IDs (e.g. to use with update_translation_key_by_id).
`;

export const uploadTranslationKeyScreenshotPrompt = `
This tool will upload a screenshot for a translation key from a base64-encoded image.
- Provide 'key' (required), optionally 'namespace', and 'base64' (required, PNG/JPG/JPEG, max 2MB).
- Replaces the existing screenshot if one exists. Throws an error if the translation key does not exist.
`;

export const uploadTranslationKeyScreenshotFilePrompt = `
This tool will upload a screenshot for a translation key from a local file.
- Provide 'key' (required), optionally 'namespace', and 'filePath' (required, absolute local path to a PNG/JPG/JPEG file, max 4MB).
- Replaces the existing screenshot if one exists. Throws an error if the translation key does not exist.
`;

export const uploadTranslationKeyScreenshotsBulkPrompt = `
This tool will upload a screenshot and attach it to multiple translation keys at once.
- Provide 'base64' (required), 'name' (required, file name), optional 'ocr' text, and 'translationKeys' (required, min 1, max 1000 entries with 'key' and optional 'namespace').
`;

export const updateTranslationPrompt = `
This tool will update a single translation in your SimpleLocalize project.
- Provide 'key', 'language' and 'text' (required), and optionally 'namespace', 'customerId', and 'reviewStatus'.
- Throws an error if the translation key (with optional namespace), language key or customerId does not exist.
- Use update_translations_bulk for efficient mass updates instead.
`;

export const updateTagPrompt = `
This tool will update a tag in your SimpleLocalize project.
- Provide the existing 'tagName' to identify the tag, and optionally 'name' and/or 'color' (hex, no leading '#') to update.
- Throws an error if the tag does not exist.
`;

export const deleteTagPrompt = `
This tool will delete a tag from your SimpleLocalize project.
- Provide 'tagName' (required).
`;

export const getLanguagePrompt = `
This tool will return details for a single language in your SimpleLocalize project.
- Provide 'languageKey' (required), e.g. en, pl_PL.
`;

export const updateLanguagePrompt = `
This tool will update a language in your SimpleLocalize project.
- Provide the existing 'languageKey' to identify the language, and optionally 'key' and/or 'name' to update.
`;

export const deleteLanguagePrompt = `
This tool will delete a language from your SimpleLocalize project.
- Provide 'languageKey' (required), e.g. en, pl_PL.
- This also removes all translations for that language. Use with caution.
`;

export const getCustomersPrompt = `
This tool will list all customers configured in your SimpleLocalize project.
- No parameters required.
- Customers are used for customer-specific translation overrides (white-labeling).
`;

export const createCustomerPrompt = `
This tool will create a new customer in your SimpleLocalize project.
- Provide 'key' (required, unique customer ID) and optionally 'description'.
`;

export const getCustomerPrompt = `
This tool will return details for a single customer in your SimpleLocalize project.
- Provide 'customerKey' (required).
`;

export const updateCustomerPrompt = `
This tool will update a customer in your SimpleLocalize project.
- Provide the existing 'customerKey' to identify the customer, and optionally 'key' and/or 'description' to update.
`;

export const deleteCustomerPrompt = `
This tool will delete a customer from your SimpleLocalize project.
- Provide 'customerKey' (required).
- This also removes all customer-specific translation overrides for that customer. Use with caution.
`;

export const autoTranslateTextPrompt = `
This tool will auto-translate a single piece of text synchronously without saving it to your project.
- Provide 'sourceText', 'targetLanguage' (provider language key, e.g. en_US), and 'translationProvider' (GOOGLE_TRANSLATE, DEEPL, or OPEN_AI).
- Optionally provide 'sourceLanguage', 'sourceProjectLanguage', 'targetProjectLanguage', 'deeplFormality', and 'description' (context to improve quality).
- Use this to preview a translation or translate ad-hoc text. Use create_auto_translation_jobs to auto-translate and save translations in the project.
`;

export const createAutoTranslationJobsPrompt = `
This tool will start asynchronous auto-translation jobs for one or more languages in your SimpleLocalize project, saving results directly to the project.
- Optionally provide 'languageKeys' (project language keys to translate; if omitted, all languages are translated) and 'options'.
- Uses the auto-translation provider/configuration from the last auto-translation job run in the Web App; it cannot be customized via this tool.
- Returns job items; use get_auto_translation_job or get_auto_translation_jobs to check progress.
`;

export const getAutoTranslationJobsPrompt = `
This tool will list auto-translation jobs for your SimpleLocalize project.
- Optionally filter by 'status'.
`;

export const getAutoTranslationJobPrompt = `
This tool will return details and progress for a single auto-translation job.
- Provide 'jobId' (required).
`;

export const importTranslationsPrompt = `
This tool will import translations from a local file into your SimpleLocalize project.
- Provide 'filePath' (required, absolute local path to the file) and 'uploadFormat' (required, e.g. csv-translations, multi-language-json, po-pot, etc.).
- Optionally provide 'importOptions' (e.g. PUBLISH_AFTER_IMPORT, REPLACE_TRANSLATION_IF_FOUND), 'languageKey', 'customerId', 'namespace', and 'tags'.
`;

export const exportTranslationsPrompt = `
This tool will export translations from your SimpleLocalize project to downloadable file(s).
- Optionally provide 'downloadFormat' (e.g. csv-translations, multi-language-json, po-pot, etc.), 'downloadOptions', 'languageKeys', 'tags', 'languageOrder', 'customerId', and 'sort'.
- Returns a list of downloadable file URLs; it does not download the file content itself.
`;

export const getFileFormatsPrompt = `
This tool will list all file formats supported for import and export in SimpleLocalize.
- No parameters required.
`;

export const getActivityPrompt = `
This tool will list recent activity (imports, exports, publications, changes, etc.) for your SimpleLocalize project.
- Supports pagination via 'page' (default 0) and 'size' (default 10, max 50). Up to 500 latest entries can be fetched.
`;

export const getActivityChangesPrompt = `
This tool will list all content changes for a given activity entry in your SimpleLocalize project.
- Provide 'activityId' (required, from get_activity).
`;

export const getProjectDetailsPrompt = `
This tool will return full details (languages, customers, namespaces, environments, translation progress, etc.) for the project identified by the current Project API Key.
- No parameters required.
`;

export const getGlossaryEntriesPrompt = `
This tool will list all glossary entries in your SimpleLocalize project.
- No parameters required.
- Each entry contains the source term with its source language and translations for all target languages.
- Use it to check how project-specific terms (product names, domain terms) should be translated before translating or reviewing texts.
`;

export const createGlossaryEntryPrompt = `
This tool will create a glossary entry in your SimpleLocalize project.
- Provide 'sourceText' (the term, max 128 characters), 'sourceLanguage', and a non-empty 'targets' array with 'targetLanguage' and 'targetText' for each translation.
- 'sourceLanguage' and every 'targetLanguage' must be existing language keys in the project - use the 'get_languages' tool first if unsure.
- If an entry with the same 'sourceText' already exists, its translations are updated instead of creating a duplicate.
- Glossary is not available in the Community plan.
`;

export const deleteGlossaryEntryPrompt = `
This tool will delete a glossary entry from your SimpleLocalize project.
- Provide 'sourceText' (required) - the entry is removed with all its translations.
`;
