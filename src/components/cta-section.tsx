import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6" style={{ background: "linear-gradient(135deg, rgba(0,229,255,0.05) 0%, rgba(0,0,0,0) 50%, rgba(0,229,255,0.05) 100%)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold mb-6 font-orbitron text-balance" style={{ color: "#00e5ff", textShadow: "0 0 30px rgba(0,229,255,0.5)" }}>
            Готов попробовать NeyroMax?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Начни общение прямо сейчас — задай любой вопрос или попроси написать код. Без регистрации и ограничений.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-10 py-6 font-orbitron font-bold rounded-xl border-0 uppercase tracking-widest pulse-button"
              style={{
                background: "linear-gradient(135deg, #00b8d9, #00e5ff)",
                color: "#000d14",
                boxShadow: "0 0 30px rgba(0,229,255,0.5), 0 0 60px rgba(0,229,255,0.2)",
              }}
              onClick={() => window.location.href = "/chat"}
            >
              Начать общение
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 font-orbitron font-bold rounded-xl uppercase tracking-widest bg-transparent"
              style={{
                borderColor: "#00e5ff",
                color: "#00e5ff",
                boxShadow: "0 0 15px rgba(0,229,255,0.15)",
              }}
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
