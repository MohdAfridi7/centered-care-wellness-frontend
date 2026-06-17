import axios from "axios";
import axiosInstance from "./axiosInstance";

export const createContact = async ({ data }) => {
  try {
    const response = await axiosInstance.post(`/api/contact/create`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getAllContacts = async () => {
  try {
    const response = await axiosInstance.get("/api/contact/all");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/contact/delete/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};