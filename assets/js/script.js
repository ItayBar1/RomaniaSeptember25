// Main client-side logic for the Romania trip itinerary site
// =============================
// Itinerary data
// =============================
const itineraryData = [
    {
        day: 1,
        date: '7.9.25',
        title: 'נחיתה ובוקרשט רגועה',
        locations: ['Bucharest'],
        intro: 'נחיתה לפנות בוקר והתארגנות בבוקרשט, כולל סיור רגוע בעיר, פארק צ’ישמיג’יו והעיר העתיקה.',
        plan: [
            { time: 'לפנות בוקר', icon: '✈️', description: 'נחיתה בנמל התעופה אוטופני (OTP).' },
            { time: 'בוקר', icon: '🛏️', description: 'מנוחה ולינה בקרבת שדה התעופה.' },
            { time: 'צהריים', icon: '🌳', description: 'טיול רגלי בפארק צ’ישמיג’יו ובמרכז הישן.' },
            { time: 'אחר הצהריים', icon: '🏛️', description: 'תצפית חיצונית על ארמון הפרלמנט.' },
            { time: 'ערב', icon: '🍽️', description: 'ארוחת ערב ולינה בבוקרשט.' },
        ],
        highlights: ['פארק צ’ישמיג’יו', 'ארמון הפרלמנט (מבחוץ)', 'העיר העתיקה'],
        driveTime: 1,
        activityTime: 6,
    },
    {
        day: 2,
        date: '8.9.25',
        title: 'בוקרשט לסכר וידרארו',
        locations: ['Bucharest', 'Vidraru Dam', 'Valea lui Stan'],
        intro: 'איסוף הרכב בשעה 11:00 ונסיעה צפונה לסכר וידרארו, כולל מסלול קניוני Valea lui Stan.',
        plan: [
            { time: '11:00', icon: '🚗', description: 'איסוף הרכב ויציאה מבוקרשט לסכר וידרארו.' },
            { time: 'צהריים', icon: '🥾', description: 'מסלול Valea lui Stan בקניון עם סולמות (3–4 שעות).' },
            { time: 'ערב', icon: '🏡', description: 'לינה באזור סכר וידרארו.' },
        ],
        highlights: ['Valea lui Stan', 'סכר וידרארו'],
        driveTime: 3,
        activityTime: 4,
    },
    {
        day: 3,
        date: '9.9.25',
        title: 'דרך הטראנספגרשן לסיביו',
        locations: ['Transfagarasan', 'Balea Lake', 'Sibiu'],
        intro: 'המשך נסיעה בכביש הטראנספגרשן, עצירות תצפית ואגם ביילה, ירידה לצד הצפוני וסיור ערב בסיביו.',
        plan: [
            { time: 'בוקר', icon: '🚗', description: 'נסיעה על כביש הטראנספגרשן ועלייה להר.' },
            { time: 'צהריים', icon: '🏔️', description: 'עצירה באגם ביילה ובנקודות תצפית נוספות.' },
            { time: 'אחר הצהריים', icon: '⬇️', description: 'ירידה לצד הצפוני והמשך לסיביו.' },
            { time: 'ערב', icon: '🌆', description: 'טיול ערב בסיביו – הכיכר הגדולה וגשר השקרים.' },
        ],
        highlights: ['כביש הטראנספגרשן', 'אגם ביילה', 'סיביו'],
        driveTime: 4,
        activityTime: 5,
    },
    {
        day: 4,
        date: '10.9.25',
        title: 'מסיביו לואטרה דורניי דרך סיגישוארה וטארגו מורש',
        locations: ['Sibiu', 'Sighisoara', 'Targu Mures', 'Bicaz Canyon', 'Lacul Rosu', 'Vatra Dornei'],
        intro: 'נסיעה ארוכה צפונה עם עצירות בסיגישוארה, טארגו מורש וקניון ביקאז עם עצירה ב־Lacul Roșu, וסיום בואטרה דורניי.',
        plan: [
            { time: 'בוקר', icon: '🏘️', description: 'יציאה מסיביו ועצירה בסיגישוארה הצבעונית.' },
            { time: 'צהריים', icon: '🏛️', description: 'ביקור בארמון התרבות ובמרכז העיר טארגו מורש.' },
            { time: 'אחר הצהריים', icon: '🛣️', description: 'נסיעה דרך קניון ביקאז ועצירה קצרה ב־Lacul Roșu.' },
            { time: 'ערב', icon: '🛏️', description: 'הגעה ל־Vatra Dornei ולינה.' },
        ],
        highlights: ['סיגישוארה', 'ארמון התרבות', 'קניון ביקאז', 'Lacul Roșu'],
        driveTime: 6,
        activityTime: 5,
    },
    {
        day: 5,
        date: '11.9.25',
        title: 'טיפוס לטואקה ונסיעה דרומה',
        locations: ['Vatra Dornei', 'Durau', 'Toaca Peak', 'Zarnesti'],
        intro: 'נסיעה לדורא ועלייה ברכבל למסלול Scările lui Toaca עד לפסגה, ולאחר מכן נסיעה דרומה ולינה סמוך לזרנשטי.',
        plan: [
            { time: 'בוקר', icon: '🚡', description: 'נסיעה לדורא ועלייה ברכבל לפארק צʼאחלאו.' },
            { time: 'צהריים', icon: '🥾', description: 'הליכה ל־Scările lui Toaca וטיפוס לפסגת טואקה.' },
            { time: 'אחר הצהריים', icon: '⬇️', description: 'ירידה ברכבל וחזרה לרכב.' },
            { time: 'אחה״צ', icon: '🚗', description: 'נסיעה דרומה לכיוון זרנשטי (≈4–5 שעות).' },
            { time: 'ערב', icon: '🏡', description: 'לינה באזור זרנשטי.' },
        ],
        highlights: ['פסגת טואקה', 'Scările lui Toaca', 'זרנשטי'],
        driveTime: 5,
        activityTime: 3,
    },
    {
        day: 6,
        date: '12.9.25',
        title: 'קניון זרנשטי והגעה לבראשוב',
        locations: ['Zarnesti', 'Rasnov', 'Poiana Brasov', 'Brasov'],
        intro: 'בוקר בקניון זרנשטי, עצירה בטירת ראסנוב או בפויאנה בראשוב והגעה לבראשוב לפני שבת.',
        plan: [
            { time: 'בוקר', icon: '🥾', description: 'טיול קל בקניון זרנשטי (2–3 שעות).' },
            { time: 'צהריים', icon: '🏰', description: 'עצירה בטירת ראסנוב או בפויאנה בראשוב.' },
            { time: 'אחר הצהריים', icon: '🚗', description: 'נסיעה קצרה לבראשוב והתארגנות לשבת.' },
        ],
        highlights: ['קניון זרנשטי', 'טירת ראסנוב', 'פויאנה בראשוב'],
        driveTime: 2,
        activityTime: 5,
    },
    {
        day: 7,
        date: '13.9.25',
        title: 'שבת בבראשוב',
        locations: ['Brasov'],
        intro: 'שבת מנוחה בבראשוב – תפילות, סעודות והיכרות עם הקהילה המקומית.',
        plan: [
            { time: 'בוקר', icon: '✡️', description: 'תפילות וסעודת שבת בבתי הכנסת בעיר.' },
            { time: 'אחר הצהריים', icon: '🍽️', description: 'מנוחה וסעודה שלישית.' },
            { time: 'ערב', icon: '🌙', description: 'מוצאי שבת רגוע בבראשוב.' },
        ],
        highlights: ['הקהילה היהודית בבראשוב'],
        driveTime: 0,
        activityTime: 4,
    },
    {
        day: 8,
        date: '14.9.25',
        title: 'קניון 7 הסולמות ובראשוב',
        locations: ['Seven Ladders Canyon', 'Brasov'],
        intro: 'טיול במסלול 7 הסולמות וחזרה לבראשוב לסיור בעיר העתיקה.',
        plan: [
            { time: 'בוקר', icon: '🧗‍♂️', description: 'נסיעה למסלול 7 הסולמות וטיול בקניון (2–3 שעות).' },
            { time: 'אחר הצהריים', icon: '🚶‍♂️', description: 'חזרה לבראשוב וסיור בעיר העתיקה – הכיכר, הכנסייה השחורה והרחובות הצרים.' },
            { time: 'ערב', icon: '🍴', description: 'ארוחת ערב ולינה בבראשוב.' },
        ],
        highlights: ['קניון 7 הסולמות', 'הכנסייה השחורה'],
        driveTime: 1,
        activityTime: 6,
    },
    {
        day: 9,
        date: '15.9.25',
        title: 'יום טירות בסביבה',
        locations: ['Bran', 'Peles Castle', 'Cantacuzino Castle', 'Sinaia'],
        intro: 'ביקור בטירת ברן, טירת פלש וקנטקוזינו בבוסטני. לינה בסינאיה או חזרה לבראשוב.',
        plan: [
            { time: 'בוקר', icon: '🧛', description: 'ביקור בטירת ברן האגדית.' },
            { time: 'צהריים', icon: '🏰', description: 'סיור בטירת פלש בסינאיה.' },
            { time: 'אחר הצהריים', icon: '🏰', description: 'ביקור בטירת קנטקוזינו בבוסטני.' },
            { time: 'ערב', icon: '🏨', description: 'לינה בסינאיה או חזרה לבראשוב.' },
        ],
        highlights: ['טירת ברן', 'טירת פלש', 'טירת קנטקוזינו'],
        driveTime: 3,
        activityTime: 6,
    },
    {
        day: 10,
        date: '16.9.25',
        title: 'חזרה לבוקרשט וטיסה',
        locations: ['Sinaia', 'Bucharest'],
        intro: 'בוקר רגוע בסינאיה או בכפרים בדרך, נסיעה לבוקרשט, החזרת הרכב וטיסה חזרה הביתה.',
        plan: [
            { time: 'בוקר', icon: '☕', description: 'בוקר רגוע בסינאיה או בכפרים הסמוכים.' },
            { time: 'צהריים', icon: '🚗', description: 'נסיעה לבוקרשט והחזרת הרכב בשעה 17:00.' },
            { time: 'ערב', icon: '✈️', description: 'טיסה חזרה הביתה ב־20:45.' },
        ],
        highlights: ['סינאיה', 'בוקרשט'],
        driveTime: 3,
        activityTime: 3,
    },
];

