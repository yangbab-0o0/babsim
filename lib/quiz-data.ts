export interface Question {
  id: number
  question: string
  options: string[]
}

export interface Result {
  id: string
  name: string
  description: string
  tags: string[]
}

export const questions: Question[] = [
  {
    id: 1,
    question: "나만의 로컬 맛집은?😋",
    options: [
      "나만 아는 노포 맛집",
      "모두가 알아서 웨이팅 해야하는 맛집",
      "나만 맛있다고 느끼는 맛집"
    ]
  },
  {
    id: 2,
    question: "하루에 몇끼 먹는지?",
    options: [
      "1끼만 먹는다...밥심이 부족해ㅠ🥲",
      "2끼정도 챙겨먹는다. 충분...?",
      "3끼 모두 챙겨먹는다!💪"
    ]
  },
  {
    id: 3,
    question: "나만의 밥심 스토리는?🍚",
    options: [
      "여자친구/남자친구 화났을 때 기분 풀어줄 때 나온 음식!❤️",
      "수능/면접 전에 먹었던 음식!📖",
      "가족끼리 자주 먹었던 음식!👨‍👩‍👧‍👦",
      "올해 마지막으로 먹고 싶은 음식!🎉"
    ]
  },
  {
    id: 4,
    question: "내가 자주 먹는 음식은?😋",
    options: [
      "바빠서 간단하고 빠르게 먹을수 있는 음식!🍙",
      "나를 위한 보상으로 여유롭게 양과 질 모두 잡은 음식!🍗"
    ]
  },
  {
    id: 5,
    question: "나의 밥심 채우는 성향은?",
    options: [
      "다양한 사람들과 다함께!🤩",
      "찐친들과 편안하게!😊",
      "혼자가 편한 프로 혼밥러!😎"
    ]
  },
  {
    id: 6,
    question: "학식/구내식당 어떤지?🤔",
    options: [
      "가성비도 맛도 대박!👍",
      "이정도면 낫베드~😑",
      "굳이...이걸?🤨"
    ]
  },
  {
    id: 7,
    question: "요즘 나의 밥심이 부족하다고 느끼는 순간은?🥲",
    options: [
      "교수님이 밉고 공부가 힘들어.. 당이 필요해!🍰",
      "나 뭐 해먹고 살지.. 맛있는게 필요해!🍔",
      "연애하고 싶고 외로워.. 밥심이가 필요해!🍚",
      "단체 생활 왜이렇게 힘들지.. 아 충전이 필요해!⚡",
      "다들 뛰는데 왜 나만 뒤쳐지는것 같지.. 밥심이 필요해!🍚"
    ]
  },
  {
    id: 8,
    question: "스트레스 받을 때 찾는 것은?",
    options: [
      "화끈하게 매운 걸로 가져와!!!🔥",
      "당! 단게 필요해!🍫",
      "기름진 칼로리 폭탄으로 가즈아!🍕",
      "음식으로는 딱히?🤨"
    ]
  },
  {
    id: 9,
    question: "절대 안 먹는 / 이해 안되는 음식 스타일은?🤔",
    options: [
      "엄청 건강식만 먹는 사람💪",
      "맨날 배달만 먹는 사람🛵",
      "음식 사진만 찍는 사람📸",
      "맵부심 있는 사람🌶️"
    ]
  }
]

export const results: Result[] = [
  {
    id: "humanity",
    name: "인간미 넘치는 밥심이",
    description: "“맛은 분위기와 추억까지 포함이다.”\n\n특징: <b>오래된 맛집</b>과 <b>단골집</b>을 좋아하며,\n 사람들과 <b>함께</b> 먹는 걸 중요하게 생각합니다.\n 음식에 추억과 감정이 담겨있어\n <b>“여긴 진짜 아는 사람만 안다”</b>\n 스타일의 맛집을 선호합니다.\n\n👉 음식은 단순 끼니가 아니라 <b>관계</b>와 <b>추억</b>이다.",
    tags: ["노포맛집", "추억음식", "찐친", "가성비"]
  },
  {
    id: "efficiency",
    name: "효율 생존형 밥심이",
    description: "“일단 빠르고 든든하면 된다.”\n\n특징: 바쁘고 <b>현실적인</b> 스타일로,\n 음식 선택 기준이 <b>속도</b>와 <b>효율</b>입니다.\n 배달이나 간편식에 대한 거부감이 적고,\n 밥은 <b>생존용 연료</b>에 가깝습니다.\n\n👉 먹는 것도 <b>전략</b>이다. 시간 아끼는 게 최고.",
    tags: ["스피드", "가성비", "효율중시", "간편식"]
  },
  {
    id: "healing",
    name: "감성 힐링 밥심이",
    description: "“힘들 땐 맛있는 걸 먹어야 <b>회복</b>된다.”\n\n특징: <b>음식으로 감정을 회복하는 타입</b>입니다.\n 단 음식이나 위로가 되는 음식을 좋아하며,\n 분위기 좋은 맛집에서 <b>위안</b>과 <b>행복</b>을 느낍니다.\n\n👉 밥심은 곧 <b>멘탈 관리</b>다.",
    tags: ["디저트", "나를위한보상", "위로음식", "멘탈회복"]
  },
  {
    id: "stimulation",
    name: "자극 폭발 밥심이",
    description: "“스트레스? 매운맛과 칼로리로 날린다.”\n\n특징: <b>자극적인 매운 음식</b>이나 <b>기름진 음식</b>을 좋아합니다.\n 감정 표현이 <b>솔직</b>하고 <b>에너지가 강하며</b>,\n 먹을 때만큼은 제대로 즐기려 합니다.\n\n👉 먹는 순간만큼은 <b>화끈하게</b> 간다.",
    tags: ["매운맛", "칼로리폭탄", "웨이팅감수", "스트레스해소"]
  },
  {
    id: "solo",
    name: "프로 혼밥 밥심이",
    description: "“혼자 먹는 시간이 가장 편하다.”\n\n특징: 혼밥 능력 만렙!\n <b>사람보다 음식 자체에 집중</b>하며,\n <b>조용하고 편안한 식사</b>를 선호합니다.\n 자신만의 확고한 취향을 가지고 있습니다.\n\n👉 혼밥은 외로움이 아니라 <b>취향</b>이다.",
    tags: ["혼밥", "마이웨이", "나만의맛집", "조용한식사"]
  }
]

