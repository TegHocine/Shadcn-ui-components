import { useEffect, useState } from "react"

export default function usePersistedState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue)

  useEffect(() => {
    const item = localStorage.getItem(key)
    if (item) setValue(JSON.parse(item) as T)
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
