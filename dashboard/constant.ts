export const jwt = {
  JWT_SECRET: process.env.JWT_SECRET || "0e900be1-0ac5-4e6a-bf4b-38f8b21a189b",
  JWT_EXPIRES_IN: "1d",
};

export const AUTH_TOKEN = "AUTH_TOKEN";

export const AUTH_ERROR_CODE = "VALID_AUTH_TOKEN_REQUIRED";
