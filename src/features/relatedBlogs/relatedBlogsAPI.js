import axiosInstance from "../../axios/axiosInstance";

const fetchRelatedBlogsAPI = async ({ blogId, tags }) => {
  let query = "";

  if (tags?.length) query += tags?.map((tag) => `tags_like=${tag}`).join("&");

  const { data } = await axiosInstance.get(`blogs/?${query}&id_ne=${blogId}`);
  return data;
};

export default fetchRelatedBlogsAPI;
