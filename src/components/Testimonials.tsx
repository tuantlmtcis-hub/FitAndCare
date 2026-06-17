import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="results" className="py-20 lg:py-28 bg-[#F5F7FA] dark:bg-[#071A2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#EAF6FF] dark:bg-[#0B2239] text-[#0B74D1] dark:text-[#3BA7FF] text-xs font-semibold px-4 py-2 rounded-full mb-4 border border-[#0B74D1]/20 dark:border-[#1E90FF]/20">
            Kết quả thực tế
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B63] dark:text-[#F8FAFC] mb-4">
            Câu chuyện từ học viên FnC
          </h2>
          <p className="text-[#6B7280] dark:text-[#CBD5E1] max-w-2xl mx-auto">
            Không phải số cân. Mà là sự thay đổi thực sự trong cuộc sống.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group flex flex-col bg-white dark:bg-[#0B2239] rounded-3xl p-6 border border-[#E5E7EB] dark:border-[#1E3A56] hover:border-[#0B74D1] dark:hover:border-[#1E90FF] hover:shadow-xl dark:hover:shadow-[0_8px_32px_rgba(30,144,255,0.1)] transition-all duration-300 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(t.stars).fill(0).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[#FFD43B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Result badge */}
              <div className="bg-[#EAF6FF] dark:bg-[#102B46] rounded-xl px-3 py-2 mb-4">
                <p className="text-xs font-bold text-[#0B74D1] dark:text-[#3BA7FF]">🎯 {t.result}</p>
              </div>

              {/* Quote */}
              <p className="text-sm text-[#1F2937] dark:text-[#CBD5E1] leading-relaxed italic flex-1 mb-5">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB] dark:border-[#1E3A56]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFD43B] to-[#0B74D1] dark:to-[#1E90FF] flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#063B63] dark:text-[#F8FAFC]">{t.name}</p>
                  <p className="text-xs text-[#6B7280] dark:text-[#94A3B8]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-12 bg-white dark:bg-[#0B2239] rounded-2xl p-6 border border-[#E5E7EB] dark:border-[#1E3A56] flex flex-wrap justify-center gap-8 text-center">
          {[
            { val: '500+', label: 'học viên đã đồng hành' },
            { val: '4.9⭐', label: 'đánh giá trung bình' },
            { val: '95%', label: 'hài lòng sau 1 tháng' },
            { val: '80%', label: 'tiếp tục gói tiếp theo' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-2xl font-black text-[#063B63] dark:text-[#F8FAFC]">{s.val}</div>
              <div className="text-xs text-[#6B7280] dark:text-[#94A3B8]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
