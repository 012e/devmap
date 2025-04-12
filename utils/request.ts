
const API_DOMAIN = "http://localhost:3020/";


export const get = async (path: string) => {
  const response = await fetch(API_DOMAIN + path);
  const result = await response.json();
  return result;
}

export const post = async <T>(path: string, data: unknown): Promise<T> => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error(`POST ${path} failed`);
  }
  return await response.json();
};

export const del = async <T>(path: string): Promise<T> => {
  const response = await fetch(API_DOMAIN + path, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`DELETE ${path} failed`)
  }
  return await response.json();
};

export const patch = async <T>(path: string, data: unknown): Promise<T> => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error(`PATCH ${path} failed`)
  }
  return await response.json();
};
