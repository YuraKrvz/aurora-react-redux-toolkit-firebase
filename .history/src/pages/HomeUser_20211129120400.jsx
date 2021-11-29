import GuestSection from "../components/GuestSection/GuestSection"


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
