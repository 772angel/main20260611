const categoryLabels = {
  all: "전체",
  person: "인물",
  theory: "이론",
  technique: "기법",
  modality: "매체/도구",
  research: "연구/평가",
  ethics: "윤리/운영"
};

const glossaryEntries = [
  {
    term: "Paolo Knill",
    en: "Paolo J. Knill",
    category: "person",
    weeks: [1, 3, 10, 16],
    meaning: "표현예술치료의 핵심 이론가로, 탈중심화, 미학적 반응, 상호매체 전이 개념과 연결되는 인물입니다.",
    context: "1주차 철학, 10주차 매체 간 전이, 16주차 종결 의례의 이론적 근거로 제시됩니다.",
    aliases: ["Knill", "크닐", "파올로 크닐"]
  },
  {
    term: "Natalie Rogers",
    en: "Natalie Rogers",
    category: "person",
    weeks: [2],
    meaning: "인간중심 상담 전통을 바탕으로 표현예술치료의 창조적 연결 과정을 설명한 치료자입니다.",
    context: "움직임, 미술, 글쓰기가 연속적으로 이어지는 2주차 프로그램의 핵심 인물입니다.",
    aliases: ["Rogers", "나탈리 로저스"]
  },
  {
    term: "Cathy Malchiodi",
    en: "Cathy A. Malchiodi",
    category: "person",
    weeks: [4, 11],
    meaning: "트라우마-정보 예술치료와 신체 기반 표현예술치료 논의에서 자주 언급되는 임상 저술가입니다.",
    context: "감각운동 통합, 상향식 안정화, 안전한 용기 기법의 이론적 배경으로 쓰입니다.",
    aliases: ["Malchiodi", "말키오디"]
  },
  {
    term: "Helen Bonny",
    en: "Helen L. Bonny",
    category: "person",
    weeks: [6],
    meaning: "음악과 심상을 결합한 GIM 접근과 관련되는 음악치료 인물입니다.",
    context: "6주차 음악 심상 유도와 음악적 동조화 설명에서 제시됩니다.",
    aliases: ["Bonny", "보니"]
  },
  {
    term: "Rudolf Laban",
    en: "Rudolf Laban",
    category: "person",
    weeks: [6],
    meaning: "움직임의 질, 방향, 힘, 공간 사용을 체계적으로 분석한 무용 및 움직임 이론가입니다.",
    context: "6주차에서 음악을 신체 동선과 움직임 언어로 전환하는 근거로 제시됩니다.",
    aliases: ["Laban", "라반"]
  },
  {
    term: "Jacob L. Moreno",
    en: "Jacob Levy Moreno",
    category: "person",
    weeks: [7],
    meaning: "사이코드라마를 발전시킨 인물로, 역할극과 즉흥극을 치료적으로 활용한 선구자입니다.",
    context: "7주차 가면, 역할, 잉여 현실을 다루는 연극치료 배경입니다.",
    aliases: ["Moreno", "모레노"]
  },
  {
    term: "Robert J. Landy",
    en: "Robert J. Landy",
    category: "person",
    weeks: [7],
    meaning: "드라마 치료의 역할 이론과 임상 실제를 설명한 대표적 저자입니다.",
    context: "7주차 드라마 치료와 심리적 거리두기 설명의 근거 문헌 저자로 제시됩니다.",
    aliases: ["Landy", "랜디"]
  },
  {
    term: "Theodore Roszak",
    en: "Theodore Roszak",
    category: "person",
    weeks: [8],
    meaning: "생태심리학 논의와 연결되는 저자로, 인간 심리와 자연 환경의 관계를 강조합니다.",
    context: "8주차 Eco-Arts와 자연 기반 치유의 이론적 배경입니다.",
    aliases: ["Roszak", "로작"]
  },
  {
    term: "Andy Goldsworthy",
    en: "Andy Goldsworthy",
    category: "person",
    weeks: [8],
    meaning: "자연물과 장소성을 활용하는 대지미술 작가로 알려진 인물입니다.",
    context: "8주차 자연물 배열, 소멸, 자연 회귀 의례를 이해하는 예술적 참조점입니다.",
    aliases: ["Goldsworthy", "골즈워디"]
  },
  {
    term: "Stephen Porges",
    en: "Stephen W. Porges",
    category: "person",
    weeks: [11],
    meaning: "다미주신경 이론을 제시한 연구자로, 안전감과 자율신경계 조절을 설명합니다.",
    context: "11주차 그라운딩, 안전 신호, 신체 안정화 논리의 배경입니다.",
    aliases: ["Porges", "포지스"]
  },
  {
    term: "Margaret Lowenfeld",
    en: "Margaret Lowenfeld",
    category: "person",
    weeks: [12],
    meaning: "아동의 놀이 세계와 모래상자 표현을 임상적으로 이해하는 데 연결되는 인물입니다.",
    context: "12주차 모래놀이, 미니어처, 아동 발달 표현의 근거로 제시됩니다.",
    aliases: ["Lowenfeld", "로웬펠드"]
  },
  {
    term: "Carl Gustav Jung",
    en: "Carl Jung",
    category: "person",
    weeks: [12],
    meaning: "분석심리학의 주요 인물로, 상징, 무의식, 개성화 개념과 관련됩니다.",
    context: "12주차 만다라와 개성화 설명의 이론적 참조점입니다.",
    aliases: ["Jung", "융"]
  },
  {
    term: "Erik Erikson",
    en: "Erik H. Erikson",
    category: "person",
    weeks: [13],
    meaning: "인간 발달을 전 생애 단계로 설명한 발달심리학자입니다.",
    context: "13주차 노년기의 자아통합 대 절망 단계 설명에 사용됩니다.",
    aliases: ["Erikson", "에릭슨"]
  },
  {
    term: "Robert N. Butler",
    en: "Robert N. Butler",
    category: "person",
    weeks: [13],
    meaning: "노년기 회상과 생애 회고 논의와 연결되는 연구자입니다.",
    context: "13주차 삶의 회고, 자서전적 서사, 회상요법의 배경입니다.",
    aliases: ["Butler", "버틀러"]
  },
  {
    term: "Shaun McNiff",
    en: "Shaun McNiff",
    category: "person",
    weeks: [1, 14, 15],
    meaning: "예술 기반 치유와 예술기반연구를 설명한 표현예술치료 분야의 주요 저자입니다.",
    context: "공동체 치유, Art-Based Research, 예술을 통한 치유 철학과 연결됩니다.",
    aliases: ["McNiff", "맥니프"]
  },
  {
    term: "Augusto Boal",
    en: "Augusto Boal",
    category: "person",
    weeks: [14],
    meaning: "피압박자 연극을 발전시킨 연극인으로, 사회 참여적 연극 실천과 관련됩니다.",
    context: "14주차 공동체 예술과 사회적 참여의 배경으로 제시됩니다.",
    aliases: ["Boal", "보알"]
  },
  {
    term: "신혜은",
    category: "person",
    weeks: [1],
    meaning: "1주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "Paolo Knill의 미학적 탈중심화와 미학적 반응을 다룬 문헌의 저자로 제시됩니다."
  },
  {
    term: "김영아",
    category: "person",
    weeks: [2],
    meaning: "2주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "Natalie Rogers의 창조적 연결 기전을 다룬 집단미술치료 문헌의 저자로 제시됩니다."
  },
  {
    term: "임은희",
    category: "person",
    weeks: [2],
    meaning: "2주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "창조적 연결 기전 탐색 문헌의 공동 저자로 제시됩니다."
  },
  {
    term: "박지영",
    category: "person",
    weeks: [3],
    meaning: "3주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "점토매체 미술치료와 신체상, 자아통합감 관련 문헌의 저자로 제시됩니다."
  },
  {
    term: "김갑조",
    category: "person",
    weeks: [3],
    meaning: "3주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "점토매체 미술치료 효과 문헌의 공동 저자로 제시됩니다."
  },
  {
    term: "Sholt",
    en: "M. Sholt",
    category: "person",
    weeks: [3],
    meaning: "3주차 국외 연구 근거로 제시된 저자입니다.",
    context: "점토 작업의 치료적 특성을 다룬 문헌 저자로 제시됩니다.",
    aliases: ["숄트"]
  },
  {
    term: "Gavron",
    en: "T. Gavron",
    category: "person",
    weeks: [3],
    meaning: "3주차 국외 연구 근거로 제시된 저자입니다.",
    context: "점토 작업의 치료적 특성 문헌의 공동 저자로 제시됩니다.",
    aliases: ["가브론"]
  },
  {
    term: "강주연",
    category: "person",
    weeks: [4],
    meaning: "4주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "감각운동 미술치료와 PTSD 성인의 신체화 증상, 정서조절 문헌의 저자로 제시됩니다."
  },
  {
    term: "이정숙",
    category: "person",
    weeks: [4],
    meaning: "4주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "감각운동 미술치료 효과 문헌의 공동 저자로 제시됩니다."
  },
  {
    term: "Solomon",
    en: "M. Solomon",
    category: "person",
    weeks: [4],
    meaning: "4주차 국외 연구 근거로 제시된 저자입니다.",
    context: "Body Mapping을 신체 경험과 치유 도구로 다룬 문헌 저자로 제시됩니다.",
    aliases: ["솔로몬"]
  },
  {
    term: "이지혜",
    category: "person",
    weeks: [5],
    meaning: "5주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "콜라주와 시치료를 결합한 통합저널치료 문헌의 저자로 제시됩니다."
  },
  {
    term: "Colbert",
    en: "T. C. Colbert",
    category: "person",
    weeks: [5],
    meaning: "5주차 국외 연구 근거로 제시된 저자입니다.",
    context: "Poetry Therapy가 인지 및 정서 기능에 미치는 영향을 다룬 문헌 저자로 제시됩니다.",
    aliases: ["콜버트"]
  },
  {
    term: "김소원",
    category: "person",
    weeks: [6],
    meaning: "6주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "음악과 동작의 다감각적 통합 치료 프로그램 문헌의 저자로 제시됩니다."
  },
  {
    term: "정현주",
    category: "person",
    weeks: [6],
    meaning: "6주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "음악과 동작 통합 치료 효과 문헌의 공동 저자로 제시됩니다."
  },
  {
    term: "Koch",
    en: "S. C. Koch",
    category: "person",
    weeks: [6],
    meaning: "6주차 국외 연구 근거로 제시된 저자입니다.",
    context: "무용동작치료와 능동적 음악치료의 효과 문헌 저자로 제시됩니다.",
    aliases: ["코흐"]
  },
  {
    term: "최지영",
    category: "person",
    weeks: [7],
    meaning: "7주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "연극치료 가면, 그림자 외재화, 역할 통합 문헌의 저자로 제시됩니다."
  },
  {
    term: "정동훈",
    category: "person",
    weeks: [7],
    meaning: "7주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "연극치료 가면 연구 문헌의 공동 저자로 제시됩니다."
  },
  {
    term: "임지원",
    category: "person",
    weeks: [8],
    meaning: "8주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "대지미술 및 생태미술치료 효과 문헌의 저자로 제시됩니다."
  },
  {
    term: "정혜경",
    category: "person",
    weeks: [8],
    meaning: "8주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "생태미술치료와 심리적 안녕감, 회복탄력성 문헌의 공동 저자로 제시됩니다."
  },
  {
    term: "Berger",
    en: "R. Berger",
    category: "person",
    weeks: [8],
    meaning: "8주차 국외 연구 근거로 제시된 저자입니다.",
    context: "자연 안에서 치료적 공간을 구성하는 생태치료 방법론 문헌 저자로 제시됩니다.",
    aliases: ["버거"]
  },
  {
    term: "황성혜",
    category: "person",
    weeks: [9],
    meaning: "9주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "디지털 스토리텔링과 통합예술치료 문헌의 저자로 제시됩니다."
  },
  {
    term: "박승아",
    category: "person",
    weeks: [9],
    meaning: "9주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "디지털 스토리텔링 활용 문헌의 공동 저자로 제시됩니다."
  },
  {
    term: "de Vecchi",
    en: "N. de Vecchi",
    category: "person",
    weeks: [9],
    meaning: "9주차 국외 연구 근거로 제시된 저자입니다.",
    context: "정신건강 영역에서 디지털 스토리텔링 활용을 다룬 문헌 저자로 제시됩니다.",
    aliases: ["드 베키"]
  },
  {
    term: "홍은주",
    category: "person",
    weeks: [10],
    meaning: "10주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "표현예술치료의 매체 간 전이 과정 문헌의 저자로 제시됩니다."
  },
  {
    term: "최은영",
    category: "person",
    weeks: [11],
    meaning: "11주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "트라우마-정보 미술치료와 다미주신경 이론 적용 문헌의 저자로 제시됩니다."
  },
  {
    term: "장혜경",
    category: "person",
    weeks: [12],
    meaning: "12주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "모래놀이와 인형극 통합 치료 프로그램 문헌의 저자로 제시됩니다."
  },
  {
    term: "백현옥",
    category: "person",
    weeks: [12],
    meaning: "12주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "아동 문제행동 조절을 위한 통합 치료 문헌의 공동 저자로 제시됩니다."
  },
  {
    term: "이정선",
    category: "person",
    weeks: [13],
    meaning: "13주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "조각보 바느질 콜라주와 회상요법 문헌의 저자로 제시됩니다."
  },
  {
    term: "최경애",
    category: "person",
    weeks: [13],
    meaning: "13주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "노인 자아통합감 및 잔존인지능력 관련 문헌의 공동 저자로 제시됩니다."
  },
  {
    term: "Kenning",
    en: "G. Kenning",
    category: "person",
    weeks: [13],
    meaning: "13주차 국외 연구 근거로 제시된 저자입니다.",
    context: "텍스타일 수공예와 안녕감의 관계를 다룬 문헌 저자로 제시됩니다.",
    aliases: ["케닝"]
  },
  {
    term: "김성현",
    category: "person",
    weeks: [14],
    meaning: "14주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "공동 벽화 그리기 미술치료와 사회적 고립감 문헌의 저자로 제시됩니다."
  },
  {
    term: "정민아",
    category: "person",
    weeks: [14],
    meaning: "14주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "커뮤니티 케어로서 공동 벽화 연구 문헌의 공동 저자로 제시됩니다."
  },
  {
    term: "Hocoy",
    en: "D. Hocoy",
    category: "person",
    weeks: [14],
    meaning: "14주차 국외 연구 근거로 제시된 저자입니다.",
    context: "예술치료와 사회적 행동을 다룬 문헌 저자로 제시됩니다.",
    aliases: ["호코이"]
  },
  {
    term: "이성희",
    category: "person",
    weeks: [15],
    meaning: "15주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "표현예술치료자의 예술기반연구 경험과 윤리 가이드 문헌의 저자로 제시됩니다."
  },
  {
    term: "조영은",
    category: "person",
    weeks: [16],
    meaning: "16주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "집단예술치료 종결 단계의 촛불 의례 관련 문헌의 저자로 제시됩니다."
  },
  {
    term: "임효선",
    category: "person",
    weeks: [16],
    meaning: "16주차 국내 연구 근거로 제시된 연구자입니다.",
    context: "종결 의례와 집단 응집력 승화 문헌의 공동 저자로 제시됩니다."
  },
  {
    term: "Quintanilla",
    en: "R. Quintanilla",
    category: "person",
    weeks: [16],
    meaning: "16주차 국외 연구 근거로 제시된 저자입니다.",
    context: "치료적 종결 과정을 다룬 문헌 저자로 제시됩니다.",
    aliases: ["퀸타니야"]
  },
  {
    term: "통합예술치료",
    en: "Integrated Arts Therapy",
    category: "theory",
    weeks: [1, 16],
    meaning: "미술, 음악, 동작, 연극, 글쓰기 등 여러 예술 매체를 통합해 심리적 표현과 회복을 돕는 접근입니다.",
    context: "이 프로그램 전체를 관통하는 기본 개념입니다.",
    aliases: ["다매체 예술치료", "통합 예술 치료"]
  },
  {
    term: "표현예술치료",
    en: "Expressive Arts Therapy",
    category: "theory",
    weeks: [1, 10, 15],
    meaning: "예술적 결과물보다 창작 과정, 감각 경험, 상징 표현을 통해 정서와 의미를 다루는 치료 접근입니다.",
    context: "탈중심화, 매체 간 전이, 예술기반연구의 바탕입니다.",
    aliases: ["EXA", "표현 예술 치료"]
  },
  {
    term: "단일 예술치료",
    en: "Single-Modality Arts Therapy",
    category: "theory",
    weeks: [1],
    meaning: "미술치료, 음악치료처럼 하나의 주된 예술 매체를 중심으로 구성되는 치료 접근입니다.",
    context: "1주차에서 통합예술치료와 대비되는 개념으로 사용됩니다."
  },
  {
    term: "Low Arts",
    en: "Low Arts",
    category: "theory",
    weeks: [1],
    meaning: "전문가의 고급 예술보다 일상적, 놀이적, 의례적인 생활 예술의 치유성을 강조하는 개념입니다.",
    context: "1주차 Paolo Knill의 철학을 설명하는 핵심 용어입니다.",
    aliases: ["대중예술", "생활예술"]
  },
  {
    term: "놀이 공간",
    en: "Play Space",
    category: "theory",
    weeks: [1],
    meaning: "현실의 평가와 압박에서 잠시 벗어나 안전하게 실험하고 표현하는 임시적 창작 공간입니다.",
    context: "치료자가 안전한 예술 경험을 조율하는 장면에서 중요합니다."
  },
  {
    term: "치료적 미학",
    en: "Therapeutic Aesthetics",
    category: "theory",
    weeks: [1, 3],
    meaning: "예술의 아름다움, 형식, 감각적 질서가 심리적 회복에 기여한다고 보는 관점입니다.",
    context: "작품의 완성도보다 창작 과정에서 생기는 감각적 질서를 중시합니다."
  },
  {
    term: "탈중심화",
    en: "Decentering",
    category: "technique",
    weeks: [1, 3],
    meaning: "문제 중심의 사고에서 잠시 벗어나 예술적 세계에 몰입함으로써 심리적 거리를 확보하는 과정입니다.",
    context: "3주차 점토 작업의 핵심 치료 원리입니다.",
    aliases: ["미학적 탈중심화"]
  },
  {
    term: "미학적 반응",
    en: "Aesthetic Response",
    category: "technique",
    weeks: [1],
    meaning: "타인의 작품을 해석하거나 평가하기보다 소리, 움직임, 색 등 다른 예술 방식으로 응답하는 과정입니다.",
    context: "1주차에서 동료의 드로잉을 타악기 즉흥 연주로 되돌려주는 활동입니다."
  },
  {
    term: "창조적 연결",
    en: "Creative Connection",
    category: "theory",
    weeks: [2],
    meaning: "움직임, 미술, 글쓰기처럼 서로 다른 표현 양식이 연속되며 내면 표현을 확장하는 과정입니다.",
    context: "2주차 Natalie Rogers 접근의 중심 개념입니다."
  },
  {
    term: "인간중심 예술치료",
    en: "Person-Centered Expressive Arts Therapy",
    category: "theory",
    weeks: [2],
    meaning: "공감, 수용, 비판단적 분위기 속에서 자기표현과 성장을 돕는 예술치료 접근입니다.",
    context: "2주차에서 방어 완화와 자기 통찰의 기반으로 사용됩니다."
  },
  {
    term: "미학적 책임감",
    en: "Aesthetic Responsibility",
    category: "technique",
    weeks: [3],
    meaning: "작품을 아무렇게나 끝내지 않고, 재료와 형식에 충분히 머물며 창작을 물리적으로 종결하는 태도입니다.",
    context: "3주차 점토 조형에서 완성 경험을 돕는 기준입니다."
  },
  {
    term: "대안적 현실",
    en: "Alternative Reality",
    category: "theory",
    weeks: [3],
    meaning: "현실 문제를 그대로 재현하지 않고 예술 안에서 새롭게 구성되는 상징적 세계입니다.",
    context: "점토 작품이 현실 문제와 다른 방식으로 통찰을 주는 근거입니다."
  },
  {
    term: "점토매체",
    en: "Clay Work",
    category: "modality",
    weeks: [3, 11],
    meaning: "손으로 누르고 빚고 던지고 결합할 수 있는 촉각 중심의 미술 매체입니다.",
    context: "탈중심화, 신체 감각, 고통의 외재화 활동에 사용됩니다.",
    aliases: ["점토 작업", "점토"]
  },
  {
    term: "상향식 접근",
    en: "Bottom-Up Approach",
    category: "theory",
    weeks: [4],
    meaning: "인지적 설명보다 감각, 호흡, 신체 움직임 같은 하위 신경계 경험에서 안정화를 시작하는 접근입니다.",
    context: "4주차 트라우마-정보 신체 안정화의 핵심 방향입니다."
  },
  {
    term: "감각운동 미술치료",
    en: "Sensory-Motor Art Therapy",
    category: "theory",
    weeks: [4],
    meaning: "감각 자극과 운동 경험을 미술 표현과 결합해 정서조절과 신체 인식을 돕는 접근입니다.",
    context: "4주차 PTSD, 신체화 증상, 정서조절 근거로 제시됩니다."
  },
  {
    term: "바디 맵핑",
    en: "Body Mapping",
    category: "technique",
    weeks: [4],
    meaning: "몸의 윤곽이나 신체 부위에 감정, 기억, 통증, 안정감을 색과 기호로 표시하는 기법입니다.",
    context: "4주차에서 신체에 남은 정서 흔적을 외재화합니다."
  },
  {
    term: "Somatic",
    en: "Somatic",
    category: "theory",
    weeks: [4, 10],
    meaning: "몸의 감각, 긴장, 호흡, 움직임처럼 신체적으로 경험되는 심리 상태를 뜻합니다.",
    context: "신체 기반 트라우마 안정화와 매체 전이에서 사용됩니다.",
    aliases: ["신체감각", "체성"]
  },
  {
    term: "자율신경계",
    en: "Autonomic Nervous System",
    category: "theory",
    weeks: [4, 11],
    meaning: "호흡, 심박, 긴장, 이완 같은 자동적 생리 반응을 조절하는 신경계입니다.",
    context: "트라우마 안정화, 그라운딩, 소리 이완 활동의 생리적 근거입니다."
  },
  {
    term: "PTSD",
    en: "Post-Traumatic Stress Disorder",
    category: "research",
    weeks: [4],
    meaning: "외상 경험 이후 침습 기억, 과각성, 회피, 정서 변화 등이 지속되는 상태를 뜻합니다.",
    context: "4주차 감각운동 미술치료 근거 문헌의 대상 증상입니다.",
    aliases: ["외상 후 스트레스 장애"]
  },
  {
    term: "저널 테라피",
    en: "Journal Therapy",
    category: "technique",
    weeks: [5],
    meaning: "글쓰기와 기록을 통해 감정, 생각, 경험을 정리하고 성찰하는 치료적 글쓰기 방식입니다.",
    context: "5주차 콜라주와 시치료를 연결하는 축입니다."
  },
  {
    term: "시치료",
    en: "Poetry Therapy",
    category: "technique",
    weeks: [5],
    meaning: "시를 읽고 쓰고 나누는 과정을 통해 정서 표현과 의미화를 돕는 치료 접근입니다.",
    context: "블랙아웃 포에트리와 낭독 활동의 배경입니다."
  },
  {
    term: "콜라주",
    en: "Collage",
    category: "modality",
    weeks: [5, 13],
    meaning: "이미지, 글자, 천, 종이 등을 오려 붙여 새로운 구성을 만드는 시각 예술 방식입니다.",
    context: "5주차 이미지 콜라주, 13주차 조각보 콜라주에 사용됩니다."
  },
  {
    term: "블랙아웃 포에트리",
    en: "Blackout Poetry",
    category: "technique",
    weeks: [5],
    meaning: "기존 문장에서 일부 단어만 남기고 나머지를 지워 새로운 시를 만드는 기법입니다.",
    context: "단어를 새로 만들어야 하는 부담을 줄이고 은유적 통찰을 돕습니다."
  },
  {
    term: "음악적 동조화",
    en: "Entrainment",
    category: "theory",
    weeks: [6],
    meaning: "리듬, 박자, 호흡, 움직임이 서로 맞물려 신체와 정서가 조율되는 현상입니다.",
    context: "6주차 음악과 동작의 통합적 전환을 설명합니다."
  },
  {
    term: "GIM",
    en: "Guided Imagery and Music",
    category: "technique",
    weeks: [6],
    meaning: "음악을 들으며 떠오르는 심상, 기억, 감정을 탐색하는 음악치료 접근입니다.",
    context: "6주차 음악 심상 유도 배경으로 제시됩니다.",
    aliases: ["음악 심상 유도"]
  },
  {
    term: "라반 움직임 분석",
    en: "Laban Movement Analysis",
    category: "theory",
    weeks: [6],
    meaning: "몸의 움직임을 시간, 무게, 공간, 흐름 등의 요소로 관찰하고 설명하는 체계입니다.",
    context: "6주차 소리를 신체 동작으로 전환하는 분석 언어입니다.",
    aliases: ["LMA"]
  },
  {
    term: "Movement Dialogue",
    en: "Movement Dialogue",
    category: "technique",
    weeks: [6],
    meaning: "말 대신 움직임으로 서로의 리듬, 감정, 반응을 주고받는 비언어적 대화입니다.",
    context: "6주차 악기와 신체의 리듬 다이얼로그 활동입니다."
  },
  {
    term: "카타르시스",
    en: "Catharsis",
    category: "theory",
    weeks: [6],
    meaning: "억눌린 감정이 표현을 통해 풀리고 정화되는 심리적 경험을 뜻합니다.",
    context: "음악, 춤, 타악기 즉흥 표현의 목표 중 하나입니다."
  },
  {
    term: "사이코드라마",
    en: "Psychodrama",
    category: "theory",
    weeks: [7],
    meaning: "역할극과 즉흥극을 통해 내면 갈등, 관계, 기억을 무대 위에서 탐색하는 치료 접근입니다.",
    context: "7주차 가면 즉흥극의 이론적 배경입니다."
  },
  {
    term: "드라마 치료",
    en: "Drama Therapy",
    category: "theory",
    weeks: [7],
    meaning: "역할, 이야기, 연기, 상상 장면을 통해 심리적 표현과 통합을 돕는 예술치료 분야입니다.",
    context: "7주차 역할 통합과 가면 작업을 설명합니다."
  },
  {
    term: "심리적 거리두기",
    en: "Aesthetic Distance",
    category: "technique",
    weeks: [7],
    meaning: "고통을 직접 말하지 않고 가면, 역할, 상징을 통해 적절한 거리를 두고 다루는 방식입니다.",
    context: "가면 페르소나와 즉흥극의 안전 장치입니다."
  },
  {
    term: "그림자",
    en: "Shadow",
    category: "theory",
    weeks: [7],
    meaning: "의식적으로 인정하기 어렵거나 억압된 성향, 욕구, 감정의 상징적 개념입니다.",
    context: "7주차 가면에 투사되는 숨겨진 내면 요소를 설명합니다."
  },
  {
    term: "잉여 현실",
    en: "Surplus Reality",
    category: "theory",
    weeks: [7],
    meaning: "일상 현실에서는 불가능하거나 표현하기 어려운 장면을 극적 상상 안에서 경험하는 현실입니다.",
    context: "7주차 즉흥극에서 솔직한 표현을 가능하게 합니다."
  },
  {
    term: "페르소나",
    en: "Persona",
    category: "theory",
    weeks: [7],
    meaning: "사회적 관계 속에서 드러나는 역할적 얼굴이나 가면을 뜻합니다.",
    context: "가면 제작 활동에서 일상 자아와 역할 자아를 구분할 때 사용됩니다."
  },
  {
    term: "De-roleing",
    en: "De-roleing",
    category: "technique",
    weeks: [7],
    meaning: "역할극이 끝난 뒤 맡았던 역할에서 벗어나 본래의 자기 상태로 돌아오는 절차입니다.",
    context: "7주차 가면 벗기 의례의 임상적 안전 단계입니다.",
    aliases: ["역할 벗기", "디롤링"]
  },
  {
    term: "Eco-Arts",
    en: "Eco-Arts",
    category: "theory",
    weeks: [8],
    meaning: "자연, 생태, 장소, 환경과 예술 표현을 연결하는 예술치료 및 예술 실천입니다.",
    context: "8주차 숲, 자연물, 대지미술 활동의 큰 틀입니다."
  },
  {
    term: "생태심리학",
    en: "Eco-psychology",
    category: "theory",
    weeks: [8],
    meaning: "인간의 심리와 자연 환경의 관계를 함께 이해하려는 심리학적 관점입니다.",
    context: "자연물이 내면 상처의 상징이 되는 이유를 설명합니다."
  },
  {
    term: "대지미술치료",
    en: "Land Art Therapy",
    category: "technique",
    weeks: [8],
    meaning: "흙, 돌, 낙엽, 가지 등 자연물을 배열하고 해체하며 정서와 상징을 다루는 접근입니다.",
    context: "8주차 자연 성소 만들기와 자연 회귀 의례에 사용됩니다."
  },
  {
    term: "Release",
    en: "Release",
    category: "technique",
    weeks: [8],
    meaning: "완성한 예술물이나 감정적 집착을 놓아 보내는 상징적 행위입니다.",
    context: "대지미술품을 자연으로 돌려보내는 8주차 종결 과정입니다.",
    aliases: ["해체", "놓아보내기"]
  },
  {
    term: "사진치료",
    en: "Photo Therapy",
    category: "technique",
    weeks: [9],
    meaning: "사진 촬영, 선택, 해석, 이야기 만들기를 통해 자기 이해와 정서 표현을 돕는 접근입니다.",
    context: "9주차 스마트폰 사진과 시각 프레임 활동의 배경입니다."
  },
  {
    term: "디지털 스토리텔링",
    en: "Digital Storytelling",
    category: "technique",
    weeks: [9],
    meaning: "사진, 영상, 음성, 음악을 결합해 개인적 이야기를 디지털 매체로 구성하는 방법입니다.",
    context: "9주차 1분 디지털 스토리 무비 제작 활동입니다."
  },
  {
    term: "Voice-over",
    en: "Voice-over",
    category: "technique",
    weeks: [9],
    meaning: "화면 위에 자신의 목소리 설명이나 내레이션을 덧입히는 표현 방식입니다.",
    context: "자전적 목소리를 통해 서사의 주도권을 회복하는 장치입니다.",
    aliases: ["보이스오버", "나레이션"]
  },
  {
    term: "서사 재구성",
    en: "Narrative Reconstruction",
    category: "technique",
    weeks: [9],
    meaning: "과거 경험의 의미와 흐름을 새롭게 엮어 자기 이야기를 다시 조직하는 과정입니다.",
    context: "사진과 목소리로 상처 이야기를 주체적으로 편집할 때 사용됩니다."
  },
  {
    term: "매체 간 전이",
    en: "Intermodal Transfer",
    category: "technique",
    weeks: [10],
    meaning: "한 예술 매체에서 생긴 감각, 이미지, 정서를 다른 매체로 옮겨 표현하는 과정입니다.",
    context: "10주차 동작, 미술, 음악의 3단 매체 순환 핵심 원리입니다.",
    aliases: ["Intermodal Loop", "상호매체 전이"]
  },
  {
    term: "창조적 블로킹",
    en: "Creative Blocking",
    category: "theory",
    weeks: [10],
    meaning: "창작 중 표현이 막히거나 사고가 굳어져 예술적 흐름이 멈추는 상태입니다.",
    context: "10주차에서 매체 전환이 필요한 순간을 설명합니다."
  },
  {
    term: "트라우마-정보 치료",
    en: "Trauma-Informed Therapy",
    category: "theory",
    weeks: [4, 11],
    meaning: "외상 경험이 몸, 정서, 관계에 남기는 영향을 고려해 안전과 조절을 우선하는 접근입니다.",
    context: "4주차와 11주차 안정화 활동의 기본 태도입니다."
  },
  {
    term: "다미주신경 이론",
    en: "Polyvagal Theory",
    category: "theory",
    weeks: [11],
    meaning: "자율신경계가 안전, 연결, 방어 반응을 어떻게 조절하는지 설명하는 이론입니다.",
    context: "11주차 안전 신호, 그라운딩, 신체 안정화의 배경입니다."
  },
  {
    term: "그라운딩",
    en: "Grounding",
    category: "technique",
    weeks: [11],
    meaning: "현재 몸과 환경 감각에 주의를 돌려 불안과 과각성을 낮추는 안정화 기법입니다.",
    context: "두 발바닥을 바닥에 눌러 안전감을 확인하는 활동입니다."
  },
  {
    term: "외재화",
    en: "Externalization",
    category: "technique",
    weeks: [4, 7, 11],
    meaning: "내면의 감정이나 문제를 몸 밖의 이미지, 물체, 역할, 작품으로 분리해 표현하는 과정입니다.",
    context: "바디 맵, 가면, 점토 상처 만들기에 공통으로 적용됩니다."
  },
  {
    term: "안전한 용기",
    en: "Safe Container",
    category: "technique",
    weeks: [11],
    meaning: "감당하기 어려운 감정이나 기억을 상징적으로 보관하는 심리적, 물리적 구조입니다.",
    context: "11주차 상처를 담는 보물상자 활동의 핵심 개념입니다."
  },
  {
    term: "Vagal Tone",
    en: "Vagal Tone",
    category: "theory",
    weeks: [11],
    meaning: "미주신경계가 신체 안정과 회복을 조절하는 기능적 상태를 가리키는 용어입니다.",
    context: "안전감이 신체 긴장과 맥박 조절에 영향을 준다는 설명에 사용됩니다.",
    aliases: ["미주신경 긴장도"]
  },
  {
    term: "모래놀이",
    en: "Sandplay",
    category: "technique",
    weeks: [12],
    meaning: "모래상자와 미니어처를 사용해 내면 세계와 관계 경험을 상징적으로 표현하는 기법입니다.",
    context: "12주차 아동 및 청소년 발달 프로그램의 핵심 활동입니다."
  },
  {
    term: "인형극",
    en: "Puppetry",
    category: "technique",
    weeks: [12],
    meaning: "인형이나 막대 인형을 통해 감정, 역할, 관계를 간접적으로 표현하는 극적 기법입니다.",
    context: "자기 노출 부담을 줄이고 소외 정서를 표현하게 돕습니다."
  },
  {
    term: "만다라",
    en: "Mandala",
    category: "modality",
    weeks: [12],
    meaning: "중심과 원형 구조를 가진 상징적 이미지로, 통합과 균형의 의미를 담을 수 있습니다.",
    context: "12주차 집단 색모래 만다라 활동에 사용됩니다."
  },
  {
    term: "개성화",
    en: "Individuation",
    category: "theory",
    weeks: [12],
    meaning: "무의식과 의식의 요소를 통합해 더 온전한 자기로 성장하는 과정을 뜻합니다.",
    context: "12주차 만다라와 아동의 상징 표현을 설명하는 배경입니다."
  },
  {
    term: "생애 회고",
    en: "Life Review",
    category: "technique",
    weeks: [13],
    meaning: "삶의 사건과 의미를 되돌아보며 자기 수용과 통합을 돕는 과정입니다.",
    context: "13주차 성인 및 노인 대상 회고 예술 활동의 중심입니다."
  },
  {
    term: "회상요법",
    en: "Reminiscence Therapy",
    category: "technique",
    weeks: [13],
    meaning: "과거 기억, 물건, 소리, 사진 등을 매개로 삶의 의미와 정서를 회복하는 접근입니다.",
    context: "골목길 사운드와 조각보 작업에 연결됩니다."
  },
  {
    term: "자아통합감",
    en: "Ego Integrity",
    category: "theory",
    weeks: [13],
    meaning: "자신의 삶을 전체로 받아들이고 의미 있게 수용하는 노년기 발달 과제입니다.",
    context: "13주차 생애 회고와 조각보 콜라주 효과를 설명합니다."
  },
  {
    term: "조각보 콜라주",
    en: "Textile Collage",
    category: "modality",
    weeks: [13],
    meaning: "천 조각, 실, 단추 등을 이어 붙여 삶의 기억과 상처를 상징적으로 구성하는 작업입니다.",
    context: "13주차 삶의 조각을 봉합하고 재해석하는 활동입니다."
  },
  {
    term: "공동체 예술치료",
    en: "Community Arts Therapy",
    category: "theory",
    weeks: [14],
    meaning: "개인의 치유를 관계, 지역사회, 집단의 연결 회복 속에서 다루는 예술치료 관점입니다.",
    context: "14주차 공동 벽화와 집단 동작 활동의 기반입니다."
  },
  {
    term: "커뮤니티 케어",
    en: "Community Care",
    category: "theory",
    weeks: [14],
    meaning: "개인을 고립된 존재가 아니라 공동체의 지지망 안에서 돌보는 접근입니다.",
    context: "공동 벽화가 사회적 고립감 감소와 연결되는 근거입니다."
  },
  {
    term: "공동 벽화",
    en: "Collaborative Mural",
    category: "technique",
    weeks: [14],
    meaning: "여러 사람이 하나의 큰 화면에 함께 그리며 관계와 소통을 시각화하는 작업입니다.",
    context: "14주차 비언어적 협동 드로잉 활동입니다."
  },
  {
    term: "예술기반연구",
    en: "Arts-Based Research",
    category: "research",
    weeks: [15],
    meaning: "예술 창작물, 이미지, 과정, 감각 자료를 연구의 자료와 방법으로 활용하는 질적 연구 접근입니다.",
    context: "15주차 자신의 창작 변화 과정을 분석하는 활동입니다.",
    aliases: ["ABR", "Art-Based Research"]
  },
  {
    term: "IEATA",
    en: "International Expressive Arts Therapy Association",
    category: "ethics",
    weeks: [15],
    meaning: "표현예술치료 분야와 관련된 국제 전문 단체로, 윤리와 전문성 논의에서 참조됩니다.",
    context: "15주차 임상 윤리 강령의 배경으로 제시됩니다.",
    aliases: ["미국표현예술치료학회"]
  },
  {
    term: "비밀 보장",
    en: "Confidentiality",
    category: "ethics",
    weeks: [15],
    meaning: "내담자가 드러낸 말, 작품, 기록, 개인정보를 허락 없이 공개하지 않는 윤리 원칙입니다.",
    context: "15주차 윤리 딜레마 사례의 핵심 기준입니다."
  },
  {
    term: "이중 관계",
    en: "Dual Relationship",
    category: "ethics",
    weeks: [15],
    meaning: "치료자와 내담자가 치료 관계 외의 사적, 업무적, 금전적 관계를 동시에 맺는 상황입니다.",
    context: "15주차 임상 경계와 윤리 판단에서 다룹니다."
  },
  {
    term: "작품 소유권",
    en: "Artwork Ownership",
    category: "ethics",
    weeks: [15],
    meaning: "치료 과정에서 만들어진 작품의 보관, 전시, 촬영, 연구 활용 권리와 책임을 뜻합니다.",
    context: "내담자 작품을 연구나 전시에 사용할 때 동의가 필요한 이유입니다."
  },
  {
    term: "치료적 종결",
    en: "Therapeutic Termination",
    category: "technique",
    weeks: [16],
    meaning: "치료 관계와 과정을 안전하게 마무리하며 성취, 상실, 독립을 통합하는 단계입니다.",
    context: "16주차 촛불 의례와 샌드아트 마무리의 핵심 주제입니다.",
    aliases: ["Termination"]
  },
  {
    term: "집단 응집력",
    en: "Group Cohesion",
    category: "theory",
    weeks: [16],
    meaning: "집단 구성원들이 서로 연결감, 소속감, 지지를 느끼는 정도입니다.",
    context: "16주차 종결 의례가 이별 불안과 집단 경험을 통합하는 근거입니다."
  },
  {
    term: "촛불 의례",
    en: "Candlelight Ritual",
    category: "technique",
    weeks: [16],
    meaning: "불을 켜고 끄는 상징 행위를 통해 시작, 기억, 감사, 작별을 표현하는 의례입니다.",
    context: "16주차 과정 종결과 현실 복귀를 돕는 활동입니다."
  },
  {
    term: "KCI 등재",
    en: "Korea Citation Index",
    category: "research",
    weeks: [1, 16],
    meaning: "국내 학술지 평가 및 인용 색인 체계에 등재된 학술지를 가리키는 표현입니다.",
    context: "각 주차의 국내 연구 근거 수준을 표시할 때 사용됩니다.",
    aliases: ["KCI"]
  },
  {
    term: "SCI급",
    en: "Science Citation Index Level",
    category: "research",
    weeks: [1, 16],
    meaning: "국제 학술 인용 색인에 준하는 연구 근거를 나타내기 위해 쓰인 표현입니다.",
    context: "해외 연구 문헌의 학술적 근거성을 표시합니다.",
    aliases: ["SCI"]
  },
  {
    term: "A&HCI급",
    en: "Arts and Humanities Citation Index Level",
    category: "research",
    weeks: [3, 14],
    meaning: "예술 및 인문 분야 국제 인용 색인 수준의 학술 근거를 뜻하는 표현입니다.",
    context: "점토 작업, 예술치료와 사회적 행동 문헌의 근거 수준 표기에 사용됩니다.",
    aliases: ["A&HCI"]
  },
  {
    term: "젬베",
    en: "Djembe",
    category: "modality",
    weeks: [1, 6, 14],
    meaning: "손으로 연주하는 서아프리카 계열 타악기로, 강한 리듬과 집단 동조에 활용됩니다.",
    context: "도입, 안정화, 집단 피날레 활동에서 리듬 기반 매체로 쓰입니다.",
    aliases: ["젬베", "djembe"]
  },
  {
    term: "레인스틱",
    en: "Rain Stick",
    category: "modality",
    weeks: [1],
    meaning: "빗소리처럼 들리는 긴 관 형태의 악기로, 이완과 감각 환기에 쓰입니다.",
    context: "1주차 자연 소리 드로잉 활동에 사용됩니다."
  },
  {
    term: "소리굽쇠",
    en: "Tuning Fork",
    category: "modality",
    weeks: [4],
    meaning: "특정 진동음을 내는 도구로, 청각과 신체 진동 감각을 깨우는 데 활용됩니다.",
    context: "4주차 바디 스캔과 신체 이완 활동에 쓰입니다."
  },
  {
    term: "오션드럼",
    en: "Ocean Drum",
    category: "modality",
    weeks: [4],
    meaning: "파도 소리와 유사한 음향을 내는 타악기로, 이완과 심상 유도에 쓰입니다.",
    context: "4주차 소리 파동과 신체 스캔의 배경음으로 제시됩니다."
  },
  {
    term: "붐웨커",
    en: "Boomwhacker",
    category: "modality",
    weeks: [6],
    meaning: "길이별 음높이가 다른 플라스틱 타악기로, 쉽고 즉흥적인 집단 연주에 사용됩니다.",
    context: "6주차 음악과 신체 동작의 리듬 전환 활동에 쓰입니다."
  },
  {
    term: "글로켄슈필",
    en: "Glockenspiel",
    category: "modality",
    weeks: [6],
    meaning: "금속 건반을 두드려 맑은 음을 내는 타악기입니다.",
    context: "6주차 즉흥 음악 활동의 음색 매체로 제시됩니다."
  },
  {
    term: "샌드아트 라이트박스",
    en: "Sand Art Light Box",
    category: "modality",
    weeks: [16],
    meaning: "빛이 나는 판 위에 모래를 움직여 이미지를 만드는 시각 표현 도구입니다.",
    context: "16주차 감사와 종결 심상을 남기는 활동에 사용됩니다."
  }
];

