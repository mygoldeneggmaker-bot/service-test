
document.addEventListener('DOMContentLoaded', () => {
    const menu = {
        korean: ["비빔밥", "김치찌개", "된장찌개", "불고기", "잡채", "순두부찌개", "제육볶음", "갈비탕", "냉면", "삼계탕", "감자탕", "해물파전", "보쌈", "족발", "닭갈비", "안동찜닭", "육개장", "설렁탕", "추어탕", "알탕", "동태찌개", "청국장", "김치볶음밥", "오징어볶음", "낙지볶음", "부대찌개", "소갈비찜", "돼지갈비찜", "아귀찜", "해물찜"],
        japanese: ["초밥", "라멘", "돈까스", "우동", "야끼소바", "오코노미야끼", "텐동", "가츠동", "규동", "사케동", "장어덮밥", "소바", "스키야키", "샤브샤브", "야키토리", "타코야끼", "모밀", "나베", "함박스테이크", "카레라이스"],
        chinese: ["짜장면", "짬뽕", "탕수육", "마라탕", "양꼬치", "꿔바로우", "마파두부", "유린기", "깐풍기", "고추잡채", "동파육", "어향가지", "토마토계란볶음", "울면", "기스면", "중국냉면", "마라샹궈", "훠궈", "볶음밥", "잡채밥"],
        western: ["파스타", "피자", "스테이크", "햄버거", "리조또", "샐러드", "클럽 샌드위치", "감바스 알 아히요", "라자냐", "뇨끼", "에그 베네딕트", "프렌치 토스트", "빠네 파스타", "봉골레 파스타", "까르보나라", "알리오 올리오", "로제 파스타", "토마토 스파게티", "필라프", "그라탕"],
        southeast_asian: ["쌀국수", "팟타이", "나시고랭", "분짜", "반미", "똠얌꿍", "월남쌈", "푸팟퐁커리", "카오팟", "쏨땀", "반세오", "껌승", "미고랭", "락사", "사테"],
        mexican: ["타코", "부리또", "퀘사디아", "엔칠라다", "나초", "파히타", "토스타다", "타말레", "칠리 콘 카르네", "과카몰리"],
        dessert: ["케이크", "마카롱", "아이스크림", "빙수", "와플", "크로플", "허니브레드", "타르트", "스콘", "쿠키", "도넛", "에그타르트", "푸딩", "티라미수", "다쿠아즈"]
    };

    let currentCategory = 'all';
    let userLocation = null;
    let isLoading = false;

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

        const menuItems = (currentCategory === 'all') ? Object.values(menu).flat() : menu[currentCategory];
        if (!menuItems || menuItems.length === 0) {
            isLoading = false;
            return;
        }
        
        recommendationArea.classList.remove("show");

        illustrationDiv.style.display = "flex";
        textP.textContent = "두구두구... 🥁";
        illustrationDiv.innerHTML = '';
        restaurantSearchArea.innerHTML = '';
        recommendationArea.classList.add("show");

        setTimeout(() => {
            const selectedMenu = menuItems[Math.floor(Math.random() * menuItems.length)];
            
            illustrationDiv.style.display = "none";
            textP.textContent = selectedMenu;
            createActionButtons(selectedMenu);
            
            isLoading = false;
        }, 300);
    }

    function createActionButtons(menuItem) {
        restaurantSearchArea.innerHTML = '';
        
        const query = encodeURIComponent(menuItem);

        const buttonsWrapper = document.createElement('div');
        buttonsWrapper.className = 'action-buttons-wrapper';

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
        
        restaurantSearchArea.appendChild(buttonsWrapper);
    }

    function generateMenuBoard() {
        const categoryMap = {
            korean: '한식', japanese: '일식', chinese: '중식', western: '양식',
            southeast_asian: '동남아', mexican: '멕시칸', dessert: '디저트'
        };

        let boardHTML = '<h2>- 전체 메뉴판 -</h2><div class="menu-grid">';
        for (const category in categoryMap) {
            if (menu[category]) {
                boardHTML += `
                    <div class="menu-card">
                        <h3>${categoryMap[category]}</h3>
                        <p>${menu[category].join(', ')}</p>
                    </div>
                `;
            }
        }
        boardHTML += '</div>';
        menuBoard.innerHTML = boardHTML;
    }

    generateMenuBoard();
});
