import axios from "axios";
import qs from "qs";

const axiosClient = axios.create({
  baseURL: "https://elearning0706.cybersoft.edu.vn/api",
  // Tu cau hinh cach lay params mac dinh cua axios
  // Bo qua gia tri null va undefined trong params
  paramsSerializer: (params) => qs.stringify(params, { skipNulls: true }),
});

axiosClient.interceptors.request.use(
  (config) => {
    // Xu ly truoc khi request duoc gui len server
    // Them Authorization vao header
    const useInfo = localStorage.getItem("useInfo");

    if (useInfo) {
      const { accessToken } = JSON.parse(useInfo);
      config.headers.Authorrization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    // Xu ly khi request bi loi
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response)=>{
    // xu ly ket qua tra ve tu sẻver
    return (response)
  },
  (error)=>{
    // xu ly neu ket qua tra ve bi loi
    if(error.status === 401){
      // Xu ly logout: clear localStorage, day nguoi dung ve trang login
    }
    if(error.status === 500){
      // Xu ly thong bao cho nguoi server dang bi loi
    }
  }
)

export default axiosClient;
