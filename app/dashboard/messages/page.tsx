"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus } from "lucide-react"

export default function Messages() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data
  const messages = [
    { id: 1, from: "Parin", subject: "About our next meeting", date: "2025-03-30T09:15:00", read: false },
    { id: 2, from: "Support Team", subject: "Welcome to GoldenBuddies", date: "2025-03-29T14:22:00", read: false },
    { id: 3, from: "Parin", subject: "Documents you requested", date: "2025-03-28T16:45:00", read: false },
    { id: 4, from: "System", subject: "Your account has been created", date: "2025-03-27T10:00:00", read: false },
    { id: 5, from: "Parin", subject: "Introduction", date: "2025-03-26T11:30:00", read: false },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }

  const filteredMessages = messages.filter(
    (message) =>
      message.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Messages</h1>
        <Button className="bg-amber-600 hover:bg-amber-700" asChild>
          <Link href="/dashboard/messages/new">
            <Plus className="mr-2 h-4 w-4" /> New Message
          </Link>
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search messages..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Inbox</CardTitle>
          <CardDescription>You have {messages.length} unread messages</CardDescription>
        </CardHeader>
        <CardContent>
          {filteredMessages.length > 0 ? (
            <div className="space-y-2">
              {filteredMessages.map((message) => (
                <Link key={message.id} href={`/dashboard/messages/${message.id}`} className="block">
                  <div
                    className={`flex justify-between items-center p-3 rounded-md ${message.read ? "bg-white" : "bg-amber-50"} hover:bg-amber-100`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-amber-200 flex items-center justify-center">
                        <span className="font-medium text-amber-800">
                          {message.from
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className={`font-medium ${message.read ? "" : "font-semibold"}`}>{message.from}</p>
                        <p className="text-sm text-muted-foreground">{message.subject}</p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{formatDate(message.date)}</div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p>No messages found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

