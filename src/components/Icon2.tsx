import  "./icon.css";
/*
.color-font-text-icon-on-tag-bg-tertiary-light{
  color: #FF0000; 
}
*/
export interface IconInterfaces {

    /**
   * tamaño del Icono
   */
    size?: 'xs' | 's' |'m' | 'l' | 'xl' | 'xxl',
    /**
   * Color del Icono
   */
    color?: string,

    onClick?: () => void;
}


export const ActionsIcon2 = ({ size = 'l', color = 'none', onClick}: IconInterfaces) => {
  return(
    <svg className={`size-${size} color-${color}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}><path d="M31.9375 4.75C33.25 6.125 33.25 8.3125 31.9375 9.6875L12.375 29.25C11.625 29.9375 10.75 30.5 9.8125 30.75L2.25 33C1.875 33.0625 1.5 33 1.25 32.75C1 32.5 0.875 32.125 1 31.75L3.25 24.1875C3.5 23.25 4.0625 22.375 4.75 21.625L24.3125 2.0625C25.6875 0.75 27.875 0.75 29.25 2.0625L31.9375 4.75ZM22.3125 6.9375L27.0625 11.6875L30.5 8.3125C31.0625 7.6875 31.0625 6.75 30.5 6.1875L27.8125 3.5C27.25 2.9375 26.3125 2.9375 25.6875 3.5L22.3125 6.9375ZM20.875 8.3125L6.1875 23.0625C5.6875 23.5 5.3125 24.125 5.125 24.75L3.4375 30.5625L9.25 28.875C9.875 28.6875 10.5 28.3125 10.9375 27.8125L25.625 13.125L20.875 8.3125Z" fill={color}/></svg>
  )
}