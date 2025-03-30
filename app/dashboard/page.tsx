"use client"

import { useState } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { Calendar, MessageSquare, FileText } from "lucide-react"

export default function Dashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const appointments = [
    { id: 1, title: "Legal Document Review", date: "2025-04-02T14:00:00", with: "Alex Johnson" },
    { id: 2, title: "Technology Help Session", date: "2025-04-05T10:30:00", with: "Alex Johnson" },
    { id: 3, title: "Weekly Check-in", date: "2025-04-08T15:00:00", with: "Alex Johnson" },
  ]

  const messages = [
    { id: 1, from: "Alex Johnson", subject: "About our next meeting", date: "2025-03-30T09:15:00", read: false },
    { id: 2, from: "Support Team", subject: "Welcome to GoldenBuddies", date: "2025-03-29T14:22:00", read: false },
    { id: 3, from: "Alex Johnson", subject: "Documents you requested", date: "2025-03-28T16:45:00", read: false },
    { id: 4, from: "System", subject: "Your account has been created", date: "2025-03-27T10:00:00", read: false },
    { id: 5, from: "Alex Johnson", subject: "Introduction", date: "2025-03-26T11:30:00", read: false },
  ]

  const documents = [
    { id: 1, title: "Medicare Application Guide", type: "PDF", date: "2025-03-25T10:00:00" },
    { id: 2, title: "Power of Attorney Form", type: "DOCX", date: "2025-03-24T14:30:00" },
    { id: 3, title: "Social Security Benefits Overview", type: "PDF", date: "2025-03-23T09:15:00" },
    { id: 4, title: "Healthcare Proxy Form", type: "PDF", date: "2025-03-22T16:45:00" },
    { id: 5, title: "Living Will Template", type: "DOCX", date: "2025-03-21T11:30:00" },
    { id: 6, title: "Medication Schedule", type: "XLSX", date: "2025-03-20T13:00:00" },
    { id: 7, title: "Emergency Contact Information", type: "PDF", date: "2025-03-19T10:30:00" },
    { id: 8, title: "Home Care Services Guide", type: "PDF", date: "2025-03-18T15:45:00" },
    { id: 9, title: "Technology Tutorial", type: "PDF", date: "2025-03-17T09:00:00" },
    { id: 10, title: "Local Community Resources", type: "PDF", date: "2025-03-16T14:15:00" },
    { id: 11, title: "Monthly Budget Template", type: "XLSX", date: "2025-03-15T11:00:00" },
    { id: 12, title: "Healthy Aging Guide", type: "PDF", date: "2025-03-14T16:30:00" },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="recent">Recent Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Upcoming Appointments Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">Upcoming Appointments</CardTitle>
                <Calendar className="h-5 w-5 text-amber-600" />
              </CardHeader>
              <CardContent>
                <CardDescription>Your scheduled meetings</CardDescription>
                <div className="mt-4 text-3xl font-bold text-amber-600">{appointments.length}</div>
                <Button variant="link" className="mt-2 px-0 text-amber-600" asChild>
                  <Link href="/dashboard/appointments">View all</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Unread Messages Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">Unread Messages</CardTitle>
                <MessageSquare className="h-5 w-5 text-amber-600" />
              </CardHeader>
              <CardContent>
                <CardDescription>Messages waiting for response</CardDescription>
                <div className="mt-4 text-3xl font-bold text-amber-600">{messages.length}</div>
                <Button variant="link" className="mt-2 px-0 text-amber-600" asChild>
                  <Link href="/dashboard/messages">View all</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Documents Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">Documents</CardTitle>
                <FileText className="h-5 w-5 text-amber-600" />
              </CardHeader>
              <CardContent>
                <CardDescription>Your saved documents</CardDescription>
                <div className="mt-4 text-3xl font-bold text-amber-600">{documents.length}</div>
                <Button variant="link" className="mt-2 px-0 text-amber-600" asChild>
                  <Link href="/dashboard/documents">View all</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Your Buddy Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">Your Buddy</CardTitle>
              <CardDescription>Your matched companion</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 text-2xl font-bold">AJ</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Arun Jindal</h3>
                  <p className="text-sm text-muted-foreground">Volunteer since June 2023</p>
                  <div className="mt-2 flex space-x-2">
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700" asChild>
                      <Link href="/dashboard/messages/new?to=Alex%20Johnson">Message</Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-amber-600 text-amber-600 hover:bg-amber-100"
                      asChild
                    >
                      <Link href="/dashboard/appointments/schedule?with=Alex%20Johnson">Schedule Meeting</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Your scheduled meetings and events</CardDescription>
            </CardHeader>
            <CardContent>
              {appointments.length > 0 ? (
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="flex justify-between items-center border-b pb-3">
                      <div>
                        <h3 className="font-medium">{appointment.title}</h3>
                        <p className="text-sm text-muted-foreground">With: {appointment.with}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatDate(appointment.date)}</p>
                        <p className="text-sm text-muted-foreground">{formatTime(appointment.date)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No upcoming appointments.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your recent interactions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-amber-600 pl-4 py-2">
                  <p className="text-sm text-muted-foreground">Today</p>
                  <p>You received 2 new messages from Alex Johnson</p>
                </div>
                <div className="border-l-4 border-amber-600 pl-4 py-2">
                  <p className="text-sm text-muted-foreground">Yesterday</p>
                  <p>Document "Medicare Application Guide" was shared with you</p>
                </div>
                <div className="border-l-4 border-amber-600 pl-4 py-2">
                  <p className="text-sm text-muted-foreground">March 28, 2025</p>
                  <p>You scheduled a meeting with Alex Johnson for April 2</p>
                </div>
                <div className="border-l-4 border-amber-600 pl-4 py-2">
                  <p className="text-sm text-muted-foreground">March 27, 2025</p>
                  <p>You completed your profile information</p>
                </div>
                <div className="border-l-4 border-amber-600 pl-4 py-2">
                  <p className="text-sm text-muted-foreground">March 26, 2025</p>
                  <p>You were matched with Alex Johnson as your buddy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

