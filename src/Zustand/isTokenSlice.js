import {create} from "zustand";

const isTokenSlice = create((set) => {
  const isToken = localStorage.getItem("token") || false;

  return {
    isToken,

    createAccountSlice: (token) => {
      localStorage.setItem("token", token);
      set({isToken: true});
    },
  };
});
export default isTokenSlice;
