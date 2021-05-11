import create from "zustand"

// zustand https://github.com/pmndrs/zustand
// with typescript https://react-tracked.js.org/docs/tutorial-zustand-01/
export const useStore = create(set => ({
  paused: false,
  temperature: 1,
  isWindows: true,
  isGifModalOpen: false,
  setIsGifModalOpen: x => set(() => ({ isGifModalOpen: x })),
  isGifModalBigOrAnimating: false,
  setIsGifModalBigOrAnimating: x =>
    set(() => ({ isGifModalBigOrAnimating: x })),
  setTemperature: x => set(() => ({ temperature: x })),
  set: newState => set(state => ({ ...state, ...newState })),
}))
