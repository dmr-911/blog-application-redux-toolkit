import axiosInstance from "../../axios/axiosInstance";

const fetchBlogsAPI = async ({ sort, filter }) => {
  let sortQuery = "";
  let filterQuery = "";
  if (sort === "createdAt") sortQuery += `_sort=createdAt&_order=desc`;
  if (sort === "most_liked") sortQuery += `_sort=likes&_order=desc`;
  if (filter === "Saved") filterQuery += `isSaved=true`;

  let joinStrArr = [];
  if (sortQuery) {
    joinStrArr.push(sortQuery);
  }
  if (filterQuery) {
    joinStrArr.push(filterQuery);
  }

  const finalQuery =
    joinStrArr.length > 1 ? joinStrArr.join("&") : sortQuery || filterQuery;

  const { data } = await axiosInstance.get(`blogs/?${finalQuery}`);
  return data;
};

export default fetchBlogsAPI;
