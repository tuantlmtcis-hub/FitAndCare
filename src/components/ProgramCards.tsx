import { programs } from '../data';

export default function ProgramCards() {
  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#F5F7FA] dark:bg-[#071A2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#EAF6FF] dark:bg-[#0B2239] text-[#0B74D1] dark:text-[#3BA7FF] text-xs font-semibold px-4 py-2 rounded-full mb-4 border border-[#0B74D1]/20 dark:border-[#1E90FF]/20">
            Các gói đồng hành
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B63] dark:text-[#F8FAFC] mb-4">
            Chọn chương trình phù hợp với bạn
          </h2>
          <p className="text-[#6B7280] dark:text-[#CBD5E1] max-w-2xl mx-auto">
            Mỗi chương trình được thiết kế cho từng đối tượng và mục tiêu cụ thể — không phải một công thức cho tất cả.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div
              key={p.id}
              className={`group relative flex flex-col rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                p.highlight
                  ? 'bg-[#063B63] dark:bg-[#0B2239] border-[#0B74D1] dark:border-[#1E90FF] shadow-lg dark:shadow-[0_8px_32px_rgba(30,144,255,0.2)]'
                  : 'bg-white dark:bg-[#0B2239] border-[#E5E7EB] dark:border-[#1E3A56] hover:border-[#0B74D1] dark:hover:border-[#1E90FF]'
              }`}
            >
              {/* Highlight ring */}
              {p.highlight && (
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[#FFD43B]/60 to-[#0B74D1]/60 -z-10 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              )}

              {/* Tag */}
              <div className="px-6 pt-6 pb-0">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                  p.highlight
                    ? 'bg-[#FFD43B] text-[#063B63]'
                    : 'bg-[#EAF6FF] dark:bg-[#102B46] text-[#0B74D1] dark:text-[#3BA7FF]'
                }`}>
                  {p.tag}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 ${
                  p.highlight
                    ? 'bg-[#0B74D1]/30'
                    : 'bg-[#EAF6FF] dark:bg-[#102B46]'
                }`}>
                  {p.icon}
                </div>

                <h3 className={`text-xl font-black mb-1 ${
                  p.highlight ? 'text-white' : 'text-[#063B63] dark:text-[#F8FAFC]'
                }`}>
                  {p.title}
                </h3>
                <p className={`text-sm font-semibold mb-3 ${
                  p.highlight ? 'text-[#FFD43B]' : 'text-[#0B74D1] dark:text-[#1E90FF]'
                }`}>
                  {p.subtitle}
                </p>
                <p className={`text-sm leading-relaxed flex-1 ${
                  p.highlight ? 'text-white/80' : 'text-[#6B7280] dark:text-[#CBD5E1]'
                }`}>
                  {p.desc}
                </p>

                <button
                  className={`mt-6 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    p.highlight
                      ? 'bg-[#FFD43B] hover:bg-[#FFC107] text-[#063B63]'
                      : 'border-2 border-[#0B74D1] dark:border-[#1E90FF] text-[#0B74D1] dark:text-[#3BA7FF] hover:bg-[#EAF6FF] dark:hover:bg-[#071A2D]'
                  }`}
                >
                  Tìm hiểu thêm →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-[#6B7280] dark:text-[#94A3B8] mb-4">Không chắc chọn gói nào?</p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-[#FFD43B] hover:bg-[#FFC107] text-[#063B63] font-bold px-7 py-3.5 rounded-2xl transition-all duration-200 shadow-md"
          >
            Được tư vấn miễn phí để chọn gói phù hợp
          </button>
        </div>
      </div>
    </section>
  );
}
