import { motion } from 'motion/react';
import { SERVICES as INITIAL_SERVICES } from '../data';
import { Booking } from '../types';
import { Percent, Award, Sparkles, Check } from 'lucide-react';

interface PricePageProps {
  handleBookingComplete: (newBooking: Booking) => void;
}

export default function PricePage({ handleBookingComplete }: PricePageProps) {
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
          <span className="text-xs font-bold tracking-[0.2em] text-[#695c52] uppercase block mb-3">Price Guide</span>
          <h1 className="font-serif text-3xl md:text-5xl text-[#1b1c1b] font-normal tracking-tight">
            시술 가격표 안내
          </h1>
          <p className="mt-4 text-sm md:text-base text-[#695c52] max-w-xl mx-auto font-medium">
            거품 없는 정직하고 투명한 가격 정책과 정성이 가득 담긴 완벽한 풀케어 서비스를 약속합니다.
          </p>
        </div>
      </div>

      {/* Pricing Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left column: notices and policies */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-[#695c52]">Price Guide & Notice</h2>
              <p className="text-xs md:text-sm text-[#4c463f] leading-relaxed font-light">
                모든 헤어 시술은 정밀 헤어 컨설턴트 및 기본 영양 앰플 보호 코스를 무료로 장착하고 진행됩니다. 기장과 머리숱 손상도에 따라 디자이너 조율 가격이 추가될 수 있습니다.
              </p>
            </div>

            {/* Service policy cards */}
            <div className="rounded-2xl bg-[#ede0d3] p-6 border border-[#cfc5bb]/30 space-y-4">
              <div className="flex items-center gap-2 text-[#50453b]">
                <Sparkles className="h-4 w-4" />
                <h4 className="text-xs font-bold tracking-widest uppercase">시술 보장 가격 포함 혜택</h4>
              </div>
              <ul className="space-y-2.5 text-xs text-[#50453b] leading-relaxed">
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-[#695c52] shrink-0 mt-0.5" />
                  <span>원장 시그니처 샴푸 및 두피 자극 완화 헤어팩 제공</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-[#695c52] shrink-0 mt-0.5" />
                  <span>프리미엄 보강 단백질 케라틴 케어 내장</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-[#695c52] shrink-0 mt-0.5" />
                  <span>시술 후 10일 이내 무상 AS 조율 시스템 지원</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column: Services Prices Table */}
          <div className="lg:col-span-8 overflow-hidden rounded-2xl border border-[#cfc5bb]/40 bg-white shadow-xl shadow-[#695c52]/5">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#fcf9f7] border-b border-[#cfc5bb]/30">
                    <th className="px-6 py-4 text-xs font-bold tracking-wider text-[#695c52] uppercase">Service Item</th>
                    <th className="px-6 py-4 text-xs font-bold tracking-wider text-[#695c52] uppercase text-right">Starting From</th>
                    <th className="px-6 py-4 text-xs font-bold tracking-wider text-[#695c52] uppercase text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#cfc5bb]/20">
                  {INITIAL_SERVICES.map((srv) => (
                    <tr key={srv.id} className="hover:bg-[#fcf9f7]/60 transition-colors">
                      <td className="px-6 py-5">
                        <p className="font-serif text-base font-semibold text-[#1b1c1b]">{srv.name}</p>
                        <p className="text-[11px] text-[#cfc5bb] mt-1">{srv.description}</p>
                        <p className="text-[10px] text-[#695c52] mt-0.5 font-bold">⏱ 소요 시간: {srv.duration}</p>
                      </td>
                      <td className="px-6 py-5 text-right font-serif text-base font-semibold text-[#695c52]">
                        ₩{srv.price.toLocaleString()}
                      </td>
                      <td className="px-6 py-5 text-center">
                        <button
                          onClick={() => handleBookingComplete({
                            id: `book-${Date.now()}`,
                            customerName: '임시 고객',
                            customerPhone: '010-XXXX-XXXX',
                            serviceId: srv.id,
                            serviceName: srv.name,
                            price: srv.price,
                            date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
                            time: '14:00',
                            status: 'confirmed'
                          })}
                          className="rounded-full bg-[#695c52]/10 px-4 py-1.5 text-[10px] font-bold text-[#695c52] hover:bg-[#695c52] hover:text-white transition-all cursor-pointer"
                        >
                          간편예약
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* VIP Membership Program */}
        <div className="mt-20 border-t border-[#cfc5bb]/30 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Award className="h-8 w-8 text-[#695c52] mx-auto mb-3" />
            <h2 className="font-serif text-2xl md:text-3xl text-[#1b1c1b]">그레이스K 프리미엄 멤버십 회원권</h2>
            <p className="text-xs md:text-sm text-[#4c463f] mt-2">
              정기적인 방문 관리를 원하시는 고객님들을 위한 경제적이고 차별화된 멤버십 프로그램입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* VIP 30 */}
            <div className="rounded-2xl border border-[#cfc5bb]/20 p-8 bg-white relative overflow-hidden flex flex-col justify-between hover:border-[#695c52] transition-colors">
              <div>
                <span className="text-[10px] font-bold text-[#695c52] uppercase bg-[#f1dfd2] px-2.5 py-1 rounded-full">VIP 30</span>
                <h3 className="font-serif text-2xl font-bold text-[#1b1c1b] mt-4">30만원 선불권</h3>
                <p className="text-xs text-[#4c463f] mt-2 leading-relaxed">
                  꾸준한 컷트 및 헤드스파로 베이직 관리가 늘 필요하신 실속파 고객님께 추천합니다.
                </p>
                <div className="mt-6 border-t border-[#cfc5bb]/20 pt-6 space-y-3 text-xs text-[#4c463f]">
                  <p className="flex items-center gap-2">
                    <Percent className="h-3.5 w-3.5 text-[#695c52]" />
                    <span className="font-bold text-[#1b1c1b]">전 시술 항상 5% 추가 할인</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-[#695c52]" />
                    <span>추가 15,000원 적립 보너스</span>
                  </p>
                </div>
              </div>
              <p className="mt-8 text-xs text-[#cfc5bb] font-semibold text-right">유효기간 6개월</p>
            </div>

            {/* VIP 50 */}
            <div className="rounded-2xl border-2 border-[#695c52] p-8 bg-[#fcf9f7] relative overflow-hidden flex flex-col justify-between shadow-lg">
              <div className="absolute top-0 right-0 bg-[#695c52] text-white text-[9px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                BEST CHOICE
              </div>
              <div>
                <span className="text-[10px] font-bold text-white uppercase bg-[#695c52] px-2.5 py-1 rounded-full">VIP 50</span>
                <h3 className="font-serif text-2xl font-bold text-[#1b1c1b] mt-4">50만원 선불권</h3>
                <p className="text-xs text-[#4c463f] mt-2 leading-relaxed">
                  펌과 클리닉, 염색을 정기적으로 연계하며 최상의 모발 완성도를 유지하고픈 고객님께 강력 추천합니다.
                </p>
                <div className="mt-6 border-t border-[#cfc5bb]/20 pt-6 space-y-3 text-xs text-[#4c463f]">
                  <p className="flex items-center gap-2 text-[#695c52] font-semibold">
                    <Percent className="h-3.5 w-3.5" />
                    <span>전 시술 항상 10% 파격 할인</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-[#695c52]" />
                    <span>추가 50,000원 적립 보너스 (10%)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Award className="h-3.5 w-3.5 text-[#695c52]" />
                    <span>첫날 시그니처 샴푸 1회 서비스 제공</span>
                  </p>
                </div>
              </div>
              <p className="mt-8 text-xs text-[#cfc5bb] font-semibold text-right">유효기간 1년</p>
            </div>

            {/* VIP 100 */}
            <div className="rounded-2xl border border-[#cfc5bb]/20 p-8 bg-white relative overflow-hidden flex flex-col justify-between hover:border-[#695c52] transition-colors">
              <div>
                <span className="text-[10px] font-bold text-[#695c52] uppercase bg-[#f1dfd2] px-2.5 py-1 rounded-full">VIP 100</span>
                <h3 className="font-serif text-2xl font-bold text-[#1b1c1b] mt-4">100만원 선불권</h3>
                <p className="text-xs text-[#4c463f] mt-2 leading-relaxed">
                  가장 최고급 아민 클리닉과 VIP 헤드스파 패키지까지 상시 전담 케어 받고 싶으신 하이엔드 고객님께 헌정합니다.
                </p>
                <div className="mt-6 border-t border-[#cfc5bb]/20 pt-6 space-y-3 text-xs text-[#4c463f]">
                  <p className="flex items-center gap-2 text-[#695c52] font-semibold">
                    <Percent className="h-3.5 w-3.5" />
                    <span>전 시술 항상 15% VIP 할인율 적용</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-[#695c52]" />
                    <span>추가 150,000원 적립 보너스 (15%)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Award className="h-3.5 w-3.5 text-[#695c52]" />
                    <span>8만원 상당 고급 두피 디톡스 홈케어 본품 1종</span>
                  </p>
                </div>
              </div>
              <p className="mt-8 text-xs text-[#cfc5bb] font-semibold text-right">유효기간 1년 6개월</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
