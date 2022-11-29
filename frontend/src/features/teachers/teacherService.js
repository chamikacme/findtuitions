import axios from "axios";

const API_URL = "/api/teachers/";

//Get Teachers
const getTeachers = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

//Add Teachers filter
const addFilter = async (filterData) => {
  //const response = await axios.get("/api/teachers/", { subject: 'Bio' });
  const response = await axios.post(API_URL, filterData);
  console.log(response.data);
  return response.data;
};

const teacherService = {
  getTeachers,
  addFilter,
};

export default teacherService;
