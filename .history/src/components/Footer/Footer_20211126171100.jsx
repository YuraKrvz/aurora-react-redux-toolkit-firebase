import GlobalSvgSelector from '../../source/GlobalSvgSelector';
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
                  <h6>Categories</h6>
                  <ul>
                     <li>Women fashion</li>
                     <li>Accessories</li>
                     <li>Kids</li>
                  </ul>
               </div>
               <div className={s.footer_item}>
                  <h6>Help</h6>
                  <ul>
                     <li>Customer service</li>
                     <li>Size guide</li>
                     <li>Contact us</li>
                  </ul>
               </div>
               <div className={s.footer_item}>
                  <h6>Payments & Delivery</h6>
                  <ul>
                     <li>Purchase terms</li>
                     <li>Guarantee</li>
                  </ul>
               </div>
               <div className={s.footer_item}>
                  <h6>Social</h6>
                  <ul>
                     <li>
                        <GlobalSvgSelector id='instagram' />
                        <GlobalSvgSelector id='twitter' />
                        <GlobalSvgSelector id='snapchat' />
                        <GlobalSvgSelector id='youtube' />
                        <GlobalSvgSelector id='youtube' />
                     </li>
                     <li>Guarantee</li>
                  </ul>
               </div>
               
            </div>
         </footer>
      </>
   )
}

export default Footer