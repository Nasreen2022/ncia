import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function IntroSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#f4f1ec", // slightly refined
        py: { xs: 5, md: 7 },
      }}
    >
      <Container maxWidth="md">
        {/* Heading */}
        <Typography
          align="center"
          sx={{
            fontSize: { xs: 22, md: 28 },
            fontWeight: 700,
            mb: 1,
            color: "#1c2c4c",
          }}
        >
          Welcome to the NCFB Foundation
        </Typography>

        {/* Tagline */}
        <Typography
          align="center"
          sx={{
            fontSize: { xs: 14, md: 16 },
            fontWeight: 600,
            letterSpacing: "0.5px",
            mb: 3,
            color: "#444",
          }}
        >
          Safeguarding Integrity&nbsp;&nbsp;|&nbsp;&nbsp;Upholding Justice&nbsp;&nbsp;|&nbsp;&nbsp;Empowering the Nation
        </Typography>

        {/* Paragraph 1 */}
        <Typography
          align="center"
          sx={{
            fontSize: 15.5,
            lineHeight: 1.85,
            mb: 2.5,
            color: "#333",
          }}
        >
          The National Crime and Forensic Bureau (NCFB) is India’s emerging force
          in the fight against crime, corruption, and organized injustice. As a
          non-governmental, independent agency, NCFB brings together ethical
          officers, legal experts, and field investigators united by one mission —
          to protect the soul of our nation by ensuring transparency,
          accountability, and justice.
        </Typography>

        {/* Paragraph 2 */}
        <Typography
          align="center"
          sx={{
            fontSize: 15.5,
            lineHeight: 1.85,
            color: "#333",
          }}
        >
          Operating across the length and breadth of India, NCFB functions as a
          strategic crime prevention and intelligence body, working tirelessly to
          uncover administrative malpractice, expose systemic corruption, and
          dismantle criminal networks at every level of governance and society.
        </Typography>
      </Container>
    </Box>
  );
}
