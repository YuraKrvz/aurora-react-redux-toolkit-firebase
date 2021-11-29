import GuestSection from "../components/GuestSection/GuestSection"
import { useAuthorization } from '../hooks/useAuthorization';

function HomeUser(){
   const {isAuth} = useAuthorization();


   return (
      <>
         <h1>home page user</h1>
         <GuestSection isAuth={isAuth} />
      </>
   )
}

export default HomeUser
