import { motion } from 'motion/react';
import { Sparkles, Palette, Scissors, Droplet, BookmarkCheck } from 'lucide-react';

interface ServicesPageProps {
  handleOpenBooking: (serviceId?: string) => void;
}

export default function ServicesPage({ handleOpenBooking }: ServicesPageProps) {
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
          <span className="text-xs font-bold tracking-[0.2em] text-[#695c52] uppercase block mb-3">Our Services</span>
          <h1 className="font-serif text-3xl md:text-5xl text-[#1b1c1b] font-normal tracking-tight">
            시그니처 서비스 안내
          </h1>
          <p className="mt-4 text-sm md:text-base text-[#695c52] max-w-xl mx-auto font-medium">
            숙련된 감각과 정교한 기법으로 당신만이 가진 모질 고유의 무브먼트를 찾아드립니다.
          </p>
        </div>
      </div>

      {/* Services Grid Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1: Perm */}
          <div className="rounded-3xl bg-white border border-[#cfc5bb]/20 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1dfd2] text-[#695c52] mb-6">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1b1c1b] mb-3">Perm (웨이브 디자인 펌)</h3>
              <p className="text-sm text-[#4c463f] leading-relaxed mb-6">
                모발 손상을 철저하게 방어하면서, 자연스럽고 우아한 입체 볼륨 웨이브를 완성합니다. 모질의 성질에 따라 디지털 펌, 셋팅 펌, 매직 셋팅 등 가장 알맞은 방식으로 맞춤 시술을 진행합니다.
              </p>
              <ul className="space-y-2 text-xs text-[#695c52] font-semibold">
                <li className="flex items-center gap-2">✓ 시그니처 단백질 앰플 보강 포함</li>
                <li className="flex items-center gap-2">✓ 열손상 방지 히트 프로텍션 케어</li>
                <li className="flex items-center gap-2">✓ 내추럴 레이어드 및 볼륨 매칭</li>
              </ul>
            </div>
            <div className="h-64 overflow-hidden">
              <img
                src="https://postfiles.pstatic.net/MjAyNjA2MjVfODgg/MDAxNzgyMzU5NjM4MzMz.5edVzF6sNRjkU9KXkbz5bn4CREOPpNiAQ54S_EwJf3Eg.dkJZzFZO3e57T4Vknm3zuPzeHyNdxPF_fYnX_SVQkR4g.PNG/Gemini_Generated_Image_tbmty4tbmty4tbmt.png?type=w773"
                alt="Perm Design"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Service 2: Color */}
          <div className="rounded-3xl bg-white border border-[#cfc5bb]/20 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1dfd2] text-[#695c52] mb-6">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1b1c1b] mb-3">Color (퍼스널 안색 염색)</h3>
              <p className="text-sm text-[#4c463f] leading-relaxed mb-6">
                퍼스널 안색 컬러 진단을 기반으로 본인의 고유 피부 톤과 어울리는 맞춤 색감을 찾아드립니다. 얼룩 없이 매끄럽게 흐르는 프리미엄 리플렉션 반사빛으로 얼굴을 더욱 환하게 생기 있게 밝혀 드립니다.
              </p>
              <ul className="space-y-2 text-xs text-[#695c52] font-semibold">
                <li className="flex items-center gap-2">✓ 퍼스널 헤어 컬러 톤 매칭 컨설팅</li>
                <li className="flex items-center gap-2">✓ 무암모니아, 저자극 두피 보호제 도포</li>
                <li className="flex items-center gap-2">✓ 염색 잔여물 디톡스 약산성 샴푸</li>
              </ul>
            </div>
            <div className="h-64 overflow-hidden">
              <img
                src="https://postfiles.pstatic.net/MjAyNjA2MjVfMTM1/MDAxNzgyMzU5NjQxODU3.k8apnOP69T_izCBLJsiKtq9GXst0EFgTqa3-0c7AD1og.0E8a-Gc08SidmCtYPPgKhyzpgq-qoGDUBBZ1IzJeKKMg.PNG/Gemini_Generated_Image_a7wrdea7wrdea7wr.png?type=w773"
                alt="Color Design"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Service 3: Clinic */}
          <div className="rounded-3xl bg-white border border-[#cfc5bb]/20 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1dfd2] text-[#695c52] mb-6">
                <Scissors className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1b1c1b] mb-3">Clinic (모발 뼈대 이너 클리닉)</h3>
              <p className="text-sm text-[#4c463f] leading-relaxed mb-6">
                일시적으로 실리콘막을 덮어 광택만 주는 클리닉이 아닙니다. 모발 심부 깊숙이 손상된 뼈대를 유기 아미노산 입자로 단단하게 교정하고 수분막을 레이어링하여, 밀도 높은 단단한 윤기를 회복시킵니다.
              </p>
              <ul className="space-y-2 text-xs text-[#695c52] font-semibold">
                <li className="flex items-center gap-2">✓ 나노 미스트 스팀 심부 침투 단계</li>
                <li className="flex items-center gap-2">✓ 아미노산 복합 케라틴 모발 재배치</li>
                <li className="flex items-center gap-2">✓ 큐티클 홀딩 천연 유수분 베일 코팅</li>
              </ul>
            </div>
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
                alt="Clinic Treatment"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Service 4: Scalp Care */}
          <div className="rounded-3xl bg-white border border-[#cfc5bb]/20 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1dfd2] text-[#695c52] mb-6">
                <Droplet className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1b1c1b] mb-3">Scalp Care (두피 디톡스 헤드스파)</h3>
              <p className="text-sm text-[#4c463f] leading-relaxed mb-6">
                현대인의 스트레스와 미세먼지, 화학 약품으로 붉고 지친 두피 환경을 회복시키는 힐링 디톡스 코스입니다. 시원한 각질 가공 및 한방 마사지, 아로마 리츄얼 샴푸로 두피 순환과 생장 에너지를 극대화합니다.
              </p>
              <ul className="space-y-2 text-xs text-[#695c52] font-semibold">
                <li className="flex items-center gap-2">✓ 모공 딥 스케일링 스파 케어</li>
                <li className="flex items-center gap-2">✓ 두피 스트레스 해소 아로마 마사지</li>
                <li className="flex items-center gap-2">✓ 모근 장벽 강화 고주파 에센셜 충전</li>
              </ul>
            </div>
            <div className="h-64 overflow-hidden">
              <img
                src="https://postfiles.pstatic.net/MjAyNjA2MjVfMTM3/MDAxNzgyMzY0NTAwNzI2.uRxIbXjsOZFDQQOKvP2J5lM1visVlLSWxE79Uk_K1k4g.YdDF2hJ4XUxlUoU8h1uZ1AUw2t3SMx_sVD9H89ZtGdkg.PNG/333.png?type=w773"
                alt="Scalp Care"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Booking CTA */}
      <div className="bg-[#ede0d3]/50 py-16 border-t border-b border-[#cfc5bb]/20 text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <BookmarkCheck className="h-10 w-10 text-[#695c52] mx-auto animate-bounce" />
          <h2 className="font-serif text-2xl md:text-3xl text-[#1b1c1b] font-normal">
            원장님과의 1:1 디렉션 스타일링 예약
          </h2>
          <p className="text-xs md:text-sm text-[#4c463f] leading-relaxed">
            모든 시술 시간대는 100% 예약 고객 한 분만을 위해 비워둡니다.<br />
            타인의 시선을 신경 쓰지 않고, 나만을 위한 프리미엄 케어를 직접 예약해보세요.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleOpenBooking()}
              className="rounded-full bg-[#695c52] px-8 py-3.5 text-xs font-semibold text-white shadow-xl shadow-[#695c52]/10 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
            >
              실시간 온라인 예약하기
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
