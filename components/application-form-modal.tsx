"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

interface ApplicationFormModalProps {
  isOpen: boolean
  onClose: () => void
  initialLoanAmount?: number
}

export default function ApplicationFormModal({
  isOpen,
  onClose,
  initialLoanAmount = 300000,
}: ApplicationFormModalProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    loanAmount: initialLoanAmount,
    name: "",
    idNumber: "",
    phone: "",
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState({
    loanAmount: "",
    name: "",
    idNumber: "",
    phone: "",
    agreeToTerms: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
    if (checked && errors.agreeToTerms) {
      setErrors((prev) => ({ ...prev, agreeToTerms: "" }))
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { ...errors }

    // Validate loan amount (min $5,000, max $1,000,000)
    if (!formData.loanAmount) {
      newErrors.loanAmount = "請輸入貸款金額"
      valid = false
    } else if (formData.loanAmount < 5000) {
      newErrors.loanAmount = "貸款金額最少為HK$5,000"
      valid = false
    } else if (formData.loanAmount > 1000000) {
      newErrors.loanAmount = "貸款金額最多為HK$1,000,000"
      valid = false
    }

    if (!formData.name.trim()) {
      newErrors.name = "請輸入姓名"
      valid = false
    }

    if (!formData.idNumber.trim()) {
      newErrors.idNumber = "請輸入身份證號碼"
      valid = false
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "請輸入聯絡電話"
      valid = false
    } else if (!/^[0-9]{8}$/.test(formData.phone)) {
      newErrors.phone = "請輸入有效的香港電話號碼"
      valid = false
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "請閱讀並同意條款及細則"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Construct WhatsApp message with form data
      const message = `
貸款申請:
貸款金額: HK${formData.loanAmount}
姓名: ${formData.name}
身份證號碼: ${formData.idNumber}
聯絡電話: ${formData.phone}
      `.trim()

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message)

      // WhatsApp API URL with phone number and message
      const whatsappUrl = `https://wa.me/85297376112?text=${encodedMessage}`

      // Show success message
      toast({
        title: "申請已提交",
        description: "正在轉到WhatsApp...",
      })

      // Redirect to WhatsApp
      window.open(whatsappUrl, "_blank")

      // Close the modal
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[272px] p-4 scale-80 origin-center">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-base font-bold text-gray-800">貸款申請</DialogTitle>
          <DialogDescription className="text-xs">請填寫以下資料，我們的客戶服務團隊將盡快與您聯絡。</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-2 mt-2">
          <div className="space-y-1">
            <Label htmlFor="loanAmount" className="text-xs">
              貸款金額 (HK$)
            </Label>
            <Input
              id="loanAmount"
              name="loanAmount"
              type="number"
              min={5000}
              max={1000000}
              value={formData.loanAmount}
              onChange={handleChange}
              className={`${errors.loanAmount ? "border-red-500" : ""} text-xs h-8`}
            />
            <p className="text-[10px] text-gray-500">最低貸款金額為港幣$5,000，最高$1,000,000</p>
            {errors.loanAmount && <p className="text-red-500 text-[10px]">{errors.loanAmount}</p>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="name" className="text-xs">
              姓名
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`${errors.name ? "border-red-500" : ""} text-xs h-8`}
            />
            {errors.name && <p className="text-red-500 text-[10px]">{errors.name}</p>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="idNumber" className="text-xs">
              身份證號碼
            </Label>
            <Input
              id="idNumber"
              name="idNumber"
              placeholder="例如: A123456(7)"
              value={formData.idNumber}
              onChange={handleChange}
              className={`${errors.idNumber ? "border-red-500" : ""} text-xs h-8`}
            />
            {errors.idNumber && <p className="text-red-500 text-[10px]">{errors.idNumber}</p>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone" className="text-xs">
              聯絡電話
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={`${errors.phone ? "border-red-500" : ""} text-xs h-8`}
            />
            {errors.phone && <p className="text-red-500 text-[10px]">{errors.phone}</p>}
          </div>

          <div className="flex items-start space-x-2 pt-1">
            <Checkbox
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onCheckedChange={handleCheckboxChange}
              className="mt-0.5"
            />
            <div>
              <Label
                htmlFor="agreeToTerms"
                className={`text-[9px] leading-none ${errors.agreeToTerms ? "text-red-500" : "text-gray-600"}`}
              >
                <span className="inline-block" style={{ lineHeight: "1.1" }}>
                  本人確認已滿十八歲並已參閱及明白泰興財務有限公司的私隱政策聲明及個人資料(客戶)聲明。本人同意泰興財務有限公司使用本人已填寫的個人資料聯絡本人以跟進貸款事宜。泰興財務有限公司對貸款申請批核與否有絕對決定權，而毋須作解釋。
                </span>
              </Label>
              {errors.agreeToTerms && <p className="text-red-500 text-[10px] mt-1">{errors.agreeToTerms}</p>}
            </div>
          </div>

          <div className="pt-2 flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose} className="text-xs h-7 px-2">
              取消
            </Button>
            <Button type="submit" className="bg-[#A67C3F] hover:bg-[#8A6835] text-white text-xs h-7 px-2">
              提交申請
            </Button>
          </div>

          <div className="space-y-1 pt-1">
            <p className="text-[9px] text-gray-500 text-center">
              *所有資料只作申請登記用途，本公司不會在未得到你事先同意下向任何第三方披露你的個人資料。
            </p>
            <p className="text-yellow-500 font-bold text-xs text-center">忠告：借錢梗要還，咪俾錢中介。</p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
