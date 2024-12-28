import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import ContactHeader from "../components/contact_header";

function ContactLayout() {
  return (
    <div>
      <ContactHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default ContactLayout;
