import { solutions } from '../data';

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 lg:py-28 bg-white dark:bg-[#020B16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block bg-[#EAF6FF] dark:bg-[#0B2239] text-[#0B74D1] dark:text-[#3BA7FF] text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-[#0B74D1]/20 dark:border-[#1E90FF]/20">
              Cách FnC hoạt động
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B63] dark:text-[#F8FAFC] leading-tight mb-6">
              FIT AND CARE đồng hành để bạn ăn thông minh trong{' '}
              <span className="text-[#0B74D1] dark:text-[#1E90FF]">đời sống thật</span>
            </h2>

            <p className="text-[#6B7280] dark:text-[#CBD5E1] mb-8 leading-relaxed">
              Không phải thực đơn áp đặt. Không phải quy tắc cứng nhắc. FnC làm việc cùng bạn trong từng bữa ăn thực tế — từ bữa cơm nhà đến bữa nhậu văn phòng.
            </p>

            <div className="space-y-4">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#EAF6FF] dark:bg-[#0B2239] rounded-xl flex items-center justify-center flex-shrink-0 border border-[#0B74D1]/20 dark:border-[#1E90FF]/20">
                    <span className="text-lg">{s.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#1F2937] dark:text-[#CBD5E1] font-medium leading-snug">{s.text}</p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-[#0B74D1] dark:bg-[#1E90FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 inline-flex items-center gap-2 bg-[#FFD43B] hover:bg-[#FFC107] text-[#063B63] font-bold px-7 py-3.5 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Bắt đầu cùng FnC
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            {/* Main visual card */}
            <div className="bg-gradient-to-br from-[#EAF6FF] to-[#FFF4CC] dark:from-[#071A2D] dark:to-[#0B2239] rounded-3xl p-8 border border-[#E5E7EB] dark:border-[#1E3A56]">
              <div className="text-center mb-6">
                <div className="text-7xl mb-4">🥑</div>
                <h3 className="text-lg font-bold text-[#063B63] dark:text-[#F8FAFC]">Ăn đa dạng, cân bằng</h3>
                <p className="text-sm text-[#6B7280] dark:text-[#94A3B8]">Không cấm, không ép — chỉ học cách cân bằng</p>
              </div>

              {/* Food groups */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { emoji: '🍚', label: 'Tinh bột', color: 'bg-[#FFF4CC] dark:bg-[#102B46]' },
                  { emoji: '🥩', label: 'Đạm', color: 'bg-[#EAF6FF] dark:bg-[#071A2D]' },
                  { emoji: '🥦', label: 'Rau củ', color: 'bg-[#F0FDF4] dark:bg-[#071A2D]' },
                  { emoji: '🥑', label: 'Chất béo tốt', color: 'bg-[#FFF4CC] dark:bg-[#102B46]' },
                  { emoji: '🍊', label: 'Trái cây', color: 'bg-[#EAF6FF] dark:bg-[#071A2D]' },
                  { emoji: '💧', label: 'Nước', color: 'bg-[#EAF6FF] dark:bg-[#071A2D]' },
                ].map(f => (
                  <div key={f.label} className={`${f.color} rounded-xl p-3 text-center border border-[#E5E7EB]/50 dark:border-[#1E3A56]/50`}>
                    <div className="text-2xl mb-1">{f.emoji}</div>
                    <p className="text-[10px] font-medium text-[#1F2937] dark:text-[#CBD5E1]">{f.label}</p>
                  </div>
                ))}
              </div>

              {/* Progress bars */}
              <div className="space-y-2">
                {[
                  { label: 'Cân bằng dinh dưỡng', val: 88, color: 'bg-[#0B74D1] dark:bg-[#1E90FF]' },
                  { label: 'Duy trì thói quen', val: 72, color: 'bg-[#FFD43B]' },
                ].map(b => (
                  <div key={b.label}>
                    <div className="flex justify-between text-xs text-[#6B7280] dark:text-[#94A3B8] mb-1">
                      <span>{b.label}</span>
                      <span className="font-semibold">{b.val}%</span>
                    </div>
                    <div className="h-2 bg-[#E5E7EB] dark:bg-[#1E3A56] rounded-full overflow-hidden">
                      <div className={`h-full ${b.color} rounded-full transition-all duration-1000`} style={{ width: `${b.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-white dark:bg-[#0B2239] rounded-2xl shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] p-3 border border-[#E5E7EB] dark:border-[#1E3A56]">
              <p className="text-xs font-semibold text-[#063B63] dark:text-[#FFD43B]">📸 Gửi ảnh bữa ăn</p>
              <p className="text-xs text-[#6B7280] dark:text-[#94A3B8]">Coach phản hồi trong ngày</p>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#FFD43B] rounded-2xl shadow-lg p-3">
              <p className="text-xs font-bold text-[#063B63]">⭐ 4.9/5 hài lòng</p>
              <p className="text-xs text-[#063B63]/70">từ 500+ học viên</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
