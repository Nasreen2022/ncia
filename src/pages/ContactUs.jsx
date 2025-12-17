import React from "react";
import { Box, Container, Typography, Grid, Card } from "@mui/material";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactUs() {
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
            Contact Us
          </Typography>

          <Typography
            sx={{
              color: "#d9e1f2",
              fontSize: { xs: 14, md: 16 },
              textAlign: "center",
              mt: 1,
            }}
          >
            NCFB Foundation – We are here to assist you
          </Typography>
        </Container>
      </Box>

      {/* ===== CONTENT SECTION ===== */}
      <Box sx={{ backgroundColor: "#f6f7f9", py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>

            {/* REGISTERED OFFICE */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  p: 3,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                  borderLeft: "5px solid #d71920",
                }}
              >
                <Typography sx={{ fontSize: 18, fontWeight: 700, mb: 1 }}>
                  Registered Office
                </Typography>

                <Typography sx={{ fontSize: 14.8, lineHeight: 1.7 }}>
                  Reg. Office: H No. C/267, Kh. No. 483, Front Portion 1st Floor,  
                  Pratap Vihar, Kirari Suleman Nagar Village,  
                  New Delhi, Delhi – 110086
                </Typography>

                <Typography sx={{ mt: 2, fontSize: 14.8 }}>
                  <strong>Contact:</strong> +91-7668897003
                </Typography>
              </Card>
            </Grid>

            {/* HEAD OFFICE */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  p: 3,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                  borderLeft: "5px solid #1c2c4c",
                }}
              >
                <Typography sx={{ fontSize: 18, fontWeight: 700, mb: 1 }}>
                  Head Office
                </Typography>

                <Typography sx={{ fontSize: 14.8, lineHeight: 1.7 }}>
                  Gyan Enclave, Near PWD Guest House,  
                  Baghpat – 250609
                </Typography>

                <Typography sx={{ mt: 2, fontSize: 14.8 }}>
                  <strong>Contact:</strong> +91-7668897003
                </Typography>
              </Card>
            </Grid>

            {/* CONTACT DETAILS */}
            <Grid item xs={12}>
              <Card
                sx={{
                  p: 3,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                  borderTop: "4px solid #d71920",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  Contact Information
                </Typography>

                <Typography sx={{ fontSize: 14.8, mb: 1 }}>
                  <strong>Phone:</strong> 7839601030, 7668897003
                </Typography>

                <Typography sx={{ fontSize: 14.8, mb: 1 }}>
                  <strong>Email:</strong> ncfbfoundation@gmail.com
                </Typography>

                <Typography sx={{ fontSize: 14.8 }}>
                  <strong>Alternate Email:</strong> ncfbfoundation@zohomail.com
                </Typography>
              </Card>
            </Grid>

          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
