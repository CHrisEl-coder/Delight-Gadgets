import apiRequest from "@/api/apiRequest";

const login = process.env.NEXT_PUBLIC_LOGIN_URL
const signup = process.env.NEXT_PUBLIC_REGISTER_URL
console.log("login url ", login, "signup urls ", signup)

export const Signup = (data) => {
    if(!signup) {
        throw new Error("signup url invalid")
    }
  const response = apiRequest.post('register', data);
  return response;
};

export const Login = (data) => {
         if(!login) {
        throw new Error("login url invalid")
    }
  const response = apiRequest.post('login', data);
  return response;

};


