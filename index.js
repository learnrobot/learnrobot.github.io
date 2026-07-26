const functions = require("firebase-functions");
const axios = require("axios");

exports.getRoboticsNews = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');

    try {
        const GNEWS_API_KEY = "12bf1f962a7b8f69dc71ae9ce57f28be"; 

        // 1. 유료(Paywall) 및 낚시성 사이트 차단 (이것은 국가 차별이 아닌 '기능적' 불량 매체 차단이므로 유지)
        const paidSitesBlacklist = [
            "bloomberg.com", "wsj.com", "nytimes.com", 
            "ft.com", "thetimes.co.uk", "wired.com", "businessinsider.com",
            "economist.com", "hbr.org", "reuters.com", "manilatimes.net", "thehindubusinessline.com",
            "europesays.com", "europesays" 
        ];

        // 🚨 특정 국가를 배제하던 blockedRegionKeywords 배열은 도덕적, 논리적 이유로 완전히 삭제했습니다.

        // 2. [긍정적 필터링] 로봇/AI 주류 국가 및 글로벌 메이저 도메인 화이트리스트 ("여기만 돼!")
        const mainstreamTLDs = [
            ".com", ".org", ".net", ".io", ".co", // 글로벌 메이저 및 테크 도메인
            ".us", ".uk", ".ca", ".de", ".fr", ".jp", ".kr", ".au", ".ch", ".sg" // AI/로봇 선도 국가 도메인
        ];

        const response = await axios.get("https://gnews.io/api/v4/search", {
            params: {
                q: 'robotics OR robot',
                lang: 'en',
                sortby: 'publishedAt',
                max: 30, 
                apikey: GNEWS_API_KEY
            }
        });

        // 3. 서버 내부 이중 필터링 (화이트리스트 기반)
        let cleanArticles = response.data.articles || [];
        cleanArticles = cleanArticles.filter(article => {
            const url = (article.url || "").toLowerCase();
            const sourceName = (article.source.name || "").toLowerCase().replace(/\s+/g, "");

            // 유료/낚시 사이트인가? (기능적 차단)
            const isPaid = paidSitesBlacklist.some(paid => 
                url.includes(paid) || sourceName.includes(paid)
            );

            // 허용된 주류 도메인에 속하는가? (긍정적 허용)
            const isMainstreamDomain = mainstreamTLDs.some(tld => 
                url.endsWith(tld) || url.includes(tld + "/")
            );

            // 유료/낚시 사이트가 '아니면서', 우리가 '허용한 도메인'인 경우만 통과!
            return !isPaid && isMainstreamDomain;
        });

        res.status(200).json({ articles: cleanArticles.slice(0, 10) });
    } catch (error) {
        console.error("API Fetch Error:", error);
        res.status(500).json({ error: error.message });
    }
});