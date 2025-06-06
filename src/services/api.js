const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export async function fetchWelcome() {
  const response = await fetch(`${API_URL}/welcome`);
  return response.json();
}