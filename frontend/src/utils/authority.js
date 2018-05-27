export function getAuthority() {
  return localStorage.getItem('authority');
}

export function setAuthority(authority) {
  return localStorage.setItem('authority', authority);
}

export function clearAuthority() {
  localStorage.removeItem("authority");
}