// Helper to derive weekday name in Hebrew for a given date string ("d.m.yy")
function getWeekdayName(dateStr) {
    const [day, month, year] = dateStr.split('.').map(Number);
    const date = new Date(2000 + year, month - 1, day);
    return new Intl.DateTimeFormat('he-IL', { weekday: 'long' }).format(date);
}

// =============================
// Geo coordinates (WGS84)
// =============================
const coordsLatLng = {
    Bucharest: { lat: 44.4268, lng: 26.1025 },
    'Vidraru Dam': { lat: 45.4141, lng: 24.6386 },
    'Valea lui Stan': { lat: 45.372, lng: 24.639 },
    Transfagarasan: { lat: 45.5983, lng: 24.6167 },
    'Balea Lake': { lat: 45.6093, lng: 24.6214 },
    Sibiu: { lat: 45.793, lng: 24.1213 },
    Sighisoara: { lat: 46.2196, lng: 24.7924 },
    'Targu Mures': { lat: 46.5425, lng: 24.5575 },
    'Bicaz Canyon': { lat: 46.7935, lng: 25.7959 },
    'Lacul Rosu': { lat: 46.7916, lng: 25.7869 },
    'Vatra Dornei': { lat: 47.3486, lng: 25.3596 },
    Durau: { lat: 46.9788, lng: 25.9004 },
    'Toaca Peak': { lat: 46.9809, lng: 25.9132 },
    Zarnesti: { lat: 45.559, lng: 25.3217 },
    Rasnov: { lat: 45.5935, lng: 25.4605 },
    'Poiana Brasov': { lat: 45.5972, lng: 25.551 },
    Brasov: { lat: 45.6579, lng: 25.6012 },
    'Seven Ladders Canyon': { lat: 45.5889, lng: 25.6303 },
    Bran: { lat: 45.5156, lng: 25.3676 },
    'Peles Castle': { lat: 45.3607, lng: 25.5421 },
    'Cantacuzino Castle': { lat: 45.4174, lng: 25.5415 },
    Sinaia: { lat: 45.353, lng: 25.547 },
};

