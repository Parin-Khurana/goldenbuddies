"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "hi"

type Translations = {
  [key in Language]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    // Navbar
    howItWorks: "How It Works",
    features: "Features",
    testimonials: "Testimonials",
    faq: "FAQ",
    login: "Log In",
    signup: "Sign Up",

    // Hero
    heroTitle: "Bridging Generations Through Compassion",
    heroDescription:
      "GoldenBuddies connects seniors with youth volunteers for assistance with legal documentation, technology guidance, and meaningful companionship.",
    seniorButton: "I'm a Senior",
    volunteerButton: "I Want to Volunteer",

    // How It Works
    howItWorksTitle: "How GoldenBuddies Works",
    step1Title: "Sign Up",
    step1Description: "Create a profile as a senior seeking assistance or as a youth volunteer ready to help.",
    step2Title: "Get Matched",
    step2Description:
      "Our AI matching system pairs seniors with compatible volunteers based on needs, skills, and availability.",
    step3Title: "Connect Safely",
    step3Description:
      "Meet virtually through our secure platform or schedule in-person assistance with proper verification.",

    // Features
    featuresTitle: "Platform Features",
    featuresDescription:
      "Our platform is designed with both seniors and volunteers in mind, offering tools that make connections meaningful and assistance effective.",
    feature1Title: "Secure Video Chat",
    feature1Description:
      "Connect face-to-face through our encrypted video platform designed specifically for ease of use.",
    feature2Title: "AI-Based Matching",
    feature2Description:
      "Our intelligent system pairs seniors with volunteers who best match their specific needs and personalities.",
    feature3Title: "AI Voice Assistant",
    feature3Description:
      "Voice-activated help for seniors to navigate the platform and connect with their volunteer buddies.",

    // Join Us
    joinUsTitle: "Join Our Community Today",
    joinUsDescription:
      "Whether you're looking for assistance or wanting to make a difference in a senior's life, GoldenBuddies welcomes you.",
    registerSenior: "Register as a Senior",
    becomeVolunteer: "Become a Volunteer",

    // Testimonials
    testimonialsTitle: "Success Stories",
    testimonial1:
      '"GoldenBuddies helped me understand my Medicare documents and file important paperwork. My volunteer, Sarah, is now like family to me."',
    testimonial1Name: "Eleanor, 78",
    testimonial1Role: "Senior Member",
    testimonial2:
      "\"Volunteering with GoldenBuddies has been incredibly rewarding. I've learned so much from the seniors I've helped, and it's made a real difference in their lives.\"",
    testimonial2Name: "Jason, 22",
    testimonial2Role: "Volunteer",

    // Forms
    seniorRegistrationTitle: "Senior Registration",
    volunteerRegistrationTitle: "Volunteer Registration",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    address: "Address",
    city: "City",
    state: "State/Province",
    zipCode: "ZIP/Postal Code",
    dateOfBirth: "Date of Birth",
    assistanceNeeded: "Type of Assistance Needed",
    skills: "Skills & Expertise",
    availability: "Availability",
    password: "Password",
    confirmPassword: "Confirm Password",
    register: "Register",
    requiredField: "This field is required",
    invalidEmail: "Please enter a valid email address",
    passwordMismatch: "Passwords do not match",

    // Footer
    aboutUs: "About Us",
    seniorResources: "Senior Resources",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    accessibility: "Accessibility",
    contactUs: "Contact Us",
    allRightsReserved: "All rights reserved.",
  },
  hi: {
    // Navbar
    howItWorks: "यह कैसे काम करता है",
    features: "विशेषताएँ",
    testimonials: "प्रशंसापत्र",
    faq: "अक्सर पूछे जाने वाले प्रश्न",
    login: "लॉग इन करें",
    signup: "साइन अप करें",

    // Hero
    heroTitle: "करुणा के माध्यम से पीढ़ियों को जोड़ना",
    heroDescription:
      "गोल्डनबडीज वरिष्ठ नागरिकों को कानूनी दस्तावेज़ीकरण, प्रौद्योगिकी मार्गदर्शन और सार्थक साथ के लिए युवा स्वयंसेवकों से जोड़ता है।",
    seniorButton: "मैं एक वरिष्ठ नागरिक हूँ",
    volunteerButton: "मैं स्वयंसेवक बनना चाहता हूँ",

    // How It Works
    howItWorksTitle: "गोल्डनबडीज कैसे काम करता है",
    step1Title: "साइन अप करें",
    step1Description: "सहायता चाहने वाले वरिष्ठ नागरिक या मदद करने के लिए तैयार युवा स्वयंसेवक के रूप में एक प्रोफ़ाइल बनाएं।",
    step2Title: "मिलान प्राप्त करें",
    step2Description:
      "हमारी AI मिलान प्रणाली वरिष्ठ नागरिकों को जरूरतों, कौशल और उपलब्धता के आधार पर संगत स्वयंसेवकों के साथ जोड़ती है।",
    step3Title: "सुरक्षित रूप से जुड़ें",
    step3Description:
      "हमारे सुरक्षित प्लेटफॉर्म के माध्यम से आभासी रूप से मिलें या उचित सत्यापन के साथ व्यक्तिगत सहायता का कार्यक्रम बनाएं।",

    // Features
    featuresTitle: "प्लेटफॉर्म की विशेषताएँ",
    featuresDescription:
      "हमारा प्लेटफॉर्म वरिष्ठ नागरिकों और स्वयंसेवकों दोनों को ध्यान में रखकर डिज़ाइन किया गया है, जो ऐसे उपकरण प्रदान करता है जो संबंधों को सार्थक और सहायता को प्रभावी बनाते हैं।",
    feature1Title: "सुरक्षित वीडियो चैट",
    feature1Description:
      "हमारे एन्क्रिप्टेड वीडियो प्लेटफॉर्म के माध्यम से आमने-सामने जुड़ें जो विशेष रूप से उपयोग में आसानी के लिए डिज़ाइन किया गया है।",
    feature2Title: "AI-आधारित मिलान",
    feature2Description:
      "हमारी बुद्धिमान प्रणाली वरिष्ठ नागरिकों को ऐसे स्वयंसेवकों के साथ जोड़ती है जो उनकी विशिष्ट जरूरतों और व्यक्तित्व के साथ सबसे अच्छा मेल खाते हैं।",
    feature3Title: "AI वॉयस असिस्टेंट",
    feature3Description:
      "वरिष्ठ नागरिकों के लिए प्लेटफॉर्म को नेविगेट करने और अपने स्वयंसेवक मित्रों से जुड़ने के लिए वॉयस-एक्टिवेटेड सहायता।",

    // Join Us
    joinUsTitle: "आज हमारे समुदाय से जुड़ें",
    joinUsDescription:
      "चाहे आप सहायता की तलाश में हों या किसी वरिष्ठ नागरिक के जीवन में बदलाव लाना चाहते हों, गोल्डनबडीज आपका स्वागत करता है।",
    registerSenior: "वरिष्ठ नागरिक के रूप में पंजीकरण करें",
    becomeVolunteer: "स्वयंसेवक बनें",

    // Testimonials
    testimonialsTitle: "सफलता की कहानियाँ",
    testimonial1:
      '"गोल्डनबडीज ने मुझे मेरे मेडिकेयर दस्तावेजों को समझने और महत्वपूर्ण कागजात दाखिल करने में मदद की। मेरी स्वयंसेवक, सारा, अब मेरे परिवार की तरह है।"',
    testimonial1Name: "एलेनोर, 78",
    testimonial1Role: "वरिष्ठ सदस्य",
    testimonial2:
      '"गोल्डनबडीज के साथ स्वयंसेवा करना अविश्वसनीय रूप से फायदेमंद रहा है। मैंने उन वरिष्ठ नागरिकों से बहुत कुछ सीखा है जिनकी मैंने मदद की है, और इसने उनके जीवन में वास्तविक अंतर लाया है।"',
    testimonial2Name: "जेसन, 22",
    testimonial2Role: "स्वयंसेवक",

    // Forms
    seniorRegistrationTitle: "वरिष्ठ नागरिक पंजीकरण",
    volunteerRegistrationTitle: "स्वयंसेवक पंजीकरण",
    fullName: "पूरा नाम",
    email: "ईमेल पता",
    phone: "फोन नंबर",
    address: "पता",
    city: "शहर",
    state: "राज्य/प्रांत",
    zipCode: "पिन/पोस्टल कोड",
    dateOfBirth: "जन्म तिथि",
    assistanceNeeded: "आवश्यक सहायता का प्रकार",
    skills: "कौशल और विशेषज्ञता",
    availability: "उपलब्धता",
    password: "पासवर्ड",
    confirmPassword: "पासवर्ड की पुष्टि करें",
    register: "पंजीकरण करें",
    requiredField: "यह फ़ील्ड आवश्यक है",
    invalidEmail: "कृपया एक वैध ईमेल पता दर्ज करें",
    passwordMismatch: "पासवर्ड मेल नहीं खाते",

    // Footer
    aboutUs: "हमारे बारे में",
    seniorResources: "वरिष्ठ नागरिक संसाधन",
    privacyPolicy: "गोपनीयता नीति",
    termsOfService: "सेवा की शर्तें",
    cookiePolicy: "कुकी नीति",
    accessibility: "पहुंच",
    contactUs: "संपर्क करें",
    allRightsReserved: "सर्वाधिकार सुरक्षित।",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

