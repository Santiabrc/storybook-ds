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


export const ActionsIcon1 = ({ size = 'l', color = 'none', onClick}: IconInterfaces) => {
  return(
    <svg className={`size-${size} color-${color}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}><path d="M20 26C19.6875 26 19.4375 25.9375 19.25 25.75L10.25 16.75C9.875 16.375 9.875 15.6875 10.25 15.3125C10.625 14.9375 11.3125 14.9375 11.6875 15.3125L19 22.625V5C19 4.5 19.4375 4 20 4C20.5 4 21 4.5 21 5V22.625L28.25 15.3125C28.625 14.9375 29.3125 14.9375 29.6875 15.3125C30.0625 15.6875 30.0625 16.375 29.6875 16.75L20.6875 25.75C20.5 25.9375 20.25 26 20 26ZM34 31C34 33.8125 31.75 36 29 36H11C8.1875 36 6 33.8125 6 31V25C6 24.5 6.4375 24 7 24C7.5 24 8 24.5 8 25V31C8 32.6875 9.3125 34 11 34H29C30.625 34 32 32.6875 32 31V25C32 24.5 32.4375 24 33 24C33.5 24 34 24.5 34 25V31Z" fill={color}/></svg>
  )
}