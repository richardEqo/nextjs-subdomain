import { ROOT_URL } from "../config";
import { AUTH_TOKEN } from "../constant";
import HttpService from "./HttpService";

class ApiService {
  static getURL(path: string) {
    return `${ROOT_URL}${path}`;
  }
  static async getUserProfile() {
    const authToken = localStorage.getItem(AUTH_TOKEN) || "";
    return HttpService.post(
      `${ROOT_URL}/api/user`,
      {},
      {
        method: "POST",
        authToken,
      }
    );
  }
}
export default ApiService;
