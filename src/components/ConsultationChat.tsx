/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { SERVICES } from '../data';
import { MessageSquare, X, Send, Calendar, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ConsultationChatProps {
  onOpenBooking: (serviceId?: string) => void;
}

export default function ConsultationChat({ onOpenBooking }: ConsultationChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init-1',
      sender: 'assistant',
      text: '안녕하세요! 당신의 숨겨진 아름다움을 찾아드리는 그레이스K 프리미엄 1:1 컨설턴트입니다. ✨',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      id: 'msg-init-2',
      sender: 'assistant',
      text: '현재 모발 상태나 스타일링 고민(예: 곱슬머리, 얇은 머리, 얼굴형, 머릿결 손상 등)을 말씀해주시면 원장님 맞춤형 시술 추천과 상세 가이드를 제공해 드릴게요!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const generateResponse = (userText: string): string => {
    const text = userText.toLowerCase();
    
    if (text.includes('예약') || text.includes('날짜') || text.includes('시간') || text.includes('하고 싶')) {
      return `네! 1:1 예약은 오른쪽 아래의 "예약하기" 버튼을 이용하시거나, 바로 하단의 [간편 예약 신청하기] 바로가기 카드를 클릭하시면 희망 날짜와 시간을 선택하여 간편하게 진행하실 수 있습니다. 원장님이 직접 일대일로 집중 케어해 드립니다.`;
    }
    
    if (text.includes('컷') || text.includes('커트') || text.includes('머리 자르')) {
      return `그레이스K의 '디렉터 정밀 컷'은 단순한 컷트를 넘어, 고객님의 두상 곡선, 모량 흐름, 얼굴형 골격을 면밀히 진단하여 슬림하고 입체감 있는 페이스라인을 만들어냅니다. 상담 후 최적의 무드를 찾아드릴게요!`;
    }
    
    if (text.includes('펌') || text.includes('파마') || text.includes('곱슬') || text.includes('볼륨') || text.includes('컬')) {
      return `볼륨이나 컬 고민이 있으시군요! 곱슬기가 심하시다면 '디지털 / 셋팅 멀티 펌' 또는 매직셋팅 솔루션을 추천해 드립니다. 모발 손상을 차단하고 탄력 있는 웨이브와 차분한 정수리 볼륨을 동시에 선사해 드립니다.`;
    }
    
    if (text.includes('염색') || text.includes('컬러') || text.includes('톤') || text.includes('애쉬') || text.includes('새치')) {
      return `얼굴빛을 화사하게 살려주는 '퍼스널 풀 컬러' 프로그램을 추천합니다! 웜톤, 쿨톤 등 피부톤을 정밀 분석하여 퇴색될 때도 지저분하지 않은 깊이감 있는 럭셔리 애쉬브라운, 밀크티 브라운 등 시그니처 배합 컬러를 제안해 드립니다.`;
    }
    
    if (text.includes('상했') || text.includes('복구') || text.includes('머릿결') || text.includes('손상') || text.includes('푸석') || text.includes('클리닉') || text.includes('트리트먼트')) {
      return `건조하고 갈라지는 모발에는 '시그니처 고농축 이너 클리닉'이 최고의 처방입니다. 모발 외면만 실리콘으로 덮는 것이 아닌, 유실된 아미노산과 고밀도 단백질 피브릴을 모발 속 뼈대부터 한 땀 한 땀 채워 묵직하고 찰랑이는 실크 결을 되찾아드립니다.`;
    }
    
    if (text.includes('탈모') || text.includes('두피') || text.includes('가려') || text.includes('비듬') || text.includes('스파') || text.includes('스캘프')) {
      return `두피 열감이나 트러블, 모발 빠짐이 걱정되신다면 '디톡스 헤드 스파 & 두피 케어'가 탁월합니다. 유기농 보태니컬 필링 스파와 수압 순환 테라피를 통해 모공 속 묵은 노폐물을 배출하고 모근을 튼튼히 다져 건강한 모발이 자랄 수 있도록 합니다.`;
    }

    if (text.includes('가격') || text.includes('얼마') || text.includes('비용')) {
      return `저희 샵의 가격대는 컷트 35,000원, 기본 펌 120,000원, 셋팅/디지털 펌 180,000원, 컬러 100,000원, 시그니처 크리닉 및 두피 케어는 80,000원부터 시작됩니다. 기장과 손상도에 따라 디렉터 상담 시 세부 조율이 가능하며 모든 시술에는 기본 샴푸 및 헤어스파 릴렉싱 케어가 포함되어 있어 매우 합리적입니다.`;
    }

    if (text.includes('위치') || text.includes('주소') || text.includes('어디') || text.includes('주차')) {
      return `그레이스K는 서울특별시 강남구 테헤란로 123, 그레이스 빌딩 2층에 위치하고 있습니다. 지하철 강남역 및 역삼역 도보 5분 거리이며 건물 지하 주차장에 무료 주차를 지원해 드립니다.`;
    }

    return `고객님의 소중한 질문 감사합니다. 말씀해 주신 내용을 반영하여, 그레이스K만의 차별화된 1:1 비공개 상담 및 퍼스널 매칭을 제공해 드립니다. 원장 Grace Kim의 섬세한 터치와 최상의 맞춤 처방을 만나보세요! 궁금하신 시술이 있으시면 [예약하기]를 통해 간편하게 첫걸음을 시작해 보실 수 있습니다.`;
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: `msg-user-${Date.now()}`,
      sender: 'user',
      text: inputValue.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    const query = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Simulate natural response latency
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: `msg-asst-${Date.now()}`,
        sender: 'assistant',
        text: generateResponse(query),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end">
      {/* Consultation Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mb-4 flex h-[500px] w-full max-w-[360px] flex-col overflow-hidden rounded-2xl bg-[#fcf9f7] shadow-2xl border border-[#cfc5bb]/40 sm:max-w-[400px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#695c52] px-5 py-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 absolute bottom-0 right-0 border-2 border-[#695c52] animate-pulse"></div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 font-serif text-sm">
                    GK
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold tracking-wide">Grace K 1:1 상담실</h4>
                  <p className="text-[10px] text-[#f1dfd2]">원장 실시간 비대면 맞춤 컨설팅</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fbf8f5]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-[#695c52] text-white rounded-tr-none'
                        : 'bg-white text-[#1b1c1b] border border-[#cfc5bb]/30 rounded-tl-none'
                    }`}
                  >
                    <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                    <span className="mt-1 block text-[9px] text-right opacity-60">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#cfc5bb]/30 rounded-2xl rounded-tl-none px-4 py-3 text-sm flex items-center space-x-1.5 shadow-sm">
                    <span className="block h-1.5 w-1.5 animate-bounce rounded-full bg-[#695c52]" style={{ animationDelay: '0ms' }} />
                    <span className="block h-1.5 w-1.5 animate-bounce rounded-full bg-[#695c52]" style={{ animationDelay: '150ms' }} />
                    <span className="block h-1.5 w-1.5 animate-bounce rounded-full bg-[#695c52]" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 bg-[#f6f3f1] border-t border-[#cfc5bb]/20 flex gap-2 overflow-x-auto scrollbar-none">
              <button
                onClick={() => {
                  setInputValue('펌/곱슬머리 솔루션 추천해주세요');
                }}
                className="flex-shrink-0 text-[11px] bg-white border border-[#cfc5bb] px-2.5 py-1 rounded-full text-[#695c52] hover:bg-[#695c52]/5 transition-colors"
              >
                💁‍♀️ 펌 추천
              </button>
              <button
                onClick={() => {
                  setInputValue('머릿결 손상 홈케어와 살롱 클리닉 문의');
                }}
                className="flex-shrink-0 text-[11px] bg-white border border-[#cfc5bb] px-2.5 py-1 rounded-full text-[#695c52] hover:bg-[#695c52]/5 transition-colors"
              >
                ✨ 헤어 클리닉
              </button>
              <button
                onClick={() => {
                  setInputValue('퍼스널 컬러 가격과 특징 알려주세요');
                }}
                className="flex-shrink-0 text-[11px] bg-white border border-[#cfc5bb] px-2.5 py-1 rounded-full text-[#695c52] hover:bg-[#695c52]/5 transition-colors"
              >
                🎨 퍼스널 컬러
              </button>
            </div>

            {/* Shortcut Card inside Chat */}
            <div className="px-4 py-2.5 bg-[#ede0d3] flex items-center justify-between border-t border-[#cfc5bb]/30">
              <div className="flex items-center space-x-2 text-xs text-[#50453b]">
                <Sparkles className="h-4 w-4 text-[#695c52]" />
                <span className="font-semibold">원장님 예약 슬롯 선점하기</span>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="bg-[#695c52] text-white text-[10px] font-bold px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity flex items-center space-x-1"
              >
                <Calendar className="h-3 w-3" />
                <span>예약하기</span>
              </button>
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSend} className="flex border-t border-[#cfc5bb]/30 bg-white p-3">
              <input
                type="text"
                placeholder="상담하실 질문을 입력해 주세요..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 rounded-lg border border-[#cfc5bb]/60 bg-white px-3.5 py-2 text-sm text-[#1b1c1b] focus:border-[#695c52] focus:outline-none"
              />
              <button
                type="submit"
                className="ml-2 rounded-lg bg-[#695c52] p-2.5 text-white hover:bg-[#695c52]/90 active:scale-95 transition-all"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <div className="flex flex-col items-center space-y-3">
        {/* Floating Tooltip */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-[#30302f] text-[#fcf9f7] px-4 py-2 rounded-xl text-xs font-medium shadow-xl whitespace-nowrap mb-1 flex items-center gap-1.5"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#ede0d3]" />
              <span>1:1 비대면 실시간 고민 컨설팅</span>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#695c52] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </button>
      </div>
    </div>
  );
}
