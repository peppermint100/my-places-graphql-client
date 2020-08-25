import { gql } from "@apollo/client";

export const SELF_QUERY = gql`
{
    self{
        username
    }
} 

`