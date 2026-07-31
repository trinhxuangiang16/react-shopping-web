import { Col, Container, Row } from "react-bootstrap";
import { Mail, MapPin, Phone } from "lucide-react";

const IconFacebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
  </svg>
);
const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
const IconYoutube = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
const IconTwitter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 font-sans">
      <Container className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <Row className="gy-8 pb-10">
          <Col lg={4} md={6} className="mb-6 md:mb-0">
            <img src="/logo-white.svg" alt="BOUTIQUE Logo" className="h-8 mb-5" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs mb-6">
              Authorized reseller of Apple technology devices & premium tech accessories. Guaranteed quality & dedicated warranty service.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <MapPin className="size-3.5 text-blue-500 shrink-0" />
                <span>401 Market Street, San Francisco, CA 94105</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <Phone className="size-3.5 text-blue-500 shrink-0" />
                <span>+1 (415) 555-0198</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <Mail className="size-3.5 text-blue-500 shrink-0" />
                <span>support@boutique.store</span>
              </div>
            </div>
          </Col>

          <Col lg={2} md={3} sm={6} className="col-6 mb-4 md:mb-0">
            <h6 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-5">CUSTOMER SERVICES</h6>
            <ul className="space-y-3 text-xs text-slate-400 p-0 list-none">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Help & Contact Us</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Returns & Refunds</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Payment Methods</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Terms & Conditions</li>
            </ul>
          </Col>

          <Col lg={2} md={3} sm={6} className="col-6 mb-4 md:mb-0">
            <h6 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-5">COMPANY</h6>
            <ul className="space-y-3 text-xs text-slate-400 p-0 list-none">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">About Boutique</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Our Store Network</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Tech Blog</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Careers</li>
            </ul>
          </Col>

          <Col lg={4} md={6} sm={6} className="col-6">
            <h6 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-5">FOLLOW US</h6>
            <div className="flex items-center gap-3 mb-8">
              <a className="size-9 rounded-full bg-slate-800 hover:bg-blue-600 grid place-items-center text-slate-400 hover:text-white transition-all cursor-pointer">
                <IconFacebook />
              </a>
              <a className="size-9 rounded-full bg-slate-800 hover:bg-pink-600 grid place-items-center text-slate-400 hover:text-white transition-all cursor-pointer">
                <IconInstagram />
              </a>
              <a className="size-9 rounded-full bg-slate-800 hover:bg-red-600 grid place-items-center text-slate-400 hover:text-white transition-all cursor-pointer">
                <IconYoutube />
              </a>
              <a className="size-9 rounded-full bg-slate-800 hover:bg-slate-700 grid place-items-center text-slate-400 hover:text-white transition-all cursor-pointer">
                <IconTwitter />
              </a>
            </div>

            <h6 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-4">WHY BOUTIQUE?</h6>
            <div className="grid grid-cols-2 gap-2.5">
              <span className="text-[10px] text-slate-400">100% Authentic</span>
              <span className="text-[10px] text-slate-400">Free Shipping</span>
              <span className="text-[10px] text-slate-400">Secure Payment</span>
              <span className="text-[10px] text-slate-400">24/7 Support</span>
            </div>
          </Col>
        </Row>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-medium">
          <p>© 2026 BOUTIQUE STORE. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 justify-center sm:justify-end">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Cookie Settings</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;

