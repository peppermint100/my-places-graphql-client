import { authStateVar, userVar } from "../local/cache"

export const authState = {
        read(){
            return authStateVar() 
        }
    }

export const user  = {
        read(){
            return userVar() 
        }
    }

    export const isLiked  = {
            read(_, { variables }){
                return "every single" 
            }
    }


