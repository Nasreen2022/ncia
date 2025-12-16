import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// Logos
import digitalIndia from "../assets/images/digital.jpg";
import g20 from "../assets/images/g20.jpg";
import swachh from "../assets/images/sb.jpg";
import msme from "../assets/images/msme.jpg";
import niti from "../assets/images/niti.jpg";
import arpan from "../assets/images/arpan.jpg";

const logos = [digitalIndia, g20, swachh, msme, niti, arpan];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ================= LOGO STRIP ================= */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          py: { xs: 3, md: 4 },
          borderTop: "1px solid #eee",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              animation: "logoScroll 35s linear infinite",
              "&:hover": { animationPlayState: "paused" },
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: 140, sm: 160, md: 180 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  px: 2,
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="Government Initiative Logo"
                  sx={{
                    height: { xs: 40, sm: 45, md: 50 },
                    objectFit: "contain",
                    opacity: 0.9,
                  }}
                />
              </Box>
            ))}
          </Box>
        </Container>

        <style>
          {`
            @keyframes logoScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </Box>

      {/* ================= CTA SECTION ================= */}
      <Box sx={{ backgroundColor: "#d71920", py: { xs: 3, md: 4 } }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={{ xs: 3, md: 6 }}>
            <Grid item xs={12} md={8}>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: 18, md: 22 },
                  fontWeight: 600,
                }}
              >
                We’d be delighted to hear from you
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  mt: 1,
                  fontSize: { xs: 14, md: 16 },
                }}
              >
                Feel free to get in touch and tell us about your concern.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4} textAlign={{ xs: "left", md: "right" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#111",
                  color: "#fff",
                  px: 3,
                  py: 1.2,
                  textTransform: "none",
                  fontSize: { xs: 14, md: 16 },
                  "&:hover": { backgroundColor: "#000" },
                }}
              >
                Contact Us <br /> +91-7668897003
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= FOOTER BOTTOM ================= */}
      <Box sx={{ backgroundColor: "#020b1f", py: 3 }}>
        <Container maxWidth="lg">
          <Grid
            container
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} md={8}>
              <Typography sx={{ color: "#bfc6d1", fontSize: 14 }}>
                © 2025 National Crime Intelligence Agency. All Rights Reserved.
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              textAlign={{ xs: "left", md: "right" }}
            >
              <IconButton sx={{ color: "#fff" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <YouTubeIcon />
              </IconButton>

              <IconButton
                onClick={scrollToTop}
                sx={{
                  backgroundColor: "#d71920",
                  color: "#fff",
                  ml: 2,
                  "&:hover": { backgroundColor: "#b9151b" },
                }}
              >
                <KeyboardArrowUpIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
