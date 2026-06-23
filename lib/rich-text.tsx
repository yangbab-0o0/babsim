import { Fragment, type ReactNode } from "react"

/**
 * 신뢰된 정적 문자열에 포함된 <b>/<strong> 강조만 React 엘리먼트로 변환한다.
 * 그 외 모든 내용은 일반 텍스트로 렌더링되므로 dangerouslySetInnerHTML과 달리
 * 임의 HTML/스크립트 주입(XSS)이 발생하지 않는다.
 * 줄바꿈(\n)은 호출부의 whitespace-pre-line 스타일이 처리한다.
 */
export function renderRichText(input: string): ReactNode {
  // <b>, </b>, <strong>, </strong> 태그를 기준으로 분할 (그 외 태그는 텍스트로 노출)
  const tokens = input.split(/(<\/?(?:b|strong)>)/gi)

  const nodes: ReactNode[] = []
  let boldDepth = 0

  tokens.forEach((token, index) => {
    const lower = token.toLowerCase()
    if (lower === "<b>" || lower === "<strong>") {
      boldDepth++
      return
    }
    if (lower === "</b>" || lower === "</strong>") {
      boldDepth = Math.max(0, boldDepth - 1)
      return
    }
    if (token === "") return

    nodes.push(
      boldDepth > 0 ? (
        <strong key={index}>{token}</strong>
      ) : (
        <Fragment key={index}>{token}</Fragment>
      )
    )
  })

  return nodes
}
