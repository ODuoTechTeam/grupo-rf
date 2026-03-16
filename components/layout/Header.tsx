"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { navigation } from "@/data/navigation";
import { contact } from "@/data/contact";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm"
          : "bg-white/80 backdrop-blur-md border-b border-gray-100"
      }`}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Top bar */}
      <motion.div
        className="hidden md:block bg-primary-pale border-b border-gray-100"
        animate={{ height: scrolled ? 0 : "auto", opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex justify-between items-center text-sm text-text-light">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${contact.tollFree.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-primary-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {contact.tollFree}
            </a>
            <span className="text-text-medium">|</span>
            <a
              href={`mailto:${contact.emailEngenharia}`}
              className="hover:text-primary-medium transition-colors"
            >
              {contact.emailEngenharia}
            </a>
          </div>
          <div className="flex items-center gap-3 text-text-light">
            <span>Brasília</span>
            <span className="text-text-medium">|</span>
            <span>Goiânia</span>
            <span className="text-text-medium">|</span>
            <span>São Paulo</span>
          </div>
        </div>
      </motion.div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Image
              src="/images/logo/logo-rf-engenharia.jpg"
              alt="Grupo RF Engenharia"
              width={180}
              height={53}
              className="h-10 w-auto"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() =>
                item.children && setOpenDropdown(item.href)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm text-text-light hover:text-primary-medium transition-colors rounded-lg hover:bg-gray-50"
              >
                {item.label}
                {item.children && (
                  <motion.span
                    animate={{ rotate: openDropdown === item.href ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </motion.span>
                )}
              </Link>
              <AnimatePresence>
                {item.children && openDropdown === item.href && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-1 w-64 bg-white backdrop-blur-xl border border-gray-200 rounded-xl shadow-lg py-2 z-50"
                  >
                    {item.children.map((child, i) => (
                      <motion.div
                        key={child.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm text-text-light hover:text-primary-medium hover:bg-gray-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                        {child.children && (
                          <div className="pl-4">
                            {child.children.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className="block px-4 py-1.5 text-xs text-text-medium hover:text-primary-medium hover:bg-gray-50 transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <motion.a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-primary-medium hover:bg-primary-light text-white text-sm font-semibold rounded-lg transition-all shadow-md shadow-primary-medium/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fale Conosco
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-text-primary"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="px-6 py-4 space-y-1">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => !item.children && setMobileOpen(false)}
                    className="flex items-center justify-between py-3 text-text-light hover:text-primary-medium transition-colors"
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openDropdown === item.href ? "rotate-180" : ""}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenDropdown(
                            openDropdown === item.href ? null : item.href
                          );
                        }}
                      />
                    )}
                  </Link>
                  <AnimatePresence>
                    {item.children && openDropdown === item.href && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 pb-2 space-y-1 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm text-text-medium hover:text-primary-medium transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </nav>
            <div className="px-6 pb-6">
              <motion.a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 bg-primary-medium hover:bg-primary-light text-white font-semibold rounded-lg transition-all"
                whileTap={{ scale: 0.98 }}
              >
                Fale Conosco
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
