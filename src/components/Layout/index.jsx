import { Footer } from "components/UI/Footer/Footer";
import { Header } from "components/UI/Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="layout">{children}</div>
      <Footer />
    </>
  );
}
