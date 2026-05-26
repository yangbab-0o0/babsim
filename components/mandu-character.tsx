"use client"

import { cn } from "@/lib/utils"

interface ManduCharacterProps {
  className?: string
  variant?: "default" | "happy" | "thinking" | "ghost"
  hasBlush?: boolean
}

export function ManduCharacter({ 
  className, 
  variant = "default",
  hasBlush = true 
}: ManduCharacterProps) {
  if (variant === "ghost") {
    return (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        className={cn("w-16 h-16", className)}
      >
        {/* Ghost/faded mandu */}
        <path
          d="M40 10C22 10 10 25 10 40C10 55 22 65 40 65C58 65 70 55 70 40C70 25 58 10 40 10Z"
          fill="none"
          stroke="#e8e4dc"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        {/* Pleats */}
        <path
          d="M25 20C28 15 32 12 40 12C48 12 52 15 55 20"
          fill="none"
          stroke="#e8e4dc"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 25C22 20 25 17 30 15"
          fill="none"
          stroke="#e8e4dc"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M60 25C58 20 55 17 50 15"
          fill="none"
          stroke="#e8e4dc"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Face */}
        <circle cx="32" cy="38" r="2" fill="#e8e4dc" />
        <circle cx="48" cy="38" r="2" fill="#e8e4dc" />
        <path
          d="M36 46C38 48 42 48 44 46"
          stroke="#e8e4dc"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={cn("w-20 h-20", className)}
    >
      {/* Glow effect */}
      <ellipse cx="50" cy="75" rx="30" ry="8" fill="#fff9e6" opacity="0.6" />
      
      {/* Mandu body */}
      <path
        d="M50 15C25 15 10 35 10 55C10 75 25 85 50 85C75 85 90 75 90 55C90 35 75 15 50 15Z"
        fill="#ffffff"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      
      {/* Top pleats */}
      <path
        d="M30 22C35 15 42 12 50 12C58 12 65 15 70 22"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M22 30C26 22 30 18 38 15"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M78 30C74 22 70 18 62 15"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 38C20 32 23 27 28 23"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M82 38C80 32 77 27 72 23"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Eyes */}
      <circle cx="38" cy="50" r="3" fill="#1a1a1a" />
      <circle cx="62" cy="50" r="3" fill="#1a1a1a" />
      
      {/* Blush */}
      {hasBlush && (
        <>
          <ellipse cx="28" cy="55" rx="6" ry="4" fill="#ffb6c1" opacity="0.5" />
          <ellipse cx="72" cy="55" rx="6" ry="4" fill="#ffb6c1" opacity="0.5" />
        </>
      )}
      
      {/* Mouth */}
      {variant === "happy" ? (
        <path
          d="M44 62C47 66 53 66 56 62"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : variant === "thinking" ? (
        <circle cx="50" cy="62" r="3" fill="#1a1a1a" />
      ) : (
        <path
          d="M44 60C47 63 53 63 56 60"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}
