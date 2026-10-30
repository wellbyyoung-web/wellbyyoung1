import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandIntroSection } from './components/BrandIntroSection';
import { VitalogySection } from './components/VitalogySection';
import { ExpertSection } from './components/ExpertSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';
import { LinkConfigModal } from './components/LinkConfigModal';
import { InquiryViewerModal } from './components/InquiryViewerModal';
import { ExternalLinks, Inquiry } from './types';
import { DEFAULT_LINKS } from './data/brandContent';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

export default function App() {
  // External links state persisted in localStorage
  const [externalLinks, setExternalLinks] = useState<ExternalLinks>(() => {
    try {
      const saved = localStorage.getItem('wellbyyoung_links');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Seamlessly migrate to official blog if previous or empty
        if (!parsed.naverBlog || parsed.naverBlog.includes('wellbyyoung') || parsed.naverBlog.includes('wandokong_lab')) {
          parsed.naverBlog = 'https://blog.naver.com/wellby0';
          localStorage.setItem('wellbyyoung_links', JSON.stringify(parsed));
        }
        return parsed;
      }
    } catch {
      // fallback
    }
    return DEFAULT_LINKS;
  });

  // Inquiries state persisted in localStorage
  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    try {
      const saved = localStorage.getItem('wellbyyoung_inquiries');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [];
  });

  // Selected program for pre-selecting in consultation form
  const [selectedProgramId, setSelectedProgramId] = useState<'ON_SOLUTION' | 'YOU_SOLUTION' | null>(null);

  // Modals state
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isLinkConfigModalOpen, setIsLinkConfigModalOpen] = useState(false);
  const [isInquiryViewerOpen, setIsInquiryViewerOpen] = useState(false);

  // Sync external links to localStorage
  const handleSaveLinks = (newLinks: ExternalLinks) => {
    setExternalLinks(newLinks);
    try {
      localStorage.setItem('wellbyyoung_links', JSON.stringify(newLinks));
    } catch {
      // safe fallback
    }
  };

  // Add inquiry and persist
  const handleAddInquiry = (newInquiry: Inquiry) => {
    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    try {
      localStorage.setItem('wellbyyoung_inquiries', JSON.stringify(updated));
    } catch {
      // safe fallback
    }
  };

  // Update inquiry status
  const handleUpdateInquiryStatus = (id: string, status: 'PENDING' | 'CONTACTED' | 'COMPLETED') => {
    const updated = inquiries.map((inq) =>
      inq.id === id ? { ...inq, status } : inq
    );
    setInquiries(updated);
    try {
      localStorage.setItem('wellbyyoung_inquiries', JSON.stringify(updated));
    } catch {
      // safe fallback
    }
  };

  // Delete inquiry
  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    setInquiries(updated);
    try {
      localStorage.setItem('wellbyyoung_inquiries', JSON.stringify(updated));
    } catch {
      // safe fallback
    }
  };

  // Clear all inquiries
  const handleClearAllInquiries = () => {
    setInquiries([]);
    try {
      localStorage.removeItem('wellbyyoung_inquiries');
    } catch {
      // safe fallback
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242724] selection:bg-[#5B6B5C]/20 selection:text-[#1F2720]">
      {/* Strict 3-zone Top Bar Navigation */}
      <Navbar
        onOpenInquiryList={() => setIsInquiryViewerOpen(true)}
        onOpenLinkSettings={() => setIsLinkConfigModalOpen(true)}
      />

      <main className="flex-1">
        {/* SECTION 01. 메인 화면 */}
        <HeroSection />

        {/* SECTION 02. 브랜드 소개 */}
        <BrandIntroSection />

        {/* SECTION 03. 바이탈로지 철학 */}
        <VitalogySection />

        {/* SECTION 04. 전문가 소개 */}
        <ExpertSection />

        {/* SECTION 05. 프로그램 소개 (ON YOU: 온솔루션, 유솔루션) */}
        <ProgramsSection
          onSelectProgramForConsultation={(programId) => setSelectedProgramId(programId)}
          smartStoreUrl={externalLinks.smartStore}
        />

        {/* SECTION 06. 상담 진행 과정 */}
        <ProcessSection />

        {/* SECTION 07. 상담 및 문의 */}
        <ContactSection
          onAddInquiry={handleAddInquiry}
          selectedProgramId={selectedProgramId}
          onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
          onOpenLinkSettings={() => setIsLinkConfigModalOpen(true)}
          onOpenInquiryList={() => setIsInquiryViewerOpen(true)}
          externalLinks={externalLinks}
          inquiryCount={inquiries.length}
        />
      </main>

      {/* SECTION 08. 푸터 */}
      <Footer
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
        onOpenInquiryList={() => setIsInquiryViewerOpen(true)}
        onOpenLinkSettings={() => setIsLinkConfigModalOpen(true)}
      />

      {/* Floating Quiet Quick Action Button (Kakao Talk) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5 items-end">
        <a
          href={externalLinks.kakaoTalk}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#FAF8F5] hover:bg-white text-[#2C302D] px-3.5 py-2 rounded-full border border-[#D3DDD3] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-md transition-all text-xs font-medium group"
          title="카카오톡 1:1 상담 연결"
          aria-label="카카오톡 1:1 상담 연결"
        >
          <div className="w-5 h-5 rounded-full bg-[#FFE812] flex items-center justify-center text-[#371D1E] shrink-0 font-bold text-[10px]">
            talk
          </div>
          <span className="hidden sm:inline">카톡 빠른 상담</span>
          <ArrowUpRight className="w-3 h-3 text-[#767E77] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Modals */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      <LinkConfigModal
        isOpen={isLinkConfigModalOpen}
        onClose={() => setIsLinkConfigModalOpen(false)}
        currentLinks={externalLinks}
        onSaveLinks={handleSaveLinks}
      />

      <InquiryViewerModal
        isOpen={isInquiryViewerOpen}
        onClose={() => setIsInquiryViewerOpen(false)}
        inquiries={inquiries}
        onUpdateStatus={handleUpdateInquiryStatus}
        onDeleteInquiry={handleDeleteInquiry}
        onClearAll={handleClearAllInquiries}
      />
    </div>
  );
}
