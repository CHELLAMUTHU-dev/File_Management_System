import Cookies from "js-cookie";

export const setToken = (token) => {
  Cookies.set("token", token, {
    expires: 1,
  });
};

export const getToken = () => Cookies.get("token");

export const logout = () => Cookies.remove("token");
