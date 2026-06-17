export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[#EAF6FF] to-[#FFF4CC] dark:from-[#020B16] dark:via-[#071A2D] dark:to-[#020B16] pt-20"
    >
      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#FFD43B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#0B74D1]/10 dark:bg-[#1E90FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFF4CC] dark:bg-[#102B46] text-[#063B63] dark:text-[#FFD43B] text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-[#FFD43B]/40">
              <span className="w-2 h-2 bg-[#FFD43B] rounded-full animate-pulse" />
              Học ăn thông minh – Sống khỏe bền vững
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#063B63] dark:text-[#F8FAFC] leading-tight mb-6">
              Học ăn{' '}
              <span className="relative">
                <span className="relative z-10 text-[#0B74D1] dark:text-[#1E90FF]">thông minh</span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-[#FFD43B]/40 rounded-full -z-0" />
              </span>{' '}
              để khỏe hơn, nhẹ người hơn và{' '}
              <span className="text-[#FFD43B]">duy trì lâu dài</span>
            </h1>

            <p className="text-base sm:text-lg text-[#6B7280] dark:text-[#CBD5E1] mb-8 leading-relaxed max-w-xl">
              Không ăn kiêng cực đoan. Không ép cân. FIT AND CARE giúp bạn hiểu cách ăn, biết cách chọn món,
              điều chỉnh từng bữa và xây dựng thói quen lành mạnh cho cả gia đình.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { num: '500+', label: 'Học viên' },
                { num: '95%', label: 'Hài lòng' },
                { num: '3', label: 'Năm kinh nghiệm' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-[#063B63] dark:text-[#F8FAFC]">{s.num}</div>
                  <div className="text-xs text-[#6B7280] dark:text-[#94A3B8]">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 bg-[#FFD43B] hover:bg-[#FFC107] text-[#063B63] font-bold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Đăng ký tư vấn ngay
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo('#programs')}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#0B74D1] dark:border-[#1E90FF] text-[#0B74D1] dark:text-[#3BA7FF] font-bold px-8 py-4 rounded-2xl hover:bg-[#EAF6FF] dark:hover:bg-[#0B2239] transition-all duration-200"
              >
                Xem chương trình phù hợp
              </button>
            </div>
          </div>

          {/* Right: App Mockup Card */}
          <div className="relative flex justify-center lg:justify-end animate-float">
            <div className="relative w-full max-w-sm">
              {/* Main card */}
              <div className="bg-white dark:bg-[#0B2239] rounded-3xl shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-6 border border-[#E5E7EB] dark:border-[#1E3A56]">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs text-[#6B7280] dark:text-[#94A3B8]">Thứ Ba, 17/06</p>
                    <p className="text-sm font-bold text-[#063B63] dark:text-[#F8FAFC]">Bữa ăn hôm nay</p>
                  </div>
                  <div className="w-10 h-10 bg-[#EAF6FF] dark:bg-[#102B46] rounded-xl flex items-center justify-center">
                    <span className="text-lg">🥗</span>
                  </div>
                </div>

                {/* Meal image placeholder */}
                <div className="w-full h-40 bg-gradient-to-br from-[#EAF6FF] to-[#FFF4CC] dark:from-[#071A2D] dark:to-[#102B46] rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="text-5xl mb-1">🍱</div>
                    <p className="text-xs text-[#6B7280] dark:text-[#94A3B8]">Cơm gạo lứt + ức gà + rau</p>
                  </div>
                </div>

                {/* Coach tip */}
                <div className="bg-[#EAF6FF] dark:bg-[#071A2D] rounded-xl p-3 mb-4 border-l-4 border-[#0B74D1] dark:border-[#1E90FF]">
                  <p className="text-xs font-semibold text-[#063B63] dark:text-[#3BA7FF] mb-1">💡 Gợi ý điều chỉnh bữa</p>
                  <p className="text-xs text-[#1F2937] dark:text-[#CBD5E1]">Thêm 1 quả trứng luộc để tăng protein, giảm cơm xuống còn 1 chén.</p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-[#FFF4CC] dark:bg-[#102B46] rounded-xl p-3">
                    <p className="text-xs text-[#6B7280] dark:text-[#94A3B8]">Vòng eo tuần này</p>
                    <p className="text-lg font-black text-[#063B63] dark:text-[#FFD43B]">72.5 cm</p>
                    <p className="text-xs text-green-600 dark:text-green-400">↓ 0.5cm so với tuần trước</p>
                  </div>
                  <div className="bg-[#EAF6FF] dark:bg-[#071A2D] rounded-xl p-3">
                    <p className="text-xs text-[#6B7280] dark:text-[#94A3B8]">Ngày đồng hành</p>
                    <p className="text-lg font-black text-[#063B63] dark:text-[#1E90FF]">Ngày 18</p>
                    <p className="text-xs text-[#0B74D1] dark:text-[#3BA7FF]">Tiếp tục tốt lắm!</p>
                  </div>
                </div>

                {/* Checklist */}
                <div>
                  <p className="text-xs font-semibold text-[#6B7280] dark:text-[#94A3B8] mb-2">Checklist hôm nay</p>
                  <div className="space-y-1.5">
                    {[
                      { label: 'Ngủ đủ giấc', done: true },
                      { label: 'Uống đủ nước', done: true },
                      { label: 'Vận động nhẹ', done: false },
                      { label: 'Gửi ảnh bữa ăn', done: true },
                    ].map(item => (
                      <div key={item.label} className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.done ? 'bg-[#0B74D1] dark:bg-[#1E90FF]' : 'border-2 border-[#E5E7EB] dark:border-[#1E3A56]'}`}>
                          {item.done && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                        </div>
                        <span className={`text-xs ${item.done ? 'text-[#1F2937] dark:text-[#CBD5E1]' : 'text-[#6B7280] dark:text-[#94A3B8]'}`}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#FFD43B] text-[#063B63] text-xs font-black px-3 py-1.5 rounded-full shadow-lg">
                Coach online 🟢
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
