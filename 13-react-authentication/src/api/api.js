import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/",
    withCredentials: true
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error);
})

api.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                console.log("Refreshing access token...");
                const refreshResponse = await axios.post(
                    "http://localhost:5000/api/auth/refresh",
                    {}, // No body needed
                    {
                        withCredentials: true
                    }
                );
                const newAccessToken = refreshResponse.data.accessToken;
                localStorage.setItem("token", newAccessToken);
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                console.log("Retrying original request...");
                return api(originalRequest);
            } catch (refreshError) {
                console.log("Refresh token expired");
                localStorage.clear();
                window.location.href = "/login";
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);

    }
);

export default api;