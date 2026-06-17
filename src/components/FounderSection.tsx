const badges = [
  'Nutrition & Wellness Coaching',
  'Lifestyle & Wellness Coaching',
  'Health & Wellness Coaching',
  'Habit Change',
  'Sustainable Lifestyle',
];

export default function FounderSection() {
  return (
    <section id="founder" className="py-20 lg:py-28 bg-white dark:bg-[#020B16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#FFF4CC] dark:bg-[#102B46] text-[#063B63] dark:text-[#FFD43B] text-xs font-semibold px-4 py-2 rounded-full mb-4">
            Người đứng sau FnC
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B63] dark:text-[#F8FAFC]">
            Câu chuyện phía sau FIT AND CARE
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Avatar/Photo placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Photo frame */}
              <div className="w-72 h-80 sm:w-80 sm:h-96 bg-gradient-to-br from-[#EAF6FF] via-[#FFF4CC] to-[#EAF6FF] dark:from-[#071A2D] dark:via-[#0B2239] dark:to-[#071A2D] rounded-3xl border-2 border-[#E5E7EB] dark:border-[#1E3A56] flex items-center justify-center overflow-hidden">
                <div className="text-center px-6">
                  <div className="text-7xl mb-4">👩‍⚕️</div>
                  <p className="text-sm font-bold text-[#063B63] dark:text-[#F8FAFC]">Nutrition Coach</p>
                  <p className="text-xs text-[#6B7280] dark:text-[#94A3B8]">FIT AND CARE</p>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-4 -left-4 w-24 h-24 grid grid-cols-4 gap-1.5">
                {Array(16).fill(0).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0B74D1]/30 dark:bg-[#1E90FF]/30" />
                ))}
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-[#0B2239] rounded-2xl shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-4 border border-[#E5E7EB] dark:border-[#1E3A56]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-xs font-bold text-[#063B63] dark:text-[#F8FAFC]">500+ học viên tin tưởng</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h3 className="text-2xl font-black text-[#063B63] dark:text-[#F8FAFC] mb-4">
              Từ niềm tin rằng ăn uống lành mạnh không nên là áp lực
            </h3>

            <p className="text-[#6B7280] dark:text-[#CBD5E1] leading-relaxed mb-6">
              FIT AND CARE được xây dựng từ niềm tin rằng ăn uống lành mạnh không nên là áp lực. Mỗi người đều có thể học cách ăn thông minh hơn, hiểu cơ thể mình hơn và tạo ra thay đổi bền vững mà không cần cực đoan.
            </p>

            <p className="text-[#6B7280] dark:text-[#CBD5E1] leading-relaxed mb-8">
              Sau nhiều năm làm việc với hàng trăm học viên — từ mẹ bỉm sữa đến CEO bận rộn, từ trẻ em đến người cao tuổi — tôi nhận ra rằng vấn đề không nằm ở ý chí, mà nằm ở kiến thức và phương pháp tiếp cận.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {badges.map(badge => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 bg-[#EAF6FF] dark:bg-[#0B2239] text-[#0B74D1] dark:text-[#3BA7FF] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#0B74D1]/20 dark:border-[#1E90FF]/20"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-[#FFF4CC] dark:bg-[#102B46] rounded-2xl p-5 border-l-4 border-[#FFD43B]">
              <p className="text-sm italic text-[#1F2937] dark:text-[#CBD5E1] leading-relaxed">
                "Mục tiêu của tôi không phải là tạo ra một chế độ ăn hoàn hảo cho bạn. Mà là giúp bạn hiểu cơ thể mình đủ để tự đưa ra lựa chọn thông minh trong mọi tình huống."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
