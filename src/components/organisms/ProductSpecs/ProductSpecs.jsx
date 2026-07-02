import { Sparkles, Settings2, FileText } from "lucide-react";
function ProductSpecs({ product }) {
  return (

    <div className="mt-12 space-y-10">

    

      <div className="grid grid-cols-2 gap-8">

        {/* Highlights */}

        <div className="bg-gradient-to-br from-slate-900 to-violet-950 border border-violet-400/20 rounded-3xl p-8 shadow-2xl">

          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mb-5" />

        <h2 className="flex items-center gap-3 text-3xl font-bold text-amber-400 mb-8">
        <Sparkles size={32} className="text-yellow-300" />
        Highlights
        </h2>
          <div className="flex flex-col gap-5">

            {product.highlights.map((highlight, index) => (

              <div
                key={index}
                className="flex items-center gap-4"
              >

                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">

                  ✓

                </div>

                <span className="text-slate-200 text-xl">

                  {highlight}

                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Specifications */}

        <div className="bg-gradient-to-br from-slate-900 to-violet-950 border border-violet-400/20 rounded-3xl p-8 shadow-2xl">

          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mb-5" />

         <h2 className="flex items-center gap-3 text-3xl font-bold text-sky-400 mb-8">
         <Settings2 size={32} className="text-sky-300" />Specifications</h2>

          <div className="space-y-5">

            {Object.entries(product.specifications).map(([key, value]) => (

              <div
                key={key}
                className="flex justify-between items-center border-b border-white/10 pb-3"
              >

                <span className="text-cyan-300 font-semibold text-xl">

                  {key}

                </span>

                <span className="text-slate-200 font-medium text-right text-xl">

                  {value}

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Description */}

      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 border border-violet-400/20 rounded-3xl p-8 shadow-2xl">

        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mb-5" />

        <h2 className="flex items-center gap-3 text-3xl font-bold text-violet-300 mb-6">
        <FileText size={32} className="text-violet-300" />Description</h2>
        
        <p className="text-lg text-slate-300 leading-9 tracking-wide">

          {product.description}

        </p>

      </div>

    </div>

  );
}

export default ProductSpecs;