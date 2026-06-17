import { whyReasons } from '../data';

const stats = [
  { num: '500+', label: 'Học viên đồng hành' },
  { num: '95%', label: 'Hài lòng sau chương trình' },
  { num: '3+', label: 'Năm kinh nghiệm coaching' },
  { num: '6', label: 'Chương trình chuyên biệt' },
];

export default function WhyChooseFnC() {
  return (
    <section id="why" className="py-20 lg:py-28 bg-[#F5F7FA] dark:bg-[#071A2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#EAF6FF] dark:bg-[#0B2239] text-[#0B74D1] dark:text-[#3BA7FF] text-xs font-semibold px-4 py-2 rounded-full mb-4 border border-[#0B74D1]/20 dark:border-[#1E90FF]/20">
            Sự khác biệt của FnC
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B63] dark:text-[#F8FAFC] mb-4">
            Vì sao chọn{' '}
            <span className="text-[#0B74D1] dark:text-[#1E90FF]">FIT AND CARE</span>?
          </h2>
          <p className="text-[#6B7280] dark:text-[#CBD5E1] max-w-2xl mx-auto">
            FnC không phải một app thực đơn. FnC là người coach đồng hành thực sự — với phương pháp khoa học và cách tiếp cận phù hợp với cuộc sống thật.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Why cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {whyReasons.map((r, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 rounded-2xl p-5 border transition-all duration-200 hover:-translate-y-1 ${
                  r.icon === '✅'
                    ? 'bg-white dark:bg-[#0B2239] border-[#0B74D1]/30 dark:border-[#1E90FF]/30 hover:border-[#0B74D1] dark:hover:border-[#1E90FF]'
                    : 'bg-white dark:bg-[#0B2239] border-[#E5E7EB] dark:border-[#1E3A56]'
                }`}
              >
                <span className={`text-xl flex-shrink-0 ${r.icon === '✅' ? '' : 'grayscale'}`}>{r.icon}</span>
                <p className="text-sm font-medium text-[#1F2937] dark:text-[#CBD5E1] leading-snug">{r.text}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-br from-[#063B63] to-[#0B74D1] dark:from-[#0B2239] dark:to-[#102B46] rounded-3xl p-8 border border-[#0B74D1] dark:border-[#1E3A56]">
              <h3 className="text-xl font-black text-white mb-6">FnC bằng con số</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(s => (
                  <div key={s.label} className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-black text-[#FFD43B] mb-1">{s.num}</div>
                    <div className="text-xs text-white/80">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-[#0B2239] rounded-2xl p-5 border border-[#E5E7EB] dark:border-[#1E3A56]">
              <p className="text-sm font-semibold text-[#063B63] dark:text-[#F8FAFC] mb-2">
                💬 Coach nói gì về phương pháp FnC?
              </p>
              <p className="text-sm italic text-[#6B7280] dark:text-[#CBD5E1] leading-relaxed">
                "Tôi không muốn học viên phụ thuộc vào tôi mãi. Tôi muốn họ hiểu nguyên tắc và tự chủ được trong việc ăn uống. Đó mới là thành công thực sự."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-8 h-8 rounded-full bg-[#FFD43B] flex items-center justify-center text-sm font-black text-[#063B63]">N</div>
                <span className="text-xs font-semibold text-[#063B63] dark:text-[#F8FAFC]">Nutrition Coach FnC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom comparison */}
        <div className="bg-white dark:bg-[#0B2239] rounded-3xl border border-[#E5E7EB] dark:border-[#1E3A56] overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB] dark:divide-[#1E3A56]">
            {[
              { label: 'Chế độ ăn thông thường', items: ['Thực đơn cứng nhắc', 'Cắt nhóm thực phẩm', 'Không có hỗ trợ', 'Khó duy trì lâu dài'], bad: true },
              { label: 'FIT AND CARE', items: ['Cá nhân hóa hoàn toàn', 'Ăn đa dạng, cân bằng', 'Coach đồng hành thực tế', 'Xây dựng thói quen bền vững'], bad: false },
              { label: 'App thực đơn tự động', items: ['Không hiểu ngữ cảnh', 'Không phản hồi thực tế', 'Không điều chỉnh linh hoạt', 'Thiếu động lực duy trì'], bad: true },
            ].map(col => (
              <div key={col.label} className={`p-6 ${!col.bad ? 'bg-[#EAF6FF] dark:bg-[#071A2D]' : ''}`}>
                <h4 className={`font-bold text-sm mb-4 ${!col.bad ? 'text-[#0B74D1] dark:text-[#1E90FF]' : 'text-[#6B7280] dark:text-[#94A3B8]'}`}>
                  {!col.bad && '⭐ '}{col.label}
                </h4>
                <ul className="space-y-2">
                  {col.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <span>{col.bad ? '✗' : '✓'}</span>
                      <span className={col.bad ? 'text-[#6B7280] dark:text-[#94A3B8]' : 'text-[#1F2937] dark:text-[#CBD5E1] font-medium'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
