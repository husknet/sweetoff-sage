'use client'
import { motion } from 'framer-motion'
import { Shield, ScanLine, LogIn } from 'lucide-react'
import Link from 'next/link'

export default function IndustrialShell({
  title,
  subtitle,
  children
}: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card max-w-xl w-full p-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-px bg-metal-line/50" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-metal-line/50" />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-metal-glow/50 to-transparent animate-flicker" />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-metal-glow" />
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        </div>
        {subtitle && <p className="text-sm text-white/60 mb-6">{subtitle}</p>}
        <div className="relative">{children}</div>

        <div className="mt-6 text-xs text-white/40 flex items-center gap-2">
          <ScanLine className="w-4 h-4" />
          <span>Industry build. </span>
          <span className="ml-auto inline-flex items-center gap-1">
            <LogIn className="w-3 h-3" />
            <Link className="underline hover:opacity-80" href="/">Email phase</Link>
          </span>
        </div>
      </motion.div>
    </div>
  )
}