// Compute overall bounds once (for "show all Romania" view)
const ALL_POINTS = Object.values(coordsLatLng).map((ll) => [ll.lat, ll.lng]);
let ALL_BOUNDS; // will be initialized after Leaflet is available

// =============================
// Leaflet map rendering
// =============================
let realMap, lightTiles, darkTiles;

// Prepare light and dark tile layers for Leaflet
function makeTiles() {
    // בהיר – OSM רגיל
    lightTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap',
    });

    // כהה – Stadia (חד וקריא)
    const STADIA_KEY = 'a44eeef5-cafe-4582-96e2-2792a30495db';
    darkTiles = L.tileLayer(
        `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${STADIA_KEY}`,
        {
            maxZoom: 18,
            attribution: '© OpenStreetMap, © Stadia Maps',
        }
    );
}

// Expose map theme switching to theme.js
window.applyMapTheme = function applyMapTheme() {
    if (!realMap || (!lightTiles && !darkTiles)) return;
    const isDark = document.body.classList.contains('dark-mode');
    if (isDark) {
        if (lightTiles && realMap.hasLayer(lightTiles)) realMap.removeLayer(lightTiles);
        if (darkTiles && !realMap.hasLayer(darkTiles)) darkTiles.addTo(realMap);
    } else {
        if (darkTiles && realMap.hasLayer(darkTiles)) realMap.removeLayer(darkTiles);
        if (lightTiles && !realMap.hasLayer(lightTiles)) lightTiles.addTo(realMap);
    }
};

