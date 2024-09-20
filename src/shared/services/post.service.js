const { post, get } = require("../core/requests");

export const postComment = async (data) => {
  try {
    const res = await post(`/comm/create/`, { data });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getComments = async (data) => {
  try {
    const res = await get(`/comm/cs`, { data });
    return res;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (data) => {
  try {
    const res = await post(`/post/ps`, { data });
    return res;
  } catch (error) {
    throw error;
  }
};
