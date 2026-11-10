const issuesC = [
{
        id: "2026-10-06", issue: "05", day: "화", date: "2026.10.06", title: "CSS는 가벼워지고, 표현은 더 정교해진다.", note: "이전 회차와 중복 제외",
        summary: [
          "CSS 네이티브 기능이 무거운 자바스크립트 라이브러리를 대체하기 시작했다.",
          "지속가능한 웹은 환경 구호를 넘어 속도와 전환을 함께 잡는 비용 논리로 정착했다.",
          "AI 시대의 설계 영역은 결과 자체에서 결과를 보여주는 방식까지 넓어졌다.",
          "서리얼 비주얼과 마이크로 인터랙션은 목적에 맞게 제한적으로 써야 한다."
        ],
        trends: [
          { title: "CSS가 JS 라이브러리를 먹는다", body: ["CSS 앵커 포지셔닝, Popover API, 스크롤 드리븐 애니메이션, 뷰 트랜지션, 커스터마이즈 가능한 셀렉트가 네이티브로 들어오고 있다. 흔히 쓰던 UI 라이브러리 상당 부분을 브라우저 기능으로 대체할 수 있다는 실측 정리도 나왔다.", "모션은 개발자가 나중에 붙이는 장식이 아니라 CSS 선언으로 설계하는 영역으로 이동 중이다. Safari 지원 차이는 점진적 향상과 단순 폴백으로 다루는 접근이 필요하다."], analysis: "Aperte 랜딩의 스크롤 리빌·프로그레스 바·섹션 전환은 네이티브 CSS를 우선 검토. reduced-motion 사용자에게는 애니메이션 대신 즉시 전환을 제공.", links: ["https://github.com/gmotyl/motyl-dev/blob/HEAD/news/2026/2026-03-25-css-eating-javascript-great-platform-expansion-2026.md", "https://github.com/aboudjem/ui-ux-suite/blob/HEAD/knowledge/trends-2026.md"] },
          { title: "지속가능한 웹이 비용 논리로 정착한다", body: ["저탄소 웹디자인이 윤리 구호를 넘어 비즈니스 케이스로 정착했다. 이미지 재인코딩만으로 페이지 무게와 로딩 시간, 방문당 탄소를 함께 줄인 사례가 소개됐다.", "핵심은 지속가능성과 성능이 같은 작업이라는 점이다. 가벼운 페이지는 에너지 소비를 줄이고 사용자 경험을 개선한다."], analysis: "히어로 영상 자동재생 금지, 이미지 최적화와 지연 로딩, 추적 스크립트 최소화를 성능 예산으로 명시. ‘열리는 화면’의 기술적 근거를 속도로 증명.", links: ["https://www.acscreative.com/insights/what-low-carbon-web-design-means-for-sustainable-businesses-in-2026/", "https://whatifdesign.co/feeds/blog/2026-landing-page-design-trends-b2b-services"] },
          { title: "AI 결과의 표현 방식이 설계 영역이 됐다", body: ["AI 서비스의 경쟁은 무엇을 내놓느냐에서 결과를 어떻게 보여주느냐로 이동하고 있다. 텍스트만으로 설명하기 어려운 정보를 다루며 결과 표현과 피드백 방식이 핵심 설계 영역이 됐다.", "스트리밍 텍스트, 스켈레톤 로딩, 신뢰도 표시 같은 패턴도 일반 웹사이트의 표현 어휘로 확산 중이다."], analysis: "작업 사례를 텍스트 나열보다 전후 비교·숫자 카드·단계별 전개로 제시. 결과 표현의 품질 자체가 포트폴리오가 되도록 설계.", links: ["https://v.daum.net/v/20251217110749436", "https://github.com/aboudjem/ui-ux-suite/blob/HEAD/knowledge/trends-2026.md"] },
          { title: "서리얼 비주얼의 부상", body: ["AI가 만드는 매끈한 이미지에 대한 반작용으로 왜곡, 초현실, 장난스러운 부조리가 부상하고 있다. 평면 디자인보다 감정적 연결을 만드는 인터랙티브 비주얼이 주목받는 흐름이다."], analysis: "Aperte는 서리얼 비주얼을 그대로 채택하지 않음. 정돈된 레이아웃 안에 예상 밖의 반응 한 점만 두어 기억을 남기는 방식으로 원리만 차용.", links: ["https://www.accio.com/business/2026-web-design-trends"] },
          { title: "마이크로 인터랙션이 정교해진다", body: ["버튼·클릭·스크롤에 반응하는 작은 애니메이션이 더 세밀해졌다. 핵심은 장식이 아니라 사용자가 어디를 누르고, 무슨 일이 일어나며, 어디를 봐야 하는지 안내하는 데 있다.", "페이지 전체의 이야기를 끄는 모션 내러티브와 달리 마이크로 인터랙션은 UI 요소 단위의 기능적 응답이다."], analysis: "CTA·내비게이션·카드에 150–250ms 범위의 짧은 응답을 적용. 키보드 포커스에도 같은 수준의 정교함을 유지.", links: ["https://www.nairobiminibloggers.com/2026-great-web-design-trend-to-look-out/", "https://medium.com/@azagency.design/web-design-trends-2026-how-ai-is-reshaping-interfaces-c115eb88eb05"] }
        ],
        sources: ["https://github.com/gmotyl/motyl-dev/blob/HEAD/news/2026/2026-03-25-css-eating-javascript-great-platform-expansion-2026.md", "https://github.com/aboudjem/ui-ux-suite/blob/HEAD/knowledge/trends-2026.md", "https://www.acscreative.com/insights/what-low-carbon-web-design-means-for-sustainable-businesses-in-2026/", "https://whatifdesign.co/feeds/blog/2026-landing-page-design-trends-b2b-services", "https://v.daum.net/v/20251217110749436", "https://www.accio.com/business/2026-web-design-trends", "https://www.nairobiminibloggers.com/2026-great-web-design-trend-to-look-out/", "https://medium.com/@azagency.design/web-design-trends-2026-how-ai-is-reshaping-interfaces-c115eb88eb05", "https://www.awwwards.com/websites/sites_of_the_day/"]
      },
{
        id: "2026-10-05", issue: "04", day: "월", date: "2026.10.05", title: "조립식 구조와 증거가 설득을 만든다.", note: "이전 회차와 중복 제외",
        summary: [
          "모듈러 컴포넌트 중심 설계가 유지보수와 확장의 기본 조건이 됐다.",
          "설득의 단위는 섹션이 아니라 결과·숫자·신뢰 신호 같은 증거로 이동했다.",
          "AI 서비스의 인터페이스는 채팅으로 수렴하고 있다.",
          "Awwwards 10월 5일 수상작도 디자인상과 개발자상을 함께 받았다."
        ],
        trends: [
          { title: "조립식 레이아웃이 표준이 된다", body: ["히어로·신뢰 바·서비스 카드·FAQ·비교표 같은 모듈을 조립해 페이지를 만드는 방식이 중소형 사이트까지 표준이 됐다. 콘텐츠 업데이트가 잦은 사이트일수록 유지보수성과 확장성이 중요하다.", "부품이 늘어나도 브랜드가 흐트러지지 않으려면 색·타입·간격 토큰 관리가 먼저다."], analysis: "히어로·작업·프로세스·피날레를 독립 컴포넌트로 설계. Plum Ink와 IBM Plex Sans 토큰을 먼저 고정한 뒤 변형을 조립.", links: ["https://bippermedia.com/answers/what-are-the-latest-web-design-trends-for-2026/", "https://martechseries.com/predictive-ai/ai-platforms-machine-learning/lounge-lizard-unveils-the-future-of-digital-experiences-2026-web-design-trends/"] },
          { title: "설득의 단위는 섹션이 아니라 증거다", body: ["상세페이지의 설득 구조가 결과 → 증거 → 설명 순으로 이동하고 있다. 소비자는 페이지를 읽기보다 스캔하므로 결과, 숫자, 리뷰와 사례를 먼저 보여주는 편이 강하다.", "메시지 수 줄이기와 각 메시지에 근거 붙이기는 한 세트다."], analysis: "Work 섹션을 소개문보다 ‘무엇이 열렸는가’의 결과 중심으로 재구성. 슬로건 뒤 첫 문장이 증거가 되도록 배치.", links: ["https://blog.naver.com/hothaan/224203643233", "https://bippermedia.com/answers/what-are-the-latest-web-design-trends-for-2026/"] },
          { title: "인터페이스가 채팅으로 수렴한다", body: ["글로벌 AI 서비스는 ‘채팅으로 모든 것을 할 수 있다’는 기대를 만들고 있다. 사용자가 익숙한 서비스의 UI가 다른 서비스의 기대치까지 끌어올리는 흐름이다.", "정적 페이지는 질문과 답이 오가는 듯한 짧고 직접적인 정보 구조로 이 기대에 대응할 수 있다."], analysis: "챗봇 추가가 아니라 견적·일정·범위에 바로 답하는 짧은 FAQ와 가이드 동선을 설계. 브랜드 동사 ‘열다/열리다’를 인터랙션 카피에 연결.", links: ["https://v.daum.net/v/20251217110749436"] },
          { title: "실용적 3D가 앞으로 나온다", body: ["WebGL·WebGPU가 가벼워지면서 3D는 제품 프리뷰, 회전 로고, 입체 배경 같은 작은 단위로 일반화되고 있다. 전면 3D 사이트보다 평면 안의 목적 있는 한 점이 핵심이다.", "용도가 불분명한 3D는 장식이 되고 성능 부담을 만든다."], analysis: "전면 3D는 채택하지 않음. 로고 심볼이나 히어로 한 요소에서만 검토하고 모바일 로딩 시간을 먼저 실측.", links: ["https://martechseries.com/predictive-ai/ai-platforms-machine-learning/lounge-lizard-unveils-the-future-of-digital-experiences-2026-web-design-trends/", "https://www.accio.com/business/2026-web-design-trends"] },
          { title: "Awwwards 10/5 — Santioni Spirits", body: ["10월 5일 최신 수상작 Santioni Spirits는 SOTD와 Developer Award를 함께 받았다. 9월 28일부터 이어진 동시 수상 흐름이 계속되며 디자인과 구현 품질이 함께 평가되는 기준을 다시 확인했다."], analysis: "목업 단계부터 스크롤 물리·반응형·성능을 디자인 기준에 포함. 완성 화면과 구현 품질을 분리하지 않음.", links: ["https://www.awwwards.com/websites/sites_of_the_day/"] }
        ],
        sources: ["https://bippermedia.com/answers/what-are-the-latest-web-design-trends-for-2026/", "https://martechseries.com/predictive-ai/ai-platforms-machine-learning/lounge-lizard-unveils-the-future-of-digital-experiences-2026-web-design-trends/", "https://medium.com/@vistasadindia.com/web-design-trends-in-2026-future-ready-design-insights-7142ef86ae96", "https://blog.naver.com/hothaan/224203643233", "https://v.daum.net/v/20251217110749436", "https://www.accio.com/business/2026-web-design-trends", "https://www.nairobiminibloggers.com/2026-great-web-design-trend-to-look-out/", "https://www.awwwards.com/websites/sites_of_the_day/"]
      },
{
        id: "2026-10-04", issue: "03", day: "일", date: "2026.10.04", title: "문장과 타이포가 화면의 중심에 선다.", note: "10/3 회차와 중복 제외",
        summary: [
          "히어로의 중심은 이미지보다 잘 쓴 한 문장으로 이동했다.",
          "브루탈 미니멀리즘과 에디토리얼 타이포가 제한된 팔레트 안에서 긴장을 만든다.",
          "작은 룰 라인과 미세한 보더 같은 편집 디자인의 장식이 돌아왔다.",
          "접근성과 구현 품질은 고급스러움을 판가름하는 기준이 됐다."
        ],
        trends: [
          { title: "히어로는 문장이다", body: ["큰 이미지가 화면 절반을 차지하던 구조에서 벗어나, 잘 쓴 한 문장을 적정 크기로 배치하는 히어로가 자신감 있는 웹디자인의 서명처럼 쓰이고 있다. 이미지보다 브랜드가 전하는 말을 전면에 두는 변화다."], analysis: "Aperte의 히어로는 공식 슬로건 ‘열리는 생각, 열리는 화면.’을 중심에 유지. 설명 없는 장식 이미지는 추가하지 않음.", links: ["https://github.com/moibftj/gnz-enterprises/blob/HEAD/blog/posts/2026-04-18-web-design-trends-2026.md"] },
          { title: "브루탈 미니멀리즘과 에디토리얼 타이포", body: ["거대 타이포, 날것의 레이아웃, 강한 대비, 의도적인 여백을 2–3색의 제한된 팔레트로 다루는 에디토리얼 스타일이 강해지고 있다. 타이포가 시각적 무게를 담당하며 스톡 사진 의존을 줄인다."], analysis: "Plum Ink·Violet·Paper·White의 제한된 팔레트와 타이포 중심 구조를 유지. 색을 더하기보다 크기·간격·리듬으로 차이를 만듦.", links: ["https://medium.com/@dreameffectsmultimedia/fhcfgh-7d5c2ab10d87"] },
          { title: "장식의 조용한 귀환", body: ["플랫 디자인의 긴 흐름 뒤에 룰 라인, 작은 이탤릭, 개성 있는 미세한 라운드 같은 장식이 돌아왔다. 현실을 모사하는 스큐어모피즘보다 잡지와 편집 디자인의 세부에 가깝다."], analysis: "1px 룰 라인과 이슈 번호 같은 편집 요소를 유지. 장식은 정보 계층을 구분하는 역할 안에서만 강화.", links: ["https://github.com/moibftj/gnz-enterprises/blob/HEAD/blog/posts/2026-04-18-web-design-trends-2026.md"] },
          { title: "접근성이 곧 고급스러움", body: ["명확한 대비, 뚜렷한 포커스 링, 넉넉한 탭 타겟, 키보드 내비게이션이 완성도 높은 화면의 시각 언어가 되고 있다. 접근성은 별도 점검표가 아니라 디자인 품질 그 자체다."], analysis: "CTA와 내비게이션의 포커스 상태를 시각 요소로 명시. 모바일 탭 영역과 텍스트 대비를 디자인 단계에서 함께 검수.", links: ["https://github.com/moibftj/gnz-enterprises/blob/HEAD/blog/posts/2026-04-18-web-design-trends-2026.md"] },
          { title: "Awwwards 10월 둘째 주 신규 수상작", body: ["10월 4일 EDOLUS, 10월 3일 Tengile Malamala Collection이 SOTD와 Developer Award를 동시에 받았다. 디자인과 개발 품질이 함께 평가되는 흐름이 이어졌다."], analysis: "목업 단계부터 반응형·성능·스크롤 동작을 설계 기준으로 삼고, 구현 난이도를 나중 문제로 미루지 않음.", links: ["https://www.awwwards.com/websites/sites_of_the_day/"] }
        ],
        sources: ["https://github.com/moibftj/gnz-enterprises/blob/HEAD/blog/posts/2026-04-18-web-design-trends-2026.md", "https://medium.com/@dreameffectsmultimedia/fhcfgh-7d5c2ab10d87", "https://www.awwwards.com/websites/sites_of_the_day/", "https://medium.com/@digitalprana33/10-web-design-trends-that-will-dominate-2026-with-real-examples-0fca36d4e8ad", "https://www.awwwards.com/blog/?tag=sites-of-the-month"]
      },
{
        id: "2026-10-03", issue: "02", day: "토", date: "2026.10.03", title: "모션은 장식에서 서사로 이동한다.", note: "10/2 회차와 중복 제외",
        summary: [
          "스크롤·커서·호버에 반응하는 가변 타이포가 스토리텔링 도구로 자리 잡았다.",
          "AI가 만든 듯한 평탄함에 맞서 질감과 날것의 대비가 휴먼 크래프트의 증거가 된다.",
          "모션은 장식이 아니라 안내·확인·서술을 맡는 구조가 됐다.",
          "수상작과 새 요금제 모델 모두 디자인 결과와 구현·성과를 함께 묻는다."
        ],
        trends: [
          { title: "키네틱 타이포가 기본값이 된다", body: ["스크롤·커서·호버에 따라 굵기와 너비가 바뀌는 가변 폰트가 스토리텔링 도구로 쓰이고 있다. 여러 정적 웨이트를 하나의 파일로 합쳐 표현과 성능을 함께 다루는 접근이다."], analysis: "히어로 슬로건에 제한적인 weight 변화를 적용해 ‘열리는’ 의미를 타이포로 증명. 읽기를 방해하는 과도한 움직임은 제외.", links: ["https://www.awwwards.com/blog/?tag=sites-of-the-month&text=Sites%20of%20the%20day&page=8", "https://www.sayenkodesign.com/web-design-trends-2026/"] },
          { title: "AI 티를 벗기는 휴먼 크래프트", body: ["AI가 만든 듯한 평탄함을 거부하며 필름 그레인, 노이즈 텍스처, 날것의 오버사이즈 타이포, 모노크롬 대비가 사람이 만든 흔적처럼 쓰인다. 중요한 것은 무작위가 아니라 계산된 질감이다."], analysis: "손그림 대신 미세한 노이즈나 모노스페이스 인덱스로 질감을 더해 단정한 브랜드 구조를 유지.", links: ["https://github.com/delphinelil09-sys/universal-design/blob/HEAD/design-core/references/trends-2026-Q3.md", "https://www.awwwards.com/websites/sites_of_the_day/"] },
          { title: "모션 내러티브 — 모션은 서사여야 한다", body: ["스크롤 기반 애니메이션, 레이어 깊이, 키네틱 타이포는 모두 페이지의 이야기를 전달할 때 의미가 있다. 모션의 역할은 안내하고, 확인하고, 서술하는 데 있다."], analysis: "Procedure의 스티키 스태킹처럼 흐름을 설명하는 모션은 유지. 목적을 설명할 수 없는 모션은 추가하지 않음.", links: ["https://github.com/delphinelil09-sys/universal-design/blob/HEAD/design-core/references/trends-2026-Q3.md"] },
          { title: "Awwwards 10월 첫째 주 SOTD", body: ["10월 2일 Milledollars부터 9월 28일 Butter까지 소개된 수상작 모두가 SOTD와 Developer Award를 함께 받았다. 디자인과 구현 품질을 분리하기 어려워진 흐름을 보여준다."], analysis: "목업부터 스크롤 물리·반응형·성능을 디자인 기준으로 포함. 구현할 수 없는 장면을 완성 화면처럼 제안하지 않음.", links: ["https://www.awwwards.com/websites/sites_of_the_day/"] },
          { title: "성과연동 요금제 모델의 등장", body: ["영국 스튜디오 AwardOrFree는 국제 디자인상 수상 여부와 요금을 연결한 모델로 출범했다. 시간당 과금과 결과물 품질이 분리된 관행에 문제를 제기한 사례다."], analysis: "2027년 가격 체계를 설계할 때 결과물 기준 요금 구조를 검토 항목에 포함하되, 평가 기준과 리스크를 먼저 정의.", links: ["https://3dprinting.einnews.com/pr_news/946527763/british-web-design-studio-awardorfree-launches-with-a-zero-cost-guarantee-backed-by-double-international-awards"] }
        ],
        sources: ["https://www.awwwards.com/blog/?tag=sites-of-the-month&text=Sites%20of%20the%20day&page=8", "https://www.sayenkodesign.com/web-design-trends-2026/", "https://github.com/delphinelil09-sys/universal-design/blob/HEAD/design-core/references/trends-2026-Q3.md", "https://www.awwwards.com/websites/sites_of_the_day/", "https://3dprinting.einnews.com/pr_news/946527763/british-web-design-studio-awardorfree-launches-with-a-zero-cost-guarantee-backed-by-double-international-awards", "https://dribbble.com/resources/agencies/ultimate-dribbble-select-best-shots", "https://github.com/eskapeum/design-forge/blob/HEAD/references/awwwards-2026.md", "https://github.com/alanvaa06/award-craft/blob/HEAD/skills/direction/references/trends.md"]
      },
{
        id: "2026-10-02", issue: "01", day: "금", date: "2026.10.02", title: "AI와 기준선이 웹의 구조를 바꾼다.", note: "첫 번째 리서치",
        summary: [
          "에이전틱 AI와 초개인화가 정적 화면을 적응형 인터페이스로 바꾼다.",
          "사람과 AI가 함께 읽는 시맨틱 구조가 새로운 발견 가능성을 만든다.",
          "표현적 미니멀리즘과 브루탈리즘의 긴장이 2026년 미학을 이끈다.",
          "접근성·성능·다크 모드는 선택이 아니라 기준선으로 이동했다."
        ],
        trends: [
          { title: "에이전틱 AI 경험이 화면의 기본값이 된다", body: ["정적인 레이아웃에서 사용자 행동을 학습해 터치포인트마다 바꾸는 적응형 인터페이스로 이동하고 있다. 예측 추천, 실시간 레이아웃 조정, 자동 콘텐츠 개인화가 주요 수단으로 자리 잡았다."], analysis: "AI가 무엇을 대신하는지 화면 구조에 명시. 추천·요약·자동완성을 별도 장식이 아니라 자연스러운 정보 흐름으로 통합.", links: ["https://blog.templately.com/elementor-web-design-trends/"] },
          { title: "AI 검색을 위한 설계", body: ["AI 엔진이 파싱할 수 없는 사이트는 새 발견 채널에서 인용되기 어렵다. 시맨틱 헤딩, 라벨이 붙은 입력, alt 텍스트, 깨끗한 구조는 접근성과 AI 가독성을 동시에 높인다."], analysis: "SEO 이후를 ‘AI에게 인용되는 화면’으로 정의. 사람과 모델이 같은 정보 구조를 읽도록 시맨틱 마크업을 우선.", links: ["https://colorlib.com/wp/web-design-statistics/"] },
          { title: "표현적 미니멀리즘 × 브루탈리즘", body: ["넉넉한 여백과 절제된 팔레트에 노출된 구조, 두꺼운 보더, 모노스페이스 악센트, 의도적 비대칭을 섞는 방식이 강해지고 있다. 한쪽에 완전히 치우치면 미학을 위해 사용성을 희생하기 쉽다."], analysis: "정제된 기본 구조 안에 데이터 표나 인덱스 같은 날것의 요소를 제한적으로 배치. 전환 경로는 부드럽고 명확하게 유지.", links: ["https://github.com/alibakhtiari/webabc-ir/blob/HEAD/src/content/blog/en/web-design-trends.mdx"] },
          { title: "접근성·성능은 기준선이다", body: ["접근성 실패와 느린 모바일 경험은 법적·상업적 리스크가 됐다. WCAG 대비, 구조, 포커스 상태와 Core Web Vitals를 함께 다루는 작업이 디자인 시스템의 기본으로 이동했다."], analysis: "빠르게 열리는 화면을 브랜드 표현이 아니라 검수 기준으로 전환. 디자인 토큰과 CSS-first 시스템에서 대비·포커스·모션 감소를 함께 관리.", links: ["https://colorlib.com/wp/web-design-statistics/"] },
          { title: "다크 모드 기본화와 레트로 리바이벌", body: ["다크 모드는 옵션에서 기본 설정으로 이동하고 있다. 미학적으로는 네이처, 레트로, 뮤지엄코어, 80년대 과잉 같은 노스탤지어가 디지털 화면에 물성을 더한다."], analysis: "시스템 설정을 따르는 다크 모드를 기본 품질로 제공. 레트로 요소는 브랜드를 흐리지 않는 작은 편집 디테일로만 사용.", links: ["https://www.wix.com/blog/web-design-trends"] }
        ],
        sources: ["https://blog.templately.com/elementor-web-design-trends/", "https://www.wix.com/blog/web-design-trends", "https://colorlib.com/wp/web-design-statistics/", "https://github.com/alibakhtiari/webabc-ir/blob/HEAD/src/content/blog/en/web-design-trends.mdx", "https://www.accio.com/business/2026-web-design-trends"]
      }
];
