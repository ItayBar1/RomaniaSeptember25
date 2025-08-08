// =============================
// Itinerary data
// =============================
const itineraryData = [
  {
    day: 1,
    date: "7.9.25",
    title: "הגעה לבוקרשט",
    locations: ["Bucharest"],
    intro:
      "היום הראשון מוקדש להגעה, התארגנות וסיור ראשוני בבירת רומניה, בוקרשט. נחווה את האווירה של העיר העתיקה ונתרשם מהמבנים המונומנטליים שלה.",
    plan: [
      { time: "לפנות בוקר", icon: "✈️", description: "נחיתה בנמל התעופה אוטופני (OTP)." },
      { time: "בוקר", icon: "🏨", description: "נסיעה למלון והתארגנות." },
      { time: "אחר הצהריים", icon: "🏛️", description: "סיור רגלי בעיר העתיקה (Centrul Vechi) ובאזור ארמון הפרלמנט." },
      { time: "ערב", icon: "🍽️", description: "ארוחת ערב באחת המסעדות התוססות של העיר העתיקה." }
    ],
    highlights: ["ארמון הפרלמנט", "העיר העתיקה"],
    driveTime: 1,
    activityTime: 8
  },
  {
    day: 2,
    date: "8.9.25",
    title: "סינאיה ובראשוב",
    locations: ["Bucharest", "Sinaia", "Brasov"],
    intro:
      "ביום השני ניקח את הרכב השכור ונצא צפונה אל 'פנינת הקרפטים', סינאיה, שם נבקר בטירה מהאגדות. נסיים את היום בעיר הסקסונית המקסימה בראשוב.",
    plan: [
      { time: "בוקר", icon: "🚗", description: "איסוף הרכב השכור ונסיעה צפונה לסינאיה." },
      { time: "צהריים", icon: "🏰", description: "ביקור בטירת פלש (Peleș Castle) המרהיבה ובמנזר סינאיה." },
      { time: "אחר הצהריים", icon: "➡️", description: "המשך נסיעה לבראשוב והתארגנות במלון." },
      { time: "ערב", icon: "🌃", description: "סיור ראשוני בעיר העתיקה של בראשוב." }
    ],
    highlights: ["טירת פלש", "מנזר סינאיה", "בראשוב"],
    driveTime: 3,
    activityTime: 6
  },
  {
    day: 3,
    date: "9.9.25",
    title: "קניון 7 הסולמות וטיול בבראשוב",
    locations: ["Brasov", "Seven Ladders Canyon"],
    intro:
      "את היום נתחיל במסלול הרפתקני בקניון 7 הסולמות הסמוך לבראשוב, ולאחר מכן נחזור לעיר לטייל ולהכיר את מרכז העיר המקסים.",
    plan: [
      { time: "בוקר", icon: "🧗", description: "נסיעה קצרה ליער שליד בראשוב וטיול רגלי בקניון 7 הסולמות (Canionul Șapte Scări)." },
      { time: "צהריים", icon: "🚶‍♂️", description: "חזרה לבראשוב וסיור במרכז העיר העתיקה, הכולל את הכיכר המרכזית, הכנסייה השחורה והרחוב הצר ביותר." },
      { time: "ערב", icon: "🍴", description: "ארוחת ערב ולינה בבראשוב." }
    ],
    highlights: ["קניון 7 הסולמות", "הכנסייה השחורה"],
    driveTime: 1,
    activityTime: 7
  },
  {
    day: 4,
    date: "10.9.25",
    title: "טירת דרקולה ודרך לקניון ביקאז",
    locations: ["Brasov", "Bran", "Bicaz Canyon"],
    intro:
      "נבקר בטירת בראן המפורסמת, המוכרת כטירתו של דרקולה, ולאחר מכן נצא בנסיעה ארוכה מזרחה לכיוון קניון ביקאז, יעד הלינה שלנו.",
    plan: [
      { time: "בוקר", icon: "🧛", description: "נסיעה קצרה לטירת בראן (Bran Castle) וסיור במקום." },
      { time: "צהריים", icon: "🚗", description: "נסיעה ארוכה לכיוון אזור קניון ביקאז (Cheile Bicazului) והאגם האדום." },
      { time: "אחר הצהריים", icon: "🏡", description: "הגעה לאזור הלינה בקניון ביקאז והתארגנות." },
      { time: "ערב", icon: "🍴", description: "ארוחת ערב ולינה באזור ביקאז." }
    ],
    highlights: ["טירת בראן", "קניון ביקאז"],
    driveTime: 4.5,
    activityTime: 4
  },
  {
    day: 5,
    date: "11.9.25",
    title: "טיפוס לפסגת טואקה ונסיעה לאטרה-דורניי",
    locations: ["Bicaz", "Bicaz Canyon", "Toaca Peak", "Vatra Dornei"],
    intro:
      "היום נצא לטיפוס מאתגר לפסגת טואקה במאסיף צ'אחלאו. נחווה נוף פנורמי מרהיב, ולאחר מכן נמשיך בנסיעה צפונה לעיירת הספא והקיט אטרה-דורניי.",
    plan: [
      { time: "בוקר", icon: "⛰️", description: "נסיעה קצרה מאזור ביקאז לפארק הלאומי מאסיף צ'אחלאו. טיפוס לפסגת טואקה (Toaca Peak) דרך גרם המדרגות המפורסם." },
      { time: "צהריים", icon: "🌲", description: "הליכה חזרה והמשך נסיעה ארוכה צפונה לכיוון אטרה-דורניי." },
      { time: "אחר הצהריים", icon: "🛏️", description: "הגעה לאטרה-דורניי והתארגנות." },
      { time: "ערב", icon: "🌃", description: "סיור רגלי בעיירה ולינה במקום." }
    ],
    highlights: ["פסגת טואקה", "נופי מאסיף צ'אחלאו", "אטרה-דורניי"],
    driveTime: 4,
    activityTime: 4
  },
  {
    day: 6,
    date: "12.9.25",
    title: "רכבת הקיטור וקלוז'-נאפוקה",
    locations: ["Vatra Dornei", "Viseu de Sus", "Cluj-Napoca"],
    intro:
      "יום ארוך ומגוון. נתחיל בחוויה נוסטלגית בנסיעה ברכבת קיטור בעמק וישאו, ונסיים את היום בקלוז'-נאפוקה, בירתה הלא רשמית של טרנסילבניה.",
    plan: [
      { time: "בוקר", icon: "🚂", description: "נסיעה לוישאו-דה-סוס וחווית נסיעה ברכבת הקיטור (Mocănița)." },
      { time: "אחר הצהריים", icon: "🚗", description: "נסיעה ארוכה לכיוון קלוז'-נאפוקה." },
      { time: "ערב", icon: "🌆", description: "הגעה לקלוז'-נאפוקה, עיר תוססת וצעירה, ולינה במקום." }
    ],
    highlights: ["רכבת הקיטור בוישאו", "קלוז'-נאפוקה"],
    driveTime: 6,
    activityTime: 4
  },
  {
    day: 7,
    date: "13.9.25",
    title: "שבת בקלוז'",
    locations: ["Cluj-Napoca"],
    intro:
      "יום רגוע המוקדש לעיר קלוז'. נסייר במרכז ההיסטורי, נתרשם מהאדריכלות ונבקר בבית חב\"ד המקומי.",
    plan: [
      { time: "בוקר", icon: "🕍", description: "סיור רגלי במרכז העיר של קלוז', כולל כיכר אונירי והמבנים הגותיים." },
      { time: "אחר הצהריים", icon: "✡️", description: "בילוי בקלוז', כולל ביקור בבית חב\"ד המקומי." },
      { time: "ערב", icon: "🌃", description: "לינה בקלוז'-נאפוקה." }
    ],
    highlights: ["כיכר אונירי", "בית חב\"ד"],
    driveTime: 0,
    activityTime: 8
  },
  {
    day: 8,
    date: "14.9.25",
    title: "אלבה יוליה וסיביו",
    locations: ["Cluj-Napoca", "Alba Iulia", "Sibiu"],
    intro:
      "נפרדים מקלוז' ונוסעים דרומה. נבקר באלבה יוליה, עיר איחוד רומניה, עם מצודה מרשימה, ונמשיך לעיר סיביו, פנינה סקסונית עם 'בתים בעלי עיניים'.",
    plan: [
      { time: "בוקר", icon: "🏛️", description: "נסיעה לאלבה יוליה וסיור במצודה ההיסטורית המרשימה." },
      { time: "אחר הצהריים", icon: "👀", description: "המשך נסיעה לסיביו וסיור ראשוני בעיר העתיקה." },
      { time: "ערב", icon: "🏨", description: "לינה בסיביו." }
    ],
    highlights: ["מצודת אלבה יוליה", "העיר העתיקה של סיביו"],
    driveTime: 3,
    activityTime: 6
  },
  {
    day: 9,
    date: "15.9.25",
    title: "דרך טרנספגרשן",
    locations: ["Sibiu", "Transfagarasan", "Vidraru Lake"],
    intro:
      "היום המרכזי של הטיול לחובבי הנהיגה והנופים. נחצה את הרי הקרפטים באחת הדרכים היפות והמפותלות בעולם, דרך הטרנספגרשן, ונעצור בנקודות תצפית עוצרות נשימה.",
    plan: [
      { time: "בוקר", icon: "🚗💨", description: "יציאה מסיביו ונסיעה על דרך טרנספגרשן." },
      { time: "צהריים", icon: "🏔️", description: "עצירה באגם בלאה (Bâlea Lake) ובנקודות תצפית נוספות." },
      { time: "אחר הצהריים", icon: "댐", description: "הגעה לסכר ואגם וידרארו (Vidraru)." },
      { time: "ערב", icon: "🌲", description: "לינה באזור אגם וידרארו." }
    ],
    highlights: ["דרך טרנספגרשן", "אגם בלאה", "אגם וידרארו"],
    driveTime: 4,
    activityTime: 5
  },
  {
    day: 10,
    date: "16.9.25",
    title: "סיום הטיול וחזרה",
    locations: ["Curtea de Arges", "Vidraru Lake", "Bucharest"],
    intro:
      "ביום האחרון נבקר במנזר המלכותי בקורטאה דה ארג'ש, נסכם את החוויות וניסע חזרה לשדה התעופה בבוקרשט לטיסה הביתה.",
    plan: [
      { time: "בוקר", icon: "⛪", description: "נסיעה לקורטאה-דה-ארג'ש וביקור במנזר המפואר." },
      { time: "אחר הצהריים", icon: "🚗", description: "נסיעה לכיוון שדה התעופה אוטופני (OTP)." },
      { time: "ערב", icon: "✈️", description: "החזרת הרכב השכור וטיסה הביתה." }
    ],
    highlights: ["מנזר קורטאה דה ארג'ש"],
    driveTime: 3,
    activityTime: 4
  }
];

