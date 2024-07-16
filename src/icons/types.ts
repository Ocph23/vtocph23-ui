export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

export type IconColor = 'warning' | 'danger' | 'success' | 'info' | 'primary' | 'default'

export type IconUsage = 'button' | 'sidebar' | 'default' 

export interface IconProps {
    color?: IconColor,
    size?: IconSize,
    type?: IconUsage,
} 
