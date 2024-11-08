import React from 'react'; 
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const BackgroundContainer = styled(Box)(() => ({
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
}));

const PrivacyPolicy = () => {
  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer>
        <PolicyContainer>
          <Typography variant="h4" align="center" gutterBottom>
            Privacy and Policy
          </Typography>

          <section>
            <Typography variant="h6" gutterBottom>
              1. Data Collection
            </Typography>
            <Typography variant="body1">
              We collect various types of information, including personal data, such as your name, 
              email address, and other contact details, as well as non-personal data, like browsing 
              behavior and device information. This data is gathered through forms, cookies, and 
              other technologies.
            </Typography>
          </section>

          <section>
            <Typography variant="h6" gutterBottom>
              2. Use of Information
            </Typography>
            <Typography variant="body1">
              The information we collect is used to provide and improve our services, personalize user 
              experiences, respond to your inquiries, and send you updates about our services. We may 
              also use data for research and analytics purposes.
            </Typography>
          </section>

          <section>
            <Typography variant="h6" gutterBottom>
              3. Data Security
            </Typography>
            <Typography variant="body1">
              We take data security seriously and implement industry-standard measures to protect 
              your information from unauthorized access, disclosure, or loss. However, no online 
              service can be 100% secure, and we cannot guarantee absolute security.
            </Typography>
          </section>

          <section>
            <Typography variant="h6" gutterBottom>
              4. Cookies
            </Typography>
            <Typography variant="body1">
              Cookies are small files stored on your device that help us enhance your browsing 
              experience. We use cookies to understand user behavior, track preferences, and 
              optimize site performance. You can disable cookies in your browser settings, but 
              some features of the site may not function properly.
            </Typography>
          </section>

          <section>
            <Typography variant="h6" gutterBottom>
              5. Third-Party Services
            </Typography>
            <Typography variant="body1">
              We may use third-party services for hosting, analytics, and advertising. These 
              third parties have their own privacy policies, and we are not responsible for 
              their practices. However, we do our best to work with reputable companies that 
              share our commitment to privacy.
            </Typography>
          </section>

          <section>
            <Typography variant="h6" gutterBottom>
              6. Your Rights
            </Typography>
            <Typography variant="body1">
              You have the right to access, correct, or delete your personal information. If 
              you wish to exercise any of these rights, please contact us at the provided 
              contact details.
            </Typography>
          </section>

          <section>
            <Typography variant="h6" gutterBottom>
              7. Policy Updates
            </Typography>
            <Typography variant="body1">
              This privacy policy may be updated periodically to reflect changes in our practices. 
              We encourage you to review this page regularly for the latest information on our 
              privacy practices.
            </Typography>
          </section>
        </PolicyContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default PrivacyPolicy;
