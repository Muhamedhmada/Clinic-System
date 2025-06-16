import {create} from "zustand";

const isLoginSlice = create((set) => {
  const isLogin = localStorage.getItem("newAcc") || false;

  return {
    isLogin,

    createAccountSlice: (data) => {
      localStorage.setItem("newAcc", JSON.stringify(data));
      set({isLogin: true});
    },
  };
});
export default isLoginSlice;
