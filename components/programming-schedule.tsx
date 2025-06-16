"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Volume2 } from "lucide-react"
import SimpleAudioPlayer from "./simple-audio-player"

interface Program {
  id: string
  name: string
  category: string
  time: string
  description: string
  jingleUrl: string
}

interface DaySchedule {
  [key: string]: Program[]
}

export default function ProgrammingSchedule() {
  const [activeDay, setActiveDay] = useState("Lunes")

  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]

  const schedule: DaySchedule = {
    Lunes: [
      {
        id: "arranca-semana",
        name: "Arranca la Semana",
        category: "Motivacional",
        time: "7:00 - 8:00",
        description: "Programa que da inicio a la semana escolar con noticias educativas y motivación",
        jingleUrl: "/audio/arranca-semana-jingle.mp3",
      },
      {
        id: "edunotilunes",
        name: "EduNoti",
        category: "Noticiero",
        time: "8:00 - 8:30",
        description: "Noticiero educativo con las últimas noticias del ámbito educativo",
        jingleUrl: "/audio/edunoti-jingle.mp3",
      },
    ],
    Martes: [
      {
        id: "edunotrimartes",
        name: "EduNoti",
        category: "Noticiero",
        time: "8:00 - 8:30",
        description: "Noticiero educativo con las últimas noticias del ámbito educativo",
        jingleUrl: "/audio/edunoti-jingle.mp3",
      },
      {
        id: "voces-saber",
        name: "Voces del Saber",
        category: "Educativo",
        time: "10:00 - 11:00",
        description: "Espacio donde los docentes comparten conocimientos",
        jingleUrl: "/audio/voces-del-saber-jingle.mp3",
      },
      {
        id: "fronteras-tiempo-martes",
        name: "Fronteras Del Tiempo",
        category: "Radionovela",
        time: "3:00 - 4:00",
        description: "Radionovela educativa que transporta a través de diferentes épocas",
        jingleUrl: "/audio/fronteras-del-tiempo-jingle.mp3",
      },
    ],
    Miércoles: [
      {
        id: "edunotimimiercoles",
        name: "EduNoti",
        category: "Noticiero",
        time: "8:00 - 8:30",
        description: "Noticiero educativo con las últimas noticias del ámbito educativo",
        jingleUrl: "/audio/edunoti-jingle.mp3",
      },
      {
        id: "rincon-lectura",
        name: "El Rincón de la Lectura",
        category: "Literatura",
        time: "2:00 - 3:00",
        description: "Programa dedicado a la lectura en voz alta y actividades literarias",
        jingleUrl: "/audio/rincon-lectura-jingle.mp3",
      },
    ],
    Jueves: [
      {
        id: "edunotijueves",
        name: "EduNoti",
        category: "Noticiero",
        time: "8:00 - 8:30",
        description: "Noticiero educativo con las últimas noticias del ámbito educativo",
        jingleUrl: "/audio/edunoti-jingle.mp3",
      },
      {
        id: "voces-saber-jueves",
        name: "Voces del Saber",
        category: "Educativo",
        time: "10:00 - 11:00",
        description: "Espacio donde los docentes comparten conocimientos",
        jingleUrl: "/audio/voces-del-saber-jingle.mp3",
      },
      {
        id: "ciencia-aire",
        name: "Ciencia al Aire",
        category: "Científico",
        time: "11:00 - 12:00",
        description: "Un viaje fascinante por el mundo de la ciencia",
        jingleUrl: "/audio/ciencia-al-aire-jingle.mp3",
      },
      {
        id: "historias-historia",
        name: "Historias con Historia",
        category: "Historia",
        time: "2:00 - 3:00",
        description: "Programa que relata hechos históricos de forma amena",
        jingleUrl: "/audio/historias-con-historia-jingle.mp3",
      },
      {
        id: "fronteras-tiempo-jueves",
        name: "Fronteras Del Tiempo",
        category: "Radionovela",
        time: "3:00 - 4:00",
        description: "Radionovela educativa que transporta a través de diferentes épocas",
        jingleUrl: "/audio/fronteras-del-tiempo-jingle.mp3",
      },
    ],
    Viernes: [
      {
        id: "edunotiviviernes",
        name: "EduNoti",
        category: "Noticiero",
        time: "8:00 - 8:30",
        description: "Noticiero educativo con las últimas noticias del ámbito educativo",
        jingleUrl: "/audio/edunoti-jingle.mp3",
      },
      {
        id: "educarte",
        name: "EducArte",
        category: "Cultural",
        time: "3:00 - 4:00",
        description: "Programa cultural que promueve el arte y la creatividad",
        jingleUrl: "/audio/educarte-jingle.mp3",
      },
      {
        id: "estilo-libre",
        name: "Estilo Libre",
        category: "Entretenimiento",
        time: "4:00 - 5:00",
        description: "Programa de entretenimiento dinámico con música y participación estudiantil",
        jingleUrl: "/audio/estilo-libre-jingle.mp3",
      },
    ],
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Noticiero: "bg-red-100 text-red-800",
      Educativo: "bg-blue-100 text-blue-800",
      Cultural: "bg-purple-100 text-purple-800",
      Entretenimiento: "bg-pink-100 text-pink-800",
      Participativo: "bg-orange-100 text-orange-800",
      Literatura: "bg-green-100 text-green-800",
      Científico: "bg-cyan-100 text-cyan-800",
      Historia: "bg-amber-100 text-amber-800",
      Radionovela: "bg-indigo-100 text-indigo-800",
      Lúdico: "bg-yellow-100 text-yellow-800",
      Tecnología: "bg-gray-100 text-gray-800",
      Bienestar: "bg-emerald-100 text-emerald-800",
      Ambiental: "bg-lime-100 text-lime-800",
      Motivacional: "bg-rose-100 text-rose-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <Card className="border-2 border-green-200">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 p-2 rounded-full">
              <Calendar className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Parrilla de Programación</h2>
            <Badge className="bg-green-100 text-green-800 ml-auto">
              <Volume2 className="h-3 w-3 mr-1" />
              Todos con jingle disponible
            </Badge>
          </div>

          {/* Day Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 bg-gray-50 p-2 rounded-lg">
            {days.map((day) => (
              <Button
                key={day}
                variant={activeDay === day ? "default" : "ghost"}
                onClick={() => setActiveDay(day)}
                className={`${
                  activeDay === day
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                {day}
              </Button>
            ))}
          </div>

          {/* Programs List */}
          <div className="space-y-3">
            {schedule[activeDay]?.length > 0 ? (
              schedule[activeDay].map((program) => (
                <div
                  key={program.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-red-100 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-gray-900">{program.name}</h3>
                        <Badge className={getCategoryColor(program.category)}>{program.category}</Badge>
                        <Badge className="bg-blue-100 text-blue-800">
                          <Volume2 className="h-3 w-3 mr-1" />
                          Jingle disponible
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{program.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700">{program.time}</span>
                    <SimpleAudioPlayer
                      audioUrl={program.jingleUrl}
                      title={program.name}
                      className="bg-green-50 text-green-700 hover:bg-green-100"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p>No hay programas programados para {activeDay}</p>
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <Volume2 className="h-4 w-4" />
              Haz clic en "Reproducir" para escuchar cada jingle
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Todos los programas mostrados tienen jingle disponible para reproducir
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
