import {ROUTE_HOME_GUEST, ROUTE_HOME_USER} from '../../utils/constants';;
import HomeGuest from '../../pages/HomeGuest';
import HomeUser from '../../pages/HomeUser';

export const guestRoutes = [
   {
      path: ROUTE_HOME_GUEST,
      component: HomeGuest,
   }
];

export const userRoutes = [
   {
      path: ROUTE_HOME_USER,
      component: HomeGuest,
   }
];