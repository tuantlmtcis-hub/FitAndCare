export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#063B63] via-[#0B74D1] to-[#063B63] dark:from-[#020B16] dark:via-[#071A2D] dark:to-[#020B16]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD43B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1E90FF]/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFD43B] rounded-2xl mb-6 shadow-lg">
          <span className="text-3xl">🌟</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
          Bắt đầu học ăn thông minh cùng{' '}
          <span className="text-[#FFD43B]">FIT AND CARE</span>{' '}
          hôm nay
        </h2>

        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Chọn một cách ăn phù hợp với cơ thể, lịch sống và gia đình của bạn.
          <br />
          Buổi tư vấn đầu tiên hoàn toàn miễn phí.
        </p>

        {/* Contact form */}
        <div className="bg-white dark:bg-[#0B2239] rounded-3xl p-6 sm:p-8 max-w-xl mx-auto shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/20 dark:border-[#1E3A56] mb-8">
          <h3 className="text-lg font-black text-[#063B63] dark:text-[#F8FAFC] mb-5 text-left">
            Đăng ký tư vấn miễn phí
          </h3>

          <div className="space-y-4 mb-5">
            <input
              type="text"
              placeholder="Họ và tên *"
              className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] dark:border-[#1E3A56] bg-[#F5F7FA] dark:bg-[#071A2D] text-[#1F2937] dark:text-[#CBD5E1] text-sm placeholder-[#6B7280] dark:placeholder-[#94A3B8] outline-none focus:border-[#0B74D1] dark:focus:border-[#1E90FF] focus:ring-2 focus:ring-[#0B74D1]/20 dark:focus:ring-[#1E90FF]/20 transition-all"
            />
            <input
              type="tel"
              placeholder="Số điện thoại *"
              className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] dark:border-[#1E3A56] bg-[#F5F7FA] dark:bg-[#071A2D] text-[#1F2937] dark:text-[#CBD5E1] text-sm placeholder-[#6B7280] dark:placeholder-[#94A3B8] outline-none focus:border-[#0B74D1] dark:focus:border-[#1E90FF] focus:ring-2 focus:ring-[#0B74D1]/20 dark:focus:ring-[#1E90FF]/20 transition-all"
            />
            <select className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] dark:border-[#1E3A56] bg-[#F5F7FA] dark:bg-[#071A2D] text-[#1F2937] dark:text-[#CBD5E1] text-sm outline-none focus:border-[#0B74D1] dark:focus:border-[#1E90FF] focus:ring-2 focus:ring-[#0B74D1]/20 dark:focus:ring-[#1E90FF]/20 transition-all">
              <option value="">Mục tiêu của bạn là gì?</option>
              <option>Giảm mỡ, kiểm soát cân nặng</option>
              <option>Ăn lành mạnh hơn</option>
              <option>Chương trình sau sinh</option>
              <option>Dinh dưỡng cho trẻ em</option>
              <option>Cả gia đình cùng thay đổi</option>
              <option>Dân văn phòng bận rộn</option>
            </select>
          </div>

          <button className="w-full bg-[#FFD43B] hover:bg-[#FFC107] text-[#063B63] font-black py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
            Đăng ký tư vấn ngay
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] mt-3 text-center">
            🔒 Thông tin của bạn được bảo mật hoàn toàn. Chúng tôi sẽ liên hệ trong 24h.
          </p>
        </div>

        {/* OR social links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-white/60 text-sm">Hoặc liên hệ trực tiếp:</span>
          <div className="flex gap-3">
            <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-xl border border-white/20 transition-all duration-200">
              <span>📘</span> Facebook
            </a>
            <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-xl border border-white/20 transition-all duration-200">
              <span>📷</span> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-xl border border-white/20 transition-all duration-200">
              <span>💬</span> Zalo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