// Helper to read CSS variables
const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

// Render Leaflet map for the given day
function renderRealMap(dayData) {
    const mapEl = document.getElementById('realMap');
    if (!mapEl) return;

    if (!ALL_BOUNDS && window.L) {
        ALL_BOUNDS = L.latLngBounds(ALL_POINTS);
    }

    if (realMap) {
        realMap.remove();
        realMap = null;
    }

    if (!lightTiles || !darkTiles) makeTiles();

    realMap = L.map(mapEl, {
        zoomControl: true,
        attributionControl: false,
        dragging: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true,
        tap: true,
        minZoom: 6,
    });

    window.applyMapTheme();

    // All POIs (subtle)
    Object.entries(coordsLatLng).forEach(([name, ll]) => {
        L.circleMarker([ll.lat, ll.lng], {
            radius: 5,
            color: css('--poi-color'),
            fillColor: css('--poi-color'),
            fillOpacity: 0.9,
            weight: 1,
        })
            .bindTooltip(name, { direction: 'top' })
            .addTo(realMap);
    });

    // Day route (highlighted)
    const dayLatLngs = [];
    const dayNames = [];
    (dayData.locations || []).forEach((loc) => {
        const ll = coordsLatLng[loc];
        if (!ll) return console.warn('Missing coords for', loc);
        dayLatLngs.push([ll.lat, ll.lng]);
        dayNames.push(loc);
    });

    dayLatLngs.forEach((latlng, i) => {
        // נקודות היום – גדולות יותר וקונטור בהיר
        L.circleMarker(latlng, {
            radius: 5,
            color: css('--route-stroke'),
            weight: 3,
            fillColor: css('--route-color'),
            fillOpacity: 0.95,
        })
            .bindTooltip(dayNames[i], { direction: 'top' })
            .addTo(realMap);
    });

    if (dayLatLngs.length >= 2) {
        // קו מסלול – עבה עם נראות גבוהה
        L.polyline(dayLatLngs, {
            color: css('--route-color'),
            weight: 3,
            opacity: 0.95,
        }).addTo(realMap);
    }

    // Always show full Romania bounds
    if (ALL_BOUNDS) {
        realMap.fitBounds(ALL_BOUNDS, { padding: [16, 16] });
        realMap.setMaxBounds(ALL_BOUNDS.pad(0.2));
    } else {
        // Fallback view
        realMap.setView([45.8, 24.9], 6);
    }

    // כפתור "חזרה לרומניה"
    const homeControl = L.control({ position: 'topleft' });
    homeControl.onAdd = function (map) {
        // עטיפה בסגנון Leaflet כדי שלא ישפיע על פריסת המפה
        const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
        const link = L.DomUtil.create('a', '', container);
        link.href = '#';
        link.title = 'מרכז לרומניה';
        link.innerHTML = '🏠';

        // מניעת בועת אירועים/גלילה
        L.DomEvent.disableClickPropagation(container);
        L.DomEvent.on(link, 'click', (e) => {
            L.DomEvent.preventDefault(e);
            if (ALL_BOUNDS) map.fitBounds(ALL_BOUNDS, { padding: [16, 16] });
            else map.setView([45.8, 24.9], 6);
        });

        return container;
    };
    homeControl.addTo(realMap);

    // Ensure proper sizing after DOM paints
    setTimeout(() => realMap.invalidateSize(), 0);
}

