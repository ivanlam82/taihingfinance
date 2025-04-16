"use client"

import { Button } from "@/components/ui/button"
import { useApplicationForm } from "@/hooks/use-application-form"

export default function ApplyButton() {
  const { openApplicationForm } = useApplicationForm()

  const handleApply = () => {
    // Open the application form modal
    openApplicationForm()
  }

  return (
    <Button className="w-full bg-[#A67C3F] hover:bg-[#8A6835] text-white rounded-full" onClick={handleApply}>
      立即申請
    </Button>
  )
}
