import Image from "next/image";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import Footer from "@/components/common/footer";
import { AnimatePresence, Spring, motion } from "framer-motion";
import Header from "@/components/common/header";
import HeroSection from "@/components/hero";
import ProductDetails from "@/components/product-details";
import ProductSlider from "@/components/product.slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const router = useRouter();
  const images = [
    {
      original: "assets/images/IMG-20.jpg",
      thumbnail: "/thumbnails/cleanser1.jpg",
    },
    {
      original: "assets/images/IMG-21.jpg",
      thumbnail: "/thumbnails/cleanser1.jpg",
    },
    {
      original: "assets/images/IMG-22.jpg",
      thumbnail: "/thumbnails/cleanser1.jpg",
    },
    {
      original: "assets/images/IMG-23.jpg",
      thumbnail: "/thumbnails/cleanser1.jpg",
    },
    {
      original: "assets/images/IMG-24.jpg",
      thumbnail: "/thumbnails/cleanser1.jpg",
    },
    {
      original: "assets/images/IMG-25.jpg",
      thumbnail: "/thumbnails/cleanser1.jpg",
    },
    {
      original: "assets/images/IMG-26.jpg",
      thumbnail: "/thumbnails/cleanser1.jpg",
    },
    {
      original: "assets/images/IMG-27.jpg",
      thumbnail: "/thumbnails/cleanser1.jpg",
    },
    {
      original: "assets/images/IMG-28.jpg",
      thumbnail: "/thumbnails/cleanser1.jpg",
    },
    {
      original: "assets/images/IMG-29.jpg",
      thumbnail: "/thumbnails/cleanser1.jpg",
    },
    {
      original: "assets/images/IMG-30.jpg",
      thumbnail: "/thumbnails/cleanser1.jpg",
    },
    {
      original: "assets/images/IMG-31.jpg",
      thumbnail: "/thumbnails/cleanser1.jpg",
    },
    {
      original: "assets/images/IMG-32.jpg",
      thumbnail: "/thumbnails/cleanser1.jpg",
    },
    {
      original: "assets/images/IMG-33.jpg",
      thumbnail: "/thumbnails/cleanser1.jpg",
    },
  ];

  const transitionColor = "deepskyblue";
   const transitionSpringPhysics: Spring = {
     type: "spring",
     mass: 0.2,
     stiffness: 80,
     damping: 10,
   };

  return (
    <div className="bg-[#BEB6AB]">
      <Header />
      <HeroSection />
      <AnimatePresence>
        <motion.div key={router.route}>
          <motion.div
            style={{
              backgroundColor: "#A65712",
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              bottom: 0,
            }}
            transition={transitionSpringPhysics}
            animate={{ height: "0vh" }}
            exit={{ height: "100vh" }}
          />
          <ProductSlider images={images} />
          <ProductDetails />
          <motion.div
            style={{
              backgroundColor: "#A65712",
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              top: 0,
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "100vh" }}
            animate={{ height: "0vh", transition: { delay: 0.2 } }}
          />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
