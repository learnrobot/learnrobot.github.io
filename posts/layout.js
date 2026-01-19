// layout.js - 헤더와 푸터를 한방에 관리하는 파일

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. 헤더 (상단 메뉴) 만들기
    const headerContent = `
        <header style="background: rgba(30, 30, 30, 0.95); height: 80px; display: flex; align-items: center; justify-content: space-between; padding: 0 2.5rem; border-bottom: 1px solid rgba(255, 251, 3, 0.2);">
            <a href="../index.html" class="logo" style="text-decoration:none; font-size: 1.8rem; font-weight: 900; letter-spacing: 1px; font-family: 'Chakra Petch', sans-serif;">
                <span style="color: #fff;">LEARN<span style="color: #FFFB03;">ROBOT</span></span>
            </a>
            
            <a href="../insights.html" style="color: #fff; text-decoration:none; font-family: 'Chakra Petch', sans-serif; font-weight: bold;">
                <i class="fas fa-arrow-left"></i> Back to Insights
            </a>
        </header>
    `;

    // 2. 푸터 (하단 카피라이트) 만들기
    const footerContent = `
        <div style="text-align: center; margin-bottom: 30px;">
            <a href="../insights.html" class="back-btn">← Back to Insights</a>
        </div>

        <footer style="text-align:center; padding: 40px; border-top: 1px solid #333; margin-top: 40px; color: #666; font-family: 'Chakra Petch', sans-serif;">
            &copy; 2026 Learn Robot. All rights reserved.
        </footer>
    `;

    // HTML의 특정 위치에 밀어넣기
    const headerPlaceholder = document.getElementById("common-header");
    const footerPlaceholder = document.getElementById("common-footer");

    if (headerPlaceholder) headerPlaceholder.innerHTML = headerContent;
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerContent;
});