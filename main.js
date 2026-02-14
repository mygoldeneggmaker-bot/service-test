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
    // Korean Food Images
    "비빔밥": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/800px-Dolsot-bibimbap.jpg",
    "김치찌개": "https://picsum.photos/seed/food/800/600",
    "된장찌개": "https://picsum.photos/seed/food/800/600",
    "불고기": "https://picsum.photos/seed/food/800/600",
    "잡채": "https://picsum.photos/seed/food/800/600",
    "순두부찌개": "https://picsum.photos/seed/food/800/600",
    "제육볶음": "https://picsum.photos/seed/food/800/600",
    "갈비탕": "https://picsum.photos/seed/food/800/600",
    "냉면": "https://picsum.photos/seed/food/800/600",
    "삼계탕": "https://picsum.photos/seed/food/800/600",
    "감자탕": "https://picsum.photos/seed/food/800/600",
    "해물파전": "https://picsum.photos/seed/food/800/600",
    "보쌈": "https://picsum.photos/seed/food/800/600",
    "족발": "https://picsum.photos/seed/food/800/600",
    "닭갈비": "https://picsum.photos/seed/food/800/600",
    "안동찜닭": "https://picsum.photos/seed/food/800/600",
    "육개장": "https://picsum.photos/seed/food/800/600",
    "설렁탕": "https://picsum.photos/seed/food/800/600",
    "추어탕": "https://picsum.photos/seed/food/800/600",
    "알탕": "https://picsum.photos/seed/food/800/600",
    "동태찌개": "https://picsum.photos/seed/food/800/600",
    "청국장": "https://picsum.photos/seed/food/800/600",
    "김치볶음밥": "https://picsum.photos/seed/food/800/600",
    "오징어볶음": "https://picsum.photos/seed/food/800/600",
    "낙지볶음": "https://picsum.photos/seed/food/800/600",
    "부대찌개": "https://picsum.photos/seed/food/800/600",
    "소갈비찜": "https://picsum.photos/seed/food/800/600",
    "돼지갈비찜": "https://picsum.photos/seed/food/800/600",
    "아귀찜": "https://picsum.photos/seed/food/800/600",
    "해물찜": "https://picsum.photos/seed/food/800/600",
    "돼지불백": "https://picsum.photos/seed/food/800/600",
    "순대국": "https://picsum.photos/seed/food/800/600",
    "뼈해장국": "https://picsum.photos/seed/food/800/600",
    "콩나물국밥": "https://picsum.photos/seed/food/800/600",
    "닭곰탕": "https://picsum.photos/seed/food/800/600",
    "피순대": "https://picsum.photos/seed/food/800/600",
    "평양냉면": "https://picsum.photos/seed/food/800/600",
    "들기름 막국수": "https://picsum.photos/seed/food/800/600",
    "통닭": "https://picsum.photos/seed/food/800/600",
    "수육국밥": "https://picsum.photos/seed/food/800/600",
    "돌솥비빔밥": "https://picsum.photos/seed/food/800/600",
    "간장게장": "https://picsum.photos/seed/food/800/600",
    "양념게장": "https://picsum.photos/seed/food/800/600",
    "전복죽": "https://picsum.photos/seed/food/800/600",
    "꼬막비빔밥": "https://picsum.photos/seed/food/800/600",
    "매운탕": "https://picsum.photos/seed/food/800/600",
    "곱창전골": "https://picsum.photos/seed/food/800/600",
    "대창전골": "https://picsum.photos/seed/food/800/600",
    "순대볶음": "https://picsum.photos/seed/food/800/600",
    "김밥": "https://picsum.photos/seed/food/800/600",
    "만두": "https://picsum.photos/seed/food/800/600",
    "곱창": "https://picsum.photos/seed/food/800/600",
    "막창": "https://picsum.photos/seed/food/800/600",
    "회": "https://picsum.photos/seed/food/800/600",
    "죽": "https://picsum.photos/seed/food/800/600",
    "도시락": "https://picsum.photos/seed/food/800/600",
    "짜글이": "https://picsum.photos/seed/food/800/600",
    "조개구이": "https://picsum.photos/seed/food/800/600",
    "찜닭": "https://picsum.photos/seed/food/800/600",
    "칼국수": "https://picsum.photos/seed/food/800/600",
    "라면": "https://picsum.photos/seed/food/800/600",
    "육회": "https://picsum.photos/seed/food/800/600",
    "두부찌개": "https://picsum.photos/seed/food/800/600",
    "파전": "https://picsum.photos/seed/food/800/600",
    "김치전": "https://picsum.photos/seed/food/800/600",
    "감자전": "https://picsum.photos/seed/food/800/600",
    "석쇠불고기": "https://picsum.photos/seed/food/800/600",
    "김치찜": "https://picsum.photos/seed/food/800/600",
    "김피탕": "https://picsum.photos/seed/food/800/600",
    "파닭": "https://picsum.photos/seed/food/800/600",
    "떡볶이": "https://picsum.photos/seed/food/800/600",
    "순대": "https://picsum.photos/seed/food/800/600",

    // Japanese Food Images
    "초밥": "https://picsum.photos/seed/food/800/600",
    "라멘": "https://picsum.photos/seed/food/800/600",
    "돈까스": "https://picsum.photos/seed/food/800/600",
    "우동": "https://picsum.photos/seed/food/800/600",
    "야끼소바": "https://picsum.photos/seed/food/800/600",
    "오코노미야끼": "https://picsum.photos/seed/food/800/600",
    "텐동": "https://picsum.photos/seed/food/800/600",
    "가츠동": "https://picsum.photos/seed/food/800/600",
    "규동": "https://picsum.photos/seed/food/800/600",
    "사케동": "https://picsum.photos/seed/food/800/600",
    "장어덮밥": "https://picsum.photos/seed/food/800/600",
    "소바": "https://picsum.photos/seed/food/800/600",
    "스키야키": "https://picsum.photos/seed/food/800/600",
    "야키토리": "https://picsum.photos/seed/food/800/600",
    "타코야끼": "https://picsum.photos/seed/food/800/600",
    "모밀": "https://picsum.photos/seed/food/800/600",
    "나베": "https://picsum.photos/seed/food/800/600",
    "함박스테이크": "https://picsum.photos/seed/food/800/600",
    "카레라이스": "https://picsum.photos/seed/food/800/600",
    "된장라면": "https://picsum.photos/seed/food/800/600",
    "마제소바": "https://picsum.photos/seed/food/800/600",
    "오야코동": "https://picsum.photos/seed/food/800/600",
    "부타동": "https://picsum.photos/seed/food/800/600",
    "히츠마부시": "https://picsum.photos/seed/food/800/600",
    "몬자야키": "https://picsum.photos/seed/food/800/600",
    "가라아게": "https://picsum.photos/seed/food/800/600",
    "고로케": "https://picsum.photos/seed/food/800/600",
    "메밀소바": "https://picsum.photos/seed/food/800/600",
    "나가사키 짬뽕": "https://picsum.photos/seed/food/800/600",
    "양갈비": "https://picsum.photos/seed/food/800/600",

    // Chinese Food Images
    "짜장면": "https://picsum.photos/seed/food/800/600",
    "짬뽕": "https://picsum.photos/seed/food/800/600",
    "탕수육": "https://picsum.photos/seed/food/800/600",
    "마라탕": "https://picsum.photos/seed/food/800/600",
    "양꼬치": "https://picsum.photos/seed/food/800/600",
    "꿔바로우": "https://picsum.photos/seed/food/800/600",
    "마파두부": "https://picsum.photos/seed/food/800/600",
    "유린기": "https://picsum.photos/seed/food/800/600",
    "깐풍기": "https://picsum.photos/seed/food/800/600",
    "고추잡채": "https://picsum.photos/seed/food/800/600",
    "동파육": "https://picsum.photos/seed/food/800/600",
    "어향가지": "https://picsum.photos/seed/food/800/600",
    "토마토계란볶음": "https://picsum.photos/seed/food/800/600",
    "울면": "https://picsum.photos/seed/food/800/600",
    "기스면": "https://picsum.photos/seed/food/800/600",
    "중국냉면": "https://picsum.photos/seed/food/800/600",
    "마라샹궈": "https://picsum.photos/seed/food/800/600",
    "훠궈": "https://picsum.photos/seed/food/800/600",
    "볶음밥": "https://picsum.photos/seed/food/800/600",
    "잡채밥": "https://picsum.photos/seed/food/800/600",
    "우육면": "https://picsum.photos/seed/food/800/600",
    "탄탄면": "https://picsum.photos/seed/food/800/600",
    "지삼선": "https://picsum.photos/seed/food/800/600",
    "난자완스": "https://picsum.photos/seed/food/800/600",
    "라조기": "https://picsum.photos/seed/food/800/600",
    "해파리냉채": "https://picsum.photos/seed/food/800/600",
    "멘보샤": "https://picsum.photos/seed/food/800/600",
    "크림새우": "https://picsum.photos/seed/food/800/600",
    "누룽지탕": "https://picsum.photos/seed/food/800/600",
    "유산슬": "https://picsum.photos/seed/food/800/600",
    "딤섬": "https://picsum.photos/seed/food/800/600",

    // Asian Food Images
    "쌀국수": "https://picsum.photos/seed/food/800/600",
    "팟타이": "https://picsum.photos/seed/food/800/600",
    "나시고랭": "https://picsum.photos/seed/food/800/600",
    "분짜": "https://picsum.photos/seed/food/800/600",
    "반미": "https://picsum.photos/seed/food/800/600",
    "똠얌꿍": "https://picsum.photos/seed/food/800/600",
    "월남쌈": "https://picsum.photos/seed/food/800/600",
    "푸팟퐁커리": "https://picsum.photos/seed/food/800/600",
    "카오팟": "https://picsum.photos/seed/food/800/600",
    "쏨땀": "https://picsum.photos/seed/food/800/600",
    "반세오": "https://picsum.photos/seed/food/800/600",
    "껌승": "https://picsum.photos/seed/food/800/600",
    "미고랭": "https://picsum.photos/seed/food/800/600",
    "락사": "https://picsum.photos/seed/food/800/600",
    "사테": "https://picsum.photos/seed/food/800/600",
    "그린 커리": "https://picsum.photos/seed/food/800/600",
    "레드 커리": "https://picsum.photos/seed/food/800/600",
    "파인애플 볶음밥": "https://picsum.photos/seed/food/800/600",
    "모닝글로리 볶음": "https://picsum.photos/seed/food/800/600",
    "얌운센": "https://picsum.photos/seed/food/800/600",
    "탄두리 치킨": "https://picsum.photos/seed/food/800/600",
    "치킨 마크니": "https://picsum.photos/seed/food/800/600",
    "팔락 파니르": "https://picsum.photos/seed/food/800/600",
    "사모사": "https://picsum.photos/seed/food/800/600",
    "난": "https://picsum.photos/seed/food/800/600",
    "달프라이": "https://picsum.photos/seed/food/800/600",
    "샤브샤브": "https://picsum.photos/seed/food/800/600",

    // European Food Images
    "파스타": "https://picsum.photos/seed/food/800/600",
    "피자": "https://picsum.photos/seed/food/800/600",
    "리조또": "https://picsum.photos/seed/food/800/600",
    "라자냐": "https://picsum.photos/seed/food/800/600",
    "뇨끼": "https://picsum.photos/seed/food/800/600",
    "봉골레 파스타": "https://picsum.photos/seed/food/800/600",
    "까르보나라": "https://picsum.photos/seed/food/800/600",
    "알리오 올리오": "https://picsum.photos/seed/food/800/600",
    "로제 파스타": "https://picsum.photos/seed/food/800/600",
    "토마토 스파게티": "https://picsum.photos/seed/food/800/600",
    "필라프": "https://picsum.photos/seed/food/800/600",
    "그라탕": "https://picsum.photos/seed/food/800/600",
    "빠에야": "https://picsum.photos/seed/food/800/600",
    "감바스 알 아히요": "https://picsum.photos/seed/food/800/600",
    "하몽": "https://picsum.photos/seed/food/800/600",
    "또르띠야 에스파뇰라": "https://picsum.photos/seed/food/800/600",
    "피쉬 앤 칩스": "https://picsum.photos/seed/food/800/600",
    "잠봉뵈르": "https://picsum.photos/seed/food/800/600",
    "슈니첼": "https://picsum.photos/seed/food/800/600",
    "굴라쉬": "https://picsum.photos/seed/food/800/600",
    "수블라키": "https://picsum.photos/seed/food/800/600",
    "프레첼": "https://picsum.photos/seed/food/800/600",

    // American Food Images
    "스테이크": "https://picsum.photos/seed/food/800/600",
    "햄버거": "https://picsum.photos/seed/food/800/600",
    "클럽 샌드위치": "https://picsum.photos/seed/food/800/600",
    "에그 베네딕트": "https://picsum.photos/seed/food/800/600",
    "프렌치 토스트": "https://picsum.photos/seed/food/800/600",
    "수비드 목살 스테이크": "https://picsum.photos/seed/food/800/600",
    "대파 크림치즈 베이글": "https://picsum.photos/seed/food/800/600",
    "브리스킷": "https://picsum.photos/seed/food/800/600",
    "바베큐 플래터": "https://picsum.photos/seed/food/800/600",
    "미트볼 스파게티": "https://picsum.photos/seed/food/800/600",
    "오믈렛": "https://picsum.photos/seed/food/800/600",
    "포케": "https://picsum.photos/seed/food/800/600",
    "샐러드": "https://picsum.photos/seed/food/800/600",

    // Latin American Food Images
    "세비체": "https://picsum.photos/seed/food/800/600",
    "로모 살타도": "https://picsum.photos/seed/food/800/600",
    "아사도": "https://picsum.photos/seed/food/800/600",
    "엠파나다": "https://picsum.photos/seed/food/800/600",
    "페이조아다": "https://picsum.photos/seed/food/800/600",
    "슈하스코": "https://picsum.photos/seed/food/800/600",
    "아레파": "https://picsum.photos/seed/food/800/600",
    "반데하 파이사": "https://picsum.photos/seed/food/800/600",
    "타코": "https://picsum.photos/seed/food/800/600",
    "부리또": "https://picsum.photos/seed/food/800/600",
    "퀘사디아": "https://picsum.photos/seed/food/800/600",
    "엔칠라다": "https://picsum.photos/seed/food/800/600",
    "나초": "https://picsum.photos/seed/food/800/600",
    "파히타": "https://picsum.photos/seed/food/800/600",
    "칠리 콘 카르네": "https://picsum.photos/seed/food/800/600",
    "과카몰리": "https://picsum.photos/seed/food/800/600",
    "치미창가": "https://picsum.photos/seed/food/800/600",

    // Middle Eastern Food Images
    "케밥": "https://picsum.photos/seed/food/800/600",
    "후무스": "https://picsum.photos/seed/food/800/600",
    "팔라펠": "https://picsum.photos/seed/food/800/600",
    "타불레": "https://picsum.photos/seed/food/800/600",
    "샥슈카": "https://picsum.photos/seed/food/800/600",
    "피타 브레드": "https://picsum.photos/seed/food/800/600",
    "무사카": "https://picsum.photos/seed/food/800/600",
    "코프타": "https://picsum.photos/seed/food/800/600",

    // Bunsik Images
    "떡볶이": "https://picsum.photos/seed/food/800/600",
    "순대": "https://picsum.photos/seed/food/800/600",
    "튀김": "https://picsum.photos/seed/food/800/600",
    "어묵": "https://picsum.photos/seed/food/800/600",
    "핫도그": "https://picsum.photos/seed/food/800/600",
    "김밥": "https://picsum.photos/seed/food/800/600",
    "라면": "https://picsum.photos/seed/food/800/600",
    "떡꼬치": "https://picsum.photos/seed/food/800/600",
    "만두": "https://picsum.photos/seed/food/800/600",

    // Dessert Images
    "케이크": "https://picsum.photos/seed/food/800/600",
    "마카롱": "https://picsum.photos/seed/food/800/600",
    "아이스크림": "https://picsum.photos/seed/food/800/600",
    "빙수": "https://picsum.photos/seed/food/800/600",
    "와플": "https://picsum.photos/seed/food/800/600",
    "크로플": "https://picsum.photos/seed/food/800/600",
    "허니브레드": "https://picsum.photos/seed/food/800/600",
    "타르트": "https://picsum.photos/seed/food/800/600",
    "스콘": "https://picsum.photos/seed/food/800/600",
    "쿠키": "https://picsum.photos/seed/food/800/600",
    "도넛": "https://picsum.photos/seed/food/800/600",
    "에그타르트": "https://picsum.photos/seed/food/800/600",
    "푸딩": "https://picsum.photos/seed/food/800/600",
    "티라미수": "https://picsum.photos/seed/food/800/600",
    "다쿠아즈": "https://picsum.photos/seed/food/800/600",
    "망고 빙수": "https://picsum.photos/seed/food/800/600",
    "소금빵": "https://picsum.photos/seed/food/800/600",
    "맘모스빵": "https://picsum.photos/seed/food/800/600",
    "슈크림빵": "https://picsum.photos/seed/food/800/600",
    "단팥빵": "https://picsum.photos/seed/food/800/600",
    "카스테라": "https://picsum.photos/seed/food/800/600",
    "붕어빵": "https://picsum.photos/seed/food/800/600",
    "호떡": "https://picsum.photos/seed/food/800/600",
    "약과": "https://picsum.photos/seed/food/800/600",
    "개성주악": "https://picsum.photos/seed/food/800/600",
    "탕후루": "https://picsum.photos/seed/food/800/600",
    "꽈배기": "https://picsum.photos/seed/food/800/600",
    "군고구마": "https://picsum.photos/seed/food/800/600",
    "군밤": "https://picsum.photos/seed/food/800/600",
    "뻥튀기": "https://picsum.photos/seed/food/800/600",
    "달고나": "https://picsum.photos/seed/food/800/600",
    "츄러스": "https://picsum.photos/seed/food/800/600",
    "알감자": "https://picsum.photos/seed/food/800/600",
    "인절미": "https://picsum.photos/seed/food/800/600",
    "꿀떡": "https://picsum.photos/seed/food/800/600",
    "송편": "https://picsum.photos/seed/food/800/600",
    "아메리카노": "https://picsum.photos/seed/food/800/600",
    "카페라떼": "https://picsum.photos/seed/food/800/600",
    "바닐라라떼": "https://picsum.photos/seed/food/800/600",
    "카푸치노": "https://picsum.photos/seed/food/800/600",
    "스무디": "https://picsum.photos/seed/food/800/600",
    "에이드": "https://picsum.photos/seed/food/800/600",
    "과일주스": "https://picsum.photos/seed/food/800/600",
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
    let imageUrl = menuImageMap[menuName];

    // 만약 이미지 URL이 기본 플레이스홀더(임시)라면, 메뉴 이름으로 AI 이미지를 생성해서 보여줍니다.
    if (!imageUrl || imageUrl === "https://picsum.photos/seed/food/800/600") {
      imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(menuName)}%20delicious%20food%20photography,%20cinematic%20lighting,%20high%20resolution,%20appetizing?width=800&height=600&nologo=true`;
    }

    const photographer = "Web/AI"; // Photographer credit can be generic if using curated images
    const photographerUrl = "#";

    illustrationDiv.style.display = "flex";
    illustrationDiv.innerHTML = `<div class="img-loading">🔍 사진 불러오는 중...</div>`;

    const img = new Image();
    img.onload = () => {
      illustrationDiv.innerHTML = `
        <img src="${imageUrl}" alt="${menuName}" class="food-img">
        <div class="photographer-credit">
          Photo by <a href="${photographerUrl}" target="_blank">${photographer}</a>
          on <a href="https://picsum.photos" target="_blank">Picsum.photos</a>
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
