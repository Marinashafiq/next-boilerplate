// Service to check authentication for user and to signOut
const Auth = {
  signOut() {
    localStorage.clear("");
  },
  isAuth() {
    return localStorage.getItem("token");
  },
};
export default Auth;
