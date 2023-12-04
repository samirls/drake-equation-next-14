import { create } from 'zustand'

interface storeState {
  switchPosition: number
  setSwitchPosition: (data: number) => void
  tour: boolean
  setTour: (data: boolean) => void
}

const useStore = create<storeState>()((set) => ({
  switchPosition: 1,
  setSwitchPosition: (data) => set(({ switchPosition: data })),
  tour: true,
  setTour: (data) => set(({ tour: data })),
}))

export default useStore