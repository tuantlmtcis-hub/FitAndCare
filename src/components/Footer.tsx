const quickLinks = ['Trang chủ', 'Chương trình', 'Quy trình', 'Câu chuyện FnC', 'Kết quả', 'Liên hệ'];
const programs = ['FnC 1 tháng', 'FnC 2 tháng', 'FnC 3 tháng', 'Mẹ sau sinh', 'Trẻ em & Gia đình', 'Dân văn phòng'];

export default function Footer() {
  const scrollTo = (id: string) => {
    const map: Record<string, string> = {
      'Trang chủ': '#hero', 'Chương trình': '#programs', 'Quy trình': '#process',
      'Câu chuyện FnC': '#founder', 'Kết quả': '#results', 'Liên hệ': '#contact',
    };
    const el = document.querySelector(map[id] || '#hero');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020B16] dark:bg-[#020B16] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="FIT AND CARE"
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="flex flex-col leading-none">
                <span className="text-sm font-black text-white">FIT AND CARE</span>
                <span className="text-xs italic text-[#94A3B8]">học ăn thông minh</span>
              </div>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
              Đồng hành cùng bạn xây dựng thói quen ăn uống thông minh, lành mạnh và bền vững.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: '📘', label: 'Facebook' },
                { icon: '📷', label: 'Instagram' },
                { icon: '🎵', label: 'TikTok' },
                { icon: '💬', label: 'Zalo' },
              ].map(s => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 bg-[#071A2D] hover:bg-[#0B2239] border border-[#1E3A56] hover:border-[#1E90FF] rounded-xl flex items-center justify-center text-sm transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Điều hướng</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-sm text-[#94A3B8] hover:text-[#FFD43B] transition-colors duration-200 text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Chương trình</h4>
            <ul className="space-y-2">
              {programs.map(p => (
                <li key={p}>
                  <a href="#programs" className="text-sm text-[#94A3B8] hover:text-[#FFD43B] transition-colors duration-200">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Liên hệ</h4>
            <div className="space-y-3">
              <a href="tel:0900000000" className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#FFD43B] transition-colors">
                <span>📞</span> 0900 000 000
              </a>
              <a href="mailto:hello@fitandcare.vn" className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#FFD43B] transition-colors">
                <span>📧</span> hello@fitandcare.vn
              </a>
              <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                <span>📍</span> Hà Nội & TP. Hồ Chí Minh
              </div>
            </div>

            <div className="mt-5 bg-[#071A2D] rounded-xl p-3 border border-[#1E3A56]">
              <p className="text-xs text-[#94A3B8] mb-2">Giờ hỗ trợ</p>
              <p className="text-xs font-semibold text-white">Thứ 2 – Thứ 7</p>
              <p className="text-xs text-[#FFD43B]">8:00 – 21:00</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#17324D] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94A3B8]">
            © 2025 FIT AND CARE. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-[#94A3B8] hover:text-[#FFD43B] transition-colors">Chính sách bảo mật</a>
            <a href="#" className="text-xs text-[#94A3B8] hover:text-[#FFD43B] transition-colors">Điều khoản sử dụng</a>
          </div>
          <p className="text-xs text-[#94A3B8]">
            Made with <span className="text-[#FFD43B]">♥</span> for wellness
          </p>
        </div>
      </div>
    </footer>
  );
}
