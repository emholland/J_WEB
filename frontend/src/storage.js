// utils/storage.js
export function setCache(key, data, ttlMinutes = 10) {
  const expiry = new Date().getTime() + ttlMinutes * 60 * 1000;
  const value = { data, expiry };
  localStorage.setItem(key, JSON.stringify(value));
}

export function getCache(key) {
  const value = localStorage.getItem(key);
  if (!value) return null;

  try {
    const { data, expiry } = JSON.parse(value);
    if (new Date().getTime() > expiry) {
      localStorage.removeItem(key);
      return null; // expired
    }
    return data;
  } catch (e) {
    localStorage.removeItem(key);
    return null; // corrupt
  }
}
