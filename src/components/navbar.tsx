import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b" style={{ borderColor: "rgba(0,229,255,0.15)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold" style={{ color: "#00e5ff", textShadow: "0 0 15px rgba(0,229,255,0.6)" }}>
              Neyro<span className="text-white">Max</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="font-geist text-white hover:text-cyan-400 transition-colors duration-200">Возможности</a>
              <a href="#technology" className="font-geist text-white hover:text-cyan-400 transition-colors duration-200">Технологии</a>
              <a href="#faq" className="font-geist text-white hover:text-cyan-400 transition-colors duration-200">FAQ</a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              className="font-geist font-bold border-0 uppercase tracking-widest"
              style={{
                background: "linear-gradient(135deg, #00b8d9, #00e5ff)",
                color: "#000d14",
                boxShadow: "0 0 20px rgba(0,229,255,0.4)",
              }}
              onClick={() => window.location.href = "/chat"}
            >
              Начать общение
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-cyan-400 transition-colors duration-200">
              <Icon name={isOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t" style={{ borderColor: "rgba(0,229,255,0.15)" }}>
              <a href="#features" className="block px-3 py-2 font-geist text-white hover:text-cyan-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Возможности</a>
              <a href="#technology" className="block px-3 py-2 font-geist text-white hover:text-cyan-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Технологии</a>
              <a href="#faq" className="block px-3 py-2 font-geist text-white hover:text-cyan-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>FAQ</a>
              <div className="px-3 py-2">
                <Button
                  className="w-full font-geist font-bold border-0 uppercase tracking-widest"
                  style={{
                    background: "linear-gradient(135deg, #00b8d9, #00e5ff)",
                    color: "#000d14",
                  }}
                  onClick={() => window.location.href = "/chat"}
                >
                  Начать общение
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
