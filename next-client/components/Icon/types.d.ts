/* istanbul ignore file */
/**
 * Transformar de svg a componente de React
 * {@link https://react-svgr.com/playground/?icon=true}
 * En la opciones activar la opción Icon
 */

import React from "react"

export type ColorName =
  | "primary"
  | "warning"
  | "danger"
  | "secondary"
  | "white"
  | "dark"
  | "gray"
  | "success"
  | "info"
  | "icon"
export type IconName =
  | "more-h"
  | "more-v"
  | "location"
  | "arrow-bottom"
  | "lock-open"
  | "loop"
  | "warning"
  | "build"
  | "lock-close"
  | "pencil"
  | "close"
  | "circle-close"
  | "trash"
  | "times"
  | "save"
  | "alert"
  | "alarm"
  | "ban"
  | "power-off"
  | "cloud-upload"
  | "help-outline"
  | "search"
  | "transfer"
  | "hand"
  | "assignment"
  | "assignment-late"
  | "check-cirle"
  | "library-books"
  | "assignment-returned"
  | "transfer-with-station"
  | "filter"
  | "alert2"
  | "menu"
  | "calendar"
  | "print"
  | "ballot"
  | "thermostate"
  | "boat"
  | "unarchive"
  | "label"
  | "google"
  | "facebook"
  | "logo"
  | "instagram"
  | "twitter"
  | "star"
  | "border"
  | "energy"
  | "facebookv2"
  | "dowload"
  | "arrow-right"
  | "arrow-leftv2"
  | "avatar"
  | "ring"
  | "cart"
  | "bill"

/**
 * Props SVG, incluyendo name, color, size y weight. No se debe usar el prop style.
 */
export interface PropsVIcon extends Omit<React.SVGProps<SVGElement>, "style"> {
  name: IconName
  color?: ColorName
  size: number
  pointer?: boolean
  disabled?: boolean
}
