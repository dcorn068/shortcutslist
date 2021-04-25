export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 800,
  DESKTOP: 1040,
}

export const getPageLinks = () => [
  { to: "/", title: "Home" },
  { to: "/browser", title: "Browser" },
  { to: "/windows", title: "Windows" },
  { to: "/linux", title: "Linux" },
  { to: "/mac", title: "Mac" },
  { to: "/vs-code", title: "VS Code" },
  { to: "/terminal", title: "Terminal" },
]

export const COLORS = {
  PURPLE_HIGHLIGHT: "hsl(257, 67%, 82%)",
  BLUE_HIGHLIGHT: "hsl(198, 88%, 85%)",
  BLUE_BRIGHT: "hsl(198, 88%, 51%)",
  BLUE_LINK: "hsl(198, 78%, 45%)",
  YELLOW_HIGHLIGHT: "hsl(60,80%,80%)",
  BLUE_BACKGROUND: "hsl(209, 58%, 19%)",
  TEAL_BACKGROUND: "hsl(173, 54%, 56%)",
  PURPLE_BACKGROUND: "hsl(273, 21%, 27%)",
}

export const MAX_WIDTH = 900

export const Z_INDICES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
