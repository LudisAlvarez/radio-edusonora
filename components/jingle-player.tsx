"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, Volume2, Download } from "lucide-react"

interface JinglePlayerProps {
  jingleUrl: string
  title: string
}

export default function JinglePlayer({ jingleUrl, title }: JinglePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const audio = new Audio()
    audio.preload = "metadata"
    audio.src = jingleUrl
    audioRef.current = audio

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    const handleError = (e: Event) => {
      console.error("Error loading audio:", e)
      alert("Error al cargar el audio. Por favor, intenta de nuevo.")
    }

    const handleCanPlay = () => {
      setIsLoading(false)
    }

    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("timeupdate", handleTimeUpdate)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("error", handleError)
    audio.addEventListener("canplay", handleCanPlay)

    // Intentar cargar el audio
    audio.load()

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.removeEventListener("timeupdate", handleTimeUpdate)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("error", handleError)
      audio.removeEventListener("canplay", handleCanPlay)
      audio.pause()
      audio.src = ""
    }
  }, [jingleUrl])

  const togglePlayPause = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause()
          setIsPlaying(false)
        } else {
          // Asegurar que el audio esté listo
          if (audioRef.current.readyState < 2) {
            await new Promise((resolve) => {
              const handleCanPlay = () => {
                audioRef.current?.removeEventListener("canplay", handleCanPlay)
                resolve(true)
              }
              audioRef.current?.addEventListener("canplay", handleCanPlay)
              audioRef.current?.load()
            })
          }

          await audioRef.current.play()
          setIsPlaying(true)
        }
      } catch (error) {
        console.error("Error playing audio:", error)
        alert("Error al reproducir el audio. Verifica que el archivo esté disponible.")
        setIsPlaying(false)
      }
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const newTime = (clickX / rect.width) * duration
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <Card className="w-full max-w-md border-2 border-green-200">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          {/* Title */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Volume2 className="h-5 w-5 text-green-600" />
            <h4 className="font-semibold text-green-800">{title}</h4>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="w-full h-2 bg-gray-200 rounded-full cursor-pointer" onClick={handleProgressClick}>
              <div
                className="h-full bg-gradient-to-r from-green-500 to-yellow-500 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={togglePlayPause}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-yellow-500 hover:from-green-700 hover:to-yellow-600 text-white rounded-full w-16 h-16"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              ) : isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6 ml-1" />
              )}
            </Button>
          </div>

          {/* Download Button */}
          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              className="text-green-700 border-green-300 hover:bg-green-50"
              onClick={() => {
                const link = document.createElement("a")
                link.href = jingleUrl
                link.download = "jingle-oficial-radio-edusonora.mp3"
                link.click()
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Descargar Jingle
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
