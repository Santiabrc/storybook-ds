import  "./myLabel.css";

export interface MyLabelProps {
    /**
   * mensaje en el label
   */
    label?: string,
    /**
   * tamaño del label
   */
    size?: 'normal' | 'h1' | 'h2' | 'h3',
    /**
   * Color del label
   */
    color?: 'primary' | 'secondary' | 'tertiary',
        /**
   * Color personalizado de la fuente
   */
    fontColor?: string

}

export const MyLabel = ({
    label = 'No label',
    size = 'normal',
    color = 'primary',
    fontColor = 'saeras'
}: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color}`}
        style={{color: fontColor}}>
            {label}
        </span>
    )
}