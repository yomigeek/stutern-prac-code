export const getToken = () => {
  const token = localStorage.getItem("x-access-token");
  if (token) {
    return token;
  }
  return null;
};
