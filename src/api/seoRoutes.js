import axios from "axios";
import axiosInstance from "./axiosInstance";

export const addSeoMeta = async (data) => {
  try {
    const response = await axiosInstance.post("/api/seo/meta", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const updateSeoMeta = async (page, data) => {
  try {
    const response = await axiosInstance.put(`/api/seo/meta/${page}`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getSeoMeta = async () => {
  try {
    const response = await axiosInstance.get("/api/seo/meta");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSeoMetaByPage = async (page) => {
  try {
    const response = await axiosInstance.get(
      `/api/seo/meta/${page}`
    );

    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const deleteSeoMeta = async (page) => {
  try {
    const response = await axiosInstance.delete(`/api/seo/meta/${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRobotsTxt = async () => {
  try {
    const response = await axiosInstance.get("/api/seo/robots.txt");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateRobotsTxt = async (content) => {
  try {
    const response = await axiosInstance.post("/api/seo/robots.txt", {
      content,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSitemapXml = async () => {
  try {
    const response = await axiosInstance.get("/sitemap.xml");
    return response.data;
  } catch (error) {
    throw error;
  }
};