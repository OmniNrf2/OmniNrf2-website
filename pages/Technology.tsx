import React from 'react';
import { TECH_STEPS } from '../constants';
import * as LucideIcons from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      {/* Header */}
      <div className="bg-brand-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-brand-900 mb-4">核心技术</h1>
          <p className="text-xl text-brand-700 max-w-3xl mx-auto">
            OmniNrf2 致力于生物科技的前沿探索，通过创新的靶向发酵技术与 Nrf2 通路激活机制，重新定义细胞营养。
          </p>
        </div>
      </div>

      {/* Detail Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {TECH_STEPS.map((step, index) => {
            // Dynamically get icon
            const IconComponent = (LucideIcons as any)[step.iconName] || LucideIcons.Activity;

            return (
              <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                     <img
                      src={`https://picsum.photos/seed/tech${index}/800/600`}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                        <IconComponent className="h-10 w-10 mb-2 opacity-80" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2">Step 0{index + 1}</h3>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{step.title}</h2>
                  <div className="w-16 h-1 bg-brand-500 mb-8 rounded-full"></div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Technology;