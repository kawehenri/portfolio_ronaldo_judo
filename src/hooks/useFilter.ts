import { useMemo, useState } from 'react'

export function useFilter<T>(items: T[], getValue: (item: T) => string | number) {
  const [filter, setFilter] = useState<string>('all')

  const options = useMemo(() => {
    const values = [...new Set(items.map(getValue))].sort((a, b) => {
      if (typeof a === 'number' && typeof b === 'number') return b - a
      return String(b).localeCompare(String(a))
    })
    return values.map(String)
  }, [items, getValue])

  const filtered = useMemo(() => {
    if (filter === 'all') return items
    return items.filter((item) => String(getValue(item)) === filter)
  }, [items, filter, getValue])

  return { filter, setFilter, filtered, options }
}
