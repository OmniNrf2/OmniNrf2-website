import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, ShieldCheck, Sprout } from 'lucide-react';
import { PRODUCTS, TECH_STEPS } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 3); // Show top 3

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/1920/1080?grayscale&blur=2"
            alt="Cellular Science Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              通过 <span className="text-brand-400">靶向发酵</span><br />
              激活细胞新生力量
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              OmniNrf2 专注于细胞营养，利用前沿生物技术激活 Nrf2 通路，增强机体抗氧化能力与免疫功能，为您开启健康新篇章。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-brand-900 bg-brand-400 hover:bg-brand-300 transition-colors"
              >
                探索产品
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/technology"
                className="inline-flex items-center px-8 py-3 border border-slate-500 text-base font-medium rounded-full text-white hover:bg-white/10 transition-colors"
              >
                了解技术
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">以科学定义营养</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              我们将传统药食同源植物与现代靶向发酵技术完美融合，创造出高效的细胞营养解决方案。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sprout className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">靶向发酵技术</h3>
              <p className="text-slate-600 leading-relaxed">
                利用特定菌种对植物底物进行发酵，精准提升生物活性，直达细胞需求。
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Nrf2 通路激活</h3>
              <p className="text-slate-600 leading-relaxed">
                重启体内抗氧化总开关，清除自由基，从细胞层面修复损伤，延缓衰老。
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">特殊植物配方</h3>
              <p className="text-slate-600 leading-relaxed">
                甄选独特药食同源植物，通过多级复合发酵富集天然小分子，安全高效。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Teaser */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">明星产品</h2>
              <p className="mt-2 text-slate-600">针对不同健康需求的专业解决方案</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center text-brand-700 font-medium hover:text-brand-800">
              查看全部 <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 overflow-hidden relative">
                   <img
                    src={`https://picsum.photos/seed/${product.imageParams}/600/400`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand-800 uppercase tracking-wide">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-brand-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                    {product.description}
                  </p>
                  <Link to="/products" className="text-brand-600 font-medium text-sm hover:underline">
                    了解详情
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
             <Link to="/products" className="inline-flex items-center text-brand-700 font-medium">
              查看全部 <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;