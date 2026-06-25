/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { REVIEWS as INITIAL_REVIEWS } from './data';
import { Booking, Review } from './types';
import BookingModal from './components/BookingModal';
import ReviewModal from './components/ReviewModal';
import ConsultationChat from './components/ConsultationChat';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PricePage from './pages/PricePage';
import ReviewsPage from './pages/ReviewsPage';
import LocationPage from './pages/LocationPage';
import {
  Scissors,
  Sparkles,
  MapPin,
  Clock as ClockIcon,
  Phone,
  ArrowUp,
  Menu,
  X,
  Trash2,
  BookmarkCheck,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type PageType = 'home' | 'about' | 'services' | 'price' | 'reviews' | 'location';

export default function App() {
  // Navigation Routing State
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Booking State
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Review State
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  // My Bookings Dropdown State
  const [showMyBookings, setShowMyBookings] = useState(false);

  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Back to Top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Notification Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // URL Hash synchronization
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      let newPage: PageType = 'home';

      if (hash === '#/about' || hash === '#about') {
        newPage = 'about';
      } else if (hash === '#/services' || hash === '#services') {
        newPage = 'services';
      } else if (hash === '#/price' || hash === '#price') {
        newPage = 'price';
      } else if (hash === '#/reviews' || hash === '#reviews') {
        newPage = 'reviews';
      } else if (hash === '#/location' || hash === '#location') {
        newPage = 'location';
      }

      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    };

    window.addEventListener('hashchange', handleHashChange);
    // Trigger on mount
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Load bookings and custom reviews from LocalStorage on mount
  useEffect(() => {
    const savedBookings = localStorage.getItem('grace_k_bookings');
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }

    const savedReviews = localStorage.getItem('grace_k_reviews');
    if (savedReviews) {
      try {
        const parsed: Review[] = JSON.parse(savedReviews);
        const updated = parsed.map((r) => {
          const matchingInitial = INITIAL_REVIEWS.find((ir) => ir.id === r.id);
          if (matchingInitial) {
            return { ...r, imageUrl: matchingInitial.imageUrl };
          }
          return r;
        });
        setReviews(updated);
        localStorage.setItem('grace_k_reviews', JSON.stringify(updated));
      } catch (e) {
        setReviews(INITIAL_REVIEWS);
      }
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleBookingComplete = (newBooking: Booking) => {
    const updated = [newBooking, ...bookings];
    setBookings(updated);
    localStorage.setItem('grace_k_bookings', JSON.stringify(updated));
    triggerToast(`✨ [${newBooking.serviceName}] 예약이 임시 등록되었습니다!`);
  };

  const handleReviewSubmit = (newReview: Review) => {
    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem('grace_k_reviews', JSON.stringify(updated));
    triggerToast('💖 후기가 정성스럽게 등록되었습니다. 감사합니다!');
  };

  const handleCancelBooking = (id: string) => {
    if (confirm('정말로 예약을 취소하시겠습니까?')) {
      const updated = bookings.filter((b) => b.id !== id);
      setBookings(updated);
      localStorage.setItem('grace_k_bookings', JSON.stringify(updated));
      triggerToast('🗑️ 예약이 안전하게 취소되었습니다.');
    }
  };

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const getNavLinkClass = (page: PageType) => {
    const base = "text-sm font-semibold tracking-wide transition-all relative py-1.5";
    const active = "text-[#695c52] font-bold";
    const inactive = "text-[#4c463f] hover:text-[#695c52]";
    return `${base} ${currentPage === page ? active : inactive}`;
  };

  return (
    <div className="min-h-screen bg-[#fcf9f7] text-[#1b1c1b] selection:bg-[#f1dfd2] selection:text-[#50453b]">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#30302f] px-6 py-3 text-sm font-medium text-white shadow-2xl flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4 text-[#ede0d3] animate-pulse" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TopNavBar */}
      <nav className="sticky top-0 z-40 w-full bg-[#fcf9f7]/90 backdrop-blur-md border-b border-[#cfc5bb]/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          {/* Logo */}
          <a href="#/" className="hover:opacity-90 transition-opacity block py-1">
            <img
              src="https://postfiles.pstatic.net/MjAyNjA2MjRfMjAz/MDAxNzgyMzAxOTkxNzAy.XgaAoaKmVjvo8WkXe3-q9AhZ-HunJN7FKdxpy9RlBBsg.h4-Vi1XB_RyIQeWlXwqSFZlqLD6wfUL2xcFqbeRHC78g.PNG/%ED%8C%A8%EC%93%B0.png?type=w773"
              alt="Grace K"
              className="h-14 md:h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#/about" className={getNavLinkClass('about')}>
              About
              {currentPage === 'about' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#695c52]" />
              )}
            </a>
            <a href="#/services" className={getNavLinkClass('services')}>
              Services
              {currentPage === 'services' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#695c52]" />
              )}
            </a>
            <a href="#/price" className={getNavLinkClass('price')}>
              Price
              {currentPage === 'price' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#695c52]" />
              )}
            </a>
            <a href="#/reviews" className={getNavLinkClass('reviews')}>
              Reviews
              {currentPage === 'reviews' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#695c52]" />
              )}
            </a>
            <a href="#/location" className={getNavLinkClass('location')}>
              Location
              {currentPage === 'location' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#695c52]" />
              )}
            </a>
          </div>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* My Bookings Trigger */}
            <div className="relative">
              <button
                onClick={() => setShowMyBookings(!showMyBookings)}
                className="flex items-center gap-1.5 rounded-full border border-[#cfc5bb] px-4 py-2 text-xs font-semibold text-[#695c52] hover:bg-[#695c52]/5 transition-colors cursor-pointer"
              >
                <BookmarkCheck className="h-4 w-4" />
                <span>내 예약 확인</span>
                {bookings.length > 0 && (
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#695c52] text-[9px] text-white">
                    {bookings.length}
                  </span>
                )}
                <ChevronDown className="h-3 w-3" />
              </button>

              {/* My Bookings Dropdown */}
              <AnimatePresence>
                {showMyBookings && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2  w-80 overflow-hidden rounded-2xl bg-white p-5 shadow-2xl border border-[#cfc5bb]/30"
                  >
                    <div className="flex items-center justify-between border-b border-[#cfc5bb]/20 pb-3">
                      <span className="font-serif text-sm font-bold text-[#695c52]">최근 예약 일정 ({bookings.length})</span>
                      <button onClick={() => setShowMyBookings(false)} className="text-xs text-[#cfc5bb] hover:text-[#1b1c1b] cursor-pointer">
                        닫기
                      </button>
                    </div>

                    <div className="mt-3 max-h-60 overflow-y-auto space-y-3 pr-1">
                      {bookings.length === 0 ? (
                        <p className="text-center py-6 text-xs text-[#cfc5bb]">등록된 예약 내역이 없습니다.</p>
                      ) : (
                        bookings.map((b) => (
                          <div key={b.id} className="rounded-lg bg-[#fbf8f5] p-3 text-xs border border-[#cfc5bb]/10 relative group">
                            <button
                              onClick={() => handleCancelBooking(b.id)}
                              className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 text-rose-500 hover:text-rose-700 p-1 rounded hover:bg-rose-50 transition-all cursor-pointer"
                              title="예약 취소"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                            <p className="font-bold text-[#1b1c1b] truncate max-w-[85%]">{b.serviceName}</p>
                            <p className="text-[#695c52] mt-1 font-medium">{b.date} / {b.time}</p>
                            <div className="flex items-center justify-between mt-2 text-[10px] text-[#cfc5bb]">
                              <span>예약자: {b.customerName}님</span>
                              <span className="bg-[#ede0d3] text-[#50453b] px-1.5 py-0.5 rounded font-semibold text-[9px]">
                                예약 확정
                              </span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleOpenBooking()}
              className="rounded-full bg-[#695c52] px-6 py-2.5 text-xs font-semibold text-white shadow-md hover:opacity-90 active:scale-95 transition-all cursor-pointer"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-[#695c52] p-1 cursor-pointer">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-[#cfc5bb]/20 bg-[#fcf9f7] overflow-hidden"
            >
              <div className="flex flex-col space-y-4 px-6 py-5">
                <a
                  href="#/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-semibold ${currentPage === 'home' ? 'text-[#695c52]' : 'text-[#4c463f]'}`}
                >
                  Home
                </a>
                <a
                  href="#/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-semibold ${currentPage === 'about' ? 'text-[#695c52]' : 'text-[#4c463f]'}`}
                >
                  About Salon
                </a>
                <a
                  href="#/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-semibold ${currentPage === 'services' ? 'text-[#695c52]' : 'text-[#4c463f]'}`}
                >
                  Our Services
                </a>
                <a
                  href="#/price"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-semibold ${currentPage === 'price' ? 'text-[#695c52]' : 'text-[#4c463f]'}`}
                >
                  Price Guide
                </a>
                <a
                  href="#/reviews"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-semibold ${currentPage === 'reviews' ? 'text-[#695c52]' : 'text-[#4c463f]'}`}
                >
                  Client Stories
                </a>
                <a
                  href="#/location"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-semibold ${currentPage === 'location' ? 'text-[#695c52]' : 'text-[#4c463f]'}`}
                >
                  Location & Map
                </a>

                {/* Mobile Booking Status */}
                {bookings.length > 0 && (
                  <div className="border-t border-[#cfc5bb]/20 pt-4">
                    <p className="text-xs font-bold text-[#695c52] mb-2">📅 예약 예정 ({bookings.length}건)</p>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {bookings.map((b) => (
                        <div key={b.id} className="flex justify-between items-center text-xs bg-white p-2.5 rounded-lg border border-[#cfc5bb]/20">
                          <div>
                            <p className="font-semibold text-[#1b1c1b]">{b.serviceName}</p>
                            <p className="text-[10px] text-[#695c52]">{b.date} / {b.time}</p>
                          </div>
                          <button
                            onClick={() => handleCancelBooking(b.id)}
                            className="text-rose-500 hover:text-rose-700 text-[10px] underline font-medium cursor-pointer"
                          >
                            취소
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleOpenBooking();
                  }}
                  className="w-full rounded-full bg-[#695c52] py-3 text-center text-sm font-semibold text-white shadow-md hover:opacity-90 cursor-pointer"
                >
                  예약 신청하기
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Pages Content Router with animations */}
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <HomePage
              reviews={reviews}
              handleOpenBooking={handleOpenBooking}
              handleBookingComplete={handleBookingComplete}
              setIsReviewOpen={setIsReviewOpen}
            />
          )}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'services' && <ServicesPage handleOpenBooking={handleOpenBooking} />}
          {currentPage === 'price' && <PricePage handleBookingComplete={handleBookingComplete} />}
          {currentPage === 'reviews' && (
            <ReviewsPage reviews={reviews} setIsReviewOpen={setIsReviewOpen} />
          )}
          {currentPage === 'location' && <LocationPage />}
        </AnimatePresence>
      </main>

      {/* Consultation Chat widget */}
      <ConsultationChat onOpenBooking={handleOpenBooking} />

      {/* Footer */}
      <footer className="bg-[#f0edeb] border-t border-[#cfc5bb]/20 py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div className="space-y-4">
            <a href="#/">
              <img
                src="https://postfiles.pstatic.net/MjAyNjA2MjRfMjAz/MDAxNzgyMzAxOTkxNzAy.XgaAoaKmVjvo8WkXe3-q9AhZ-HunJN7FKdxpy9RlBBsg.h4-Vi1XB_RyIQeWlXwqSFZlqLD6wfUL2xcFqbeRHC78g.PNG/%ED%8C%A8%EC%93%B0.png?type=w773"
                alt="Grace K"
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-xs text-[#4c463f] leading-relaxed max-w-xs">
              진정한 아름다움은 당신 본연의 모습과 흐름에서 시작됩니다. 프리미엄 헤어 살롱 그레이스K가 당신의 고요한 여정을
              함께하겠습니다.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-[#695c52] uppercase">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#/about" className="text-[#4c463f] hover:text-[#695c52] transition-colors">
                  About Salon
                </a>
              </li>
              <li>
                <a href="#/services" className="text-[#4c463f] hover:text-[#695c52] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#/price" className="text-[#4c463f] hover:text-[#695c52] transition-colors">
                  Price Guide
                </a>
              </li>
              <li>
                <a href="#/location" className="text-[#4c463f] hover:text-[#695c52] transition-colors">
                  Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-[#695c52] uppercase">Legal & Contact</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-[#4c463f]">개인정보 처리방침</span>
              </li>
              <li>
                <span className="text-[#4c463f]">이용 약관</span>
              </li>
            </ul>
            <p className="text-[10px] text-[#cfc5bb] pt-6">© 2026 Grace K Hair Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-8 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#fcf9f7]/90 text-[#695c52] shadow-xl border border-[#cfc5bb]/30 hover:bg-[#695c52] hover:text-white transition-all duration-300 cursor-pointer"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedServiceId={selectedServiceId}
        onBookingComplete={handleBookingComplete}
      />

      <ReviewModal
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        onReviewSubmit={handleReviewSubmit}
      />
    </div>
  );
}
