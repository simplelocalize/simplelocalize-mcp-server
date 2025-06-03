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
} from "./functions.js";

class SimpleLocalizeAPI {
  apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async run(method: string, arg: any) {
    if (method === "create_language") {
      const output = JSON.stringify(await createLanguage(this.apiKey, arg));
      return output;
    } else if (method === "create_translation_key_bulk") {
      const output = JSON.stringify(await createTranslationKeyBulk(this.apiKey, arg));
      return output;
    } else if (method === "update_translations_bulk") {
      const output = JSON.stringify(await updateTranslationsBulk(this.apiKey, arg));
      return output;
    } else if (method === "get_all_translation_keys") {
      const output = JSON.stringify(await getAllTranslationKeys(this.apiKey));
      return output;
    } else if (method === "get_translation_key_details") {
      const output = JSON.stringify(await getTranslationKeyDetails(this.apiKey, arg));
      return output;
    } else if (method === "get_tags") {
      const output = JSON.stringify(await getTags(this.apiKey));
      return output;
    } else if (method === "create_tag") {
      const output = JSON.stringify(await createTag(this.apiKey, arg));
      return output;
    } else if (method === "get_languages") {
      const output = JSON.stringify(await getLanguages(this.apiKey));
      return output;
    } else if (method === "get_translations") {
      const output = JSON.stringify(await getTranslations(this.apiKey, arg));
      return output;
    } else {
      throw new Error("Invalid method " + method);
    }
  }
}

export default SimpleLocalizeAPI;
