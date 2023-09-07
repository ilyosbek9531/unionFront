import { useMutation } from "react-query";
import { requestUnionAuth } from "./http-client";

const authService = {
  register: (data) => requestUnionAuth.post(`/generate_otp`, data),
  verifyOtp: (data) => requestUnionAuth.post("/verify_otp", data),
};

export const UseAuth = (mutationSettings) => {
  return useMutation((data) => authService.register(data), mutationSettings);
};
export const UseVerifyOTP = (mutationSettings) => {
  return useMutation((data) => authService.verifyOtp(data), mutationSettings);
};
