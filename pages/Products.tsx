import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import * as LucideIcons from 'lucide-react';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');

  // Extract unique categories
  const categories = ['全部', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    return selectedCategory === '全部'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">全线产品</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            从生殖健康到脏器养护，我们的产品覆盖生命健康的每一个关键环节。
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-brand-600 text-white shadow-md transform scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-brand-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const IconComponent = (LucideIcons as any)[product.iconName] || LucideIcons.Package;

            return (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100 group">
                <div className="h-48 overflow-hidden relative rounded-t-xl">
                   <img
                    src={`https://picsum.photos/seed/${product.imageParams}/500/500`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                     <span className="text-white text-sm font-medium">查看详情</span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-brand-50 rounded-lg text-brand-600">
                        <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide bg-brand-50 px-2 py-1 rounded-full">
                        {product.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-brand-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>

                  <button className="w-full mt-auto border border-brand-200 text-brand-700 font-medium py-2 rounded-lg hover:bg-brand-50 hover:border-brand-300 transition-colors">
                    了解更多
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            暂无相关产品
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;