import React from 'react';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-brand-600 p-1.5 rounded-lg">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">
                Omni<span className="text-brand-400">Nrf2</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              专注于提供全面营养补充剂的细胞营养公司。采用创新的靶向发酵技术激活 Nrf2 通路，引领健康新未来。
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/" className="hover:text-brand-400 transition-colors">关于我们</a></li>
              <li><a href="#/technology" className="hover:text-brand-400 transition-colors">核心技术</a></li>
              <li><a href="#/products" className="hover:text-brand-400 transition-colors">产品中心</a></li>
              <li><a href="#/" className="hover:text-brand-400 transition-colors">新闻动态</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">联系方式</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-500 shrink-0" />
                <span>中国上海市徐汇区斜土路2899号<br/> A座306室</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-500 shrink-0" />
                <span>8621-64726931</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-500 shrink-0" />
                <span>contact@omninrf2.com</span>
              </li>
            </ul>
          </div>

          <div>
             <h3 className="text-white font-semibold mb-4">关注我们</h3>
             <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-700 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">We</span>
               </div>
               <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-700 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">In</span>
               </div>
             </div>
             <p className="mt-4 text-xs text-slate-500">
               © 2024 OmniNrf2. All rights reserved.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
