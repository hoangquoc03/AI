import { Heart, ShoppingCart, Star } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import useShowcaseInteractions from "./useShowcaseInteractions";

interface ProductType {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  img: string;
}

const products: ProductType[] = [
  {
    id: 1,
    name: "Áo Khoác Cổ Tròn Thanh Lịch",
    price: 29,
    originalPrice: 49,
    rating: 4.8,
    img: "https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-chic-collarless-jacket--HTJ11EUNW62N_PM2_Front%20view.png?wid=1090&hei=1090",
  },
  {
    id: 2,
    name: "Áo Khoác Dệt Kim Cao Cấp",
    price: 39,
    originalPrice: 59,
    rating: 4.6,
    img: "https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-double-breasted-knit-jacket--HTN17WURY900_PM2_Front%20view.png?wid=1090&hei=1090",
  },
  {
    id: 3,
    name: "Áo Khoác Họa Tiết Damier",
    price: 29,
    originalPrice: 45,
    rating: 4.7,
    img: "https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-damier-flock-collarless-jacket--HUFJ9EUYV900_PM2_Front%20view.png?wid=1090&hei=1090",
  },
  {
    id: 4,
    name: "Áo Khoác Jean Trucker",
    price: 49,
    originalPrice: 79,
    rating: 4.9,
    img: "https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-destroy-denim-trucker-jacket--HUA48WK54900_PM2_Front%20view.png?wid=490&hei=490",
  },
];

const Product = () => {
  const cartIconRef = useRef<HTMLDivElement>(null);
  const { cartItems, addToCart } = useCart();

  // Tilt + reveal effect
  useShowcaseInteractions();

  const handleAddToCart = (
    productId: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const target = e.currentTarget.closest(".product-card") as HTMLElement;
    if (!target) return;

    const img = target.querySelector("img");
    if (!img) return;

    const cartIcon = document.querySelector<HTMLButtonElement>("#navbar-cart");
    if (!cartIcon) return;

    const imgRect = img.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    const flyImg = img.cloneNode(true) as HTMLImageElement;
    flyImg.style.position = "fixed";
    flyImg.style.top = `${imgRect.top}px`;
    flyImg.style.left = `${imgRect.left}px`;
    flyImg.style.width = `${imgRect.width}px`;
    flyImg.style.height = `${imgRect.height}px`;
    flyImg.style.zIndex = "9999";
    flyImg.style.borderRadius = "16px";
    flyImg.style.pointerEvents = "none";

    // Gắn class để áp dụng animation
    flyImg.classList.add("fly-to-cart");
    document.body.appendChild(flyImg);

    // Tạo style keyframes động dựa vào vị trí hiện tại và cart
    const style = document.createElement("style");
    style.innerHTML = `
    @keyframes flyToCart {
      0% {
        transform: translate(0,0) scale(1);
        opacity: 1;
      }
      50% {
        transform: translate(${(cartRect.left - imgRect.left) / 2}px, ${Math.min(imgRect.top, cartRect.top) - 80}px) scale(1.1);
        opacity: 1;
      }
      100% {
        transform: translate(${cartRect.left - imgRect.left}px, ${cartRect.top - imgRect.top}px) scale(0.1);
        opacity: 0.5;
      }
    }

    .fly-to-cart {
      animation: flyToCart 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
    }
  `;
    document.head.appendChild(style);

    flyImg.addEventListener("animationend", () => {
      flyImg.remove();
      style.remove();
      addToCart(productId); // cập nhật cart
    });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* Header */}
      <div className="mt-14 text-center mb-16 font-poppins">
        <h1 className="text-3xl font-semibold text-slate-900">
          Áo Khoác Thời Trang
        </h1>
        <p className="text-slate-500 mt-2 max-w-xl mx-auto">
          Những thiết kế áo khoác cao cấp, chuẩn form, tinh tế cho phong cách
          hiện đại
        </p>
      </div>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-20">
        {products.map((product) => {
          const discount = Math.round(
            ((product.originalPrice - product.price) / product.originalPrice) *
              100
          );

          return (
            <div
              key={product.id}
              className="group relative product-card reveal-on-scroll bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500"
              data-tilt
            >
              {/* Discount badge */}
              <span className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                -{discount}%
              </span>

              {/* Wishlist */}
              <button className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                <Heart
                  size={18}
                  className="text-slate-400 group-hover:text-rose-500 hover:text-rose-500 transition-colors duration-300 ease-in-out"
                  fill="currentColor"
                />
              </button>

              {/* Image */}
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              {/* Content */}
              <div className="p-5 font-poppins">
                <h3 className="text-sm font-medium text-slate-800 line-clamp-1">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < Math.round(product.rating)
                          ? "fill-blue-500 text-blue-500"
                          : "text-slate-300"
                      }
                    />
                  ))}
                  <span className="text-xs text-slate-500 ml-1">
                    {product.rating}
                  </span>
                </div>

                {/* Price + Cart */}
                <div className="flex items-center justify-between mt-5">
                  <div>
                    <p className="text-sm text-slate-400 line-through">
                      ${product.originalPrice}.00
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                      ${product.price}.00
                    </p>
                  </div>
                  <button
                    onClick={(e) => handleAddToCart(product.id, e)}
                    className="flex items-center gap-1 px-4 py-2 text-sm bg-slate-900 text-white rounded-full hover:bg-slate-700 transition"
                  >
                    <ShoppingCart size={16} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Product;
