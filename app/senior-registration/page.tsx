"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function SeniorRegistration() {
  const { t } = useLanguage()
  const { signup } = useAuth()
  const router = useRouter()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    dateOfBirth: "",
    assistanceNeeded: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [generalError, setGeneralError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
    if (generalError) setGeneralError("")
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user selects
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Required fields
    const requiredFields = ["fullName", "email", "phone", "dateOfBirth", "password", "confirmPassword"]
    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = t("requiredField")
      }
    })

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("invalidEmail")
    }

    // Password match
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t("passwordMismatch")
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      await signup(formData, "senior")
      // Redirect is handled in the auth context
    } catch (error) {
      if (error instanceof Error) {
        setGeneralError(error.message)
      } else {
        setGeneralError("An unexpected error occurred during registration")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          <h1 className="text-3xl font-bold text-amber-900 mb-8 text-center">{t("seniorRegistrationTitle")}</h1>

          {generalError && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{generalError}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">{t("fullName")} *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? "border-red-500" : ""}
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t("email")} *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t("phone")} *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">{t("dateOfBirth")} *</Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className={errors.dateOfBirth ? "border-red-500" : ""}
                />
                {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">{t("address")}</Label>
                <Input id="address" name="address" value={formData.address} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">{t("city")}</Label>
                <Input id="city" name="city" value={formData.city} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">{t("state")}</Label>
                <Input id="state" name="state" value={formData.state} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="zipCode">{t("zipCode")}</Label>
                <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="assistanceNeeded">{t("assistanceNeeded")}</Label>
                <Select
                  onValueChange={(value) => handleSelectChange("assistanceNeeded", value)}
                  value={formData.assistanceNeeded}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select assistance type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="legal">Legal Documentation</SelectItem>
                    <SelectItem value="tech">Technology Help</SelectItem>
                    <SelectItem value="companionship">Companionship</SelectItem>
                    <SelectItem value="errands">Errands & Shopping</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{t("password")} *</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "border-red-500" : ""}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">{t("confirmPassword")} *</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={errors.confirmPassword ? "border-red-500" : ""}
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 px-8 py-2 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : t("register")}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

