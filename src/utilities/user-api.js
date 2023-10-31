import sendRequest from "./send-request";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const BASE_URL = `${BACKEND_URL}/users`;

export async function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