// =============================
// Geo coordinates (WGS84)
// =============================
const coordsLatLng = {
  Bucharest: { lat: 44.4268, lng: 26.1025 },
  Sinaia: { lat: 45.353, lng: 25.547 },
  Brasov: { lat: 45.6579, lng: 25.6012 },
  "Seven Ladders Canyon": { lat: 45.5889, lng: 25.6303 },
  Bran: { lat: 45.5156, lng: 25.3676 },
  "Bicaz Canyon": { lat: 46.7935, lng: 25.7959 },
  Bicaz: { lat: 46.912, lng: 26.091 },
  "Toaca Peak": { lat: 46.9809, lng: 25.9132 },
  "Vatra Dornei": { lat: 47.3486, lng: 25.3596 },
  "Viseu de Sus": { lat: 47.7142, lng: 24.4295 },
  "Cluj-Napoca": { lat: 46.7712, lng: 23.6236 },
  "Alba Iulia": { lat: 46.073, lng: 23.58 },
  Sibiu: { lat: 45.793, lng: 24.1213 },
  Transfagarasan: { lat: 45.5983, lng: 24.6167 },
  "Vidraru Lake": { lat: 45.4187, lng: 24.6346 },
  "Curtea de Arges": { lat: 45.134, lng: 24.6742 }
};

