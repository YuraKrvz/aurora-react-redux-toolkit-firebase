import s from './Footer.module.css';

function Footer(){
   return (
      <>
         <footer>
            <div className={s.footer_inner}>
               <div className={s.footer_item}>
                  <h6>About Us</h6>
                  <ul>
                     <li>Who we are</li>
                     <li>Our stores</li>
                     <li>Customer Reviews</li>
                  </ul>
               </div>
               <div className={s.footer_item}>
                  <h6>About Us</h6>
                  <ul>
                     <li>Who we are</li>
                     <li>Our stores</li>
                     <li>Customer Reviews</li>
                  </ul>
               </div>
               
            </div>
         </footer>
      </>
   )
}

export default Footer