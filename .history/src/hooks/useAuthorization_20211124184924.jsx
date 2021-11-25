import {useSelector} from 'react-redux';

export function useAuthorization(){
   const {} = useSelector(state => state.user);
}