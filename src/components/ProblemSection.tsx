const problems = [
  { icon: '⚖️', text: 'Ăn healthy nhưng cân vẫn không xuống' },
  { icon: '🤷', text: 'Không biết ăn bao nhiêu là đủ' },
  { icon: '🍜', text: 'Đi ăn ngoài, ăn tiệc là mất kiểm soát' },
  { icon: '⏰', text: 'Bận rộn nên khó duy trì lâu dài' },
  { icon: '👦', text: 'Con không hợp tác, cả nhà ăn mỗi người một kiểu' },
  { icon: '📈', text: 'Giảm được rồi lại tăng lại' },
];

export default function ProblemSection() {
  return (
    <section id="problems" className="py-20 lg:py-28 bg-[#F5F7FA] dark:bg-[#071A2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-4">
          <span className="inline-block bg-[#FFF4CC] dark:bg-[#102B46] text-[#063B63] dark:text-[#FFD43B] text-xs font-semibold px-4 py-2 rounded-full">
            Bạn có đang gặp điều này không?
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B63] dark:text-[#F8FAFC] text-center max-w-3xl mx-auto leading-tight mb-4">
          Bạn không cần thêm một chế độ ăn khắc nghiệt.
        </h2>
        <p className="text-lg text-[#0B74D1] dark:text-[#1E90FF] text-center font-semibold mb-14">
          Bạn cần học cách ăn đúng.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 bg-white dark:bg-[#0B2239] rounded-2xl p-6 border border-[#E5E7EB] dark:border-[#1E3A56] hover:border-[#0B74D1] dark:hover:border-[#1E90FF] hover:shadow-lg dark:hover:shadow-[0_4px_20px_rgba(30,144,255,0.1)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-[#EAF6FF] dark:bg-[#102B46] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-2xl">{p.icon}</span>
              </div>
              <p className="text-[#1F2937] dark:text-[#CBD5E1] font-medium leading-snug pt-1">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-white dark:bg-[#0B2239] rounded-2xl px-6 py-4 border border-[#E5E7EB] dark:border-[#1E3A56] shadow-sm">
            <span className="text-2xl">👇</span>
            <p className="text-[#063B63] dark:text-[#F8FAFC] font-semibold">
              FIT AND CARE có giải pháp cho từng vấn đề này.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
