import create from 'zustand'

interface UIState {
  activeTag: string
  setActiveTag: (value: string) => void
}

export const useUIStore = create<UIState>(set => ({
  activeTag: 'All',
  setActiveTag: (activeTag: string) => set({activeTag}),
}))
