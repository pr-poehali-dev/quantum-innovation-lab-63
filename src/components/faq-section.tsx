import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Что такое NeyroMax?",
      answer: "NeyroMax — это мощный AI-помощник для написания кода и умного общения. Он понимает ваши запросы, генерирует рабочий код, отвечает на вопросы и помогает решать задачи любой сложности.",
    },
    {
      question: "На каких языках программирования умеет писать NeyroMax?",
      answer: "NeyroMax поддерживает все популярные языки: Python, JavaScript, TypeScript, Go, Rust, Java, C++, PHP, Swift, Kotlin и многие другие. Также помогает с HTML, CSS, SQL и конфигурационными файлами.",
    },
    {
      question: "Нужна ли регистрация для начала работы?",
      answer: "Нет! Просто нажмите «Начать общение» и сразу начинайте диалог. Никаких форм, никаких ожиданий — вы сразу в деле.",
    },
    {
      question: "Помнит ли NeyroMax контекст разговора?",
      answer: "Да, NeyroMax помнит всю историю текущего диалога и учитывает предыдущие сообщения. Можно уточнять, дополнять и продолжать разговор без повтора контекста.",
    },
    {
      question: "Может ли NeyroMax найти баги в моём коде?",
      answer: "Абсолютно. Вставьте код в чат, опишите проблему или просто попросите найти ошибки — NeyroMax проведёт полный анализ и предложит исправления с объяснениями.",
    },
    {
      question: "На каких языках можно общаться с NeyroMax?",
      answer: "NeyroMax отлично понимает русский и английский языки, а также многие другие. Пишите так, как вам удобно — он подстроится.",
    },
  ]

  return (
    <section className="py-24 bg-black" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron" style={{ color: "#00e5ff", textShadow: "0 0 20px rgba(0,229,255,0.4)" }}>
            Частые вопросы
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что нужно знать о NeyroMax перед началом работы.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="mb-4" style={{ borderColor: "rgba(0,229,255,0.2)" }}>
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-cyan-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
