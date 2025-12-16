import React from "react";
import { Box, Container, Typography } from "@mui/material";
import directorImage from "../assets/images/director.jpg";

export default function Director() {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: "#f6f7f9",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: { xs: "flex", md: "grid" },
            flexDirection: { xs: "column", md: "unset" },
            gridTemplateColumns: { md: "260px 1fr" },
            gap: { xs: 3, md: 4 },
            alignItems: "flex-start",
          }}
        >
          {/* LEFT: IMAGE */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" }, // ✅ FIX
            }}
          >
            <Box
              component="img"
              src={directorImage}
              alt="Director General - NCFB"
              sx={{
                width: 220,
                height: 260,
                objectFit: "cover",
                borderRadius: 1.5,
                border: "3px solid #fff",
                boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                display: "block",
              }}
            />

            <Typography
              sx={{
                mt: 1.5,
                fontWeight: 700,
                fontSize: 15.5,
                color: "#1c2c4c",
                textAlign: { xs: "center", md: "left" }, // ✅
              }}
            >
              Mr. Sumit Chaudhary
            </Typography>

            <Typography
              sx={{
                fontSize: 13.5,
                color: "#555",
                textAlign: { xs: "center", md: "left" }, // ✅
              }}
            >
              Director General, NCFB
            </Typography>
          </Box>

          {/* RIGHT: MESSAGE */}
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 22 },
                fontWeight: 700,
                color: "#1c2c4c",
                mb: 1.5,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Director General’s Message
            </Typography>

            <Typography
              sx={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "#333",
                whiteSpace: "pre-line",
                textAlign: "left",
              }}
            >
{`Dear NCFB Officers,

Welcome to the National Crime and Forensic Bureau (NCFB). It gives me great pride to welcome you into an organization committed to justice, integrity, and national responsibility.

NCFB was established with a clear mandate — to combat crime, corruption, and systemic injustice that hinder the progress of our nation. Our work is guided by constitutional values, ethical conduct, and an unwavering commitment to transparency and accountability.

Beyond investigation and enforcement, our responsibility lies in promoting civic awareness, safeguarding fundamental rights, and ensuring equal access to justice for every citizen of India.

Together, through discipline, dedication, and collective resolve, we will continue to strengthen institutions, protect society, and contribute to a safer and more just nation.

I look forward to your commitment and service to this mission.

With regards,

Mr. Sumit Chaudhary  
Director General, NCFB`}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
