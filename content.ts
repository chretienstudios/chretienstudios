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

export const HERO_POSTERS: (PosterData & { className: string })[] = [
  { className: "hp-1", kicker: "Full time", title: "Rovers 3–1", big: "3", colors: PALETTE.teal },
  { className: "hp-2", kicker: "Starting XI", title: "Line-up", big: "XI", colors: PALETTE.violet },
  { className: "hp-3", kicker: "Matchday", title: "Harbour City", sub: "Sat · 7:30PM", big: "VS", colors: PALETTE.pink },
  { className: "hp-4", kicker: "New signing", title: "Welcome", big: "09", colors: PALETTE.gold },
  { className: "hp-5", kicker: "Player of the match", title: "MVP", big: "10", colors: PALETTE.blue },
];

export const SERVICES = [
  {
    top: "Full brand &",
    accent: "identity refresh",
    lead: "For clubs looking to stand out from the rest.",
    body: "Whether you're levelling up an existing look or building your badge, colours and kit language from the ground up, we craft an identity your supporters wear with pride.",
    includes: [
      "Crest & logo systems",
      "Kit & merchandise graphics",
      "Brand guidelines & templates",
      "Sponsor lock-ups",
    ],
    poster: { kicker: "Brand identity", title: "New era", big: "FC", colors: PALETTE.red } as PosterData,
  },
  {
    top: "Bespoke",
    accent: "matchday graphics",
    lead: "Never miss a beat.",
    body: "Fixtures, line-ups, goals and full time, delivered on a system built for speed so every moment lands while the crowd is still loud.",
    includes: [
      "High-engagement hero artwork",
      "Line-up, score & result templates",
      "Signings & milestone announcements",
      "On-demand, fan-focused content",
    ],
    poster: { kicker: "Matchday", title: "Derby day", big: "VS", colors: PALETTE.pink } as PosterData,
  },
  {
    top: "Agency &",
    accent: "sponsor creative",
    lead: "Extra firepower for your roster.",
    body: "Athlete branding and campaign creative for agencies and partners representing talent and clubs. Consistent, fast and always on brief.",
    includes: [
      "Athlete personal branding",
      "Campaign & sponsor creative",
      "Social packs & templates",
      "Screen & LED-ready assets",
    ],
    poster: { kicker: "Campaign", title: "Launch", big: "01", colors: PALETTE.violet } as PosterData,
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
  { n: "04", title: "Own the season", text: "Ongoing support, reactive turnarounds and fresh creative all year round." },
];

export const TICKER = [
  "Brand identity",
  "Matchday graphics",
  "Crest design",
  "Line-up templates",
  "Signing announcements",
  "Sponsor creative",
  "Social packs",
  "Kit graphics",
];
