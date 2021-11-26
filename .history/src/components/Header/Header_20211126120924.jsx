import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import GlobalSvgSelector from '../../source/GlobalSvgSelector';
import OverHeader from './OverHeader/OverHeader';

const Header = () => {
   return (
      <>
         <header className={s.header}>
            <OverHeader />
            <div className={s.header_body}>
               <h1 className={s.header_title}>Aurora</h1>
               <input className={s.header_searcher} type="text" placeholder="What are you looking for?" />
               <GlobalSvgSelector id="fill" />
               <div>
                  <div className={s.header_user}>Sign in  |  Register <GlobalSvgSelector id="basket" /></div>
               </div>
            </div>
            <ul className={s.header_list}>
               <li className={s.header_list__item}>what’s new</li>
               <li className={s.header_list__item}>women</li>
               <li className={s.header_list__item}>accessories</li>
               <li className={s.header_list__item}>kids</li>
               <li className={s.header_list__item}>beauty</li>
               <li className={s.header_list__item}>outlet</li>
               <li className={s.header_list__item}>stories</li>
            </ul>
         </header>
      </>
   )
}

export default Header


// HEADER / Aurora
// <h6>{email}</h6>
//    <ul>
//       <li>
//          <NavLink  to='/' >home</NavLink>
//          <NavLink  to='/signIn' >signIn</NavLink>
//          <NavLink  to='/signUp' >signUp</NavLink>
//       </li>
//    </ul>
// </header>
