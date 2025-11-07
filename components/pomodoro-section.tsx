"use client"
import { useState, useEffect } from "react"

export function PomodroSection() {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isWorkPhase, setIsWorkPhase] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer finished
            setIsActive(false)
            // Switch phase
            if (isWorkPhase) {
              setMinutes(5)
              setIsWorkPhase(false)
            } else {
              setMinutes(25)
              setIsWorkPhase(true)
            }
          } else {
            setMinutes(minutes - 1)
            setSeconds(59)
          }
        } else {
          setSeconds(seconds - 1)
        }
      }, 1000)
    } else if (interval) {
      clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, minutes, seconds, isWorkPhase])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setMinutes(25)
    setSeconds(0)
    setIsWorkPhase(true)
  }

  const progress = isWorkPhase 
    ? ((25 * 60 - (minutes * 60 + seconds)) / (25 * 60)) * 100
    : ((5 * 60 - (minutes * 60 + seconds)) / (5 * 60)) * 100

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">New Pomodoro Timer</h2>
            <p className="text-xl text-gray-600 mb-8">
              We've redesigned the classic Pomodoro timer by combining it with a distraction blocker to help you stay
              focused and fight off notifications, social media, and other brain rot while you work.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10" style={{ color: "#EA5212" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Focus Timer</h3>
                  <p className="text-gray-600">Classic Pomodoro technique for deep work</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10" style={{ color: "#EA5212" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-4.2-5.78v1.75l3.2 1.85.75-1.23-2.2-1.37v-1.8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2z"/>
                    <path d="M7 3h10v1H7zm0 17h10v1H7z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Distraction Blocker</h3>
                  <p className="text-gray-600">Block notifications during focus sessions</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10" style={{ color: "#EA5212" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Work or Rest Phase</h3>
                  <p className="text-gray-600">Visual indicator showing current phase</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div
              className="bg-gray-100 p-8 rounded-lg flex flex-col items-center justify-center"
              style={{ width: "350px", height: "400px" }}
            >
              <div className="relative w-48 h-48 mb-6">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="#EA5212"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 88}`}
                    strokeDashoffset={`${2 * Math.PI * 88 * (1 - progress / 100)}`}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 1s linear" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-800">
                      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="text-sm font-bold mb-2 text-gray-600">
                  {isWorkPhase ? "WORK" : "REST"} Phase
                </div>
                <div
                  className="inline-block px-4 py-2 rounded-full font-bold text-sm"
                  style={{ 
                    backgroundColor: isActive ? "#EA5212" : "#6b7280", 
                    color: "white" 
                  }}
                >
                  {isActive ? "IN PROGRESS" : "PAUSED"}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={toggleTimer}
                  className="px-6 py-2 rounded-full font-semibold transition-all"
                  style={{ 
                    backgroundColor: "#EA5212", 
                    color: "white" 
                  }}
                >
                  {isActive ? "Pause" : "Start"}
                </button>
                <button
                  onClick={resetTimer}
                  className="px-6 py-2 rounded-full font-semibold transition-all bg-gray-300 text-gray-700 hover:bg-gray-400"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
