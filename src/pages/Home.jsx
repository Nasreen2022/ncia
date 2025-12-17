import Header from "../components/Header";
import Director from "../components/Director";
import IntroSection from "../components/IntroSection";
import MemberCard from "../components/MemberCard";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <IntroSection />
      <Director />
      {/* <MemberCard /> */}
      <BlogCard />
      <Footer />
    </>
  );
}
