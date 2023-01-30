import { MAIN_DOMAIN_URL } from "../config";
import { AUTH_ERROR_CODE } from "../constant";

class HttpService {
  static async get(
    url: string,
    options: { authToken?: string; controller?: AbortController } = {}
  ) {
    // const req = await fetch(url);
    // return req.json();
    const myHeaders = new Headers();
    if (options.authToken)
      myHeaders.append("Authorization", `Bearer ${options.authToken}`);

    const requestOptions = {
      headers: myHeaders,
      signal: options.controller ? options.controller.signal : undefined,
    };

    const res = await fetch(url, requestOptions);
    if (res.status >= 200 && res.status < 300) {
      // Success Case
      return res.json();
    }
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const errorObject = await res.json();
      throw errorObject;
    } else {
      throw new Error(await res.text());
    }
  }

  static async post(
    url: string,
    data: any,
    options: {
      method: string;
      authToken?: string;
      controller?: AbortController;
    } = {
      method: "POST",
    }
  ) {
    const myHeaders = new Headers();
    if (options.authToken)
      myHeaders.append("Authorization", `Bearer ${options.authToken}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data);

    const requestOptions = {
      method: options.method || "POST",
      headers: myHeaders,
      body: raw,
      signal: options.controller ? options.controller.signal : undefined,
    };

    const res = await fetch(url, requestOptions);
    if (res.status >= 200 && res.status < 300) {
      // Success Case
      return res.json();
    }
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const errorObject = await res.json();
      if (errorObject.data === AUTH_ERROR_CODE)
        window.location.replace(`${MAIN_DOMAIN_URL}/logout`);

      throw errorObject;
    } else {
      throw new Error(await res.text());
    }
  }
}

export default HttpService;
