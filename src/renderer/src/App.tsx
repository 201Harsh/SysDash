import { useState } from 'react'
import SystemData from './components/SytemData'

const App = () => {
  const [isConnected, setIsConnected] = useState(false)

  return (
    <div className="h-screen w-full bg-slate-950 text-white font-sans selection:bg-green-950 overflow-hidden relative">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-red-600/10 rounded-full blur-[128px]" />
      </div>

      {!isConnected ? (
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
          <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 p-10 rounded-2xl shadow-2xl max-w-sm w-full text-center">
            <div className="w-16 h-16 bg-linear-to-tr from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-white mb-2">SysDash</h1>
            <p className="text-slate-400 text-sm mb-8">
              Real-time system performance monitoring & diagnostics tool.
            </p>

            <button
              onClick={() => setIsConnected(true)}
              className="cursor-pointer group w-full py-3.5 px-6 bg-white text-slate-900 font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-xl flex items-center justify-center gap-2"
            >
              <span>Initialize System</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-600">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>Server Ready</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 h-full w-full animate-in fade-in zoom-in duration-300">
          <SystemData />
        </div>
      )}
    </div>
  )
}

export default App
