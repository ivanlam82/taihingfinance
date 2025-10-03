"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "@/components/footer"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { ...errors }

    if (!formData.name.trim()) {
      newErrors.name = "請輸入姓名"
      valid = false
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "請輸入電話號碼"
      valid = false
    } else if (!/^[0-9]{8}$/.test(formData.phone)) {
      newErrors.phone = "請輸入有效的香港電話號碼"
      valid = false
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "請輸入有效的電郵地址"
      valid = false
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "請輸入主題"
      valid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "請輸入訊息"
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
聯絡表格:
姓名: ${formData.name}
電話: ${formData.phone}
電郵: ${formData.email || "未提供"}
主題: ${formData.subject}
訊息: ${formData.message}
      `.trim()

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message)

      // WhatsApp API URL with phone number and message
      const whatsappUrl = `https://wa.me/85297376009?text=${encodedMessage}`

      // Show success message
      toast({
        title: "訊息已提交",
        description: "正在轉到WhatsApp...",
      })

      // Redirect to WhatsApp
      window.open(whatsappUrl, "_blank")
    }
  }

  return (
    <main className="min-h-screen bg-white pt-16">
      <Navbar />
      <div className="pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8">
            <img src="/images/fulllogo.png" alt="泰興財務" className="h-[220px] mb-4" />
            <h1 className="text-2xl md:text-3xl font-bold text-center">聯絡我們</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div>
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">聯絡資料</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#A67C3F] mr-3 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-800">地址</h3>
                      <p className="text-gray-700">九龍油麻地渡船街28號寶時商業中心1810室</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#A67C3F] mr-3 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-800">24小時查詢熱線</h3>
                      <p className="text-gray-700">+852 97376009</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#A67C3F] mr-3 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-800">電郵</h3>
                      <p className="text-gray-700">taihingcreditlimited@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#A67C3F] mr-3 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-800">辦公室營業時間</h3>
                      <p className="text-gray-700">星期一至六: 11:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">交通指南</h2>
                <div className="space-y-4 text-gray-700">
                  <p>港鐵: 油麻地站A2出口，步行約5分鐘</p>
                  <p>巴士: 1, 2, 6, 6A, 6X, 9, 11, 12, 13X, 14</p>
                  <p>小巴: 26, 35A, 43M</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">聯絡表格</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    姓名
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="請輸入您的姓名"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    電話
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="請輸入您的電話號碼"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    電郵
                  </label>
                  <Input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="請輸入您的電郵地址"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    主題
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="請輸入主題"
                    className={errors.subject ? "border-red-500" : ""}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    訊息
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="請輸入您的訊息"
                    rows={5}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <Button type="submit" className="w-full bg-[#A67C3F] hover:bg-[#8A6835] text-white rounded-full">
                  提交
                </Button>

                <p className="text-xs text-gray-500 mt-2 text-center">
                  *所有資料只作聯絡用途，本公司不會在未得到你事先同意下向任何第三方披露你的個人資料。
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </main>
  )
}
