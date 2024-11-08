import React from 'react';
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Styled component for Policy container
const PolicyContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: "800px",
  margin: "auto",
  backdropFilter: "blur(10px)",
  backgroundColor: "#121212",
  borderRadius: theme.shape.borderRadius,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
  },
}));

// Theme for customizing colors and typography
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
    },
    primary: {
      main: "#1abc9c",
    },
  },
  typography: {
    h4: {
      fontFamily: "Arial, sans-serif",
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#1abc9c",
    },
    h6: {
      fontFamily: "Arial, sans-serif",
      fontWeight: "bold",
      fontSize: "1.5rem",
      color: "#1abc9c",
    },
    body1: {
      fontFamily: "Arial, sans-serif",
      color: "#b0b0b0",
      fontSize: "1rem",
      lineHeight: "1.6",
    },
  },
});

// Background container for centering the policy content
const BackgroundContainer = styled(Box)(() => ({
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
}));

// Terms and Conditions Page Component
const TermsAndConditions = () => {
  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer>
        <PolicyContainer>
          <Typography variant="h4" align="center" gutterBottom>
            Terms and Conditions
          </Typography>

          <section>
            <Typography variant="h6" gutterBottom>
              1. Introduction
            </Typography>
            <Typography variant="body1">
              Welcome to Rentalog, your trusted platform for managing rental properties. By accessing or using this website, you agree to comply with these terms and conditions.
            </Typography>
          </section>

          <section>
            <Typography variant="h6" gutterBottom>
              2. Services
            </Typography>
            <Typography variant="body1">
              Our website provides landlords and tenants with tools to manage rental listings, track payments, and communicate effectively. The use of these services is subject to the terms outlined in this document.
            </Typography>
          </section>

          <section>
            <Typography variant="h6" gutterBottom>
              3. User Obligations
            </Typography>
            <Typography variant="body1">
              As a landlord, you are responsible for ensuring that your property listings are accurate and up-to-date. Tenants should ensure that their rental payments and obligations are fulfilled as agreed upon in their rental contracts.
            </Typography>
          </section>

          <section>
            <Typography variant="h6" gutterBottom>
              4. Payments and Fees
            </Typography>
            <Typography variant="body1">
              Payment processing is handled through secure third-party services. Rentalog is not liable for any issues related to payment failures, processing delays, or discrepancies in rental amounts.
            </Typography>
          </section>

          <section>
            <Typography variant="h6" gutterBottom>
              5. Limitation of Liability
            </Typography>
            <Typography variant="body1">
              Rentalog is not responsible for any disputes that arise between landlords and tenants, including but not limited to lease violations, non-payment, or damages to the property.
            </Typography>
          </section>

          <section>
            <Typography variant="h6" gutterBottom>
              6. Termination
            </Typography>
            <Typography variant="body1">
              Rentalog reserves the right to terminate or suspend user accounts if there is evidence of fraudulent activity, violation of terms, or misuse of the platform.
            </Typography>
          </section>

          <section>
            <Typography variant="h6" gutterBottom>
              7. Governing Law
            </Typography>
            <Typography variant="body1">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which the property is located.
            </Typography>
          </section>

          {/* Buttons for Accept and Reject */}
          <Box display="flex" justifyContent="space-between" marginTop={4}>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "1.1em",
                backgroundColor: "#6fc9b8",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => alert("You rejected the terms.")}
            >
              Reject
            </button>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "1.1em",
                backgroundColor: "#1abc9c",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => alert("You accepted the terms.")}
            >
              Accept
            </button>
          </Box>
        </PolicyContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default TermsAndConditions;