// =============================
// Charts (only the activity bar remains)
// =============================
let activityChart;
let currentDayIndex = 0;

const timelineContainer = document.getElementById('timeline-container');
const dayContentContainer = document.getElementById('day-content');

// =============================
// AI helpers (Gemini proxy)
// =============================
// Call Gemini API via Netlify function with simple retry logic
async function callGeminiApi(prompt, retries = 3) {
    const payload = { prompt };
    for (let i = 0; i < retries; i++) {
        try {
            const resp = await fetch('/.netlify/functions/gemini', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (resp.status === 429 && i < retries - 1) {
                const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
                await new Promise((r) => setTimeout(r, delay));
                continue;
            }
            if (!resp.ok) throw new Error(`API call failed: ${resp.status}`);

            const result = await resp.json();
            const parts = result?.candidates?.[0]?.content?.parts;
            return parts?.[0]?.text || 'לא התקבלה תשובה.';
        } catch (err) {
            console.error('Gemini error:', err);
        }
    }
    return 'אירעה שגיאה בטעינת המידע. אנא נסה שוב מאוחר יותר.';
}

// Sanitize AI output by removing quotes and translations
function sanitizeAiText(str) {
    if (!str) return '';
    return (
        String(str)
            // הסרת מרכאות / גרשיים בתחילת/סוף
            .replace(/^["'׳״]+|["'׳״]+$/g, '')
            // הסרת תרגום לאנגלית בסוגריים (כל סוגריים שיש בהם אותיות לטיניות)
            .replace(/\((?=[^)]*[A-Za-z])[^(]*\)/g, '')
            // ריווח
            .replace(/\s{2,}/g, ' ')
            .trim()
    );
}

// Fetch a fun fact about one of the given locations
async function getFunFact(locations) {
    const outputDiv = document.getElementById('funFactOutput');
    outputDiv.innerHTML = `<p class="text-center text-stone-500">טוען עובדה מהנה...</p>`;
    const prompt = `Provide a single, short, and interesting fun fact in Hebrew about one of the following locations in Romania: ${locations.join(
        ', '
    )}. Do not include the location name at the beginning of the fact.`;
    const fact = await callGeminiApi(prompt);
    const clean = sanitizeAiText(fact);
    outputDiv.innerHTML = `<p class="p-3 bg-teal-100 text-teal-800 rounded-lg shadow-inner">${clean}</p>`;
}

// Suggest an activity for a rainy day based on locations
async function getRainyDayActivity(locations) {
    const outputDiv = document.getElementById('rainyDayOutput');
    outputDiv.innerHTML = `<p class="text-center text-stone-500">מחפש רעיון ליום גשום...</p>`;
    const prompt = [
        'Answer in Hebrew only. Only English spellings of place names are allowed (e.g. "Brasov", "Sibiu") and no translation in parentheses.',
        `Give one specific and short recommendation for a rainy day activity, based on the following places in Romania: ${locations.join(
            ', '
        )}.`,
        'Respond in one sentence only, without opening/closing text, without quotation marks and without parentheses.',
    ].join(' ');
    const activity = await callGeminiApi(prompt);
    const clean = sanitizeAiText(activity);
    outputDiv.innerHTML = `<p class="p-3 bg-teal-100 text-teal-800 rounded-lg shadow-inner">${clean}</p>`;
}

// =============================
// Weather (Netlify function proxy)
// =============================
// Retrieve current weather data for the first location
async function fetchWeatherData(locationName) {
    const outputDiv = document.getElementById('weatherOutput');
    const placeholderCity = locationName.split(',')[0];
    outputDiv.innerHTML = `<p class="text-center text-stone-500 dark:text-stone-400">טוען נתוני מזג אוויר עבור ${placeholderCity}...</p>`;

    try {
        const q = `${placeholderCity}, Romania`;
        const resp = await fetch(`/.netlify/functions/weather`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ q, lang: 'he' }),
        });
        const data = await resp.json();

        if (resp.ok) {
            const temp = Math.round(data.current.temp_c);
            const description = data.current.condition.text;
            const iconUrl = `https:${data.current.condition.icon}`;
            outputDiv.innerHTML = `
        <div class="flex items-center justify-center p-3 rounded-lg shadow-inner bg-teal-100 text-teal-800 dark:bg-teal-700 dark:text-teal-100">
          <img src="${iconUrl}" alt="${description}" class="w-12 h-12 ml-2">
          <div>
            <p class="text-xl font-bold">${temp}°C</p>
            <p class="text-sm">${description}</p>
          </div>
        </div>`;
        } else {
            outputDiv.innerHTML = `<p class="text-center text-red-500">שגיאה: לא ניתן לטעון נתוני מזג אוויר עבור ${placeholderCity}.</p>`;
            console.error('Weather error:', data);
        }
    } catch (err) {
        outputDiv.innerHTML = `<p class="text-center text-red-500">שגיאה בחיבור לשירות מזג האוויר.</p>`;
        console.error(err);
    }
}

