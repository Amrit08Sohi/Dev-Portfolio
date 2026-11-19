import "@/App.css"
import { ArrowUp } from "lucide-react";

const Footer = () => {
    return (
        <footer className="footer wrap">
        <button
          className="brand"
          onClick={() => go("top")}
          data-testid="footer-brand"
        >
          <span className="brand-mark">A</span>Amritpal
          <span className="muted">.dev</span>
        </button>
        <span>© 2025 Amritpal Singh. Built with intent.</span>
        <button
          className="back-top"
          onClick={() => go("top")}
          data-testid="back-to-top"
        >
          <ArrowUp size={16} />
        </button>
      </footer> 
    )
}

export default Footer;