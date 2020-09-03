import { makeVar } from "@apollo/client";
import { AuthState, SelfQueryDataProps } from "../types/auth";

export const authStateVar = makeVar<AuthState>(AuthState.LOGIN)
export const userVar = makeVar<SelfQueryDataProps>(null)