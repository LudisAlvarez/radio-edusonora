"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, Volume2, Download, AlertCircle } from "lucide-react"

interface JinglePlayerProps {
  jingleUrl: string
  title: string
}

export default function JinglePlayer({ jingleUrl, title }: JinglePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [hasError, setHasError] = useState(false)
  const [showNativePlayer, setShowNativePlayer] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const nativeAudioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Crear elemento de audio
    const audio = new Audio()
    audio.crossOrigin = "anonymous"
    audio.preload = "metadata"
    audioRef.current = audio

    // Intentar cargar el archivo
    const loadAudio = async () => {
      try {
        audio.src = jingleUrl
        await new Promise((resolve, reject) => {
          const handleLoad = () => {
            audio.removeEventListener("loadedmetadata", handleLoad)
            audio.removeEventListener("error", handleError)
            resolve(true)
          }

          const handleError = (e: any) => {
            audio.removeEventListener("loadedmetadata", handleLoad)
            audio.removeEventListener("error", handleError)
            reject(e)
          }

          audio.addEventListener("loadedmetadata", handleLoad)
          audio.addEventListener("error", handleError)
          audio.load()
        })

        setDuration(audio.duration || 0)
        setHasError(false)
      } catch (error) {
        console.error("Error loading audio:", error)
        setHasError(true)
        setShowNativePlayer(true)
      }
    }

    loadAudio()

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    audio.addEventListener("timeupdate", handleTimeUpdate)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate)
      audio.removeEventListener("ended", handleEnded)
      audio.pause()
      audio.src = ""
    }
  }, [jingleUrl])

  const togglePlayPause = async () => {
    if (audioRef.current && !hasError) {
      try {
        if (isPlaying) {
          audioRef.current.pause()
          setIsPlaying(false)
        } else {
          await audioRef.current.play()
          setIsPlaying(true)
        }
      } catch (error) {
        console.error("Error playing audio:", error)
        setHasError(true)
        setShowNativePlayer(true)
      }
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration > 0 && !hasError) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const newTime = (clickX / rect.width) * duration
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0

  if (showNativePlayer || hasError) {
    return (
      <Card className="w-full max-w-md border-2 border-green-200">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Volume2 className="h-5 w-5 text-green-600" />
              <h4 className="font-semibold text-green-800">{title}</h4>
            </div>

            {hasError && (
              <div className="flex items-center justify-center gap-2 text-amber-600 mb-4">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm">Usando reproductor alternativo</span>
              </div>
            )}

            {/* Reproductor HTML5 nativo */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <audio ref={nativeAudioRef} controls className="w-full" preload="metadata" src={jingleUrl}>
                Tu navegador no soporta el elemento de audio.
              </audio>
            </div>

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

  return (
    <Card className="w-full max-w-md border-2 border-green-200">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Volume2 className="h-5 w-5 text-green-600" />
            <h4 className="font-semibold text-green-800">{title}</h4>
          </div>

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

          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={togglePlayPause}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-yellow-500 hover:from-green-700 hover:to-yellow-600 text-white rounded-full w-16 h-16"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
            </Button>
          </div>

          <div className="flex justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-green-700 border-green-300 hover:bg-green-50"
              onClick={() => setShowNativePlayer(true)}
            >
              <Volume2 className="h-4 w-4 mr-2" />
              Reproductor Alternativo
            </Button>
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
              Descargar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
