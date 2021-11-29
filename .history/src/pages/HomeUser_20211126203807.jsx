import GuestSection from "../components/GuestSection/GuestSection"
import { useAuthorization } from '../hooks/useAuthorization';

function HomeUser(){
   const {isAuth, email, id} = useAuthorization();

   return (
      <>
         <GuestSection user={email} />
      </>
   )
}

export default HomeUser
