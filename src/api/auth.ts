const API_URL = "http://localhost:5200";

export const register = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  return response.json();
};

export const login = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  const data = await response.json();
  if (response.ok) {
    localStorage.setItem("token", data.token.trim());
  }

  return data;
};

export const getProfile = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/user/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token?.trim()}`,
    },
    credentials: "include",
  });

  return response.json();
};
