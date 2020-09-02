import { makeVar } from "@apollo/client";
import { AuthState } from "../types/auth";

export const authStateVar = makeVar<AuthState>(AuthState.LOGIN)