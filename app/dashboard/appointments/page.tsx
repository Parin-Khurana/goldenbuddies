"use client"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Plus } from "lucide-react"

export default function Appointments() {
  // Mock data
  const appointments = [
    { id: 1, title: "Legal Document Review", date: "2025-04-02T14:00:00", with: "Parin" },
    { id: 2, title: "Technology Help Session", date: "2025-04-05T10:30:00", with: "Suhani" },
    { id: 3, title: "Weekly Check-in", date: "2025-04-08T15:00:00", with: "Vaibhav" },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
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
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <Button className="bg-amber-600 hover:bg-amber-700" asChild>
          <Link href="/dashboard/appointments/schedule">
            <Plus className="mr-2 h-4 w-4" /> Schedule Appointment
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
          <CardDescription>Your scheduled meetings and sessions</CardDescription>
        </CardHeader>
        <CardContent>
          {appointments.length > 0 ? (
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="flex flex-col md:flex-row justify-between border-b pb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{appointment.title}</h3>
                    <p className="text-muted-foreground">With: {appointment.with}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 md:mt-0">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-amber-600" />
                      <span>{formatDate(appointment.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-amber-600" />
                      <span>{formatTime(appointment.date)}</span>
                    </div>
                    <Button variant="outline" size="sm" className="border-amber-600 text-amber-600 hover:bg-amber-100">
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No upcoming appointments.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

