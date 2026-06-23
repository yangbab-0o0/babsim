"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { BabsimiCharacter } from "./babsimi-character"
import { type Result } from "@/lib/quiz-data"
import { renderRichText } from "@/lib/rich-text"

interface ResultScreenProps {
  result: Result
  answers: number[]
  onRestart: () => void
  onClose: () => void
}

export function ResultScreen({ result, answers, onRestart, onClose }: ResultScreenProps) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const PHONE_REGEX = /^01[0-9]-?\d{3,4}-?\d{4}$/

  const handleShare = () => {
    setIsShareModalOpen(true)
  }

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert("이름을 입력해주세요.")
      return
    }
    if (!PHONE_REGEX.test(phone.trim())) {
      alert("올바른 전화번호를 입력해주세요. (예: 010-1234-5678)")
      return
    }
    if (!consent) {
      alert("개인정보 수집·이용에 동의해주세요.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          resultType: result.name,
          answers: answers,
          consent: consent,
        }),
      })

      // fetch는 HTTP 4xx/5xx에 reject하지 않으므로 응답 상태를 직접 확인한다
      const data = await response.json().catch(() => ({}))
      if (!response.ok || data?.ok !== true) {
        throw new Error(data?.error ?? "전송에 실패했습니다.")
      }

      alert("이벤트 참여가 완료되었습니다! 소중한 정보 감사합니다.")
      setIsShareModalOpen(false)
      // Reset form
      setName("")
      setPhone("")
      setConsent(false)

      // Return to landing page
      onRestart()
    } catch (error) {
      console.error("Submission error:", error)
      alert(error instanceof Error ? error.message : "전송에 실패했습니다. 다시 시도해주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      {/* Decorative peach circles */}
      <div className="absolute top-20 left-4 w-20 h-20 rounded-full bg-peach-light opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 right-4 w-24 h-24 rounded-full bg-peach opacity-35 pointer-events-none" />
      <div className="absolute bottom-48 left-8 w-28 h-28 rounded-full bg-peach-light opacity-45 pointer-events-none" />
      <div className="absolute bottom-32 right-8 w-16 h-16 rounded-full bg-peach opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-peach-light opacity-30 pointer-events-none" />

      {/* Close Button (Floating Top Right) */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border hover:bg-secondary rounded-full transition-colors z-50 shadow-sm"
      >
        <X className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
      </button>

      {/* Content */}
      <div className="relative z-10 flex-1 overflow-y-auto px-4 pb-8">
        <div className="min-h-full flex flex-col items-center justify-center py-4">
          <div className="max-w-md w-full text-center">
          {/* Babsimi character with glow */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-peach-light rounded-full blur-2xl opacity-60 scale-110" />
            <BabsimiCharacter className="relative w-36 h-36 md:w-44 md:h-44 mx-auto" />
          </div>

          {/* Result name */}
          <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            {result.name}
          </h1>

          {/* Description */}
          <div className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed whitespace-pre-line [&_strong]:font-bold [&_strong]:text-foreground">
            {renderRichText(result.description)}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {result.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary text-primary text-sm font-bold rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8" />

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={onRestart}
              className="flex-1 py-4 bg-secondary text-secondary-foreground font-bold text-base md:text-lg rounded-2xl hover:bg-secondary/80 transition-all active:scale-[0.98]"
            >
              다시하기
            </button>
            <button
              onClick={handleShare}
              className="flex-1 py-4 bg-primary text-primary-foreground font-bold text-base md:text-lg rounded-2xl hover:bg-primary/90 transition-all active:scale-[0.98] shadow-md"
            >
              이벤트 참여하기
            </button>
          </div>
          </div>
        </div>
      </div>
      
      {/* Share Modal */}
      {isShareModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4 backdrop-blur-sm transition-all">
          <div className="bg-background rounded-3xl max-w-sm w-full p-6 shadow-xl relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setIsShareModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-secondary rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
            
            <h2 className="text-2xl font-black text-foreground mb-2">이벤트 참여하기</h2>
            <p className="text-sm text-muted-foreground mb-6">
              밥심이를 도와주고 특별한 경품을 받아가세요!
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-foreground mb-1">이름</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="이름을 입력해주세요" 
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:border-primary transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-1">전화번호</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="010-0000-0000" 
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:border-primary transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <label className="block text-sm font-bold text-foreground mb-2">경품 안내 (응모 시 추첨)</label>
              
              {/* Baemin Coupon Image (CSS replica) */}
              <div className="w-full h-24 bg-[#2ac1bc] rounded-xl relative overflow-hidden flex items-center shadow-md border border-[#23a5a1]">
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-background rounded-full border border-[#23a5a1]" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-background rounded-full border border-[#23a5a1]" />
                <div className="ml-8 text-white">
                  <div className="text-xs font-bold opacity-90 mb-1">배달의민족</div>
                  <div className="text-2xl font-black tracking-tight">20,000원 쿠폰</div>
                </div>
              </div>

              {/* Babsimi Meal Ticket Image (CSS replica) */}
              <div className="w-full h-24 bg-gradient-to-br from-amber-100 to-amber-300 rounded-xl relative overflow-hidden flex items-center shadow-md border border-amber-400">
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-background rounded-full border border-amber-400" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-background rounded-full border border-amber-400" />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30">
                   <BabsimiCharacter className="w-16 h-16" />
                </div>
                <div className="ml-8 text-amber-900 relative z-10">
                  <div className="text-xs font-bold opacity-80 mb-1">특별 식사권</div>
                  <div className="text-2xl font-black tracking-tight">밥심이와 한끼 식사</div>
                </div>
              </div>
            </div>

            {/* 개인정보 수집·이용 동의 */}
            <label className="flex items-start gap-3 mb-4 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 w-5 h-5 flex-shrink-0 accent-primary cursor-pointer"
              />
              <span className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-bold text-foreground">(필수)</span> 경품 추첨 및 안내를 위해 이름과
                전화번호를 수집·이용하는 것에 동의합니다. 수집된 정보는 이벤트 종료 후 파기됩니다.
              </span>
            </label>

            <button
              disabled={isSubmitting || !consent}
              className={`w-full py-4 font-bold text-lg rounded-2xl transition-all shadow-md ${
                isSubmitting || !consent
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]"
              }`}
              onClick={handleSubmit}
            >
              {isSubmitting ? "전송 중..." : "참여 완료"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
