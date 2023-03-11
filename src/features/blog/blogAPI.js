import axiosInstance from "../../axios/axiosInstance";

export const fetchBlogAPI = async ({ id }) => {
  const { data } = await axiosInstance.get(`blogs/${id}`);
  return data;
};
export const updateBlogAPI = async ({ id, totalLikes }) => {
  const { data } = await axiosInstance.patch(`blogs/${id}`, {
    likes: totalLikes,
  });

  return data;
};
export const updateBlogSavedAPI = async ({ id, isSaved }) => {
  const { data } = await axiosInstance.patch(`blogs/${id}`, {
    isSaved: !isSaved,
  });

  return data;
};
