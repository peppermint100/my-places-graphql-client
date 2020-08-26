import { SELF_QUERY } from './../query/User/SelfQuery';
import { useQuery } from '@apollo/client';

export const useAuth = () => {
    return useQuery(SELF_QUERY)
}