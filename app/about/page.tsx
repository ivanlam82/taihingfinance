import Navbar from "@/components/navbar"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <Navbar />
      <div className="pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8">
            <img src="/images/fulllogo.png" alt="泰興財務" className="h-[220px] mb-4" />
            <h1 className="text-2xl md:text-3xl font-bold text-center">關於我們</h1>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">公司簡介</h2>
              <p className="text-gray-700 mb-4">
                泰興財務有限公司成立於2016年，是香港領先的財務服務提供商之一。我們專注於為個人和企業客戶提供全面的財務解決方案，包括個人貸款、物業貸款、企業融資等多元化服務。
              </p>
              <p className="text-gray-700 mb-4">
                多年來，我們憑藉專業的團隊、靈活的產品和優質的服務，贏得了廣大客戶的信任和支持。我們致力於為客戶提供最適合的財務方案，幫助他們實現財務目標。
              </p>
              <p className="text-gray-700">
                泰興財務持有香港放債人牌照，嚴格遵守相關法規和行業標準，確保為客戶提供合法、透明、安全的財務服務。
              </p>
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">我們的使命</h2>
              <p className="text-gray-700 mb-4">
                我們的使命是通過提供專業、便捷、透明的財務服務，幫助客戶解決資金需求，實現財務自由。
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>為客戶提供最適合的財務解決方案</li>
                <li>確保服務過程簡單、快捷、透明</li>
                <li>建立長期互信的客戶關係</li>
                <li>持續創新，提升服務質量</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">我們的優勢</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">專業團隊</h3>
                  <p className="text-gray-700">我們擁有經驗豐富的財務顧問團隊，能夠為客戶提供專業的建議和服務。</p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">靈活方案</h3>
                  <p className="text-gray-700">根據客戶的不同需求，提供靈活多樣的貸款方案，滿足各種財務需求。</p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">快速審批</h3>
                  <p className="text-gray-700">高效的審批流程，讓客戶能夠在最短時間內獲得所需資金。</p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">優質服務</h3>
                  <p className="text-gray-700">提供一對一的客戶服務，確保客戶在整個貸款過程中得到全面支持。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </main>
  )
}
