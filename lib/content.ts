export const SITE = {
  name: "chrétienstudios",
  email: "chretienstudios@gmail.com",
  instagram: "https://www.instagram.com/chretienstudios/",
  /** Portrait for the About section, e.g. "/about/max.jpg" (put the file in /public/about). Leave empty for a blank frame. */
  photo: "/about/max.jpg",
};

export const ABOUT = {
  credentials: [
    { title: "Bachelor of Design and Architecture", school: "Ara Institute of Canterbury, Christchurch", logo: "/about/ara.png" },
    { title: "Master of Sport Management", school: "University of San Francisco, California", logo: "/about/usf.png" },
  ],
};

export type PosterData = {
  kicker: string;
  title: string;
  sub?: string;
  big?: string;
  /** Optional: path to a real image in /public, e.g. "/work/matchday-01.jpg" */
  image?: string;
  /** Optional: CSS object-position for the image, e.g. "50% 10%" */
  focus?: string;
  /** Three gradient colours */
  colors: [string, string, string];
};

export const PALETTE: Record<"pink" | "blue" | "gold" | "teal" | "violet" | "red", [string, string, string]> = {
  pink: ["#ff3560", "#5b0f4a", "#12081f"],
  blue: ["#2f6bff", "#0d1f6b", "#050a24"],
  gold: ["#ffb800", "#8a2f00", "#1f0a02"],
  teal: ["#00d1b2", "#04525a", "#03161a"],
  violet: ["#9b5cff", "#3a1385", "#0d0620"],
  red: ["#ff4b2b", "#7a0f1e", "#1a050a"],
};

/** Clubs worked with. Confirm each club is happy to be named before publishing. */
export const CLIENTS = [
  "Cashmere Technical",
  "Wagner and Woolf",
  "Academica Soccer Club",
  "San Francisco Glens",
  "Knattspyrnudeild Aftureldingar",
  "Napier City Rovers",
  "Ngaruawahia United",
];

export const SERVICES = [
  {
    top: "Club identity",
    accent: "from the badge up",
    lead: "Look like a club worth backing.",
    body: "A crest, colours and kit language that supporters are proud to wear, and that sponsors are proud to sit next to. Starting fresh or refreshing what you have, we build the whole look with you.",
    includes: [
      "Crest & badge design",
      "Colour, type & kit graphics",
      "Brand guidelines",
      "Sponsor lock-ups & merchandise",
    ],
    poster: {
      kicker: "Wagner and Woolf",
      title: "Player commitment graphic",
      image: "/work/wagner-woolf-commitment.jpg",
      focus: "50% 45%",
      colors: PALETTE.blue,
    } as PosterData,
  },
  {
    top: "Matchday",
    accent: "ready before kick-off",
    lead: "Every fixture, on brand.",
    body: "We prepare your matchday system ahead of the season, so match week is a case of dropping in the details. Fixtures, line-ups, goals and full time all look like they belong to the same club.",
    includes: [
      "Matchday & fixture posters",
      "Line-up, score & result templates",
      "Signings & milestone posts",
      "Champions and milestone prints",
    ],
    poster: {
      kicker: "Afturelding",
      title: "Matchday graphics and programme",
      image: "/work/afturelding-matchday.jpg",
      focus: "50% 30%",
      colors: PALETTE.red,
    } as PosterData,
  },
  {
    top: "Sponsorship",
    accent: "creative that earns",
    lead: "Give sponsors something to back.",
    body: "Local businesses want to support their clubs. Strong branding and polished assets give them a reason to say yes, and the revenue can be significant before a ball is kicked.",
    includes: [
      "Sponsorship proposal decks",
      "Player sponsorship packages",
      "Billboard & signage artwork",
      "Match-pack templates & magazines",
    ],
    poster: {
      kicker: "Cashmere Technical FC",
      title: "Gameday graphic",
      image: "/work/cashmere-gameday.jpg",
      focus: "50% 50%",
      colors: PALETTE.violet,
    } as PosterData,
  },
];

export type Package = {
  name: string;
  term: string;
  blurb: string;
  includes: string[];
  featured?: boolean;
  badge?: string;
};

