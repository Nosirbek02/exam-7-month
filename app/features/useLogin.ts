import axios from "axios";
import { create } from "zustand";


export const useLogin = create((set) => ({
    post: [],
    loading: false,
    error: "",
    postLogin: async (data:any) => {
      set({ loading: true });
      try {
        const res = await axios.post(
          "http://207.154.221.44:4002/api/login",
          data
        );
        if (res.status === 201) {
          return true;
        }
        set({ loading: false });
      } catch (error) {
        console.log(error);
        set({ error: "Произошла ошибка при регистрации" });
      }
    },
}));