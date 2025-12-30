import { ElectronAPI } from '@electron-toolkit/preload'

export interface SysApi {
  getStaticData: () => Promise<{
    platform: string
    distro: string
    cpuModel: string
    totalMemGb: number
  }>
  getDynamicData: () => Promise<{ cpuLoad: number; ramUsedGb: number; ramUsagePercent: number }>
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: SysApi
  }
}