let activeCategory = "all";
let searchTerm = "";

const glossaryGrid = document.getElementById("glossaryGrid");
const glossaryFilters = document.getElementById("glossaryFilters");
const glossarySearch = document.getElementById("glossarySearch");
const glossaryStats = document.getElementById("glossaryStats");
const printGlossaryBtn = document.getElementById("printGlossaryBtn");

document.addEventListener("DOMContentLoaded", () => {
  if (!glossaryGrid || !glossaryFilters || !glossarySearch || !glossaryStats) return;

  renderFilters();
  renderGlossary();
  glossarySearch.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim().toLowerCase();
    renderGlossary();
  });

  if (printGlossaryBtn) {
    printGlossaryBtn.addEventListener("click", printGlossary);
  }
});

window.addEventListener("afterprint", () => {
  document.body.classList.remove("printing-glossary");
});

function renderFilters() {
  glossaryFilters.innerHTML = Object.entries(categoryLabels)
    .map(([key, label]) => `
      <button
        class="glossary-filter ${key === activeCategory ? "active" : ""}"
        type="button"
        data-category="${key}"
      >
        ${label}
      </button>
    `)
    .join("");

  glossaryFilters.querySelectorAll(".glossary-filter").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderFilters();
      renderGlossary();
    });
  });
}

