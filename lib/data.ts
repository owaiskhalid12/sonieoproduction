export type PortfolioItem = {
  title: string;
  category: string;
  duration: string;
  metric: string;
  videoSrc: string;
  aspect: "vertical" | "wide";
  accent: string;
};

export const navLinks = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const painPoints = [
  {
    title: "Low engagement",
    copy: "Videos lose attention in the first few seconds because the pacing, hooks, and storytelling do not hold viewers.",
  },
  {
    title: "Average editing quality",
    copy: "Unpolished cuts, weak transitions, and flat sound design make good footage feel forgettable.",
  },
  {
    title: "Inconsistent branding",
    copy: "Every upload feels different, making it harder to build trust and a recognizable personal brand.",
  },
];

export const services = [
  {
    title: "YouTube Editing",
    copy: "Long-form edits with retention-focused pacing, story structure, and polished audio cleanup.",
  },
  {
    title: "Reels & Shorts",
    copy: "Fast-cut vertical edits tailored for scroll-stopping hooks, subtitles, and watch-time retention.",
  },
  {
    title: "Cinematic Edits",
    copy: "Premium color, sound design, and visual rhythm that make your footage feel intentional and memorable.",
  },
  {
    title: "Color Grading",
    copy: "Balanced, branded looks that increase perceived quality across every platform and campaign.",
  },
  {
    title: "Motion Graphics",
    copy: "Modern titles, callouts, and animated overlays that support the message without overwhelming it.",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Short Form Edit 01",
    category: "Reels",
    duration: "0:30",
    metric: "High-retention short-form pacing",
    videoSrc: "/work/reels/reel-01.mp4",
    aspect: "vertical",
    accent: "from-electric/70 via-cyan/60 to-white/20",
  },
  {
    title: "Short Form Edit 02",
    category: "Reels",
    duration: "0:29",
    metric: "Optimized for reels and shorts",
    videoSrc: "/work/reels/reel-02.mp4",
    aspect: "vertical",
    accent: "from-cyan/70 via-sky-500/60 to-indigo-200/20",
  },
  {
    title: "Cinematic Travel Edit",
    category: "YouTube",
    duration: "1:24",
    metric: "1.8M combined views",
    videoSrc: "/work/wide/video-01.mp4",
    aspect: "wide",
    accent: "from-cyan/70 via-sky-500/60 to-indigo-200/20",
  },
  {
    title: "Product Story Ad",
    category: "Commercial",
    duration: "0:38",
    metric: "+34% watch-through",
    videoSrc: "/work/wide/video-02.mp4",
    aspect: "wide",
    accent: "from-blue-500/70 via-electric/60 to-cyan/30",
  },
  {
    title: "Podcast Highlight Cut",
    category: "YouTube",
    duration: "6:10",
    metric: "+71% click-through",
    videoSrc: "/work/wide/video-03.mp4",
    aspect: "wide",
    accent: "from-indigo-500/70 via-electric/60 to-slate-200/20",
  },
  {
    title: "Short Form Edit 03",
    category: "Reels",
    duration: "0:32",
    metric: "Fast-cut vertical storytelling",
    videoSrc: "/work/reels/reel-03.mp4",
    aspect: "vertical",
    accent: "from-cyan/70 via-sky-500/60 to-indigo-200/20",
  },
];

export const stats = [
  { value: "500+", label: "Videos Edited" },
  { value: "12M+", label: "Views Generated" },
  { value: "96%", label: "Repeat Client Rate" },
  { value: "24h", label: "Fastest Delivery Window" },
];

export const caseStudies = [
  {
    title: "Personal brand reels",
    before: "Low retention, inconsistent pacing, weak hooks.",
    after: "A sharper storytelling structure and on-screen motion system lifted average completion rate by 38%.",
  },
  {
    title: "YouTube education channel",
    before: "Strong content, but edits felt slow and visually repetitive.",
    after: "A refreshed intro flow, tighter cutdowns, and branded graphics helped push CTR up by 26%.",
  },
  {
    title: "Luxury product visuals",
    before: "Footage looked good but lacked premium finish and emotional pull.",
    after: "Cinematic grading and sound design increased ad watch-through by 34% across paid social placements.",
  },
];

export const testimonials = [
  {
    name: "Ariana Blake",
    role: "Lifestyle Creator",
    quote:
      "Sonieo Production made my content feel premium overnight. My audience noticed immediately and my retention numbers followed.",
  },
  {
    name: "Marcus Chen",
    role: "YouTube Educator",
    quote:
      "The edits are strategic, not just pretty. Every cut feels tied to viewer attention and the results have been measurable.",
  },
  {
    name: "Daniel Ross",
    role: "Founder, DRC Media",
    quote:
      "Fast turnaround, sharp communication, and consistently polished delivery. It feels like having a true post-production partner.",
  },
];

export const processSteps = [
  {
    title: "Brief",
    copy: "We align on your audience, content goals, references, and delivery format before the edit begins.",
  },
  {
    title: "Editing",
    copy: "Your footage is shaped into a high-retention story with pacing, music, sound design, and branded polish.",
  },
  {
    title: "Review",
    copy: "You get a focused review round so we can refine details without slowing down momentum.",
  },
  {
    title: "Delivery",
    copy: "Final exports arrive platform-ready for YouTube, Instagram, TikTok, ads, or client presentations.",
  },
];

export const benefits = [
  "Better engagement through tighter storytelling and stronger hooks",
  "A more professional visual identity that elevates your brand",
  "Faster turnaround without sacrificing polish or consistency",
  "Platform-specific optimization for YouTube, Reels, Shorts, and ads",
];

export const faqs = [
  {
    question: "What is your usual turnaround time?",
    answer: "Most short-form projects are delivered within 48 to 72 hours. Larger YouTube or cinematic edits are scoped based on complexity.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes. Every project includes a revision round so we can refine pacing, text, and style details before final delivery.",
  },
  {
    question: "What footage and file types do you work with?",
    answer: "I work with standard camera files, mobile footage, screen recordings, and brand assets. Final delivery can include MP4, MOV, and platform-specific exports.",
  },
  {
    question: "How is pricing handled?",
    answer: "Pricing depends on content type, project length, turnaround speed, and editing complexity. The quickest route is a short brief so I can recommend the best package.",
  },
];
