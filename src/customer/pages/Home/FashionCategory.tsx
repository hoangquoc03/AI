import { motion } from "framer-motion";
import React from "react";
import useShowcaseInteractions from "./useShowcaseInteractions"; // import hook của bạn

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
    colSpan: 8,
    rowSpan: 1,
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

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const FashionCategory: React.FC = () => {
  // Nhúng hook scroll + tilt
  useShowcaseInteractions();

  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-slate-50">
      {/* Header */}
      <motion.div
        className="max-w-3xl mx-auto md:mx-0 md:pl-6 lg:pl-16 reveal-on-scroll"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={textVariants}
      >
        <h1 className="text-3xl font-semibold text-gray-900">
          Các Danh Mục Thời Trang
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Khám phá các bộ sưu tập quần áo, giày dép và phụ kiện mới nhất, được
          thiết kế để phù hợp với mọi phong cách và xu hướng hiện đại.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-12 gap-6 max-w-7xl mx-auto auto-rows-[300px]">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            className="relative group rounded-2xl overflow-hidden cursor-pointer border border-white/5 shadow-lg reveal-on-scroll"
            data-tilt
            style={{
              gridColumn: `span ${category.colSpan || 3}`,
              gridRow: `span ${category.rowSpan || 1}`,
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <motion.img
              src={category.img}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100 filter contrast-125"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>

            {/* Text overlay bên trái */}
            <motion.div
              className="absolute top-1/2 left-6 -translate-y-1/2 text-left"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white">
                {category.name}
              </h3>
              <a
                href={category.href}
                className="mt-1 inline-block text-sm text-indigo-400 font-mono"
              >
                Xem Thêm →
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FashionCategory;
