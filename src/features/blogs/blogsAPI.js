import axiosInstance from "../../axios/axiosInstance";

const fetchBlogsAPI = async () => {
  const { data } = await axiosInstance.get("blogs");
  return data;
};

export default fetchBlogsAPI;
