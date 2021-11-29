import GuestSection from "../components/GuestSection/GuestSection"
import { useAuthorization } from '../hooks/useAuthorization';

function HomeUser(){
   const {isAuth, email} = useAuthorization();


   return (
      <>
         <h1>home page {email}</h1>
         <GuestSection isAuth={isAuth} />
      </>
   )
}

export default HomeUser
