import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";

export default function FooterCTA() {
  return (
    <Box sx={{ backgroundColor: "#d71920", py: 3 }}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={40}>
          {/* Text Section */}
          <Grid item xs={12} md={8}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: 18, md: 22 },
                fontWeight: 600,
              }}
            >
              We'd be delighted to hear from you. Feel free to get in touch.
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                mt: 1,
                fontSize: { xs: 14, md: 16 },
              }}
            >
              We would love to hear from you, tell us a little bit about your problem.
            </Typography>
          </Grid>

          {/* Button Section */}
          <Grid item xs={12} md={4} textAlign={{ xs: "left", md: "right" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#111",
                color: "#fff",
                px: 2,
                py: 1,
                textTransform: "none",
                fontSize: { xs: 14, md: 16 },
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
            >
              <Typography>
                Contact Us <br /> +91-7668897003‬

              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
