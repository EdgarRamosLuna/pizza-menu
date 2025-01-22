import Image from "next/image"
import { Phone } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MenuPage() {
  return (
    (<div className="min-h-screen bg-gradient-to-b from-orange-500 to-yellow-400">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Phvir51qsnUeiqLclTeFMwJFufJmjy.png"
            alt="Pizza Jossepph Logo"
            width={150}
            height={60}
            className="w-auto h-12" />
          <div className="flex items-center gap-2 text-white">
            <Phone className="h-5 w-5" />
            <a
              href="tel:8424220123"
              className="font-semibold hover:text-yellow-200 transition">
              842 422 0123
            </a>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Menu Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">Tamaños & Precios</h1>
            <p className="text-yellow-100">Calle Reforma # 15 zona centro, Parras Coahuila</p>
          </div>

          {/* Pizza Sizes Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Individual Size */}
            <Card className="bg-white/95 backdrop-blur">
              <CardHeader className="text-center pb-3">
                <h2 className="text-2xl font-bold text-orange-600">Individual</h2>
                <p className="text-3xl font-bold">$55.00</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h3 className="font-semibold">Orilla Rellena</h3>
                  <div className="text-sm space-y-1 text-gray-600">
                    <p className="flex justify-between">
                      <span>- Mozarella</span>
                      <span>$10.00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>- Philadelphia</span>
                      <span>$15.00</span>
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Extras</h3>
                  <div className="text-sm space-y-1 text-gray-600">
                    <p className="flex justify-between">
                      <span>Queso Extra</span>
                      <span>$10.00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Ingrediente Extra</span>
                      <span>$10.00</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chica Size */}
            <Card className="bg-white/95 backdrop-blur">
              <CardHeader className="text-center pb-3">
                <h2 className="text-2xl font-bold text-orange-600">Chica</h2>
                <p className="text-3xl font-bold">$75.00</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h3 className="font-semibold">Orilla Rellena</h3>
                  <div className="text-sm space-y-1 text-gray-600">
                    <p className="flex justify-between">
                      <span>- Mozarella</span>
                      <span>$15.00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>- Philadelphia</span>
                      <span>$20.00</span>
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Extras</h3>
                  <div className="text-sm space-y-1 text-gray-600">
                    <p className="flex justify-between">
                      <span>Queso Extra</span>
                      <span>$15.00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Ingrediente Extra</span>
                      <span>$10.00</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mediana Size */}
            <Card className="bg-white/95 backdrop-blur md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-3">
                <h2 className="text-2xl font-bold text-orange-600">Mediana</h2>
                <p className="text-3xl font-bold">$110.00</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h3 className="font-semibold">Orilla Rellena</h3>
                  <div className="text-sm space-y-1 text-gray-600">
                    <p className="flex justify-between">
                      <span>- Mozarella</span>
                      <span>$20.00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>- Philadelphia</span>
                      <span>$25.00</span>
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Extras</h3>
                  <div className="text-sm space-y-1 text-gray-600">
                    <p className="flex justify-between">
                      <span>Queso Extra</span>
                      <span>$20.00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Ingrediente Extra</span>
                      <span>$15.00</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* WhatsApp Button */}
          <div className="mt-8 text-center">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open("https://wa.me/528424220123", "_blank")}>
              Ordenar por WhatsApp
            </Button>
          </div>
        </div>
      </main>
    </div>)
  );
}

