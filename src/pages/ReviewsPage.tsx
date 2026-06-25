import { motion } from 'motion/react';
import { Review } from '../types';
import { Star, Plus, ThumbsUp, Quote } from 'lucide-react';

interface ReviewsPageProps {
  reviews: Review[];
  setIsReviewOpen: (open: boolean) => void;
}

export default function ReviewsPage({ reviews, setIsReviewOpen }: ReviewsPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="pb-24"
    >
      {/* Page Header */}
      <div className="relative bg-[#f6f3f1] py-20 border-b border-[#cfc5bb]/20">
        <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-[#695c52] uppercase block mb-3">Client Stories</span>
          <h1 className="font-serif text-3xl md:text-5xl text-[#1b1c1b] font-normal tracking-tight">
            고객 방문 후기
          </h1>
          <p className="mt-4 text-sm md:text-base text-[#695c52] max-w-xl mx-auto font-medium">
            그레이스K를 찾아주신 소중한 인연들의 진솔하고 행복한 헤어 디자인 기록들입니다.
          </p>
        </div>
      </div>

      {/* Summary Score Panel */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="rounded-3xl bg-white border border-[#cfc5bb]/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <span className="text-xs font-bold text-[#695c52] uppercase tracking-wider">Average Rating</span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-5xl font-bold text-[#1b1c1b]">4.9</span>
              <span className="text-xl text-[#cfc5bb] font-semibold">/ 5.0</span>
            </div>
            <div className="flex text-amber-400 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5" fill="currentColor" stroke="none" />
              ))}
            </div>
          </div>

          <div className="h-px w-full md:h-12 md:w-px bg-[#cfc5bb]/30" />

          <div className="flex flex-wrap justify-center gap-10 text-center">
            <div>
              <p className="font-serif text-3xl font-bold text-[#1b1c1b]">{reviews.length}개</p>
              <p className="text-xs text-[#cfc5bb] mt-1 font-semibold">누적 방문 후기</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-[#1b1c1b]">100%</p>
              <p className="text-xs text-[#cfc5bb] mt-1 font-semibold">고객 맞춤 만족도</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-[#1b1c1b]">1:1</p>
              <p className="text-xs text-[#cfc5bb] mt-1 font-semibold">완벽 원장 전담 케어</p>
            </div>
          </div>

          <button
            onClick={() => setIsReviewOpen(true)}
            className="rounded-full bg-[#695c52] px-8 py-4 text-xs font-bold text-white shadow-lg shadow-[#695c52]/10 hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Plus className="h-4 w-4" />
            <span>나의 방문 후기 등록하기</span>
          </button>
        </div>
      </div>

      {/* Reviews Main Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 border border-[#cfc5bb]/20 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-[#695c52]/5 pointer-events-none" />
              
              <div className="space-y-5">
                {/* Rating */}
                <div className="flex text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4" fill="currentColor" stroke="none" />
                  ))}
                </div>

                {/* Content and Image */}
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-[#1b1c1b] leading-relaxed font-light">
                    "{rev.content}"
                  </p>

                  {rev.imageUrl && (
                    <div className="w-full h-48 rounded-xl overflow-hidden border border-[#cfc5bb]/20 relative bg-[#f6f3f1]">
                      <img
                        src={rev.imageUrl}
                        alt="Style photo"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#cfc5bb]/20 mt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1dfd2] font-serif text-xs font-bold text-[#695c52]">
                  GK
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-[#1b1c1b]">{rev.author}</p>
                  <p className="text-[10px] text-[#cfc5bb] mt-0.5 font-medium">{rev.date}</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-[#695c52] font-bold bg-[#fcf9f7] px-2 py-1 rounded border border-[#cfc5bb]/10">
                  <ThumbsUp className="h-3 w-3" />
                  <span>예약인증</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
