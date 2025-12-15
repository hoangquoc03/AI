import React from "react";
import ShowcaseCard from "./ShowcaseCard";

const Hero: React.FC = () => {
  return (
    <div>
      <main className="flex flex-col max-md:gap-16 md:flex-row pb-20 items-center justify-between pt-[120px] px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col items-center md:items-start gap-6 px-4 md:px-0">
          {/* Tiêu đề */}
          <h1 className="text-4xl md:text-6xl font-extrabold max-w-xl text-transparent bg-clip-text animate-gradientText bg-gradient-to-r from-blue-500 via-indigo-600 to-sky-400">
            Thời Trang Nổi Bật – Tỏa Sáng Phong Cách
          </h1>

          {/* Mô tả */}
          <p className="text-sm md:text-base max-w-lg text-slate-700">
            Khám phá bộ sưu tập quần áo, giày dép và phụ kiện độc quyền. Chất
            lượng cao – Phong cách riêng – Giá cả hợp lý. Mua sắm ngay để tạo
            dấu ấn cá nhân!
          </p>

          {/* Nút CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Nút chính */}
            <button className="relative px-8 py-3 font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Mua Ngay
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-lg bg-blue-400 blur opacity-30 hover:opacity-50 transition-all duration-300"></span>
            </button>

            {/* Nút phụ */}
            <button className="flex items-center gap-2 px-5 py-3 rounded-lg border border-blue-400 text-blue-600 bg-white hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-sm">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.68395 9.89231C6.62515 9.66436 6.50633 9.45634 6.33987 9.28988C6.17341 9.12341 5.96538 9.0046 5.73743 8.94579L1.69644 7.90377C1.6275 7.8842 1.56682 7.84267 1.52362 7.7855C1.48041 7.72832 1.45703 7.65861 1.45703 7.58694C1.45703 7.51527 1.48041 7.44556 1.52362 7.38839C1.56682 7.33121 1.6275 7.28969 1.69644 7.27012L5.73743 6.22743C5.9653 6.16868 6.17327 6.04997 6.33973 5.88363C6.50618 5.71729 6.62504 5.5094 6.68395 5.28157L7.72598 1.24058C7.74535 1.17137 7.78683 1.11039 7.84409 1.06695C7.90136 1.02351 7.97126 1 8.04313 1C8.11501 1 8.18491 1.02351 8.24217 1.06695C8.29943 1.11039 8.34092 1.17137 8.36029 1.24058L9.40166 5.28157C9.46046 5.50952 9.57928 5.71755 9.74574 5.88401C9.9122 6.05047 10.1202 6.16928 10.3482 6.22809L14.3892 7.26946C14.4587 7.28863 14.5199 7.33006 14.5636 7.38741C14.6073 7.44476 14.6309 7.51486 14.6309 7.58694C14.6309 7.65903 14.6073 7.72912 14.5636 7.78647C14.5199 7.84382 14.4587 7.88526 14.3892 7.90442L10.3482 8.94579C10.1202 9.0046 9.9122 9.12341 9.74574 9.28988C9.57928 9.45634 9.46046 9.66436 9.40166 9.89231L8.35963 13.9333C8.34026 14.0025 8.29878 14.0635 8.24151 14.1069C8.18425 14.1504 8.11435 14.1739 8.04247 14.1739C7.9706 14.1739 7.9007 14.1504 7.84344 14.1069C7.78617 14.0635 7.74469 14.0025 7.72532 13.9333L6.68395 9.89231Z"
                  stroke="#4F39F6"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Bộ sưu tập</span>
            </button>
          </div>

          {/* Tailwind animation */}
          <style>{`
    @keyframes gradientText {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-gradientText {
      background-size: 200% 200%;
      animation: gradientText 6s ease infinite;
    }
  `}</style>
        </div>

        <div className="md:translate-y-6">
          <ShowcaseCard />
        </div>
      </main>
    </div>
  );
};

export default Hero;
