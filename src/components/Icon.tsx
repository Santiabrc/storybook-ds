import "./icon.css";
/*
.color-font-text-icon-on-tag-bg-tertiary-light{
  color: #FF0000; 
}
*/
export interface IconInterfaces {

  /**
 * tamaño del Icono
 */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl',
  /**
 * Color del Icono
 */
  color?: string,

  onClick?: () => void;
}


export const ActionsIcon = ({ size = 'l', color = 'none', onClick }: IconInterfaces) => {
  return (
    <svg className={`size-${size} color-${color}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}><path d="M26.0625 8C26.6875 8 28 8.5625 28 10.0625V30C28 31.5 26.6875 32 26.0625 32C25.625 32 25.1875 31.875 24.875 31.625L14 22.625V31C14 31.5625 13.5 32 13 32C12.4375 32 12 31.5625 12 31V9C12 8.5 12.4375 8 13 8C13.5 8 14 8.5 14 9V17.4375L24.875 8.4375C25.1875 8.1875 25.625 8 26.0625 8ZM26 30.0625V10L14 20L26 30.0625Z" fill={color} /></svg>
  )
}