import { z } from "zod";
import axios from "axios";
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
