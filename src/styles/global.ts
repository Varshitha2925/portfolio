import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    background: linear-gradient(135deg, #f7fafc, #edf2f7);
    color: #2d3748;
    line-height: 1.6;
    margin: 0;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    background: -webkit-linear-gradient(45deg, #f4a261, #e76f51);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1rem;
    color: #4a5568;
  }

  a {
    color: #e63946;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #457b9d;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #457b9d;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #1d3557;
  }

  /* Responsive Typography */
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

export default GlobalStyle;
