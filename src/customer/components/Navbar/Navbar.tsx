import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openMobileSearch, setOpenMobileSearch] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAvatar, setUserAvatar] = useState(
    "https://i.pravatar.cc/40" // avatar mẫu
  );
  return (
    <>
      <div className="w-full py-1.5 text-center bg-white/10 backdrop-blur-sm">
        <p className="text-xs md:text-sm text-gray-700 font-medium inline-flex items-center justify-center gap-1">
          <span className="px-2 py-0.5 rounded-full text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-600 to-sky-400">
            Ưu đãi ra mắt
          </span>
          Miễn phí vận chuyển toàn quốc cho mọi đơn hàng trong thời gian ra mắt
        </p>
      </div>

      {/* Navbar */}
      <nav className=" sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 md:px-16 lg:px-24 xl:px-32">
          <div className="flex items-center justify-between h-16 ">
            {/* Left */}
            <div className="absolute left-0 flex items-center gap-4">
              {/* Mobile Menu */}
              <button
                type="button"
                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-900 md:hidden"
              >
                <span
                  className="iconify"
                  data-icon="lucide:menu"
                  data-width="20"
                />
              </button>

              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <span className="ml-[127px] logo text-xl font-semibold tracking-tight text-slate-900">
                  LWShop
                </span>
              </Link>
            </div>

            {/* Center Menu */}
            <div className="mx-auto hidden md:flex items-center justify-center gap-1 relative">
              {/* Nam */}
              <div className="group relative">
                <Link
                  to="/men"
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                >
                  Nam
                </Link>
                {/* Submenu */}
                <div className="absolute top-full left-0 mt-1 hidden group-hover:block w-40 bg-white border border-slate-200 shadow-lg rounded-md z-50">
                  <Link
                    to="/men/shirts"
                    className="block px-4 py-2 text-sm text-slate-700 hover:text-primary-color"
                  >
                    Áo sơ mi
                  </Link>
                  <Link
                    to="/men/pants"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Quần dài
                  </Link>
                  <Link
                    to="/men/shoes"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Giày dép
                  </Link>
                </div>
              </div>

              {/* Nữ */}
              <div className="group relative">
                <Link
                  to="/women"
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                >
                  Nữ
                </Link>
                <div className="absolute top-full left-0 mt-1 hidden group-hover:block w-40 bg-white border border-slate-200 shadow-lg rounded-md z-50">
                  <Link
                    to="/women/dresses"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Váy
                  </Link>
                  <Link
                    to="/women/tops"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Áo
                  </Link>
                  <Link
                    to="/women/shoes"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Giày dép
                  </Link>
                </div>
              </div>

              {/* Phụ kiện */}
              <div className="group relative">
                <Link
                  to="/accessories"
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                >
                  Phụ kiện
                </Link>
                <div className="absolute top-full left-0 mt-1 hidden group-hover:block w-40 bg-white border border-slate-200 shadow-lg rounded-md z-50">
                  <Link
                    to="/accessories/bags"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Túi xách
                  </Link>
                  <Link
                    to="/accessories/hats"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Mũ
                  </Link>
                  <Link
                    to="/accessories/jewelry"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Trang sức
                  </Link>
                </div>
              </div>

              {/* Sale */}
              <Link
                to="/sale"
                className="rounded-full px-4 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 hover:text-rose-700"
              >
                Sale
              </Link>
            </div>

            {/* Right */}
            <div className="absolute right-[120px] flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Search Desktop */}
              <div className="group relative hidden sm:block">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <span
                    className="iconify"
                    data-icon="lucide:search"
                    data-width="18"
                  />
                </span>
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="h-10 w-[180px] lg:w-[240px]  rounded-full  border  border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none transition-all duration-300 ease-in-out focus:w-[260px] lg:focus:w-[300px] focus:border-slate-300 focus:bg-white focus:ring-4  focus:ring-slate-100"
                />
              </div>

              {/* Mobile Search */}
              <button
                type="button"
                onClick={() => setOpenMobileSearch(!openMobileSearch)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 sm:hidden"
              >
                <span
                  className="iconify"
                  data-icon="lucide:search"
                  data-width="20"
                />
              </button>

              {/* Favorites */}
              <button
                type="button"
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
                <span
                  className="iconify"
                  data-icon="lucide:heart"
                  data-width="20"
                />
                <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary-color text-[9px] font-bold text-white ring-2 ring-white">
                  2
                </span>
              </button>

              {/* Cart */}
              <button
                type="button"
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
                <span
                  className="iconify"
                  data-icon="lucide:shopping-bag"
                  data-width="20"
                />
                <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary-color text-[9px] font-bold text-white ring-2 ring-white">
                  2
                </span>
              </button>

              <div className="h-6 w-px bg-slate-200 mx-1" />

              <div className="flex items-center gap-2 sm:gap-3">
                {isLoggedIn ? (
                  // Hiển thị avatar khi login
                  <div className="relative">
                    <img
                      src={userAvatar}
                      alt="User Avatar"
                      className="h-10 w-10 rounded-full border-2 border-white shadow-sm cursor-pointer hover:ring-2 hover:ring-indigo-500 transition"
                      onClick={() => {
                        /* mở dropdown menu hoặc logout */
                        console.log("Avatar clicked");
                      }}
                    />
                  </div>
                ) : (
                  <>
                    <style>{`
        @keyframes rotate {
          100% {
            transform: rotate(1turn);
          }
        }

        .rainbow::before {
          content: '';
          position: absolute;
          z-index: -1;
          inset: -50%;
          width: 200%;
          height: 200%;
          background-image: conic-gradient(
            #7dd3fc,
            #67e8f9,
            #60a5fa,
            #7dd3fc
          );
          filter: blur(6px);
          animation: rotate 4s linear infinite;
        }
      `}</style>

                    <Link
                      to="/login"
                      className="rainbow relative inline-flex items-center justify-center
                   rounded-full p-[2px] overflow-hidden transition
                   active:scale-95 hover:scale-105"
                    >
                      <span
                        className="relative z-10 flex items-center gap-2 rounded-full
                         bg-white px-5 py-2.5 text-sm font-medium
                         text-slate-800 border border-sky-200"
                      >
                        <span
                          className="iconify text-sky-500"
                          data-icon="lucide:log-in"
                          data-width="16"
                        />
                        <span>Sign In</span>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Search Box */}
        {openMobileSearch && (
          <div className="border-t border-slate-100 bg-slate-50 px-4 py-3 sm:hidden">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <span
                  className="iconify"
                  data-icon="lucide:search"
                  data-width="18"
                />
              </span>
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="h-10 w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-4 text-sm outline-none focus:border-slate-300 focus:ring-2 focus:ring-slate-100"
              />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
