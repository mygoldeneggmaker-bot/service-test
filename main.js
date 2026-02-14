document.addEventListener("DOMContentLoaded", () => {
  const menu = {
    korean: [
      "비빔밥", "김치찌개", "된장찌개", "불고기", "잡채", "순두부찌개",
      "제육볶음", "갈비탕", "냉면", "삼계탕", "감자탕", "해물파전",
      "보쌈", "족발", "닭갈비", "안동찜닭", "육개장", "설렁탕",
      "추어탕", "알탕", "동태찌개", "청국장", "김치볶음밥", "오징어볶음",
      "낙지볶음", "부대찌개", "소갈비찜", "돼지갈비찜", "아귀찜", "해물찜",
      "돼지불백", "순대국", "뼈해장국", "콩나물국밥", "닭곰탕", "피순대",
      "평양냉면", "들기름 막국수", "통닭", "수육국밥", "돌솥비빔밥",
      "간장게장", "양념게장", "전복죽", "꼬막비빔밥", "매운탕",
      "곱창전골", "대창전골", "순대볶음", "김밥", "만두", "곱창", "막창",
      "회", "죽", "도시락", "짜글이", "조개구이", "찜닭", "칼국수", "라면",
      "육회", "두부찌개", "파전", "김치전", "감자전", "석쇠불고기",
      "김치찜", "김피탕", "파닭", "떡볶이", "순대",
    ],
    japanese: [
      "초밥", "라멘", "돈까스", "우동", "야끼소바", "오코노미야끼",
      "텐동", "가츠동", "규동", "사케동", "장어덮밥", "소바", "스키야키",
      "야키토리", "타코야끼", "모밀", "나베", "함박스테이크", "카레라이스",
      "된장라면", "마제소바", "오야코동", "부타동", "히츠마부시", "몬자야키",
      "가라아게", "고로케", "메밀소바", "나가사키 짬뽕", "양갈비",
    ],
    chinese: [
      "짜장면", "짬뽕", "탕수육", "마라탕", "양꼬치", "꿔바로우",
      "마파두부", "유린기", "깐풍기", "고추잡채", "동파육", "어향가지",
      "토마토계란볶음", "울면", "기스면", "중국냉면", "마라샹궈", "훠궈",
      "볶음밥", "잡채밥", "우육면", "탄탄면", "지삼선", "난자완스",
      "라조기", "해파리냉채", "멘보샤", "크림새우", "누룽지탕", "유산슬", "딤섬",
    ],
    asian: [
      "쌀국수", "팟타이", "나시고랭", "분짜", "반미", "똠얌꿍", "월남쌈",
      "푸팟퐁커리", "카오팟", "쏨땀", "반세오", "껌승", "미고랭", "락사",
      "사테", "그린 커리", "레드 커리", "파인애플 볶음밥", "모닝글로리 볶음",
      "얌운센", "탄두리 치킨", "치킨 마크니", "팔락 파니르", "사모사",
      "난", "달프라이", "샤브샤브",
    ],
    european: [
      "파스타", "피자", "리조또", "라자냐", "뇨끼", "봉골레 파스타",
      "까르보나라", "알리오 올리오", "로제 파스타", "토마토 스파게티",
      "필라프", "그라탕", "빠에야", "감바스 알 아히요", "하몽",
      "또르띠야 에스파뇰라", "피쉬 앤 칩스", "잠봉뵈르", "슈니첼",
      "굴라쉬", "수블라키", "프레첼",
    ],
    american: [
      "스테이크", "햄버거", "클럽 샌드위치", "에그 베네딕트", "프렌치 토스트",
      "수비드 목살 스테이크", "대파 크림치즈 베이글", "브리스킷",
      "바베큐 플래터", "미트볼 스파게티", "오믈렛", "포케", "샐러드",
    ],
    latin_american: [
      "세비체", "로모 살타도", "아사도", "엠파나다", "페이조아다", "슈하스코",
      "아레파", "반데하 파이사", "타코", "부리또", "퀘사디아", "엔칠라다",
      "나초", "파히타", "칠리 콘 카르네", "과카몰리", "치미창가",
    ],
    middle_eastern: [
      "케밥", "후무스", "팔라펠", "타불레", "샥슈카", "피타 브레드", "무사카", "코프타",
    ],
    bunsik: ["떡볶이", "순대", "튀김", "어묵", "핫도그", "김밥", "라면", "떡꼬치", "만두"],
    dessert: [
      "케이크", "마카롱", "아이스크림", "빙수", "와플", "크로플", "허니브레드",
      "타르트", "스콘", "쿠키", "도넛", "에그타르트", "푸딩", "티라미수",
      "다쿠아즈", "망고 빙수", "소금빵", "맘모스빵", "슈크림빵", "단팥빵",
      "카스테라", "붕어빵", "호떡", "약과", "개성주악", "탕후루", "꽈배기",
      "군고구마", "군밤", "뻥튀기", "달고나", "츄러스", "알감자",
      "인절미", "꿀떡", "송편", "아메리카노", "카페라떼", "바닐라라떼",
      "카푸치노", "스무디", "에이드", "과일주스",
    ],
  };

  const menuImageMap = {
    // Korean Food Images (Placeholders - user needs to replace these with actual curated images)
    "비빔밥": "https://images.unsplash.com/photo-1549298244-0d7e63b6d274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGJpYmltYmFwfHx8fHwxfDE2ODc5MjM0MzA&ixlib=rb-4.0.3&q=80&w=1080",
    "김치찌개": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGtpbWNoaSVDMyVBRCUyMGpqaWdhZXxlbnwwfHx8fDE2ODc5MjM1MDA&ixlib=rb-4.0.3&q=80&w=1080",
    "된장찌개": "https://images.unsplash.com/photo-1620791426991-3c5e8f4b0f0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb258MHx8a29yZWFuJTIwZm9vZCUyMGRvZW5qYW5nJTIwY2hpZ2FlfHx8fHwxfDE2ODc5MjM1MzA&ixlib=rb-4.0.3&q=80&w=1080",
    "불고기": "https://images.unsplash.com/photo-1577771701321-4f4b9f2e4b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGJ1bGdvZ2l8fHwxfDE2ODc5MjM1NTc&ixlib=rb-4.0.3&q=80&w=1080",
    "잡채": "https://images.unsplash.com/photo-1549298244-0d7e63b6d274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGphcHRhaGV8fHwxfDE2ODc5MjM1OTY&ixlib=rb-4.0.3&q=80&w=1080",
    "순두부찌개": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHN1bmR1YnUlMjBjaGlnYWV8fHwxfDE2ODc5MjM2MjA&ixlib=rb-4.0.3&q=80&w=1080",
    "제육볶음": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGpleXVsJTIwYm9ra2V1bXxlbnwwfHx8fDE2ODc5MjM2NDY&ixlib=rb-4.0.3&q=80&w=1080",
    "갈비탕": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGdhbGJpdGFuZ3xlbnwwfHx8fDE2ODc5MjM2NzA&ixlib=rb-4.0.3&q=80&w=1080",
    "냉면": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMG5hZW5nbXllb258fHwxfDE2ODc5MjM3MDY&ixlib=rb-4.0.3&q=80&w=1080",
    "삼계탕": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHNhbWd5ZXRhbmd8fHwxfDE2ODc5MjM3Mjg&ixlib=rb-4.0.3&q=80&w=1080",
    "감자탕": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGdhbWphdGFuZ3xlbnwwfHx8fDE2ODc5MjM3NTc&ixlib=rb-4.0.3&q=80&w=1080",
    "해물파전": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGhhZW11bCUyMHBhamVvbnxlbnwwfHx8fDE2ODc5MjM3ODY&ixlib=rb-4.0.3&q=80&w=1080",
    "보쌈": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGJvc3NhbXxlbnwwfHx8fDE2ODc5MjM4MTE&ixlib=rb-4.0.3&q=80&w=1080",
    "족발": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGpvayUyMGJhbHxlbnwwfHx8fDE2ODc5MjM4NDA&ixlib=rb-4.0.3&q=80&w=1080",
    "닭갈비": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGRha2dhbGJpfHx8fHwxfDE2ODc5MjM4NjA&ixlib=rb-4.0.3&q=80&w=1080",
    "안동찜닭": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGFuZG9uZyUyMGpqaW1kYWt8fHwxfDE2ODc5MjM4ODg&ixlib=rb-4.0.3&q=80&w=1080",
    "육개장": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHl1a2dhZWphbmd8fHwxfDE2ODc5MjM5MTA&ixlib=rb-4.0.3&q=80&w=1080",
    "설렁탕": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHNlcmxlb25ndGFuZ3xlbnwwfHx8fDE2ODc5MjM5MzY&ixlib=rb-4.0.3&q=80&w=1080",
    "추어탕": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGNodXJlb2V0YW5nfHx8fHwxfDE2ODc5MjM5NjU&ixlib=rb-4.0.3&q=80&w=1080",
    "알탕": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGFsdGFuZ3xlbnwwfHx8fDE2ODc5MjM5OTU&ixlib=rb-4.0.3&q=80&w=1080",
    "동태찌개": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGRvbmctdGFlJTIwY2hpZ2FlfHx8fHwxfDE2ODc5MjQwMTk&ixlib=rb-4.0.3&q=80&w=1080",
    "청국장": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGNoZW9uZy1ndWstamFuZ3xlbnwwfHx8fDE2ODc5MjQwNDk&ixlib=rb-4.0.3&q=80&w=1080",
    "김치볶음밥": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGtpbWNoaSVDMyVBRCUyMGJva2tldW1iYXB8fHwxfDE2ODc5MjQwNzY&ixlib=rb-4.0.3&q=80&w=1080",
    "오징어볶음": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMG9qaW4tZ2VvJTIwYm9ra2V1bXxlbnwwfHx8fDE2ODc5MjQxMDM&ixlib=rb-4.0.3&q=80&w=1080",
    "낙지볶음": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMG5ha2pJJTIwYm9ra2V1bXxlbnwwfHx8fDE2ODc5MjQxMjY&ixlib=rb-4.0.3&q=80&w=1080",
    "부대찌개": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGJ1ZGFlJTIwY2hpZ2FlfHx8fHwxfDE2ODc5MjQxNTM&ixlib=rb-4.0.3&q=80&w=1080",
    "소갈비찜": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHNvLWdhbGJpJTIwY2hpZ2FlfHx8fHwxfDE2ODc5MjQxNzY&ixlib=rb-4.0.3&q=80&w=1080",
    "돼지갈비찜": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGR3YWVqJTIwZ2FsYmklMjBjaGlnYWV8fHwxfDE2ODc5MjQyMDI&ixlib=rb-4.0.3&q=80&w=1080",
    "아귀찜": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGFndWklMjBjaGltfHx8fHwxfDE2ODc5MjQyMjY&ixlib=rb-4.0.3&q=80&w=1080",
    "해물찜": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGhhZW11bCUyMGNoaW18fHwxfDE2ODc5MjQyNDc&ixlib=rb-403&q=80&w=1080",
    "돼지불백": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGR3YWVqJTIwYnVsYmFlaw&ixlib=rb-4.0.3&q=80&w=1080",
    "순대국": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHN1bmRhZWd1aw&ixlib=rb-4.0.3&q=80&w=1080",
    "뼈해장국": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHNocmFpbmd1aw&ixlib=rb-4.0.3&q=80&w=1080",
    "콩나물국밥": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGtvbmduYW11bmd1a2Jhbw&ixlib=rb-4.0.3&q=80&w=1080",
    "닭곰탕": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGRhY2toYW5n&ixlib=rb-4.0.3&q=80&w=1080",
    "피순대": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHBpLXN1bmRhZQ&ixlib=rb-4.0.3&q=80&w=1080",
    "평양냉면": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHB5ZW9uZy15YW5nLW5hZW5nbXllb24&ixlib=rb-4.0.3&q=80&w=1080",
    "들기름 막국수": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGRldWxrZ2lydW0lMjBtYWdndWtzdM&ixlib=rb-4.0.3&q=80&w=1080",
    "통닭": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHRvbmctZGFn&ixlib=rb-4.0.3&q=80&w=1080",
    "수육국밥": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHN1eXVrLWd1a2Jhbw&ixlib=rb-4.0.3&q=80&w=1080",
    "돌솥비빔밥": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGRvbHNvdC1iaWJpbWJhbw&ixlib=rb-4.0.3&q=80&w=1080",
    "간장게장": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGdhbmphbmctZ2VqYW5n&ixlib=rb-4.0.3&q=80&w=1080",
    "양념게장": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHlhbmduYWVtLWdlamFuZw&ixlib=rb-4.0.3&q=80&w=1080",
    "전복죽": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGplb25ib2tqdWk&ixlib=rb-4.0.3&q=80&w=1080",
    "꼬막비빔밥": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGtnb21hLWJpYmltYmFw&ixlib=rb-4.0.3&q=80&w=1080",
    "매운탕": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMG1hZWdhbmg&ixlib=rb-4.0.3&q=80&w=1080",
    "곱창전골": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGdvcGNoYW5nLWplb25nb2w&ixlib=rb-4.0.3&q=80&w=1080",
    "대창전골": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGRhZWNoYW5nLWplb25nb2w&ixlib=rb-4.0.3&q=80&w=1080",
    "순대볶음": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHN1bmRhZS1ib2tudW0&ixlib=rb-4.0.3&q=80&w=1080",
    "김밥": "https://images.unsplash.com/photo-1588691512497-ec411030e4b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGtpbWJhcHwxfHwxfDE2ODc5MjQ3MjY&ixlib=rb-4.0.3&q=80&w=1080",
    "만두": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMG1hbmR1fHx8fHwxfDE2ODc5MjQ3NTA&ixlib=rb-4.0.3&q=80&w=1080",
    "곱창": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGdvcGNoYW5n&ixlib=rb-4.0.3&q=80&w=1080",
    "막창": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMG1ha2choeung&ixlib=rb-4.0.3&q=80&w=1080",
    "회": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGhvZQ&ixlib=rb-4.0.3&q=80&w=1080",
    "죽": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGp1aw&ixlib=rb-4.0.3&q=80&w=1080",
    "도시락": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGRvc2lyYWs&ixlib=rb-4.0.3&q=80&w=1080",
    "짜글이": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGpqYWdldWxp&ixlib=rb-4.0.3&q=80&w=1080",
    "조개구이": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGpvZ2FlZ3Vp&ixlib=rb-4.0.3&q=80&w=1080",
    "찜닭": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGpqd2ltZGFjaw&ixlib=rb-4.0.3&q=80&w=1080",
    "칼국수": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGthbGd1a3N1&ixlib=rb-4.0.3&q=80&w=1080",
    "라면": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHJhbWVvbQ&ixlib=rb-4.0.3&q=80&w=1080",
    "육회": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHl1a2hvZQ&ixlib=rb-4.0.3&q=80&w=1080",
    "두부찌개": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGR1YnUtY2hpZ2Fl&ixlib=rb-4.0.3&q=80&w=1080",
    "파전": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHBhLWpud29u&ixlib=rb-4.0.3&q=80&w=1080",
    "김치전": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGtpbWNoaSVDMyVBRCUyMGpud29u&ixlib=rb-4.0.3&q=80&w=1080",
    "감자전": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGdhbWphLWpud29u&ixlib=rb-4.0.3&q=80&w=1080",
    "석쇠불고기": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHNlYWtza2FlLWJ1bGdvZ2k&ixlib=rb-4.0.3&q=80&w=1080",
    "김치찜": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGtpbWNoaSVDMyVBRCUyMGpqaW1&ixlib=rb-4.0.3&q=80&w=1080",
    "김피탕": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMGtpbXBpLXRhbmctc3V5dSVDMyU4OWt8fHwxfDE2ODc5MjUzMzQ&ixlib=rb-4.0.3&q=80&w=1080",
    "파닭": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHBhLWJhbms&ixlib=rb-4.0.3&q=80&w=1080",
    "떡볶이": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHR0ZW9rYm9ra2k&ixlib=rb-4.0.3&q=80&w=1080",
    "순대": "https://images.unsplash.com/photo-1627092305716-1f4a9b3a3b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwZm9vZCUyMHN1bmRhZQ&ixlib=rb-4.0.3&q=80&w=1080",

    // Japanese Food Images
    "초밥": "https://images.unsplash.com/photo-1579871142470-ee2d72f2d9f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwc3VzaGl8fHwxfDE2ODc5MjU0MTY&ixlib=rb-4.0.3&q=80&w=1080",
    "라멘": "https://images.unsplash.com/photo-1612443905596-f0b3b3b3b3b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwcmFtZW58fHwxfDE2ODc5MjU0NTk&ixlib=rb-4.0.3&q=80&w=1080",
    "돈까스": "https://images.unsplash.com/photo-1606764510000-0e0e0e0e0e0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwdG9ua2F0c3V8fHwxfDE2ODc5MjU1NDg&ixlib=rb-4.0.3&q=80&w=1080",
    "우동": "https://images.unsplash.com/photo-1596489370001-c8a77d8a6f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwdWRvbnx8fHwxfDE2ODc5MjU2Mzk&ixlib=rb-4.0.3&q=80&w=1080",
    "야끼소바": "https://images.unsplash.com/photo-1593922332616-d8f9b9a6b0c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIweWFraXNvYmF8fHwxfDE2ODc5MjU2NzE&ixlib=rb-4.0.3&q=80&w=1080",
    "오코노미야끼": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwb2tvbm9taXlha2l8fHwxfDE2ODc5MjU3MDI&ixlib=rb-4.0.3&q=80&w=1080",
    "텐동": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwdGVuZG9u&ixlib=rb-4.0.3&q=80&w=1080",
    "가츠동": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwa2F0c3Vkb24&ixlib=rb-4.0.3&q=80&w=1080",
    "규동": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwZ3l1ZG9u&ixlib=rb-4.0.3&q=80&w=1080",
    "사케동": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwc2FrZWRvbg&ixlib=rb-4.0.3&q=80&w=1080",
    "장어덮밥": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwdW5hZG9u&ixlib=rb-4.0.3&q=80&w=1080",
    "소바": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwc29iYQ&ixlib=rb-4.0.3&q=80&w=1080",
    "스키야키": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwc3VraXlha2k&ixlib=rb-4.0.3&q=80&w=1080",
    "야키토리": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIweWFraXRvcml8fHwxfDE2ODc5MjYyMTU&ixlib=rb-4.0.3&q=80&w=1080",
    "타코야끼": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwdGFrb3lha2l8fHwxfDE2ODc5MjYyNDU&ixlib=rb-4.0.3&q=80&w=1080",
    "모밀": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwc29iYXM&ixlib=rb-4.0.3&q=80&w=1080",
    "나베": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwbmFiZXx8fHwxfDE2ODc5MjYzMTc&ixlib=rb-4.0.3&q=80&w=1080",
    "함박스테이크": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwaGFtYnVyZyUyMHN0ZWFrZXxlbnwwfHx8fDE2ODc5MjYzNDM&ixlib=rb-4.0.3&q=80&w=1080",
    "카레라이스": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwY3VycnklMjByaWNlfHx8fHwxfDE2ODc5MjYzNjc&ixlib=rb-4.0.3&q=80&w=1080",
    "된장라면": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwbWlzbyUyMHJhbWVu&ixlib=rb-4.0.3&q=80&w=1080",
    "마제소바": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwbWF6ZXNvYmF8fHwxfDE2ODc5MjY0MTg&ixlib=rb-4.0.3&q=80&w=1080",
    "오야코동": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwb3lha29kb24&ixlib=rb-4.0.3&q=80&w=1080",
    "부타동": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwYnV0YWRvbg&ixlib=rb-4.0.3&q=80&w=1080",
    "히츠마부시": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwaGl0c3VtYWJ1c2hp&ixlib=rb-4.0.3&q=80&w=1080",
    "몬자야키": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwbW9uamF5YWtp&ixlib=rb-4.0.3&q=80&w=1080",
    "가라아게": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwa2FyYWFnZQ&ixlib=rb-4.0.3&q=80&w=1080",
    "고로케": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwa29yb2trZQ&ixlib=rb-4.0.3&q=80&w=1080",
    "메밀소바": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwbWVtaWwtc29iYQ&ixlib=rb-4.0.3&q=80&w=1080",
    "나가사키 짬뽕": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwbmFnYXNha2klMjBjaGFtcG9u&ixlib=rb-4.0.3&q=80&w=1080",
    "양갈비": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amFwYW5lc2UlMjBmb29kJTIwbGFtYiUyMGnob3Bz&ixlib=rb-4.0.3&q=80&w=1080",

    // Chinese Food Images
    "짜장면": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBqYWphbmdteWVvbg&ixlib=rb-4.0.3&q=80&w=1080",
    "짬뽕": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBqamFtcHBvbmc&ixlib=rb-4.0.3&q=80&w=1080",
    "탕수육": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjB0YW5nc3V5dWs&ixlib=rb-4.0.3&q=80&w=1080",
    "마라탕": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBtYWxhdGFuZw&ixlib=rb-4.0.3&q=80&w=1080",
    "양꼬치": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjB5YW5na2tvdGNoaQ&ixlib=rb-4.0.3&q=80&w=1080",
    "꿔바로우": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBxd29iYXJvdXw&ixlib=rb-4.0.3&q=80&w=1080",
    "마파두부": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBtYXBhJTIwdG9mdXw&ixlib=rb-4.0.3&q=80&w=1080",
    "유린기": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjB5dSAyJTNCMCUyMHJpbmclMjBraQ&ixlib=rb-4.0.3&q=80&w=1080",
    "깐풍기": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBrYW4tZnVuZy1raXw&ixlib=rb-4.0.3&q=80&w=1080",
    "고추잡채": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBnb2NodSUyMGphcCUyMGNoYWV8&ixlib=rb-4.0.3&q=80&w=1080",
    "동파육": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBkb25nLWdhZSUyMHl1a3w&ixlib=rb-4.0.3&q=80&w=1080",
    "어향가지": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBlYW9oeWFuZyUyMGdhaml8&ixlib=rb-4.0.3&q=80&w=1080",
    "토마토계란볶음": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjB0b21hdG8lMjBrZXklMjBsYW4lMjBib2trZXVtd3w&ixlib=rb-4.0.3&q=80&w=1080",
    "울면": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjB1bG15ZW9u&ixlib=rb-4.0.3&q=80&w=1080",
    "기스면": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBnaXMtbXllb24&ixlib=rb-4.0.3&q=80&w=1080",
    "중국냉면": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBjaGluZXNlJTIwbmFlbmdteWVvbg&ixlib=rb-4.0.3&q=80&w=1080",
    "마라샹궈": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBtYWxhJTIwc2hhbmdxd28&ixlib=rb-4.0.3&q=80&w=1080",
    "훠궈": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBob3QlMjBwb3R8&ixlib=rb-4.0.3&q=80&w=1080",
    "볶음밥": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBmcmllZCUyMHJpY2V8&ixlib=rb-4.0.3&q=80&w=1080",
    "잡채밥": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBqYXBjaGFlYmFwfHx8fHwxfDE2ODc5Mjg2Nzg&ixlib=rb-4.0.3&q=80&w=1080",
    "우육면": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBiZWVmJTIwbm9vZGxlJTIwc291cHw&ixlib=rb-4.0.3&q=80&w=1080",
    "탄탄면": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjB0YW4tdGFuJTIwbXllb24&ixlib=rb-4.0.3&q=80&w=1080",
    "지삼선": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBkaXNhbXNlb24&ixlib=rb-4.0.3&q=80&w=1080",
    "난자완스": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBuYW5qYXMlMjB3YW5z&ixlib=rb-4.0.3&q=80&w=1080",
    "라조기": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBsYWpvc2Vfa2k&ixlib=rb-4.0.3&q=80&w=1080",
    "해파리냉채": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBoYWVuZyUyMHBhLXJp&ixlib=rb-4.0.3&q=80&w=1080",
    "멘보샤": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBtZW5ib3NoYQ&ixlib=rb-4.0.3&q=80&w=1080",
    "크림새우": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBjcmVhbSUyMHNocmltcHx8fHwxfDE2ODc5Mjg5MzU&ixlib=rb-4.0.3&q=80&w=1080",
    "누룽지탕": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBudXJ1bmdlZ2V0YW5n&ixlib=rb-4.0.3&q=80&w=1080",
    "유산슬": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjB5dXMlMjBhbiUyMHNsYXU&ixlib=rb-4.0.3&q=80&w=1080",
    "딤섬": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbmVzZSUyMGZvb2QlMjBkaW0lMjBzdW18&ixlib=rb-4.0.3&q=80&w=1080",

    // Asian Food Images
    "쌀국수": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwcGhv&ixlib=rb-4.0.3&q=80&w=1080",
    "팟타이": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwcGFkJTIwdGhhaXw&ixlib=rb-4.0.3&q=80&w=1080",
    "나시고랭": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwbmFzaSUyMGdvcmVuZ3w&ixlib=rb-4.0.3&q=80&w=1080",
    "분짜": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwYnVuJTIwY2hhfHwxfHwxfDE2ODc5MjkzMTQ&ixlib=rb-4.0.3&q=80&w=1080",
    "반미": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwYmFuaCUyMG1pfHwxfHwxfDE2ODc5MjkzNDc&ixlib=rb-4.0.3&q=80&w=1080",
    "똠얌꿍": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwdG9tJTIweXVtJTIwZ29vbmc&ixlib=rb-4.0.3&q=80&w=1080",
    "월남쌈": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwd29sbCUyMG5hbSUyMHNzYW18&ixlib=rb-4.0.3&q=80&w=1080",
    "푸팟퐁커리": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwcHVwYXQlMjBwaG9uZyUyMGN1cnJ5fHx8fHwxfDE2ODc5Mjk0MjU&ixlib=rb-4.0.3&q=80&w=1080",
    "카오팟": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwa2hhbyUyMHBhdHx8fHwxfDE2ODc5Mjk0NTU&ixlib=rb-4.0.3&q=80&w=1080",
    "쏨땀": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwc29tJTIwdHVt&ixlib=rb-4.0.3&q=80&w=1080",
    "반세오": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwYmFuaCUyMHNlYW8&ixlib=rb-4.0.3&q=80&w=1080",
    "껌승": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwY29tJTIwdGFt&ixlib=rb-4.0.3&q=80&w=1080",
    "미고랭": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwbWllJTIwZ29yZW5n&ixlib=rb-4.0.3&q=80&w=1080",
    "락사": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwbGFrc2F8&ixlib=rb-4.0.3&q=80&w=1080",
    "사테": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwc2F0ZSw&ixlib=rb-4.0.3&q=80&w=1080",
    "그린 커리": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwZ3JlZW4lMjBjdXJyeXw&ixlib=rb-4.0.3&q=80&w=1080",
    "레드 커리": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwcmVkJTIwY3Vycnl8&ixlib=rb-4.0.3&q=80&w=1080",
    "파인애플 볶음밥": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwcGluZWFwcGxlJTIwZnJpZWQlMjByaWNlfHx8fHwxfDE2ODc5Mjk4NjI&ixlib=rb-4.0.3&q=80&w=1080",
    "모닝글로리 볶음": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwbW9ybmluZyUyMGdsb3J5JTIwc3Rpci1mcnl8fHwxfDE2ODc5Mjk5Mzg&ixlib=rb-4.0.3&q=80&w=1080",
    "얌운센": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIweWFtJTIwd29vbiUyMHNlbi8&ixlib=rb-4.0.3&q=80&w=1080",
    "탄두리 치킨": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwdGFuZHVyaSUyMGNoaWNrZW4&ixlib=rb-4.0.3&q=80&w=1080",
    "치킨 마크니": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwY2hpY2tlbiUyMG1hY2tyZWFs&ixlib=rb-4.0.3&q=80&w=1080",
    "팔락 파니르": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwcGFsYWs&ixlib=rb-4.0.3&q=80&w=1080",
    "사모사": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwc2Ftb3NhfHx8fHwxfDE2ODc5MzA0MjY&ixlib=rb-4.0.3&q=80&w=1080",
    "난": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwbmFhbnx8fHwxfDE2ODc5MzA0NDU&ixlib=rb-4.0.3&q=80&w=1080",
    "달프라이": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwZGFsJTIwZnJ5&ixlib=rb-4.0.3&q=80&w=1080",
    "샤브샤브": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4lMjBmb29kJTIwc2hhYnUgc2hhYnU&ixlib=rb-4.0.3&q=80&w=1080",

    // European Food Images
    "파스타": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwcGFzdGF8fHwxfDE2ODc5MzA3NTM&ixlib=rb-4.0.3&q=80&w=1080",
    "피자": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwcGl6emF8fHwxfDE2ODc5MzA3NzQ&ixlib=rb-4.0.3&q=80&w=1080",
    "리조또": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwcmlzb3R0by99fHwxfDE2ODc5MzA4MDA&ixlib=rb-4.0.3&q=80&w=1080",
    "라자냐": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwbGFzYWduYQ&ixlib=rb-4.0.3&q=80&w=1080",
    "뇨끼": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwZ25vY2NoaXw&ixlib=rb-4.0.3&q=80&w=1080",
    "봉골레 파스타": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwdm9uZyUyMGdhbGUlMjBwYXN0YQ&ixlib=rb-4.0.3&q=80&w=1080",
    "까르보나라": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwY2FyYm9uYXJh&ixlib=rb-4.0.3&q=80&w=1080",
    "알리오 올리오": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwYWdsaW8lMjBvbGlv&ixlib=rb-4.0.3&q=80&w=1080",
    "로제 파스타": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwcm9zZSUyMHBhc3Rh&ixlib=rb-4.0.3&q=80&w=1080",
    "토마토 스파게티": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwdG9tYXRvJTIwc3BhZ2hldHRp&ixlib=rb-4.0.3&q=80&w=1080",
    "필라프": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwcGlsYWY&ixlib=rb-4.0.3&q=80&w=1080",
    "그라탕": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwZ3JhdGlu&ixlib=rb-4.0.3&q=80&w=1080",
    "빠에야": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwcGFlbGxh&ixlib=rb-4.0.3&q=80&w=1080",
    "감바스 알 아히요": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwZ2FtYmFzJTIwYWwlMjBhY2hpbGxv&ixlib=rb-4.0.3&q=80&w=1080",
    "하몽": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwamFtb24&ixlib=rb-4.0.3&q=80&w=1080",
    "또르띠야 에스파뇰라": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwdG9ydGlsbGFzJTIwZXNwYW5vbGxh&ixlib=rb-4.0.3&q=80&w=1080",
    "피쉬 앤 칩스": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwZmlzaCUyMGFuZCUyMGnoaXBz&ixlib=rb-4.0.3&q=80&w=1080",
    "잠봉뵈르": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwamFtYm9uJTIwYnVlcnJl&ixlib=rb-4.0.3&q=80&w=1080",
    "슈니첼": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwc2Nobml0emVs&ixlib=rb-4.0.3&q=80&w=1080",
    "굴라쉬": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwZ291bGFzaHw&ixlib=rb-4.0.3&q=80&w=1080",
    "수블라키": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwc291dmxha2k&ixlib=rb-4.0.3&q=80&w=1080",
    "프레첼": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXVyb3BlYW4lMjBmb29kJTIwcHJldHplbA&ixlib=rb-4.0.3&q=80&w=1080",

    // American Food Images
    "스테이크": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YW1lcmljYW4lMjBmb29kJTIwc3RlYWtlfHx8fHwxfDE2ODc5MzEzMjQ&ixlib=rb-4.0.3&q=80&w=1080",
    "햄버거": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YW1lcmljYW4lMjBmb29kJTIwaGFtYnVyZ2VyfHx8fHwxfDE2ODc5MzEzNTc&ixlib=rb-4.0.3&q=80&w=1080",
    "클럽 샌드위치": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YW1lcmljYW4lMjBmb29kJTIwY2x1YiUyMHNhbmR3aWNo&ixlib=rb-4.0.3&q=80&w=1080",
    "에그 베네딕트": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YW1lcmljYW4lMjBmb29kJTIwZWdnJTIwYmVuZWRpY3R8fHwxfDE2ODc5MzE0NDI&ixlib=rb-4.0.3&q=80&w=1080",
    "프렌치 토스트": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YW1lcmljYW4lMjBmb29kJTIwZnJlbmNoJTIwdG9hc3R8fHwxfDE2ODc5MzE0NzE&ixlib=rb-4.0.3&q=80&w=1080",
    "수비드 목살 스테이크": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YW1lcmljYW4lMjBmb29kJTIwc291JTIwdmlkZSUyMHBvcmstc3RlYWtlaXw&ixlib=rb-4.0.3&q=80&w=1080",
    "대파 크림치즈 베이글": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YW1lcmljYW4lMjBmb29kJTIwY3JlYW0lMjBjaGVlc2UlMjBiYWdlbHw&ixlib=rb-4.0.3&q=80&w=1080",
    "브리스킷": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YW1lcmljYW4lMjBmb29kJTIwYnJpc2tldHw&ixlib=rb-4.0.3&q=80&w=1080",
    "바베큐 플래터": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YW1lcmljYW4lMjBmb29kJTIwYmFyYmVxdWUlMjBwbGF0dGVyfHx8fHwxfDE2ODc5MzE2NTk&ixlib=rb-4.0.3&q=80&w=1080",
    "미트볼 스파게티": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YW1lcmljYW4lMjBmb29kJTIwbWVhdGJhbGwlMjBzcGFnaGV0dGk&ixlib=rb-4.0.3&q=80&w=1080",
    "오믈렛": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YW1lcmljYW4lMjBmb29kJTIwb21lbGV0dGV8fHwxfDE2ODc5MzE3MjQ&ixlib=rb-4.0.3&q=80&w=1080",
    "포케": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YW1lcmljYW4lMjBmb29kJTIwcG9rZSUyMGJvd2w&ixlib=rb-4.0.3&q=80&w=1080",
    "샐러드": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YW1lcmljYW4lMjBmb29kJTIwc2FsYWQ&ixlib=rb-4.0.3&q=80&w=1080",

    // Latin American Food Images
    "세비체": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjBjZXZpY2hlfHx8fHwxfDE2ODc5MzIwNzc&ixlib=rb-4.0.3&q=80&w=1080",
    "로모 살타도": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjBsb21vJTIwc2FsdGFkb3w&ixlib=rb-4.0.3&q=80&w=1080",
    "아사도": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjBhc2Fkb3w&ixlib=rb-4.0.3&q=80&w=1080",
    "엠파나다": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjBlbXBhbmFkYXw&ixlib=rb-4.0.3&q=80&w=1080",
    "페이조아다": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjBmZWlqb2FkYQ&ixlib=rb-4.0.3&q=80&w=1080",
    "슈하스코": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjBjaHVycmFzY28&ixlib=rb-4.0.3&q=80&w=1080",
    "아레파": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjBhcmVwYXw&ixlib=rb-4.0.3&q=80&w=1080",
    "반데하 파이사": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjBiYW5kZWphJTIwcGFpc2F8&ixlib=rb-4.0.3&q=80&w=1080",
    "타코": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjB0YWNv&ixlib=rb-4.0.3&q=80&w=1080",
    "부리또": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjBidXJyaXRvfHx8fHwxfDE2ODc5MzI2MDE&ixlib=rb-4.0.3&q=80&w=1080",
    "퀘사디아": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjBxdWVzYWRpb2F8fHwxfDE2ODc5MzI2MjY&ixlib=rb-4.0.3&q=80&w=1080",
    "엔칠라다": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjBlbmNoaWxhZGE&ixlib=rb-4.0.3&q=80&w=1080",
    "나초": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjBuYWNob3M&ixlib=rb-4.0.3&q=80&w=1080",
    "파히타": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjBmYWhpdGElMjB8fHwxfDE2ODc5MzI3MzA&ixlib=rb-4.0.3&q=80&w=1080",
    "칠리 콘 카르네": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjBjaGlsbGl%yVDMlTkYlMjBjb24lMjBjYXJuZQ&ixlib=rb-4.0.3&q=80&w=1080",
    "과카몰리": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjBndWFjYW1vbGU&ixlib=rb-4.0.3&q=80&w=1080",
    "치미창가": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF0aW4lMjBhbWVyaWNhbiUyMGZvb2QlMjBjaGltaWNoYW5nZWF8fHwxfDE2ODc5MzI4Nzk&ixlib=rb-4.0.3&q=80&w=1080",

    // Middle Eastern Food Images
    "케밥": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWlkZGxlJTIwZWFzdGVybiUyMGZvb2QlMjBrZWJhYnxlbnwwfHx8fDE2ODc5MzMyMDI&ixlib=rb-4.0.3&q=80&w=1080",
    "후무스": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWlkZGxlJTIwZWFzdGVybiUyMGZvb2QlMjBodW1tdXN8fHwxfDE2ODc5MzMyMzM&ixlib=rb-4.0.3&q=80&w=1080",
    "팔라펠": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWlkZGxlJTIwZWFzdGVybiUyMGZvb2QlMjBmYWxhZmVs&ixlib=rb-4.0.3&q=80&w=1080",
    "타불레": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWlkZGxlJTIwZWFzdGVybiUyMGZvb2QlMjB0YWJib3VsZWh8fHwxfDE2ODc5MzMyOTg&ixlib=rb-4.0.3&q=80&w=1080",
    "샥슈카": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWlkZGxlJTIwZWFzdGVybiUyMGZvb2QlMjBzaGFrc2h1a2F8fHwxfDE2ODc5MzMzMzg&ixlib=rb-4.0.3&q=80&w=1080",
    "피타 브레드": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWlkZGxlJTIwZWFzdGVybiUyMGZvb2QlMjBwaXRhJTIwYnJlYWQ&ixlib=rb-4.0.3&q=80&w=1080",
    "무사카": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWlkZGxlJTIwZWFzdGVybiUyMGZvb2QlMjBtdXNzYWthfHx8fHwxfDE2ODc5MzM0MTE&ixlib=rb-4.0.3&q=80&w=1080",
    "코프타": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWlkZGxlJTIwZWFzdGVybiUyMGZvb2QlMjBrb2Z0YQ&ixlib=rb-4.0.3&q=80&w=1080",

    // Bunsik Images
    "떡볶이": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwc3RyZWV0JTIwZm9vZCUyMHR0ZW9rYm9ra2l8fHwxfDE2ODc5MzM2OTc&ixlib=rb-4.0.3&q=80&w=1080",
    "순대": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwc3RyZWV0JTIwZm9vZCUyMHN1bmRhZXx8fHwxfDE2ODc5MzM3Mjg&ixlib=rb-4.0.3&q=80&w=1080",
    "튀김": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwc3RyZWV0JTIwZm9vZCUyMGZyaWVkJTIwZm9vZCA&ixlib=rb-4.0.3&q=80&w=1080",
    "어묵": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwc3RyZWV0JTIwZm9vZCUyMGVhLW11aw&ixlib=rb-4.0.3&q=80&w=1080",
    "핫도그": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwc3RyZWV0JTIwZm9vZCUyMGhvdCUyMGRvZ3x8fHwxfDE2ODc5MzM4NDU&ixlib=rb-4.0.3&q=80&w=1080",
    "김밥": "https://images.unsplash.com/photo-1588691512497-ec411030e4b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwc3RyZWV0JTIwZm9vZCUyMGtpbWJhcHwxfHwxfDE2ODc5MzM5MTM&ixlib=rb-4.0.3&q=80&w=1080",
    "라면": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwc3RyZWV0JTIwZm9vZCUyMHJhbWVvbQ&ixlib=rb-4.0.3&q=80&w=1080",
    "떡꼬치": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwc3RyZWV0JTIwZm9vZCUyMHR0ZW9rLWtrb2NoaXw&ixlib=rb-4.0.3&q=80&w=1080",
    "만두": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a29yZWFuJTIwc3RyZWV0JTIwZm9vZCUyMG1hbmR1fHx8fHwxfDE2ODc5MzQwMjk&ixlib=rb-4.0.3&q=80&w=1080",

    // Dessert Images
    "케이크": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGNha2V8fHwxfDE2ODc5MzQyMTY&ixlib=rb-4.0.3&q=80&w=1080",
    "마카롱": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMG1hY2Fyb25zfHx8fHwxfDE2ODc5MzQyNTc&ixlib=rb-4.0.3&q=80&w=1080",
    "아이스크림": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGljZSUyMGNyZWFtfHx8fHwxfDE2ODc5MzQyOTI&ixlib=rb-4.0.3&q=80&w=1080",
    "빙수": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGJpbmctc3V8fHwxfDE2ODc5MzQzMTQ&ixlib=rb-4.0.3&q=80&w=1080",
    "와플": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMHdhZmZsZXx8fHwxfDE2ODc5MzQzNDU&ixlib=rb-4.0.3&q=80&w=1080",
    "크로플": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGNyb3dmbGU&ixlib=rb-4.0.3&q=80&w=1080",
    "허니브레드": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGhvbmV5YnJlYWQ&ixlib=rb-4.0.3&q=80&w=1080",
    "타르트": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMHRhcnR8fHwxfDE2ODc5MzQ0MTg&ixlib=rb-4.0.3&q=80&w=1080",
    "스콘": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMHNjb25lfHx8fHwxfDE2ODc5MzQ0NDI&ixlib=rb-4.0.3&q=80&w=1080",
    "쿠키": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGNvb2tpZXx8fHwxfDE2ODc5MzQ0NjY&ixlib=rb-4.0.3&q=80&w=1080",
    "도넛": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGRvbnV0fHx8fHwxfDE2ODc5MzQ0OTY&ixlib=rb-4.0.3&q=80&w=1080",
    "에그타르트": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGVnZyUyMHRhcnR8fHwxfDE2ODc5MzQ1MjY&ixlib=rb-4.0.3&q=80&w=1080",
    "푸딩": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMHB1ZGRpbmd8fHwxfDE2ODc5MzQ1NDQ&ixlib=rb-4.0.3&q=80&w=1080",
    "티라미수": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMHRpcmFtaXN1fHx8fHwxfDE2ODc5MzQ1NzM&ixlib=rb-4.0.3&q=80&w=1080",
    "다쿠아즈": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGRhY3F1b2lzZXx8fHwxfDE2ODc5MzQ2MDI&ixlib=rb-4.0.3&q=80&w=1080",
    "망고 빙수": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMG1hbmdvJTIwYmluZyUyMHN1fHx8fHwxfDE2ODc5MzQ2MzA&ixlib=rb-4.0.3&q=80&w=1080",
    "소금빵": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMHNhbHQlMjBicmVhZHx8fHwxfDE2ODc5MzQ2NjA&ixlib=rb-4.0.3&q=80&w=1080",
    "맘모스빵": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMG1hbW1vdGglMjBicmVhZHx8fHwxfDE2ODc5MzQ2OTI&ixlib=rb-4.0.3&q=80&w=1080",
    "슈크림빵": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGno3JpbSUyMGJicmVhZHx8fHwxfDE2ODc5MzQ3MjI&ixlib=rb-4.0.3&q=80&w=1080",
    "단팥빵": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMHJlZCUyMGJlYW4lMjBidW58fHwxfDE2ODc5MzQ3NDg&ixlib=rb-4.0.3&q=80&w=1080",
    "카스테라": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGNhc3RlbGxhfHx8fHwxfDE2ODc5MzQ3NzQ&ixlib=rb-4.0.3&q=80&w=1080",
    "붕어빵": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGJ1bmdlby1wYW5nfHx8fHwxfDE2ODc5MzQ4MDE&ixlib=rb-4.0.3&q=80&w=1080",
    "호떡": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGhvdHRlb2t8fHwxfDE2ODc5MzQ4MjY&ixlib=rb-4.0.3&q=80&w=1080",
    "약과": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMHlhbWVudHxlbnwwfHx8fDE2ODc5MzQ4NDQ&ixlib=rb-4.0.3&q=80&w=1080",
    "개성주악": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGdhZXNlb25nJTIwYmluZ3xlbnwwfHx8fDE2ODc5MzQ4NzA&ixlib=rb-4.0.3&q=80&w=1080",
    "탕후루": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMHRhbmctaHVsdXxlbnwwfHx8fDE2ODc5MzQ5MDM&ixlib=rb-4.0.3&q=80&w=1080",
    "꽈배기": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGd3YWJpZWdpfHx8fHwxfDE2ODc5MzQ5MjQ&ixlib=rb-4.0.3&q=80&w=1080",
    "군고구마": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGd1bi1nb2d1bWF8fHwxfDE2ODc5MzQ5NDc&ixlib=rb-4.0.3&q=80&w=1080",
    "군밤": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGd1bi1iYW18fHwxfDE2ODc5MzQ5NjU&ixlib=rb-4.0.3&q=80&w=1080",
    "뻥튀기": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMHBwZW9uZy10d2lnZ2l8fHwxfDE2ODc5MzQ5ODg&ixlib=rb-4.0.3&q=80&w=1080",
    "달고나": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGRhbGdvbmF8fHwxfDE2ODc5MzUwMjk&ixlib=rb-4.0.3&q=80&w=1080",
    "츄러스": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGNodXJyb3N8fHwxfDE2ODc5MzUwNjQ&ixlib=rb-4.0.3&q=80&w=1080",
    "알감자": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGFsZ2FtJTIwY2hh&ixlib=rb-4.0.3&q=80&w=1080",
    "인절미": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGluamVsJTIwbWk&ixlib=rb-4.0.3&q=80&w=1080",
    "꿀떡": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGt0dWVsb2xr&ixlib=rb-4.0.3&q=80&w=1080",
    "송편": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMHNvbmdwZCUyMGnoZW9u&ixlib=rb-4.0.3&q=80&w=1080",
    "아메리카노": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGFtZXJpY2Fub3w&ixlib=rb-4.0.3&q=80&w=1080",
    "카페라떼": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGNhZmVyYXRlfHx8fHwxfDE2ODc5MzUyNDk&ixlib=rb-4.0.3&q=80&w=1080",
    "바닐라라떼": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMHZhbmlsbGElMjBsYXR0ZXx8fHwxfDE2ODc5MzUyNzU&ixlib=rb-4.0.3&q=80&w=1080",
    "카푸치노": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGNhcHVjY2lub3x8fHwxfDE2ODc5MzUzMDQ&ixlib=rb-4.0.3&q=80&w=1080",
    "스무디": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMHNtb290aGllfHx8fHwxfDE2ODc5MzUzMjk&ixlib=rb-4.0.3&q=80&w=1080",
    "에이드": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGFlYWRlfHx8fHwxfDE2ODc5MzUzNTQ&ixlib=rb-4.0.3&q=80&w=1080",
    "과일주스": "https://images.unsplash.com/photo-1621571596200-a6a6a6a6a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzc2VydCUyMGZydWl0JTIwanVpY2V8fHwxfDE2ODc5MzUzNzc&ixlib=rb-4.0.3&q=80&w=1080",
  };

  let currentCategory = "all";
  let userLocation = null;
  let isLoading = false;

  let recommendationHistory = {};
  Object.keys(menu).forEach((category) => {
    recommendationHistory[category] = [];
  });
  recommendationHistory["all"] = [];

  const recommendBtn = document.getElementById("recommend-btn");
  const recommendationArea = document.getElementById("recommendation-area");
  const illustrationDiv = document.getElementById("recommendation-illustration");
  const textP = document.getElementById("recommendation-text");
  const restaurantSearchArea = document.getElementById("restaurant-search-area");
  const categoryBtns = document.querySelectorAll(".category-btn");
  const viewAllBtn = document.getElementById("view-all-btn");
  const modal = document.getElementById("menu-modal");
  const closeBtn = document.querySelector(".close-btn");
  const menuBoard = document.getElementById("menu-board");

  // Removed Firebase Functions instance initialization as it's no longer needed for image fetching.
  // const functions = firebase.app().functions("us-central1");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    },
    () => {
      console.warn("User location access denied. Some map features may be limited.");
    }
  );

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
    });
  });

  recommendBtn.addEventListener("click", handleRecommendation);
  viewAllBtn.addEventListener("click", () => (modal.style.display = "flex"));
  closeBtn.addEventListener("click", () => (modal.style.display = "none"));
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  function showFoodImage(menuName) { // Removed 'category' parameter as it's no longer used here
    const imageUrl = menuImageMap[menuName] || "https://images.unsplash.com/photo-1543353071-873f17a7a08b"; // Generic food image fallback
    const photographer = "Placeholder"; // Photographer credit can be generic if using curated images
    const photographerUrl = "#";

    illustrationDiv.style.display = "flex";
    illustrationDiv.innerHTML = `<div class="img-loading">🔍 사진 불러오는 중...</div>`;

    const img = new Image();
    img.onload = () => {
      illustrationDiv.innerHTML = `
        <img src="${imageUrl}" alt="${menuName}" class="food-img">
        <div class="photographer-credit">
          Photo by <a href="${photographerUrl}" target="_blank">${photographer}</a>
          on <a href="https://unsplash.com/?utm_source=mygoldeneggmaker_bot&utm_medium=referral" target="_blank">Unsplash</a>
        </div>
      `;
    };
    img.onerror = () => {
      illustrationDiv.innerHTML = `<div class="img-fallback">🍽️</div>`;
    };
    img.src = imageUrl;
  }

  function handleRecommendation() {
    if (isLoading) return;
    isLoading = true;

    recommendBtn.blur();
    recommendBtn.disabled = true;

    let menuItems;
    let categoryForSearch; // This variable is no longer needed but kept for minimal changes in the immediate block
    if (currentCategory === "all") {
      const allExceptDessert = { ...menu };
      delete allExceptDessert.dessert;
      delete allExceptDessert.bunsik;
      // Flatten the menu items and keep track of their categories
      menuItems = Object.entries(allExceptDessert).flatMap(([category, items]) => 
        items.map(item => ({ name: item, category }))
      );
    } else {
      menuItems = menu[currentCategory].map(item => ({ name: item, category: currentCategory }));
    }

    if (!menuItems || menuItems.length === 0) {
      isLoading = false;
      recommendBtn.disabled = false;
      return;
    }

    let availableMenuItems = menuItems.filter(
      (item) => !recommendationHistory[currentCategory].includes(item.name)
    );

    if (availableMenuItems.length === 0) {
      recommendationHistory[currentCategory] = [];
      availableMenuItems = menuItems;
    }

    recommendationArea.classList.remove("show");
    textP.classList.remove("final-result");
    illustrationDiv.style.display = "none";
    illustrationDiv.innerHTML = "";
    textP.textContent = "두구두구... 🥁";
    restaurantSearchArea.innerHTML = "";
    recommendationArea.classList.add("show");

    setTimeout(() => {
      const selectedMenuItem =
        availableMenuItems[Math.floor(Math.random() * availableMenuItems.length)];

      recommendationHistory[currentCategory].push(selectedMenuItem.name);

      textP.textContent = selectedMenuItem.name;
      textP.classList.add("final-result");

      showFoodImage(selectedMenuItem.name); // Call without category

      const buttonsWrapper = createActionButtons(selectedMenuItem.name);
      restaurantSearchArea.appendChild(buttonsWrapper);

      setTimeout(() => {
        buttonsWrapper.classList.add("show");
        isLoading = false;
        recommendBtn.disabled = false;
      }, 300);
    }, 300);
  }

  function createActionButtons(menuItem) {
    restaurantSearchArea.innerHTML = "";
    const query = encodeURIComponent(menuItem);
    const buttonsWrapper = document.createElement("div");
    buttonsWrapper.className = "action-buttons-wrapper";

    const naverSearchButton = document.createElement("a");
    naverSearchButton.href = `https://search.naver.com/search.naver?query=${query} 맛집`;
    naverSearchButton.target = "_blank";
    naverSearchButton.className = "action-btn naver-search-btn";
    naverSearchButton.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> 네이버 검색`;
    buttonsWrapper.appendChild(naverSearchButton);

    const maps = [
      {
        name: "Google",
        url: `https://www.google.com/maps/search/?api=1&query=${query} 맛집${
          userLocation ? `&location=${userLocation.lat},${userLocation.lng}` : ""
        }`,
      },
      { name: "Naver", url: `https://map.naver.com/v5/search/${query} 맛집` },
      { name: "Kakao", url: `https://map.kakao.com/link/search/${query} 맛집` },
    ];

    maps.forEach((map) => {
      const button = document.createElement("a");
      button.href = map.url;
      button.target = "_blank";
      button.className = "action-btn map-btn";
      button.innerHTML = `<i class="fa-solid fa-map-location-dot"></i> ${map.name}`;
      buttonsWrapper.appendChild(button);
    });

    return buttonsWrapper;
  }

  function generateMenuBoard() {
    const categoryMap = {
      korean: "한식",
      japanese: "일식",
      chinese: "중식",
      asian: "아시안",
      european: "유러피안",
      american: "아메리칸",
      latin_american: "남미",
      middle_eastern: "중동",
      bunsik: "분식",
      dessert: "디저트/간식 🍰",
    };

    let boardHTML = '<h2>- 전체 메뉴판 -</h2><div class="menu-accordion">';
    for (const category in categoryMap) {
      if (menu[category] && menu[category].length > 0) {
        boardHTML += `
          <details>
            <summary>${categoryMap[category]}</summary>
            <ul class="menu-items">
              ${menu[category].map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </details>
        `;
      }
    }
    boardHTML += "</div>";
    menuBoard.innerHTML = boardHTML;
  }

  generateMenuBoard();
});
