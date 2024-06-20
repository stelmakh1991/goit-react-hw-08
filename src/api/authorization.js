import instance from "./instance";

export const apiRegister = async (formData) => {
  const data = await instance.post("/users/signup", formData);
  return data;
};

export const apiLogin = async (formData) => {
  console.log(formData);
  const data = await instance.post("/users/login", formData);
  return data;
};

export const apiLogOut = async () => {
  const data = await instance.post("/users/logout");
  return data;
};

export const apiRefreshUser = async () => {
  const data = await instance.get("/users/current");
  return data;
};