// =============================
// Timeline and page rendering
// =============================
// Render the clickable timeline navigation
function renderTimeline() {
    timelineContainer.innerHTML = '';
    itineraryData.forEach((day, index) => {
        const isActive = index === currentDayIndex;
        const button = document.createElement('button');
        button.className = `w-full text-right p-3 rounded-lg transition-all duration-300 text-lg ${
            isActive ? 'bg-teal-600 text-white shadow-md' : 'bg-stone-100 hover:bg-stone-200'
        }`;
        button.innerHTML = `<span class="font-bold">יום ${day.day}:</span> ${day.title}`;
        button.onclick = () => selectDay(index);
        timelineContainer.appendChild(button);
    });
}

// Change selected day and update content
function selectDay(index) {
    currentDayIndex = index;
    renderTimeline();
    renderDayDetails(itineraryData[index]);
}

// Render details for the selected itinerary day
function renderDayDetails(dayData) {
    const weekday = getWeekdayName(dayData.date);
    const weatherLocation = dayData.locations[0];
    const weatherCity = weatherLocation.split(',')[0];
    dayContentContainer.innerHTML = `
    <div class="animate-fade-in">
      <h2 class="text-3xl font-bold text-teal-700 mb-1">יום ${dayData.day}: ${dayData.title}</h2>
      <p class="text-stone-500 mb-4 text-lg">${weekday} ${dayData.date}</p>
      <p class="mb-6 text-base leading-relaxed">${dayData.intro}</p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div class="bg-stone-50 p-4 rounded-lg">
          <h3 class="text-xl font-bold mb-3">תכנון היום</h3>
          <div class="space-y-3">
            ${dayData.plan
                .map(
                    (item) => `
              <div class="flex items-start">
                <span class="text-2xl ml-3">${item.icon}</span>
                <div>
                  <p class="font-semibold">${item.time}</p>
                  <p class="text-stone-700">${item.description}</p>
                </div>
              </div>`
                )
                .join('')}
          </div>
        </div>
        <div class="bg-stone-50 p-4 rounded-lg">
          <h3 class="text-xl font-bold mb-3">נקודות עניין מרכזיות</h3>
          <ul class="list-none space-y-2">
            ${dayData.highlights
                .map(
                    (highlight) => `
              <li class="flex items-center"><span class="text-teal-500 text-2xl ml-2">◆</span>${highlight}</li>`
                )
                .join('')}
          </ul>
        </div>
      </div>

      <div class="border-t pt-6">
        <h3 class="text-2xl font-bold text-center mb-4">ייצוג חזותי של היום</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-stone-50 p-4 rounded-lg">
            <h4 class="text-lg font-bold text-center mb-2">מסלול היום</h4>
            <div id="realMap" class="leaflet-map"></div>
          </div>
          <div class="bg-stone-50 p-4 rounded-lg">
            <h4 class="text-lg font-bold text-center mb-2">זמן נסיעה מול פעילויות (שעות)</h4>
            <div class="chart-container">
              <canvas id="activityChart"></canvas>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t pt-6 mt-6 text-center">
        <h3 class="text-2xl font-bold text-center mb-4">✨ פיצ'רים של AI</h3>
        <div class="flex flex-col md:flex-row gap-4 justify-center mb-4">
          <button id="funFactBtn" class="bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold py-2 px-4 rounded-lg shadow-md transition-colors">
            עובדה מהנה על מיקום ✨
          </button>
          <button id="rainyDayBtn" class="bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold py-2 px-4 rounded-lg shadow-md transition-colors">
            המלצה ליום גשום ✨
          </button>
        </div>
        <div id="funFactOutput" class="mb-4"></div>
        <div id="rainyDayOutput"></div>
      </div>

      <div class="border-t pt-6 mt-6 text-center">
        <h3 class="text-2xl font-bold text-center mb-4">☁️ מזג האוויר ב${weatherCity}</h3>
        <div class="bg-stone-50 dark:bg-stone-800 p-4 rounded-lg">
          <div id="weatherOutput"></div>
        </div>
      </div>
    </div>`;

    document.getElementById('funFactBtn').onclick = () => getFunFact(dayData.locations);
    document.getElementById('rainyDayBtn').onclick = () => getRainyDayActivity(dayData.locations);
    fetchWeatherData(weatherLocation);

    renderRealMap(dayData);
    renderCharts(dayData);
}

