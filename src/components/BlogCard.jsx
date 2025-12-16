import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";

import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";
import blog4 from "../assets/images/blog4.jpg";
import blog5 from "../assets/images/blog5.jpg";
import blog6 from "../assets/images/blog6.jpg";
import blog7 from "../assets/images/blog7.jpg";

const blogs = [
    {
        title: "Anti-Crime Corruption Activities:",
        image: blog1,
        description:
            "We invite people of India to create a corrupt free society that promotes good governance, transparency through corruption abolition programmes. Addressing crime and corruption requires a multifaceted approach",
    },
    {
        title: "Human Rights Activities:",
        image: blog2,
        description:
            "Article 12 to 35 contained in Part III of the Constitution deal with Fundamental Rights i.e. Right to equality, equality before law, prohibition of discrimination on grounds of religion, race, caste, sex or place of birth, equal opportunity in matters of employment.",
    },
    {
        title: "Legal Aid Program",
        image: blog3,
        description:
            "Legal support and awareness projects under NCIA Foundation play crucial roles in ensuring access to justice, upholding human rights, and promoting the rule of law. Here are some key aspects of legal support and awareness",
    },
    {
        title: "Child Rights & Protection",
        image: blog4,
        description:
            "Child Rights and Protection are fundamental principles that ensure the well-being, safety, and development of children. They encompass a range of legal, social, and humanitarian measures aimed at safeguarding children's rights",
    },
    {
        title: "RTI, WRIT,AND PIL SUPPORT:",
        image: blog5,
        description:
            "Our legal wings are delicately work on PIL protects the public interest and forces systemic change, whereas the RTI Act allows people to get information from public bodies RTI, WRIT, and PIL are important legal tools",
    },
    {
        title: "Women Empowerment",
        image: blog6,
        description:
            "Women empowerment project of NCIA Foundation refers to the process of enabling women to have control over their lives, exercise their rights, and achieve their full potential in all spheres of society. It involves addressing systemic barriers, discrimination",
    },
    {
        title: "Education Assistance",
        image: blog7,
        description:
            "Education assistance of NCIA Foundation refers to support provided to individuals to access and pursue educational opportunities. It aims to overcome barriers to education, improve educational outcomes, and promote lifelong learning.",
    },
];


export default function BlogSlider() {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let start = 0;

        const step = () => {
            start += 0.5; // adjust speed here
            if (start >= slider.scrollWidth / 2) start = 0;
            slider.scrollLeft = start;
            requestAnimationFrame(step);
        };

        const animationId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationId);
    }, []);

    // Duplicate blogs to make seamless scroll
    const blogList = [...blogs, ...blogs];

    return (
        <Box
            sx={{
                py: 10,
                backgroundColor: "#e6f2fb", // light blue background similar to NCIA
                // backgroundImage: "url('/src/assets/images/blog-bg-pattern.png')", // optional pattern
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            {/* SECTION TITLE */}
            <Typography variant="h4" align="center" fontWeight="bold" mb={6}>
                Our Blogs
            </Typography>

            {/* SLIDER */}
            <Box
                ref={sliderRef}
                sx={{
                    display: "flex",
                    gap: 3,
                    overflow: "hidden",
                    px: 3,
                }}
            >
                {blogList.map((blog, index) => (
                    <Card
                        key={index}
                        sx={{
                            minWidth: 280,
                            maxWidth: 320,
                            flexShrink: 0,
                            boxShadow: 3,
                            borderRadius: 2,
                            backgroundColor: "#ffffff", // white card background
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="180"
                            image={blog.image}
                            alt={blog.title}
                        />

                        <CardContent>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                {blog.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {blog.description}
                            </Typography>
                        </CardContent>


                    </Card>
                ))}
            </Box>
        </Box>
    );
}
