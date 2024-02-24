import React from 'react'
import HomePage from './components/HomePage'
import {dehydrate,HydrationBoundary,QueryClient} from "@tanstack/react-query"
export default function Home() {
  const querClient = new QueryClient()
  return (
    <HydrationBoundary state={dehydrate(querClient)}>
      <HomePage />
    </HydrationBoundary>
  )
}
