const theme = {
  colors: {
    primary: "#1f2937", // Soft violet for primary accents
    secondary: "#FF6584", // Muted pink for secondary accents
    background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)", // Light, gradient background
    cardBackground: "#ffffff", // Clean white for card components
    text: "#333333", // Dark neutral for text
    textLight: "#555555", // Subtle gray for secondary text
    border: "#e0e0e0", // Light gray for dividers or borders
    highlight: "#F2F2F2", // Subtle off-white for highlights
    hover: "#4b5563", // Deeper violet for hover effects
    backgroundAlt: "#f4f4f4", // Ensure this key exists
  },
  fonts: {
    body: "'Inter', sans-serif", // Minimalist and professional body font
    heading: "'Playfair Display', serif", // Elegant and aesthetic serif for headings
  },
  fontSizes: {
    xs: "0.75rem", // Extra small
    sm: "0.875rem", // Small
    md: "1rem", // Medium
    lg: "1.25rem", // Large
    xl: "1.5rem", // Extra large
    xxl: "2rem", // Hero text
  },
  spacing: {
    xs: "0.5rem", // Extra small spacing
    sm: "1rem", // Small spacing
    md: "1.5rem", // Medium spacing
    lg: "2rem", // Large spacing
    xl: "3rem", // Extra large spacing
  },
  shadows: {
    soft: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
    medium: "0 8px 12px rgba(0, 0, 0, 0.15)", // Medium shadow for cards
    strong: "0 12px 20px rgba(0, 0, 0, 0.25)", // Strong shadow for modals
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
  transitions: {
    smooth: "all 0.3s ease-in-out", // Smooth animation for hover effects
  },
};

export default theme;
