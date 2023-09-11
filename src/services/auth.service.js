import { useMutation } from "react-query";
import { requestUnion } from "./http-client";

const authService = {
  register: (data) => requestUnion.post(`/generate_otp`, data),
  verifyOtp: (data) => requestUnion.post("/verify_otp", data),
  registerPhone: (data) => requestUnion.post("/register_phone", data),
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
