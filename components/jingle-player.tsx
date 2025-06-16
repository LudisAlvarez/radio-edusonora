"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Volume2, Download, Radio, Star } from "lucide-react"
import SimpleAudioPlayer from "./simple-audio-player"

interface JinglePlayerProps {
  jingleUrl: string
  title: string
}

export default function JinglePlayer({ jingleUrl, title }: JinglePlayerProps) {
  return (
    <Card className="w-full max-w-md border-2 border-green-200">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          {/* Title */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Volume2 className="h-5 w-5 text-green-600" />
            <h4 className="font-semibold text-green-800">{title}</h4>
          </div>

          {/* Audio Player HTML5 Nativo */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <audio controls className="w-full" preload="metadata">
              <source src={jingleUrl} type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>

          {/* Alternative Simple Player */}
          <div className="flex justify-center">
            <SimpleAudioPlayer
              audioUrl={jingleUrl}
              title={title}
              className="bg-gradient-to-r from-green-600 to-yellow-500 text-white hover:from-green-700 hover:to-yellow-600"
            />
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

          {/* Badges */}
          <div className="flex justify-center space-x-2">
            <Badge className="bg-green-600 text-white">
              <Radio className="h-3 w-3 mr-1" />
              Identidad Sonora
            </Badge>
            <Badge className="bg-yellow-500 text-white">
              <Star className="h-3 w-3 mr-1" />
              Oficial
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
