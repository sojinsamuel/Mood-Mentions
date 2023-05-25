import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import AnimatedEmoji from "@/components/AnimatedEmoji";
import UserFeedback from "@/components/UserFeedback";
import Footer from "@/components/Footer";
import Table from "@/components/Table";

export default function Home() {
  return (
    <>
      <Navigation />

      <Header />

      <AnimatedEmoji />

      <Table />

      <UserFeedback />
      <Footer />
    </>
  );
}
