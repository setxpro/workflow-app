import axios from "axios";
import { toast } from "react-toastify";

const uri = axios.create({
  baseURL: `${import.meta.env.VITE_APP_TALK}`,
  headers: { 
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzcxNjAyMzgsImV4cCI6MTcwNTk2MDIzOH0.KMWOXSeliis7dE_sYgikXFAvoObOTglpqblsKrIcrdk`
   }
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
       return toast.error(error.response.data.message)
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
    } catch (error:any) {
      return toast.error(error.response.data.message)
    }
  },
  forgetPwd: async (user: string, phonenumber: string) => {
    try {
      const { data } = await uri.post(`/forgetpass`, {
        user,
        phonenumber,
      });
      return data;
    } catch (error:any) {
      return toast.error(error.response.data.message)
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
      return toast.error(error.response.data.message)
    }
  },

  findOneUser: async (id: string) => {
    try {
      const { data } = await uri.get(`/user/find-one/${id}`)
      return data;
    } catch (error:any) {
      return toast.error(error.response.data.message)
    }
  },

  // Find user
  findOneAll: async (id: string) => {},
  

  // Find Titles and response 
  
  findAllTitles: async (id: string) => {
    try {
      const { data } = await uri.get(`/workflow/find-all-titles/${id}`)
      return data;
    } catch (error:any) {
      return toast.error(error.response.data.message)
    }
  }

});
