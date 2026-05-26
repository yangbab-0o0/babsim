"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

interface BabsimiCharacterProps {
  className?: string
  variant?: "default" | "ghost" | "solid"
}

export function BabsimiCharacter({ 
  className, 
  variant = "default"
}: BabsimiCharacterProps) {
  if (variant === "ghost") {
    return (
      <div className={cn("relative opacity-30", className)}>
        <Image
          src="/images/babsimi.png"
          alt="밥심이"
          width={64}
          height={64}
          className="w-full h-full object-contain grayscale opacity-50"
        />
      </div>
    )
  }

  if (variant === "solid") {
    return (
      <div className={cn("relative", className)}>
        <Image
          src="/images/babsimi.png"
          alt="밥심이"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
    )
  }

  return (
    <div className={cn("relative", className)}>
      <Image
        src="/images/babsimi.png"
        alt="밥심이"
        width={144}
        height={144}
        className="w-full h-full object-contain"
      />
    </div>
  )
}
