// src/utils.js
export const getUser = (email) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find((user) => user.email === email);
};

export const setUser = (user) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};
