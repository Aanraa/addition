import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  if (router.pathname !== "/login")
    return (
      <div className="min-h-screen relative">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    );
  else {
    return (
      <div className="min-h-screen relative">
        <main>{children}</main>
      </div>
    );
  }
}
