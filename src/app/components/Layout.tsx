import { Outlet, Link, useLocation } from "react-router";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Layout() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors">
      {/* Navigation */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="font-semibold text-xl tracking-tight">
              Vivek.
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive(item.path) ? "secondary" : "ghost"}
                    size="sm"
                    className="font-medium"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              <Link to="/schedule-call" className="hidden md:block">
                <Button size="sm" className="px-5">Book a Call</Button>
              </Link>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 p-0 rounded-full"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-zinc-400 hover:text-zinc-50" />
                ) : (
                  <Moon className="w-4 h-4 text-zinc-500 hover:text-zinc-900" />
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden w-10 h-10 p-0 rounded-full"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-zinc-100 dark:border-zinc-800 animate-in fade-in slide-in-from-top-4 duration-200">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant={isActive(item.path) ? "secondary" : "ghost"}
                      className="w-full justify-start text-lg h-12"
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
                <Link to="/schedule-call" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full h-12 text-lg">Book a Call</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 dark:border-zinc-800 mt-32 py-24 bg-zinc-50/50 dark:bg-zinc-950/50">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-12 lg:col-span-4">
              <div className="font-bold text-2xl tracking-tighter mb-4">Vivek.</div>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-sm mb-6">
                Backend Engineer specializing in building scalable systems with Python & Django. 
                Based in India, serving clients worldwide.
              </p>
              <div className="flex items-center gap-4">
                <a href="mailto:vr3750@gmail.com" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                  vr3750@gmail.com
                </a>
              </div>
            </div>
            <div className="md:col-span-4 lg:col-span-2">
              <div className="font-semibold mb-6 text-sm uppercase tracking-widest text-zinc-400">Services</div>
              <div className="flex flex-col gap-4 text-sm font-medium">
                <Link to="/services" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
                  SaaS Development
                </Link>
                <Link to="/services" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
                  AI Automation
                </Link>
                <Link to="/services" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
                  Backend Architecture
                </Link>
              </div>
            </div>
            <div className="md:col-span-4 lg:col-span-2">
              <div className="font-semibold mb-6 text-sm uppercase tracking-widest text-zinc-400">Company</div>
              <div className="flex flex-col gap-4 text-sm font-medium">
                <Link to="/contact" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
                  Contact
                </Link>
                <Link to="/schedule-call" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
                  Schedule Call
                </Link>
              </div>
            </div>
            <div className="md:col-span-4 lg:col-span-4">
              <div className="font-semibold mb-6 text-sm uppercase tracking-widest text-zinc-400">Social</div>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <a href="https://www.linkedin.com/in/vivek-singh-rajawat-bba2601a9/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/viveksinghrajawat" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="mt-24 pt-8 border-t border-zinc-100 dark:border-zinc-800 text-sm text-zinc-500 text-center">
            © 2026 Vivek Singh Rajawat. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
