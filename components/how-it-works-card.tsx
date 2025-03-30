interface HowItWorksCardProps {
  number: number
  title: string
  description: string
  userType: "senior" | "volunteer" | "both"
}

export default function HowItWorksCard({ number, title, description, userType }: HowItWorksCardProps) {
  return (
    <div className="bg-amber-50 p-6 rounded-xl shadow-md relative">
      <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-amber-900 mb-3 mt-4">{title}</h3>
      <p className="text-amber-800 mb-4">{description}</p>

      {userType !== "both" && (
        <div
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
            userType === "senior" ? "bg-amber-200 text-amber-800" : "bg-amber-600 text-white"
          }`}
        >
          {userType === "senior" ? "For Seniors" : "For Volunteers"}
        </div>
      )}
    </div>
  )
}

