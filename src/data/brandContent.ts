import { ProgramInfo, VitalogyPillar, ExternalLinks } from '../types';
import heroImg from '../assets/images/hero_wellness_morning_1793329839201.jpg';
import vitalogyImg from '../assets/images/vitalogy_lifestyle_1793329839524.jpg';
import programImg from '../assets/images/program_aromatherapy_1793329839630.jpg';
import founderImg from '../assets/images/founder_park_hyeyoung.png';

export const BRAND_ASSETS = {
  heroImage: heroImg || '/images/hero_wellness_morning.jpg',
  vitalogyImage: vitalogyImg || '/images/vitalogy_lifestyle.jpg',
  programImage: programImg || '/images/program_aromatherapy.jpg',
  founderImage: founderImg || '/images/founder_park_hyeyoung.png',
  // Static public fallbacks
  heroFallback: '/images/hero_wellness_morning.jpg',
  vitalogyFallback: '/images/vitalogy_lifestyle.jpg',
  programFallback: '/images/program_aromatherapy.jpg',
  founderFallback: '/images/founder_park_hyeyoung.png',
};

export const DEFAULT_LINKS: ExternalLinks = {
  smartStore: 'https://smartstore.naver.com/wellbyyoung',
  naverBlog: 'https://blog.naver.com/wellby0',
  kakaoTalk: 'http://pf.kakao.com/_eJIxnX',
};

export const VITALOGY_PILLARS: VitalogyPillar[] = [
  {
    id: 'nutrition',
    titleEn: 'Nutrition',
    titleKo: '영양과 식단',
    subtitle: '몸의 상태를 고려한 온전한 영양 섭취',
    description: '극단적인 제한이나 무분별한 유행 식단 대신, 개인의 소화 상태와 일상 에너지 소모 패턴에 맞춘 지속 가능한 식사 균형을 설계합니다.',
    keyPractices: ['개인별 영양 불균형 요소 점검', '자연 식재료 중심의 균형 잡힌 식단 안내', '실생활에서 지속 가능한 식사 리듬 수립'],
  },
  {
    id: 'movement',
    titleEn: 'Movement',
    titleKo: '신체활동과 운동',
    subtitle: '일상을 깨우는 기분 좋은 신체 활력',
    description: '과도한 피로를 남기지 않고 순환을 돕는 가벼운 스트레칭과 생활 속 움직임을 통해 신체 에너지를 건강하게 순환시킵니다.',
    keyPractices: ['일상 속 무리 없는 자연스러운 활동량 증진', '경직된 신체를 풀어주는 이완 스트레칭', '자세 습관 인지와 바른 호흡'],
  },
  {
    id: 'sleep',
    titleEn: 'Sleep',
    titleKo: '수면과 회복',
    subtitle: '다음 날을 채우는 깊은 밤의 쉼',
    description: '단순히 잠자리에 머무는 시간이 아닌, 생체 리듬을 회복하고 신체가 스스로 치유될 수 있는 질 높은 수면 환경과 루틴을 만듭니다.',
    keyPractices: ['취침 전 신경계 이완을 돕는 나이트 루틴', '수면의 질을 저해하는 생활 패턴 점검', '햇빛과 리듬을 활용한 수면 주기 안정화'],
  },
  {
    id: 'gut-health',
    titleEn: 'Gut Health',
    titleKo: '장 건강',
    subtitle: '체내 순환과 생명력의 핵심',
    description: '장은 영양의 흡수뿐 아니라 면역과 활력의 근간입니다. 개인의 식습관 및 장내 환경을 다각도로 이해하여 편안한 소화와 흡수를 돕습니다.',
    keyPractices: ['소화 부담을 줄이는 식생활 습관 제안', '장내 미생물 균형을 고려한 식재료 조합', '규칙적인 배변 활동을 돕는 수분 및 섬유질 관리'],
  },
  {
    id: 'stress-balance',
    titleEn: 'Stress Balance',
    titleKo: '스트레스와 생활 균형',
    subtitle: '마음과 몸이 만나는 평온한 일상',
    description: '심신의 긴장은 신체 전반의 균형에 큰 영향을 미칩니다. 아로마테라피, 호흡, 나만의 이완 시간을 통해 긴장을 완화하고 일상의 평정심을 찾습니다.',
    keyPractices: ['긴장 완화를 위한 자연 향기(아로마) 활용', '호흡과 감각 집중을 통한 심신 이완', '과열된 일상에 쉼표를 주는 라이프 밸런스 설계'],
  },
];

