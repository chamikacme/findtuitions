import axios from "axios";

const API_URL = "/api/teachers/";

//Get Teachers/ Add Teachers filter
const getTeachers = async (filterData) => {
  const response = await axios.post(API_URL, filterData);
  return response.data;
};

//Get Teacher profile
const getTeacher = async (username) => {
  const response = await axios.post(API_URL + username);
  return response.data;
};

//check Teacher username
const checkUserName = async (usernameData) => {
  const response = await axios.post(API_URL + "checkusername", usernameData);
  return response.data;
};

const teacherService = {
  getTeachers,
  getTeacher,
  checkUserName,
};

export default teacherService;
