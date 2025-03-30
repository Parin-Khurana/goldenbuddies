"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, FileText, Download, Upload } from "lucide-react"

export default function Documents() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data
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

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getTypeColor = (type: string) => {
    switch (type) {
      case "PDF":
        return "bg-red-100 text-red-800"
      case "DOCX":
        return "bg-blue-100 text-blue-800"
      case "XLSX":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Documents</h1>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-100">
            <Upload className="mr-2 h-4 w-4" /> Upload
          </Button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search documents..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Documents</CardTitle>
          <CardDescription>Access and manage your important files</CardDescription>
        </CardHeader>
        <CardContent>
          {filteredDocuments.length > 0 ? (
            <div className="space-y-2">
              {filteredDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="flex justify-between items-center p-3 rounded-md bg-white hover:bg-amber-50 border"
                >
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-md bg-amber-100 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">{doc.title}</p>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(doc.type)}`}>{doc.type}</span>
                        <span className="text-xs text-muted-foreground">{formatDate(doc.date)}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p>No documents found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

