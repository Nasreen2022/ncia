import React from "react";
import { Box, Container } from "@mui/material";

// Logos imports
import digitalIndia from "../assets/images/digital.jpg";
import g20 from "../assets/images/g20.jpg";
import swachh from "../assets/images/sb.jpg";
import msme from "../assets/images/msme.jpg";
import niti from "../assets/images/niti.jpg";
import arpan from "../assets/images/arpan.jpg";

const logos = [digitalIndia, g20, swachh, msme, niti, arpan];

export default function FooterLogos() {
  return (
    <Box sx={{ backgroundColor: "#ffffff", py: 4, overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: "slide 30s linear infinite", // faster speed
          }}
        >
          {/* Duplicate logos for seamless sliding */}
          {[...logos, ...logos].map((logo, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 16.66%", // 6 logos visible
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 1, // minimal spacing
              }}
            >
              <img
                src={logo}
                alt="government logo"
                style={{
                  height: 55, // previous logo size
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>

      {/* CSS animation */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </Box>
  );
}
