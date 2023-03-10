import axiosInstance from "../../axios/axiosInstance";

const fetchBlogsAPI = async () => {
  const blogs = await axiosInstance.get("blogs");
  return blogs;
};

export default fetchBlogsAPI;
