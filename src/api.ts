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
  createEnvironment,
  getTranslationKeys,
  createTranslationKey,
  deleteTranslationKey,
  updateTranslationKeyById,
  getAllTranslationKeysV2,
  uploadTranslationKeyScreenshot,
  uploadTranslationKeyScreenshotFile,
  uploadTranslationKeyScreenshotsBulk,
  updateTranslation,
  updateTag,
  deleteTag,
  getLanguage,
  updateLanguage,
  deleteLanguage,
  getCustomers,
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer,
  autoTranslateText,
  createAutoTranslationJobs,
  getAutoTranslationJobs,
  getAutoTranslationJob,
  importTranslations,
  exportTranslations,
  getFileFormats,
  getActivity,
  getActivityChanges,
  getProjectDetails,
  getGlossaryEntries,
  createGlossaryEntry,
  deleteGlossaryEntry,
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
      case "create_environment":
        return JSON.stringify(await createEnvironment(this.apiKey, arg));
      case "get_translation_keys":
        return JSON.stringify(await getTranslationKeys(this.apiKey, arg));
      case "create_translation_key":
        return JSON.stringify(await createTranslationKey(this.apiKey, arg));
      case "delete_translation_key":
        return JSON.stringify(await deleteTranslationKey(this.apiKey, arg));
      case "update_translation_key_by_id":
        return JSON.stringify(await updateTranslationKeyById(this.apiKey, arg));
      case "get_all_translation_keys_v2":
        return JSON.stringify(await getAllTranslationKeysV2(this.apiKey, arg));
      case "upload_translation_key_screenshot":
        return JSON.stringify(await uploadTranslationKeyScreenshot(this.apiKey, arg));
      case "upload_translation_key_screenshot_file":
        return JSON.stringify(await uploadTranslationKeyScreenshotFile(this.apiKey, arg));
      case "upload_translation_key_screenshots_bulk":
        return JSON.stringify(await uploadTranslationKeyScreenshotsBulk(this.apiKey, arg));
      case "update_translation":
        return JSON.stringify(await updateTranslation(this.apiKey, arg));
      case "update_tag":
        return JSON.stringify(await updateTag(this.apiKey, arg));
      case "delete_tag":
        return JSON.stringify(await deleteTag(this.apiKey, arg));
      case "get_language":
        return JSON.stringify(await getLanguage(this.apiKey, arg));
      case "update_language":
        return JSON.stringify(await updateLanguage(this.apiKey, arg));
      case "delete_language":
        return JSON.stringify(await deleteLanguage(this.apiKey, arg));
      case "get_customers":
        return JSON.stringify(await getCustomers(this.apiKey));
      case "create_customer":
        return JSON.stringify(await createCustomer(this.apiKey, arg));
      case "get_customer":
        return JSON.stringify(await getCustomer(this.apiKey, arg));
      case "update_customer":
        return JSON.stringify(await updateCustomer(this.apiKey, arg));
      case "delete_customer":
        return JSON.stringify(await deleteCustomer(this.apiKey, arg));
      case "auto_translate_text":
        return JSON.stringify(await autoTranslateText(this.apiKey, arg));
      case "create_auto_translation_jobs":
        return JSON.stringify(await createAutoTranslationJobs(this.apiKey, arg));
      case "get_auto_translation_jobs":
        return JSON.stringify(await getAutoTranslationJobs(this.apiKey, arg));
      case "get_auto_translation_job":
        return JSON.stringify(await getAutoTranslationJob(this.apiKey, arg));
      case "import_translations":
        return JSON.stringify(await importTranslations(this.apiKey, arg));
      case "export_translations":
        return JSON.stringify(await exportTranslations(this.apiKey, arg));
      case "get_file_formats":
        return JSON.stringify(await getFileFormats(this.apiKey));
      case "get_activity":
        return JSON.stringify(await getActivity(this.apiKey, arg));
      case "get_activity_changes":
        return JSON.stringify(await getActivityChanges(this.apiKey, arg));
      case "get_project_details":
        return JSON.stringify(await getProjectDetails(this.apiKey));
      case "get_glossary_entries":
        return JSON.stringify(await getGlossaryEntries(this.apiKey));
      case "create_glossary_entry":
        return JSON.stringify(await createGlossaryEntry(this.apiKey, arg));
      case "delete_glossary_entry":
        return JSON.stringify(await deleteGlossaryEntry(this.apiKey, arg));
      default:
        throw new Error("Invalid method " + method);
    }
  }
}

export default SimpleLocalizeAPI;
