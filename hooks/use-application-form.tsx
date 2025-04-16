"use client"

import { create } from "zustand"
import { useState, useEffect } from "react"

interface ApplicationFormState {
  isOpen: boolean
  loanAmount: number
  openApplicationForm: (loanAmount?: number) => void
  closeApplicationForm: () => void
}

export const useApplicationFormStore = create<ApplicationFormState>((set) => ({
  isOpen: false,
  loanAmount: 300000,
  openApplicationForm: (loanAmount = 300000) => set({ isOpen: true, loanAmount }),
  closeApplicationForm: () => set({ isOpen: false }),
}))

export const useApplicationForm = () => {
  const store = useApplicationFormStore()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return {
      isOpen: false,
      loanAmount: 300000,
      openApplicationForm: () => {},
      closeApplicationForm: () => {},
    }
  }

  return store
}
