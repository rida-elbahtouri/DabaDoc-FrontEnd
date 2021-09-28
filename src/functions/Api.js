import Axios from "axios";

export const baseUrl = "http://localhost:3000";

export const login = ({ email, password }) => {
  return Axios.post(`${baseUrl}/users/sign_in`, {
    user: {
      email: email,
      password: password,
    },
  });
};

export const signUp = ({ email, password }) => {
  return Axios.post(`${baseUrl}/users`, {
    user: { email: email, password: password },
  });
};

export const checkToken = (token) => {
  return Axios.get(`${baseUrl}/checkToken`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
