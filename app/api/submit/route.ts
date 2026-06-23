import { NextResponse } from "next/server"

// 이벤트 응모 데이터를 외부 저장소(Google Apps Script)로 중계하는 서버 라우트.
// 엔드포인트 URL을 클라이언트 번들에 노출하지 않고 서버 환경변수로만 관리한다.
const SUBMIT_ENDPOINT = process.env.SUBMIT_ENDPOINT

// 한국 휴대폰 번호: 010-1234-5678 / 01012345678 등 허용
const PHONE_REGEX = /^01[0-9]-?\d{3,4}-?\d{4}$/

export async function POST(request: Request) {
  if (!SUBMIT_ENDPOINT) {
    console.error("SUBMIT_ENDPOINT 환경변수가 설정되지 않았습니다.")
    return NextResponse.json(
      { ok: false, error: "서버 설정 오류입니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    )
  }

  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: "잘못된 요청입니다." }, { status: 400 })
  }

  const { name, phone, resultType, answers, consent } = (payload ?? {}) as Record<string, unknown>

  // 서버 측 검증 (클라이언트 검증을 신뢰하지 않는다)
  if (consent !== true) {
    return NextResponse.json(
      { ok: false, error: "개인정보 수집·이용 동의가 필요합니다." },
      { status: 400 }
    )
  }
  if (typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json({ ok: false, error: "이름을 입력해주세요." }, { status: 400 })
  }
  if (typeof phone !== "string" || !PHONE_REGEX.test(phone.trim())) {
    return NextResponse.json({ ok: false, error: "올바른 전화번호를 입력해주세요." }, { status: 400 })
  }

  try {
    const upstream = await fetch(SUBMIT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        name: name.trim(),
        phone: phone.trim(),
        resultType: typeof resultType === "string" ? resultType : "",
        answers: Array.isArray(answers) ? answers : [],
        consentAt: new Date().toISOString(),
      }),
    })

    if (!upstream.ok) {
      console.error("업스트림 전송 실패:", upstream.status)
      return NextResponse.json(
        { ok: false, error: "전송에 실패했습니다. 다시 시도해주세요." },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("응모 전송 중 오류:", error)
    return NextResponse.json(
      { ok: false, error: "전송에 실패했습니다. 다시 시도해주세요." },
      { status: 502 }
    )
  }
}
