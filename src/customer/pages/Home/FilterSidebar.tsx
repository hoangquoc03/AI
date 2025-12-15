import { SlidersHorizontal } from "lucide-react";

const FilterSidebar = () => {
  return (
    <aside
      className="w-full lg:w-72 bg-white rounded-2xl p-6 
                      shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                      font-poppins"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <SlidersHorizontal size={18} />
        <h2 className="text-lg font-semibold text-slate-900">Bộ lọc</h2>
      </div>

      {/* PRICE */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-slate-800 mb-3">Giá</h3>
        <div className="space-y-2">
          {["Dưới $30", "$30 – $50", "$50 – $80", "Trên $80"].map((price) => (
            <label
              key={price}
              className="flex items-center gap-2 text-sm text-slate-600"
            >
              <input type="checkbox" className="accent-blue-600" />
              {price}
            </label>
          ))}
        </div>
      </div>

      {/* SIZE */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-slate-800 mb-3">Size</h3>
        <div className="flex flex-wrap gap-2">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className="px-3 py-1.5 text-sm rounded-full border 
                         hover:border-blue-600 hover:text-blue-600 
                         transition"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* COLOR */}
      <div>
        <h3 className="text-sm font-semibold text-slate-800 mb-3">Màu sắc</h3>
        <div className="flex gap-3">
          {[
            { name: "Black", color: "bg-black" },
            { name: "White", color: "bg-white border" },
            { name: "Blue", color: "bg-blue-600" },
            { name: "Beige", color: "bg-amber-200" },
          ].map((c) => (
            <button
              key={c.name}
              title={c.name}
              className={`w-7 h-7 rounded-full ${c.color}
                          ring-1 ring-slate-300
                          hover:ring-2 hover:ring-blue-500
                          transition`}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
