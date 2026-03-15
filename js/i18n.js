/* ===================================
   Japan Culinary Guide - i18n Module
   =================================== */

// Early-init script (should also be added inline in <head> to prevent flash of wrong language):
// (function(){try{var l=localStorage.getItem('lang');if(l)document.documentElement.lang=l}catch(e){}})();

const I18N = {
  translations: {
    en: {
      // Navigation & UI
      'nav.destinations': 'Destinations',
      'nav.philosophy': 'Philosophy',
      'nav.attractions': 'Attractions',
      'nav.home': 'Home',
      'nav.roadTrip': 'Road Trip',
      'loader.text': 'Japan Culinary Guide',

      // Hero
      'hero.subtitle': 'A Culinary Journey',
      'hero.description': 'Every city, every prefecture, every mountain valley and coastal village has its own food traditions. This is a guide for those who want to eat like someone who lives in these places.',
      'hero.cta': 'Explore Destinations',
      'hero.scroll': 'scroll',

      // Philosophy
      'philosophy.label': 'Daily Philosophy',
      'philosophy.description': 'Japan does not have a cuisine. It has hundreds. Each destination in this guide covers the food culture, essential dishes, seasonal rhythms, drinking traditions, and dining etiquette of each location\u2014the education you need before you sit down\u2014followed by specific restaurant recommendations across every budget tier.',

      // Destinations
      'dest.label': 'Destinations',
      'dest.title': 'Explore Japan\u2019s Culinary Regions & Attractions',
      'dest.description': 'From the refined counters of Tokyo to the volcanic kitchens of Kyushu, each region offers a distinct culinary identity shaped by geography, history, and the obsessions of its people. Discover temples, castles, and natural wonders along the way.',

      // Tokyo Featured
      'tokyo.chapter': 'Chapter 1',
      'tokyo.subtitle': 'The Capital of Endless Appetite',
      'tokyo.description': 'The most cosmopolitan food city on Earth and one of the most deeply traditional. More Michelin stars than any other metropolis, yet some of its greatest meals are served on plastic trays in rooms with six seats and no sign outside.',
      'tokyo.cta': 'Explore Tokyo',

      // City Card Labels
      'card.chapter2': 'Chapter 2',
      'card.chapter3': 'Chapter 3',
      'card.chapter4': 'Chapter 4',
      'card.chapter5': 'Chapter 5',
      'card.chapter6': 'Chapter 6',
      'card.chapter7': 'Chapter 7',
      'card.attractions': 'Attractions',
      'card.planning': 'Planning',

      // City Taglines
      'osaka.tagline': 'The Nation\u2019s Kitchen \u2014 Eating until you drop',
      'kyoto.tagline': 'The Refined Palate of the Ancient Capital',
      'kobe.tagline': 'Where East Met West on the Plate',
      'fukuoka.tagline': 'Kyushu\u2019s Fearless Food Capital',
      'oita.tagline': 'Hot Springs, Wild Mountains, and an Untouched Pantry',
      'kyushu.tagline': 'A Regional Specialties Overview',
      'nara.tagline': 'Sacred Deer & Ancient Temples',
      'himeji.tagline': 'The White Heron Castle',
      'kurashiki.tagline': 'The White-Walled Merchant Quarter',
      'hiroshima.tagline': 'City of Peace and Resilience',
      'nagasaki.tagline': 'Where East Met West',
      'beppu.tagline': 'The Seven Hells of Hot Springs',
      'takachiho.tagline': 'Where Gods Descended from Heaven',
      'yakushima.tagline': 'The Ancient Cedar Forest',
      'kagoshima.tagline': 'The Naples of the East',
      'nikko.tagline': 'Lavish Shrines in Mountain Forest',
      'roadtrip.tagline': 'Kyushu toll costs \u2014 ETC vs expressway passes',

      // Parallax
      'parallax.kuidaore': '\u201CEating until you drop\u201D \u2014 the Osakan philosophy of food',
      'parallax.shokunin': 'The craftsman ethos \u2014 a ramen shop may serve only one style of broth, perfected over decades',

      // How to Use
      'howto.label': 'How to Use This Guide',
      'howto.title': 'Every Chapter, Two Halves',
      'howto.education.title': 'The Education',
      'howto.education.text': 'Food culture overview, essential dishes and their history, seasonal rhythms, drinking traditions, and dining etiquette. What you need to know before you sit down.',
      'howto.recommendations.title': 'The Recommendations',
      'howto.recommendations.text': 'Specific restaurants across every budget\u2014high-end splurges, mid-range specialists, and budget street-level gems. With prices, addresses, and standout dishes.',
      'howto.local.title': 'The Local Lens',
      'howto.local.text': 'Markets worth visiting, seasonal specialties to time your trip around, local drinks to pair, and the etiquette rules that will earn you respect.',

      // At a Glance
      'glance.label': 'At a Glance',
      'glance.title': 'What Each City Does Best',

      // City descriptions (At a Glance)
      'glance.tokyo.location': 'The Capital of Endless Appetite',
      'glance.tokyo.desc': 'Edomae sushi, shoyu ramen, tempura, tonkatsu, yakitori, soba. The city of obsessive specialization.',
      'glance.osaka.location': 'The Nation\u2019s Kitchen',
      'glance.osaka.desc': 'Takoyaki, okonomiyaki, kushikatsu, kitsune udon. Bold, saucy, affordable \u2014 the democratic table.',
      'glance.kyoto.location': 'The Refined Palate',
      'glance.kyoto.desc': 'Kaiseki, yudofu, yuba, obanzai, matcha. A thousand years of imperial and monastic culinary tradition.',
      'glance.kobe.location': 'Where East Met West',
      'glance.kobe.desc': 'Kobe beef, akashiyaki, sobameshi, Nada sake. Port-city cosmopolitanism and legendary wagyu.',
      'glance.fukuoka.location': 'Kyushu\u2019s Food Capital',
      'glance.fukuoka.desc': 'Hakata tonkotsu ramen, motsu nabe, mentaiko, yatai stalls. Bold, generous, startlingly affordable.',
      'glance.oita.location': 'The Onsen Prefecture',
      'glance.oita.desc': 'Toriten, jigoku-mushi (hell steaming), kabosu citrus, seki mackerel. Japan\u2019s best-kept culinary secret.',
      'glance.kyushu.location': 'Regional Overview',
      'glance.kyushu.desc': 'Nagasaki champon, Kumamoto basashi, Kagoshima kurobuta, Miyazaki chicken nanban. A food world unto itself.',
      'glance.nara.location': 'Japan\u2019s First Permanent Capital',
      'glance.nara.desc': 'Sacred deer, Todai-ji\u2019s Great Buddha, Kasuga Taisha\u2019s 3000 lanterns. Ancient temples in a park where deer roam free.',
      'glance.himeji.location': 'The White Heron Castle',
      'glance.himeji.desc': 'Japan\u2019s best-preserved original castle. UNESCO World Heritage, 83 buildings, never destroyed by war or disaster.',
      'glance.kurashiki.location': 'The White-Walled Merchant Quarter',
      'glance.kurashiki.desc': 'Edo-era warehouses along canals, Ohara Museum of Art, Jeans Street. Japan\u2019s most beautiful merchant district.',
      'glance.hiroshima.location': 'City of Peace',
      'glance.hiroshima.desc': 'Peace Memorial Museum, Atomic Bomb Dome (UNESCO), Shukkeien Garden. A city rebuilt as a monument to peace.',
      'glance.nagasaki.location': 'Where East Met West',
      'glance.nagasaki.desc': 'Dejima trading post, Glover Garden, Peace Park, Inasa-yama night view. 400 years of international exchange.',
      'glance.beppu.location': 'The Seven Hells',
      'glance.beppu.desc': 'Seven spectacular hot springs at 100\u00B0C \u2014 blood-red ponds, cobalt-blue pools, geysers, and crocodile farms.',
      'glance.takachiho.location': 'Where Gods Descended',
      'glance.takachiho.desc': 'Spectacular gorge with emerald waters, Mount Aso\u2019s volcanic caldera. The mythological birthplace of Japan.',
      'glance.yakushima.location': 'The Ancient Cedar Forest',
      'glance.yakushima.desc': 'UNESCO primeval forest, Jomon Sugi (2200+ year-old cedar), Princess Mononoke\u2019s moss forest. A living museum of nature.',
      'glance.kagoshima.location': 'The Naples of the East',
      'glance.kagoshima.desc': 'Active volcano Sakurajima, Shiroyama Park, site of the last samurai battle. Subtropical climate at Kyushu\u2019s southern tip.',
      'glance.nikko.location': 'Lavish Mountain Shrines',
      'glance.nikko.desc': 'Tosho-gu mausoleum (UNESCO), three wise monkeys, Kegon Falls. Ornate gold-and-lacquer opulence in a mountain forest.',
      'glance.roadtrip.name': 'Kyushu Road Trip',
      'glance.roadtrip.location': 'Toll Cost Comparison',
      'glance.roadtrip.desc': 'ETC vs KEP vs TEP passes for a 7-day Fukuoka \u2192 Beppu \u2192 Kirishima \u2192 Yakushima \u2192 Kumamoto \u2192 Nagasaki loop. Save over \u00A56,000.',

      // Footer
      'footer.logo': 'Japan Culinary Guide',
      'footer.tagline': 'For the serious food traveler',
      'footer.bottom': 'Compiled from culinary resources, travel websites, and local publications. Images from Unsplash.'
    },

    pl: {
      // Navigation & UI
      'nav.destinations': 'Destynacje',
      'nav.philosophy': 'Filozofia',
      'nav.attractions': 'Atrakcje',
      'nav.home': 'Strona glowna',
      'nav.roadTrip': 'Trasa',
      'loader.text': 'Japonia Przewodnik Kulinarny',

      // Hero
      'hero.subtitle': 'Kulinarna Podroz',
      'hero.description': 'Kazde miasto, kazda prefektura, kazda gorska dolina i nadmorska wioska ma wlasne tradycje kulinarne. To przewodnik dla tych, ktorzy chca jesc jak ktos, kto w tych miejscach mieszka.',
      'hero.cta': 'Odkryj Destynacje',
      'hero.scroll': 'przewin',

      // Philosophy
      'philosophy.label': 'Filozofia Dnia',
      'philosophy.description': 'Japonia nie ma jednej kuchni. Ma ich setki. Kazda destynacja w tym przewodniku opisuje kulture kulinarna, kluczowe dania, sezonowe rytmy, tradycje picia i etykiete jedzenia danego miejsca\u2014edukacje, ktorej potrzebujesz zanim usiadziesz\u2014a nastepnie konkretne rekomendacje restauracji w kazdym przedziale cenowym.',

      // Destinations
      'dest.label': 'Destynacje',
      'dest.title': 'Odkryj Kulinarne Regiony i Atrakcje Japonii',
      'dest.description': 'Od wyrafinowanych kontuarow Tokio po wulkaniczne kuchnie Kyushu, kazdy region oferuje odrebna tozsamosc kulinarna ksztaltowana przez geografie, historie i pasje swoich mieszkancow. Odkryj swiatynie, zamki i cuda natury po drodze.',

      // Tokyo Featured
      'tokyo.chapter': 'Rozdzial 1',
      'tokyo.subtitle': 'Stolica Nienasyconego Apetytu',
      'tokyo.description': 'Najbardziej kosmopolityczne miasto kulinarne na Ziemi i jedno z najbardziej tradycyjnych. Wiecej gwiazdek Michelin niz jakiekolwiek inne miasto, a jednak niektore z najlepszych posilkow serwowane sa na plastikowych tackach w lokalach z szescioma miejscami i bez szyldu na zewnatrz.',
      'tokyo.cta': 'Odkryj Tokio',

      // City Card Labels
      'card.chapter2': 'Rozdzial 2',
      'card.chapter3': 'Rozdzial 3',
      'card.chapter4': 'Rozdzial 4',
      'card.chapter5': 'Rozdzial 5',
      'card.chapter6': 'Rozdzial 6',
      'card.chapter7': 'Rozdzial 7',
      'card.attractions': 'Atrakcje',
      'card.planning': 'Planowanie',

      // City Taglines
      'osaka.tagline': 'Kuchnia Narodu \u2014 Jesc az do upadlego',
      'kyoto.tagline': 'Wyrafinowane Podniebienie Starozytnej Stolicy',
      'kobe.tagline': 'Gdzie Wschod Spotkal Zachod na Talerzu',
      'fukuoka.tagline': 'Nieustraszona Stolica Kulinarna Kyushu',
      'oita.tagline': 'Gorace Zrodla, Dzikie Gory i Nienaruszona Spizarnia',
      'kyushu.tagline': 'Przeglad Regionalnych Specjalow',
      'nara.tagline': 'Swiete Jelenie i Starozytne Swiatynie',
      'himeji.tagline': 'Zamek Bialej Czapli',
      'kurashiki.tagline': 'Bialoscienna Dzielnica Kupiecka',
      'hiroshima.tagline': 'Miasto Pokoju i Odpornosci',
      'nagasaki.tagline': 'Gdzie Wschod Spotkal Zachod',
      'beppu.tagline': 'Siedem Piekel Goracych Zrodel',
      'takachiho.tagline': 'Gdzie Bogowie Zstapili z Nieba',
      'yakushima.tagline': 'Pradawny Las Cedrowy',
      'kagoshima.tagline': 'Neapol Wschodu',
      'nikko.tagline': 'Wystawne Swiatynie w Gorskim Lesie',
      'roadtrip.tagline': 'Koszty oplat Kyushu \u2014 ETC vs karty autostradowe',

      // Parallax
      'parallax.kuidaore': '\u201CJesc az do upadlego\u201D \u2014 filozofia jedzenia z Osaki',
      'parallax.shokunin': 'Etos rzemieslnika \u2014 bar ramen moze serwowac tylko jeden rodzaj bulionu, doskonalony przez dziesieciolecia',

      // How to Use
      'howto.label': 'Jak Korzystac z Przewodnika',
      'howto.title': 'Kazdy Rozdzial, Dwie Polowy',
      'howto.education.title': 'Edukacja',
      'howto.education.text': 'Przeglad kultury kulinarnej, kluczowe dania i ich historia, sezonowe rytmy, tradycje picia i etykieta jedzenia. Co musisz wiedziec zanim usiadziesz.',
      'howto.recommendations.title': 'Rekomendacje',
      'howto.recommendations.text': 'Konkretne restauracje w kazdym przedziale cenowym\u2014ekskluzywne, srednia polka i uliczne perelki. Z cenami, adresami i wyrozniajacymi sie daniami.',
      'howto.local.title': 'Lokalna Perspektywa',
      'howto.local.text': 'Targi warte odwiedzenia, sezonowe specjaly wokol ktorych warto zaplanowac podroz, lokalne napoje do parowania i zasady etykiety, ktore zyskaja ci szacunek.',

      // At a Glance
      'glance.label': 'W Skrocie',
      'glance.title': 'W Czym Kazde Miasto Jest Najlepsze',

      // City descriptions (At a Glance)
      'glance.tokyo.location': 'Stolica Nienasyconego Apetytu',
      'glance.tokyo.desc': 'Edomae sushi, shoyu ramen, tempura, tonkatsu, yakitori, soba. Miasto obsesyjnej specjalizacji.',
      'glance.osaka.location': 'Kuchnia Narodu',
      'glance.osaka.desc': 'Takoyaki, okonomiyaki, kushikatsu, kitsune udon. Odwazne, soczyste, przystepne \u2014 demokratyczny stol.',
      'glance.kyoto.location': 'Wyrafinowane Podniebienie',
      'glance.kyoto.desc': 'Kaiseki, yudofu, yuba, obanzai, matcha. Tysiac lat cesarskiej i klasztornej tradycji kulinarnej.',
      'glance.kobe.location': 'Gdzie Wschod Spotkal Zachod',
      'glance.kobe.desc': 'Wolowina Kobe, akashiyaki, sobameshi, sake Nada. Kosmopolityzm miasta portowego i legendarne wagyu.',
      'glance.fukuoka.location': 'Stolica Kulinarna Kyushu',
      'glance.fukuoka.desc': 'Hakata tonkotsu ramen, motsu nabe, mentaiko, stragany yatai. Odwazne, hojne, zaskakujaco przystepne.',
      'glance.oita.location': 'Prefektura Onsen',
      'glance.oita.desc': 'Toriten, jigoku-mushi (gotowanie piekielna para), cytrus kabosu, makrela seki. Najlepiej strzezony kulinarny sekret Japonii.',
      'glance.kyushu.location': 'Przeglad Regionu',
      'glance.kyushu.desc': 'Nagasaki champon, Kumamoto basashi, Kagoshima kurobuta, Miyazaki chicken nanban. Kulinarny swiat sam w sobie.',
      'glance.nara.location': 'Pierwsza Stala Stolica Japonii',
      'glance.nara.desc': 'Swiete jelenie, Wielki Budda z Todai-ji, 3000 latarni Kasuga Taisha. Starozytne swiatynie w parku, gdzie jelenie chodza swobodnie.',
      'glance.himeji.location': 'Zamek Bialej Czapli',
      'glance.himeji.desc': 'Najlepiej zachowany oryginalny zamek w Japonii. Dziedzictwo UNESCO, 83 budynki, nigdy nie zniszczony przez wojne ani kleski.',
      'glance.kurashiki.location': 'Bialoscienna Dzielnica Kupiecka',
      'glance.kurashiki.desc': 'Magazyny z epoki Edo wzdluz kanalow, Muzeum Sztuki Ohara, Jeans Street. Najpiekniejsza dzielnica kupiecka Japonii.',
      'glance.hiroshima.location': 'Miasto Pokoju',
      'glance.hiroshima.desc': 'Muzeum Pamieci Pokoju, Kopula Bomby Atomowej (UNESCO), Ogrod Shukkeien. Miasto odbudowane jako pomnik pokoju.',
      'glance.nagasaki.location': 'Gdzie Wschod Spotkal Zachod',
      'glance.nagasaki.desc': 'Faktoria handlowa Dejima, Ogrod Glovera, Park Pokoju, nocny widok z Inasa-yama. 400 lat miedzynarodowej wymiany.',
      'glance.beppu.location': 'Siedem Piekel',
      'glance.beppu.desc': 'Siedem spektakularnych goracych zrodel o temperaturze 100\u00B0C \u2014 krwistoczerwone stawy, kobaltowo-niebieskie baseny, gejzery i farmy krokodyli.',
      'glance.takachiho.location': 'Gdzie Bogowie Zstapili',
      'glance.takachiho.desc': 'Spektakularny wawoz ze szmaragdowa woda, wulkaniczna kaldera Aso. Mitologiczne miejsce narodzin Japonii.',
      'glance.yakushima.location': 'Pradawny Las Cedrowy',
      'glance.yakushima.desc': 'Pradawny las UNESCO, Jomon Sugi (cedr liczacy ponad 2200 lat), las mchu z Ksiezniczki Mononoke. Zywe muzeum natury.',
      'glance.kagoshima.location': 'Neapol Wschodu',
      'glance.kagoshima.desc': 'Czynny wulkan Sakurajima, Park Shiroyama, miejsce ostatniej bitwy samurajow. Subtropikalny klimat na poludniowym krancu Kyushu.',
      'glance.nikko.location': 'Wystawne Gorskie Swiatynie',
      'glance.nikko.desc': 'Mauzoleum Tosho-gu (UNESCO), trzy madre malpy, Wodospad Kegon. Bogato zdobione zloto i laka w gorskim lesie.',
      'glance.roadtrip.name': 'Trasa po Kyushu',
      'glance.roadtrip.location': 'Porownanie Kosztow Oplat',
      'glance.roadtrip.desc': 'Karty ETC vs KEP vs TEP na 7-dniowa petle Fukuoka \u2192 Beppu \u2192 Kirishima \u2192 Yakushima \u2192 Kumamoto \u2192 Nagasaki. Oszczednosc ponad \u00A56 000.',

      // Footer
      'footer.logo': 'Japonia Przewodnik Kulinarny',
      'footer.tagline': 'Dla powaznego podroznika kulinarnego',
      'footer.bottom': 'Opracowano na podstawie zrodel kulinarnych, stron podrozniczych i lokalnych publikacji. Zdjecia z Unsplash.'
    }
  },

  dailyQuotes: {
    en: [
      {
        jp: '\u4E00\u671F\u4E00\u4F1A',
        text: 'One lifetime, one meeting. Every encounter is unique and can never be reproduced. Treasure each meal, each moment, each person at the table\u2014for this exact gathering will never happen again.',
        author: 'Ii Naosuke \u2014 Ichi-go ichi-e, the philosophy of treasuring every encounter'
      },
      {
        jp: '\u98DF\u306F\u547D\u306A\u308A',
        text: 'Food is life itself. In Japan, cooking is not merely sustenance\u2014it is an act of care, a transfer of life energy from ingredient to body. The cook bears responsibility for another person\u2019s well-being.',
        author: 'Ishizuka Sagen \u2014 Shoku wa inochi nari, the foundation of shokuiku'
      },
      {
        jp: '\u65EC\u3092\u98DF\u3059',
        text: 'To eat what is in season is to eat in harmony with nature. A strawberry in winter may fill the stomach, but a strawberry at the peak of spring nourishes the soul.',
        author: 'Japanese culinary principle \u2014 Shun wo taberu, eating with the seasons'
      },
      {
        jp: '\u51FA\u6C41\u306F\u6599\u7406\u306E\u57FA\u672C',
        text: 'Dashi is the foundation of all cooking. From a piece of kelp and a handful of bonito flakes emerges the fifth taste\u2014umami\u2014the invisible architecture upon which all Japanese cuisine is built.',
        author: 'Japanese culinary tradition \u2014 Dashi wa ryouri no kihon'
      },
      {
        jp: '\u7D20\u6750\u3092\u6D3B\u304B\u3059',
        text: 'Let the ingredient speak. The highest form of Japanese cooking is not transformation but revelation\u2014removing everything that stands between the diner and the true nature of what they are eating.',
        author: 'Japanese culinary philosophy \u2014 Sozai wo ikasu'
      },
      {
        jp: '\u8179\u516B\u5206\u76EE\u306B\u533B\u8005\u3044\u3089\u305A',
        text: 'Eat until you are eighty percent full, and you will never need a doctor. This ancient wisdom from Okinawa is not about deprivation\u2014it is about awareness, about listening to the body before the plate is empty.',
        author: 'Okinawan proverb \u2014 Hara hachi bunme ni isha irazu'
      },
      {
        jp: '\u76EE\u3067\u98DF\u3079\u308B',
        text: 'We eat first with our eyes. In Japanese cuisine, presentation is not decoration\u2014it is the first course. The arrangement of food on the plate tells a story of season, place, and the cook\u2019s respect for the diner.',
        author: 'Japanese aesthetic principle \u2014 Me de taberu'
      },
      {
        jp: '\u5305\u4E01\u306F\u6599\u7406\u4EBA\u306E\u9B42',
        text: 'The knife is the soul of the cook. A Japanese chef\u2019s relationship with their blade is intimate and lifelong. The way a fish is cut determines not just its shape but its texture, its interaction with the tongue, its very flavor.',
        author: 'Japanese culinary tradition \u2014 Houchou wa ryourinin no tamashii'
      },
      {
        jp: '\u521D\u5FC3\u5FD8\u308B\u3079\u304B\u3089\u305A',
        text: 'Never forget the beginner\u2019s mind. Even the master who has shaped ten thousand pieces of sushi must approach each one as if it were the first\u2014with full attention, humility, and wonder.',
        author: 'Zeami Motokiyo \u2014 Shoshin wasuru bekarazu'
      },
      {
        jp: '\u4F98\u3073\u5BCC\u3073',
        text: 'In imperfection, there is beauty. The cracked glaze of a tea bowl, the irregular shape of a handmade plate, the slight asymmetry of a carefully placed garnish\u2014these are not flaws, but signatures of life itself.',
        author: 'Sen no Riky\u016B \u2014 Wabi-sabi, finding beauty in imperfection'
      },
      {
        jp: '\u8077\u4EBA\u6C17\u8CEA',
        text: 'The craftsman\u2019s spirit. A ramen shop may serve only one style of broth, perfected over decades. A sushi master may spend three years learning to cook rice before touching fish. Mastery is not breadth\u2014it is depth.',
        author: 'Japanese work ethic \u2014 Shokunin katagi'
      },
      {
        jp: '\u548C\u98DF\u306F\u548C\u306E\u5FC3',
        text: 'Japanese food is the spirit of harmony. Washoku is not a set of recipes but a philosophy\u2014balance of five colors, five tastes, five methods. Each meal is a small universe in equilibrium.',
        author: 'UNESCO Intangible Cultural Heritage \u2014 Washoku wa wa no kokoro'
      },
      {
        jp: '\u5730\u7523\u5730\u6D88',
        text: 'Produce locally, consume locally. The best food travels the shortest distance. Every region of Japan has built its cuisine around what the local soil, sea, and climate provide\u2014this is not limitation but identity.',
        author: 'Japanese food movement \u2014 Chisan chishou'
      },
      {
        jp: '\u3082\u3063\u305F\u3044\u306A\u3044',
        text: 'What a waste\u2014to discard what still has value. In the Japanese kitchen, nothing is wasted: vegetable scraps become stock, fish bones become broth, stale rice becomes crackers. Respect for food is respect for life.',
        author: 'Japanese environmental ethic \u2014 Mottainai'
      },
      {
        jp: '\u3044\u305F\u3060\u304D\u307E\u3059',
        text: 'I humbly receive. Before every meal, these words acknowledge the sacrifice of every living thing on the plate, the labor of every hand that brought it to the table, and the profound gift of being alive to taste it.',
        author: 'Japanese mealtime tradition \u2014 Itadakimasu'
      },
      {
        jp: '\u3054\u3061\u305D\u3046\u3055\u307E\u3067\u3057\u305F',
        text: 'It was a feast. After every meal, these words honor not just the cook but the entire chain of existence that made the meal possible\u2014from sun and rain to farmer and fisherman to the hands that prepared it.',
        author: 'Japanese mealtime tradition \u2014 Gochisousama deshita'
      },
      {
        jp: '\u5668\u3082\u6599\u7406\u306E\u3046\u3061',
        text: 'The vessel is part of the cuisine. In Japan, the plate is not a container\u2014it is a stage. A winter stew arrives in heavy stoneware to warm the hands; a summer sashimi rests on glass to suggest coolness.',
        author: 'Rosanjin Kitaoji \u2014 Utsuwa mo ryouri no uchi'
      },
      {
        jp: '\u4E03\u8EE2\u3073\u516B\u8D77\u304D',
        text: 'Fall seven times, stand up eight. The master sushi chef failed thousands of times before his rice became perfect. Every great dish in Japan is built on a mountain of quiet, persistent failures.',
        author: 'Japanese proverb \u2014 Nana korobi ya oki'
      },
      {
        jp: '\u9053',
        text: 'The Way. In Japan, cooking is not a job\u2014it is a path. Like the way of tea, the way of the sword, or the way of flowers, the way of food is a lifelong practice of discipline, humility, and devotion.',
        author: 'Japanese philosophical concept \u2014 D\u014D, the Way'
      },
      {
        jp: '\u82B1\u9CE5\u98A8\u6708',
        text: 'Flowers, birds, wind, moon\u2014the beauties of nature. Japanese cuisine follows the rhythm of the natural world. Spring brings cherry blossoms and bamboo shoots; autumn brings moon-viewing and matsutake mushrooms.',
        author: 'Japanese aesthetic concept \u2014 Kachou fuugetsu'
      },
      {
        jp: '\u4E09\u65B9\u3088\u3057',
        text: 'Good for the buyer, good for the seller, good for society. The greatest restaurants in Japan are not built on ambition but on this principle\u2014that a transaction should leave the world slightly better than before.',
        author: 'Omi merchant philosophy \u2014 Sanpou yoshi'
      },
      {
        jp: '\u8336\u7985\u4E00\u5473',
        text: 'Tea and Zen have the same taste. In the tea room as in the kitchen, every gesture is meditation. Boiling water, cutting vegetables, arranging a plate\u2014when done with full presence, the ordinary becomes sacred.',
        author: 'Zen Buddhist saying \u2014 Chazen ichimi'
      },
      {
        jp: '\u98A8\u571F',
        text: 'Climate and land. Japanese cuisine cannot be separated from its geography. The cold currents that bring squid to Hakodate, the volcanic soil that sweetens Kagoshima\u2019s sweet potatoes\u2014the land is the first ingredient.',
        author: 'Watsuji Tetsur\u014D \u2014 F\u016Bdo, the philosophy of climate and culture'
      },
      {
        jp: '\u4E94\u5473\u4E94\u8272\u4E94\u6CD5',
        text: 'Five tastes, five colors, five methods. Sweet, sour, salty, bitter, umami. White, black, red, green, yellow. Raw, simmered, grilled, steamed, fried. A single meal should contain all fifteen\u2014this is the architecture of balance.',
        author: 'Washoku principle \u2014 Gomi goshoku gohou'
      },
      {
        jp: '\u6B8B\u5FC3',
        text: 'The lingering spirit. After the last bite, after the final sip of tea, there is a moment of stillness\u2014a space to absorb what has passed. The best meals do not end when the plate is cleared; they continue in memory.',
        author: 'Martial arts and tea ceremony concept \u2014 Zanshin'
      },
      {
        jp: '\u77E5\u8DB3',
        text: 'To know what is enough. The greatest Japanese meals are often the simplest: a bowl of rice, a piece of grilled fish, a cup of miso, a few pickles. Abundance is not quantity\u2014it is the awareness that nothing is missing.',
        author: 'Zen Buddhist teaching \u2014 Chisoku'
      },
      {
        jp: '\u5B88\u7834\u96E2',
        text: 'Follow the rules, break the rules, transcend the rules. Every great Japanese chef begins by imitating the master exactly. Only after years of faithful repetition does personal expression emerge\u2014and only then is it earned.',
        author: 'Japanese mastery concept \u2014 Shu-ha-ri'
      },
      {
        jp: '\u5B9F\u308B\u307B\u3069\u982D\u3092\u5782\u308C\u308B\u7A32\u7A42\u304B\u306A',
        text: 'The more the rice grows, the more it bows its head. The greatest chefs in Japan are often the most humble. Mastery brings not arrogance but a deeper understanding of how much remains to learn.',
        author: 'Japanese proverb \u2014 Minoru hodo atama wo tareru inaho kana'
      },
      {
        jp: '\u7E01',
        text: 'Connection, fate, the invisible thread. Every meal you eat in Japan exists because of a chain of relationships\u2014between farmer and soil, fisherman and sea, master and apprentice, cook and guest. You are part of that chain.',
        author: 'Buddhist concept \u2014 En, the interconnection of all things'
      },
      {
        jp: '\u771F\u5584\u7F8E',
        text: 'Truth, goodness, beauty. The ideal Japanese dish achieves all three: truth in the honest expression of ingredients, goodness in the nourishment it provides, and beauty in its presentation. Remove any one, and the dish is incomplete.',
        author: 'Japanese aesthetic ideal \u2014 Shin-zen-bi'
      },
      {
        jp: '\u6E29\u6545\u77E5\u65B0',
        text: 'Study the old to understand the new. The most innovative chefs in Japan are also the deepest students of tradition. You cannot break rules you do not understand; you cannot transcend a foundation you have not built.',
        author: 'Confucius, adopted into Japanese philosophy \u2014 Onko chishin'
      }
    ],
    pl: [
      {
        jp: '\u4E00\u671F\u4E00\u4F1A',
        text: 'Jedno zycie, jedno spotkanie. Kazde spotkanie jest wyjatkowe i nigdy nie moze byc odtworzone. Doceniaj kazdy posilek, kazda chwile, kazda osobe przy stole\u2014bo to dokladne zgromadzenie juz nigdy sie nie powtorzy.',
        author: 'Ii Naosuke \u2014 Ichi-go ichi-e, filozofia doceniania kazdego spotkania'
      },
      {
        jp: '\u98DF\u306F\u547D\u306A\u308A',
        text: 'Jedzenie to samo zycie. W Japonii gotowanie to nie tylko pozywienie\u2014to akt troski, transfer energii zyciowej ze skladnika do ciala. Kucharz ponosi odpowiedzialnosc za dobre samopoczucie drugiego czlowieka.',
        author: 'Ishizuka Sagen \u2014 Shoku wa inochi nari, fundament shokuiku'
      },
      {
        jp: '\u65EC\u3092\u98DF\u3059',
        text: 'Jesc to, co jest w sezonie, to jesc w harmonii z natura. Truskawka zima moze napelnic zoladek, ale truskawka u szczytu wiosny odzywa dusze.',
        author: 'Japonska zasada kulinarna \u2014 Shun wo taberu, jedzenie z sezonami'
      },
      {
        jp: '\u51FA\u6C41\u306F\u6599\u7406\u306E\u57FA\u672C',
        text: 'Dashi jest fundamentem calego gotowania. Z kawalka wodorostow i garsc platkow bonito wylapia sie piaty smak\u2014umami\u2014niewidzialna architekture, na ktorej zbudowana jest cala kuchnia japonska.',
        author: 'Japonska tradycja kulinarna \u2014 Dashi wa ryouri no kihon'
      },
      {
        jp: '\u7D20\u6750\u3092\u6D3B\u304B\u3059',
        text: 'Pozwol skladnikowi przemowic. Najwyzsza forma japonskiego gotowania to nie transformacja, lecz objawienie\u2014usuniecie wszystkiego, co stoi miedzy jedzacym a prawdziwa natura tego, co je.',
        author: 'Japonska filozofia kulinarna \u2014 Sozai wo ikasu'
      },
      {
        jp: '\u8179\u516B\u5206\u76EE\u306B\u533B\u8005\u3044\u3089\u305A',
        text: 'Jedz do osiemdziesieciu procent sytosci, a nigdy nie bedziesz potrzebowal lekarza. Ta starozytna madrosc z Okinawy nie dotyczy wyrzeczenia\u2014chodzi o swiadomosc, o sluchanie ciala zanim talerz bedzie pusty.',
        author: 'Przysłowie z Okinawy \u2014 Hara hachi bunme ni isha irazu'
      },
      {
        jp: '\u76EE\u3067\u98DF\u3079\u308B',
        text: 'Najpierw jemy oczami. W kuchni japonskiej prezentacja to nie dekoracja\u2014to pierwsze danie. Uklad jedzenia na talerzu opowiada historie sezonu, miejsca i szacunku kucharza dla goscia.',
        author: 'Japonska zasada estetyczna \u2014 Me de taberu'
      },
      {
        jp: '\u5305\u4E01\u306F\u6599\u7406\u4EBA\u306E\u9B42',
        text: 'Noz jest dusza kucharza. Relacja japonskiego szefa kuchni z ostrzem jest intymna i dozywotnia. Sposob ciecia ryby decyduje nie tylko o jej ksztalcie, ale o teksturze, interakcji z jezykiem i samym smaku.',
        author: 'Japonska tradycja kulinarna \u2014 Houchou wa ryourinin no tamashii'
      },
      {
        jp: '\u521D\u5FC3\u5FD8\u308B\u3079\u304B\u3089\u305A',
        text: 'Nigdy nie zapominaj o umysle poczatkujacego. Nawet mistrz, ktory uformowal dziesiec tysiecy kawalkow sushi, musi podchodzic do kazdego jak do pierwszego\u2014z pelna uwaga, pokora i zachwytem.',
        author: 'Zeami Motokiyo \u2014 Shoshin wasuru bekarazu'
      },
      {
        jp: '\u4F98\u3073\u5BCC\u3073',
        text: 'W niedoskonalosci jest piekno. Spekana glazura czarki do herbaty, nieregularny ksztalt reczenie robionego talerza, lekka asymetria starannie ulozonego garnirunku\u2014to nie wady, lecz sygnatury samego zycia.',
        author: 'Sen no Riky\u016B \u2014 Wabi-sabi, znajdowanie piekna w niedoskonalosci'
      },
      {
        jp: '\u8077\u4EBA\u6C17\u8CEA',
        text: 'Duch rzemieslnika. Bar ramen moze serwowac tylko jeden rodzaj bulionu, doskonalony przez dziesieciolecia. Mistrz sushi moze spedzic trzy lata na nauce gotowania ryzu zanim dotknie ryby. Mistrzostwo to nie szerokosc\u2014to glebokosc.',
        author: 'Japonska etyka pracy \u2014 Shokunin katagi'
      },
      {
        jp: '\u548C\u98DF\u306F\u548C\u306E\u5FC3',
        text: 'Japonskie jedzenie to duch harmonii. Washoku to nie zbior przepisow, lecz filozofia\u2014rownowaga pieciu kolorow, pieciu smakow, pieciu metod. Kazdy posilek to maly wszechswiat w rownowadze.',
        author: 'Niematerialne Dziedzictwo Kulturowe UNESCO \u2014 Washoku wa wa no kokoro'
      },
      {
        jp: '\u5730\u7523\u5730\u6D88',
        text: 'Produkuj lokalnie, konsumuj lokalnie. Najlepsze jedzenie podrozuje najkrotsza droga. Kazdy region Japonii zbudowal swoja kuchnie wokol tego, co zapewnia lokalna gleba, morze i klimat\u2014to nie ograniczenie, lecz tozsamosc.',
        author: 'Japonski ruch zywnosciowy \u2014 Chisan chishou'
      },
      {
        jp: '\u3082\u3063\u305F\u3044\u306A\u3044',
        text: 'Jaka szkoda\u2014wyrzucac to, co jeszcze ma wartosc. W japonskiej kuchni nic sie nie marnuje: obierki warzyw staja sie bulionem, osci rybne rosołem, czerstwy ryz krakersami. Szacunek dla jedzenia to szacunek dla zycia.',
        author: 'Japonska etyka srodowiskowa \u2014 Mottainai'
      },
      {
        jp: '\u3044\u305F\u3060\u304D\u307E\u3059',
        text: 'Pokornie przyjmuje. Przed kazdym posilkiem te slowa uznaja poswiecenie kazdej zywej istoty na talerzu, prace kazdej reki, ktora przyniosla je na stol, i gleboki dar bycia zywym, by to smakowac.',
        author: 'Japonska tradycja posilkowa \u2014 Itadakimasu'
      },
      {
        jp: '\u3054\u3061\u305D\u3046\u3055\u307E\u3067\u3057\u305F',
        text: 'To byla uczta. Po kazdym posilku te slowa oddaja czesc nie tylko kucharzowi, ale calemu lancuchowi istnienia, ktory umozliwil posilek\u2014od slonca i deszczu po rolnika i rybaka az po rece, ktore go przygotowaly.',
        author: 'Japonska tradycja posilkowa \u2014 Gochisousama deshita'
      },
      {
        jp: '\u5668\u3082\u6599\u7406\u306E\u3046\u3061',
        text: 'Naczynie jest czescia kuchni. W Japonii talerz nie jest pojemnikiem\u2014jest scena. Zimowy gulasz przybywa w ciezkim kamionkowym naczyniu, by ogrzac dlonie; letnie sashimi spoczywa na szkle, by sugerowac chlod.',
        author: 'Rosanjin Kitaoji \u2014 Utsuwa mo ryouri no uchi'
      },
      {
        jp: '\u4E03\u8EE2\u3073\u516B\u8D77\u304D',
        text: 'Upadnij siedem razy, wstan osiem. Mistrz sushi ponosil porazki tysiace razy, zanim jego ryz stal sie doskonaly. Kazde wspaniale danie w Japonii jest zbudowane na gorze cichych, wytrwalych porazek.',
        author: 'Japonskie przysłowie \u2014 Nana korobi ya oki'
      },
      {
        jp: '\u9053',
        text: 'Droga. W Japonii gotowanie to nie praca\u2014to sciezka. Jak droga herbaty, droga miecza czy droga kwiatow, droga jedzenia to dozywotnia praktyka dyscypliny, pokory i oddania.',
        author: 'Japonska koncepcja filozoficzna \u2014 D\u014D, Droga'
      },
      {
        jp: '\u82B1\u9CE5\u98A8\u6708',
        text: 'Kwiaty, ptaki, wiatr, ksiezyc\u2014piekno natury. Kuchnia japonska podaza za rytmem swiata przyrody. Wiosna przynosi kwiaty wisni i pedy bambusa; jesien przynosi ogladanie ksiezyca i grzyby matsutake.',
        author: 'Japonska koncepcja estetyczna \u2014 Kachou fuugetsu'
      },
      {
        jp: '\u4E09\u65B9\u3088\u3057',
        text: 'Dobre dla kupujacego, dobre dla sprzedajacego, dobre dla spoleczenstwa. Najlepsze restauracje w Japonii nie sa budowane na ambicji, lecz na tej zasadzie\u2014ze transakcja powinna zostawic swiat odrobine lepszym niz wczesniej.',
        author: 'Filozofia kupcow z Omi \u2014 Sanpou yoshi'
      },
      {
        jp: '\u8336\u7985\u4E00\u5473',
        text: 'Herbata i Zen maja ten sam smak. W pokoju herbacianym, jak w kuchni, kazdy gest jest medytacja. Gotowanie wody, krojenie warzyw, ukladanie talerza\u2014gdy wykonywane z pelna obecnoscia, zwyczajnosc staje sie swietoscia.',
        author: 'Powiedzenie buddyzmu Zen \u2014 Chazen ichimi'
      },
      {
        jp: '\u98A8\u571F',
        text: 'Klimat i ziemia. Kuchni japonskiej nie da sie oddzielic od jej geografii. Zimne prady, ktore przynosza kalmary do Hakodate, wulkaniczna gleba, ktora osladza bataty z Kagoshimy\u2014ziemia jest pierwszym skladnikiem.',
        author: 'Watsuji Tetsur\u014D \u2014 F\u016Bdo, filozofia klimatu i kultury'
      },
      {
        jp: '\u4E94\u5473\u4E94\u8272\u4E94\u6CD5',
        text: 'Piec smakow, piec kolorow, piec metod. Slodki, kwasny, slony, gorzki, umami. Bialy, czarny, czerwony, zielony, zolty. Surowy, duszony, grillowany, gotowany na parze, smazony. Jeden posilek powinien zawierac wszystkie pietnascie\u2014to architektura rownowagi.',
        author: 'Zasada washoku \u2014 Gomi goshoku gohou'
      },
      {
        jp: '\u6B8B\u5FC3',
        text: 'Duch, ktory pozostaje. Po ostatnim kęsie, po ostatnim lyku herbaty, nastepuje chwila ciszy\u2014przestrzen, by wchłonac to, co minelo. Najlepsze posilki nie koncza sie, gdy talerz jest sprzatniety; trwaja w pamieci.',
        author: 'Koncept sztuk walki i ceremonii herbaty \u2014 Zanshin'
      },
      {
        jp: '\u77E5\u8DB3',
        text: 'Wiedziec, co jest wystarczajace. Najwspanialsze japonskie posilki sa czesto najprostsze: miska ryzu, kawalek grillowanej ryby, kubek miso, kilka kiszonek. Obfitosc to nie ilosc\u2014to swiadomosc, ze niczego nie brakuje.',
        author: 'Nauka buddyzmu Zen \u2014 Chisoku'
      },
      {
        jp: '\u5B88\u7834\u96E2',
        text: 'Postepuj wedlug zasad, lamz zasady, przekraczaj zasady. Kazdy wielki japonski szef kuchni zaczyna od dokladnego nasladowania mistrza. Dopiero po latach wiernego powtarzania pojawia sie osobista ekspresja\u2014i dopiero wtedy jest zasluzona.',
        author: 'Japonska koncepcja mistrzostwa \u2014 Shu-ha-ri'
      },
      {
        jp: '\u5B9F\u308B\u307B\u3069\u982D\u3092\u5782\u308C\u308B\u7A32\u7A42\u304B\u306A',
        text: 'Im bardziej ryz rosnie, tym bardziej pochyla glowe. Najwieksi szefowie kuchni w Japonii sa czesto najbardziej pokorni. Mistrzostwo przynosi nie arogancje, lecz glebsze zrozumienie, ile jeszcze pozostaje do nauczenia.',
        author: 'Japonskie przysłowie \u2014 Minoru hodo atama wo tareru inaho kana'
      },
      {
        jp: '\u7E01',
        text: 'Polaczenie, przeznaczenie, niewidzialna nic. Kazdy posilek, ktory jesz w Japonii, istnieje dzieki lancuchowi relacji\u2014miedzy rolnikiem a gleba, rybakiem a morzem, mistrzem a uczniem, kucharzem a gosciem. Jestes czescia tego lancucha.',
        author: 'Koncepcja buddyjska \u2014 En, wzajemne polaczenie wszystkich rzeczy'
      },
      {
        jp: '\u771F\u5584\u7F8E',
        text: 'Prawda, dobro, piekno. Idealne japonskie danie osiaga wszystkie trzy: prawde w uczciwej ekspresji skladnikow, dobro w odzywianiu, ktore zapewnia, i piekno w prezentacji. Usun jedno, a danie jest niepelne.',
        author: 'Japonski ideal estetyczny \u2014 Shin-zen-bi'
      },
      {
        jp: '\u6E29\u6545\u77E5\u65B0',
        text: 'Studiuj stare, by zrozumiec nowe. Najbardziej innowacyjni szefowie kuchni w Japonii sa tez najglebszymi studentami tradycji. Nie mozesz lamac zasad, ktorych nie rozumiesz; nie mozesz przekroczyc fundamentu, ktorego nie zbudowales.',
        author: 'Konfucjusz, przyjety do japonskiej filozofii \u2014 Onko chishin'
      }
    ]
  },

  currentLang: 'en',

  /**
   * Initialise i18n: check localStorage for saved language, apply it.
   */
  init() {
    var savedLang = 'en';
    try {
      savedLang = localStorage.getItem('lang') || 'en';
    } catch (e) {
      // localStorage unavailable
    }
    if (!this.translations[savedLang]) {
      savedLang = 'en';
    }
    this.setLanguage(savedLang);
  },

  /**
   * Set the active language, apply translations, persist choice.
   * @param {string} lang - 'en' or 'pl'
   */
  setLanguage(lang) {
    if (!this.translations[lang]) return;
    this.currentLang = lang;

    // Persist to localStorage
    try {
      localStorage.setItem('lang', lang);
    } catch (e) {
      // localStorage unavailable
    }

    // Update <html lang>
    document.documentElement.lang = lang;

    // Apply all translations
    this.applyTranslations(lang);

    // Update language switcher UI (if present)
    var switchers = document.querySelectorAll('[data-lang-switch]');
    switchers.forEach(function (btn) {
      if (btn.getAttribute('data-lang-switch') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update daily quote if elements exist
    this.applyDailyQuote(lang);
  },

  /**
   * Walk the DOM and replace text for data-i18n / data-i18n-html elements.
   * @param {string} lang - language key
   */
  applyTranslations(lang) {
    var dict = this.translations[lang];
    if (!dict) return;

    // data-i18n  →  textContent
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // data-i18n-html  →  innerHTML  (for content with HTML entities)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });
  },

  /**
   * Return the daily quote for the given language.
   * Uses a deterministic day-of-year index (UTC) so every visitor sees the
   * same quote on the same calendar day.
   * @param {string} lang - 'en' or 'pl'
   * @returns {object} { jp, text, author }
   */
  getDailyQuote(lang) {
    var quotes = this.dailyQuotes[lang] || this.dailyQuotes['en'];
    var now = new Date();
    var startUTC = Date.UTC(now.getFullYear(), 0, 1);
    var todayUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    var dayOfYear = Math.floor((todayUTC - startUTC) / 86400000);
    var index = dayOfYear % quotes.length;
    return quotes[index];
  },

  /**
   * Update the daily philosophy quote elements if they exist on the page.
   * @param {string} lang - 'en' or 'pl'
   */
  applyDailyQuote(lang) {
    var quote = this.getDailyQuote(lang);
    var elText = document.getElementById('daily-quote-text');
    var elJp = document.getElementById('daily-quote-jp');
    var elAuthor = document.getElementById('daily-quote-author');

    if (elText) elText.textContent = '\u201C' + quote.text + '\u201D';
    if (elJp) elJp.textContent = quote.jp;
    if (elAuthor) elAuthor.textContent = '\u2014 ' + quote.author;
  }
};

document.addEventListener('DOMContentLoaded', function () {
  I18N.init();
});
