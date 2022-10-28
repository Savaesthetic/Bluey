import api from "../api";

export const handleUserLogin = (user) => api.post("/users/login", user);

export const handleUserRegistration = (user) =>
  api.post("/users/register", user);
