import create from "zustand"

// zustand https://github.com/pmndrs/zustand
// with typescript https://react-tracked.js.org/docs/tutorial-zustand-01/
export const useStore = create(set => ({
  paused: false,
  temperature: 1,
  isWindows: true,
  isHoveredImg: false,
  setTemperature: newValue => set(() => ({ temperature: newValue })),
  set: newState => set(state => ({ ...state, ...newState })),
}))
