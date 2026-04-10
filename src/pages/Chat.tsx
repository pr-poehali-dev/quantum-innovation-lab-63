import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface Message {
  role: "user" | "assistant"
  content: string
}

const CHAT_URL = "https://functions.poehali.dev/860accbf-a114-45f2-930a-347e46a992c4"

const WELCOME_SUGGESTIONS = [
  "Напиши REST API на Python с FastAPI",
  "Объясни разницу между async/await и Promise",
  "Помоги оптимизировать SQL-запрос",
  "Придумай идеи для стартапа в сфере AI",
]

function CodeBlock({ text }: { text: string }) {
  const parts: JSX.Element[] = []
  const codeRegex = /```(\w*)\n?([\s\S]*?)```/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = codeRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      const plain = text.slice(lastIndex, match.index)
      parts.push(<span key={lastIndex} style={{ whiteSpace: "pre-wrap" }}>{plain}</span>)
    }
    const lang = match[1] || "code"
    const code = match[2]
    parts.push(
      <div key={match.index} className="my-3 rounded-lg overflow-hidden" style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(0,229,255,0.25)" }}>
        <div className="flex items-center justify-between px-4 py-2" style={{ background: "rgba(0,229,255,0.08)", borderBottom: "1px solid rgba(0,229,255,0.15)" }}>
          <span className="text-xs font-space-mono" style={{ color: "#00e5ff" }}>{lang}</span>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-space-mono text-gray-200" style={{ margin: 0 }}>{code}</pre>
      </div>
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(<span key={lastIndex} style={{ whiteSpace: "pre-wrap" }}>{text.slice(lastIndex)}</span>)
  }

  return <div className="leading-relaxed">{parts}</div>
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  const autoResize = () => {
    const ta = textareaRef.current
    if (!ta) return
    ta.style.height = "auto"
    ta.style.height = Math.min(ta.scrollHeight, 200) + "px"
  }

  const send = async (text?: string) => {
    const content = (text ?? input).trim()
    if (!content || loading) return
    setInput("")
    if (textareaRef.current) textareaRef.current.style.height = "auto"

    const newMessages: Message[] = [...messages, { role: "user", content }]
    setMessages(newMessages)
    setLoading(true)

    try {
      const res = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      })
      const data = await res.json()
      setMessages([...newMessages, { role: "assistant", content: data.reply || data.error || "Ошибка" }])
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Ошибка соединения. Попробуй ещё раз." }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div className="dark flex flex-col h-screen bg-black" style={{ background: "radial-gradient(ellipse at top, #000d14 0%, #000000 100%)" }}>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "rgba(0,229,255,0.15)", background: "rgba(0,0,0,0.9)" }}>
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Icon name="ChevronLeft" size={20} className="text-cyan-400" />
          <h1 className="font-orbitron text-xl font-bold">
            <span style={{ color: "#00e5ff", textShadow: "0 0 15px rgba(0,229,255,0.6)" }}>Neyro</span><span className="text-white">Max</span>
          </h1>
        </a>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ boxShadow: "0 0 8px #00e5ff" }} />
          <span className="text-sm font-space-mono text-cyan-400">онлайн</span>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center gap-8">
            <div>
              <h2 className="font-orbitron text-3xl font-bold mb-3" style={{ color: "#00e5ff", textShadow: "0 0 30px rgba(0,229,255,0.5)" }}>
                NeyroMax
              </h2>
              <p className="text-gray-400 font-space-mono text-lg">Задай вопрос или попроси написать код</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl w-full">
              {WELCOME_SUGGESTIONS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => send(s)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-space-mono text-gray-300 hover:text-cyan-400 transition-all duration-200"
                  style={{
                    background: "rgba(0,229,255,0.04)",
                    border: "1px solid rgba(0,229,255,0.15)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,229,255,0.4)"
                    ;(e.currentTarget as HTMLButtonElement).style.background = "rgba(0,229,255,0.08)"
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,229,255,0.15)"
                    ;(e.currentTarget as HTMLButtonElement).style.background = "rgba(0,229,255,0.04)"
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-4 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-1" style={{ background: "linear-gradient(135deg, #00b8d9, #00e5ff)", boxShadow: "0 0 15px rgba(0,229,255,0.4)" }}>
                  <span className="text-black font-bold text-xs font-orbitron">N</span>
                </div>
              )}
              <div
                className="max-w-[80%] px-4 py-3 rounded-2xl text-sm"
                style={
                  msg.role === "user"
                    ? {
                        background: "linear-gradient(135deg, rgba(0,184,217,0.2), rgba(0,229,255,0.15))",
                        border: "1px solid rgba(0,229,255,0.3)",
                        color: "#e0f7fa",
                        whiteSpace: "pre-wrap",
                      }
                    : {
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#e5e7eb",
                      }
                }
              >
                {msg.role === "assistant" ? <CodeBlock text={msg.content} /> : msg.content}
              </div>
              {msg.role === "user" && (
                <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-1" style={{ background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.3)" }}>
                  <Icon name="User" size={16} className="text-cyan-400" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-4 justify-start">
              <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00b8d9, #00e5ff)", boxShadow: "0 0 15px rgba(0,229,255,0.4)" }}>
                <span className="text-black font-bold text-xs font-orbitron">N</span>
              </div>
              <div className="px-4 py-4 rounded-2xl flex gap-2 items-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{ background: "#00e5ff", animationDelay: `${i * 0.15}s`, boxShadow: "0 0 6px #00e5ff" }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="px-4 pb-6 pt-3 border-t" style={{ borderColor: "rgba(0,229,255,0.1)", background: "rgba(0,0,0,0.9)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-3 items-end rounded-2xl px-4 py-3" style={{ background: "rgba(0,229,255,0.04)", border: "1px solid rgba(0,229,255,0.25)", boxShadow: "0 0 20px rgba(0,229,255,0.05)" }}>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => { setInput(e.target.value); autoResize() }}
              onKeyDown={handleKey}
              placeholder="Напиши вопрос или задачу..."
              rows={1}
              className="flex-1 resize-none bg-transparent outline-none text-gray-100 placeholder-gray-500 font-space-mono text-sm leading-relaxed"
              style={{ maxHeight: "200px" }}
            />
            <Button
              onClick={() => send()}
              disabled={!input.trim() || loading}
              className="flex-shrink-0 w-10 h-10 rounded-xl p-0 border-0"
              style={{
                background: input.trim() && !loading ? "linear-gradient(135deg, #00b8d9, #00e5ff)" : "rgba(0,229,255,0.1)",
                boxShadow: input.trim() && !loading ? "0 0 15px rgba(0,229,255,0.4)" : "none",
              }}
            >
              <Icon name="Send" size={16} style={{ color: input.trim() && !loading ? "#000d14" : "#4a6d7a" }} />
            </Button>
          </div>
          <p className="text-center text-xs text-gray-600 mt-2 font-space-mono">Enter — отправить · Shift+Enter — новая строка</p>
        </div>
      </div>
    </div>
  )
}
