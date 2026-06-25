import { motion } from 'motion/react';
import { Scissors, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function AboutPage() {
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
          <span className="text-xs font-bold tracking-[0.2em] text-[#695c52] uppercase block mb-3">About Salon</span>
          <h1 className="font-serif text-3xl md:text-5xl text-[#1b1c1b] font-normal tracking-tight">
            그레이스K 스토리
          </h1>
          <p className="mt-4 text-sm md:text-base text-[#695c52] max-w-xl mx-auto font-medium">
            북적이는 도심 속, 오직 단 한 사람만을 위해 준비된 고요하고 특별한 치유의 공간
          </p>
        </div>
      </div>

      {/* Main Philosophy Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl shadow-[#695c52]/5 border border-[#cfc5bb]/20">
              <img
                src="https://postfiles.pstatic.net/MjAyNjA2MjRfNjkg/MDAxNzgyMjk5OTk4OTg5.5hPmamNlphOHNngoPe-aqPMyweG-G_DTjshXNoSZHvYg.53hyUL0Qhus-mOnhIWCh-8LGE0U8Usdx30yXLzr1g2Qg.PNG/Gemini_Generated_Image_gjxzmcgjxzmcgjxz.png?type=w773"
                alt="Director & Founder Grace Kim"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] text-[#695c52] uppercase block">Our Philosophy</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1b1c1b] leading-tight">
              Quiet Luxury, <br />
              Personalized Mastery
            </h2>
            <div className="text-[#4c463f] text-sm md:text-base leading-relaxed space-y-4 font-light">
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
          </div>
        </div>
      </div>

      {/* 3 Promises Section */}
      <div className="bg-[#f6f3f1] py-20 border-t border-b border-[#cfc5bb]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#695c52]">그레이스K의 3대 프리미엄 약속</h2>
            <p className="text-[#4c463f] text-xs md:text-sm mt-3">
              우리는 타협하지 않는 품격과 진정성을 위해 다음 세 가지 철칙을 엄격하게 준수합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Promise 1 */}
            <div className="rounded-2xl bg-white p-8 border border-[#cfc5bb]/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1dfd2] text-[#695c52] mb-6">
                <Scissors className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1b1c1b] mb-3">1:1 전담 원장 책임제</h3>
              <p className="text-xs text-[#4c463f] leading-relaxed">
                스태프의 무분별한 교체 없이, 최초 상담부터 시술, 샴푸, 마무리 드라이까지 대표 원장 그레이스 킴이 전 과정을 밀착 관리 및 책임 시술합니다.
              </p>
            </div>

            {/* Promise 2 */}
            <div className="rounded-2xl bg-white p-8 border border-[#cfc5bb]/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1dfd2] text-[#695c52] mb-6">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1b1c1b] mb-3">최상급 친환경 오가닉 레시피</h3>
              <p className="text-xs text-[#4c463f] leading-relaxed">
                민감한 두피와 모발 데미지 방지를 위해 암모니아를 배제하고 자연 유래 성분이 담긴 프리미엄 수입 친환경 제품만을 선별하여 시술합니다.
              </p>
            </div>

            {/* Promise 3 */}
            <div className="rounded-2xl bg-white p-8 border border-[#cfc5bb]/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1dfd2] text-[#695c52] mb-6">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1b1c1b] mb-3 font-medium">완전한 프라이빗 멤버십 타임</h3>
              <p className="text-xs text-[#4c463f] leading-relaxed">
                동시간대 여러 고객을 겹치게 예약 받지 않습니다. 고요하게 흐르는 에센셜 아로마 오일 향과 음악 속에 오직 당신만을 위한 최고의 휴식을 선사합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
