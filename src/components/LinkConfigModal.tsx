import { useState } from 'react';
import { X, Check, Link2, RotateCcw, Mail, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import { ExternalLinks } from '../types';
import { DEFAULT_LINKS } from '../data/brandContent';

interface LinkConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLinks: ExternalLinks;
  onSaveLinks: (links: ExternalLinks) => void;
}

export function LinkConfigModal({
  isOpen,
  onClose,
  currentLinks,
  onSaveLinks,
}: LinkConfigModalProps) {
  const [links, setLinks] = useState<ExternalLinks>(currentLinks);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [emailNotice, setEmailNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveLinks(links);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const handleReset = () => {
    setLinks(DEFAULT_LINKS);
  };

  const handleTriggerActivation = async () => {
    setIsResending(true);
    setEmailNotice(null);
    try {
      const response = await fetch('https://formsubmit.co/ajax/wellbyyoung@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: '[웰바이영] FormSubmit 이메일 연동 인증 요청 (최신 유효 링크)',
          _captcha: 'false',
          _template: 'table',
          안내: '웰바이영 공식 이메일 연동 인증 메일입니다. 메일 본문의 [Activate Form] 링크를 1회 클릭해 주세요.',
          발송일시: new Date().toLocaleString('ko-KR'),
        }),
      });

      const resJson = await response.json().catch(() => ({}));
      if (resJson?.message && (resJson.message.includes('Activation') || resJson.message.includes('activate'))) {
        setEmailNotice('새 인증 메일을 전송했습니다! Gmail(wellbyyoung@gmail.com)에서 방금 도착한 [가장 최신 메일]의 [Activate Form] 링크를 1회 클릭해 주세요.');
      } else if (resJson?.success === 'true' || resJson?.success === true) {
        setEmailNotice('이미 인증이 정상 완료된 상태입니다! 이제 고객 상담글이 공식 메일함으로 바로 수신됩니다.');
      } else {
        setEmailNotice('인증 요청이 전송되었습니다. Gmail 수신함의 가장 최신 메일을 확인해 주세요.');
      }
    } catch {
      setEmailNotice('일시적인 네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1B1E1C]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] w-full max-w-lg rounded-lg border border-[#E3DED4] shadow-2xl p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#767E77] hover:text-[#1B1E1C] transition-colors rounded-full hover:bg-[#EFECE5]"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-serif-brand tracking-widest uppercase text-[#627A65] font-semibold mb-1">
          <Link2 className="w-4 h-4 text-[#8FA68F]" />
          <span>Channel & Notification Settings</span>
        </div>
        <h3 className="text-xl font-medium text-[#1B1E1C]">
          외부 채널 및 알림 주소 관리
        </h3>
        <p className="mt-1 text-xs text-[#59605A] leading-relaxed font-light">
          스마트스토어, 공식 블로그, 카카오톡 채널 주소를 설정하고 공식 이메일 연동 상태를 관리합니다.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#2C302D] mb-1">
              네이버 스마트스토어 URL
            </label>
            <input
              type="url"
              value={links.smartStore}
              onChange={(e) => setLinks({ ...links, smartStore: e.target.value })}
              placeholder="https://smartstore.naver.com/..."
              className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F7F5F0] border border-[#E3DED4] rounded-sm focus:border-[#4E6351] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#2C302D] mb-1">
              네이버 공식 블로그 URL
            </label>
            <input
              type="url"
              value={links.naverBlog}
              onChange={(e) => setLinks({ ...links, naverBlog: e.target.value })}
              placeholder="https://blog.naver.com/..."
              className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F7F5F0] border border-[#E3DED4] rounded-sm focus:border-[#4E6351] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#2C302D] mb-1">
              카카오톡 채널 상담 URL
            </label>
            <input
              type="url"
              value={links.kakaoTalk}
              onChange={(e) => setLinks({ ...links, kakaoTalk: e.target.value })}
              placeholder="https://pf.kakao.com/..."
              className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F7F5F0] border border-[#E3DED4] rounded-sm focus:border-[#4E6351] focus:outline-none"
              required
            />
          </div>

          {/* FormSubmit Official Email Status & Re-activation helper */}
          <div className="pt-3 border-t border-[#E3DED4]">
            <div className="p-3.5 bg-[#F7F5F0] rounded-sm border border-[#E3DED4] space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#2C302D]">
                  <Mail className="w-3.5 h-3.5 text-[#627A65]" />
                  <span>공식 수신 이메일: wellbyyoung@gmail.com</span>
                </div>
              </div>
              <p className="text-[11px] text-[#59605A] font-light leading-relaxed">
                FormSubmit 인증 메일에서 <strong className="text-amber-800">"Confirmation token not found"</strong> 에러가 발생한 경우, 과거 메일의 링크가 만료되었기 때문입니다. 아래 버튼을 눌러 최신 메일을 받은 후 링크를 1회 클릭하시면 정상 활성화됩니다.
              </p>

              <button
                type="button"
                onClick={handleTriggerActivation}
                disabled={isResending}
                className="w-full py-2 px-3 bg-[#E8ECE8] hover:bg-[#D3DDD3] text-[#2C302D] rounded-xs text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
              >
                {isResending ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>인증 메일 요청 중...</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 text-[#4E6351]" />
                    <span>새 인증 메일 발송하기 (최신 링크 받기)</span>
                  </>
                )}
              </button>

              {emailNotice && (
                <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] rounded leading-relaxed">
                  {emailNotice}
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-[#E3DED4] flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-[#767E77] hover:text-[#2C302D] flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>기본값 복원</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-[#59605A] hover:bg-[#EFECE5] rounded-sm"
              >
                취소
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-medium text-[#FAF8F5] bg-[#2C302D] hover:bg-[#1B1E1C] rounded-sm flex items-center gap-1.5"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>저장 완료</span>
                  </>
                ) : (
                  <span>주소 저장하기</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
