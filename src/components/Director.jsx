import React from "react";
import { Box, Container, Typography } from "@mui/material";

// Director image
import directorImage from "../assets/images/director.jpg"; // change path accordingly

export default function Director() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="md">
        
        {/* First Row: Image */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 6, // space below image
          }}
        >
          <Box
            component="img"
            src={directorImage}
            alt="Director"
            sx={{
              width: 250,
              height: 250,
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Box>

        {/* Second Row: Director Message */}
        <Box
          sx={{
            backgroundColor: "#fff",
            p: 4,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, mb: 2, textAlign: 'center' }}
          >
            Director Message
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: 16, lineHeight: 1.8, whiteSpace: 'pre-line' }}
          >
{`Dear NCFB Officers,

Welcome to the National Crime and Forensic Bureau (NCFB) family. We are honored to have you join us in our mission to bring about meaningful social change and reform within our society.

NCFB was founded with a singular vision — to address and eliminate the deep-rooted issues of inequality, injustice, crime, and corruption that continue to hinder national progress. As responsible citizens of India, we the people of NCFB take our commitment seriously toward building a just, inclusive, and empowered society.

Our role is not only to identify and combat the various social evils that affect our communities, but also to promote social security, civic education, and awareness of fundamental rights. We aim to empower every citizen to rise above challenges and claim their rightful place in the democratic structure of our country.

We see ourselves as warriors of social justice — dedicated to ensuring every Indian has equal access to welfare schemes, legal rights, and social protection, regardless of caste, creed, or economic status. NCFB is a powerful movement toward a crime-free, corruption-free, and socially responsible India.

Our journey is guided by the wisdom of ethical legal advisors, the integrity of government and NCFB officers, the vigilance of investigative journalists, and the unwavering dedication of social workers and committed citizens like you. Together, we form a united force striving for national welfare and justice.

We welcome you with pride, purpose, and hope. Let's move forward with courage, dedication, and relentless spirit.

With Regards and Solidarity,  
Mr. Sumit Chaudhary  
Director General`}
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}
