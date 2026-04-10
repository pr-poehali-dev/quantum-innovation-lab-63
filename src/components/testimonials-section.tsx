import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Громов",
    role: "Senior Backend Developer, FinTech Labs",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "NeyroMax экономит мне по 3–4 часа в день. Пишу промпт — получаю рабочий код. Даже сложные алгоритмы объясняет так, что всё понятно с первого раза.",
  },
  {
    name: "Дарья Ким",
    role: "Tech Lead, Startup Studio",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Использую для code review и отладки. NeyroMax находит баги, которые я пропускала часами. Это как иметь опытного коллегу онлайн 24/7.",
  },
  {
    name: "Марина Соколова",
    role: "Product Manager, Nova Digital",
    avatar: "/professional-woman-scientist.png",
    content:
      "Я не разработчик, но благодаря NeyroMax сама пишу скрипты для автоматизации. Просто объясняю задачу на русском — и получаю готовое решение.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#000000" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-orbitron text-white">
            Нам доверяют <span style={{ color: "#00e5ff", textShadow: "0 0 20px rgba(0,229,255,0.4)" }}>лидеры</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-space-mono">
            Разработчики и команды по всему миру уже работают быстрее с NeyroMax
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="slide-up"
              style={{
                animationDelay: `${index * 0.15}s`,
                background: "rgba(0,229,255,0.03)",
                border: "1px solid rgba(0,229,255,0.15)",
                boxShadow: "0 0 20px rgba(0,229,255,0.05)",
              }}
            >
              <CardContent className="p-6">
                <div className="mb-4" style={{ color: "#00e5ff", fontSize: "1.5rem", opacity: 0.6 }}>"</div>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm font-space-mono">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback style={{ background: "rgba(0,229,255,0.1)", color: "#00e5ff" }}>
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white font-orbitron text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500 font-space-mono mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
