export const createTranslationKeyPrompt = `
This tool will create a new translation key in your SimpleLocalize project.
- 'key' is required and must be unique within the namespace.
- 'namespace', 'description', 'codeDescription', 'tags', and 'charactersLimit' are optional.
- Use 'charactersLimit' to restrict the length of translation values, or set to -1 for unlimited.
`;

export const updateTranslationKeyPrompt = `
This tool will update an existing translation key in your SimpleLocalize project.
- Provide 'key' (required) and optionally 'namespace'.
- You can update 'description', 'codeDescription', 'tags', and 'charactersLimit'.
- Fields left empty or null will not be updated.
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
