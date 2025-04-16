import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ApplyButton from "@/components/apply-button"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/images/TH-LOGO-01.png" alt="泰興財務" className="h-[52px] md:h-[65px]" />
              <span className="sr-only">泰興財務</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">打開選單</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-[#A67C3F] transition-colors">
                  首頁
                </Link>
                <Link href="/about" className="text-lg font-medium hover:text-[#A67C3F] transition-colors">
                  關於我們
                </Link>
                <Link href="/products" className="text-lg font-medium hover:text-[#A67C3F] transition-colors">
                  產品服務
                </Link>
                <Link href="/faq" className="text-lg font-medium hover:text-[#A67C3F] transition-colors">
                  常見問題
                </Link>
                <Link href="/contact" className="text-lg font-medium hover:text-[#A67C3F] transition-colors">
                  聯絡我們
                </Link>
                <ApplyButton />
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#A67C3F] transition-colors">
              首頁
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#A67C3F] transition-colors">
              關於我們
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-[#A67C3F] transition-colors">
              產品服務
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-[#A67C3F] transition-colors">
              常見問題
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#A67C3F] transition-colors">
              聯絡我們
            </Link>
          </nav>

          <div className="hidden md:block">
            <ApplyButton />
          </div>
        </div>
      </div>
    </header>
  )
}
