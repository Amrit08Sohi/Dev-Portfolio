import { navItems } from "@/data/profile";
import { X, Sun, Moon, ArrowDown, ArrowUpRight, Menu } from "lucide-react";
import "@/App.css";
import { useState, useEffect } from "react";
import Lenis from "lenis";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("amritpal-theme") || "dark",
  );

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("amritpal-theme", theme);
  }, [theme]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15 });
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const onScroll = () => setScrolled(scrollY > 24);
    addEventListener("scroll", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      removeEventListener("scroll", onScroll);
    };
  }, []);

  const go = (id) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav
      className={`nav ${scrolled && "nav-scrolled"}`}
      data-testid="main-navigation"
    >
      <button
        className="brand"
        onClick={() => go("top")}
        data-testid="brand-home"
      >
        <span className="brand-mark">A</span>Amritpal
        <span className="muted">.dev</span>
      </button>
      <div className="nav-links">
        {navItems.map((n) => (
          <button
            key={n.id}
            onClick={() => go(n.id)}
            data-testid={`nav-${n.id}`}
          >
            {n.label}
          </button>
        ))}
      </div>
      <div className="nav-actions">
        <button
          className="icon-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          data-testid="theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <a
          className="resume-btn"
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="nav-resume"
        >
          Resume <ArrowDown size={14} />
        </a>
        <button
          className="menu-btn"
          onClick={() => setMenu(!menu)}
          data-testid="mobile-menu-toggle"
          aria-expanded={menu}
          aria-controls="mobile-navigation"
        >
          {menu ? <X /> : <Menu />}
        </button>
      </div>
      {menu && (
        <div className="mobile-menu" id="mobile-navigation">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              data-testid={`mobile-nav-${n.id}`}
            >
              {n.label}
              <ArrowUpRight size={15} />
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
