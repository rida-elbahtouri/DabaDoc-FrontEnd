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

export const getQuestions = (token, coord = null) => {
  return Axios.get(`${baseUrl}/questions/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      lat: coord ? coord[0] : null,
      long: coord ? coord[1] : null,
    },
  });
};

export const getAnswers = (token, question_id) => {
  return Axios.get(`${baseUrl}/questions/${question_id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const CreateQuestion = (token, question) => {
  return Axios.post(
    `${baseUrl}/questions/`,
    {
      question,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const AddAnswer = (token, answer) => {
  return Axios.post(
    `${baseUrl}/answers/`,
    {
      answer,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getUserData = (token) => {
  return Axios.get(`${baseUrl}/activeUser/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getFavoriteQuestions = (token) => {
  return Axios.get(`${baseUrl}/favorites/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const AddToFav = (token, question_id) => {
  return Axios.post(
    `${baseUrl}/favorites/`,
    {
      favorite: {
        question_id,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const removeFromFav = (token, question_id) => {
  return Axios.delete(`${baseUrl}/favorites/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      question_id,
    },
  });
};
