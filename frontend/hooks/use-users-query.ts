"use client"
import { LoginFormTypes, RegisterFormTypes, AddMenuTypes } from "@/utils/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// export const useUserRegisterQuery = () => {
//     return useMutation({
//         mutationFn: async (newUser: RegisterFormTypes) => {
//             const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`, newUser);
//             return res;
//         },
//     });  
// };
export const useUserLoginQuery = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  console.log("API Base URL:", baseUrl); // Log the base URL

  return useMutation({
    mutationFn: async (userInfo: LoginFormTypes) => {
      const res = await axios.post(`${baseUrl}/api/auth/login`, userInfo, {
        withCredentials: true,
      });
      return res.data; // Return res.data for easier access later
    },
  });
};


export const useAddMenuQuery = () => {
  return useMutation({
    mutationFn: async (newMenu: AddMenuTypes) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/menu`, newMenu );
      return res;
    },
  });
};


// export const useUserLogoutQuery = () => {
//     return useMutation({
//         mutationFn: async () => {
//             const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/logout`, { withCredentials: true });
//             return res;
//         },
//     });
// };

export const useOrderQuery = () => {
    return useQuery({
        queryKey: ['orderList'],
        queryFn: async () => {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/order-list`, {
                withCredentials: true,
            });
            return res
        },
    });
};

export const useChangeOrderStatusQuery = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ orderId, newStatus }: { orderId: string; newStatus: string }) => {
            const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/status/${orderId}`;
            const payload = {
                status: newStatus,
            };
            const res = await axios.put(url, payload, {
                withCredentials: true,
            });
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['orderList'] });
        },
    });
};

export const useDeleteOrderQuery = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => {
            return axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${id}`, { withCredentials: true });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['orderList'] });
        },
    });
};

export const useChangeRoleStatusQuery = () => {
  const queryClient = useQueryClient();
   return useMutation({
     mutationFn: async ({
       roleId,
       newStatus,
     }: {
       roleId: string;
       newStatus: string;
     }) => {
       const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/status/${roleId}`;
       const payload = {
         status: newStatus,
       };
       const res = await axios.put(url, payload, {
         withCredentials: true,
       });
       return res.data;
     },
     onSuccess: () => {
       queryClient.invalidateQueries({ queryKey: ["role"] });
     },
   });
};
