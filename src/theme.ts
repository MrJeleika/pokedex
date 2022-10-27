import { extendTheme } from "@chakra-ui/react";

export const defaultTheme = {
  name: "defaultTheme",
  breakpoints: ["0px", "769px", "1025px"],
  colors: {
      primary: "#FFFFFF", // white
      background: "#f7f8fc",
      accent: "#8893a5", // Gray
      normal: "#a3a49f",
      fighting: "#d8474f",
      flying: "#9fb8ed",
      poison: "#ca5dd8",
      ground: "#de7d50",
      rock: "#cdbe8a",
      bug: "#9ec42d",
      ghost: '#666ec6',
      steel: '#579fa5',
      fire: '#ffa84d',
      water: "#67b4de",
      grass: "#5cc06a",
      electric: "#f6dd5f",
      psychic: "#f8908a",
      ice: '#82d8cd',
      dragon: '#0179c2',
      dark: '#5b5869',
      fairy: '#f88eea'
  },
  fonts:{
    exo: `'Exo 2', sans-serif`
  }
};

export const theme = extendTheme({ ...defaultTheme });
