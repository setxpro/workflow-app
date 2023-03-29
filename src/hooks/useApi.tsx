import axios from "axios";
import { toast } from "react-toastify";

const uri = axios.create({
  baseURL: `${import.meta.env.VITE_APP_TALK}`,
});

export const useApi = () => ({

  // Authentications
  signIn: async (login: string, password: string) => {
    try {
      const { data } = await uri.post(`/auth/signin`, {
        login,
        password,
      });
      return data;
    } catch (error:any) {
       return toast.error(error.request.data.message);
    }
  },
  firstLogin: async (user: string, password: string, newPassword: string, passwordConfirm: string) => {
    try {
      const { data } = await uri.post(`/firstlogin`, {
        user,
        password,
        newPassword,
        passwordConfirm
      });
      return data;
    } catch (error) {
        console.log(error)
    }
  },
  forgetPwd: async (user: string, phonenumber: string) => {
    try {
      const { data } = await uri.post(`/forgetpass`, {
        user,
        phonenumber,
      });
      return data;
    } catch (error) {
        console.log(error)
    }
  },
  updatePws: async (user: string, passwordEmail: string, newPassword: string, passwordConfirm: string) => {
    try {
      const { data } = await uri.post(`/signup`, {
        user,
        passwordEmail,
        newPassword,
        passwordConfirm,
      });
      return data;
    } catch (error: any) {
        // toast.error(error.response.data.message)
        console.log(error)
    }
  },

  // Find user
  findOneAll: async (id: string) => {},
  findOneUser: async () => {},

  // Find Titles and response 
  
  findAllTitles: async (id: string) => {
    try {
      const { data } = await uri.get(`/find-all-titles/${id}`)
      return data;
    } catch (error) {
        console.log(error);
    }
  }

});
