"use client"

import { BabsimiCharacter } from "./babsimi-character"

interface LandingPageProps {
  onStart: () => void
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Decorative peach circles - like Instagram posts */}
      <div className="absolute top-16 left-8 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#fae8dc] opacity-70" />
      <div className="absolute top-48 right-4 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#f5d4c1] opacity-50" />
      <div className="absolute bottom-96 left-4 w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#fae8dc] opacity-60" />
      <div className="absolute bottom-32 right-8 w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#f5d4c1] opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-12 h-12 rounded-full bg-[#fae8dc] opacity-50" />
      <div className="absolute bottom-64 left-1/3 w-14 h-14 rounded-full bg-[#f5d4c1] opacity-45" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Hero section - Instagram style text */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-4xl font-black text-foreground mb-2 leading-tight">
            {"안녕? 나는 "}
            <span className="text-primary">&apos;밥심이&apos;</span>
            {"야"}
          </h1>
          <p className="text-lg md:text-2xl font-bold text-foreground leading-relaxed mt-4">
            혼밥하는 너를 위해
            <br />
            <span className="text-primary">친구</span>가 되어줄게!
          </p>
        </div>

        {/* Babsimi character */}
        <div className="my-8 relative">
          {/* Soft glow behind character */}
          <div className="absolute inset-0 bg-[#fae8dc] rounded-full blur-2xl opacity-60 scale-110" />
          <BabsimiCharacter className="relative w-36 h-36 md:w-44 md:h-44" />
        </div>

        {/* Subtitle - styled like Instagram caption */}
        <div className="text-center mb-10 max-w-sm">
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
            나만의 <span className="text-primary">밥심이</span> 친구 만들기
          </h3>
          <p className="text-sm md:text-base text-muted-foreground">
            10가지 질문으로 찾아보는 나만의 캐릭터
          </p>
        </div>

        {/* Team introduction card - cleaner design */}
        <div className="w-full max-w-md mx-auto mb-8">
          <div className="bg-card rounded-3xl p-6 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-5">
              <BabsimiCharacter variant="solid" className="w-10 h-10" />
              <h4 className="text-base md:text-lg font-bold text-foreground">
                밥심이가 필요한 이유
              </h4>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  1
                </span>
                <div>
                  <p className="font-bold text-foreground text-sm">혼밥은 외로워</p>
                  <p className="text-xs text-muted-foreground">함께 밥 먹을 친구가 필요해</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  2
                </span>
                <div>
                  <p className="font-bold text-foreground text-sm">나만의 캐릭터 만들기</p>
                  <p className="text-xs text-muted-foreground">너만의 특별한 친구를 찾아봐</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  3
                </span>
                <div>
                  <p className="font-bold text-foreground text-sm">밥심 충전하기</p>
                  <p className="text-xs text-muted-foreground">맛있는 밥으로 에너지 충전</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons - cleaner style */}
        <div className="w-full max-w-md mx-auto space-y-3">
          <button
            onClick={onStart}
            className="w-full py-4 px-6 bg-primary text-primary-foreground font-bold text-lg rounded-2xl hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            고독한 밥심이와 대화하기
          </button>
          
          <a
            href="https://babsim-house.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 px-6 bg-card text-foreground font-bold text-base rounded-2xl border border-border hover:border-primary hover:text-primary transition-all duration-200 text-center"
          >
            밥심이 활동 둘러보기
          </a>

          <a
            href="https://babsim-house.netlify.app/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 px-6 bg-card text-foreground font-bold text-base rounded-2xl border border-border hover:border-primary hover:text-primary transition-all duration-200 text-center"
          >
            맛집지도 보기
          </a>
        </div>

        {/* Footer - Instagram handle style */}
        <div className="mt-10 flex items-center gap-2 text-muted-foreground">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span className="text-sm font-medium">@babsim.life</span>
        </div>
      </div>
    </div>
  )
}
