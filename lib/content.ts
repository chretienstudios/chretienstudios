export const SITE = {
  name: "chrétienstudios",
  email: "chretienstudios@gmail.com",
  instagram: "https://www.instagram.com/chretienstudios/",
};

export type PosterData = {
  kicker: string;
  title: string;
  sub?: string;
  big?: string;
  /** Optional: path to a real image in /public, e.g. "/work/matchday-01.jpg" */
  image?: string;
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
  { name: "Academica SC", logo: "/logos/academica-sc.png" },
  { name: "Napier City Rovers", logo: "/logos/napier-city-rovers.png" },
  { name: "Ngaruawahia United", logo: "/logos/ngaruawahia-united.png" },
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
    poster: { kicker: "Brand identity", title: "New era", big: "FC", colors: PALETTE.red } as PosterData,
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
    poster: { kicker: "Matchday", title: "Derby day", big: "VS", colors: PALETTE.pink } as PosterData,
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
    poster: { kicker: "Sponsorship", title: "Back the club", big: "$", colors: PALETTE.violet } as PosterData,
  },
];

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

export const SHOWCASE: (PosterData & { tall?: boolean; wide?: boolean })[] = [
  { kicker: "Matchday", title: "Harbour City", sub: "vs Northern Rovers · Sat 7:30PM", big: "VS", colors: PALETTE.pink },
  { kicker: "Full time", title: "Harbour 3–1 Rovers", big: "3–1", colors: PALETTE.teal },
  { kicker: "New signing", title: "Welcome to the club", big: "09", colors: PALETTE.gold },
  { kicker: "Starting XI", title: "Your line-up", sub: "Round 12", big: "XI", colors: PALETTE.violet },
  { kicker: "Player of the match", title: "Man of the match", big: "10", colors: PALETTE.blue },
  { kicker: "Season launch", title: "Kick off", sub: "2027 campaign", big: "27", colors: PALETTE.red },
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
