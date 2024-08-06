import { computed, type Ref } from 'vue'
import type { ToastAlign, ToastType } from '../types'
import { simplifyTailwindClasses } from '@/utils/simplifyTailwindClasses'

type UseToastClassesReturns = {
  typeClasses: Ref<string>
  wrapperClasses: Ref<string>
  contentClasses: Ref<string>
}

type UseToastClassesProps = {
  type: Ref<ToastType>
  divide: Ref<boolean>
  alignment: Ref<ToastAlign>
}

const typeClassesMap: Record<ToastType, string> = {
  danger: 'text-red-500 bg-white dark:text-red-700',
  empty: '',
  success: 'text-teal-500 bg-white dark:text-teal-700',
  warning: 'text-amber-500 bg-white dark:text-amber-700',
}

const wrapperAlignmentClasses: Record<ToastAlign, string> = {
  center: 'items-center',
  end: 'items-end',
  start: 'items-start',
}

const wrapperBackgroundClasses: Record<ToastType, string> = {
  danger: 'bg-red-600',
  empty: '',
  success: 'bg-teal-600',
  warning: 'bg-amber-600',
}

const defaultWrapperClasses = 'flex w-full min-w-[25rem] min-h-[25rem] px-6 text-white rounded-lg shadow'

const defaultContentClasses = 'text-base font-medium'

export function useToastClasses (props: UseToastClassesProps): UseToastClassesReturns {
  const typeClasses = computed(() => typeClassesMap[props.type.value])

  const wrapperClasses = computed(() => {
    const wrapperBackgroundClass = wrapperBackgroundClasses[props.type.value]
    const alignmentClass = wrapperAlignmentClasses[props.alignment.value]
    if (props.divide.value) {
      return simplifyTailwindClasses(defaultWrapperClasses, alignmentClass, wrapperBackgroundClass)
    }

    return simplifyTailwindClasses(defaultWrapperClasses, alignmentClass)
  })

  const contentClasses = computed(() => {
    if (props.type.value !== 'empty' && props.divide.value) {
      return simplifyTailwindClasses(defaultContentClasses, 'pl-3')
    }

    return defaultContentClasses
  })

  return {
    typeClasses,
    wrapperClasses,
    contentClasses,
  }
}
