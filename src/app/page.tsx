'use client';

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function Index() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/home')
    } else {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  return null // или отображать загрузку или другую информацию
}