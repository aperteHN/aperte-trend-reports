const issuesC = [
{
        id: "2026-10-08", issue: "07", day: "목", date: "2026.10.08", title: "기록의 구조와 UI 기본기가 차이를 만든다.", note: "10/2~10/7 회차와 중복 제외",
        summary: [
          "구조화된 기록을 미학으로 바꾸는 Archival Index가 2026년 미니멀리스트의 안식처다. 그리드·라벨·주석이 곧 브랜드가 된다.",
          "글래스모피즘이 ‘calm futurism’으로 복귀했다. Aperte는 제한 팔레트를 지키며 모달·오버레이에만 검토한다.",
          "Creative Process는 제작 여정 자체를 보여준다. 인스타그램 콘텐츠 방향과 직결되는 흐름이다.",
          "AI 도구가 시각 생산을 가속하자 Fitts·Hick·Gestalt·점진적 공개 같은 UI 기본기가 다시 차별점이 됐다.",
          "10/8 SOTD는 Odyssée다. 10/1~10/8 SOTD는 8일 연속 Developer Award를 함께 받았다."
        ],
        trends: [
          { title: "Archival Index: 기록이 곧 미학", body: ["구조화된 데이터를 비주얼 스토리텔링으로 바꾸는 접근이다. 그리드·라벨·주석으로 정보를 수집하고 보관하며, 레이아웃은 도서관과 갤러리의 성격을 함께 띤다.", "10/7 회차의 벤토 그리드가 한 화면의 정보 제시 패턴이라면 Archival Index는 축적된 기록을 보여주는 방식이다. 날짜·번호·분류 같은 메타데이터를 숨기지 않고 구조 자체를 장식으로 쓴다."], analysis: "트렌드 리포트 아카이브의 날짜·회차·캘린더 체계를 이어가고, 랜딩 프로세스 섹션에는 기간 표기와 작은 주석 체계를 검토. 인스타그램 작업 아카이브는 ‘보관함’ 형식의 콘텐츠 포맷으로 확장.", links: ["https://pros.squarespace.com/blog/design-trends"] },
          { title: "글래스모피즘: calm futurism으로 복귀", body: ["투명하고 레이어드된 깊이에 광택 질감을 더하는 글래스모피즘이 AI 시대의 시각적 프레임워크로 다시 소개되고 있다. 단순한 유행의 부활보다 반복적으로 진화하는 비주얼 아이덴티티의 재료에 가깝다.", "Aperte는 Plum Ink·Violet·Paper·White의 제한 팔레트를 유지한다. 네온 그러데이션 위 유리 카드 같은 전형적 표현은 제외하고, 투명 레이어의 깊이만 제한적으로 다룬다."], analysis: "채택 범위를 모달·오버레이로 한정. 배경은 기존 Plum Ink를 유지하고 모달 표면에만 미세한 투명 깊이와 1px 룰 라인을 적용. 390px 렌더에서 명도 대비를 먼저 검증.", links: ["https://pros.squarespace.com/blog/design-trends"] },
          { title: "Creative Process: 과정을 보여주는 것", body: ["손으로 그린 마크, 스캔한 질감, 콜라주식 레이어링으로 디지털 광택을 거부하고 제작 과정과 불완전성을 드러내는 흐름이다. 완성품이 매끈해질수록 어떻게 만들어졌는가를 보여주는 것이 신뢰가 된다.", "10/3 회차의 휴먼 크래프트가 완성 화면 안에 사람의 흔적을 남기는 기법이라면, Creative Process는 스케치와 작업 중 장면 같은 제작 여정 자체를 콘텐츠로 삼는다."], analysis: "웹사이트보다 인스타그램 방향으로 검토. 스케치에서 화면으로 열리는 과정을 3~4컷 캐러셀로 구성하고, 웹사이트에는 반전 카피 한 줄처럼 작은 흔적만 남김.", links: ["https://pros.squarespace.com/blog/design-trends"] },
          { title: "UI 원칙의 회귀: AI 시대의 기본기", body: ["AI 도구가 시각 생산을 빠르게 만들면서 차별점은 예쁜 화면보다 얼마나 잘 소통하고 행동을 이끄는가로 이동했다. 시각 위계, Fitts의 법칙, Hick의 법칙, 게슈탈트, 점진적 공개가 다시 핵심 기준으로 거론된다.", "10/7의 조용한 UI가 소음을 줄이는 패턴이라면, 이번 흐름은 그 아래의 판단 기준이다. 덜 만드는 것이 아니라 덜 헷갈리게 만드는 원칙을 검수 기준으로 명문화한다."], analysis: "랜딩 검수 기준에 핵심 원칙을 추가. 가장 중요한 CTA의 위계, 44px 터치 타깃, 선택지 수, 요소 간 관계를 모바일 390px 기준으로 확인.", links: ["https://chapters-agency.com/blog/web-app-development/web-design-trends-2026/"] },
          { title: "Awwwards 10/8 SOTD: Odyssée", body: ["10월 8일 SOTD는 Odyssée다. 10월 7일 수상작 twks와 함께 Developer Award를 받았다. 10월 1일부터 8일까지 SOTD가 8일 연속 Developer Award를 함께 받았다.", "twks는 물질감 있는 유기체 매크로 이미지를, Odyssée는 회색조 물방울 매크로 사진과 최소 카피를 히어로에 썼다. Aperte의 문장 중심 히어로와 선택은 다르지만 한 화면에 한 가지를 집중시키는 원칙은 같다."], analysis: "구현 품질을 디자인 기준으로 삼는 원칙을 유지. 스크롤 물리·반응형·성능을 task 17 랜딩 검수에 계속 적용하고, task 16 종료 후에는 가벼운 주간 확인 루틴을 검토.", links: ["https://www.awwwards.com/websites/sites_of_the_day/"] }
        ],
        sources: ["https://pros.squarespace.com/blog/design-trends", "https://chapters-agency.com/blog/web-app-development/web-design-trends-2026/", "https://www.awwwards.com/websites/sites_of_the_day/"]
      },
{
        id: "2026-10-07", issue: "06", day: "수", date: "2026.10.07", title: "개인화와 조용한 UI가 화면을 바꾼다.", note: "10/6 회차와 중복 제외",
        summary: [
          "개인화가 두 번째 승부처로 올라왔다. 브랜드 정체성은 고정하고 CTA와 메시지 블록만 맥락에 맞게 바꾼다.",
          "벤토 그리드는 많은 정보를 쌓지 않고 스캔하게 만드는 의도 반응형 구조로 진화 중이다.",
          "조용한 UI는 선택지를 줄이고 다음 행동을 예측 가능하게 만든다.",
          "도파민 컬러는 트렌드지만 Aperte는 제한 팔레트를 유지한다.",
          "Awwwards 10/7 SOTD는 twks이며, 10/6 수상작은 Lidar Drone Scanning으로 확인됐다."
        ],
        trends: [
          { title: "개인화가 두 번째 승부처다", body: ["AI가 복잡한 사용자 데이터를 해석하고 맥락에 맞는 화면을 제안하기 쉬워지면서, 최대 다수용 한 화면에서 개인의 상황에 맞춘 인터페이스로 이동하고 있다.", "실무에서는 첫 방문자와 재방문자에게 다른 CTA를 보여주는 정도의 가벼운 분기부터 시작할 수 있다. 정적인 브랜드 정체성은 유지하고 CTA와 메시지 블록만 동적으로 바꾸는 하이브리드 접근이다."], analysis: "문의 섹션의 선택 기반 분기 원리를 히어로까지 확장. 포트폴리오·아티클 유입자에게는 작업 사례의 증거를, 직접 유입자에게는 프로세스와 기간을 먼저 제시. 브랜드 언어와 팔레트는 모든 분기에서 동일하게 유지.", links: ["https://v.daum.net/v/20251217110749436", "https://bippermedia.com/answers/what-are-the-latest-web-design-trends-for-2026/", "https://github.com/soberfounders/sober-founders-kpi/blob/HEAD/.agents/skills/web-design/SKILL.md"] },
          { title: "벤토 그리드 — Apple 클론을 넘어서", body: ["벤토 그리드는 긴 수직 스크롤 대신 대시보드처럼 정보를 스캔하게 만드는 제시 패턴으로 자리 잡았다. 보여줄 것은 많지만 지저분해 보이면 안 되는 SaaS 홈페이지와 포트폴리오에서 특히 강하다.", "다음 단계는 유입 의도에 따라 비용·패키지 셀이나 이미지 셀의 비중이 달라지는 에이전틱 벤토다. 10/5 회차의 조립식 레이아웃이 섹션 아키텍처라면, 벤토는 한 화면 안의 정보 제시 패턴이다."], analysis: "Work와 시안 샘플에 대형 결과 셀 하나, 과정·범위·기간을 담은 작은 셀을 검토. 제한 팔레트 안에서 농도 차이로 위계를 만들고, 390px에서는 결과 셀을 먼저 읽도록 순서를 재배치.", links: ["https://inkbotdesign.com/bento-grid-design/", "https://medium.com/@digitalprana33/10-web-design-trends-that-will-dominate-2026-with-real-examples-0fca36d4e8ad", "https://dev.to/imran_khan_a3cc224344dbcf/bento-grid-css-complete-tutorial-free-examples-2026-2ci"] },
          { title: "조용한 UI — 인지 부하의 설계", body: ["선택지를 줄이고 다음에 일어날 일을 예측 가능하게 만드는 조용한 UI가 부상하고 있다. 예측 가능한 구조, 자동재생 금지, 짧고 명확한 문장은 신경다양성을 고려한 인클루시브 디자인의 핵심이기도 하다.", "조용한 UI는 덜 만드는 것이 아니라 덜 헷갈리게 만드는 것이다. 안내에 필요하지 않은 스와이프 전환이나 화면을 가리는 고정 요소를 줄이는 방향과 맞닿아 있다."], analysis: "요소를 추가하기 전에 그것 없이도 방문자가 다음 행동을 알 수 있는지 먼저 확인. 문의 선택지는 3개로 유지하고 자동재생·무한 스크롤 같은 주의력 탈취 패턴은 도입하지 않음.", links: ["https://bippermedia.com/answers/what-are-the-latest-web-design-trends-for-2026/", "https://texaswebdesign.com/web-design/exploring-inclusive-design-trends-in-2026/"] },
          { title: "도파민 컬러 — 채택하지 않는다", body: ["안전한 파스텔에서 벗어나 네온 그러데이션과 고대비 조합을 쓰는 도파민 컬러가 2026년 흐름으로 꼽힌다. 다만 강한 색도 브랜드의 성격과 방향을 선명하게 보여줄 때만 의미가 있다.", "Aperte는 10/4에 정한 Plum Ink·Violet·Paper·White의 제한 팔레트를 유지한다. 강한 컬러가 필요한 브랜드가 있다는 것과 Aperte가 그 브랜드인 것은 다른 문제다."], analysis: "채택하지 않음. ‘방향이 먼저, 컬러는 그 다음’이라는 원칙만 반영. 인스타그램 콘텐츠에서도 강한 컬러 썸네일보다 피드의 톤 일관성을 우선.", links: ["https://medium.com/@digitalprana33/10-web-design-trends-that-will-dominate-2026-with-real-examples-0fca36d4e8ad", "https://blog.naver.com/coco9393_/224313746069"] },
          { title: "Awwwards 10/7 SOTD — twks", body: ["10월 7일 SOTD는 twks다. 10월 6일 수상작은 Lidar Drone Scanning으로 확인됐으며 두 작품 모두 Developer Award를 함께 받았다.", "10월 7일 확인 시점에는 수상작 상세 설명이 제한적으로만 노출돼 시각적 분석은 다음 회차로 넘긴다."], analysis: "SOTD 감시를 이어가고, 작성 시점에 미발표였던 날짜는 다음 날 정정. twks의 상세 분석은 10/8 회차에서 검토.", links: ["https://www.awwwards.com/websites/sites_of_the_day/"] }
        ],
        sources: ["https://v.daum.net/v/20251217110749436", "https://bippermedia.com/answers/what-are-the-latest-web-design-trends-for-2026/", "https://github.com/soberfounders/sober-founders-kpi/blob/HEAD/.agents/skills/web-design/SKILL.md", "https://inkbotdesign.com/bento-grid-design/", "https://medium.com/@digitalprana33/10-web-design-trends-that-will-dominate-2026-with-real-examples-0fca36d4e8ad", "https://dev.to/imran_khan_a3cc224344dbcf/bento-grid-css-complete-tutorial-free-examples-2026-2ci", "https://texaswebdesign.com/web-design/exploring-inclusive-design-trends-in-2026/", "https://blog.naver.com/coco9393_/224313746069", "https://www.awwwards.com/websites/sites_of_the_day/"]
      },
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
