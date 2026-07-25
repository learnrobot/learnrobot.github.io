const functions = require("firebase-functions");
const axios = require("axios");

exports.getRoboticsNews = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');

    try {
        const GNEWS_API_KEY = "여기에_GNEWS_API_KEY를_넣으세요"; 

        // 1. 로봇 주류 국가 목록
        const mainstreamCountries = ['us', 'gb', 'ca', 'de', 'fr', 'jp', 'kr'];
        const selectedCountry = mainstreamCountries[Math.floor(Math.random() * mainstreamCountries.length)];

        // 2. 유료(Paywall) 사이트 블랙리스트
        const paidSitesBlacklist = [
            "bloomberg.com", "wsj.com", "nytimes.com", 
            "ft.com", "thetimes.co.uk", "wired.com", "businessinsider.com",
            "economist.com", "hbr.org", "reuters.com", "manilatimes.net", "thehindubusinessline.com"
        ];

        // 🚨 3. [핵심 추가] 비주류 국가(인도, 필리핀 등) 언론사 키워드 및 도메인 차단 목록
        const blockedRegionKeywords = [
            ".in", ".ph", "hindu", "manila", "deccan", "timesofindia", 
            "indianexpress", "philstar", "tribune.ph", "ani news", "ndtv"
        ];

        const response = await axios.get("https://gnews.io/api/v4/search", {
            params: {
                q: 'robotics OR robot',
                country: selectedCountry,
                lang: 'en',
                sortby: 'publishedAt',
                max: 10,
                apikey: GNEWS_API_KEY
            }
        });

        // 🚨 4. 서버 내부에서 유료 사이트 + 인도/필리핀 언론사 2중 강제 폐기
        let cleanArticles = response.data.articles || [];
        cleanArticles = cleanArticles.filter(article => {
            const url = (article.url || "").toLowerCase();
            const sourceName = (article.source.name || "").toLowerCase();

            // 유료 사이트인가?
            const isPaid = paidSitesBlacklist.some(paid => url.includes(paid));
            
            // 인도, 필리핀 등 비주류 언론사인가?
            const isBlockedRegion = blockedRegionKeywords.some(kw => 
                url.includes(kw) || sourceName.includes(kw)
            );

            // 둘 다 아닌 정상적인 뉴스만 남김
            return !isPaid && !isBlockedRegion;
        });

        res.status(200).json({ articles: cleanArticles });
    } catch (error) {
        console.error("API Fetch Error:", error);
        res.status(500).json({ error: error.message });
    }
});