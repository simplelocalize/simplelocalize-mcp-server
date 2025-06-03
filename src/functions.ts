import { z } from "zod";
import axios from "axios";
import {
  createTranslationKeyBulkParameters,
  updateTranslationKeyParameters,
  updateTranslationsBulkParameters,
  getTranslationKeyDetailsParameters,
  createTagParameters,
  getTranslationsParameters,
  createLanguageParameters,
} from "./parameters.js";

const BASE_URL = "https://api.simplelocalize.io";
const CLIENT_NAME = "mcp-server";

export const createTranslationKeyBulk = async (apiKey: string, params: z.infer<typeof createTranslationKeyBulkParameters>) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/translation-keys/bulk`,
      params,
      {
        headers: {
          "X-SimpleLocalize-Token": apiKey,
          "X-SimpleLocalize-Client": CLIENT_NAME,
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const updateTranslationsBulk = async (apiKey: string, params: z.infer<typeof updateTranslationsBulkParameters>) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/api/v2/translations/bulk`,
      params,
      {
        headers: {
          "X-SimpleLocalize-Token": apiKey,
          "X-SimpleLocalize-Client": CLIENT_NAME,
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getAllTranslationKeys = async (apiKey: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/translation-keys/list`,
      {
        headers: {
          "X-SimpleLocalize-Token": apiKey,
          "X-SimpleLocalize-Client": CLIENT_NAME,
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getTranslationKeyDetails = async (apiKey: string, params: z.infer<typeof getTranslationKeyDetailsParameters>) => {
  try {
    const { key, namespace } = params;
    const response = await axios.get(
      `${BASE_URL}/api/v1/translation-keys/details?key=${encodeURIComponent(key)}${namespace ? `&namespace=${encodeURIComponent(namespace)}` : ""}`,
      {
        headers: {
          "X-SimpleLocalize-Token": apiKey,
          "X-SimpleLocalize-Client": CLIENT_NAME,
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getTags = async (apiKey: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/tags`,
      {
        headers: {
          "X-SimpleLocalize-Token": apiKey,
          "X-SimpleLocalize-Client": CLIENT_NAME,
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const createTag = async (apiKey: string, params: z.infer<typeof createTagParameters>) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/tags`,
      params,
      {
        headers: {
          "X-SimpleLocalize-Token": apiKey,
          "X-SimpleLocalize-Client": CLIENT_NAME,
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getLanguages = async (apiKey: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/languages`,
      {
        headers: {
          "X-SimpleLocalize-Token": apiKey,
          "X-SimpleLocalize-Client": CLIENT_NAME,
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getTranslations = async (apiKey: string, params: z.infer<typeof getTranslationsParameters>) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v2/translations`,
      {
        headers: {
          "X-SimpleLocalize-Token": apiKey,
          "X-SimpleLocalize-Client": CLIENT_NAME,
        },
        params,
      }
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const createLanguage = async (apiKey: string, params: z.infer<typeof createLanguageParameters>) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/languages`,
      params,
      {
        headers: {
          "X-SimpleLocalize-Token": apiKey,
          "X-SimpleLocalize-Client": CLIENT_NAME,
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};
