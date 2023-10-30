import { jwtDecode } from 'jwt-decode';

// helper functions
export const getUserIdFromToken = (token) => jwtDecode(token).user_id;

export const getUserNameFromToken = (token) => jwtDecode(token).username;

export const setLocalStorageAuth = (token) => {
  localStorage.setItem('authKey', token);
};

export const getLocalStorageAuth = () => localStorage.getItem('authKey');
