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
