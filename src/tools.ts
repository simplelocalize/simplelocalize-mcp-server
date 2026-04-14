import { z } from "zod";
import { ToolAnnotations } from "@modelcontextprotocol/sdk/types.js";
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
  annotations: ToolAnnotations;
};

const readOnly: ToolAnnotations = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: true,
};

const createOrUpdate: ToolAnnotations = {
  readOnlyHint: false,
  destructiveHint: false,
  idempotentHint: false,
  openWorldHint: true,
};

const destructive: ToolAnnotations = {
  readOnlyHint: false,
  destructiveHint: true,
  idempotentHint: false,
  openWorldHint: true,
};

const tools: Tool[] = [
  {
    method: "create_translation_key_bulk",
    name: "Create Translation Key Bulk",
    description: createTranslationKeyPrompt,
    parameters: createTranslationKeyBulkParameters,
    annotations: createOrUpdate,
  },
  {
    method: "update_translations_bulk",
    name: "Update Translations Bulk",
    description: updateTranslationsBulkPrompt,
    parameters: updateTranslationsBulkParameters,
    annotations: createOrUpdate,
  },
  {
    method: "get_all_translation_keys",
    name: "Get All Translation Keys",
    description: getAllTranslationKeysPrompt,
    parameters: getAllTranslationKeysParameters,
    annotations: readOnly,
  },
  {
    method: "get_translation_key_details",
    name: "Get Translation Key Details",
    description: getTranslationKeyDetailsPrompt,
    parameters: getTranslationKeyDetailsParameters,
    annotations: readOnly,
  },
  {
    method: "get_tags",
    name: "Get Tags",
    description: getTagsPrompt,
    parameters: getTagsParameters,
    annotations: readOnly,
  },
  {
    method: "create_tag",
    name: "Create Tag",
    description: createTagPrompt,
    parameters: createTagParameters,
    annotations: createOrUpdate,
  },
  {
    method: "get_languages",
    name: "Get Languages",
    description: getLanguagesPrompt,
    parameters: getLanguagesParameters,
    annotations: readOnly,
  },
  {
    method: "create_language",
    name: "Create Language",
    description: createLanguagePrompt,
    parameters: createLanguageParameters,
    annotations: createOrUpdate,
  },
  {
    method: "get_translations",
    name: "Get Translations",
    description: getTranslationsPrompt,
    parameters: getTranslationsParameters,
    annotations: readOnly,
  },
  {
    method: "update_translation_key",
    name: "Update Translation Key",
    description: updateTranslationKeyPrompt,
    parameters: updateTranslationKeyParameters,
    annotations: createOrUpdate,
  },
  {
    method: "delete_translation_keys_bulk",
    name: "Delete Translation Keys Bulk",
    description: deleteTranslationKeysBulkPrompt,
    parameters: deleteTranslationKeysBulkParameters,
    annotations: destructive,
  },
  {
    method: "get_environments",
    name: "Get Environments",
    description: getEnvironmentsPrompt,
    parameters: getEnvironmentsParameters,
    annotations: readOnly,
  },
  {
    method: "get_environment_details",
    name: "Get Environment Details",
    description: getEnvironmentDetailsPrompt,
    parameters: getEnvironmentDetailsParameters,
    annotations: readOnly,
  },
  {
    method: "publish_translations",
    name: "Publish Translations",
    description: publishTranslationsPrompt,
    parameters: publishTranslationsParameters,
    annotations: destructive,
  },
];

export default tools;
