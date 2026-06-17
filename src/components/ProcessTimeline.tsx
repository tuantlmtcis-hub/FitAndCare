import { processSteps } from '../data';

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white dark:bg-[#020B16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#FFF4CC] dark:bg-[#102B46] text-[#063B63] dark:text-[#FFD43B] text-xs font-semibold px-4 py-2 rounded-full mb-4">
            Cách chúng tôi làm việc
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B63] dark:text-[#F8FAFC] mb-4">
            Quy trình đồng hành của FnC
          </h2>
          <p className="text-[#6B7280] dark:text-[#CBD5E1] max-w-2xl mx-auto">
            Đơn giản, rõ ràng và được thiết kế để tạo thói quen bền vững — không phải ép kết quả nhanh.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#0B74D1] via-[#FFD43B] to-[#0B74D1] dark:from-[#1E90FF] dark:via-[#FFD43B] dark:to-[#1E90FF] z-0" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {processSteps.map((step, i) => (
              <div key={step.num} className={`flex flex-col items-center ${i % 2 === 0 ? '' : 'pt-28'}`}>
                {/* Step number circle */}
                <div className="w-24 h-24 rounded-full bg-[#FFD43B] flex flex-col items-center justify-center shadow-lg mb-4 flex-shrink-0">
                  <span className="text-2xl font-black text-[#063B63]">{step.num}</span>
                  <span className="text-xl">{step.icon}</span>
                </div>

                <div className="text-center">
                  <h3 className="text-sm font-bold text-[#063B63] dark:text-[#F8FAFC] mb-2 leading-tight">{step.title}</h3>
                  <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-0">
          {processSteps.map((step, i) => (
            <div key={step.num} className="flex gap-4">
              {/* Left: number + line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#FFD43B] flex items-center justify-center shadow-md flex-shrink-0 z-10">
                  <span className="text-base font-black text-[#063B63]">{step.num}</span>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-[#E5E7EB] dark:bg-[#1E3A56] my-2" />
                )}
              </div>

              {/* Right: content */}
              <div className={`pb-8 ${i < processSteps.length - 1 ? '' : ''}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{step.icon}</span>
                  <h3 className="font-bold text-[#063B63] dark:text-[#F8FAFC]">{step.title}</h3>
                </div>
                <p className="text-sm text-[#6B7280] dark:text-[#CBD5E1] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-br from-[#EAF6FF] to-[#FFF4CC] dark:from-[#071A2D] dark:to-[#0B2239] rounded-3xl p-8 lg:p-10 text-center border border-[#E5E7EB] dark:border-[#1E3A56]">
          <h3 className="text-2xl font-black text-[#063B63] dark:text-[#F8FAFC] mb-3">
            Sẵn sàng bắt đầu hành trình?
          </h3>
          <p className="text-[#6B7280] dark:text-[#CBD5E1] mb-6">
            Buổi tư vấn đầu tiên miễn phí — chỉ cần kể cho chúng tôi nghe về mục tiêu của bạn.
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-[#FFD43B] hover:bg-[#FFC107] text-[#063B63] font-bold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Đăng ký tư vấn miễn phí
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
