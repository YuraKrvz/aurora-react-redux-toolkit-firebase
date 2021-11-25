
export default function GlobalSvgSelector({id}){
   switch(id){
      case 'basket':
      return (
         <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.96061 1.09091e-05C7.8648 0.00107728 6.81416 0.442131 6.0378 1.22729C5.26243 2.01245 4.82642 3.07781 4.82432 4.18885V6.229H1.45907C1.16173 6.229 0.921143 6.47296 0.921143 6.77446V20.7273C0.921143 22.5351 2.36681 24 4.14869 24H13.7724C15.5543 24 17 22.5351 17 20.7273V6.77446C17 6.62957 16.9432 6.49106 16.8424 6.38879C16.7415 6.28652 16.6049 6.22899 16.462 6.22899H13.0968V4.18884C13.0947 3.07769 12.6587 2.01233 11.8833 1.22728C11.1069 0.442121 10.0562 0.00106364 8.96049 0L8.96061 1.09091e-05ZM5.9001 4.18885C5.9001 2.4747 7.27013 1.08547 8.96061 1.08547C10.6511 1.08547 12.0211 2.4747 12.0211 4.18885V6.229H5.9001V4.18885ZM15.9243 7.31978V20.7271C15.9243 21.3056 15.6974 21.8606 15.2939 22.2697C14.8905 22.6788 14.3431 22.9089 13.7726 22.9089H4.14888C2.9606 22.9089 1.99718 21.932 1.99718 20.7271V7.31978H4.82451V10.2707C4.82451 10.5722 5.0651 10.8162 5.36243 10.8162C5.65872 10.8162 5.90036 10.5722 5.90036 10.2707V7.31978H12.0214V10.2707C12.0214 10.5722 12.2631 10.8162 12.5593 10.8162C12.8567 10.8162 13.0973 10.5722 13.0973 10.2707V7.31978H15.9243Z" fill="white"/>
         </svg>

      );
      case 'chevrondown':
      return (
         <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clip-rule="evenodd" d="M0 0.777822L5.39394 6.00007L0 11.2223L0.802728 12L7 6L0.802728 0L0 0.777822Z" fill="black"/>
         </svg>
      );
      case 'close':
      return (
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="close copy" fillRule="evenodd" clip-rule="evenodd" d="M0.187452 15.8125C0.437387 16.0625 0.842613 16.0625 1.09255 15.8125L8 8.9051L14.9075 15.8125C15.1574 16.0625 15.5626 16.0625 15.8125 15.8125C16.0625 15.5626 16.0625 15.1574 15.8125 14.9075L8.9051 8L15.8125 1.09255C16.0625 0.842613 16.0625 0.437387 15.8125 0.187451C15.5626 -0.0624842 15.1574 -0.0624842 14.9075 0.187451L8 7.0949L1.09255 0.187452C0.842613 -0.0624839 0.437387 -0.0624839 0.187452 0.187452C-0.0624839 0.437387 -0.0624839 0.842613 0.187452 1.09255L7.0949 8L0.187452 14.9075C-0.0624839 15.1574 -0.0624839 15.5626 0.187452 15.8125Z" fill="black"/>
         </svg>
      );
      case 'facebook':
      return (
         <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.53939 2.65625H8V0.1125C7.74848 0.078125 6.88182 0 5.87273 0C3.76667 0 2.32424 1.325 2.32424 3.75938V6H0V8.84375H2.32424V16H5.17273V8.84375H7.40303L7.75758 6H5.17273V4.04063C5.17273 3.21875 5.39394 2.65625 6.53939 2.65625Z" fill="black"/>
         </svg>
      );
      case 'fill':
      return (
         <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clip-rule="evenodd" d="M7.33737 0C9.29817 0 11.1417 0.732088 12.5278 2.06084C15.2134 4.63432 15.3792 8.72258 13.0264 11.4835L16.4749 14.789C16.7648 15.0668 16.7648 15.5169 16.4749 15.7947C16.33 15.9337 16.1401 16.0031 15.9503 16.0031C15.7605 16.0031 15.5706 15.9337 15.4257 15.7947L11.9771 12.4892C10.6706 13.5144 9.0489 14.0721 7.33724 14.0721C5.37644 14.0721 3.53288 13.3401 2.14678 12.0113C-0.715576 9.26837 -0.715576 4.8044 2.14678 2.06075C3.53314 0.732106 5.37657 0 7.33737 0ZM3.19617 11.0057C4.30268 12.0663 5.77304 12.6498 7.33741 12.6498C8.90178 12.6498 10.3721 12.0656 11.4786 11.0057C13.762 8.817 13.762 5.25524 11.4786 3.06673C10.3721 2.00681 8.90178 1.42266 7.33741 1.42266C5.77304 1.42266 4.30271 2.00681 3.19617 3.06673C0.912778 5.25595 0.912778 8.81717 3.19617 11.0057Z" fill="white"/>
         </svg>
      );
      case 'instagram':
      return (
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clip-rule="evenodd" d="M15.9438 4.7011C15.8831 3.41939 15.5904 2.28406 14.6516 1.34866C13.7165 0.413254 12.5814 0.120495 11.2999 0.0562312C9.97925 -0.0187437 6.02075 -0.0187437 4.70006 0.0562312C3.4222 0.116925 2.28712 0.409684 1.34835 1.34509C0.409593 2.28049 0.120468 3.41582 0.0562186 4.69753C-0.0187395 6.01852 -0.0187395 9.97791 0.0562186 11.2989C0.116899 12.5806 0.409593 13.7159 1.34835 14.6513C2.28712 15.5867 3.41863 15.8795 4.70006 15.9438C6.02075 16.0187 9.97925 16.0187 11.2999 15.9438C12.5814 15.8831 13.7165 15.5903 14.6516 14.6513C15.5868 13.7159 15.8795 12.5806 15.9438 11.2989C16.0187 9.97791 16.0187 6.02209 15.9438 4.7011ZM12.2708 4.68682C12.7991 4.68682 13.2274 4.26197 13.2274 3.73C13.2274 3.20161 12.7991 2.77318 12.2708 2.77318C11.7426 2.77318 11.3142 3.20161 11.3142 3.73C11.3142 4.2584 11.739 4.68682 12.2708 4.68682ZM8.00178 3.8978C5.73162 3.8978 3.9005 5.72933 3.9005 8C3.9005 10.2707 5.73162 12.1022 8.00178 12.1022C10.2719 12.1022 12.1031 10.2707 12.1031 8C12.1031 5.72933 10.2719 3.8978 8.00178 3.8978ZM8.00178 10.667C6.53475 10.667 5.33542 9.47094 5.33542 8C5.33542 6.52906 6.53118 5.33304 8.00178 5.33304C9.47239 5.33304 10.6682 6.52906 10.6682 8C10.6682 9.47094 9.46882 10.667 8.00178 10.667ZM12.717 14.2372C13.4202 13.9551 13.9592 13.416 14.2376 12.7163C14.5958 11.816 14.5759 9.84665 14.5629 8.57005C14.5608 8.35829 14.5588 8.1656 14.5588 8C14.5588 7.83437 14.5608 7.64171 14.5629 7.43001C14.5759 6.1541 14.5958 4.18706 14.2376 3.28372C13.9556 2.58039 13.4166 2.04128 12.717 1.7628C11.8141 1.40646 9.83564 1.42545 8.5597 1.43769C8.35271 1.43967 8.16421 1.44148 8.00179 1.44148C7.8362 1.44148 7.64357 1.43953 7.43193 1.43738C6.1563 1.42446 4.1897 1.40453 3.28656 1.7628C2.58338 2.04485 2.04439 2.58396 1.76598 3.28372C1.40972 4.18686 1.4287 6.16574 1.44094 7.44196C1.44292 7.64899 1.44473 7.83754 1.44473 8C1.44473 8.16563 1.44278 8.35829 1.44063 8.56998C1.42771 9.84589 1.40778 11.8129 1.76598 12.7163C2.04796 13.4196 2.58695 13.9587 3.28656 14.2372C4.18949 14.5935 6.16793 14.5746 7.44387 14.5623C7.65086 14.5603 7.83936 14.5585 8.00179 14.5585C8.16737 14.5585 8.35999 14.5605 8.57164 14.5626C9.84726 14.5755 11.8139 14.5955 12.717 14.2372Z" fill="black"/>
         </svg>
      );
      case 'menuBurger':
      return (
         <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_548)">
            <path fillRule="evenodd" clip-rule="evenodd" d="M1 1H21V4H1V1ZM1 7H21V10H1V7ZM21 13H1V16H21V13Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d_1_548" x="0" y="0" width="24" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="1" dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_548"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_548" result="shape"/>
            </filter>
            </defs>
         </svg>   
      );
      case 'shape':
      return (
         <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clip-rule="evenodd" d="M3.97779 0.119463C3.9851 0.118455 3.99241 0.117447 3.99997 0.117447L4.00004 0.117511H4.00407H4.01617C4.02574 0.117511 4.03532 0.119024 4.04439 0.121544C6.22581 0.144253 8.00001 1.80258 8.00001 3.85948C8.00001 4.52981 7.80495 5.15885 7.47581 5.70219V5.70622C7.47228 5.71429 7.46825 5.72235 7.46372 5.73041V5.72991C7.46306 5.7309 7.46218 5.73167 7.46124 5.73251C7.46073 5.73296 7.46021 5.73342 7.45968 5.73394V5.73798H7.45565C7.45464 5.74251 7.45313 5.74654 7.45162 5.75057L7.45162 5.75058L4.14117 11.1699C4.11546 11.2118 4.06959 11.2375 4.0202 11.2375C3.9708 11.2375 3.92494 11.2118 3.89923 11.1699L0.548394 5.75058C0.547735 5.74959 0.546861 5.74882 0.545913 5.74798C0.54541 5.74753 0.544886 5.74707 0.544361 5.74654C0.539825 5.73999 0.535793 5.73344 0.532265 5.72638C0.530752 5.72235 0.52924 5.71832 0.528232 5.71429V5.71025C0.195561 5.16483 0 4.53331 0 3.85941C0 1.80238 1.77419 0.14416 3.95561 0.121479C3.96317 0.121479 3.97048 0.120471 3.97779 0.119463ZM6.16926 4.00854C6.16926 2.81154 5.19704 1.83925 3.99997 1.83925C2.80296 1.83925 1.83068 2.81154 1.83068 4.00854C1.83068 5.20555 2.80296 6.17783 3.99997 6.17783C5.19697 6.17783 6.16926 5.20555 6.16926 4.00854Z" fill="black"/>
         </svg>
      );
      case 'snapchat':
      return (
         <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9639 11.7591C15.8011 12.138 15.1127 12.4163 13.8589 12.6105C13.7944 12.6973 13.741 13.0681 13.6556 13.357C13.6048 13.5305 13.4799 13.6334 13.2766 13.6334L13.2673 13.6332C12.9737 13.6332 12.6672 13.4985 12.0532 13.4985C11.2244 13.4985 10.9388 13.6868 10.2953 14.1401C9.61303 14.6212 8.95869 15.0365 7.98194 14.9939C6.99301 15.0667 6.16867 14.467 5.70473 14.1399C5.05742 13.6836 4.77261 13.4985 3.94721 13.4985C3.35771 13.4985 2.98672 13.6456 2.73309 13.6456C2.48081 13.6456 2.38269 13.4923 2.34491 13.3639C2.26044 13.0776 2.20728 12.7013 2.14106 12.612C1.49485 12.512 0.0376341 12.2584 0.000509239 11.6101C-0.00880895 11.4413 0.110741 11.2927 0.277914 11.2651C2.45237 10.9081 3.43178 8.68167 3.47249 8.58715C3.47481 8.58166 3.47734 8.57643 3.4799 8.5711C3.59593 8.33622 3.6219 8.13952 3.55687 7.9867C3.39906 7.61598 2.71712 7.48298 2.43022 7.36979C1.68913 7.07792 1.586 6.74254 1.62985 6.51268C1.706 6.11267 2.30875 5.86652 2.66115 6.03112C2.93987 6.16141 3.1875 6.22735 3.39699 6.22735C3.55393 6.22735 3.65362 6.18983 3.70824 6.1597C3.6444 5.03982 3.48634 3.43947 3.88596 2.54575C4.94136 0.186137 7.17832 0.00277352 7.83835 0.00277352C7.86785 0.00277352 8.12401 0 8.15429 0C9.7839 0 11.3497 0.834548 12.1144 2.54425C12.5136 3.43707 12.3565 5.03082 12.2923 6.15945C12.3418 6.18662 12.4285 6.21997 12.561 6.22611C12.761 6.2172 12.9928 6.15166 13.2507 6.03112C13.4409 5.94243 13.7009 5.95443 13.8907 6.03293L13.8916 6.03324C14.1877 6.13873 14.3741 6.35157 14.3788 6.59012C14.3845 6.89387 14.1124 7.1562 13.5701 7.36976C13.5039 7.39578 13.4234 7.42134 13.3378 7.44845C13.0316 7.54524 12.569 7.69168 12.4435 7.98667C12.3785 8.13949 12.4043 8.33604 12.5204 8.57091C12.5231 8.57615 12.5256 8.58157 12.5279 8.58696C12.5685 8.68139 13.5471 10.9074 15.7225 11.2649C15.9234 11.2979 16.0714 11.5104 15.9639 11.7591Z" fill="black"/>
         </svg>
      );
      case 'twitter':
      return (
         <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.2526 3.48905C15.2634 3.64217 15.2634 3.79532 15.2634 3.94844C15.2634 8.61873 11.7577 14 5.35027 14C3.37627 14 1.54252 13.4203 0 12.4141C0.280468 12.4469 0.550112 12.4578 0.84137 12.4578C2.47016 12.4578 3.96955 11.9 5.16689 10.9485C3.63516 10.9156 2.35152 9.89845 1.90925 8.49844C2.12501 8.53123 2.34073 8.55311 2.56728 8.55311C2.88008 8.55311 3.19292 8.50934 3.48415 8.43282C1.8877 8.10467 0.690329 6.68281 0.690329 4.96562V4.92189C1.15415 5.18439 1.69353 5.34845 2.26519 5.3703C1.32674 4.73591 0.711911 3.65311 0.711911 2.4281C0.711911 1.77186 0.884468 1.1703 1.18652 0.645296C2.90163 2.78904 5.4797 4.18902 8.37054 4.34217C8.31662 4.07967 8.28425 3.80626 8.28425 3.53282C8.28425 1.58592 9.83756 0 11.7684 0C12.7716 0 13.6776 0.426561 14.3141 1.11562C15.1015 0.962507 15.8566 0.66718 16.5254 0.262502C16.2665 1.08283 15.7164 1.7719 14.9937 2.20937C15.6948 2.13284 16.3744 1.93592 17 1.66251C16.5255 2.36248 15.9321 2.9859 15.2526 3.48905Z" fill="black"/>
         </svg>
      );
      case 'youtube':
      return (
         <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clip-rule="evenodd" d="M16.0325 0.388849C16.8069 0.602841 17.4169 1.23341 17.6239 2.03406C18 3.48529 18 6.51314 18 6.51314C18 6.51314 18 9.54099 17.6239 10.9922C17.4169 11.7929 16.8069 12.3972 16.0325 12.6112C14.6287 13 9 13 9 13C9 13 3.37127 13 1.96752 12.6112C1.19308 12.3972 0.583143 11.7929 0.376127 10.9922C0 9.54099 0 6.51314 0 6.51314C0 6.51314 0 3.48529 0.376127 2.03406C0.583143 1.23341 1.19308 0.602875 1.96752 0.388849C3.37127 0 9 0 9 0C9 0 14.6288 0 16.0325 0.388849ZM11.8636 6.5132L7.15908 3.76408V9.2622L11.8636 6.5132Z" fill="black"/>
         </svg>
         
      );
      default: 
         return null;
   }
}
