import axios from "axios";
import {create} from "zustand"

export const useRegister = create((set) => ({
  post: [],
  loading: false,
  error: "",
  postRegister: async (data:any) => {
    set({ loading: true });
    try {
      const res = await axios.post(
        "http://207.154.221.44:4002/api/register",
        data
      );
      if (res.status === 201) {
        localStorage.setItem("token", `Bearer ${res.data.data}`)
        return true;
      }
      set({ loading: false });
    } catch (error) {
      console.log(error);
      set({ error: "Произошла ошибка при регистрации" });
    }
  },
}));
