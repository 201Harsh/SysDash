import { useEffect, useState } from 'react'

function App() {
  const [staticData, setStaticData] = useState<any>(null)
  const [stats, setStats] = useState({ cpuLoad: 0, ramUsedGb: 0, ramUsagePercent: 0 })

  useEffect(() => {
    // 1. Get Static Data (Once)
    window.api.getStaticData().then(setStaticData)

    // 2. Poll for Dynamic Data (Every 1 second)
    const interval = setInterval(async () => {
      const data = await window.api.getDynamicData()
      setStats(data)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen w-full bg-slate-950 text-white p-6 font-sans select-none">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <header className="mb-8 border-b border-slate-800 pb-4">
          <h1 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            SysDash
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            {staticData ? `${staticData.distro} • ${staticData.cpuModel}` : 'Connecting to Core...'}
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid gap-4">
          {/* CPU Card */}
          <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-400 font-medium">CPU Load</span>
              <span
                className={`text-xl font-bold ${stats.cpuLoad > 80 ? 'text-red-500' : 'text-blue-400'}`}
              >
                {stats.cpuLoad}%
              </span>
            </div>
            {/* Progress Bar */}
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-500 ease-out"
                style={{ width: `${stats.cpuLoad}%` }}
              />
            </div>
          </div>

          {/* RAM Card */}
          <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-400 font-medium">RAM Usage</span>
              <div className="text-right">
                <span className="text-xl font-bold text-purple-400">{stats.ramUsagePercent}%</span>
                <span className="text-xs text-slate-500 block">{stats.ramUsedGb} GB Used</span>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-500 transition-all duration-500 ease-out"
                style={{ width: `${stats.ramUsagePercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
