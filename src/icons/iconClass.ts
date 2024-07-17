import { computed, type Ref } from "vue";
import type { IconColor, IconSize, IconUsage } from "./types";
import { twMerge } from "tailwind-merge";

export interface IconPropsClass {
    color: Ref<IconColor>,
    size: Ref<IconSize>,
    type: Ref<IconUsage>,
}

const iconSizeClasses: Record<IconSize, string> = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
    "2xl": "w-10 h-10",
    "3xl": "w-12 h-12"
};

const iconColorClasses: Record<IconColor, string> = {
    warning: "text-orange-500 group-hover:text-orange-600 dark:group-hover:text-orange-400",
    danger: "text-red-600 group-hover:text-red-700 dark:group-hover:text-red-500",
    success: "text-green-600 group-hover:text-green-700 dark:group-hover:text-green-500",
    info: "text-sky-500 group-hover:text-sky-600 dark:group-hover:text-sky-400",
    primary: "text-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400",
    default: "text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white"
}

const iconUsageClasses: Record<IconUsage, string> = {
    button: "text-gray-200 group-hover:text-white mr-2",
    sidebar: "text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
    default: iconColorClasses.default
};

export function setIconClasses(data: IconPropsClass): {
    iconClass: Ref<string>
} {

    const iconClass = computed(() => {
        return twMerge(
            "flex-shrink-0 transition duration-75",
            data.type.value === 'button' ? iconUsageClasses[data.type.value] : 
            data.type.value === 'sidebar' ? iconUsageClasses[data.type.value] : 
            iconColorClasses[data.color.value],
            iconSizeClasses[data.size.value],
        )
    });
    return { iconClass }
}


