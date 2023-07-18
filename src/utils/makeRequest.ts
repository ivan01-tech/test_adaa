import { AxiosRequestConfig, AxiosResponse } from "axios";
import api from "../api/axios";

/**
 *	a function to make any kind og resquest with the  axios instance
 * @param {string} url
 * @param {import("axios").AxiosRequestConfig} options
 * @returns
 */

async function makeRequest(
  url: string,
  options: AxiosRequestConfig<ResponseTypeProducts>
) {
  return api(url, options)
    .then((res: AxiosResponse<ResponseTypeProducts>) => {
      const d = res.data;
      // TODO delete it
      console.log("d : ", d, url);
      
      return d;
    })
    .catch((err) => {
      console.log("eror : ", err);
      return err;
    });
}

export default makeRequest;
