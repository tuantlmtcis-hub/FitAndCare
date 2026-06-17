interface Props {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle dark mode"
      className="relative flex items-center justify-center w-10 h-10 rounded-full border border-[#E5E7EB] dark:border-[#1E3A56] bg-[#F5F7FA] dark:bg-[#0B2239] hover:bg-[#EAF6FF] dark:hover:bg-[#102B46] transition-all duration-300 cursor-pointer"
    >
      {isDark ? (
        <svg className="w-5 h-5 text-[#FFD43B]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3V1m0 22v-2M4.22 4.22L2.81 2.81m15.95 15.95-1.41-1.41M1 12H3m18 0h2M4.22 19.78l-1.41 1.41M18.17 5.83l1.41-1.41M12 17a5 5 0 100-10 5 5 0 000 10z"/>
        </svg>
      ) : (
        <svg className="w-5 h-5 text-[#0B74D1]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
      )}
    </button>
  );
}
