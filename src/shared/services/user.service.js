const { post } = require("../core/requests");

export const postLogin = async (data) => {
  try {
    const res = await post(`/accounts/login/`, { data });
    return res;
  } catch (error) {
    throw error;
  }
};

export const postRegister = async (data) => {
  try {
    const res = await post(`/accounts/register`, { data });
    return res;
  } catch (error) {
    throw error;
  }
};

