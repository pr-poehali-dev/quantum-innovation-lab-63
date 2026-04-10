import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6" style={{ background: "#000000" }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <p className="font-space-mono text-xs uppercase tracking-widest mb-4" style={{ color: "rgba(0,229,255,0.5)" }}>
            — нейросеть нового поколения —
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron text-balance text-white">
            Начни писать код<br />
            <span style={{ color: "#00e5ff", textShadow: "0 0 25px rgba(0,229,255,0.5)" }}>быстрее с NeyroMax</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto font-space-mono">
            Задай вопрос, попроси написать код или просто пообщайся.<br />Без регистрации. Без ограничений.
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