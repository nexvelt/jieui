import { useStorage } from '@vueuse/core'
import { watchEffect } from 'vue'
import useUnaThemes from '../composables/una-themes'

// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore tsconfig
import { useAppConfig } from '#imports'

export default function useUnaSettings() {
  const { ui } = useAppConfig()
  const { getPrimaryColors, getGrayColors } = useUnaThemes()

  const defaultSettings = {
    primaryColors: getPrimaryColors(ui.primary),
    grayColors: getGrayColors(ui.gray),
    primary: ui.primary,
    gray: ui.gray,
    fontSize: 16,
  }

  const settings = useStorage('una-settings', defaultSettings)

  watchEffect(() => {
    settings.value.primaryColors = getPrimaryColors(settings.value.primary)
    settings.value.grayColors = getGrayColors(settings.value.gray)
  })

  return {
    defaultSettings,
    settings,
  }
}
