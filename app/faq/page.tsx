import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import WhatsAppButton from "@/components/whatsapp-button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <Navbar />
      <div className="pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8">
            <img src="/images/fulllogo.png" alt="泰興財務" className="h-[220px] mb-4" />
            <h1 className="text-2xl md:text-3xl font-bold text-center">常見問題</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/images/faq-wooden-blocks.jpeg"
                alt="常見問題"
                className="w-full h-full object-cover"
                style={{ minHeight: "500px" }}
              />
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium">申請貸款須符合甚麼資格？</h3>
                    <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="p-4 pt-0 border-t border-gray-100">
                    <p className="text-gray-700">
                      申請人須年滿18歲，持有有效香港身份證，並有穩定收入或固定職業。我們會根據您的財務狀況、信貸記錄和還款能力進行評估。即使您有不良信貸記錄，我們仍可能為您提供貸款方案。
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium">申請貸款需要提供哪些文件？</h3>
                    <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="p-4 pt-0 border-t border-gray-100">
                    <p className="text-gray-700">
                      一般需要提供香港身份證、最近3個月的住址證明（如水電費單或銀行月結單）、最近3個月的收入證明（如糧單或銀行月結單）。如申請物業貸款，則需提供物業相關文件。具體所需文件可能因貸款類型和個人情況而異。
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium">沒有入息證明文件，可以申請貸款嗎？</h3>
                    <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="p-4 pt-0 border-t border-gray-100">
                    <p className="text-gray-700">
                      是的，我們提供無需入息證明的貸款方案。在這種情況下，我們會考慮其他因素，如您的信貸記錄、銀行月結單、資產證明等。請注意，無需入息證明的貸款可能有較高的利率或較低的貸款額度。建議您與我們的顧問討論最適合您的方案。
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium">申請貸款需時多久？</h3>
                    <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="p-4 pt-0 border-t border-gray-100">
                    <p className="text-gray-700">
                      我們致力於提供快速的審批服務。一般情況下，個人貸款可在24小時內獲得審批結果，最快可當天放款。物業貸款和企業融資可能需要較長時間，通常在3-5個工作日內完成。審批時間可能因申請人的個人情況和所需文件的完整性而有所不同。
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium">申請貸款是否需要擔保人？</h3>
                    <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="p-4 pt-0 border-t border-gray-100">
                    <p className="text-gray-700">
                      大多數個人貸款不需要擔保人。然而，如果您的信貸記錄較差或收入不穩定，我們可能會建議您提供擔保人以增加獲批的機會或獲得更優惠的利率。物業貸款通常以物業作為抵押，而部分企業融資可能需要公司董事作為個人擔保。
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-4">還有其他問題？</p>
            <Link href="/contact">
              <Button className="bg-[#A67C3F] hover:bg-[#8A6835] text-white rounded-full px-8 py-2">聯絡我們</Button>
            </Link>
          </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </main>
  )
}
