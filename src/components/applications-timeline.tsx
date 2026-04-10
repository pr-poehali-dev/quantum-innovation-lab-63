import { Timeline } from "@/components/ui/timeline"

const dot = <div className="w-2 h-2 rounded-full" style={{ background: "#00e5ff", boxShadow: "0 0 6px #00e5ff" }} />

const item = (text: string) => (
  <div className="flex items-center gap-3 text-sm" style={{ color: "#00e5ff" }}>
    {dot}
    {text}
  </div>
)

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Написание кода",
      content: (
        <div>
          <p className="text-gray-300 text-sm md:text-base font-normal mb-6 leading-relaxed">
            NeyroMax пишет рабочий код на любом языке за секунды. Объясняет каждую строку, предлагает оптимизации
            и помогает с архитектурой проекта любого масштаба.
          </p>
          <div className="space-y-3">
            {item("Python, JS, TS, Go, Rust, Java и другие")}
            {item("Полноценные REST API, боты, скрипты")}
            {item("Рефакторинг и оптимизация готового кода")}
          </div>
        </div>
      ),
    },
    {
      title: "Отладка и ревью",
      content: (
        <div>
          <p className="text-gray-300 text-sm md:text-base font-normal mb-6 leading-relaxed">
            Вставь любой код и получи детальный анализ: баги, узкие места, нарушения best practices.
            NeyroMax думает как опытный senior-разработчик.
          </p>
          <div className="space-y-3">
            {item("Нахождение и исправление багов")}
            {item("Code review с объяснениями")}
            {item("Анализ безопасности и уязвимостей")}
          </div>
        </div>
      ),
    },
    {
      title: "Умное общение",
      content: (
        <div>
          <p className="text-gray-300 text-sm md:text-base font-normal mb-6 leading-relaxed">
            Задавай любые вопросы, обсуждай идеи, получай развёрнутые ответы. NeyroMax помнит контекст
            всего диалога и строит связные, точные ответы.
          </p>
          <div className="space-y-3">
            {item("Ответы на технические и общие вопросы")}
            {item("Помощь в принятии решений")}
            {item("Русский, английский и другие языки")}
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Трансформирующие <span style={{ color: "#00e5ff", textShadow: "0 0 20px rgba(0,229,255,0.4)" }}>применения</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-space-mono">
            NeyroMax открывает новый уровень продуктивности для разработчиков, исследователей и всех, кто хочет думать быстрее.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
