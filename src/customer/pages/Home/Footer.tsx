const Footer = () => {
  return (
    <footer className="relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
        {/* Brand */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-semibold text-gray-900">Fashion Store</h2>
          <p className="text-sm/7 mt-6">
            Website thương mại điện tử chuyên quần áo & phụ kiện thời trang. Cập
            nhật xu hướng mới mỗi tuần, chất lượng đảm bảo, giá tốt mỗi ngày.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-col">
          <h2 className="font-semibold mb-5 text-gray-800">Danh Mục</h2>
          <a className="hover:text-slate-600 transition" href="#">
            Áo thun
          </a>
          <a className="hover:text-slate-600 transition" href="#">
            Áo sơ mi
          </a>
          <a className="hover:text-slate-600 transition" href="#">
            Quần jean
          </a>
          <a className="hover:text-slate-600 transition" href="#">
            Váy & Đầm
          </a>
          <a className="hover:text-slate-600 transition" href="#">
            Phụ kiện
          </a>
        </div>

        {/* Support */}
        <div className="flex flex-col">
          <h2 className="font-semibold mb-5 text-gray-800">
            Hỗ Trợ Khách Hàng
          </h2>
          <a className="hover:text-slate-600 transition" href="#">
            Liên hệ
          </a>
          <a className="hover:text-slate-600 transition" href="#">
            Hướng dẫn mua hàng
          </a>
          <a className="hover:text-slate-600 transition" href="#">
            Chính sách đổi trả
          </a>
          <a className="hover:text-slate-600 transition" href="#">
            Vận chuyển & Thanh toán
          </a>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-5">
            Đăng ký nhận ưu đãi
          </h2>
          <div className="text-sm space-y-6 max-w-sm">
            <p>
              Nhận mã giảm giá, bộ sưu tập mới và thông tin khuyến mãi độc quyền
              mỗi tuần.
            </p>
            <div className="flex items-center">
              <input
                className="rounded-l-md bg-gray-100 outline-none w-full max-w-64 h-11 px-3"
                type="email"
                placeholder="Nhập email của bạn"
              />
              <button className="bg-gradient-to-b from-indigo-600 to-indigo-800 cursor-pointer hover:from-indigo-700 hover:to-indigo-900 transition px-4 h-11 text-white rounded-r-md">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-t mt-10 border-slate-200">
        <p className="text-center">
          © 2025 Fashion Store. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="/">Chính sách riêng tư</a>
          <a href="/">Điều khoản dịch vụ</a>
          <a href="/">Chính sách Cookie</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
