import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
} from "@mui/material";

import member1 from "../assets/images/member1.jpg";
import member2 from "../assets/images/member2.jpg";
import member3 from "../assets/images/member3.jpg";

const members = [
  {
    image: member1,
    text:
      "राष्ट्रीय एकता देश को सशक्त एवं संगठित बनाती है भारत विविध संस्कृतियों का देश है जो समूचे विश्व में अपनी एक अलग पहचान रखता है।",
    name: "Dr. Darakshan Andrabi",
    role: "Chairperson J&K Waqf Board (Minister of State, J&K)",
  },
  {
    image: member2,
    text:
      "I am glad to know that National Crime Intelligence Agency, New Delhi proposes to organize its 03rd anniversary celebrations at New Delhi.",
    name: "Kavindra Singh",
    role: "Former Deputy Chief Minister, Jammu & Kashmir",
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
    <Box
      sx={{
        backgroundColor: "#f6f7f9",
        py: { xs: 5, md: 7 },
      }}
    >
      {/* Title */}
      <Typography
        align="center"
        sx={{
          fontSize: { xs: 22, md: 26 },
          fontWeight: 700,
          color: "#1c2c4c",
          mb: 4,
        }}
      >
        Greetings
      </Typography>

      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 4 }}
          justifyContent="center"
        >
          {members.map((item, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={4}
              sx={{
                display: "flex",
              }}
            >
              <Card
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#ffffff",
                  borderRadius: 2,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  maxWidth: 380, // 👈 important for large screens
                  mx: "auto",
                }}
              >
                {/* Image */}
                <Box sx={{ p: 2 }}>
                  <Box
                    sx={{
                      height: { xs: 220, sm: 230, md: 240 },
                      overflow: "hidden",
                      borderRadius: 1.5,
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
                  <Typography
                    sx={{
                      fontSize: 14.5,
                      lineHeight: 1.7,
                      color: "#333",
                    }}
                  >
                    {item.text}
                  </Typography>
                </CardContent>

                {/* Footer */}
                <Box
                  sx={{
                    borderTop: "1px solid #eee",
                    textAlign: "center",
                    px: 2,
                    py: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 15,
                      color: "#1c2c4c",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "#555",
                    }}
                  >
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
