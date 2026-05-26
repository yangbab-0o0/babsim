"use client"

import { useState } from "react"
import { LandingPage } from "@/components/landing-page"
import { QuizScreen } from "@/components/quiz-screen"
import { ResultScreen } from "@/components/result-screen"
import { calculateResult, type Result } from "@/lib/quiz-data"

type GameState = "landing" | "quiz" | "result"

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("landing")
  const [result, setResult] = useState<Result | null>(null)
  const [userAnswers, setUserAnswers] = useState<number[]>([])

  const handleStartQuiz = () => {
    setGameState("quiz")
  }

  const handleQuizComplete = (answers: number[]) => {
    setUserAnswers(answers)
    const calculatedResult = calculateResult(answers)
    setResult(calculatedResult)
    setGameState("result")
  }

  const handleRestart = () => {
    setResult(null)
    setGameState("landing")
  }

  const handleClose = () => {
    setResult(null)
    setGameState("landing")
  }

  return (
    <main className="min-h-screen bg-background">
      {gameState === "landing" && (
        <LandingPage onStart={handleStartQuiz} />
      )}
      
      {gameState === "quiz" && (
        <QuizScreen 
          onComplete={handleQuizComplete} 
          onClose={handleClose}
        />
      )}
      
      {gameState === "result" && result && (
        <ResultScreen 
          result={result} 
          answers={userAnswers}
          onRestart={handleRestart}
          onClose={handleClose}
        />
      )}
    </main>
  )
}
