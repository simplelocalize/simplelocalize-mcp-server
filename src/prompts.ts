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
- Use 'text' to search for translations containing a specific value (min 3 characters).
`;

export const createLanguagePrompt = `
This tool will create a new language in your SimpleLocalize project.
- 'key' is required and must be a valid language key (e.g. en, pl_PL).
- 'name' is optional and can be used to provide a display name for the language.
`;