export function calculateResult(answers: number[]): Result {
  // 인덱스: 0(인간미), 1(효율), 2(힐링), 3(자극), 4(혼밥)
  const scores = [0, 0, 0, 0, 0]

  // Q1: 나만의 로컬 맛집은?
  if (answers[0] === 0) scores[0] += 2 // 노포 -> 인간미
  else if (answers[0] === 1) scores[3] += 1 // 웨이팅 -> 자극
  else if (answers[0] === 2) scores[4] += 2 // 나만의 맛집 -> 혼밥

  // Q2: 하루에 몇끼 먹는지?
  if (answers[1] === 0 || answers[1] === 1) scores[1] += 1 // 1~2끼 -> 효율
  else if (answers[1] === 2) scores[3] += 1 // 3끼 -> 자극

  // Q3: 나만의 밥심 스토리는?
  if (answers[2] === 0) scores[0] += 1 // 연애 추억 -> 인간미
  else if (answers[2] === 1) { scores[2] += 1; scores[0] += 1 } // 힘든 시절 -> 힐링, 인간미
  else if (answers[2] === 2) { scores[2] += 1; scores[3] += 1 } // 스트레스 -> 힐링, 자극
  else if (answers[2] === 3) { scores[1] += 2; } // 올해 목표 -> 효율

  // Q4: 내가 자주 먹는 음식은?
  if (answers[3] === 0) scores[1] += 2 // 간단/빠르게 -> 효율
  else if (answers[3] === 1) scores[2] += 2 // 보상 -> 힐링

  // Q5: 나의 밥심 채우는 성향은?
  if (answers[4] === 0 || answers[4] === 1) scores[0] += 2 // 다함께/찐친 -> 인간미
  else if (answers[4] === 2) scores[4] += 3 // 혼자 -> 혼밥

  // Q6: 학식/구내식당 어떤지?
  if (answers[5] === 0) { scores[0] += 1; scores[1] += 1 } // 가성비대박 -> 인간미, 효율
  else if (answers[5] === 1) scores[1] += 1 // 낫베드 -> 효율
  else if (answers[5] === 2) { scores[3] += 1; scores[2] += 1 } // 굳이 -> 자극, 힐링

  // Q7: 요즘 나의 밥심이 부족하다고 느끼는 순간은?
  if (answers[6] === 0 || answers[6] === 1 || answers[6] === 2) scores[2] += 2 // 당/맛있는거/외로워 -> 힐링
  else if (answers[6] === 3) scores[4] += 1 // 단체생활 힘듦 -> 혼밥
  else if (answers[6] === 4) scores[0] += 1 // 뒤쳐지는것 같아 -> 인간미

  // Q8: 스트레스 받을 때 찾는 것은?
  if (answers[7] === 0) scores[3] += 2 // 매운거 -> 자극
  else if (answers[7] === 1) scores[2] += 2 // 당 -> 힐링
  else if (answers[7] === 2) scores[3] += 2 // 칼로리 폭탄 -> 자극
  else if (answers[7] === 3) scores[1] += 2 // 딱히 안찾음 -> 효율

  // Q9: 절대 안 먹는 / 이해 안되는 음식 스타일은?
  if (answers[8] === 0) scores[3] += 1 // 건강식 안먹음 -> 자극
  else if (answers[8] === 1) scores[0] += 1 // 맨날 배달만 -> 인간미 (배달 싫어함)
  else if (answers[8] === 2) { scores[4] += 1; scores[1] += 1 } // 사진만 -> 혼밥, 효율
  else if (answers[8] === 3) { scores[4] += 1; scores[2] += 1 } // 맵부심 싫어 -> 혼밥, 힐링

  // 가장 높은 점수를 받은 유형 반환
  const maxScore = Math.max(...scores)
  const maxIndex = scores.indexOf(maxScore)

  return results[maxIndex]
}
