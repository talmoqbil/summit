'use client'

import { useSearchParams } from 'next/navigation'

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const ticker = searchParams.get('ticker')

  return (
    <main className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Results for: {ticker}</h2>
      <p>This is where the stock analysis will be displayed.</p>
    </main>
  )
}