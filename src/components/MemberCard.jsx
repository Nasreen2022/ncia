import React from "react";
import { Box, Card, CardContent, Typography, Grid, Container } from "@mui/material";

import member1 from "../assets/images/member1.jpg";
import member2 from "../assets/images/member2.jpg";
import member3 from "../assets/images/member3.jpg";

const members = [
  {
    image: member1,
    text:
      "राष्ट्रीय एकता देश को सशक्त एवं संगठित बनाती है भारत विविध संस्कृतियों का देश है जो समूचे विश्व में अपनी एक अलग पहचान रखता है।",
    name: "Dr. Darakshan Andrabi",
    role: "Chairperson J&K Waqf Board (ministers of State J&K)",
  },
  {
    image: member2,
    text:
      "I am glad to know that National Crime Intelligence Agency, New Delhi proposes to organize its 03rd anniversary celebrations at New Delhi.",
    name: "Kavindra Singh",
    role: "Ex. Deputy Chief Minister of Jammu Kashmir",
  },
  {
    image: member3,
    text:
      "राष्ट्रीय एकता देश को सशक्त एवं संगठित बनाती है भारत विविध संस्कृतियों का देश है जो समूचे विश्व में अपनी एक अलग पहचान रखता है।",
    name: "Dr. K Kumaran",
    role: "National Director (Film Producer)",
  },
];

export default function MemberCard() {
  return (
    <Box sx={{ backgroundColor: "#f2f2f2", pb: 6 }}>
      {/* Top blue line */}
      <Box sx={{ height: "6px", backgroundColor: "#1f5ea8" }} />

      {/* Title */}
      <Typography
        align="center"
        sx={{ fontSize: 26, fontWeight: 600, my: 4 }}
      >
        Greetings
      </Typography>

      {/* Centered container (IMPORTANT) */}
     <Container maxWidth="lg">
  <Grid container spacing={4} wrap="nowrap">
    {members.map((item, index) => (
      <Grid item xs={4} key={index}>
        <Card
          sx={{
            backgroundColor: "#3f5367",
            color: "#fff",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Image */}
          <Box sx={{ p: 2 }}>
            <Box
              sx={{
                border: "6px solid #9fb0bb",
                height: 260,
                overflow: "hidden",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>

          {/* Text */}
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography fontSize={14} lineHeight={1.6}>
              {item.text}
            </Typography>
          </CardContent>

          {/* Footer */}
          <Box
            sx={{
              backgroundColor: "#6f8894",
              textAlign: "center",
              py: 2,
            }}
          >
            <Typography fontWeight="bold">
              {item.name}
            </Typography>
            <Typography fontSize={13}>
              {item.role}
            </Typography>
          </Box>
        </Card>
      </Grid>
    ))}
  </Grid>
</Container>

    </Box>
  );
}
