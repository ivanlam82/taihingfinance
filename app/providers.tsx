"use client"

import type { ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import ApplicationFormModal from "@/components/application-form-modal"
import { useApplicationForm } from "@/hooks/use-application-form"
import { Toaster } from "@/components/ui/toaster"

export function Providers({ children }: { children: ReactNode }) {
  const { isOpen, closeApplicationForm, loanAmount } = useApplicationForm()

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {children}
      <ApplicationFormModal isOpen={isOpen} onClose={closeApplicationForm} initialLoanAmount={loanAmount} />
      <Toaster />
    </ThemeProvider>
  )
}
