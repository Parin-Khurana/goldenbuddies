"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GoldenBuddies</h3>
            <p className="mb-4">{t("heroDescription")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t("howItWorks")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t("volunteerButton")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t("seniorResources")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t("faq")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("legal")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t("termsOfService")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t("cookiePolicy")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t("accessibility")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contactUs")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span>123 Community Lane, Caring City, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@goldenbuddies.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} GoldenBuddies. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}

