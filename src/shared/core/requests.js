import { getAccessToken } from "../core/storage";

const API_BASE_URL = process.env.REACT_APP_BASE_URL;
const DEFAULT_INCLUDE_AUTH_TOKEN = true;

async function handleResponse(response) {
  if (!response.ok) {
    const resp = await response.json();
    const error = new Error(resp.message);

    if (response.status === 401) {
      error.message = "Unauthorized";
    }

    throw error;
  }

  return response.json();
}

async function request(
  url,
  {
    method = "GET",
    data = null,
    headers = {},
    includeAuthToken = DEFAULT_INCLUDE_AUTH_TOKEN,
  } = {}
) {
  const authToken = includeAuthToken ? getAccessToken() : null;

  const response = await fetch(`${API_BASE_URL}${url}`, {
    method,
    headers: authToken
      ? {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": data ? "multipart/form-data" : undefined,
          ...headers,
        }
      : {
          "Content-Type": data ? "multipart/form-data" : undefined,
          ...headers,
        },
    body: data ? createFormData(data) : undefined,
  });

  return handleResponse(response);
}

const createFormData = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => formData.append(key, data[key]));
  return formData;
};

export const get = (url, options) =>
  request(url, { method: "GET", ...options });
export const post = (url, options) =>
  request(url, { method: "POST", ...options });
export const patch = (url, options) =>
  request(url, { method: "PATCH", ...options });
export const put = (url, options) =>
  request(url, { method: "PUT", ...options });
export const del = (url, options) =>
  request(url, { method: "DELETE", ...options });
