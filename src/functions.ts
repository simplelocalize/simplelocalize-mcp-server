import { z } from "zod";
import axios from "axios";
import { readFileSync } from "fs";
import { basename } from "path";
import {
  createLanguageParameters,
  createTagParameters,
  createTranslationKeyBulkParameters,
  deleteTranslationKeysBulkParameters,
  getEnvironmentDetailsParameters,
  getEnvironmentsParameters,
  getTranslationKeyDetailsParameters,
  getTranslationsParameters,
  publishTranslationsParameters,
  updateTranslationKeyParameters,
  updateTranslationsBulkParameters,
  createEnvironmentParameters,
  getTranslationKeysParameters,
  createTranslationKeyParameters,
  deleteTranslationKeyParameters,
  updateTranslationKeyByIdParameters,
  getAllTranslationKeysV2Parameters,
  uploadTranslationKeyScreenshotParameters,
  uploadTranslationKeyScreenshotFileParameters,
  uploadTranslationKeyScreenshotsBulkParameters,
  updateTranslationParameters,
  updateTagParameters,
  deleteTagParameters,
  getLanguageParameters,
  updateLanguageParameters,
  deleteLanguageParameters,
  createCustomerParameters,
  getCustomerParameters,
  updateCustomerParameters,
  deleteCustomerParameters,
  autoTranslateTextParameters,
  createAutoTranslationJobsParameters,
  getAutoTranslationJobsParameters,
  getAutoTranslationJobParameters,
  importTranslationsParameters,
  exportTranslationsParameters,
  getActivityParameters,
  getActivityChangesParameters,
  createGlossaryEntryParameters,
  deleteGlossaryEntryParameters,
} from "./parameters.js";

const BASE_URL = "https://api.simplelocalize.io";
const CLIENT_NAME = "mcp-server";

