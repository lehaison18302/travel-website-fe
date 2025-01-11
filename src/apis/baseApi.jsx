import axios from "axios";
import apiEndpoints from "./endpoint";

export const getApi = async (endpointKey) => {
  try {
    const url = apiEndpoints[endpointKey];
    if (!url) {
      console.error(`Endpoint "${endpointKey}" không tồn tại trong apiEndpoints`);
    }
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error calling API for ${endpointKey}:`, error);
    throw error;
  }
};

export const postApi = async (endpointKey, data) => {
  try {
    const url = apiEndpoints[endpointKey];
    if (!url) {
      console.error(`Endpoint "${endpointKey}" không tồn tại trong apiEndpoints`);
    }
    const response = await axios.post(url, data)
    return response.data
  } catch (error) {
    console.error("Error calling addLocation API:", error);
    throw error;
  }
};

export const putApi = async (endpointKey, updatedData) => {
  try {
    const url = apiEndpoints[endpointKey];
    if (!url) {
      console.error(`Endpoint "${endpointKey}" không tồn tại trong apiEndpoints`);
    }
    const response = await axios.put(url, updatedData); // 'locations' cần có trong apiEndpoints
    return response.data;
  } catch (error) {
    console.error("Error calling updateLocation API:", error);
    throw error;
  }
};

export const deleteApi = async (endpointKey) => {
  try {
    const url = apiEndpoints[endpointKey];
    if (!url) {
      console.error(`Endpoint "${endpointKey}" không tồn tại trong apiEndpoints`);
    }
    const response = await axios.delete(url); // 'locations' cần có trong apiEndpoints
    return response.data;
  } catch (error) {
    console.error("Error calling deleteLocation API:", error);
    throw error;
  }
};
