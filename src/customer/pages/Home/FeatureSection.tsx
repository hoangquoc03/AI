import { motion } from "framer-motion";
import { Gift, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
export default function FeatureSection() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7 },
    },
  };
  const features = [
    {
      title: "Sản Phẩm Thời Trang Đa Dạng",
      desc: "Hàng ngàn mẫu quần áo mới nhất, cập nhật theo xu hướng dành cho mọi phong cách.",
      icon: ShoppingBag,
      iconBg: "bg-violet-100",
      iconColor: "#7F22FE",
      glow: "from-violet-500/40 via-indigo-400/40 to-violet-600/40",
      border: "border-violet-200",
    },
    {
      title: "Thanh Toán An Toàn",
      desc: "Hỗ trợ nhiều phương thức thanh toán, bảo mật cao và an tâm tuyệt đối.",
      icon: ShieldCheck,
      iconBg: "bg-green-100",
      iconColor: "#00A63E",
      glow: "from-emerald-400/40 via-green-500/40 to-emerald-600/40",
      border: "border-green-200",
    },
    {
      title: "Giao Hàng Nhanh Chóng",
      desc: "Giao hàng toàn quốc, đổi trả dễ dàng trong 7 ngày nếu không vừa ý.",
      icon: Truck,
      iconBg: "bg-orange-100",
      iconColor: "#F54900",
      glow: "from-orange-400/40 via-amber-400/40 to-orange-500/40",
      border: "border-orange-200",
    },
    {
      title: "Ưu Đãi & Khuyến Mãi Hấp Dẫn",
      desc: "Liên tục cập nhật voucher, flash sale và ưu đãi độc quyền cho thành viên.",
      icon: Gift,
      iconBg: "bg-pink-100",
      iconColor: "#DB2777",
      glow: "from-pink-400/40 via-rose-400/40 to-pink-500/40",
      border: "border-pink-200",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }

        @keyframes gradientGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-12 text-3xl md:text-4xl font-semibold text-center"
      >
        Tính Năng Nổi Bật
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-sm md:text-base text-slate-500 text-center mt-2 max-w-md mx-auto"
      >
        Tất cả những gì bạn cần để mua sắm thời trang nhanh chóng, tiện lợi và
        an toàn.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="flex flex-col md:flex-row gap-8 mt-16 px-4 md:px-16 lg:px-24 xl:px-32"
      >
        {features.map((feature, idx) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.06 }}
              className={`
        group relative rounded-2xl p-6 max-w-sm w-full
        border ${feature.border} bg-white
        transition-all duration-500
      `}
            >
              {/* Ambient Glow */}
              <div
                className={`
          absolute -inset-1 rounded-2xl blur-2xl opacity-30
          bg-gradient-to-r ${feature.glow}
          bg-[length:400%_400%]
          animate-gradientGlow
          transition-opacity duration-500
          group-hover:opacity-70
        `}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center md:items-start gap-4">
                <div
                  className={`p-6 aspect-square ${feature.iconBg} rounded-full flex items-center justify-center`}
                >
                  <Icon
                    size={28}
                    strokeWidth={2}
                    color={feature.iconColor}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-base md:text-lg font-semibold text-slate-700">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}
