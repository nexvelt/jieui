export interface NSwitchProps {
  /**
   * Value of the switch.
   *
   * @default null
  */
  modelValue?: boolean
  /**
   * Disable the switch from being clicked.
   *
   * @default false
  */
  disabled?: boolean
  /**
   * Add a loading indicator to the switch.
   * This will also disable the switch.
   *
   * @default false
  */
  loading?: boolean
  /**
   * Display the slider thumb outside of the track.
   *
   * @default false
  */
  outset?: boolean

  /**
   * Allows you to add `NexveltUI` switch preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @example
   * switch="xl green focus"
  */
  switch?: string
  /**
   * Allows you to display an icon when the switch is on.
   * Accepts icon name and utility classes
   *
   * @example
   * icon="i-heroicons-check-20-solid text-white"
  */
  iconOn?: string
  /**
   * Allows you to display an icon when the switch is off.
   * Accepts icon name and utility classes
   *
   * @example
   * icon="i-heroicons-x-mark-20-solid text-white"
  */
  iconOff?: string

  /**
   * `NexveltUI` preset configuration
   *
   * @see https://github.com/nexvelt/ui/blob/main/packages/ui-preset/src/_shortcuts/switch.ts
  */
  nv?: {
    switchThumb?: string
    switchThumbOn?: string
    switchThumbOff?: string

    switchTrack?: string
    switchTrackOn?: string
    switchTrackOff?: string

    switchIconBase?: string
    switchIconOn?: string
    switchIconOff?: string

    switchLoading?: string
    switchloadingicon?: string
  }
}
