import { motion } from 'motion/react';
import { SERVICES as INITIAL_SERVICES } from '../data';
import { Review, Booking } from '../types';
import {
  Scissors,
  Palette,
  Sparkles,
  Droplet,
  MapPin,
  Clock as ClockIcon,
  Phone,
  Star,
  Plus
} from 'lucide-react';

interface HomePageProps {
  reviews: Review[];
  handleOpenBooking: (serviceId?: string) => void;
  handleBookingComplete: (newBooking: Booking) => void;
  setIsReviewOpen: (open: boolean) => void;
}

export default function HomePage({
  reviews,
  handleOpenBooking,
  handleBookingComplete,
  setIsReviewOpen,
}: HomePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://postfiles.pstatic.net/MjAyNjA2MjVfNTEg/MDAxNzgyMzYwOTUyMTYy.XDnO9lE2G7MYz8EXoEzxczhwQetOUe52-_yvVIAZ5KMg._YCjXljsrNBkv_I12ieyktUT0uAzczNgyxZHdUpo7UAg.PNG/Gemini_Generated_Image_6254i36254i36254.png?type=w773"
            alt="GraceK Premium Salon"
            className="w-full h-full object-cover object-center brightness-95 contrast-105 saturate-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fcf9f7] via-[#fcf9f7]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl text-left"
          >
            <h1 className="font-serif text-4xl md:text-[56px] font-normal leading-[1.15] text-[#695c52] tracking-tight">
              당신만을 위한 1:1 <br />
              <span className="font-semibold text-[#4c463f]">프리미엄 헤어 살롱,</span> <br />
              그레이스K
            </h1>
            <p className="mt-6 text-base md:text-lg font-semibold text-[#332e2a] leading-relaxed max-w-lg">
              전문적인 상담과 섬세한 감각으로 당신의 <br />
              숨겨진 아름다움을 찾아드립니다. <br />
              고요한 공간에서 오직 나만을 위한 품격있는 <br />
              릴랙싱 케어를 경험하세요.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => handleOpenBooking()}
                className="rounded-full bg-[#695c52] px-10 py-4 text-sm font-semibold text-white shadow-xl shadow-[#695c52]/10 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
              >
                예약하기
              </button>
              <a
                href="#/services"
                className="rounded-full border border-[#695c52] px-10 py-4 text-sm font-semibold text-[#695c52] text-center hover:bg-[#695c52]/5 transition-all"
              >
                서비스 안내
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section id="about" className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl shadow-[#695c52]/5 border border-[#cfc5bb]/20">
              <img
                src="https://postfiles.pstatic.net/MjAyNjA2MjRfNjkg/MDAxNzgyMjk5OTk4OTg5.5hPmamNlphOHNngoPe-aqPMyweG-G_DTjshXNoSZHvYg.53hyUL0Qhus-mOnhIWCh-8LGE0U8Usdx30yXLzr1g2Qg.PNG/Gemini_Generated_Image_gjxzmcgjxzmcgjxz.png?type=w773"
                alt="Director & Founder Grace Kim"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-[#695c52] uppercase block">Our Philosophy</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1b1c1b] leading-tight">
              Quiet Luxury, <br />
              Personalized Mastery
            </h2>
            <div className="text-[#4c463f] text-sm md:text-base leading-relaxed space-y-4">
              <p>
                그레이스K는 북적이고 시끄러운 대형 헤어살롱의 소란스러움에서 완전히 벗어나, 오직 단 한 분의 고객에게만 깊이
                집중하는 프리미엄 1:1 멤버십 살롱입니다. 우리는 유행에만 치우쳐 개성을 감추기보다, 개개인의 타고난 모질과 얼굴형,
                내재된 독특한 분위기를 어루만지는 '본연의 진정한 아름다움'을 최우선으로 여깁니다.
              </p>
              <p>
                귀를 기울이며 당신의 헤어 고민과 지친 마음을 어루만져 드리는 평생의 뷰티 파트너로서, 최상의 케미컬 제품과 다년간의
                노하우를 담은 고도의 가위질로 진정성 있는 일상의 럭셔리를 전합니다. 그레이스K가 전하는 고요하고 깊이 있는 휴식을 직접
                만나보세요.
              </p>
            </div>

            {/* Profile Sign-off Card */}
            <div className="pt-8 border-t border-[#cfc5bb]/30 flex items-center space-x-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f1dfd2]">
                <Scissors className="h-6 w-6 text-[#695c52]" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-widest text-[#695c52] uppercase">Director & Founder</p>
                <p className="font-serif text-lg font-bold text-[#1b1c1b] mt-0.5">Grace Kim</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-[#f6f3f1]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl text-[#695c52]"
            >
              Curated Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#4c463f] text-sm md:text-base mt-3"
            >
              차별화된 프리미엄 제품과 오직 당신만을 위해 맞춘 독자적 테크닉의 아름다운 무브먼트
            </motion.p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Perm Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-6 shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1dfd2] text-[#695c52] mb-5">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1b1c1b] mb-2">Perm</h3>
                <p className="text-xs text-[#4c463f] leading-relaxed mb-4">
                  손상을 최소화하면서 탄력 있고 우아한 입체 볼륨 웨이브를 완성합니다.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl h-44 mt-auto">
                <img
                  src="https://postfiles.pstatic.net/MjAyNjA2MjVfODgg/MDAxNzgyMzU5NjM4MzMz.5edVzF6sNRjkU9KXkbz5bn4CREOPpNiAQ54S_EwJf3Eg.dkJZzFZO3e57T4Vknm3zuPzeHyNdxPF_fYnX_SVQkR4g.PNG/Gemini_Generated_Image_tbmty4tbmty4tbmt.png?type=w773"
                  alt="Perm Hair Design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Color Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1dfd2] text-[#695c52] mb-5">
                  <Palette className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1b1c1b] mb-2">Color</h3>
                <p className="text-xs text-[#4c463f] leading-relaxed mb-4">
                  퍼스널 안색 컬러 진단을 통해 피부 결점은 가리고 안색을 선명하게 밝혀 드립니다.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl h-44 mt-auto">
                <img
                  src="https://postfiles.pstatic.net/MjAyNjA2MjVfMTM1/MDAxNzgyMzU5NjQxODU3.k8apnOP69T_izCBLJsiKtq9GXst0EFgTqa3-0c7AD1og.0E8a-Gc08SidmCtYPPgKhyzpgq-qoGDUBBZ1IzJeKKMg.PNG/Gemini_Generated_Image_a7wrdea7wrdea7wr.png?type=w773"
                  alt="Color Design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Clinic Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl bg-white p-6 shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1dfd2] text-[#695c52] mb-5">
                  <Scissors className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1b1c1b] mb-2">Clinic</h3>
                <p className="text-xs text-[#4c463f] leading-relaxed mb-4">
                  모발 깊은 기질 뼈대부터 아미노산을 복합 유기 흡수시켜 차오르는 윤기를 완성합니다.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl h-44 mt-auto">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
                  alt="Clinic Treatment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Scalp Care Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl bg-white p-6 shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1dfd2] text-[#695c52] mb-5">
                  <Droplet className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1b1c1b] mb-2">Scalp Care</h3>
                <p className="text-xs text-[#4c463f] leading-relaxed mb-4">
                  두피 트러블 인자를 디톡스하여 뿌리 본연의 모발 생장 활력을 깨워 드립니다.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl h-44 mt-auto">
                <img
                  src="https://postfiles.pstatic.net/MjAyNjA2MjVfMTk0/MDAxNzgyMzU5NjQ1NTg1.STqX2Rlg0CCq1Ecr2txkwJC9a1_Xe13ERqYLmP9fLXEg.zOTzM23E30gCVAe4Qve_OAkLMxvSOiYcguDMo6ynngcg.PNG/Gemini_Generated_Image_5cu3s5cu3s5cu3s5.png?type=w773"
                  alt="Scalp Care"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Price Guide Section */}
      <section id="price" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#695c52]">Price Guide</h2>
            <p className="text-sm md:text-base text-[#4c463f] leading-relaxed">
              그레이스K는 거품 없는 투명하고 정직한 시술 가격 정책을 지향합니다. 모량 상태와 기장에 따라 세부 조율이 이루어질
              수 있습니다.
            </p>

            <div className="rounded-2xl bg-[#ede0d3] p-6 border border-[#cfc5bb]/30">
              <h4 className="text-xs font-bold tracking-widest text-[#50453b] uppercase mb-2">Notice</h4>
              <p className="text-xs text-[#50453b] leading-relaxed">
                모든 시술 정액 단가에는 원장님의 시그니처 샴푸, 헤어팩 스파 릴랙싱 터치 및 베이직 건식 드라이 케어가 풍성하게
                포함되어 있습니다.
              </p>
            </div>
          </motion.div>

          {/* Right Block: Price Table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 overflow-hidden rounded-2xl border border-[#cfc5bb]/40 bg-white shadow-xl shadow-[#695c52]/5"
          >
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
                        <p className="text-[11px] text-[#cfc5bb] mt-0.5">{srv.duration} 소요</p>
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
          </motion.div>
        </div>
      </section>

      {/* Client Stories Section */}
      <section id="reviews" className="py-24 bg-[#695c52] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#f1dfd2] uppercase block">Client Stories</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white">실제 방문 고객 생생 리뷰</h2>
            </div>
            <button
              onClick={() => setIsReviewOpen(true)}
              className="mt-6 md:mt-0 rounded-full bg-[#f1dfd2] px-6 py-3 text-xs font-bold text-[#50453b] hover:opacity-90 active:scale-95 transition-all flex items-center gap-1.5 shadow-lg shadow-black/10 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>방문 후기 작성하기</span>
            </button>
          </div>

          {/* Reviews Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/5 p-8 border border-white/10 backdrop-blur-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex text-[#f1dfd2]">
                     {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4" fill="currentColor" stroke="none" />
                    ))}
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-1">
                      <p className="text-sm md:text-base italic leading-relaxed text-[#fcf9f7]/90 font-light">
                        "{rev.content}"
                      </p>
                    </div>
                    {rev.imageUrl && (
                      <div className="w-28 h-28 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-white/5">
                        <img
                          src={rev.imageUrl}
                          alt="Review haircut style"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1dfd2]/20 font-serif text-xs text-[#f1dfd2]">
                    GK
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{rev.author}</p>
                    <p className="text-[10px] text-[#f1dfd2] mt-0.5">{rev.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-10"
          >
            <div>
              <span className="text-xs font-bold tracking-widest text-[#695c52] uppercase block mb-2">Location</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1b1c1b]">오시는 길</h2>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1dfd2] text-[#695c52]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wider text-[#695c52] uppercase mb-1">Address</p>
                  <p className="text-sm text-[#1b1c1b] leading-relaxed">
                    서울 서대문구 거북골로 214-4 <br />
                    1층 그레이스K (무료 주차)
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1dfd2] text-[#695c52]">
                  <ClockIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wider text-[#695c52] uppercase mb-1">Hours</p>
                  <p className="text-sm text-[#1b1c1b] leading-relaxed">
                    월요일 - 토요일 : 10:00 - 20:00 <br />
                    일요일 : 정기 휴무 (100% 예약제 운영)
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1dfd2] text-[#695c52]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wider text-[#695c52] uppercase mb-1">Contact</p>
                  <p className="text-sm text-[#1b1c1b] leading-relaxed">
                    02-302-3256 <br />
                    카카오톡 채널 : @grace_k_salon
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://map.naver.com"
              target="_blank"
              rel="noreferrer"
              className="block w-full rounded-xl bg-[#695c52] py-4 text-center text-sm font-semibold text-white shadow-lg shadow-[#695c52]/10 hover:opacity-90 transition-opacity"
            >
              네이버 지도에서 길찾기
            </a>
          </motion.div>

          {/* Right: Actual Google Embed Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 rounded-3xl overflow-hidden border border-[#cfc5bb]/30 bg-white h-[450px] shadow-sm relative group"
          >
            {/* Google Map Frame */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.972367205225!2d126.90525377631552!3d37.57926837203524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c99010d49e2f1%3A0x5de5c5bef44998b9!2z6re466CI7J207Iqk7LyA7J20!5e0!3m2!1sko!2skr!4v1782367086916!5m2!1sko!2skr"
              className="w-full h-full border-0 filter grayscale-[5%] contrast-[102%] group-hover:grayscale-0 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="그레이스K 구글 지도"
            ></iframe>

            {/* Floating Info Tag */}
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#cfc5bb]/20 shadow-sm pointer-events-none">
              <p className="text-[10px] font-bold text-[#695c52] tracking-wider uppercase mb-0.5">그레이스K 위치</p>
              <p className="text-xs font-bold text-[#1b1c1b]">무료 전용 주차장 완비</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
