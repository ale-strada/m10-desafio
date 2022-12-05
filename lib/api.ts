const API_BASE_URL = "https://api-m9-vercel-ige5.vercel.app/api";

export async function fetchAPI(api: RequestInfo, options: any) {
  const url = API_BASE_URL + api;

  const token = getSavedToken();

  const newOptions: any = options || {};
  newOptions.headers = newOptions.headers || {};
  newOptions.headers["Content-type"] = "application/json";

  if (token) {
    newOptions.headers.Authorization = "Bearer " + token;
  }

  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  console.log(newOptions);

  try {
    const res = await fetch(url, newOptions);

    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      console.log(data, "fetch");
      return data;
    } else {
      throw {
        message: "Hubo un error en la función fetchAPI",
        status: res.status,
      };
    }
  } catch (err) {
    console.log(err);
  }
}
export async function fetchBFF(api: RequestInfo, options: any) {
  const url = api;

  const newOptions: any = options || {};
  newOptions.headers = newOptions.headers || {};
  newOptions.headers["Content-type"] = "application/json";

  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  try {
    const res = await fetch(url, newOptions);

    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      return data;
    } else {
      throw {
        message: "Hubo un error en la función fetchAPI",
        status: res.status,
      };
    }
  } catch (err) {
    console.log(err);
  }
}

export async function sendCode(email: string) {
  return fetchAPI("/auth", {
    method: "POST",
    body: { email },
  });
}
export async function getToken(email: string, code: string) {
  const data = await fetchAPI("/auth/token", {
    method: "POST",
    body: { code: parseInt(code), email },
  });
  saveToken(data);
  return true;
}

export function saveToken(token: string) {
  localStorage.setItem("auth-token", token);
}

export function getSavedToken() {
  const token = localStorage.getItem("auth-token");
  return token;
}
