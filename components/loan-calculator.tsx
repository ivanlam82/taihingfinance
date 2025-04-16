"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useApplicationForm } from "@/hooks/use-application-form"

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(300000)
  const [loanTerm, setLoanTerm] = useState(24)
  const [monthlyPaymentLow, setMonthlyPaymentLow] = useState(0)
  const [monthlyPaymentHigh, setMonthlyPaymentHigh] = useState(0)
  const { openApplicationForm } = useApplicationForm()

  // 計算每月還款金額範圍
  useEffect(() => {
    // 低利率 (5%)
    const lowInterestRate = 0.05 / 12
    const lowMonthlyPayment =
      (loanAmount * lowInterestRate * Math.pow(1 + lowInterestRate, loanTerm)) /
      (Math.pow(1 + lowInterestRate, loanTerm) - 1)

    // 高利率 (25%)
    const highInterestRate = 0.25 / 12
    const highMonthlyPayment =
      (loanAmount * highInterestRate * Math.pow(1 + highInterestRate, loanTerm)) /
      (Math.pow(1 + highInterestRate, loanTerm) - 1)

    setMonthlyPaymentLow(Math.round(lowMonthlyPayment))
    setMonthlyPaymentHigh(Math.round(highMonthlyPayment))
  }, [loanAmount, loanTerm])

  const handleApply = () => {
    openApplicationForm(loanAmount)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-gray-800">貸款計算器</h2>

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">貸款金額</span>
          <span className="font-bold text-gray-900">HK${loanAmount.toLocaleString()}</span>
        </div>
        <Slider
          defaultValue={[300000]}
          max={1000000}
          min={5000}
          step={1000}
          value={[loanAmount]}
          onValueChange={(value) => setLoanAmount(value[0])}
          className="mb-2"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>HK$5,000</span>
          <span>HK$1,000,000</span>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">還款期</span>
          <span className="font-bold text-gray-900">{loanTerm}個月</span>
        </div>
        <Slider
          defaultValue={[24]}
          max={60}
          min={1}
          step={1}
          value={[loanTerm]}
          onValueChange={(value) => setLoanTerm(value[0])}
          className="mb-2"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>1個月</span>
          <span>60個月</span>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">每月還款：</span>
          <span className="font-bold text-gray-900">
            HK${monthlyPaymentLow.toLocaleString()}-{monthlyPaymentHigh.toLocaleString()}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">*基於年利率5%-25%計算</p>
      </div>

      <Button className="w-full bg-[#A67C3F] hover:bg-[#8A6835] text-white rounded-full py-6" onClick={handleApply}>
        立即申請
      </Button>

      <p className="text-xs text-gray-500 mt-4 text-center">*貸款額度僅作參考，實際金額視乎審批結果而定*</p>
    </div>
  )
}
