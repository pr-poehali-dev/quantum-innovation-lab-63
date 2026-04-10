import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Генерация кода",
    description: "Пишет код на любом языке: Python, JavaScript, TypeScript, Go, Rust и других. Объясняет каждую строку и предлагает оптимизации.",
    icon: "💻",
    badge: "Код",
  },
  {
    title: "Умное общение",
    description: "Диалог на естественном языке — задавайте вопросы, обсуждайте идеи, получайте развёрнутые ответы без лишней воды.",
    icon: "🧠",
    badge: "Чат",
  },
  {
    title: "Отладка и ревью",
    description: "Находит баги, объясняет причины ошибок и предлагает правки. Ревью кода как от опытного senior-разработчика.",
    icon: "🔍",
    badge: "Debug",
  },
  {
    title: "Молниеносный отклик",
    description: "Ответы генерируются в реальном времени без задержек. Потоковая передача текста для мгновенного восприятия.",
    icon: "⚡",
    badge: "Быстро",
  },
  {
    title: "Контекст разговора",
    description: "Помнит всю историю диалога и учитывает предыдущие сообщения для точных и связных ответов.",
    icon: "🔗",
    badge: "Память",
  },
  {
    title: "Многоязычность",
    description: "Общайтесь на русском, английском и других языках. NeyroMax понимает и отвечает на том языке, который удобен вам.",
    icon: "🌐",
    badge: "Языки",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron" style={{ color: "#00e5ff", textShadow: "0 0 20px rgba(0,229,255,0.4)" }}>
            Возможности NeyroMax
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Мощный AI-помощник для разработчиков и всех, кто хочет думать быстрее
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="slide-up hover:shadow-lg transition-all duration-300"
              style={{
                animationDelay: `${index * 0.1}s`,
                background: "rgba(0,229,255,0.03)",
                border: "1px solid rgba(0,229,255,0.15)",
                boxShadow: "0 0 20px rgba(0,229,255,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 30px rgba(0,229,255,0.2), 0 0 60px rgba(0,229,255,0.05)"
                ;(e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,229,255,0.4)"
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 20px rgba(0,229,255,0.05)"
                ;(e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,229,255,0.15)"
              }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{feature.icon}</span>
                  <Badge variant="secondary" style={{ background: "rgba(0,229,255,0.15)", color: "#00e5ff", border: "1px solid rgba(0,229,255,0.3)" }}>
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
