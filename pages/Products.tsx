import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import * as LucideIcons from 'lucide-react';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const categories = ['全部', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    return selectedCategory === '全部'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-100 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">小分子细胞营养素系列</h1>
            <p className="text-slate-500 font-medium">健康，从养护好细胞开始</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                  selectedCategory === category
                    ? 'bg-brand-500 text-white shadow-lg'
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-brand-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredProducts.map((product) => {
            const IconComponent = (LucideIcons as any)[product.iconName] || LucideIcons.Package;

            return (
              <div key={product.id} className="bg-white rounded-lg shadow-xl overflow-hidden border border-slate-200 flex flex-col md:flex-row min-h-[400px]">
                {/* Product Box Front Style */}
                <div className="flex-grow p-8 flex flex-col relative">
                  <div className="absolute top-0 left-0 w-full h-2 bg-brand-500"></div>
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                       <span className="text-brand-500 font-bold text-3xl tracking-tight leading-none mb-1">
                         {product.name.split(' ')[0]}
                       </span>
                       <span className="text-slate-400 text-xs font-medium tracking-widest uppercase">
                         TM Small Molecule Nutrients
                       </span>
                       <span className="text-slate-600 text-sm mt-1">小分子植物原液</span>
                    </div>
                    <div className="text-brand-500">
                       <IconComponent className="h-10 w-10 opacity-50" />
                    </div>
                  </div>

                  <div className="mt-8 space-y-6 flex-grow">
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2">
                        <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                        Natural plants Fermentation
                      </h4>
                      <p className="text-xs text-slate-500 pl-4">天然植物发酵，无化学合成。萃取草本精华，提升生物利用率。</p>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2">
                        <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                        Postbiotics Plant Nutrinets
                      </h4>
                      <p className="text-xs text-slate-500 pl-4">富含300多种后生元次级代谢产物，分子量低于500道尔顿，直达细胞。</p>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2">
                        <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                        Security, 0 additives
                      </h4>
                      <p className="text-xs text-slate-500 pl-4">安全，0添加，0麦麸。严选药食同源，纯净高效。</p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-6 flex justify-between items-end">
                    <div className="text-[10px] text-slate-400 leading-tight">
                       German & China Patents Protected<br/>
                       Biotechnology Excellence
                    </div>
                    <div className="text-right">
                       <p className="text-xs font-bold text-slate-800">净含量 (Net Volume)</p>
                       <p className="text-lg font-bold text-brand-600">375ml (25ml X 15)</p>
                    </div>
                  </div>
                </div>

                {/* Sidebar Specs (The nutrition facts side of the box) */}
                <div className="w-full md:w-64 bg-slate-50 border-l border-slate-200 p-6">
                  <h3 className="text-xs font-bold text-slate-600 mb-4 pb-2 border-b border-slate-200 uppercase tracking-widest">
                    营养信息 / Facts
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold mb-1">主要功能</p>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {product.description.split('。')[0]}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold mb-1">核心组分</p>
                      <div className="flex flex-wrap gap-1">
                         {product.description.split('：')[1]?.split('，').map(ing => (
                           <span key={ing} className="px-2 py-0.5 bg-brand-100 text-brand-700 text-[10px] rounded-md font-bold">
                             {ing}
                           </span>
                         ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <div className="flex justify-between items-center text-[10px] text-slate-500 mb-1">
                        <span>Energy</span>
                        <span>172kJ / 100g</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-slate-500 mb-1">
                        <span>Protein</span>
                        <span>1.2g</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-slate-500 mb-1">
                        <span>Dalton Size</span>
                        <span className="text-brand-600 font-bold">&lt; 500</span>
                      </div>
                    </div>

                    <div className="pt-8">
                       <LucideIcons.QrCode className="h-12 w-12 text-slate-300 mx-auto" />
                       <p className="text-[8px] text-center text-slate-400 mt-2 uppercase">Scan to Verify</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
