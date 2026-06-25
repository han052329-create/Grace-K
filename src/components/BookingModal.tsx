/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SERVICES, TIME_SLOTS } from '../data';
import { Booking } from '../types';
import { X, Calendar as CalendarIcon, Clock, User, Phone, FileText, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string;
  onBookingComplete: (booking: Booking) => void;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedServiceId = 'cut-premium',
  onBookingComplete,
}: BookingModalProps) {
  const [serviceId, setServiceId] = useState(selectedServiceId);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [createdBooking, setCreatedBooking] = useState<Booking | null>(null);

  // Sync selectedServiceId if it changes
  React.useEffect(() => {
    if (selectedServiceId) {
      setServiceId(selectedServiceId);
    }
  }, [selectedServiceId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date || !time) {
      alert('모든 필수 항목을 입력해주세요.');
      return;
    }

    const selectedService = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

    const newBooking: Booking = {
      id: `book-${Date.now()}`,
      customerName: name,
      customerPhone: phone,
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      price: selectedService.price,
      date,
      time,
      status: 'confirmed',
      notes,
    };

    onBookingComplete(newBooking);
    setCreatedBooking(newBooking);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setDate('');
    setTime('');
    setNotes('');
    setIsSuccess(false);
    setCreatedBooking(null);
    onClose();
  };

  // Prevent selecting past dates
  const today = new Date().toISOString().split('T')[0];

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

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#fcf9f7] p-8 shadow-2xl border border-[#cfc5bb]/30"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-[#695c52] hover:text-[#1b1c1b] transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl text-[#695c52] tracking-tight">온라인 간편 예약</h3>
                <p className="text-xs text-[#4c463f] mt-1">오직 한 분만을 위한 차분하고 정성스러운 1:1 맞춤 케어</p>
              </div>

              {/* Service Select */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-wider text-[#695c52] uppercase">시술 프로그램 선택 *</label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full rounded-lg border border-[#cfc5bb] bg-white px-4 py-3 text-sm text-[#1b1c1b] focus:border-[#695c52] focus:outline-none focus:ring-1 focus:ring-[#695c52]"
                >
                  {SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.name} (₩{srv.price.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>

              {/* Customer Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold tracking-wider text-[#695c52] uppercase">예약자 성함 *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-4 w-4 text-[#cfc5bb]" />
                    <input
                      type="text"
                      required
                      placeholder="성함 입력"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-[#cfc5bb] bg-white py-3 pl-10 pr-4 text-sm text-[#1b1c1b] focus:border-[#695c52] focus:outline-none focus:ring-1 focus:ring-[#695c52]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold tracking-wider text-[#695c52] uppercase">연락처 *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 h-4 w-4 text-[#cfc5bb]" />
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-lg border border-[#cfc5bb] bg-white py-3 pl-10 pr-4 text-sm text-[#1b1c1b] focus:border-[#695c52] focus:outline-none focus:ring-1 focus:ring-[#695c52]"
                    />
                  </div>
                </div>
              </div>

              {/* Date and Time Selection */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold tracking-wider text-[#695c52] uppercase">희망 예약일 *</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-3.5 h-4 w-4 text-[#cfc5bb]" />
                    <input
                      type="date"
                      required
                      min={today}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-lg border border-[#cfc5bb] bg-white py-3 pl-10 pr-4 text-sm text-[#1b1c1b] focus:border-[#695c52] focus:outline-none focus:ring-1 focus:ring-[#695c52]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold tracking-wider text-[#695c52] uppercase">희망 시간 *</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3.5 h-4 w-4 text-[#cfc5bb]" />
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                      className="w-full rounded-lg border border-[#cfc5bb] bg-white py-3 pl-10 pr-4 text-sm text-[#1b1c1b] focus:border-[#695c52] focus:outline-none focus:ring-1 focus:ring-[#695c52] appearance-none"
                    >
                      <option value="">선택</option>
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Notes */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-wider text-[#695c52] uppercase">요청 사항 (선택)</label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3.5 h-4 w-4 text-[#cfc5bb]" />
                  <textarea
                    placeholder="스타일 관련 고민이나 요청사항이 있으시면 적어주세요."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    className="w-full rounded-lg border border-[#cfc5bb] bg-white py-3 pl-10 pr-4 text-sm text-[#1b1c1b] focus:border-[#695c52] focus:outline-none focus:ring-1 focus:ring-[#695c52] resize-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/3 rounded-full border border-[#695c52] py-3.5 text-sm font-semibold text-[#695c52] hover:bg-[#695c52]/5 transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="w-2/3 rounded-full bg-[#695c52] py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#695c52]/10 hover:opacity-90 active:scale-[0.98] transition-all"
                >
                  예약 완료하기
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-6"
            >
              <div className="flex justify-center">
                <CheckCircle2 className="h-16 w-16 text-[#695c52] animate-bounce" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-[#695c52]">예약이 정상 등록되었습니다</h3>
                <p className="text-sm text-[#4c463f]">원장님께서 확인 후 연락드릴 예정입니다.</p>
              </div>

              {createdBooking && (
                <div className="mx-auto max-w-sm rounded-xl bg-[#f0edeb] p-6 text-left text-sm text-[#4c463f] space-y-3">
                  <div className="flex justify-between border-b border-[#cfc5bb]/30 pb-2">
                    <span className="font-semibold text-[#695c52]">예약 시술</span>
                    <span className="text-[#1b1c1b] font-medium">{createdBooking.serviceName}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#cfc5bb]/30 pb-2">
                    <span className="font-semibold text-[#695c52]">예약 일시</span>
                    <span className="text-[#1b1c1b] font-medium">{createdBooking.date} / {createdBooking.time}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#cfc5bb]/30 pb-2">
                    <span className="font-semibold text-[#695c52]">예약자</span>
                    <span className="text-[#1b1c1b] font-medium">{createdBooking.customerName}님 ({createdBooking.customerPhone})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#695c52]">금액</span>
                    <span className="text-[#695c52] font-semibold">₩{createdBooking.price.toLocaleString()}</span>
                  </div>
                </div>
              )}

              <button
                onClick={handleReset}
                className="w-full rounded-full bg-[#695c52] py-3.5 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition-all"
              >
                닫기
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