export const createTranslationKeyBulk = async (
  apiKey: string,
  params: z.infer<typeof createTranslationKeyBulkParameters>,
) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/translation-keys/bulk`, params, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const updateTranslationsBulk = async (
  apiKey: string,
  params: z.infer<typeof updateTranslationsBulkParameters>,
) => {
  try {
    const response = await axios.patch(`${BASE_URL}/api/v2/translations/bulk`, params, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getAllTranslationKeys = async (apiKey: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/translation-keys/list`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getTranslationKeyDetails = async (
  apiKey: string,
  params: z.infer<typeof getTranslationKeyDetailsParameters>,
) => {
  try {
    const { key, namespace } = params;
    const response = await axios.get(
      `${BASE_URL}/api/v1/translation-keys/details?key=${encodeURIComponent(key)}${namespace ? `&namespace=${encodeURIComponent(namespace)}` : ""}`,
      {
        headers: {
          "X-SimpleLocalize-Token": apiKey,
          "X-SimpleLocalize-Client": CLIENT_NAME,
        },
      },
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getTags = async (apiKey: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/tags`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const createTag = async (apiKey: string, params: z.infer<typeof createTagParameters>) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/tags`, params, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getLanguages = async (apiKey: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/languages`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getTranslations = async (apiKey: string, params: z.infer<typeof getTranslationsParameters>) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v2/translations`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
      params,
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const createLanguage = async (apiKey: string, params: z.infer<typeof createLanguageParameters>) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/languages`, params, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const updateTranslationKey = async (apiKey: string, params: z.infer<typeof updateTranslationKeyParameters>) => {
  try {
    const {
      key,
      namespace,
      newKey,
      newNamespace,
      description,
      codeDescription,
      tags,
      charactersLimit,
      lock,
      deprecated,
    } = params;

    const query = `key=${encodeURIComponent(key)}${namespace ? `&namespace=${encodeURIComponent(namespace)}` : ""}`;

    const body = {
      ...(newKey !== undefined ? { key: newKey } : {}),
      ...(newNamespace !== undefined ? { namespace: newNamespace } : {}),
      ...(description !== undefined ? { description } : {}),
      ...(codeDescription !== undefined ? { codeDescription } : {}),
      ...(charactersLimit !== undefined ? { charactersLimit } : {}),
      ...(lock !== undefined ? { lock } : {}),
      ...(deprecated !== undefined ? { deprecated } : {}),
      ...(tags !== undefined ? { tags } : {}),
    };

    const response = await axios.patch(`${BASE_URL}/api/v1/translation-keys?${query}`, body, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });

    return response?.data;
  } catch (error) {
    return error;
  }
};

export const deleteTranslationKeysBulk = async (
  apiKey: string,
  params: z.infer<typeof deleteTranslationKeysBulkParameters>,
) => {
  try {
    const response = await axios.delete(`${BASE_URL}/api/v1/translation-keys/bulk`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
      data: params,
    });

    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getEnvironments = async (apiKey: string, _params: z.infer<typeof getEnvironmentsParameters>) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v2/environments`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getEnvironmentDetails = async (
  apiKey: string,
  params: z.infer<typeof getEnvironmentDetailsParameters>,
) => {
  try {
    const { environmentKey } = params;
    const response = await axios.get(`${BASE_URL}/api/v2/environments/${encodeURIComponent(environmentKey)}`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const publishTranslations = async (apiKey: string, params: z.infer<typeof publishTranslationsParameters>) => {
  try {
    const { environmentKey = "_latest", labels = [] } = params;
    const response = await axios.post(
      `${BASE_URL}/api/v2/environments/${encodeURIComponent(environmentKey)}/publish`,
      { labels },
      {
        headers: {
          "X-SimpleLocalize-Token": apiKey,
          "X-SimpleLocalize-Client": CLIENT_NAME,
        },
      },
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const createEnvironment = async (apiKey: string, params: z.infer<typeof createEnvironmentParameters>) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v2/environments`, params, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getTranslationKeys = async (apiKey: string, params: z.infer<typeof getTranslationKeysParameters>) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/translation-keys`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
      params,
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const createTranslationKey = async (apiKey: string, params: z.infer<typeof createTranslationKeyParameters>) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/translation-keys`, params, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const deleteTranslationKey = async (apiKey: string, params: z.infer<typeof deleteTranslationKeyParameters>) => {
  try {
    const response = await axios.delete(`${BASE_URL}/api/v1/translation-keys`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
      params,
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const updateTranslationKeyById = async (
  apiKey: string,
  params: z.infer<typeof updateTranslationKeyByIdParameters>,
) => {
  try {
    const { id, ...body } = params;
    const response = await axios.patch(`${BASE_URL}/api/v1/translation-keys/${encodeURIComponent(id)}`, body, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getAllTranslationKeysV2 = async (
  apiKey: string,
  params: z.infer<typeof getAllTranslationKeysV2Parameters>,
) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v2/translation-keys/list`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
      params,
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const uploadTranslationKeyScreenshot = async (
  apiKey: string,
  params: z.infer<typeof uploadTranslationKeyScreenshotParameters>,
) => {
  try {
    const { key, namespace, base64 } = params;
    const response = await axios.post(
      `${BASE_URL}/api/v1/translation-keys/screenshots`,
      { base64 },
      {
        headers: {
          "X-SimpleLocalize-Token": apiKey,
          "X-SimpleLocalize-Client": CLIENT_NAME,
        },
        params: { key, namespace },
      },
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const uploadTranslationKeyScreenshotFile = async (
  apiKey: string,
  params: z.infer<typeof uploadTranslationKeyScreenshotFileParameters>,
) => {
  try {
    const { key, namespace, filePath } = params;
    const fileBuffer = readFileSync(filePath);
    const form = new FormData();
    form.append("file", new Blob([fileBuffer]), basename(filePath));

    const response = await axios.post(`${BASE_URL}/api/v1/translation-keys/screenshots/file-upload`, form, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
      params: { key, namespace },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const uploadTranslationKeyScreenshotsBulk = async (
  apiKey: string,
  params: z.infer<typeof uploadTranslationKeyScreenshotsBulkParameters>,
) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/translation-keys/screenshots/bulk`, params, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const updateTranslation = async (apiKey: string, params: z.infer<typeof updateTranslationParameters>) => {
  try {
    const response = await axios.patch(`${BASE_URL}/api/v2/translations`, params, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const updateTag = async (apiKey: string, params: z.infer<typeof updateTagParameters>) => {
  try {
    const { tagName, ...body } = params;
    const response = await axios.patch(`${BASE_URL}/api/v1/tags/${encodeURIComponent(tagName)}`, body, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const deleteTag = async (apiKey: string, params: z.infer<typeof deleteTagParameters>) => {
  try {
    const { tagName } = params;
    const response = await axios.delete(`${BASE_URL}/api/v1/tags/${encodeURIComponent(tagName)}`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getLanguage = async (apiKey: string, params: z.infer<typeof getLanguageParameters>) => {
  try {
    const { languageKey } = params;
    const response = await axios.get(`${BASE_URL}/api/v1/languages/${encodeURIComponent(languageKey)}`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const updateLanguage = async (apiKey: string, params: z.infer<typeof updateLanguageParameters>) => {
  try {
    const { languageKey, ...body } = params;
    const response = await axios.patch(`${BASE_URL}/api/v1/languages/${encodeURIComponent(languageKey)}`, body, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const deleteLanguage = async (apiKey: string, params: z.infer<typeof deleteLanguageParameters>) => {
  try {
    const { languageKey } = params;
    const response = await axios.delete(`${BASE_URL}/api/v1/languages/${encodeURIComponent(languageKey)}`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getCustomers = async (apiKey: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/customers`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const createCustomer = async (apiKey: string, params: z.infer<typeof createCustomerParameters>) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/customers`, params, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getCustomer = async (apiKey: string, params: z.infer<typeof getCustomerParameters>) => {
  try {
    const { customerKey } = params;
    const response = await axios.get(`${BASE_URL}/api/v1/customers/${encodeURIComponent(customerKey)}`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const updateCustomer = async (apiKey: string, params: z.infer<typeof updateCustomerParameters>) => {
  try {
    const { customerKey, ...body } = params;
    const response = await axios.patch(`${BASE_URL}/api/v1/customers/${encodeURIComponent(customerKey)}`, body, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const deleteCustomer = async (apiKey: string, params: z.infer<typeof deleteCustomerParameters>) => {
  try {
    const { customerKey } = params;
    const response = await axios.delete(`${BASE_URL}/api/v1/customers/${encodeURIComponent(customerKey)}`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const autoTranslateText = async (apiKey: string, params: z.infer<typeof autoTranslateTextParameters>) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/auto-translate`, params, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const createAutoTranslationJobs = async (
  apiKey: string,
  params: z.infer<typeof createAutoTranslationJobsParameters>,
) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v2/jobs/auto-translate`, params, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getAutoTranslationJobs = async (
  apiKey: string,
  params: z.infer<typeof getAutoTranslationJobsParameters>,
) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v2/jobs`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
      params,
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getAutoTranslationJob = async (
  apiKey: string,
  params: z.infer<typeof getAutoTranslationJobParameters>,
) => {
  try {
    const { jobId } = params;
    const response = await axios.get(`${BASE_URL}/api/v2/jobs/${encodeURIComponent(jobId)}`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const importTranslations = async (apiKey: string, params: z.infer<typeof importTranslationsParameters>) => {
  try {
    const { filePath, ...queryParams } = params;
    const fileBuffer = readFileSync(filePath);
    const form = new FormData();
    form.append("file", new Blob([fileBuffer]), basename(filePath));

    const response = await axios.post(`${BASE_URL}/api/v2/import`, form, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
      params: queryParams,
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const exportTranslations = async (apiKey: string, params: z.infer<typeof exportTranslationsParameters>) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v4/export`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
      params,
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getFileFormats = async (apiKey: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/file-formats`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getActivity = async (apiKey: string, params: z.infer<typeof getActivityParameters>) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/activity`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
      params,
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getActivityChanges = async (apiKey: string, params: z.infer<typeof getActivityChangesParameters>) => {
  try {
    const { activityId } = params;
    const response = await axios.get(`${BASE_URL}/api/v1/activity/${encodeURIComponent(activityId)}/changes`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getProjectDetails = async (apiKey: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v2/project`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getGlossaryEntries = async (apiKey: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/glossary`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const createGlossaryEntry = async (apiKey: string, params: z.infer<typeof createGlossaryEntryParameters>) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/glossary`, params, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const deleteGlossaryEntry = async (apiKey: string, params: z.infer<typeof deleteGlossaryEntryParameters>) => {
  try {
    const { sourceText } = params;
    const response = await axios.delete(`${BASE_URL}/api/v1/glossary`, {
      headers: {
        "X-SimpleLocalize-Token": apiKey,
        "X-SimpleLocalize-Client": CLIENT_NAME,
      },
      params: { sourceText },
    });
    return response?.data;
  } catch (error) {
    return error;
  }
};
