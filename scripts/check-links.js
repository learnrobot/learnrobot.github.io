const fs = require('fs');
const vm = require('vm');

async function checkLinks() {
    console.log("🔍 링크 검사를 시작합니다...\n");

    // 1. data.js 파일 읽어오기
    const code = fs.readFileSync('./data.js', 'utf8');
    
    // 2. 파일 안의 const links = [...] 데이터를 자바스크립트 배열로 변환
    const context = {};
    vm.createContext(context);
    vm.runInContext(code, context);
    const links = context.links;

    const brokenLinks = [];

    // 3. 각 URL에 접속해보고 상태 확인하기
    for (const item of links) {
        if (!item.url) continue;

        try {
            // 사이트에 살짝 접속(HEAD 요청)해보기
            const response = await fetch(item.url, { 
                method: 'HEAD',
                headers: { 'User-Agent': 'Mozilla/5.0' } // 로봇 봇 차단 방지용
            });

            if (!response.ok) {
                console.log(`❌ [오류 ${response.status}] ${item.title}: ${item.url}`);
                brokenLinks.push(`${item.title} (${item.url}) - Status: ${response.status}`);
            } else {
                console.log(`✅ [정상] ${item.title}`);
            }
        } catch (error) {
            console.log(`⚠️ [접속 불가] ${item.title}: ${item.url}`);
            brokenLinks.push(`${item.title} (${item.url}) - Error: 접속 실패`);
        }
    }

    // 4. 결과 출력
    console.log("\n==============================");
    if (brokenLinks.length > 0) {
        console.log(`🚨 주의! ${brokenLinks.length}개의 끊어진 링크(404 등)가 발견되었습니다.`);
        console.log(brokenLinks.join('\n'));
        process.exit(1); // 오류가 있음을 GitHub Actions에 알림
    } else {
        console.log("🎉 모든 링크가 정상적으로 작동합니다!");
        process.exit(0);
    }
}

checkLinks();
