import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/login');

  }, [])
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div>
      </div>

    </main>
  )
}
