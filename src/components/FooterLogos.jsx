import React from "react";
import { Box, Container } from "@mui/material";

import digitalIndia from "../assets/images/digital.jpg";
import g20 from "../assets/images/g20.jpg";
import swachh from "../assets/images/sb.jpg";
import msme from "../assets/images/msme.jpg";
import niti from "../assets/images/niti.jpg";
import arpan from "../assets/images/arpan.jpg";

const logos = [digitalIndia, g20, swachh, msme, niti, arpan];

export default function FooterLogos() {
  return (
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
            "&:hover": {
              animationPlayState: "paused", // professional touch
            },
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
                  filter: "grayscale(20%)",
                  opacity: 0.9,
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>

      {/* Animation */}
      <style>
        {`
          @keyframes logoScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </Box>
  );
}
