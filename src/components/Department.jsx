import React from "react";
import { Box, Container, Typography, Grid, Card } from "@mui/material";

const departments = [
  {
    title: "Administrative Department",
    purpose:
      "Acts as the backbone of organizational functioning. Manages internal policies, communication, staff records, and office operations. Maintains liaison with government departments and regulatory bodies.",
  },
  {
    title: "Legal and Compliance Department",
    purpose:
      "Maintains legal integrity and ensures statutory compliance. Drafts legal documents, MoUs, and official contracts. Ensures adherence to IPC, RTI Act, FCRA Act, Income Tax Act (Sec 12A, 80G), and Human Rights Laws. Manages legal representation and dispute resolution.",
  },
  {
    title: "Finance and Accounts Department",
    purpose:
      "Ensures financial transparency and accountability. Manages budgeting, auditing, financial planning, bank accounts, donor receipts, payroll, and statutory filings including TDS, GST, and FCRA returns.",
  },
  {
    title: "Human Resource & Training Department",
    purpose:
      "Builds and develops a capable and ethical workforce. Handles recruitment, onboarding, training programs, employee welfare, performance appraisal, and confidential personnel records.",
  },
  {
    title: "Operations and Intelligence Department",
    purpose:
      "Core operational wing of NCIA. Coordinates intelligence gathering, research, and investigation. Maintains crime databases, case records, and liaises with law enforcement agencies with due authorization.",
  },
  {
    title: "Public Relations and Media Department",
    purpose:
      "Manages organizational image and public communication. Handles media releases, press coverage, social media, newsletters, website updates, and public awareness initiatives.",
  },
  {
    title: "Information Technology (IT) Cell",
    purpose:
      "Supports digital infrastructure and cyber operations. Maintains databases, cloud platforms, secure communication, data encryption, and cybercrime awareness initiatives.",
  },
  {
    title: "Research and Development Department",
    purpose:
      "Conducts surveys, crime mapping, data analysis, and policy research. Publishes journals, white papers, and collaborates with academic and scientific communities.",
  },
  {
    title: "Women and Child Protection Cell",
    purpose:
      "Dedicated to protection of women and children. Investigates gender-based violence, child abuse, trafficking cases, and provides legal aid, counseling, and rehabilitation support.",
  },
  {
    title: "Internal Vigilance & Anti-Corruption Cell",
    purpose:
      "Safeguards the organization from internal malpractices. Handles whistleblower complaints, internal investigations, and aligns with Prevention of Corruption Act and Lokpal guidelines.",
  },
  {
    title: "Disaster Response and Emergency Cell",
    purpose:
      "Mobilizes during emergencies like floods, earthquakes, riots, and pandemics. Coordinates relief efforts, trains volunteers, and aligns with NDRF and SDRF.",
  },
  {
    title: "Documentation & Records Department",
    purpose:
      "Maintains institutional documentation and archives. Manages ID cards, appointment letters, circulars, legal correspondences, and secure digital records.",
  },
  {
    title: "Grievance Redressal and Ethics Committee",
    purpose:
      "Handles internal and external complaints impartially. Conducts hearings, mediation, disciplinary actions, and promotes ethical accountability.",
  },
  {
    title: "Audit and Inspection Department",
    purpose:
      "Conducts internal audits of finances, HR, security, and operations. Submits inspection reports to the Board and authorities ensuring transparency and anti-fraud mechanisms.",
  },
];

export default function Department() {
  return (
    <>

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
            Departments of National Crime Intelligence Agency
          </Typography>
        </Container>
      </Box>

      {/* ===== DEPARTMENTS LIST ===== */}
      <Box sx={{ backgroundColor: "#f6f7f9", py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {departments.map((dept, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    p: 3,
                    borderLeft: "5px solid #d71920",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#1c2c4c",
                      mb: 1,
                    }}
                  >
                    {index + 1}. {dept.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 14.8,
                      lineHeight: 1.7,
                      color: "#333",
                    }}
                  >
                    {dept.purpose}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
