import axiosInstance from "../../axios/axiosInstance";

const fetchBlogAPI = async ({ id }) => {
  const { data } = await axiosInstance.get(`blogs/${id}`);
  return data;
};

export default fetchBlogAPI;
