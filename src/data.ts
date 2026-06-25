/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, Review } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'cut-premium',
    category: 'Cut',
    name: '디렉터 정밀 컷 (Director Cut)',
    description: '고객 개개인의 두상과 모질, 얼굴형 및 라이프스타일을 철저히 분석하여 본연의 아름다움을 극대화하는 정밀 디자인 컷입니다.',
    price: 35000,
    duration: '1시간',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'perm-regular',
    category: 'Perm',
    name: '클래식 베이직 펌 (Regular Perm)',
    description: '모발 손상을 최소화하면서 자연스럽고 볼륨감 넘치는 클래식 무브먼트를 완성하는 웨이브 펌입니다.',
    price: 120000,
    duration: '2시간',
    imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'perm-digital',
    category: 'Perm',
    name: '디지털 / 셋팅 멀티 펌 (Digital & Setting Perm)',
    description: '열기구를 이용해 윤기 있고 탄력 넘치는 S컬/C컬을 형성하며 오랫동안 우아한 스타일을 유지할 수 있는 프리미엄 셋팅 펌입니다.',
    price: 180000,
    duration: '3시간',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'color-full',
    category: 'Color',
    name: '퍼스널 풀 컬러 (Full Color)',
    description: '피부톤 진단을 바탕으로 최적의 색감 레이어를 조율하여 한층 더 고급스럽고 맑은 안색을 연출하는 시그니처 전체 염색입니다.',
    price: 100000,
    duration: '2시간',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430f23?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'clinic-deep',
    category: 'Clinic',
    name: '시그니처 고농축 이너 클리닉 (Signature Treatment)',
    description: '모발 심부 깊숙이 단백질과 유수분 밸런스를 빈틈없이 가득 채워 힘없이 쳐진 모발 구조를 다시 견고하게 탄탄하게 빌드업하는 클리닉입니다.',
    price: 80000,
    duration: '1시간 30분',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'scalp-care',
    category: 'Scalp',
    name: '디톡스 헤드 스파 & 두피 케어 (Scalp Care)',
    description: '각질과 노폐물을 딥클렌징하고, 두피 장벽을 강화하는 진정 에센스 케어와 시원한 마사지로 활력 있는 모발 생장 환경을 회복합니다.',
    price: 80000,
    duration: '1시간',
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800',
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    rating: 5,
    content: '처음부터 끝까지 1:1로 진행되어서 정말 대접받는 기분이었어요. 상담도 꼼꼼하시고 제 분위기에 딱 맞는 펌 스타일을 찾아주셔서 대만족입니다.',
    author: '이** 고객님',
    date: '2026-06-20',
    imageUrl: 'https://postfiles.pstatic.net/MjAyNjA2MjVfNzcg/MDAxNzgyMzY0NDk0NjU5.K3qY_hFtxdWqoVlgxc5CR-T8rddcrzf-TCCVj8zTHx4g.TK0qP6vRypsGRMsH-FSJn4NJLIyJne_yqgnrBVkCN0kg.PNG/1111.png?type=w773',
  },
  {
    id: 'rev-2',
    rating: 5,
    content: '염색 맛집이에요! 애쉬 계열로 하면 금방 빠지는데, 여기서 하고 나서는 유지력도 좋고 색감이 정말 고급스러워요. 인테리어도 예뻐서 힐링하고 갑니다.',
    author: '박** 고객님',
    date: '2026-06-18',
    imageUrl: 'https://postfiles.pstatic.net/MjAyNjA2MjVfMiAg/MDAxNzgyMzY0NDk2ODI2.9gpZ_MVCNoUmjWMFz5HI_egnktFLsUZipTf4YhaTOuEg.MntdZRxgSdF2d-d0KOSFste3pi14XDfzyWgA_7U9KEcg.PNG/222.png?type=w773',
  },
  {
    id: 'rev-3',
    rating: 5,
    content: '두피 케어 받았는데 세상 시원하네요. 원장님 손길이 정말 섬세하세요. 일대일이라 다른 사람 눈치 안 보고 편하게 쉴 수 있어서 좋습니다.',
    author: '김** 고객님',
    date: '2026-06-15',
    imageUrl: 'https://postfiles.pstatic.net/MjAyNjA2MjVfMTM3/MDAxNzgyMzY0NTAwNzI2.uRxIbXjsOZFDQQOKvP2J5lM1visVlLSWxE79Uk_K1k4g.YdDF2hJ4XUxlUoU8h1uZ1AUw2t3SMx_sVD9H89ZtGdkg.PNG/333.png?type=w773',
  }
];

export const TIME_SLOTS = [
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00'
];
