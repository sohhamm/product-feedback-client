import create from 'zustand'

interface DataState {
  suggestions: any[]
  setSuggestions: (value: any) => void
}

export const useDataStore = create<DataState>(set => ({
  suggestions: [],
  setSuggestions: (suggestions: any) => set({suggestions}),
}))
