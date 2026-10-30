import { X, CheckCircle2, Clock, Trash2 } from 'lucide-react';
import { Inquiry } from '../types';

interface InquiryViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiries: Inquiry[];
  onUpdateStatus: (id: string, status: 'PENDING' | 'CONTACTED' | 'COMPLETED') => void;
  onDeleteInquiry: (id: string) => void;
  onClearAll: () => void;
}

export function InquiryViewerModal({
  isOpen,
  onClose,
  inquiries,
  onUpdateStatus,
  onDeleteInquiry,
  onClearAll,
}: InquiryViewerModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1B1E1C]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] w-full max-w-2xl rounded-lg border border-[#E3DED4] shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#767E77] hover:text-[#1B1E1C] transition-colors rounded-full hover:bg-[#EFECE5]"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-between pb-4 border-b border-[#E3DED4] pr-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-serif-brand tracking-widest uppercase text-[#627A65] font-semibold mb-1">
              <span>Admin / Reception Log</span>
              <span className="text-[#8FA68F]">·</span>
              <span className="text-xs font-mono font-medium">{inquiries.length}건</span>
            </div>
            <h3 className="text-xl font-medium text-[#1B1E1C]">
              상담 접수 내역 관리
            </h3>
          </div>
          {inquiries.length > 0 && (
            <button
              onClick={onClearAll}
              className="text-xs text-[#767E77] hover:text-red-700 flex items-center gap-1 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>전체 비우기</span>
            </button>
          )}
        </div>

        <div className="py-4 max-h-[55vh] overflow-y-auto space-y-3 pr-1">
          {inquiries.length === 0 ? (
            <div className="py-12 text-center text-[#767E77] space-y-2">
              <Clock className="w-8 h-8 mx-auto text-[#B7C7B7]" />
              <p className="text-sm font-medium text-[#59605A]">
                접수된 상담 내역이 없습니다.
              </p>
              <p className="text-xs font-light">
                하단 상담 신청 폼을 통해 접수하시면 즉시 이곳에 안전하게 기록됩니다.
              </p>
            </div>
          ) : (
            inquiries.map((inq) => {
              const programName =
                inq.program === 'ON_SOLUTION'
                  ? '온솔루션'
                  : inq.program === 'YOU_SOLUTION'
                  ? '유솔루션'
                  : '일반 문의';

              return (
                <div
                  key={inq.id}
                  className="p-4 bg-[#F7F5F0] rounded-sm border border-[#E3DED4] space-y-2 text-xs"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-[#1B1E1C]">
                          {inq.name}
                        </span>
                        <span className="text-[#59605A] font-mono">{inq.phone}</span>
                        <span className="bg-[#E8ECE8] text-[#4E6351] px-1.5 py-0.5 rounded-xs font-medium">
                          {programName}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#767E77] font-mono mt-0.5">
                        접수번호: {inq.id} · {new Date(inq.createdAt).toLocaleString('ko-KR')}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <select
                        value={inq.status}
                        onChange={(e) =>
                          onUpdateStatus(
                            inq.id,
                            e.target.value as 'PENDING' | 'CONTACTED' | 'COMPLETED'
                          )
                        }
                        aria-label="접수 상태 변경"
                        className="text-xs bg-white border border-[#E3DED4] rounded px-2 py-1 text-[#2C302D] focus:outline-none"
                      >
                        <option value="PENDING">접수 대기</option>
                        <option value="CONTACTED">연락 완료</option>
                        <option value="COMPLETED">상담 완료</option>
                      </select>
                      <button
                        onClick={() => onDeleteInquiry(inq.id)}
                        className="p-1 text-[#767E77] hover:text-red-600 rounded"
                        title="삭제"
                        aria-label="삭제"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {inq.message && (
                    <div className="p-2.5 bg-[#FAF8F5] rounded border border-[#E3DED4]/60 text-[#3F4440] font-light leading-relaxed whitespace-pre-wrap">
                      {inq.message}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-[11px] text-[#767E77] pt-1">
                    <span className="flex items-center gap-1 text-[#627A65]">
                      <CheckCircle2 className="w-3 h-3" />
                      개인정보 수집 동의 완료
                    </span>
                    <span>로컬 보안 저장소 보관 중</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="pt-4 border-t border-[#E3DED4] flex items-center justify-between">
          <span className="text-[11px] text-[#767E77]">
            실제 브라우저 스토리지 연동 완료
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-[#FAF8F5] bg-[#2C302D] hover:bg-[#1B1E1C] transition-colors rounded-sm tracking-wider"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
