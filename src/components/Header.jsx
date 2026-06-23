import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  const linkClass = ({ isActive }) =>
    `font-semibold text-base pb-0.5 border-b-2 transition-colors ${isActive
      ? "text-[#e8b84b] border-[#e8b84b]"
      : "text-white border-transparent hover:text-[#e8b84b] hover:border-[#e8b84b]"
    }`;

  return (
    <header className="bg-[#1f3864] sticky top-0 z-50 shadow-md">
      <div className="max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-white font-bold text-[26px] tracking-wide leading-tight">
            Merkato Store
          </h1>
          <p className="text-[#e8b84b] text-[13px] m-0">Your trusted marketplace</p>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          {token ? (
            <button onClick={handleLogout}
              className="text-white hover:text-[#e8b84b] font-semibold text-base transitioncolors">
              Logout
            </button>
          ) : (
            <NavLink to="/login" className={linkClass}>Login</NavLink>
          )}
        </nav>

        {/* Cart + hamburger */}
        <div className="flex items-center gap-4">
          <Link to="/products" className="relative text-white hover:text-[#e8b84b] transition-colors flex items-center gap-1.5">
            <ShoppingCart size={20} />
            <span
              className="bg-[#e8b84b] text-[#1f3864] rounded-full w-[22px] h-[22px] flex items-center justify-center text-[13px] font-bold"
            >
              {cartCount}
            </span>
          </Link>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-[#1f3864] border-t border-white/20 px-8 py-4 flex flex-col gap-3">
          <NavLink to="/" end className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/products" className={linkClass} onClick={() => setMenuOpen(false)}>Products</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>
      )}
    </header>
  );
}
