import GuestSection from "../components/GuestSection/GuestSection"
import { useAuthorization } from '../hooks/useAuthorization';

function HomeUser(){
   const {email} = useAuthorization();


   return (
      <>
         <h1>home page user</h1>
         <GuestSection  />
      </>
   )
}

export default HomeUser
