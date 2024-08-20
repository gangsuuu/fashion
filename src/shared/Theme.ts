import styled, { css } from "styled-components";
type Colors = {
    [key: string] : string;
}

export const colors : Colors = {
    black : '#000',
    white : '#fff',
    blueButton: '#007AFF'
}

const mediaSize = {
    xs: "screen and (max-width: '400px')",
    sm: "screen and (max-width: '640px')",
    md: "screen and (max-width: '768px')",
    lg: "screen and (max-width: '1024px')",
    xl: "screen and (max-width: '1280px')",
    "2xl": "screen and (max-width: '1536px')",
  };

  const fontSize = {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
  };

  const size = {
    xs: "0.2em",
    sm: "0.4em",
    md: "0.6em",
    lg: "1em",
    xl: "1.4em",
    "2xl": "1.6em",
  };


export const flexAllCenter = css`
    display: flex;
    justify-content :center;
    align-items :center;
`

export const Button = styled.button`
   outline-style: none;
   border:none;
   cursor:pointer;
`