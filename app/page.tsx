"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, MessageCircle, Shield, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/feature-card"
import HowItWorksCard from "@/components/how-it-works-card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Background pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">{t("heroTitle")}</h1>
              <p className="text-lg text-amber-800 mb-8">{t("heroDescription")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700" asChild>
                  <Link href="/senior-registration">
                    {t("seniorButton")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-100"
                  asChild
                >
                  <Link href="/volunteer-registration">
                    {t("volunteerButton")} <Heart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Seniors and youth volunteers connecting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">{t("howItWorksTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HowItWorksCard number={1} title={t("step1Title")} description={t("step1Description")} userType="both" />
            <HowItWorksCard number={2} title={t("step2Title")} description={t("step2Description")} userType="both" />
            <HowItWorksCard number={3} title={t("step3Title")} description={t("step3Description")} userType="both" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-amber-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-4">{t("featuresTitle")}</h2>
          <p className="text-center text-amber-800 mb-12 max-w-2xl mx-auto">{t("featuresDescription")}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MessageCircle className="h-10 w-10 text-amber-600" />}
              title={t("feature1Title")}
              description={t("feature1Description")}
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-amber-600" />}
              title={t("feature2Title")}
              description={t("feature2Description")}
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-amber-600" />}
              title={t("feature3Title")}
              description={t("feature3Description")}
            />
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-amber-600 to-amber-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("joinUsTitle")}</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">{t("joinUsDescription")}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-100" asChild>
              <Link href="/senior-registration">{t("registerSenior")}</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-amber-700" asChild>
              <Link href="/volunteer-registration">{t("becomeVolunteer")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">{t("testimonialsTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-50 p-6 rounded-xl shadow-md">
              <p className="italic text-amber-800 mb-4">{t("testimonial1")}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-200 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-amber-900">{t("testimonial1Name")}</h4>
                  <p className="text-amber-700">{t("testimonial1Role")}</p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl shadow-md">
              <p className="italic text-amber-800 mb-4">{t("testimonial2")}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-200 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-amber-900">{t("testimonial2Name")}</h4>
                  <p className="text-amber-700">{t("testimonial2Role")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

