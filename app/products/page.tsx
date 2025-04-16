import Navbar from "@/components/navbar"
import WhatsAppButton from "@/components/whatsapp-button"
import ApplyButton from "@/components/apply-button"
import Footer from "@/components/footer"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <Navbar />
      <div className="pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8">
            <img src="/images/fulllogo.png" alt="泰興財務" className="h-[220px] mb-4" />
            <h1 className="text-2xl md:text-3xl font-bold text-center">產品服務</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <img
                  src="/images/personal-loan-new.png"
                  alt="個人貸款"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">個人貸款</h3>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>貸款額高達HK$1,000,000</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>還款期長達60個月</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>靈活還款方式</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>快速審批，最快24小時放款</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>無需抵押品</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>適合各種用途：旅遊、裝修、教育、婚禮等</span>
                </li>
              </ul>
              <ApplyButton />
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <img
                  src="/images/property-loan-new.png"
                  alt="物業貸款"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">物業貸款</h3>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>貸款額高達物業估值的80%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>還款期長達30年</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>具競爭力的利率</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>專業估價服務</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>適用於各類物業：住宅、商業、工業</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>靈活的還款選項</span>
                </li>
              </ul>
              <ApplyButton />
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <img
                  src="/images/business-loan-new.png"
                  alt="企業融資"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">企業融資</h3>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>貸款額高達HK$5,000,000</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>靈活的還款計劃</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>無需抵押品選項</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>專業財務顧問服務</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>適合業務擴張、設備購置、營運資金等</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>為各行業企業提供支持</span>
                </li>
              </ul>
              <ApplyButton />
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <img
                  src="/images/debt-consolidation-new.png"
                  alt="債務合併"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">債務合併</h3>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>將多項債務合併為一筆貸款</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>降低每月還款額</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>簡化財務管理</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>個人化還款計劃</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>減輕財務壓力</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C3F] mr-2">•</span>
                  <span>專業顧問提供建議</span>
                </li>
              </ul>
              <ApplyButton />
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </main>
  )
}
