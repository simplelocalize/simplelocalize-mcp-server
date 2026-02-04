import {
  createTranslationKeyBulk,
  updateTranslationsBulk,
  getAllTranslationKeys,
  getTranslationKeyDetails,
  getTags,
  createTag,
  getLanguages,
  getTranslations,
  createLanguage,
  getEnvironments,
  getEnvironmentDetails,
  publishTranslations,
  updateTranslationKey,
  deleteTranslationKeysBulk,
} from "./functions.js";

class SimpleLocalizeAPI {
  apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async run(method: string, arg: any) {
    switch (method) {
      case "create_language":
        return JSON.stringify(await createLanguage(this.apiKey, arg));
      case "create_translation_key_bulk":
        return JSON.stringify(await createTranslationKeyBulk(this.apiKey, arg));
      case "update_translations_bulk":
        return JSON.stringify(await updateTranslationsBulk(this.apiKey, arg));
      case "get_all_translation_keys":
        return JSON.stringify(await getAllTranslationKeys(this.apiKey));
      case "get_translation_key_details":
        return JSON.stringify(await getTranslationKeyDetails(this.apiKey, arg));
      case "get_tags":
        return JSON.stringify(await getTags(this.apiKey));
      case "create_tag":
        return JSON.stringify(await createTag(this.apiKey, arg));
      case "get_languages":
        return JSON.stringify(await getLanguages(this.apiKey));
      case "get_translations":
        return JSON.stringify(await getTranslations(this.apiKey, arg));
      case "update_translation_key":
        return JSON.stringify(await updateTranslationKey(this.apiKey, arg));
      case "delete_translation_keys_bulk":
        return JSON.stringify(await deleteTranslationKeysBulk(this.apiKey, arg));
      case "get_environments":
        return JSON.stringify(await getEnvironments(this.apiKey, arg));
      case "get_environment_details":
        return JSON.stringify(await getEnvironmentDetails(this.apiKey, arg));
      case "publish_translations":
        return JSON.stringify(await publishTranslations(this.apiKey, arg));
      default:
        throw new Error("Invalid method " + method);
    }
  }
}

export default SimpleLocalizeAPI;
