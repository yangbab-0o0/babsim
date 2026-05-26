"use client"

import { useState, useCallback } from "react"
import { X, ChevronLeft } from "lucide-react"
import { BabsimiCharacter } from "./babsimi-character"
import { questions } from "@/lib/quiz-data"

interface QuizScreenProps {
  onComplete: (answers: number[]) => void
  onClose: () => void
}

export function QuizScreen({ onComplete, onClose }: QuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [lastClickTime, setLastClickTime] = useState(0)

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100
  const isLastQuestion = currentQuestion === questions.length - 1

  const handleOptionClick = useCallback((optionIndex: number) => {
    const now = Date.now()
    
    // Check for double click (within 500ms)
    if (selectedOption === optionIndex && now - lastClickTime < 500) {
      // Double click detected - proceed to next question
      const newAnswers = [...answers]
      newAnswers[currentQuestion] = optionIndex
      setAnswers(newAnswers)
      
      if (isLastQuestion) {
        // Show the result button
      } else {
        setCurrentQuestion(prev => prev + 1)
        setSelectedOption(null)
      }
    } else {
      // First click - just select
      setSelectedOption(optionIndex)
    }
    
    setLastClickTime(now)
  }, [selectedOption, lastClickTime, answers, currentQuestion, isLastQuestion])

  const handleBack = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
      setSelectedOption(answers[currentQuestion - 1] ?? null)
    }
  }, [currentQuestion, answers])

  const handleShowResult = useCallback(() => {
    if (selectedOption !== null) {
      const finalAnswers = [...answers]
      finalAnswers[currentQuestion] = selectedOption
      onComplete(finalAnswers)
    }
  }, [selectedOption, answers, currentQuestion, onComplete])

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      {/* Decorative peach circles */}
      <div className="absolute top-20 left-4 w-16 h-16 rounded-full bg-peach-light opacity-50 pointer-events-none" />
      <div className="absolute top-1/3 right-4 w-20 h-20 rounded-full bg-peach opacity-30 pointer-events-none" />
      <div className="absolute bottom-32 left-8 w-24 h-24 rounded-full bg-peach-light opacity-40 pointer-events-none" />
      <div className="absolute bottom-48 right-8 w-14 h-14 rounded-full bg-peach opacity-35 pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between p-4 md:p-6">
        <button
          onClick={handleBack}
          disabled={currentQuestion === 0}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-card"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
        </button>
        
        <span className="text-lg md:text-xl font-bold text-foreground">
          {currentQuestion + 1} / {questions.length}
        </span>
        
        <button
          onClick={onClose}
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-secondary rounded-full transition-colors"
        >
          <X className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="px-4 md:px-8 mb-8">
        <div className="relative h-2 bg-border rounded-full overflow-visible">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
          {/* Babsimi indicator on progress bar */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
            style={{ left: `${progress}%`, transform: `translateX(-50%) translateY(-50%)` }}
          >
            <div className="w-9 h-9 md:w-11 md:h-11 bg-card rounded-full border-2 border-primary flex items-center justify-center overflow-hidden shadow-sm">
              <BabsimiCharacter className="w-7 h-7 md:w-8 md:h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="relative z-10 flex-1 flex flex-col px-4 md:px-8 pb-8 overflow-auto">
        <div className="max-w-2xl mx-auto w-full">
          <h2 className="text-xl md:text-3xl font-black text-foreground mb-8 leading-tight">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                className={`w-full text-left p-5 md:p-6 rounded-2xl border-2 transition-all duration-200 ${
                  selectedOption === index
                    ? "bg-secondary border-primary shadow-sm"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                <span className="text-base md:text-lg font-medium text-foreground">
                  {option}
                </span>
              </button>
            ))}
          </div>

          {/* Double click hint */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            {selectedOption !== null 
              ? "더블클릭하여 다음으로 이동"
              : "옵션을 선택하세요"
            }
          </p>

          {/* Show result button on last question */}
          {isLastQuestion && selectedOption !== null && answers.length >= currentQuestion && (
            <button
              onClick={handleShowResult}
              className="w-full mt-8 py-4 px-6 bg-primary text-primary-foreground font-bold text-lg rounded-2xl hover:bg-primary/90 transition-all duration-200 shadow-md"
            >
              결과 보기
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
