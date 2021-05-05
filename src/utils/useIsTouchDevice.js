import { useMediaQuery } from "@material-ui/core"

// https://stackoverflow.com/questions/11387805/media-query-to-detect-if-device-is-touchscreen
export function useIsTouchDevice() {
  return useMediaQuery(`(hover: none)`)
}
