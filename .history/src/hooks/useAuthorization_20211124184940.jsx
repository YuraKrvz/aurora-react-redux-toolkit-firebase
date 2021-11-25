import {useSelector} from 'react-redux';

export function useAuthorization(){
   const {email, id, token} = useSelector(state => state.user);

   
}