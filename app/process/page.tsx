import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "@/components/footer"

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#0a1929]">
      <Navbar />
      <div className="pt-24 pb-16 container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <img src="/images/fulllogo_transparent_nobuffer.png" alt="泰興財務" className="h-[220px] mb-4" />
          <h1 className="text-3xl font-bold text-center text-white">申請程序</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">提交申請</h3>
            <p className="text-gray-300 mb-6">填寫並提交網上申請表格，或致電我們的客戶服務熱線。</p>
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full">立即申請</Button>
          </div>

          <div className="bg-white/10 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">審批過程</h3>
            <p className="text-gray-300 mb-6">我們的專業團隊將審核您的申請，並在最短時間內完成審批。</p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">放款</h3>
            <p className="text-gray-300 mb-6">申請獲批後，資金將迅速轉入您指定的銀行賬戶。</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">所需文件</h2>
          <div className="max-w-2xl mx-auto bg-white/10 p-6 rounded-lg">
            <ul className="text-left space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>香港身份證</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>最近3個月的住址證明（如水電費單、銀行月結單等）</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>最近3個月的收入證明（如糧單、銀行月結單等）</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>其他可能需要的文件（視乎申請情況）</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </main>
  )
}
