/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Review } from '../types';
import { X, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewSubmit: (review: Review) => void;
}

export default function ReviewModal({ isOpen, onClose, onReviewSubmit }: ReviewModalProps) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) {
      alert('작성자와 내용을 모두 입력해주세요.');
      return;
    }

    // Mask author name gracefully (e.g. 홍길동 -> 홍** 고객님 or 홍길 -> 홍* 고객님)
    let maskedAuthor = author.trim();
    if (maskedAuthor.length === 2) {
      maskedAuthor = maskedAuthor[0] + '* 고객님';
    } else if (maskedAuthor.length >= 3) {
      maskedAuthor = maskedAuthor[0] + '*'.repeat(maskedAuthor.length - 2) + maskedAuthor[maskedAuthor.length - 1] + ' 고객님';
    } else {
      maskedAuthor = maskedAuthor + ' 고객님';
    }

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      rating,
      content: content.trim(),
      author: maskedAuthor,
      date: new Date().toISOString().split('T')[0],
      imageUrl: imageUrl.trim() || undefined,
    };

    onReviewSubmit(newReview);
    setAuthor('');
    setContent('');
    setImageUrl('');
    setRating(5);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#30302f]/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-md rounded-2xl bg-[#fcf9f7] p-8 shadow-2xl border border-[#cfc5bb]/30"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-[#695c52] hover:text-[#1b1c1b] transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl text-[#695c52] tracking-tight">소중한 후기 작성</h3>
              <p className="text-xs text-[#4c463f] mt-1">그레이스K와 함께 한 아름다운 여정의 솔직한 이야기를 들려주세요.</p>
            </div>

            {/* Star Rating Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold tracking-wider text-[#695c52] uppercase">만족도 별점 *</label>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(null)}
                    className="text-[#695c52] hover:scale-110 transition-transform focus:outline-none"
                  >
                    <Star
                      className="h-8 w-8 transition-colors duration-150"
                      fill={(hoverRating !== null ? star <= hoverRating : star <= rating) ? '#695c52' : 'none'}
                      strokeWidth={1.5}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Author Input */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold tracking-wider text-[#695c52] uppercase">방문자 성함 *</label>
              <input
                type="text"
                required
                placeholder="예: 홍길동 (자동 마스킹 처리됩니다)"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full rounded-lg border border-[#cfc5bb] bg-white px-4 py-3 text-sm text-[#1b1c1b] focus:border-[#695c52] focus:outline-none focus:ring-1 focus:ring-[#695c52]"
              />
            </div>

            {/* Content Textarea */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold tracking-wider text-[#695c52] uppercase">시술 경험 후기 *</label>
              <textarea
                required
                placeholder="어떤 점이 좋으셨나요? 스타일 만족도, 분위기, 친절한 소통 등에 대한 상세한 리뷰를 적어주시면 큰 힘이 됩니다."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
                className="w-full rounded-lg border border-[#cfc5bb] bg-white px-4 py-3 text-sm text-[#1b1c1b] focus:border-[#695c52] focus:outline-none focus:ring-1 focus:ring-[#695c52] resize-none"
              />
            </div>

            {/* Image URL Input (Optional) */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold tracking-wider text-[#695c52] uppercase">후기 사진 URL (선택)</label>
              <input
                type="url"
                placeholder="예: https://example.com/hair-photo.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full rounded-lg border border-[#cfc5bb] bg-white px-4 py-3 text-sm text-[#1b1c1b] focus:border-[#695c52] focus:outline-none focus:ring-1 focus:ring-[#695c52]"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-1/3 rounded-full border border-[#695c52] py-3 text-sm font-semibold text-[#695c52] hover:bg-[#695c52]/5 transition-colors"
              >
                취소
              </button>
              <button
                type="submit"
                className="w-2/3 rounded-full bg-[#695c52] py-3 text-sm font-semibold text-white shadow-lg shadow-[#695c52]/10 hover:opacity-90 active:scale-[0.98] transition-all"
              >
                등록하기
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
