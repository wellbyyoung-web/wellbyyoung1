import { useState } from 'react';
import { PROGRAMS, BRAND_ASSETS } from '../data/brandContent';
import { ProgramInfo } from '../types';
import { ProgramDetailModal } from './ProgramDetailModal';
import { ArrowUpRight, Check, Shield } from 'lucide-react';

interface ProgramsSectionProps {
  onSelectProgramForConsultation: (programId: 'ON_SOLUTION' | 'YOU_SOLUTION') => void;
  smartStoreUrl: string;
}

export function ProgramsSection({
  onSelectProgramForConsultation,
  smartStoreUrl,
}: ProgramsSectionProps) {
  const [selectedProgram, setSelectedProgram] = useState<ProgramInfo | null>(null);

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#F7F5F0] border-b border-[#E3DED4]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif-brand text-xs sm:text-sm tracking-[0.25em] uppercase text-[#627A65] font-semibold block mb-2">
            ON YOU PROGRAM
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#1B1E1C] leading-[1.3] text-balance">
            당신에게 맞는 건강한 일상을 설계합니다.
          </h2>
          <div className="w-12 h-[1.5px] bg-[#627A65] mx-auto my-6" />
          <p className="text-xs sm:text-sm text-[#59605A] leading-relaxed font-light text-balance">
            온유(ON YOU)는 웰바이영의 독자적인 헬스 디자인 솔루션 브랜드입니다.
            현재 내 삶의 속도와 상태에 맞추어 가장 자연스러운 회복 방향을 선택하세요.
          </p>
        </div>

        {/* 2 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="bg-[#FAF8F5] rounded-lg border border-[#E3DED4] p-7 sm:p-9 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-[#B7C7B7] transition-all duration-300"
            >
              <div>
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E3DED4]">
                  <span className="font-serif-brand text-2xl text-[#8FA68F] font-light">
                    {prog.number}
                  </span>
                  <span className="text-xs font-serif-brand tracking-widest uppercase text-[#767E77]">
                    {prog.code}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="mt-5">
                  <div className="inline-block text-[11px] font-medium text-[#4E6351] bg-[#E8ECE8] px-2 py-0.5 rounded-xs mb-2">
                    {prog.badge}
                  </div>
                  <h3 className="text-2xl font-medium text-[#1B1E1C]">
                    {prog.title}
                  </h3>
                  <div className="text-sm font-medium text-[#627A65] mt-1">
                    {prog.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-[#59605A] leading-relaxed font-light">
                  {prog.description}
                </p>

                {/* Specialized Note for YOU PROGRAM: Disease/treatment co-care */}
                {prog.subDescription && (
                  <p className="mt-2.5 text-xs text-[#627A65] leading-relaxed bg-[#E8ECE8]/60 p-3 rounded border border-[#D3DDD3]/80 font-light">
                    {prog.subDescription}
                  </p>
                )}

                {/* Consultation Details: Method, Duration */}
                <div className="mt-6 p-4 bg-[#F7F5F0] rounded border border-[#E3DED4] space-y-2.5">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E3DED4]/60">
                    <span className="text-[#767E77] font-medium">상담 방식</span>
                    <span className="text-[#1B1E1C] font-semibold text-right">
                      {prog.method}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#767E77] font-medium">상담 시간</span>
                    <span className="text-[#1B1E1C] font-semibold text-right">
                      {prog.duration}
                    </span>
                  </div>
                </div>

                {/* Key Components: 주요 상담 내용 */}
                <div className="mt-6 pt-5 border-t border-[#E3DED4]/70">
                  <div className="text-xs font-semibold tracking-wider text-[#767E77] mb-3 font-serif-brand uppercase">
                    주요 상담 내용
                  </div>
                  <ul className="space-y-2">
                    {prog.keyComponents.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#2C302D]">
                        <span className="mt-1 w-3.5 h-3.5 rounded-full bg-[#E8ECE8] text-[#4E6351] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Area */}
              <div className="mt-8 pt-6 border-t border-[#E3DED4] flex items-center gap-3">
                <button
                  onClick={() => setSelectedProgram(prog)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#2C302D] bg-[#EFECE5] hover:bg-[#E3DED4] active:bg-[#D8D4C8] transition-colors rounded-sm tracking-wider"
                >
                  <span>상세 안내</span>
                  <ArrowUpRight className="w-4 h-4 text-[#59605A]" />
                </button>
                <button
                  onClick={() => {
                    onSelectProgramForConsultation(prog.id);
                    const contactEl = document.querySelector('#contact');
                    if (contactEl) {
                      contactEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#FAF8F5] bg-[#2C302D] hover:bg-[#1B1E1C] active:bg-[#111312] transition-colors rounded-sm tracking-wider"
                >
                  <span>상담 신청</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Ambient Aromatherapy & Natural Still Life Banner */}
        <div className="mt-12 rounded-lg border border-[#E3DED4] bg-[#FAF8F5] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-5 h-56 sm:h-64 md:h-full bg-[#EFECE5] relative overflow-hidden">
            <img
              src={BRAND_ASSETS.programImage}
              alt="아로마테라피 및 자연 웰니스"
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (e.currentTarget.src !== window.location.origin + BRAND_ASSETS.programFallback) {
                  e.currentTarget.src = BRAND_ASSETS.programFallback;
                }
              }}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#FAF8F5]/30 hidden md:block" />
          </div>

          <div className="md:col-span-7 p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2 text-xs text-[#627A65] font-serif-brand tracking-wider uppercase font-semibold">
              <Shield className="w-3.5 h-3.5 text-[#8FA68F]" />
              <span>Wellness Ethics & Care Principles</span>
            </div>
            <h4 className="text-lg font-medium text-[#1B1E1C]">
              웰바이영이 약속하는 비의료적 건강 생활 가이드
            </h4>
            <p className="text-xs sm:text-sm text-[#59605A] leading-relaxed font-light">
              웰바이영의 맞춤 건강상담은 의료진의 진료 및 치료를 대체하지 않는 비의료 건강관리 서비스입니다. 질병의 진단, 치료, 처방, 완치 또는 증상 개선을 보장하지 않으며, 영양관리와 자연적 보완요법을 통해 일상에서 실천할 수 있는 건강한 생활습관의 방향을 함께 설계합니다.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#767E77]">
              <span>· 투명한 상담 안내</span>
              <span>· 네이버 스마트스토어 연동</span>
              <span>· 1:1 맞춤형 피드백</span>
            </div>
          </div>
        </div>
      </div>

      {/* Program Detail Modal */}
      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onSelectForConsultation={(programId) => {
          onSelectProgramForConsultation(programId);
          const contactEl = document.querySelector('#contact');
          if (contactEl) {
            contactEl.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        smartStoreUrl={smartStoreUrl}
      />
    </section>
  );
}
