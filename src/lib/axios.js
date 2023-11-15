import axios from "axios"

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  timeout: import.meta.env.VITE_SPA_REQUEST_TIMEOUT,
  withCredentials: true
})

axiosInstance.interceptors.request.use(function (config) {
  let cookiesArray = document.cookie.split(";")
  let xsrfTokenCookieArray = cookiesArray.filter((cookieStr) => cookieStr.split("=")[0] === "XSRF-TOKEN")

  if (xsrfTokenCookieArray.length) {
    let encodedXsrfToken = xsrfTokenCookieArray[0].split("=")[1]
    config.headers["X-XSRF-TOKEN"] = decodeURIComponent(encodedXsrfToken)
  }

  return config
})

export default axiosInstance