// Render bar chart comparing driving and activity hours
function renderCharts(dayData) {
    const activityCtx = document.getElementById('activityChart').getContext('2d');
    if (activityChart) {
        activityChart.destroy();
    }
    activityChart = new Chart(activityCtx, {
        type: 'bar',
        data: {
            labels: ['חלוקת זמן'],
            datasets: [
                {
                    label: 'זמן נהיגה',
                    data: [dayData.driveTime],
                    backgroundColor: '#5eead4', // teal-300
                    borderColor: '#0d9488', // teal-600
                    borderWidth: 1,
                },
                {
                    label: 'זמן פעילויות',
                    data: [dayData.activityTime],
                    backgroundColor: '#a8a29e', // stone-400
                    borderColor: '#57534e', // stone-600
                    borderWidth: 1,
                },
            ],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    grid: { display: false },
                    ticks: {
                        callback: function (value) {
                            return value + ' שעות';
                        },
                    },
                },
                y: {
                    stacked: true,
                    grid: { display: false },
                },
            },
            plugins: {
                legend: {
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) label += ': ';
                            if (context.parsed.x !== null) label += context.parsed.x + ' שעות';
                            return label;
                        },
                    },
                },
            },
        },
    });
}

// =============================
// Default day selection
// =============================
// Automatically select today's itinerary day on load
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(2025, 8, 7); // September 7, 2025
    const end = new Date(2025, 8, 16); // September 16, 2025

    let defaultIndex = 0;
    if (today >= start && today <= end) {
        defaultIndex = Math.floor((today - start) / (1000 * 60 * 60 * 24));
    }

    selectDay(defaultIndex);
});
