import axios from "axios";
import { useState } from "react";

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
  return response.data;
};

//Get Teacher profile
const getTeacher = async (username) => {
  //const response = await axios.get("/api/teachers/", { subject: 'Bio' });
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
  addFilter,
  checkUserName,
};

export default teacherService;
