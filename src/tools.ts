import { z } from "zod";
import {
  createTranslationKeyBulkParameters,
  updateTranslationsBulkParameters,
  getAllTranslationKeysParameters,
  getTranslationKeyDetailsParameters,
  getTagsParameters,
  createTagParameters,
  getLanguagesParameters,
  getTranslationsParameters,
  createLanguageParameters,
  getEnvironmentsParameters,
  getEnvironmentDetailsParameters,
  publishTranslationsParameters,
  updateTranslationKeyParameters,
  deleteTranslationKeysBulkParameters,
} from "./parameters.js";
import {
  createTranslationKeyPrompt,
  updateTranslationsBulkPrompt,
  getAllTranslationKeysPrompt,
  getTranslationKeyDetailsPrompt,
  getTagsPrompt,
  createTagPrompt,
  getLanguagesPrompt,
  getTranslationsPrompt,
  createLanguagePrompt,
  getEnvironmentsPrompt,
  getEnvironmentDetailsPrompt,
  publishTranslationsPrompt,
  updateTranslationKeyPrompt,
  deleteTranslationKeysBulkPrompt,
} from "./prompts.js";

export type Tool = {
  method: string;
  name: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parameters: z.ZodObject<any, any, any, any>;
  actions: {
    [key: string]: {
      [action: string]: boolean;
    };
  };
};

const tools: Tool[] = [
  {
    method: "create_translation_key_bulk",
    name: "Create Translation Key Bulk",
    description: createTranslationKeyPrompt,
    parameters: createTranslationKeyBulkParameters,
    actions: { translationKeys: { write: true } },
  },
  {
    method: "update_translations_bulk",
    name: "Update Translations Bulk",
    description: updateTranslationsBulkPrompt,
    parameters: updateTranslationsBulkParameters,
    actions: { translations: { write: true } },
  },
  {
    method: "get_all_translation_keys",
    name: "Get All Translation Keys",
    description: getAllTranslationKeysPrompt,
    parameters: getAllTranslationKeysParameters,
    actions: { translationKeys: { read: true } },
  },
  {
    method: "get_translation_key_details",
    name: "Get Translation Key Details",
    description: getTranslationKeyDetailsPrompt,
    parameters: getTranslationKeyDetailsParameters,
    actions: { translationKeys: { read: true } },
  },
  {
    method: "get_tags",
    name: "Get Tags",
    description: getTagsPrompt,
    parameters: getTagsParameters,
    actions: { tags: { read: true } },
  },
  {
    method: "create_tag",
    name: "Create Tag",
    description: createTagPrompt,
    parameters: createTagParameters,
    actions: { tags: { write: true } },
  },
  {
    method: "get_languages",
    name: "Get Languages",
    description: getLanguagesPrompt,
    parameters: getLanguagesParameters,
    actions: { languages: { read: true } },
  },
  {
    method: "create_language",
    name: "Create Language",
    description: createLanguagePrompt,
    parameters: createLanguageParameters,
    actions: { languages: { write: true } },
  },
  {
    method: "get_translations",
    name: "Get Translations",
    description: getTranslationsPrompt,
    parameters: getTranslationsParameters,
    actions: { translations: { read: true } },
  },
  {
    method: "update_translation_key",
    name: "Update Translation Key",
    description: updateTranslationKeyPrompt,
    parameters: updateTranslationKeyParameters,
    actions: { translationKeys: { write: true } },
  },
  {
    method: "delete_translation_keys_bulk",
    name: "Delete Translation Keys Bulk",
    description: deleteTranslationKeysBulkPrompt,
    parameters: deleteTranslationKeysBulkParameters,
    actions: { translationKeys: { write: true } },
  },
  {
    method: "get_environments",
    name: "Get Environments",
    description: getEnvironmentsPrompt,
    parameters: getEnvironmentsParameters,
    actions: { environments: { read: true } },
  },
  {
    method: "get_environment_details",
    name: "Get Environment Details",
    description: getEnvironmentDetailsPrompt,
    parameters: getEnvironmentDetailsParameters,
    actions: { environments: { read: true } },
  },
  {
    method: "publish_translations",
    name: "Publish Translations",
    description: publishTranslationsPrompt,
    parameters: publishTranslationsParameters,
    actions: { environments: { write: true }, translations: { write: true } },
  },
];

export default tools;
