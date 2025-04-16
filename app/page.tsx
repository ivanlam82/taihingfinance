import LoanCalculator from "@/components/loan-calculator"
import Navbar from "@/components/navbar"
import WhatsAppButton from "@/components/whatsapp-button"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ApplyButton from "@/components/apply-button"
import Footer from "@/components/footer"
import { Shield, Clock, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <div className="relative min-h-screen md:h-screen">
        <div className="absolute inset-0 z-0">
          <img src="/images/wallpaper.png" alt="香港夜景" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 py-20 md:py-0">
            <div className="max-w-md mx-auto md:mx-0">
              <LoanCalculator />
            </div>
          </div>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">我們的服務</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-md">
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <img
                  src="/images/personal-loan-new.png"
                  alt="個人貸款"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="w-16 h-16 bg-[#A67C3F] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">個人貸款</h3>
              <p className="text-gray-600 mb-6">
                提供靈活的個人貸款方案，滿足您的各種財務需求，快速審批，最快當天放款。
              </p>
              <div className="flex flex-col space-y-2">
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="w-full border-[#A67C3F] text-[#A67C3F] hover:bg-[#A67C3F] hover:text-white"
                  >
                    了解更多
                  </Button>
                </Link>
                <ApplyButton />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-md">
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <img
                  src="/images/property-loan-new.png"
                  alt="物業貸款"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="w-16 h-16 bg-[#A67C3F] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">物業貸款</h3>
              <p className="text-gray-600 mb-6">以您的物業作抵押，獲取更高貸款額度和更優惠的利率，靈活的還款期限。</p>
              <div className="flex flex-col space-y-2">
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="w-full border-[#A67C3F] text-[#A67C3F] hover:bg-[#A67C3F] hover:text-white"
                  >
                    了解更多
                  </Button>
                </Link>
                <ApplyButton />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-md">
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <img
                  src="/images/business-loan-new.png"
                  alt="企業融資"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="w-16 h-16 bg-[#A67C3F] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">企業融資</h3>
              <p className="text-gray-600 mb-6">
                為企業提供全面的融資解決方案，支持業務發展和擴張，專業顧問為您量身定制。
              </p>
              <div className="flex flex-col space-y-2">
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="w-full border-[#A67C3F] text-[#A67C3F] hover:bg-[#A67C3F] hover:text-white"
                  >
                    了解更多
                  </Button>
                </Link>
                <ApplyButton />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-md">
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <img
                  src="/images/debt-consolidation-new.png"
                  alt="債務合併"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="w-16 h-16 bg-[#A67C3F] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">債務合併</h3>
              <p className="text-gray-600 mb-6">
                將多項債務合併為一筆貸款，降低每月還款額，簡化財務管理，減輕財務壓力。
              </p>
              <div className="flex flex-col space-y-2">
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="w-full border-[#A67C3F] text-[#A67C3F] hover:bg-[#A67C3F] hover:text-white"
                  >
                    了解更多
                  </Button>
                </Link>
                <ApplyButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <img src="/images/financial-solution-bg.png" alt="金融解決方案背景" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-gray-800 rounded-full text-sm font-medium text-white mb-3">
              為何選擇我們
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">根據您的需求量身定制的金融解決方案</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              我們提供一系列貸款產品，以具競爭力的利率和靈活的條款滿足您的財務需求。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/40 p-6 rounded-lg shadow-md border border-gray-700">
              <div className="w-12 h-12 bg-[#A67C3F]/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-[#A67C3F]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">安全流程</h3>
              <p className="text-gray-300">您的數據受到銀行級別的安全和加密保護。</p>
            </div>

            <div className="bg-black/40 p-6 rounded-lg shadow-md border border-gray-700">
              <div className="w-12 h-12 bg-[#A67C3F]/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-[#A67C3F]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">快速批准</h3>
              <p className="text-gray-300">通過我們的簡化流程，最快可在24小時內獲得批准。</p>
            </div>

            <div className="bg-black/40 p-6 rounded-lg shadow-md border border-gray-700">
              <div className="w-12 h-12 bg-[#A67C3F]/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#A67C3F]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">靈活條款</h3>
              <p className="text-gray-300">選擇適合您預算和財務目標的還款條款。</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <ApplyButton />
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </main>
  )
}
