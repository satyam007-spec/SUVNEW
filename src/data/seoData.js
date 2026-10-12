// Centralized SEO and AEO Registry for SUVHUB
// Complies with:
// 1. Unique URLs
// 2. 1 Main Keyword + 2 Related Keywords per page
// 3. Title rules (30-60 characters, branded, keyword-targeted)
// 4. Meta description rules (120-160 characters, engaging, actionable CTA)

export const SEO_DATA = {
  // Main Static Pages
  "/": {
    url: "/",
    mainKeyword: "SUV reviews India",
    relatedKeywords: ["best family SUVs", "SUV car comparisons"],
    title: "SUVHUB | SUV Reviews, Comparisons & Guides India",
    description: "Explore in-depth SUV reviews, head-to-head comparisons, and practical family buying guides tailored for Indian road conditions. Start exploring today!"
  },
  "/blogs": {
    url: "/blogs",
    mainKeyword: "SUV blog articles",
    relatedKeywords: ["car buying advice", "Indian automotive trends"],
    title: "SUV Articles & Buying Guides | SUVHUB Blog",
    description: "Read expert SUV articles, car comparisons, and practical buying checklists. Get trustworthy guidance for your next vehicle purchase at SUVHUB."
  },
  "/reviews": {
    url: "/reviews",
    mainKeyword: "Indian SUV reviews",
    relatedKeywords: ["Mahindra XUV700 review", "Tata Harrier review"],
    title: "Detailed Indian SUV Reviews & Deep Dives | SUVHUB",
    description: "Read honest, practical reviews of top Indian SUVs including XUV700, Harrier, Creta, Seltos, Fortuner, and Scorpio-N. Discover real comfort and space."
  },
  "/comparisons": {
    url: "/comparisons",
    mainKeyword: "SUV comparisons India",
    relatedKeywords: ["Creta vs Seltos", "XUV700 vs Harrier"],
    title: "SUV Comparisons & Head-to-Head Tests | SUVHUB",
    description: "Compare India's most popular SUVs side by side. Evaluate real cabin space, boot utility, ride quality, and daily ownership costs before you buy."
  },
  "/buying-guides": {
    url: "/buying-guides",
    mainKeyword: "SUV buying guide",
    relatedKeywords: ["petrol vs diesel SUV", "family SUV checklist"],
    title: "SUV Buying Guides & Checklists | SUVHUB Advice",
    description: "Learn how to choose the right SUV for your family. Compare petrol vs diesel economics, inspect showroom cars, and avoid common buying mistakes."
  },
  "/about": {
    url: "/about",
    mainKeyword: "about SUVHUB project",
    relatedKeywords: ["automotive research portal", "college car project"],
    title: "About SUVHUB | Indian Automotive Information Project",
    description: "Learn about SUVHUB, an independent college project dedicated to simplifying SUV choices through transparent, jargon-free automotive advice."
  },
  "/contact": {
    url: "/contact",
    mainKeyword: "contact SUVHUB team",
    relatedKeywords: ["car questions feedback", "automotive project contact"],
    title: "Contact SUVHUB | Inquiries & Feedback Portal",
    description: "Have questions about our SUV reviews or buying guides? Reach out to the SUVHUB college project team with your questions, feedback, and ideas."
  },

  // 6 Dedicated SUV Review Pages
  "/reviews/mahindra-xuv700": {
    url: "/reviews/mahindra-xuv700",
    mainKeyword: "Mahindra XUV700 review",
    relatedKeywords: ["XUV700 7 seater space", "XUV700 ADAS features"],
    title: "Mahindra XUV700 Review: Space & Tech | SUVHUB",
    description: "Detailed Mahindra XUV700 review covering dual digital screens, Level-2 ADAS, flexible 7-seater space, and highway ride quality for Indian families."
  },
  "/reviews/tata-harrier": {
    url: "/reviews/tata-harrier",
    mainKeyword: "Tata Harrier review",
    relatedKeywords: ["Tata Harrier 5 seater comfort", "Harrier road presence"],
    title: "Tata Harrier Review: Lounge Comfort & Poise | SUVHUB",
    description: "Read our comprehensive Tata Harrier review. Explore Land Rover-derived platform stability, rear seat lounge legroom, and highway road presence."
  },
  "/reviews/hyundai-creta": {
    url: "/reviews/hyundai-creta",
    mainKeyword: "Hyundai Creta review",
    relatedKeywords: ["Creta compact SUV space", "Hyundai Creta ride comfort"],
    title: "Hyundai Creta Review: Benchmark Compact SUV | SUVHUB",
    description: "In-depth Hyundai Creta review focusing on plush ride comfort, panoramic sunroof, city maneuverability, and long-term resale reliability in India."
  },
  "/reviews/kia-seltos": {
    url: "/reviews/kia-seltos",
    mainKeyword: "Kia Seltos review",
    relatedKeywords: ["Kia Seltos sporty handling", "Seltos interior tech"],
    title: "Kia Seltos Review: Sporty Styling & Tech | SUVHUB",
    description: "Explore the Kia Seltos review covering aggressive Tiger Nose styling, connected dual displays, sporty chassis response, and city ergonomics."
  },
  "/reviews/toyota-fortuner": {
    url: "/reviews/toyota-fortuner",
    mainKeyword: "Toyota Fortuner review",
    relatedKeywords: ["Fortuner 4x4 reliability", "Fortuner resale value India"],
    title: "Toyota Fortuner Review: Rugged Legend | SUVHUB",
    description: "Discover why the Toyota Fortuner remains the king of full-size ladder-frame SUVs. Read about legendary durability, resale value, and 4x4 capability."
  },
  "/reviews/mahindra-scorpio-n": {
    url: "/reviews/mahindra-scorpio-n",
    mainKeyword: "Mahindra Scorpio-N review",
    relatedKeywords: ["Scorpio N body on frame", "Scorpio N 3 row practicality"],
    title: "Mahindra Scorpio-N Review: Butch Capability | SUVHUB",
    description: "Detailed Mahindra Scorpio-N review analyzing ladder-frame engineering, 3-row layout, Frequency Dependent Damping, and commanding road presence."
  },

  // 3 Dedicated Comparison Pages
  "/comparisons/xuv700-vs-harrier": {
    url: "/comparisons/xuv700-vs-harrier",
    mainKeyword: "XUV700 vs Harrier comparison",
    relatedKeywords: ["Mahindra vs Tata mid size SUV", "Harrier or XUV700 which is better"],
    title: "Mahindra XUV700 vs Tata Harrier Comparison | SUVHUB",
    description: "Direct head-to-head comparison of XUV700 vs Harrier. Compare 7-seater tech versatility against 5-seater lounge comfort and highway road poise."
  },
  "/comparisons/creta-vs-seltos": {
    url: "/comparisons/creta-vs-seltos",
    mainKeyword: "Creta vs Seltos comparison",
    relatedKeywords: ["Hyundai Creta vs Kia Seltos", "best compact SUV India"],
    title: "Hyundai Creta vs Kia Seltos Comparison | SUVHUB",
    description: "Compare Hyundai Creta and Kia Seltos across suspension comfort, sporty handling, tech ergonomics, and everyday city usability to pick a winner."
  },
  "/comparisons/scorpio-n-vs-fortuner": {
    url: "/comparisons/scorpio-n-vs-fortuner",
    mainKeyword: "Scorpio N vs Fortuner comparison",
    relatedKeywords: ["ladder frame SUV India", "Scorpio N vs Fortuner off road"],
    title: "Scorpio-N vs Toyota Fortuner Comparison | SUVHUB",
    description: "Compare Mahindra Scorpio-N vs Toyota Fortuner. Analyze rugged 4x4 capability, cabin luxury, long-distance touring comfort, and value for money."
  },

  // Exactly 10 Blogs (Unique URLs)
  "/blogs/best-suvs-for-indian-families": {
    url: "/blogs/best-suvs-for-indian-families",
    mainKeyword: "best family SUVs India",
    relatedKeywords: ["5 vs 7 seater SUV family", "family car safety features"],
    title: "Best SUVs for Indian Families: Essential Guide | SUVHUB",
    description: "Discover what Indian families must check before buying an SUV, from 2nd-row legroom and crash safety to boot space practicality and city comfort."
  },
  "/blogs/mahindra-xuv700-vs-tata-harrier": {
    url: "/blogs/mahindra-xuv700-vs-tata-harrier",
    mainKeyword: "XUV700 vs Harrier guide",
    relatedKeywords: ["mid size SUV comparison India", "Mahindra vs Tata reliability"],
    title: "Mahindra XUV700 vs Tata Harrier: Which Makes Sense? | SUVHUB",
    description: "In-depth guide comparing XUV700 and Harrier. Evaluate design, cabin tech, passenger comfort, and highway performance to choose the right SUV."
  },
  "/blogs/hyundai-creta-vs-kia-seltos": {
    url: "/blogs/hyundai-creta-vs-kia-seltos",
    mainKeyword: "Creta vs Seltos buyer guide",
    relatedKeywords: ["compact SUV comparison India", "Creta or Seltos for family"],
    title: "Hyundai Creta vs Kia Seltos: Practical Comparison | SUVHUB",
    description: "Detailed comparison between Hyundai Creta and Kia Seltos evaluating ride softness, sporty steering, cabin features, and ownership economics."
  },
  "/blogs/top-things-to-check-before-buying-a-new-suv": {
    url: "/blogs/top-things-to-check-before-buying-a-new-suv",
    mainKeyword: "things to check before buying SUV",
    relatedKeywords: ["SUV pre delivery inspection", "new car buyer checklist India"],
    title: "Top Things to Check Before Buying a New SUV | SUVHUB",
    description: "Essential pre-purchase checklist covering real on-road costs, showroom test-drive tips, service reach, and daylight PDI stockyard inspections."
  },
  "/blogs/why-suvs-have-become-so-popular-in-india": {
    url: "/blogs/why-suvs-have-become-so-popular-in-india",
    mainKeyword: "why SUVs popular in India",
    relatedKeywords: ["Indian SUV market growth", "ground clearance advantage India"],
    title: "Why SUVs Have Become So Popular in India | SUVHUB Trends",
    description: "Explore the cultural and road infrastructure drivers behind India's massive SUV boom, from ground clearance to commanding seating posture."
  },
  "/blogs/mahindra-scorpio-n-review": {
    url: "/blogs/mahindra-scorpio-n-review",
    mainKeyword: "Mahindra Scorpio N everyday review",
    relatedKeywords: ["Scorpio N practicality", "Scorpio N city driving comfort"],
    title: "Mahindra Scorpio-N: Design, Tech & Practicality | SUVHUB",
    description: "Read our comprehensive Scorpio-N analysis exploring butch road presence, 3-row layout, Frequency Dependent Damping, and daily urban usability."
  },
  "/blogs/toyota-fortuner-why-is-it-still-so-popular": {
    url: "/blogs/toyota-fortuner-why-is-it-still-so-popular",
    mainKeyword: "why Toyota Fortuner popular",
    relatedKeywords: ["Fortuner reliability India", "Fortuner resale value reasons"],
    title: "Toyota Fortuner: Why Is It Still So Popular? | SUVHUB",
    description: "Explore why the Toyota Fortuner commands unmatched road presence, indestructible durability, and market-leading resale value across India."
  },
  "/blogs/petrol-vs-diesel-suv": {
    url: "/blogs/petrol-vs-diesel-suv",
    mainKeyword: "petrol vs diesel SUV",
    relatedKeywords: ["diesel DPF issues India", "SUV mileage running cost"],
    title: "Petrol vs Diesel SUV: Which One Should You Choose? | SUVHUB",
    description: "Compare petrol and diesel SUVs with real math. Calculate monthly mileage break-even, understand DPF filters, and make a smart economic choice."
  },
  "/blogs/5-important-suv-features-you-should-not-ignore": {
    url: "/blogs/5-important-suv-features-you-should-not-ignore",
    mainKeyword: "important SUV features",
    relatedKeywords: ["must have car features India", "ventilated seats SUV safety"],
    title: "5 Important SUV Features You Should Not Ignore | SUVHUB",
    description: "Cut through showroom marketing hype. Discover the five genuinely transformative SUV features for safety, summer comfort, and daily convenience."
  },
  "/blogs/how-to-choose-the-right-suv-for-your-lifestyle": {
    url: "/blogs/how-to-choose-the-right-suv-for-your-lifestyle",
    mainKeyword: "choose right SUV lifestyle",
    relatedKeywords: ["SUV buyer decision guide", "best SUV for city and highway"],
    title: "How to Choose the Right SUV for Your Lifestyle | SUVHUB",
    description: "Find the ideal SUV matching your exact lifestyle: city commuter, growing family, long-distance cruiser, or weekend off-road enthusiast."
  }
};
