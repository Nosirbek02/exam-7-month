import { create } from "zustand";
import axios from "axios";

export const useGetdata = create ((set)=>({
    posts:[],
    loading:false,
    error:""  ,
    postGet: async()=>{
        set({loading:true});
        try {
            const res = await axios.get(("http://207.154.221.44:4002/api/dishes"))
            set({posts:(res.data.data.data), loading:false})
            
        } catch (error) {
            console.log(error)
        }
    }  
}))