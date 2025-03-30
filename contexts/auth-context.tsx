"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

export type UserRole = "senior" | "volunteer"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  createdAt: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (userData: any, role: UserRole) => Promise<void>
  logout: () => void
}

// Create a default context value
const defaultContextValue: AuthContextType = {
  user: null,
  isLoading: true,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
}

const AuthContext = createContext<AuthContextType>(defaultContextValue)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem("goldenbuddies_user")
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Error checking authentication:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, we'll create a mock user
      // In a real app, this would come from your backend
      const mockUser: User = {
        id: "123456",
        name: email.split("@")[0],
        email,
        role: email.includes("volunteer") ? "volunteer" : "senior",
        createdAt: new Date().toISOString(),
      }

      setUser(mockUser)
      localStorage.setItem("goldenbuddies_user", JSON.stringify(mockUser))
      router.push("/dashboard")
    } catch (error) {
      console.error("Login error:", error)
      throw new Error("Invalid email or password")
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (userData: any, role: UserRole) => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, we'll create a mock user
      const mockUser: User = {
        id: Math.random().toString(36).substring(2, 15),
        name: userData.fullName,
        email: userData.email,
        role,
        createdAt: new Date().toISOString(),
      }

      setUser(mockUser)
      localStorage.setItem("goldenbuddies_user", JSON.stringify(mockUser))
      router.push("/dashboard")
    } catch (error) {
      console.error("Signup error:", error)
      throw new Error("Error creating account")
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("goldenbuddies_user")
    router.push("/")
  }

  return <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

