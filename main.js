
document.addEventListener('DOMContentLoaded', () => {
    const menu = {
        korean: ["비빔밥", "김치찌개", "된장찌개", "불고기", "잡채", "순두부찌개", "제육볶음", "갈비탕", "냉면", "삼계탕", "감자탕", "해물파전", "보쌈", "족발", "닭갈비", "안동찜닭", "육개장", "설렁탕", "추어탕", "알탕", "동태찌개", "청국장", "김치볶음밥", "오징어볶음", "낙지볶음", "부대찌개", "소갈비찜", "돼지갈비찜", "아귀찜", "해물찜", "돼지불백", "순대국", "뼈해장국", "콩나물국밥", "닭곰탕", "피순대", "평양냉면", "들기름 막국수", "통닭", "수육국밥", "돌솥비빔밥", "간장게장", "양념게장", "전복죽", "꼬막비빔밥", "매운탕", "곱창전골", "대창전골", "순대볶음", "김밥", "만두", "곱창", "막창", "회", "죽", "도시락", "짜글이", "조개구이", "찜닭", "칼국수", "라면", "육회", "두부찌개", "파전", "김치전", "감자전", "석쇠불고기", "김치찜", "김피탕", "파닭", "떡볶이", "순대", "튀김", "어묵", "핫도그"],
        japanese: ["초밥", "라멘", "돈까스", "우동", "야끼소바", "오코노미야끼", "텐동", "가츠동", "규동", "사케동", "장어덮밥", "소바", "스키야키", "야키토리", "타코야끼", "모밀", "나베", "함박스테이크", "카레라이스", "된장라면", "마제소바", "오야코동", "부타동", "히츠마부시", "몬자야키", "가라아게", "고로케", "메밀소바", "나가사키 짬뽕", "양갈비"],
        chinese: ["짜장면", "짬뽕", "탕수육", "마라탕", "양꼬치", "꿔바로우", "마파두부", "유린기", "깐풍기", "고추잡채", "동파육", "어향가지", "토마토계란볶음", "울면", "기스면", "중국냉면", "마라샹궈", "훠궈", "볶음밥", "잡채밥", "우육면", "탄탄면", "지삼선", "난자완스", "라조기", "해파리냉채", "멘보샤", "크림새우", "누룽지탕", "유산슬", "딤섬"],
        asian: ["쌀국수", "팟타이", "나시고랭", "분짜", "반미", "똠얌꿍", "월남쌈", "푸팟퐁커리", "카오팟", "쏨땀", "반세오", "껌승", "미고랭", "락사", "사테", "그린 커리", "레드 커리", "파인애플 볶음밥", "모닝글로리 볶음", "얌운센", "탄두리 치킨", "치킨 마크니", "팔락 파니르", "사모사", "난", "달프라이", "샤브샤브"],
        european: ["파스타", "피자", "리조또", "라자냐", "뇨끼", "봉골레 파스타", "까르보나라", "알리오 올리오", "로제 파스타", "토마토 스파게티", "필라프", "그라탕", "빠에야", "감바스 알 아히요", "하몽", "또르띠야 에스파뇰라", "피쉬 앤 칩스", "잠봉뵈르", "슈니첼", "굴라쉬", "수블라키", "프레첼"],
        american: ["스테이크", "햄버거", "클럽 샌드위치", "에그 베네딕트", "프렌치 토스트", "수비드 목살 스테이크", "대파 크림치즈 베이글", "브리스킷", "바베큐 플래터", "미트볼 스파게티", "오믈렛", "포케", "샐러드"],
        latin_american: ["세비체", "로모 살타도", "아사도", "엠파나다", "페이조아다", "슈하스코", "아레파", "반데하 파이사", "타코", "부리또", "퀘사디아", "엔칠라다", "나초", "파히타", "칠리 콘 카르네", "과카몰리", "치미창가"],
        middle_eastern: ["케밥", "후무스", "팔라펠", "타불레", "샥슈카", "피타 브레드", "무사카", "코프타"],
        dessert: ["케이크", "마카롱", "아이스크림", "빙수", "와플", "크로플", "허니브레드", "타르트", "스콘", "쿠키", "도넛", "에그타르트", "푸딩", "티라미수", "다쿠아즈", "망고 빙수", "소금빵", "맘모스빵", "슈크림빵", "단팥빵", "카스테라", "붕어빵", "호떡", "약과", "개성주악", "탕후루", "꽈배기", "군고구마", "군밤", "뻥튀기", "달고나", "츄러스", "떡꼬치", "알감자", "인절미", "꿀떡", "송편", "아메리카노", "카페라떼", "바닐라라떼", "카푸치노", "스무디", "에이드", "과일주스", "해물파전", "김밥", "만두", "떡볶이", "순대", "튀김", "어묵", "핫도그", "파전", "김치전", "감자전", "타코야끼", "가라아게", "고로케", "멘보샤", "크림새우", "딤섬", "피자", "프레첼", "프렌치 토스트", "오믈렛", "나초", "엠파나다", "아레파", "타코", "퀘사디아"]
    };

    let currentCategory = 'all';
    let userLocation = null;
    let isLoading = false;
    let recommendationHistory = [];
    const HISTORY_SIZE = 10; 

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

    navigator.geolocation.getCurrentPosition(position => {
        userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
    }, () => {
        console.warn("User location access denied. Some map features may be limited.");
    });

    categoryBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category;
        });
    });

    recommendBtn.addEventListener("click", handleRecommendation);
    viewAllBtn.addEventListener("click", () => modal.style.display = "flex");
    closeBtn.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    function handleRecommendation() {
        if (isLoading) return;
        isLoading = true;

        let menuItems;
        if (currentCategory === 'all') {
            const allExceptDessert = { ...menu };
            delete allExceptDessert.dessert;
            menuItems = Object.values(allExceptDessert).flat();
        } else {
            menuItems = menu[currentCategory];
        }

        if (!menuItems || menuItems.length === 0) {
            isLoading = false;
            return;
        }
        
        recommendationArea.classList.remove("show");
        textP.classList.remove("final-result");

        illustrationDiv.style.display = "none";
        textP.textContent = "두구두구... 🥁";
        illustrationDiv.innerHTML = '';
        restaurantSearchArea.innerHTML = '';
        recommendationArea.classList.add("show");

        setTimeout(() => {
            let selectedMenu;
            let attempts = 0;
            const maxAttempts = menuItems.length * 2;

            do {
                selectedMenu = menuItems[Math.floor(Math.random() * menuItems.length)];
                attempts++;
            } while (recommendationHistory.includes(selectedMenu) && menuItems.length > recommendationHistory.length && attempts < maxAttempts);

            recommendationHistory.push(selectedMenu);
            if (recommendationHistory.length > HISTORY_SIZE) {
                recommendationHistory.shift();
            }

            console.log(`Selected menu: ${selectedMenu}`);
            
            // Clear illustrationDiv and ensure it's not displayed
            illustrationDiv.innerHTML = '';
            illustrationDiv.style.display = 'none';

            textP.textContent = selectedMenu;
            textP.classList.add("final-result");
            
            const buttonsWrapper = createActionButtons(selectedMenu);
            restaurantSearchArea.appendChild(buttonsWrapper); // Append wrapper immediately

            // Smoothly show buttons after a short delay
            setTimeout(() => {
                buttonsWrapper.classList.add('show');
                isLoading = false;
            }, 300); // 0.3 seconds after menu name appears
        }, 300); // Initial delay for "두구두구..."

    }

    function createActionButtons(menuItem) {
        restaurantSearchArea.innerHTML = ''; // Clear previous buttons if any
        
        const query = encodeURIComponent(menuItem);

        const buttonsWrapper = document.createElement('div');
        buttonsWrapper.className = 'action-buttons-wrapper'; // No 'show' class here initially

        const naverSearchButton = document.createElement('a');
        naverSearchButton.href = `https://search.naver.com/search.naver?query=${query}`;
        naverSearchButton.target = '_blank';
        naverSearchButton.className = 'action-btn naver-search-btn';
        naverSearchButton.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> 네이버 검색`;
        buttonsWrapper.appendChild(naverSearchButton);

        const maps = [
            { name: 'Google', url: `https://www.google.com/maps/search/?api=1&query=${query}${userLocation ? `&location=${userLocation.lat},${userLocation.lng}` : ''}` },
            { name: 'Naver', url: `https://map.naver.com/v5/search/${query}` },
            { name: 'Kakao', url: `https://map.kakao.com/link/search/${query}` }
        ];

        maps.forEach(map => {
            const button = document.createElement('a');
            button.href = map.url;
            button.target = '_blank';
            button.className = 'action-btn map-btn';
            button.innerHTML = `<i class="fa-solid fa-map-location-dot"></i> ${map.name} 지도`;
            buttonsWrapper.appendChild(button);
        });
        
        return buttonsWrapper; // Return the wrapper
    }

    function generateMenuBoard() {
        const categoryMap = {
            korean: '한식',
            japanese: '일식',
            chinese: '중식',
            asian: '아시안',
            european: '유러피안',
            american: '아메리칸',
            latin_american: '남미',
            middle_eastern: '중동',
            dessert: '디저트/간식 🍰'
        };

        let boardHTML = '<h2>- 전체 메뉴판 -</h2><div class="menu-accordion">';
        for (const category in categoryMap) {
            if (menu[category] && menu[category].length > 0) {
                boardHTML += `
                    <details>
                        <summary>${categoryMap[category]}</summary>
                        <ul class="menu-items">
                            ${menu[category].map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </details>
                `;
            }
        }
        boardHTML += '</div>';
        menuBoard.innerHTML = boardHTML;
    }

    generateMenuBoard();
});
