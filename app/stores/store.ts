import { create } from 'zustand'

interface storeState {
  switchPosition: number
  setSwitchPosition: (data: number) => void;
  tour: boolean;
  setTour: (data: boolean) => void;
  fetchedCommentsStored: any;
  setFetchedCommentsStored: (data: any) => void;
}

const useStore = create<storeState>()((set) => ({
  switchPosition: 1,
  setSwitchPosition: (data) => set(({ switchPosition: data })),
  tour: true,
  setTour: (data) => set(({ tour: data })),
  fetchedCommentsStored: [],
  setFetchedCommentsStored: (data) => set(({ fetchedCommentsStored: data })),
}))

export default useStore