import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function FooterBottom() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={{ backgroundColor: "#020b1f", py: 3 }}>
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography sx={{ color: "#bfc6d1", fontSize: 14 }}>
              Copyright © 2025, All Right Reserved. National Crime Intelligence Agency.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} textAlign="right">
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
  );
}
