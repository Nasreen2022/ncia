import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

import Header from "../components/Header";
import Footer from "../components/Footer";

// Dummy images (replace later)
import directorImg from "../assets/images/admin-director.jpeg";
import mdImg from "../assets/images/director.jpg";
import secretaryImg from "../assets/images/admin-secretary.jpeg";

export default function AdministrativeAuthority() {
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
            Administrative Authority – NCFB Foundation
          </Typography>

          <Typography
            sx={{
              color: "#d9e1f2",
              fontSize: { xs: 14, md: 16 },
              textAlign: "center",
              mt: 1,
            }}
          >
            Leadership messages guiding administration, governance, and service
          </Typography>
        </Container>
      </Box>

      {/* ===== CONTENT SECTION ===== */}
      <Box sx={{ backgroundColor: "#f6f7f9", py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">

          {/* ===== NATIONAL DIRECTOR ===== */}
          <Grid container spacing={4} alignItems="flex-start" sx={{ mb: 6 }}>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={directorImg}
                alt="National Director"
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  borderRadius: 2,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                }}
              />
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography sx={{ fontSize: 20, fontWeight: 700, color: "#1c2c4c", mb: 2 }}>
                Message from the Office of the National Director  
                <br /> Department of Administration
              </Typography>

              <Typography sx={{ fontSize: 15.5, lineHeight: 1.8, color: "#333", whiteSpace: "pre-line" }}>
{`"At NCFB, we are relentlessly committed to serving the people of India and building a safer, crime-free society. With a robust and highly skilled team, including ground-level intelligence units, we ensure that our actions deliver real impact.

Our mission is to strengthen NCFB into an even more powerful organization, one that not only safeguards but empowers our community. We warmly welcome individuals with passion and intelligence who are ready to contribute to this vision.

Our doors are always open, and we stand ready to support and uplift those in need, ensuring no one is left helpless."`}
              </Typography>

              <Typography sx={{ mt: 3, fontWeight: 600 }}>
                Best Wishes & Regards
              </Typography>
              <Typography sx={{ fontWeight: 700 }}>
                Sanjay Kumar Deo
              </Typography>
              <Typography sx={{ fontSize: 14 }}>
                National Director <br /> Department of Administration
              </Typography>
            </Grid>
          </Grid>

          {/* ===== MANAGING DIRECTOR ===== */}
          <Grid container spacing={4} alignItems="flex-start" sx={{ mb: 6 }}>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={mdImg}
                alt="Managing Director"
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  borderRadius: 2,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                }}
              />
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography sx={{ fontSize: 20, fontWeight: 700, color: "#1c2c4c", mb: 2 }}>
                Message from the Office of the Managing Director
              </Typography>

              <Typography sx={{ fontSize: 15.5, lineHeight: 1.8, color: "#333", whiteSpace: "pre-line" }}>
{`NCFB is a visionary organization committed to fostering a safer, more informed, and vigilant society. Our mission is to support national efforts in crime prevention, public awareness, and legal empowerment—especially in areas of cyber safety, human rights, and national security.

Rooted in law enforcement principles, NCFB upholds the highest standards of integrity, confidentiality, and professionalism. Through intelligence operations, legal education, and public training, we empower citizens and support authorities in tackling organized crime, cybercrime, and social injustices.

With a nationwide network of trained officers, volunteers, and professionals, NCFB stands as a beacon of responsible service and civic duty.

As Managing Director, I envision NCFB as a dynamic bridge between the people and enforcement systems—promoting trust, transparency, and proactive vigilance across the country.

Together, we serve justice. Together, we strengthen the nation.`}
              </Typography>

              <Typography sx={{ mt: 3, fontWeight: 600 }}>
                Best Wishes & Regards
              </Typography>
              <Typography sx={{ fontWeight: 700 }}>
                Sumit Chaudhary
              </Typography>
              <Typography sx={{ fontSize: 14 }}>
                Managing Director
              </Typography>
            </Grid>
          </Grid>

          {/* ===== GENERAL SECRETARY ===== */}
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={secretaryImg}
                alt="General Secretary"
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  borderRadius: 2,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                }}
              />
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography sx={{ fontSize: 15.5, lineHeight: 1.8, color: "#333", whiteSpace: "pre-line" }}>
{`Welcome to the official website of the National Crime and Forensic Bureau (NCFB). The NCFB is a semi-autonomous body under the Ministry of Internal Affairs.

We are independent, non-governmental, not-for-profit and work with like-minded partners across the nation to end the injustice of corruption.

Our aim is to detect and eliminate crime, white-collar crime, and corruption across government and non-government sectors, while supporting police administration, judiciary, armed forces, vigilance, intelligence, human rights, women commissions, and statutory bodies across India and globally.

We are committed to youth development, awareness programs, motivational initiatives, and nation-building activities.

We are grateful for the support we receive and always welcome individuals—especially youth—to join our activities and contribute to the growth of our country.`}
              </Typography>

              <Typography sx={{ mt: 3, fontWeight: 600 }}>
                Best Wishes & Regards
              </Typography>
              <Typography sx={{ fontWeight: 700 }}>
                Geeta Arora
              </Typography>
              <Typography sx={{ fontSize: 14 }}>
                General Secretary / Women Cell Delhi
              </Typography>
            </Grid>
          </Grid>

        </Container>
      </Box>

      <Footer />
    </>
  );
}
