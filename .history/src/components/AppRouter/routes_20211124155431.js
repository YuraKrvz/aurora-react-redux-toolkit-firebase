import {ROUTE_HOME_GUEST, ROUTE_HOME_USER, ROUTE_SIGN_IN, ROUTE_SIGN_UP} from '../../utils/constants';;
import HomeGuest from '../../pages/HomeGuest';
import HomeUser from '../../pages/HomeUser';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';

export const guestRoutes = [
   {
      path: ROUTE_HOME_GUEST,
      component: HomeGuest,
   },
   {
      path: ROUTE_SIGN_IN,
      component: SignIn,
   },
   {
      path: ROUTE_SIGN_UP,
      component: SignUp,
   },
   {
      path: '*',
      component: HomeGuest,
   }
];

export const userRoutes = [
   {
      path: ROUTE_HOME_USER,
      component: HomeUser,
   },
   {
      path: ROUTE_SIGN_IN,
      component: SignIn,
   },
   {
      path: ROUTE_SIGN_UP,
      component: SignUp,
   },
   {
      path: '*',
      component: HomeUser,
   }
];