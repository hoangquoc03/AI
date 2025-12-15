import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import useShowcaseInteractions from "./useShowcaseInteractions";

interface Category {
  name: string;
  href: string;
  img: string;
  colSpan?: number;
  rowSpan?: number;
}

const categories: Category[] = [
  {
    name: "Áo",
    href: "/category/ao",
    img: "https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-denim-short-sleeved-shirt--HUS16WK13650_PM2_Front%20view.png?wid=1090&hei=1090",
    colSpan: 4,
    rowSpan: 2,
  },
  {
    name: "Quần",
    href: "/category/quan",
    img: "https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-wide-leg-fit-denim-pants--HSD46WPCP65L_PM2_Front%20view.png?wid=1090&hei=1090",
    colSpan: 4,
    rowSpan: 2,
  },
  {
    name: "Váy",
    href: "/category/vay",
    img: "https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-accent-raw-denim-mini-skirt--FUSK98GOW610_PM2_Front%20view.png?wid=1090&hei=1090",
    colSpan: 4,
    rowSpan: 1,
  },
  {
    name: "Giày",
    href: "/category/giay",
    img: "https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-buttersoft-sneaker--BVU02RNA41_PM2_Front%20view.png?wid=1090&hei=1090",
    colSpan: 4,
    rowSpan: 1,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
    },
  }),
};

const FashionCategoryLuxury: React.FC = () => {
  useShowcaseInteractions();

  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
          Các danh mục thời trang Luxury
        </h1>
        <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed">
          Bộ sưu tập được tuyển chọn lấy cảm hứng từ phom dáng hiện đại, chất
          liệu cao cấp và vẻ đẹp sang trọng vượt thời gian.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="grid grid-cols-12 auto-rows-[320px] gap-6 max-w-7xl mx-auto"
      >
        {categories.map((category, index) => {
          const isTall = (category.rowSpan || 1) > 1;

          return (
            <motion.a
              key={category.name}
              href={category.href}
              custom={index}
              variants={cardVariants}
              data-tilt
              className="group relative rounded-2xl overflow-hidden shadow-xl"
              style={{
                gridColumn: `span ${category.colSpan || 3}`,
                gridRow: `span ${category.rowSpan || 1}`,
              }}
            >
              {/* Image */}
              <motion.img
                src={category.img}
                alt={category.name}
                loading="lazy"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08, y: -6 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-transparent" />

              {/* Light sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Text */}
              <div
                className={clsx(
                  "absolute left-6 right-6 z-10",
                  isTall ? "bottom-6" : "top-1/2 -translate-y-1/2"
                )}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide transition-transform duration-500 group-hover:translate-x-1">
                  {category.name}
                </h3>
                <span className="mt-1 inline-block text-xs md:text-sm text-indigo-300 font-mono tracking-widest opacity-80 group-hover:opacity-100 transition-all">
                  DISCOVER →
                </span>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
};

export default FashionCategoryLuxury;
