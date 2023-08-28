// localStorageUtils.js

// Get user data from localStorage
export const getUserDataFromLocalStorage = () => {
  const userData = localStorage.getItem("userData");
  console.log('userData ::',JSON.parse(userData));
  return userData ? JSON.parse(userData) : null;
};

// Save user data to localStorage
export const saveUserDataToLocalStorage = (userData) => {
  localStorage.setItem("userData", JSON.stringify(userData));
};

// Remove user data from localStorage
export const removeUserDataFromLocalStorage = () => {
  localStorage.removeItem("userData");
};
