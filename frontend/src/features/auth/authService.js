import axios from "axios";

const API_URL = "/api/teachers/";

//Register Teacher
const register = async (teacherData) => {
  const response = await axios.post(API_URL + "register", teacherData);

  if (response.data) {
    localStorage.setItem("teacher", JSON.stringify(response.data));
  }

  return response.data;
};

//Login Teacher
const login = async (teacherData) => {
  const response = await axios.post(API_URL + "login", teacherData);

  if (response.data) {
    localStorage.setItem("teacher", JSON.stringify(response.data));
  }

  return response.data;
};

//Logout teacher
const logout = () => {
  localStorage.removeItem("teacher");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
