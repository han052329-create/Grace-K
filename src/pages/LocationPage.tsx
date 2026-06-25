import { motion } from 'motion/react';
import { MapPin, Clock as ClockIcon, Phone, Car, Navigation, ShieldCheck } from 'lucide-react';

export default function LocationPage() {
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
          <span className="text-xs font-bold tracking-[0.2em] text-[#695c52] uppercase block mb-3">Location & Directions</span>
          <h1 className="font-serif text-3xl md:text-5xl text-[#1b1c1b] font-normal tracking-tight">
            오시는 길 안내
          </h1>
          <p className="mt-4 text-sm md:text-base text-[#695c52] max-w-xl mx-auto font-medium">
            홍제천 인근의 아늑한 주택가 초입에서 여유롭고 편안한 힐링 서비스를 마주하세요.
          </p>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact and Directions Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-3">
              <h2 className="font-serif text-2xl md:text-3xl text-[#695c52]">그레이스K 위치 및 상담 채널</h2>
              <p className="text-xs md:text-sm text-[#4c463f] leading-relaxed font-light">
                방문 전에 미리 실시간 간편 예약 또는 원장 직통 카톡 채널을 통해 시술 문의를 남겨주시면 한층 더 신속한 입장이 가능합니다.
              </p>
            </div>

            {/* Core Info Blocks */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1dfd2] text-[#695c52]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wider text-[#695c52] uppercase mb-1">Address</p>
                  <p className="text-sm text-[#1b1c1b] font-semibold leading-relaxed">
                    서울 서대문구 거북골로 214-4 <br />
                    1층 그레이스K (무료 전용 주차)
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
                  <p className="text-sm text-[#1b1c1b] leading-relaxed font-light">
                    월요일 - 토요일 : <span className="font-semibold">10:00 - 20:00</span> <br />
                    일요일 : <span className="text-[#695c52] font-semibold">정기 휴무</span> (100% 프라이빗 예약제)
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
                  <p className="text-sm text-[#1b1c1b] leading-relaxed font-light">
                    전화번호: <span className="font-semibold text-[#1b1c1b]">02-302-3256</span> <br />
                    카카오톡 채널: <span className="font-semibold text-[#695c52]">@grace_k_salon</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Guides */}
            <div className="border-t border-[#cfc5bb]/30 pt-8 space-y-6">
              <h3 className="font-serif text-lg font-bold text-[#1b1c1b]">교통 수단별 가이드</h3>

              <div className="space-y-4">
                {/* Car */}
                <div className="bg-white rounded-xl p-5 border border-[#cfc5bb]/20 flex gap-4">
                  <Car className="h-5 w-5 text-[#695c52] shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <p className="font-bold text-[#1b1c1b]">자가용 이용 시 (주차 상시 가능)</p>
                    <p className="text-[#4c463f] leading-relaxed font-light">
                      네비게이션에 <strong>'그레이스K'</strong> 또는 <strong>'서대문구 거북골로 214-4'</strong> 검색 후 매장 바로 앞으로 직행하십시오. 1층 입구 전면에 무료 전용 주차장이 상시 확보되어 있어 주차가 매우 간편합니다.
                    </p>
                  </div>
                </div>

                {/* Public Transport */}
                <div className="bg-white rounded-xl p-5 border border-[#cfc5bb]/20 flex gap-4">
                  <Navigation className="h-5 w-5 text-[#695c52] shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <p className="font-bold text-[#1b1c1b]">대중교통 (지하철 & 버스) 이용 시</p>
                    <p className="text-[#4c463f] leading-relaxed font-light">
                      명지대 신사거리 또는 남가좌동 인근 버스 노선 이용 시 편리합니다. 인근 하차 후 홍제천 방면 도보 3분 거리에 위치하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://map.naver.com"
              target="_blank"
              rel="noreferrer"
              className="block w-full rounded-xl bg-[#695c52] py-4 text-center text-sm font-semibold text-white shadow-lg shadow-[#695c52]/10 hover:opacity-90 transition-opacity"
            >
              네이버 지도에서 정확한 경로 검색하기
            </a>
          </div>

          {/* Right Column: Live Interactive Google Map with elegant floating overlays */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#cfc5bb]/30 bg-[#f6f3f1] relative h-[550px] shadow-sm flex flex-col justify-between p-6 group">
            {/* Live Google Map embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.972367205225!2d126.90525377631552!3d37.57926837203524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c99010d49e2f1%3A0x5de5c5bef44998b9!2z6re466CI7J207Iqk7LyA7J20!5e0!3m2!1sko!2skr!4v1782367086916!5m2!1sko!2skr"
              className="absolute inset-0 w-full h-full border-0 filter grayscale-[5%] contrast-[102%] group-hover:grayscale-0 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="그레이스K 구글 지도"
            ></iframe>

            {/* Elegant Map Header card */}
            <div className="z-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#cfc5bb]/20 shadow-md max-w-sm self-start">
              <div className="flex gap-2.5 items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-[#695c52] tracking-widest uppercase">그레이스K 주차장 완비</span>
              </div>
              <p className="text-xs text-[#1b1c1b] font-bold mt-1.5">매장 앞 1층 지상 전용 주차 상시 가능</p>
            </div>

            {/* Empty center element for spacing */}
            <div className="pointer-events-none" />

            {/* Bottom Info Bar */}
            <div className="z-10 bg-[#30302f]/95 backdrop-blur-md p-4 rounded-2xl text-white flex items-center gap-3 max-w-md self-center shadow-lg border border-white/10">
              <ShieldCheck className="h-5 w-5 text-[#ede0d3] shrink-0" />
              <p className="text-[10px] md:text-xs leading-relaxed text-[#fcf9f7]/90 font-light">
                저희 살롱은 완전 예약 제도로 겹치지 않게 동선을 설계하여, 주차 자리가 붐비거나 기다리시는 불편이 전혀 없습니다. 안심하고 차를 가지고 오셔도 됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