export const PROGRAMS: ProgramInfo[] = [
  {
    id: 'ON_SOLUTION',
    number: '01',
    code: 'ON PROGRAM',
    title: '온 프로그램',
    subtitle: '일상 속 건강을 위한 맞춤 건강상담',
    badge: '온라인 · 오프라인 대면',
    method: '온라인 또는 오프라인 대면 상담',
    duration: '약 30~40분',
    description:
      '개인의 신체 상태와 생활습관을 살펴보고, 영양관리와 보완요법을 포함하여 일상에서 실천할 수 있는 건강관리 방법을 안내합니다.',
    targetAudience: [
      '일상에서 지속적인 피로감을 느끼며 일상 건강관리 실천이 필요한 분',
      '식습관 및 수면·운동·스트레스 등 생활습관을 점검받고 싶은 분',
      '온라인 비대면 또는 오프라인 대면으로 맞춤형 건강상담을 원하는 분',
    ],
    keyComponents: [
      '신체 상태 및 생활습관 점검',
      '식습관 및 영양관리 방향 안내',
      '수면·운동·스트레스 관리',
      '아로마테라피, 셀프 지압 등 비의료적 보완요법 안내',
      '개인별 일상 건강관리 방법 제안',
    ],
    process: [
      '상담 신청 및 사전 일정 조율 (온라인 / 오프라인)',
      '신체 상태 및 식습관·생활습관 사전 점검',
      '1:1 맞춤 상담 진행',
      '개인별 일상 건강관리 방법 제안 및 피드백',
    ],
    details:
      '온 프로그램은 개인의 신체 상태와 생활습관을 면밀히 살펴보고, 영양관리와 보완요법을 포함하여 일상에서 부담 없이 실천할 수 있는 지속 가능한 건강관리 방법을 안내하는 맞춤형 상담 프로그램입니다.',
  },
  {
    id: 'YOU_SOLUTION',
    number: '02',
    code: 'YOU PROGRAM',
    title: '유 프로그램',
    subtitle: '1:1 심층 맞춤 건강관리 상담',
    badge: '오프라인 대면 전용',
    method: '오프라인 1:1 대면 상담 전용',
    duration: '약 2시간',
    description:
      '개인의 건강 상태와 생활습관을 심층적으로 살펴보고, 영양관리와 보완요법을 통합하여 개인별 건강관리 방향을 설계합니다.',
    subDescription:
      '건강상의 불편함을 경험하는 분뿐 아니라, 기존 질환으로 의료진의 치료를 받고 있는 분들에게도 치료와 병행할 수 있는 일상생활 관리 방법을 안내합니다.',
    targetAudience: [
      '신체 상태와 생활습관에 대한 심층 점검과 맞춤 설계가 필요한 분',
      '기존 질환으로 의료진의 치료를 받고 있으며, 치료와 병행할 수 있는 일상생활 관리가 필요한 분',
      '전문가와의 집중적인 1:1 대면 상담을 통해 체계적인 건강관리 계획을 수립하고 싶은 분',
    ],
    keyComponents: [
      '신체 상태 및 생활습관 심층 점검',
      '식습관 분석 및 개인별 영양관리 방향 설계',
      '운동·수면·스트레스 관리 방법 설계',
      '아로마테라피, 셀프 지압 등 비의료적 보완요법 안내',
      '기존 질환자의 일상생활 건강관리 방법 안내',
      '개인별 맞춤 건강관리 계획 수립',
    ],
    process: [
      '사전 예약 접수 및 1:1 대면 일정 확정 (오프라인 전용)',
      '신체 상태 및 생활습관 정밀 분석 자료 검토',
      '1:1 심층 대면 상담 및 보완요법 안내',
      '개인별 맞춤 건강관리 계획 수립 및 일상 실천 가이드',
    ],
    details:
      '유 프로그램은 개인의 건강 상태와 생활습관을 심층적으로 살펴보고, 영양관리와 보완요법을 통합하여 개인별 건강관리 방향을 설계하는 집중 대면 상담입니다.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: '상담 신청',
    description: '홈페이지 상담 신청 폼 또는 카카오톡 채널을 통해 편안하게 신청을 접수합니다.',
  },
  {
    step: '02',
    title: '사전 정보 확인',
    description: '현재의 식생활, 수면 패턴, 일상 활동량 및 주요 관심사를 사전에 점검합니다.',
  },
  {
    step: '03',
    title: '개인별 상태 분석 및 설계',
    description: '수집된 라이프스타일 정보를 기반으로 개인별 신체 균형과 필요 요소를 종합 분석합니다.',
  },
  {
    step: '04',
    title: '맞춤형 관리 방향 안내',
    description: '온유(ON YOU) 솔루션을 바탕으로 일상에서 즉시 실천할 수 있는 구체적 생활 가이드를 제안합니다.',
  },
];
