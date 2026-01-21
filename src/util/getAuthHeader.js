export const getAuthToken = () => {
    const jwt = localStorage.getItem("jwt")
    if (!jwt) {
        throw new Error("No Jwt token found")
    }
    return jwt;
}

export const getAuthHeaders = () => {
    const jwt = localStorage.getItem("jwt");
    return jwt
      ? { Authorization: `Bearer ${jwt}` }
      : {};
};
