import GlobalSvgSelector from "../../../source/GlobalSvgSelector"
import s from './OverHeader.module.css';

const OverHeader = () => {
   return (
      <>
         <div className={s.wrapper}>
            <div />
            <h6 className={s.title}>We deliver Worldwide</h6>
            <div>
               <GlobalSvgSelector id="shape" />
               <p className={s.text}>Our stores</p>
            </div>
         </div>   
      </>
   )
}

export default OverHeader