function renderGlossary() {
  const filteredEntries = glossaryEntries.filter((entry) => {
    const matchesCategory = activeCategory === "all" || entry.category === activeCategory;
    const searchableText = [
      entry.term,
      entry.en,
      entry.meaning,
      entry.context,
      categoryLabels[entry.category],
      ...(entry.aliases || []),
      ...(entry.weeks || []).map((week) => `${week}주차`)
    ].filter(Boolean).join(" ").toLowerCase();

    return matchesCategory && (!searchTerm || searchableText.includes(searchTerm));
  });

  glossaryStats.textContent =
    `총 ${glossaryEntries.length}개 용어 중 ${filteredEntries.length}개 표시`;

  if (filteredEntries.length === 0) {
    glossaryGrid.innerHTML = `
      <div class="glossary-empty">
        검색 조건에 맞는 용어가 없습니다.
      </div>
    `;
    return;
  }

  glossaryGrid.innerHTML = filteredEntries
    .map((entry) => `
      <article class="glossary-card">
        <div class="glossary-card-top">
          <span class="glossary-category">${categoryLabels[entry.category]}</span>
          <span class="glossary-weeks">${formatWeeks(entry.weeks)}</span>
        </div>
        <h2>${escapeHtml(entry.term)}</h2>
        ${entry.en ? `<p class="glossary-en">${escapeHtml(entry.en)}</p>` : ""}
        <dl>
          <div>
            <dt>사전적 의미</dt>
            <dd>${escapeHtml(entry.meaning)}</dd>
          </div>
          <div>
            <dt>프로그램 맥락</dt>
            <dd>${escapeHtml(entry.context)}</dd>
          </div>
        </dl>
      </article>
    `)
    .join("");
}

function printGlossary() {
  activeCategory = "all";
  searchTerm = "";
  glossarySearch.value = "";
  renderFilters();
  renderGlossary();
  document.body.classList.add("printing-glossary");
  window.print();
}

function formatWeeks(weeks = []) {
  if (!weeks.length) return "공통";
  if (weeks.length > 3) return `${weeks[0]}-${weeks[weeks.length - 1]}주차`;
  return weeks.map((week) => `${week}주차`).join(", ");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
