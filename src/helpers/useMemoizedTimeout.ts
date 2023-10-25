import { useState } from "react"

/**
 * Returns a timeout that restarts itself if called again while it's timing out
 */
export default function useMemoizedTimeout() {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>() // track if there is an active timeout

  const timeout = (callback: () => void, ms: number) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    const newTimeoutId = setTimeout(callback, ms)
    setTimeoutId(newTimeoutId)
  }

  return timeout
}
