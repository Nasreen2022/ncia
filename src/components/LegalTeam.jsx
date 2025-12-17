import React from "react";
import { Box, Container, Typography, Grid, Card } from "@mui/material";

import Header from "../components/Header";
import Footer from "../components/Footer";

// Dummy images (same image use kar sakte ho, baad me replace kar dena)
import legal1 from "../assets/images/legalteam1.jpeg";
import legal2 from "../assets/images/legalteam2.jpeg";
import legal3 from "../assets/images/legalteam3.jpeg";

const legalTeam = [
  {
    name: "Priyanka S Aneja",
    designation: "Legal Advisor ",
    expertise: "Criminal Law, Constitutional Law",
    experience: "10+ Years Experience",
    image: legal3,
  },
  {
    name: "Vijeta Sharma",
    designation: "Legal Consultant",
    expertise: "Human Rights Law, RTI Act",
    experience: "10+ Years Experience",
    image: legal2,
  },
  {
    name: "Krishna Kumar Mishra",
    designation: "Senior Advocate",
    expertise: "Civil Law, Compliance & Documentation",
    experience: "15+ Years Experience",
    image: legal1,
  },
  
];

export default function LegalTeam() {
  return (
    <>
      <Header />

      {/* ===== PAGE HEADER ===== */}
      <Box
        sx={{
          backgroundColor: "#1c2c4c",
          py: { xs: 4, md: 6 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: 24, md: 32 },
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Legal Team – NCFB Foundation
          </Typography>

          <Typography
            sx={{
              color: "#d9e1f2",
              fontSize: { xs: 14, md: 16 },
              textAlign: "center",
              mt: 1,
            }}
          >
            Dedicated legal professionals ensuring justice, compliance, and integrity
          </Typography>
        </Container>
      </Box>

      {/* ===== CONTENT ===== */}
      <Box sx={{ backgroundColor: "#f6f7f9", py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          {/* Intro */}
          <Typography
            sx={{
              fontSize: 15.5,
              lineHeight: 1.8,
              color: "#333",
              mb: 5,
              textAlign: "center",
              maxWidth: 900,
              mx: "auto",
            }}
          >
            The Legal Team of <strong>NCFB Foundation</strong> plays a crucial role
            in maintaining legal integrity, ensuring statutory compliance, and
            guiding the organization in matters related to criminal law, human
            rights, governance, and regulatory frameworks. Our advocates and legal
            professionals are committed to justice, transparency, and public
            service.
          </Typography>

          {/* Team Cards */}
          <Grid container spacing={4}>
            {legalTeam.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                    borderTop: "4px solid #d71920",
                  }}
                >
                  {/* Image */}
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                    }}
                  />

                  {/* Content */}
                  <Box sx={{ p: 3 }}>
                    <Typography
                      sx={{
                        fontSize: 16.5,
                        fontWeight: 700,
                        color: "#1c2c4c",
                        mb: 0.5,
                      }}
                    >
                      {member.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#555",
                        mb: 1,
                      }}
                    >
                      {member.designation}
                    </Typography>

                    <Typography sx={{ fontSize: 14, color: "#333", mb: 0.5 }}>
                      <strong>Expertise:</strong> {member.expertise}
                    </Typography>

                    <Typography sx={{ fontSize: 14, color: "#333" }}>
                      <strong>Experience:</strong> {member.experience}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
