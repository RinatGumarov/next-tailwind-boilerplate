declare global {
  interface Window {
    __REACT_DEVTOOLS_GLOBAL_HOOK__?: unknown
  }
}

export const disableReactDevTools = (): void => {
  if (typeof window === 'undefined') {
    return
  }
  const noop = (): void => undefined
  const DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__

  if (typeof DEV_TOOLS === 'object') {
    for (const [key, value] of Object.entries(DEV_TOOLS)) {
      // eslint-disable-next-line security/detect-object-injection
      DEV_TOOLS[key] = typeof value === 'function' ? noop : null
    }
  }
}
