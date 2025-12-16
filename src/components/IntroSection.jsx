import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function IntroSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#f3eee8",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        {/* Heading */}
        <Typography
          align="center"
          sx={{
            fontSize: 26,
            fontWeight: 600,
            mb: 1,
          }}
        >
          Welcome to the National Crime and Forensic Bureau (NCFB)
        </Typography>

        {/* Tagline */}
        <Typography
          align="center"
          sx={{
            fontSize: 16,
            fontWeight: 500,
            mb: 3,
          }}
        >
          || Safeguarding Integrity || Upholding Justice || Empowering the Nation ||
        </Typography>

        {/* Paragraph 1 */}
        <Typography
          align="center"
          sx={{
            fontSize: 15,
            lineHeight: 1.8,
            mb: 2,
          }}
        >
          The National Crime and Forensic Bureau (NCFB) is India’s emerging force in the fight against crime, corruption, and organized injustice. As a non-governmental, independent agency, NCFB brings together a coalition of ethical officers, legal experts, and field investigators united by one mission — to protect the soul of our nation by ensuring transparency, accountability, and justice.

        </Typography>

        {/* Paragraph 2 */}
        <Typography
          align="center"
          sx={{
            fontSize: 15,
            lineHeight: 1.8,
          }}
        >
          Operating across the length and breadth of India, NCFB functions as a strategic crime prevention and intelligence body, working tirelessly to uncover administrative malpractice, expose systemic corruption, and dismantle criminal networks at every level of governance and society.
        </Typography>
      </Container>
    </Box>
  );
}
