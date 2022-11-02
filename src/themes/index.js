import {
  base,
  dark,
  solarized,
  ParrotGreen,
  grapishPurple,
  RavenBlack,
  SpeckledEggs,
  creamRose,
} from "./ColorScheme";
export const DEFAULT_THEME = "base";

export const themes = {
  base,
  creamRose,
  dark,
  solarized,
  ParrotGreen,
  grapishPurple,
  RavenBlack,
  SpeckledEggs,
};


export const ListOfThemes = [
  {
    label: "base",
    primary: "#FFFFFF",
    isdark: false,
    default: true
  },
  {
    label: "creamRose",
    primary: "#EF7C8E",
    isdark: false,
    default: false
  },
  {
    label: "dark",
    primary: "#000000",
    isdark: true,
    default: false
  },
  {
    label: "solarized",
    primary: "#f25042",
    isdark: false,
    default: false
  },
  {
    label: "ParrotGreen",
    primary: "#0f3433",
    isdark: true,
    default: false
  },
  {
    label: "grapishPurple",
    primary: "#232946",
    isdark: true,
    default: false
  },
  {
    label: "RavenBlack",
    primary: "black",
    isdark: true,
    default: false
  },
  {
    label: "SpeckledEggs",
    primary: "#BFD7ED",
    isdark: false,
    default: false
  },
]