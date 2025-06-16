import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Radio, Users, BookOpen, Mic, Star, Volume2, Lightbulb, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ProgrammingSchedule from "@/components/programming-schedule"
import JinglePlayer from "@/components/jingle-player"

export default function HomePage() {
  const mainPrograms = [
    {
      title: "EduNoti",
      description:
        "Noticiero educativo que mantiene informada a toda la comunidad con las últimas noticias del ámbito educativo, eventos institucionales y acontecimientos relevantes para estudiantes, docentes y familias.",
      icon: Radio,
      time: "Lunes a Viernes 8:00 AM",
      image: "/images/edunoti.png",
    },
    {
      title: "Fronteras Del Tiempo",
      description:
        "Radionovela educativa que transporta a los oyentes a través de diferentes épocas históricas, combinando entretenimiento y aprendizaje en emocionantes relatos dramatizados.",
      icon: Mic,
      time: "Martes y Jueves 3:00 PM",
      image: "/images/fronteras-del-tiempo.jpg",
    },
    {
      title: "Estilo Libre",
      description:
        "Programa de entretenimiento dinámico con música, juegos, concursos y participación activa de los estudiantes. Un espacio para la diversión sana y el esparcimiento educativo.",
      icon: Volume2,
      time: "Viernes 4:00 PM",
      image: "/images/estilo-libre.jpg",
    },
  ]

  const allPrograms = [
    {
      name: "Arranca la Semana",
      time: "Lunes 7:00 AM",
      icon: Calendar,
      description:
        "Programa que da inicio a la semana escolar con noticias educativas, efemérides, motivación y temas de interés general para toda la comunidad.",
    },
    {
      name: "EduNoti",
      time: "Lunes a Viernes 8:00 AM",
      icon: Radio,
      description:
        "Noticiero educativo que mantiene informada a toda la comunidad con las últimas noticias del ámbito educativo.",
    },
    {
      name: "Voces del Saber",
      time: "Martes y Jueves 10:00 AM",
      icon: Users,
      description:
        "Espacio donde los docentes comparten conocimientos de manera clara y didáctica sobre distintas áreas del saber.",
    },
    {
      name: "Ciencia al Aire",
      time: "Jueves 11:00 AM",
      icon: Lightbulb,
      description:
        "Un viaje fascinante por el mundo de la ciencia con datos curiosos, experimentos y explicaciones accesibles.",
    },
    {
      name: "El Rincón de la Lectura",
      time: "Miércoles 2:00 PM",
      icon: BookOpen,
      description:
        "Programa dedicado a la lectura en voz alta, cuentos, relatos y actividades literarias para fomentar el gusto por la lectura.",
    },
    {
      name: "Historias con Historia",
      time: "Jueves 2:00 PM",
      icon: BookOpen,
      description:
        "Programa que relata hechos históricos de forma amena, con narraciones, entrevistas y dramatizaciones.",
    },
    {
      name: "Fronteras Del Tiempo",
      time: "Martes y Jueves 3:00 PM",
      icon: Mic,
      description: "Radionovela educativa que transporta a los oyentes a través de diferentes épocas históricas.",
    },
    {
      name: "EducArte",
      time: "Viernes 3:00 PM",
      icon: Star,
      description:
        "Programa cultural que promueve el arte, la música, el teatro y la creatividad como herramientas educativas.",
    },
    {
      name: "Estilo Libre",
      time: "Viernes 4:00 PM",
      icon: Volume2,
      description:
        "Programa de entretenimiento dinámico con música, juegos, concursos y participación activa de los estudiantes.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-yellow-400">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-green-600 p-3 rounded-full">
                <Radio className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-green-800">RADIO EduSonora</h1>
                <p className="text-yellow-600 font-medium">{"Educación que se escucha y se vive"}</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#inicio" className="text-green-700 hover:text-yellow-600 font-medium">
                Inicio
              </Link>
              <Link href="#institucion" className="text-green-700 hover:text-yellow-600 font-medium">
                Institución
              </Link>
              <Link href="#radio" className="text-green-700 hover:text-yellow-600 font-medium">
                Radio
              </Link>
              <Link href="#programas" className="text-green-700 hover:text-yellow-600 font-medium">
                Programas
              </Link>
              <Link href="#creditos" className="text-green-700 hover:text-yellow-600 font-medium">
                Créditos
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6">Bienvenidos a RADIO EduSonora</h2>
            <p className="text-xl text-white/90 mb-8">
              La voz educativa de la Institución Educativa Retiro de los Indios. Donde la educación cobra vida a través
              de las ondas radiales.
            </p>
            <Button size="lg" className="bg-white text-green-700 hover:bg-yellow-100 font-semibold px-8 py-3">
              <Volume2 className="mr-2 h-5 w-5" />
              Escuchar en Vivo
            </Button>
          </div>
        </div>
      </section>

      {/* Institución Section */}
      <section id="institucion" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Institución Educativa Retiro de los Indios</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200 hover:border-yellow-400 transition-colors">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 p-2">
                  <Image
                    src="/images/escudo-ie-oficial.jpg"
                    alt="Escudo IE Retiro de los Indios"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <CardTitle className="text-green-800">Nuestro Escudo</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Símbolo de nuestra identidad institucional y valores educativos.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:border-yellow-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-green-800 text-center">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  La Institución Educativa Retiro de los Indios es un establecimiento educativo de carácter oficial y
                  naturaleza mixta que tiene como misión formar personas íntegras y competentes en los ámbitos
                  académicos personales, sociales, laborales, tecnológicos, y ambientales, capaces de transformar su
                  contexto y realidad de forma benéfica, a partir de la implementación de metodologías centradas en los
                  intereses y exigencias de la comunidad, mejorando la calidad de vida en su zona de influencia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:border-yellow-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-green-800 text-center">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  En el año 2025 la Institución Educativa Retiro de los Indios se proyecta como líder de procesos
                  educativos, transformadores a nivel local y regional, mejorando la calidad de vida, competencias y
                  desempeño de los educandos alcanzando niveles de organización, desarrollo administrativo y académico;
                  y se vean reflejados en el quehacer de cada uno de los miembros de la comunidad en general; mediante
                  la implementación de políticas de participación de todos sus estamentos, aprovechando las
                  oportunidades que se presentan y respondiendo a la planeación institucional de acuerdo a las
                  exigencias educativas del país.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Radio Section */}
      <section id="radio" className="py-16 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Nuestra Radio</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-6">RADIO EduSonora</h3>
              <p className="text-lg text-gray-700 mb-6">
                Nuestra emisora educativa es el corazón comunicativo de la Institución Educativa Retiro de los Indios. A
                través de RADIO EduSonora, llevamos educación, cultura y entretenimiento a toda nuestra comunidad.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Programación educativa diversa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Participación activa de estudiantes y docentes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Contenido cultural y formativo</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Card className="border-2 border-green-200">
                <CardContent className="p-6">
                  <Image
                    src="/images/estudio-grabacion.jpg"
                    alt="Estudio de Grabación RADIO EduSonora"
                    width={400}
                    height={300}
                    className="rounded-lg mx-auto"
                  />
                  <p className="text-sm text-gray-600 mt-4 font-medium">Estudio de Grabación - RADIO EduSonora</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        {/* Official Radio Jingle Section */}
        <div className="mt-16">
          <Card className="border-2 border-yellow-400 bg-gradient-to-r from-green-50 to-yellow-50">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <Volume2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800">Jingle Oficial</h3>
                    <p className="text-yellow-600 font-medium">RADIO EduSonora</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Escucha nuestro jingle oficial que identifica a RADIO EduSonora. La melodía que acompaña nuestra
                  programación educativa y cultural.
                </p>

                <div className="flex justify-center">
                  <JinglePlayer jingleUrl="/audio/jingle-oficial-radio.mp3" title="Jingle Oficial RADIO EduSonora" />
                </div>

                <div className="mt-6 flex justify-center space-x-4">
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
        </div>
      </section>

      {/* Main Programs Section */}
      <section id="programas" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Programas Principales</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce nuestros programas estrella que marcan la diferencia en la educación radial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mainPrograms.map((program, index) => (
              <Card
                key={index}
                className="border-2 border-green-200 hover:border-yellow-400 transition-all hover:shadow-lg"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={300}
                    height={200}
                    className="rounded-lg mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-green-800">{program.title}</CardTitle>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    {program.time}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Programming Schedule */}
          <div className="mt-16">
            <ProgrammingSchedule />
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Todos Nuestros Programas</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <div className="flex justify-center">
              <Badge className="bg-green-100 text-green-800">
                <Volume2 className="h-3 w-3 mr-1" />
                Todos con jingle disponible
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPrograms.map((program, index) => (
              <Card key={index} className="border-2 border-green-200 hover:border-yellow-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center justify-between">
                    <div className="flex items-center">
                      <program.icon className="mr-2 h-5 w-5" />
                      {program.name}
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 text-xs">
                      <Volume2 className="h-3 w-3 mr-1" />
                      Jingle
                    </Badge>
                  </CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">
                    {program.time}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              Todos nuestros programas cuentan con jingles originales que puedes escuchar en la parrilla de programación
            </p>
          </div>
        </div>
      </section>

      {/* Credits Section */}
      <section id="creditos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Créditos</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-green-200">
              <CardContent className="p-8">
                <div className="text-center space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">RADIO EduSonora</h3>
                    <p className="text-lg text-yellow-600 font-medium">{"Educación que se escucha y se vive"}</p>
                  </div>

                  <Separator className="my-6" />

                  <div>
                    <h4 className="text-xl font-bold text-green-800 mb-6">Equipo de Estudiantes</h4>
                    <div className="grid md:grid-cols-4 lg:grid-cols-7 gap-6">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-3 border-yellow-400">
                          <Image
                            src="/images/jose-angel.jpg"
                            alt="Jose Angel Perez"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm font-medium text-green-800">Jose Angel Perez</p>
                      </div>

                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-3 border-yellow-400">
                          <Image
                            src="/images/luis-david-gomez.jpg"
                            alt="Luis David Gómez"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm font-medium text-green-800">Luis David Gómez</p>
                      </div>

                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-3 border-yellow-400">
                          <Image
                            src="/images/juan-saad.jpg"
                            alt="Juan Saad"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm font-medium text-green-800">Juan Saad</p>
                      </div>

                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-3 border-yellow-400">
                          <Image
                            src="/images/javier-pastrana.jpg"
                            alt="Javier Pastrana"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm font-medium text-green-800">Javier Pastrana</p>
                      </div>

                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-3 border-yellow-400">
                          <Image
                            src="/images/royner-diaz.jpg"
                            alt="Royner Diaz"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm font-medium text-green-800">Royner Diaz</p>
                      </div>

                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-3 border-yellow-400">
                          <Image
                            src="/images/anibal-cuadrado.jpg"
                            alt="Aníbal Cuadrado"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm font-medium text-green-800">Aníbal Cuadrado</p>
                      </div>

                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-3 border-yellow-400">
                          <Image
                            src="/images/antony-martinez.jpg"
                            alt="Antony Martínez"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm font-medium text-green-800">Antony Martínez</p>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="text-center">
                    <p className="text-gray-600 mb-4">Estudiantes de la Institución Educativa Retiro de los Indios</p>
                    <p className="text-sm text-gray-500 mb-4">
                      Proyecto educativo desarrollado con el apoyo de docentes y directivos de la institución
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Badge className="bg-green-600 text-white">Educación</Badge>
                      <Badge className="bg-yellow-500 text-white">Comunicación</Badge>
                      <Badge className="bg-green-600 text-white">Estudiantes</Badge>
                      <Badge className="bg-yellow-500 text-white">Innovación</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-yellow-500 p-2 rounded-full">
                  <Radio className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">RADIO EduSonora</h3>
                  <p className="text-yellow-300 text-sm">{"Educación que se escucha y se vive"}</p>
                </div>
              </div>
              <p className="text-green-100">La voz educativa de la Institución Educativa Retiro de los Indios</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-300">Contacto</h4>
              <div className="space-y-2 text-green-100">
                <p>IE Retiro de los Indios</p>
                <p>Email: contacto@radioedulsonora.edu.co</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-300">Horarios</h4>
              <div className="space-y-2 text-green-100">
                <p>Lunes a Viernes: 7:00 AM - 5:00 PM</p>
                <p>Programación especial los fines de semana</p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-green-600" />

          <div className="text-center text-green-200">
            <p>
              &copy; {new Date().getFullYear()} RADIO EduSonora - IE Retiro de los Indios. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
