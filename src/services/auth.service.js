import { useMutation } from "react-query";
import { requestUnionAuth } from "./http-client";

const authService = {
  register: (data) => requestUnionAuth.post(`/generate_otp`, data),
  verifyOtp: (data) => requestUnionAuth.post("/verify_otp", data),
  registerPhone: (data) => requestUnionAuth.post("/register_phone", data),
};

export const UseAuth = (mutationSettings) => {
  return useMutation((data) => authService.register(data), mutationSettings);
};
export const UseVerifyOTP = (mutationSetting) => {
  return useMutation((data) => authService.verifyOtp(data), mutationSetting);
};
export const UseRegisterPhone = (mutationSetting) => {
  return useMutation(
    (data) => authService.registerPhone(data),
    mutationSetting
  );
};
