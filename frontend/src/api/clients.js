import axios from "axios";
import { API } from "./consts";

export const fetchClients = async () => {
    try {
      const response = await axios.get(`${API}/clients`);
      return response.data;
    } catch (error) {
      console.error("Error fetching clients:", error);
      throw error;
    }
  };
  
  export const fetchClientById = async (id) => {
    try {
      const response = await axios.get(`${API}/clients/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching client:", error);
      throw error;
    }
  };
  
  export const createClient = async (clientData) => {
    try {
      const response = await axios.post(`${API}/clients`, clientData);
      return response.data;
    } catch (error) {
      console.error("Error creating client:", error);
      throw error;
    }
  };
  
  export const updateClient = async (id, clientData) => {
    try {
      const response = await axios.put(`${API}/clients/${id}`, clientData);
      return response.data;
    } catch (error) {
      console.error("Error updating client:", error);
      throw error;
    }
  };
  
  export const deleteClient = async (id) => {
    try {
      const response = await axios.delete(`${API}/clients/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting client:", error);
      throw error;
    }
  };