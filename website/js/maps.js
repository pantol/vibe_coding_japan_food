/* ===================================
   Japan Culinary Guide - Maps Module
   Leaflet + OpenStreetMap Integration
   =================================== */

const RESTAURANT_DATA = {

  tokyo: {
    center: [35.6762, 139.6503],
    zoom: 12,
    restaurants: [
      {
        name: "Sukiyabashi Jiro",
        lat: 35.6717, lng: 139.7636,
        price: "splurge", priceLabel: "\u00a558,000+",
        type: "Sushi",
        description: "3 Michelin stars. The legend by Jiro Ono. Omakase of ~20 nigiri. Book through hotel concierge.",
        address: "Tsukamoto Sogyo Bldg B1F, 2-15 Ginza 4-chome, Chuo-ku"
      },
      {
        name: "Sushi Saito",
        lat: 35.6585, lng: 139.7345,
        price: "splurge", priceLabel: "\u00a540,000+",
        type: "Sushi",
        description: "3 Michelin stars, Asia's 50 Best #33. Legendary octopus and tuna. Original counter clients-only.",
        address: "Minato-ku (Azabudai Hills area)"
      },
      {
        name: "Tempura Kondo",
        lat: 35.6719, lng: 139.7649,
        price: "splurge", priceLabel: "\u00a520,000+",
        type: "Tempura",
        description: "2 Michelin stars. Chef Kondo's steaming technique locks in freshness. Sesame oil tradition.",
        address: "9F, 5-5-13 Ginza, Chuo-ku"
      },
      {
        name: "Hakkoku",
        lat: 35.6712, lng: 139.7640,
        price: "splurge", priceLabel: "\u00a530,000+",
        type: "Sushi",
        description: "~30 pieces of top-class Edomae sushi by Hiroyuki Sato. Expert-curated by chefs and sommeliers.",
        address: "Ginza, Chuo-ku"
      },
      {
        name: "Iruca Tokyo",
        lat: 35.6634, lng: 139.7313,
        price: "mid", priceLabel: "\u00a52,000",
        type: "Ramen",
        description: "Michelin Bib Gourmand. Four-broth soup base. Porcini shoyu ramen in custom Arita porcelain.",
        address: "Roppongi, Minato-ku"
      },
      {
        name: "Sobahouse Konjiki Hototogisu",
        lat: 35.6938, lng: 139.7036,
        price: "mid", priceLabel: "\u00a51,300",
        type: "Ramen",
        description: "Michelin star. Third ramen shop worldwide to earn one. Shio soba with clam and sea bream dashi.",
        address: "Shinjuku-ku"
      },
      {
        name: "Tonkatsu Tonta",
        lat: 35.7359, lng: 139.6520,
        price: "mid", priceLabel: "\u00a52,000\u20133,000",
        type: "Tonkatsu",
        description: "Low-temperature tonkatsu specialists. Bright fresh pork, impossibly light breadcrumbs. Limited days.",
        address: "Nerima-ku"
      },
      {
        name: "Sushi Tokyo Ten",
        lat: 35.6580, lng: 139.7016,
        price: "mid", priceLabel: "\u00a54,400\u20138,800",
        type: "Sushi",
        description: "Generous omakase lunch \u00a54,400 weekdays. Chutoro, abalone, ikura-don. Remarkable value.",
        address: "Shibuya Stream, Shibuya-ku"
      },
      {
        name: "Sushi Dai",
        lat: 35.6426, lng: 139.7815,
        price: "budget", priceLabel: "\u00a53,700",
        type: "Sushi",
        description: "Legendary 12-seat counter at Toyosu Market. 12-piece omakase. Queue from 2 a.m.",
        address: "Toyosu Market, Koto-ku"
      },
      {
        name: "Rokurinsha",
        lat: 35.6812, lng: 139.7671,
        price: "budget", priceLabel: "\u00a51,000",
        type: "Tsukemen",
        description: "Famous tsukemen at Tokyo Station Ramen Street. Thick chewy noodles, rich dipping broth.",
        address: "Tokyo Station, Ramen Street B1F"
      },
      {
        name: "Yurakucho Yakitori Alley",
        lat: 35.6748, lng: 139.7630,
        price: "budget", priceLabel: "\u00a5150\u2013300/skewer",
        type: "Yakitori",
        description: "Under the railway tracks. Tiny counters, binchotan charcoal, cold beer. Pure after-work Tokyo.",
        address: "Under JR tracks, Yurakucho"
      },
      {
        name: "Kiraku",
        lat: 35.6590, lng: 139.6980,
        price: "budget", priceLabel: "\u00a5800",
        type: "Ramen",
        description: "Tokyo-style chukamen since 1952. Soy broth with fried onions and chewy flat noodles. 68-year institution.",
        address: "Dogenzaka, Shibuya-ku"
      },
      {
        name: "Tsukiji Outer Market",
        lat: 35.6654, lng: 139.7707,
        price: "budget", priceLabel: "\u00a5500\u20132,000",
        type: "Market",
        description: "Tamagoyaki, sashimi on sticks, grilled scallops, Japanese knives. Go by 7 a.m.",
        address: "Tsukiji 4-chome, Chuo-ku"
      }
    ]
  },

  osaka: {
    center: [34.6687, 135.5021],
    zoom: 13,
    restaurants: [
      {
        name: "Sushi Nakatani",
        lat: 34.6688, lng: 135.5053,
        price: "splurge", priceLabel: "\u00a530,000+",
        type: "Sushi",
        description: "8-seat counter near Hozenji Temple. 20-item Edomae omakase. Photography forbidden. Legendary wait list.",
        address: "Hozenji, Chuo-ku"
      },
      {
        name: "Kitashinchi Kushikatsu Bon",
        lat: 34.6966, lng: 135.4975,
        price: "splurge", priceLabel: "\u00a515,000+",
        type: "Kushikatsu",
        description: "Former Michelin star. Wagyu chateaubriand, foie gras, uni fried in cottonseed oil. Paris outpost.",
        address: "Kitashinchi, Kita-ku"
      },
      {
        name: "Matsusakagyu Yakiniku M",
        lat: 34.6690, lng: 135.5052,
        price: "splurge", priceLabel: "\u00a510,000\u201320,000",
        type: "Yakiniku",
        description: "Matsusaka beef teppan-grilled in atmospheric lantern-lit Hozenji alley.",
        address: "Hozenji Yokocho, Chuo-ku"
      },
      {
        name: "Ajinoya Honten",
        lat: 34.6643, lng: 135.5013,
        price: "mid", priceLabel: "\u00a51,500\u20132,500",
        type: "Okonomiyaki",
        description: "Respected okonomiyaki institution. Thin dough, generous cabbage. Staff cook at your table.",
        address: "Namba, Chuo-ku"
      },
      {
        name: "Mizuno",
        lat: 34.6687, lng: 135.5020,
        price: "mid", priceLabel: "\u00a51,500",
        type: "Okonomiyaki",
        description: "Famous yama-imo batter producing exceptionally fluffy okonomiyaki. Expect weekend queues.",
        address: "Dotonbori, Chuo-ku"
      },
      {
        name: "Nishiya",
        lat: 34.6725, lng: 135.5011,
        price: "mid", priceLabel: "\u00a5800",
        type: "Udon",
        description: "Long-running udon capturing Osaka's gentle kitsune udon tradition. Hearty, affordable, bustling.",
        address: "Shinsaibashi, Chuo-ku"
      },
      {
        name: "Abeno Takoyaki Yamachan",
        lat: 34.6462, lng: 135.5141,
        price: "budget", priceLabel: "\u00a5600",
        type: "Takoyaki",
        description: "Highest-rated takoyaki in Osaka. Crispy exterior, molten interior.",
        address: "Tennoji, Abeno-ku"
      },
      {
        name: "Kushikatsu Daruma",
        lat: 34.6524, lng: 135.5062,
        price: "budget", priceLabel: "\u00a51,500",
        type: "Kushikatsu",
        description: "Most famous kushikatsu chain. Original Shinsekai branch. Working-class spirit. No double dipping.",
        address: "2-3-9 Ebisuhigashi, Naniwa-ku"
      },
      {
        name: "Kuromon Ichiba Market",
        lat: 34.6627, lng: 135.5079,
        price: "budget", priceLabel: "\u00a5500\u20133,000",
        type: "Market",
        description: "\"Osaka's Kitchen.\" Grilled scallops, fresh uni, otoro, tamagoyaki. Go before 10 a.m.",
        address: "Nipponbashi, Chuo-ku"
      }
    ]
  },

  kyoto: {
    center: [35.0116, 135.7681],
    zoom: 13,
    restaurants: [
      {
        name: "Hyotei",
        lat: 35.0114, lng: 135.7926,
        price: "splurge", priceLabel: "\u00a530,000+",
        type: "Kaiseki",
        description: "3 Michelin stars, 450+ years, 15th generation. On Nanzenji Temple grounds. Sea bream with tomato soy.",
        address: "Nanzenji, Sakyo-ku"
      },
      {
        name: "Nakamura",
        lat: 35.0048, lng: 135.7694,
        price: "splurge", priceLabel: "\u00a525,000\u201340,000",
        type: "Kaiseki",
        description: "3 Michelin stars. 6th-generation Edo-period kaiseki. Fried tilefish in sake, white miso soup.",
        address: "Central Kyoto"
      },
      {
        name: "Gion Sasaki",
        lat: 35.0028, lng: 135.7760,
        price: "splurge", priceLabel: "\u00a520,000+",
        type: "Kaiseki",
        description: "3 Michelin stars. 19 seats of dynamic, creative kaiseki. Theatrical yet deeply traditional.",
        address: "570-235 Gionmachi Minamigawa, Higashiyama-ku"
      },
      {
        name: "Kiyama",
        lat: 35.0178, lng: 135.7605,
        price: "mid", priceLabel: "\u00a510,000",
        type: "Kaiseki",
        description: "Michelin 1-star kaiseki above a well connected to Imperial Palace stream. Watch chef make dashi.",
        address: "Marutamachi, Kamigyo-ku"
      },
      {
        name: "Cenci",
        lat: 35.0150, lng: 135.7830,
        price: "mid", priceLabel: "\u00a58,000\u201315,000",
        type: "Italian",
        description: "Michelin-starred Italian using Kyoto seasonal ingredients. Green Star for sustainability.",
        address: "Near Heian Shrine, Sakyo-ku"
      },
      {
        name: "Gion Fukushi",
        lat: 35.0035, lng: 135.7755,
        price: "mid", priceLabel: "\u00a58,000\u201312,000",
        type: "Kaiseki",
        description: "Michelin-starred Kyo-kaiseki with organic, pesticide-free vegetables and fresh local seafood.",
        address: "Gion, Higashiyama-ku"
      },
      {
        name: "Nishiki Market",
        lat: 35.0050, lng: 135.7650,
        price: "budget", priceLabel: "\u00a5300\u20131,500",
        type: "Market",
        description: "\"Kitchen of Kyoto\" since the 14th century. Tsukemono, yuba, tofu, seasonal specialties. Late morning ideal.",
        address: "Nishikikoji-dori, Nakagyo-ku"
      },
      {
        name: "Pontocho Alley Eateries",
        lat: 35.0050, lng: 135.7710,
        price: "budget", priceLabel: "\u00a52,000+",
        type: "Obanzai",
        description: "Narrow lane between Kiyamachi and Kamo River. Atmospheric small restaurants. Obanzai sets.",
        address: "Pontocho, Nakagyo-ku"
      },
      {
        name: "Fushimi Sake Breweries",
        lat: 34.9344, lng: 135.7590,
        price: "budget", priceLabel: "Free\u2013\u00a5500",
        type: "Sake Tasting",
        description: "Gekkeikan and Kizakura offer tastings of smooth, soft-water sake. Free or minimal charge.",
        address: "Fushimi-ku"
      }
    ]
  },

  kobe: {
    center: [34.6901, 135.1956],
    zoom: 13,
    restaurants: [
      {
        name: "Misono Kobe Main Store",
        lat: 34.6930, lng: 135.1940,
        price: "splurge", priceLabel: "\u00a515,000+",
        type: "Teppanyaki",
        description: "Est. 1945 \u2014 world's first teppanyaki restaurant. A5 Kobe beef. Lunch from \u00a56,000.",
        address: "Sannomiya, Chuo-ku"
      },
      {
        name: "Bifteck Kawamura",
        lat: 34.6935, lng: 135.1950,
        price: "splurge", priceLabel: "\u00a520,000+",
        type: "Steak",
        description: "Since 1972. Highest quality Kobe beef steak, teppanyaki-style. English website reservations.",
        address: "Sannomiya, Chuo-ku"
      },
      {
        name: "Royal Mouriya",
        lat: 34.6928, lng: 135.1945,
        price: "splurge", priceLabel: "\u00a515,000+",
        type: "Steak",
        description: "Over 130 years of history. A5-grade wagyu in dignified surroundings. Next to Kobe-Sannomiya Station.",
        address: "Sannomiya, Chuo-ku"
      },
      {
        name: "Kobe Beef Steak Ishida",
        lat: 34.6925, lng: 135.1935,
        price: "mid", priceLabel: "\u00a58,000+",
        type: "Teppanyaki",
        description: "Multiple locations. A5 sirloin lunch with garlic rice from \u00a58,000. Reserve online.",
        address: "Sannomiya, Chuo-ku"
      },
      {
        name: "Wakkoqu",
        lat: 34.6980, lng: 135.1920,
        price: "mid", priceLabel: "\u00a510,000+",
        type: "Teppanyaki",
        description: "Secret black sauce teppanyaki. Atmospheric Kitano district location. English reservations.",
        address: "Kitanozaka, Chuo-ku"
      },
      {
        name: "Kobe Steak Sai Dining",
        lat: 34.6932, lng: 135.1930,
        price: "mid", priceLabel: "\u00a54,500+",
        type: "Steak",
        description: "A5 cattle, vegetable sommelier, intimate counter islands. Lunch from \u00a54,500.",
        address: "Sannomiya area, Chuo-ku"
      },
      {
        name: "Nankinmachi Chinatown",
        lat: 34.6860, lng: 135.1750,
        price: "budget", priceLabel: "\u00a5300\u2013500",
        type: "Street Food",
        description: "Buta-man, roasted chestnuts, sesame dango, xiaolongbao. Walk-and-eat paradise.",
        address: "Nankinmachi, Chuo-ku"
      },
      {
        name: "Motomachi Bakeries",
        lat: 34.6880, lng: 135.1780,
        price: "budget", priceLabel: "\u00a5300",
        type: "Bakery",
        description: "Melon-pan, cream-pan, legendary Kobe milk bread from Meiji-era tradition.",
        address: "Motomachi, Chuo-ku"
      },
      {
        name: "Nada Sake Brewery District",
        lat: 34.7140, lng: 135.2500,
        price: "budget", priceLabel: "Free",
        type: "Sake Tasting",
        description: "Free tours and tastings at Hakutsuru, Shushinkan. Bold otoko-zake paired with rich foods.",
        address: "Nada-ku"
      }
    ]
  },

  fukuoka: {
    center: [33.5902, 130.4017],
    zoom: 13,
    restaurants: [
      {
        name: "Hakata Daruma Honten",
        lat: 33.5895, lng: 130.3989,
        price: "mid", priceLabel: "\u00a5850",
        type: "Ramen",
        description: "Iconic since 1963. Yobimodoshi method: bones simmered 16 hours in same iron pot.",
        address: "Kamikawabata-machi, Hakata-ku"
      },
      {
        name: "Ganso Nagahamaya",
        lat: 33.5960, lng: 130.3850,
        price: "budget", priceLabel: "\u00a5500",
        type: "Ramen",
        description: "Original Nagahama ramen from a 1952 yatai. Lighter tonkotsu, ultra-thin noodles. Open 24h.",
        address: "Nagahama, Chuo-ku"
      },
      {
        name: "Tetsunabe Gyoza",
        lat: 33.5920, lng: 130.4010,
        price: "mid", priceLabel: "\u00a51,500",
        type: "Gyoza",
        description: "Hakata's thin-skinned, crispy-winged gyoza in sizzling iron pans. One drink order required.",
        address: "Nakasu/Gion, Hakata-ku"
      },
      {
        name: "Mizutaki Nagano",
        lat: 33.5880, lng: 130.4050,
        price: "mid", priceLabel: "\u00a54,000+",
        type: "Mizutaki",
        description: "Premier mizutaki specialist. Milky, collagen-rich chicken broth served with ceremony.",
        address: "Hakata-ku"
      },
      {
        name: "Nakasu Yatai Stalls",
        lat: 33.5920, lng: 130.4040,
        price: "budget", priceLabel: "\u00a52,000\u20133,000",
        type: "Yatai",
        description: "~20 stalls along Naka River. Ramen, yakitori, oden, gyoza. Go at 8 p.m. or after 10 p.m.",
        address: "Along Naka River, Nakasu"
      },
      {
        name: "Tenjin Yatai Area",
        lat: 33.5900, lng: 130.3980,
        price: "budget", priceLabel: "\u00a52,000\u20133,000",
        type: "Yatai",
        description: "Dense with stalls near Tenjin Station. More authentically local than Nakasu.",
        address: "Tenjin, Chuo-ku"
      },
      {
        name: "Chez Remy Yatai",
        lat: 33.5905, lng: 130.3975,
        price: "mid", priceLabel: "\u00a53,000+",
        type: "Yatai (French)",
        description: "French cuisine from a yatai. Escargot, fresh fish, hot mulled wine. 45-min wait.",
        address: "Tenjin, Chuo-ku"
      },
      {
        name: "Imaizumi Kitchen",
        lat: 33.5870, lng: 130.4000,
        price: "budget", priceLabel: "\u00a51,000",
        type: "Teishoku",
        description: "Affordable teishoku: fried horse mackerel, fried chicken, curry. Complimentary kimchi.",
        address: "Imaizumi, Chuo-ku"
      },
      {
        name: "Yanagibashi Market",
        lat: 33.5930, lng: 130.3920,
        price: "budget", priceLabel: "\u00a5500\u20132,000",
        type: "Market",
        description: "Morning market for seafood, mentaiko tastings, temari sushi. Best before 10 a.m. weekdays.",
        address: "Yanagibashi, Chuo-ku"
      }
    ]
  },

  oita: {
    center: [33.2800, 131.5000],
    zoom: 12,
    restaurants: [
      {
        name: "Toyotsune",
        lat: 33.2785, lng: 131.5010,
        price: "mid", priceLabel: "\u00a51,000",
        type: "Toriten",
        description: "Considered the birthplace of toriten. Chicken tempura and tendon since early Showa period.",
        address: "Beppu"
      },
      {
        name: "Jigoku Mushi Kobo Kannawa",
        lat: 33.3140, lng: 131.4630,
        price: "budget", priceLabel: "\u00a5500\u20131,500",
        type: "Jigoku-Mushi",
        description: "Public hell-steaming workshop. Buy ingredients, steam over volcanic vents. 6-7 min for eggs.",
        address: "Kannawa, Beppu"
      },
      {
        name: "Kikusaiko (Hotel Shiragiku)",
        lat: 33.2810, lng: 131.4940,
        price: "splurge", priceLabel: "\u00a510,000+",
        type: "Kaiseki",
        description: "Five flavors, five colors, five methods. Expert wine and sake pairings. Private sukiya rooms.",
        address: "Hotel Shiragiku, Beppu"
      },
      {
        name: "Otto e Sette",
        lat: 33.2800, lng: 131.4980,
        price: "mid", priceLabel: "\u00a55,000\u20138,000",
        type: "Italian",
        description: "Italian with Beppu DNA \u2014 pasta boiled in hot spring water, vegetables steamed geothermally.",
        address: "Beppu"
      },
      {
        name: "Seafood Izutsu",
        lat: 33.2790, lng: 131.5020,
        price: "mid", priceLabel: "\u00a53,000\u20135,000",
        type: "Seafood",
        description: "Highly popular for seki-aji and seki-saba sashimi at honest prices. Arrive early.",
        address: "Beppu"
      },
      {
        name: "Waon",
        lat: 33.2780, lng: 131.5050,
        price: "budget", priceLabel: "\u00a51,000\u20132,000",
        type: "Local Cuisine",
        description: "Family-run with English menu. Toriten, sashimi, chirashizushi set lunches.",
        address: "Beppu"
      },
      {
        name: "Amamichaya",
        lat: 33.2815, lng: 131.4960,
        price: "budget", priceLabel: "\u00a51,000\u20131,500",
        type: "Tea House",
        description: "\"Nostalgic\" Oita food. Ox-tail curry with Bungo beef, shareable toriten, excellent sweets.",
        address: "Beppu"
      }
    ]
  },

  kyushu: {
    center: [32.8, 130.7],
    zoom: 8,
    restaurants: [
      {
        name: "Shinchi Chinatown",
        lat: 32.7432, lng: 129.8726,
        price: "budget", priceLabel: "\u00a5500\u20131,000",
        type: "Chinese-Japanese",
        description: "Japan's oldest Chinatown in Nagasaki. Excellent kakuni-manju (braised pork belly buns).",
        address: "Shinchi-machi, Nagasaki"
      },
      {
        name: "Nagasaki Castella (Fukusaya)",
        lat: 32.7477, lng: 129.8802,
        price: "budget", priceLabel: "\u00a51,000\u20132,000",
        type: "Confectionery",
        description: "Heritage Portuguese-legacy honey sponge cake. Caramelized sugar bottom. Since 1624.",
        address: "Funatsuki-machi, Nagasaki"
      },
      {
        name: "Basashi Izakaya (Kumamoto)",
        lat: 32.8032, lng: 130.7079,
        price: "mid", priceLabel: "\u00a52,000\u20134,000",
        type: "Izakaya",
        description: "Raw horse meat sashimi with ginger, garlic, sweet Kyushu soy sauce. Izakaya staple.",
        address: "Shimotori, Kumamoto City"
      },
      {
        name: "Kurobuta Tonkatsu (Kagoshima)",
        lat: 31.5891, lng: 130.5579,
        price: "mid", priceLabel: "\u00a51,200+",
        type: "Tonkatsu",
        description: "Berkshire black pork raised since 18th century. The best pork cutlet in Japan.",
        address: "Near Tenmonkan, Kagoshima"
      },
      {
        name: "Tenmonkan Arcade",
        lat: 31.5885, lng: 130.5565,
        price: "budget", priceLabel: "\u00a5300\u2013800",
        type: "Street Food",
        description: "Satsuma-age fish cakes and Shirokuma shaved ice \u2014 a Kagoshima original.",
        address: "Tenmonkan, Kagoshima"
      },
      {
        name: "Yobuko Morning Market",
        lat: 33.5405, lng: 129.8950,
        price: "budget", priceLabel: "\u00a5500\u20132,000",
        type: "Market",
        description: "Live squid so fresh the tentacles move. Visit before 10 a.m. Crystalline sweet flesh.",
        address: "Yobuko, Karatsu, Saga"
      },
      {
        name: "Chicken Nanban (Miyazaki)",
        lat: 31.9111, lng: 131.4239,
        price: "budget", priceLabel: "\u00a5800+",
        type: "Chicken",
        description: "Fried chicken in sweet vinegar with tartar sauce. Miyazaki signature. Teishoku restaurants.",
        address: "Miyazaki City"
      }
    ]
  }
};

