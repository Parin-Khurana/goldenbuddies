"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { useAuth } from "@/contexts/auth-context"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()
  const { user } = useAuth()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-amber-500 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold text-amber-900">GoldenBuddies</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-amber-900 hover:text-amber-600 font-medium">
              {t("howItWorks")}
            </Link>
            <Link href="#" className="text-amber-900 hover:text-amber-600 font-medium">
              {t("features")}
            </Link>
            <Link href="#" className="text-amber-900 hover:text-amber-600 font-medium">
              {t("testimonials")}
            </Link>
            <Link href="#" className="text-amber-900 hover:text-amber-600 font-medium">
              {t("faq")}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            {user ? (
              <Button className="bg-amber-600 hover:bg-amber-700" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-100" asChild>
                  <Link href="/login">{t("login")}</Link>
                </Button>
                <Button className="bg-amber-600 hover:bg-amber-700" asChild>
                  <Link href="/">{t("signup")}</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button className="text-amber-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-amber-100">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#"
                className="text-amber-900 hover:text-amber-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("howItWorks")}
              </Link>
              <Link
                href="#"
                className="text-amber-900 hover:text-amber-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("features")}
              </Link>
              <Link
                href="#"
                className="text-amber-900 hover:text-amber-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("testimonials")}
              </Link>
              <Link
                href="#"
                className="text-amber-900 hover:text-amber-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("faq")}
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                {user ? (
                  <Button className="bg-amber-600 hover:bg-amber-700 w-full" asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="border-amber-600 text-amber-600 hover:bg-amber-100 w-full"
                      asChild
                    >
                      <Link href="/login">{t("login")}</Link>
                    </Button>
                    <Button className="bg-amber-600 hover:bg-amber-700 w-full" asChild>
                      <Link href="/">{t("signup")}</Link>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

