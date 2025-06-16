"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

interface SimpleAudioPlayerProps {
  audioUrl: string
  title: string
  className?: string
}

export default function SimpleAudioPlayer({ audioUrl, title, className = "" }: SimpleAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handlePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl)
    }

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      // Pausar cualquier otro audio que esté reproduciéndose
      const allAudios = document.querySelectorAll("audio")
      allAudios.forEach((audio) => {
        if (!audio.paused) {
          audio.pause()
        }
      })

      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => {
          console.error("Error playing audio:", error)
          alert(`No se pudo reproducir: ${title}`)
        })

      audioRef.current.onended = () => {
        setIsPlaying(false)
      }
    }
  }

  return (
    <Button onClick={handlePlay} variant="outline" size="sm" className={`${className} flex items-center gap-2`}>
      {isPlaying ? (
        <>
          <Pause className="h-4 w-4" />
          Pausar
        </>
      ) : (
        <>
          <Play className="h-4 w-4" />
          Reproducir
        </>
      )}
    </Button>
  )
}
