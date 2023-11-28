import type { ComponentBoundingRect } from '../component/types'

export interface ToggleComponentInspectorOptions {
  bounds: ComponentBoundingRect
  name?: string
  id?: string
  visible?: boolean
}
