import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t" style={{ borderColor: "rgba(0,229,255,0.15)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              <span style={{ color: "#00e5ff", textShadow: "0 0 15px rgba(0,229,255,0.6)" }}>Neyro</span>Max
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Нейросеть нового поколения для написания кода и умного общения. Твой AI-напарник 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Продукт</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="font-space-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200">Возможности</a></li>
              <li><a href="#technology" className="font-space-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200">Технологии</a></li>
              <li><a href="/chat" className="font-space-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200">Начать общение</a></li>
              <li><a href="#faq" className="font-space-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li><a href="#" className="font-space-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200">О нас</a></li>
              <li><a href="#" className="font-space-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200">Блог</a></li>
              <li><a href="#" className="font-space-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200">Документация</a></li>
              <li><a href="#" className="font-space-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200">Контакты</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t" style={{ borderColor: "rgba(0,229,255,0.15)" }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 NeyroMax. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-space-mono text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">Конфиденциальность</a>
              <a href="#" className="font-space-mono text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
