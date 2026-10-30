export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  program: 'ON_SOLUTION' | 'YOU_SOLUTION' | 'GENERAL';
  message: string;
  agreedToPrivacy: boolean;
  createdAt: string;
  status: 'PENDING' | 'CONTACTED' | 'COMPLETED';
}

export interface VitalogyPillar {
  id: string;
  titleEn: string;
  titleKo: string;
  subtitle: string;
  description: string;
  keyPractices: string[];
}

export interface ProgramInfo {
  id: 'ON_SOLUTION' | 'YOU_SOLUTION';
  number: string;
  code: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  targetAudience: string[];
  keyComponents: string[];
  process: string[];
  details: string;
}

export interface ExternalLinks {
  smartStore: string;
  naverBlog: string;
  kakaoTalk: string;
}