export const PACKAGES = {
  title: "Creative packages",
  intro:
    "Reliable, ongoing design support throughout the year, so you get professional sports-focused content without having to manage individual design requests. Our 2027 creative partnerships are year-round, full service packages designed for you.",
  clubs: [
    {
      name: "Matchday",
      term: "Weekly graphics",
      blurb: "The matchday essentials without the retainer. The core set every club needs each week, delivered with a consistent club identity.",
      includes: ["Matchday graphics", "Team lineups", "Goals / HT / FT", "Player announcements", "Canva-editable files"],
    },
    {
      name: "Season",
      term: "Full-season support",
      blurb:
        "Flexible creative support for clubs that need reliable, professional matchday content throughout the season. From lineups and matchday graphics to goals, HT/FT, player announcements and fixtures, delivered with a consistent club identity, Canva-editable files and quick turnaround.",
      includes: [
        "Full professional photoshoot",
        "Matchday graphics",
        "Team lineups",
        "Goals / HT / FT",
        "Player announcements",
        "Canva-editable files",
        "Priority turnaround",
      ],
    },
    {
      name: "Partnership",
      term: "Year-round, whole club",
      blurb:
        "A dedicated creative partnership for clubs looking for ongoing design support across the entire season. We work alongside your club across matchday content, sponsorship and commercial assets, coaching materials, campaigns and key club communications.",
      includes: [
        "Everything in Creative Season",
        "Sponsorship / partnership decks",
        "Physical & digital matchday magazines",
        "Coaching handbooks",
        "Club presentations",
        "Campaign creative",
      ],
      featured: true,
      badge: "Most popular",
    },
  ] as Package[],
  agencies: [
    {
      name: "Plus",
      term: "Per graphic",
      blurb:
        "Professional commitment and signing graphics for each player. Simply send through the player details and imagery available, and we'll create a polished announcement graphic ready to share across social media.",
      includes: ["Player commitment announcements", "Signing & recruitment graphics", "Customised to your brand", "3-day turnaround"],
    },
    {
      name: "Pro",
      term: "Monthly retainer",
      blurb:
        "Ongoing creative support for agencies looking for a dedicated sports design partner. Priority access to chrétienstudios for player graphics, social content, recruitment campaigns and reactive creative, all covered under one simple monthly retainer.",
      includes: [
        "Everything in Creative Plus",
        "Priority creative support",
        "Agency-wide design support",
        "Priority creative turnaround",
        "Reactive digital assets",
      ],
      featured: true,
    },
  ] as Package[],
  quote: {
    text: "ChretienStudios has completely elevated the way we present our club. The quality, consistency and turnaround have made our matchday content so much easier to manage.",
    name: "Phil Williams",
    role: "GM, Cashmere Technical Football Club",
  },
};

export const SOUND_FAMILIAR = [
  "You're a small team with no in-house designer.",
  "Match week turns into a scramble for graphics.",
  "Your sponsors want more than a logo on a shirt.",
];

export const WHY = [
  {
    n: "01",
    title: "Personal",
    text: "You work directly with the person designing your season. No account managers, no hand-offs.",
  },
  {
    n: "02",
    title: "Always on",
    text: "Available seven days a week, ready to deliver on demand when fixtures, signings or news land.",
  },
  {
    n: "03",
    title: "Instant changes",
    text: "Fixtures move. With live amendments, updates go out fast without long email chains.",
  },
  {
    n: "04",
    title: "Built to earn",
    text: "Branding and sponsorship assets that give local businesses a reason to back your club.",
  },
];

export const STAT = {
  number: "$15,000+",
  label: "raised in sponsorship before the season even began",
  who: "Napier City Rovers",
};

/** Quotes taken from the 2026 Matchday Package. Confirm each person is happy for them to be published. */
export const TESTIMONIALS = [
  {
    quote:
      "It's great when the graphics are premade ahead of time in case we need to change any. It's just right for the fast-paced USL2/USLW summer season.",
    name: "Simon Bettencourt",
    role: "President, Academica SC",
  },
  {
    quote:
      "With chretienstudios' help we raised over $15,000 before the season even began. The graphics played a huge role in capturing local sponsors.",
    name: "Bill Robertson",
    role: "Commercial Officer, Napier City Rovers",
  },
];

export const SHOWCASE: (PosterData & { cls?: string })[] = [
  {
    kicker: "Cashmere Technical FC",
    title: "Goal graphic",
    image: "/work/cashmere-goal.jpg",
    focus: "50% 30%",
    colors: PALETTE.gold,
    cls: "sc-goal",
  },
  {
    kicker: "Cashmere Technical FC",
    title: "2026 Sponsorship Opportunities",
    image: "/work/cashmere-sponsorship-brochure.jpg",
    focus: "50% 55%",
    colors: PALETTE.gold,
    cls: "sc-wide",
  },
  {
    kicker: "Cashmere Technical FC",
    title: "Gameday, Round 1",
    image: "/work/cashmere-gameday.jpg",
    focus: "50% 20%",
    colors: PALETTE.gold,
  },
  {
    kicker: "Cashmere Technical FC",
    title: "Matchday programme",
    image: "/work/cashmere-programme.jpg",
    focus: "50% 50%",
    colors: PALETTE.teal,
  },
];

export const PROCESS = [
  { n: "01", title: "Kick-off call", text: "We learn your club, your supporters and where your content needs to work harder." },
  { n: "02", title: "Identity & direction", text: "Bold concepts, colour and type. We lock in a look that feels unmistakably yours." },
  { n: "03", title: "Build the system", text: "Templates and asset packs for every matchday moment, ready for your team to use." },
  { n: "04", title: "Own the season", text: "Ongoing support, quick turnarounds and fresh creative all year round." },
];

export const TICKER = [
  "Brand identity",
  "Matchday graphics",
  "Crest design",
  "Line-up templates",
  "Signing announcements",
  "Sponsorship decks",
  "Social packs",
  "Kit graphics",
];
