import { useState } from 'react';
import { faqs } from '../data';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white dark:bg-[#020B16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#FFF4CC] dark:bg-[#102B46] text-[#063B63] dark:text-[#FFD43B] text-xs font-semibold px-4 py-2 rounded-full mb-4">
            Giải đáp thắc mắc
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B63] dark:text-[#F8FAFC] mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-[#6B7280] dark:text-[#CBD5E1]">
            Nếu câu hỏi của bạn chưa có ở đây, hãy nhắn tin trực tiếp cho chúng tôi.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? 'border-[#0B74D1] dark:border-[#1E90FF] shadow-md dark:shadow-[0_4px_20px_rgba(30,144,255,0.15)]'
                  : 'border-[#E5E7EB] dark:border-[#1E3A56] hover:border-[#0B74D1]/50 dark:hover:border-[#1E90FF]/50'
              } bg-white dark:bg-[#0B2239]`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#1F2937] dark:text-[#F8FAFC] text-sm sm:text-base pr-2">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                  open === i
                    ? 'bg-[#0B74D1] dark:bg-[#1E90FF] rotate-45'
                    : 'bg-[#EAF6FF] dark:bg-[#102B46]'
                }`}>
                  <svg className={`w-4 h-4 ${open === i ? 'text-white' : 'text-[#FFD43B]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 border-t border-[#E5E7EB] dark:border-[#1E3A56] pt-4">
                  <p className="text-sm text-[#6B7280] dark:text-[#CBD5E1] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[#6B7280] dark:text-[#94A3B8] text-sm mb-4">
            Còn thắc mắc khác? Chúng tôi luôn sẵn sàng giải đáp.
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 border-2 border-[#0B74D1] dark:border-[#1E90FF] text-[#0B74D1] dark:text-[#3BA7FF] font-semibold px-6 py-3 rounded-xl hover:bg-[#EAF6FF] dark:hover:bg-[#0B2239] transition-all duration-200"
          >
            Nhắn tin cho FnC
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