// Price category colors
const PRICE_COLORS = {
  splurge: "#b8382c",
  mid: "#c4a35a",
  budget: "#5a8a6a"
};

const PRICE_LABELS = {
  splurge: "Splurge",
  mid: "Mid-Range",
  budget: "Budget"
};

function initCityMap(cityKey) {
  const data = RESTAURANT_DATA[cityKey];
  if (!data) return;

  const mapContainer = document.getElementById("restaurant-map");
  if (!mapContainer) return;

  // Create map (fitBounds will set the actual view after markers are added)
  const map = L.map("restaurant-map", {
    scrollWheelZoom: false,
    zoomControl: true,
    center: data.center,
    zoom: data.zoom
  });

  // Use CartoDB Positron for a clean, muted aesthetic
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19
  }).addTo(map);

  // Store markers for filtering
  const allMarkers = [];

  data.restaurants.forEach(r => {
    const color = PRICE_COLORS[r.price] || "#888";

    // Custom circle marker
    const marker = L.circleMarker([r.lat, r.lng], {
      radius: 8,
      fillColor: color,
      color: "#fff",
      weight: 2,
      opacity: 1,
      fillOpacity: 0.9
    }).addTo(map);

    // Popup content
    const popup = `
      <div style="font-family: 'EB Garamond', Georgia, serif; min-width: 220px;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
          <strong style="font-size: 1.1em;">${r.name}</strong>
          <span style="color: ${color}; font-weight: 500; white-space: nowrap; margin-left: 12px;">${r.priceLabel}</span>
        </div>
        <div style="font-size: 0.75em; text-transform: uppercase; letter-spacing: 0.1em; color: #8a7e72; margin-bottom: 6px;">
          ${r.type} &middot; ${PRICE_LABELS[r.price]}
        </div>
        <p style="font-size: 0.85em; line-height: 1.6; color: #2c2520; margin: 0 0 6px;">${r.description}</p>
        <p style="font-size: 0.75em; color: #8a7e72; margin: 0; font-style: italic;">${r.address}</p>
      </div>
    `;

    marker.bindPopup(popup, { maxWidth: 300 });

    // Store reference
    marker._restaurantData = r;
    allMarkers.push(marker);
  });

  // Map filter integration
  const mapFilterBtns = document.querySelectorAll(".map-filter-btn");
  mapFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      mapFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      allMarkers.forEach(m => {
        if (filter === "all" || m._restaurantData.price === filter) {
          m.setStyle({ opacity: 1, fillOpacity: 0.9 });
          m.setRadius(8);
        } else {
          m.setStyle({ opacity: 0.2, fillOpacity: 0.15 });
          m.setRadius(5);
        }
      });
    });
  });

  // Fit bounds to markers
  if (allMarkers.length > 0) {
    const group = L.featureGroup(allMarkers);
    map.fitBounds(group.getBounds().pad(0.15));
  }

  // Enable scroll zoom after first interaction, update hint
  map.on("click", () => {
    map.scrollWheelZoom.enable();
    const hint = document.querySelector(".map-hint");
    if (hint) {
      hint.textContent = "Scroll zoom enabled";
      setTimeout(() => { hint.style.opacity = "0"; }, 1500);
    }
  });

  // Generate screen-reader fallback list
  const srFallback = document.getElementById("map-sr-fallback");
  if (srFallback) {
    const list = document.createElement("ul");
    data.restaurants.forEach(r => {
      const li = document.createElement("li");
      li.textContent = `${r.name} (${PRICE_LABELS[r.price]}, ${r.priceLabel}) — ${r.type}. ${r.description} Address: ${r.address}`;
      list.appendChild(li);
    });
    srFallback.appendChild(list);
  }

  return map;
}

// Auto-initialize if data attribute present
document.addEventListener("DOMContentLoaded", () => {
  const mapEl = document.getElementById("restaurant-map");
  if (mapEl) {
    const city = mapEl.dataset.city;
    if (city) {
      initCityMap(city);
    }
  }
});
