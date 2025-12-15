import useShowcaseInteractions from "./useShowcaseInteractions";

const ShowcaseCard = () => {
  useShowcaseInteractions();
  return (
    <section className="relative">
      {/* Overlay background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0" />

      <div className="reveal-on-scroll delay-300 h-[600px] flex items-center justify-center relative perspective-container">
        <div
          className="tilt-card w-80 h-[500px] md:w-[400px] md:h-[600px] relative cursor-pointer group"
          data-tilt
        >
          {/* Floating Widget */}
          <div className="absolute -right-12 top-32 w-40 bg-black/80 backdrop-blur-xl border border-indigo-500/30 p-4 rounded-xl z-30 translate-z-50 shadow-2xl animate-float-delayed">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                Phân tích
              </span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </div>
            <div className="flex justify-between text-[10px] text-zinc-300">
              <span>Cấu trúc</span>
              <span>98%</span>
            </div>

            <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 w-[98%]" />
            </div>

            <div className="flex justify-between text-[10px] text-zinc-300">
              <span>Vật liệu</span>
              <span>Poly-Nano</span>
            </div>
          </div>

          {/* Main Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-[2rem] border border-white/10 shadow-2xl translate-z-20">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
              <img
                src="https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-chunky-wool-cashmere-crewneck--HUN21WEH0753_PM2_Front%20view.png?wid=1090&hei=1090"
                alt="AI fashion model wearing Cyber-Weave Jacket"
                className="w-full h-full object-contain brightness-110 contrast-110 saturate-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
            </div>

            {/* Text nổi */}
            <div className="absolute bottom-6 left-6 right-6 translate-z-30">
              <div className="inline-block bg-black/40 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
                <h3 className="text-2xl text-white font-semibold tracking-tight drop-shadow-lg">
                  Áo Dệt Kim Len Cashmere
                </h3>
                <p className="text-sm text-zinc-200 drop-shadow">49.000.000đ</p>
              </div>
            </div>
          </div>

          {/* Depth shadow */}
          <div className="absolute -right-8 -bottom-8 w-full h-full bg-indigo-600/10 rounded-[2rem] -z-10 translate-z-10 blur-xl" />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseCard;