// Compute overall bounds once (for "show all Romania" view)
const ALL_POINTS = Object.values(coordsLatLng).map((ll) => [ll.lat, ll.lng]);
let ALL_BOUNDS; // will be initialized after Leaflet is available

// =============================
// Leaflet map rendering
// =============================
let realMap, lightTiles, darkTiles;

function makeTiles() {
  // בהיר – OSM רגיל
  lightTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
  });

  // כהה – Stadia (חד וקריא)
  darkTiles = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap, © Stadia Maps'
  });
}

// לחשוף ל-theme.js
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

const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

function renderRealMap(dayData) {
  const mapEl = document.getElementById("realMap");
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
    zoomControl: false,
    attributionControl: false,
    dragging: true,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false,
    tap: false
  });

  window.applyMapTheme();

  // All POIs (subtle)
  Object.entries(coordsLatLng).forEach(([name, ll]) => {
    // נקודות רקע (All POIs) – נשאר עדין
    L.circleMarker([ll.lat, ll.lng], {
      radius: 5,
      color: css('--poi-color'),
      fillColor: css('--poi-color'),
      fillOpacity: 0.9,
      weight: 1
    }).bindTooltip(name, { direction: "top" })
      .addTo(realMap);
  });

  // Day route (highlighted)
  const dayLatLngs = [];
  const dayNames = [];
  (dayData.locations || []).forEach((loc) => {
    const ll = coordsLatLng[loc];
    if (!ll) return console.warn("Missing coords for", loc);
    dayLatLngs.push([ll.lat, ll.lng]);
    dayNames.push(loc);
  });

  dayLatLngs.forEach((latlng, i) => {
      // נקודות היום – גדולות יותר וקונטור בהיר
      L.circleMarker(latlng, {
      radius: 5,
      color: css('--route-stroke'),  // לבן בדארק
      weight: 3,
      fillColor: css('--route-color'), // טורקיז/ציאן בהיר
      fillOpacity: 0.95
    }).bindTooltip(dayNames[i], { direction: "top" })
      .addTo(realMap);
  });

  if (dayLatLngs.length >= 2) {
    // קו מסלול – עבה עם נראות גבוהה
    L.polyline(dayLatLngs, {
      color: css('--route-color'),
      weight: 3,
      opacity: 0.95
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

  // Ensure proper sizing after DOM paints
  setTimeout(() => realMap.invalidateSize(), 0);
}

// =============================
// Charts (only the activity bar remains)
// =============================
let activityChart;
let currentDayIndex = 0;

const timelineContainer = document.getElementById("timeline-container");
const dayContentContainer = document.getElementById("day-content");

// =============================
// AI helpers (Gemini proxy)
// =============================
async function callGeminiApi(prompt, retries = 3) {
  const payload = { prompt };
  for (let i = 0; i < retries; i++) {
    try {
      const resp = await fetch("/.netlify/functions/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (resp.status === 429 && i < retries - 1) {
        const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
        await new Promise((r) => setTimeout(r, delay));
        continue;
      }
      if (!resp.ok) throw new Error(`API call failed: ${resp.status}`);

      const result = await resp.json();
      const parts = result?.candidates?.[0]?.content?.parts;
      return parts?.[0]?.text || "לא התקבלה תשובה.";
    } catch (err) {
      console.error("Gemini error:", err);
    }
  }
  return "אירעה שגיאה בטעינת המידע. אנא נסה שוב מאוחר יותר.";
}

function sanitizeAiText(str) {
  if (!str) return '';
  return String(str)
    // הסרת מרכאות / גרשיים בתחילת/סוף
    .replace(/^["'׳״]+|["'׳״]+$/g, '')
    // הסרת תרגום לאנגלית בסוגריים (כל סוגריים שיש בהם אותיות לטיניות)
    .replace(/\((?=[^)]*[A-Za-z])[^(]*\)/g, '')
    // ריווח
    .replace(/\s{2,}/g, ' ')
    .trim();
}

async function getFunFact(locations) {
  const outputDiv = document.getElementById("funFactOutput");
  outputDiv.innerHTML = `<p class="text-center text-stone-500">טוען עובדה מהנה...</p>`;
  const prompt = `Provide a single, short, and interesting fun fact in Hebrew about one of the following locations in Romania: ${locations.join(", ")}. Do not include the location name at the beginning of the fact.`;
  const fact = await callGeminiApi(prompt);
  const clean = sanitizeAiText(fact);
  outputDiv.innerHTML = `<p class="p-3 bg-teal-100 text-teal-800 rounded-lg shadow-inner">${clean}</p>`;
}

async function getRainyDayActivity(locations) {
  const outputDiv = document.getElementById("rainyDayOutput");
  outputDiv.innerHTML = `<p class="text-center text-stone-500">מחפש רעיון ליום גשום...</p>`;
  const prompt = [
    'Answer in Hebrew only. Only English spellings of place names are allowed (e.g. "Brasov", "Sibiu") and no translation in parentheses.',
    `Give one specific and short recommendation for a rainy day activity, based on the following places in Romania: ${locations.join(', ')}.`,
    'Respond in one sentence only, without opening/closing text, without quotation marks and without parentheses.'].join(' ');
  const activity = await callGeminiApi(prompt);
  const clean = sanitizeAiText(activity);
  outputDiv.innerHTML = `<p class="p-3 bg-teal-100 text-teal-800 rounded-lg shadow-inner">${clean}</p>`;
}

// =============================
// Weather (Netlify function proxy)
// =============================
async function fetchWeatherData(locationName) {
  const outputDiv = document.getElementById("weatherOutput");
  const placeholderCity = locationName.split(",")[0];
  outputDiv.innerHTML = `<p class="text-center text-stone-500 dark:text-stone-400">טוען נתוני מזג אוויר עבור ${placeholderCity}...</p>`;

  try {
    const q = `${placeholderCity}, Romania`;
    const resp = await fetch(`/.netlify/functions/weather`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q, lang: "he" })
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
      console.error("Weather error:", data);
    }
  } catch (err) {
    outputDiv.innerHTML = `<p class="text-center text-red-500">שגיאה בחיבור לשירות מזג האוויר.</p>`;
    console.error(err);
  }
}

// =============================
// Timeline and page rendering
// =============================
function renderTimeline() {
  timelineContainer.innerHTML = "";
  itineraryData.forEach((day, index) => {
    const isActive = index === currentDayIndex;
    const button = document.createElement("button");
    button.className = `w-full text-right p-3 rounded-lg transition-all duration-300 text-lg ${
      isActive ? "bg-teal-600 text-white shadow-md" : "bg-stone-100 hover:bg-stone-200"
    }`;
    button.innerHTML = `<span class="font-bold">יום ${day.day}:</span> ${day.title}`;
    button.onclick = () => selectDay(index);
    timelineContainer.appendChild(button);
  });
}

function selectDay(index) {
  currentDayIndex = index;
  renderTimeline();
  renderDayDetails(itineraryData[index]);
}

function renderDayDetails(dayData) {
  dayContentContainer.innerHTML = `
    <div class="animate-fade-in">
      <h2 class="text-3xl font-bold text-teal-700 mb-1">יום ${dayData.day}: ${dayData.title}</h2>
      <p class="text-stone-500 mb-4 text-lg">${dayData.date}</p>
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
              .join("")}
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
              .join("")}
          </ul>
        </div>
      </div>

      <div class="border-t pt-6">
        <h3 class="text-2xl font-bold text-center mb-4">ייצוג חזותי של היום</h3>
        <p class="text-center text-stone-600 mb-6">התרשים הבא מציג מפה אמיתית עם המסלול היומי, כשהזום תמיד מכיל את כל רומניה.</p>
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
        <h3 class="text-2xl font-bold text-center mb-4">☁️ מזג אוויר</h3>
        <div class="bg-stone-50 dark:bg-stone-800 p-4 rounded-lg">
          <div id="weatherOutput"></div>
        </div>
      </div>
    </div>`;

  document.getElementById("funFactBtn").onclick = () => getFunFact(dayData.locations);
  document.getElementById("rainyDayBtn").onclick = () => getRainyDayActivity(dayData.locations);
  fetchWeatherData(dayData.locations[0]);

  renderRealMap(dayData);
  renderCharts(dayData);
}

function renderCharts(dayData) {
  const activityCtx = document.getElementById("activityChart").getContext("2d");
  if (activityChart) {
    activityChart.destroy();
  }
  activityChart = new Chart(activityCtx, {
    type: "bar",
    data: {
      labels: ["חלוקת זמן"],
      datasets: [
        {
          label: "זמן נהיגה",
          data: [dayData.driveTime],
          backgroundColor: "#5eead4", // teal-300
          borderColor: "#0d9488", // teal-600
          borderWidth: 1
        },
        {
          label: "זמן פעילויות",
          data: [dayData.activityTime],
          backgroundColor: "#a8a29e", // stone-400
          borderColor: "#57534e", // stone-600
          borderWidth: 1
        }
      ]
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          grid: { display: false },
          ticks: {
            callback: function (value) {
              return value + " שעות";
            }
          }
        },
        y: {
          stacked: true,
          grid: { display: false }
        }
      },
      plugins: {
        legend: {
          position: "bottom"
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) label += ": ";
              if (context.parsed.x !== null) label += context.parsed.x + " שעות";
              return label;
            }
          }
        }
      }
    }
  });
}

// =============================
// Default day selection
// =============================
document.addEventListener("DOMContentLoaded", () => {
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