import { Product, TechnologyStep } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '卵巢抗衰细胞营养素',
    description: '专为女性设计，通过激活Nrf2通路延缓卵巢细胞衰老，维持激素平衡与生殖系统活力。',
    category: '女性健康',
    iconName: 'Flower',
    imageParams: 'nature,flower'
  },
  {
    id: 'p2',
    name: '精子修复细胞营养素',
    description: '针对男性生殖健康，修复受损生殖细胞，提升精子活力与质量。',
    category: '男性健康',
    iconName: 'Activity',
    imageParams: 'science,cell'
  },
  {
    id: 'p3',
    name: '肝脏细胞健康营养素',
    description: '强化肝脏解毒功能，促进肝细胞再生，抵御酒精与环境毒素伤害。',
    category: '脏器养护',
    iconName: 'ShieldPlus',
    imageParams: 'health,green'
  },
  {
    id: 'p4',
    name: '前列腺健康细胞营养素',
    description: '维护前列腺细胞微环境，缓解炎症，支持男性泌尿系统健康。',
    category: '男性健康',
    iconName: 'UserCheck',
    imageParams: 'men,health'
  },
  {
    id: 'p5',
    name: '肺部健康细胞营养素',
    description: '增强肺部细胞抗氧化能力，抵御空气污染，提升呼吸系统免疫屏障。',
    category: '脏器养护',
    iconName: 'Wind',
    imageParams: 'sky,air'
  },
  {
    id: 'p6',
    name: '睡眠健康营养素',
    description: '调节神经细胞功能，舒缓压力，通过自然途径改善睡眠质量。',
    category: '综合调节',
    iconName: 'Moon',
    imageParams: 'night,sleep'
  },
  {
    id: 'p7',
    name: '免疫力细胞营养素',
    description: '全面激活免疫细胞活性，构建身体坚固防线，预防疾病侵袭。',
    category: '综合调节',
    iconName: 'Zap',
    imageParams: 'energy,shield'
  },
  {
    id: 'p8',
    name: '咽喉健康营养素',
    description: '针对咽喉黏膜细胞修复，缓解干燥与不适，呵护呼吸道第一道关口。',
    category: '局部护理',
    iconName: 'Mic',
    imageParams: 'water,fresh'
  }
];

export const TECH_STEPS: TechnologyStep[] = [
  {
    title: '靶向发酵技术',
    description: '运用先进的生物工程手段，通过特定菌种对植物底物进行发酵，精准提升植物成分的生物活性，使其更易被人体细胞吸收利用。',
    iconName: 'Microscope'
  },
  {
    title: 'Nrf2 通路激活',
    description: '核心机制在于激活体内的“主抗氧化开关”——Nrf2通路。这不仅能清除自由基，更能调动细胞自身的抗氧化防御系统。',
    iconName: 'Dna'
  },
  {
    title: '药食同源配方',
    description: '严选独特的药食同源植物作为发酵底物。通过多级复合发酵技术，富集天然小分子细胞营养物质，安全高效。',
    iconName: 'Leaf'
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI Health Consultant for OmniNrf2, a cellular nutrition company.
Your goal is to help users understand our products and technology in a professional, empathetic, and scientific tone (in Chinese).

Company Core:
- Name: OmniNrf2
- Focus: Cellular nutrition, Nrf2 pathway activation, Targeted Fermentation.
- Tech: Increases bioactivity, uses medicinal/edible plants, multi-stage fermentation.

Products (Recommend these based on user issues):
1. Ovarian Anti-aging (卵巢抗衰): For women's aging and hormonal balance.
2. Sperm Repair (精子修复): For male fertility and vitality.
3. Liver Health (肝脏细胞健康): For detox and liver regeneration.
4. Prostate Health (前列腺健康): For male urinary/prostate health.
5. Lung Health (肺部健康): For respiratory defense and anti-pollution.
6. Sleep Health (睡眠健康): For insomnia and stress relief.
7. Immunity (免疫力): For general disease prevention.
8. Throat Health (咽喉健康): For throat comfort and mucosa repair.

If a user asks about pricing or medical advice, politely state that you are a consultant and they should contact our sales team or a doctor for specific medical treatments. Focus on the *nutritional* support aspect.
Answer in Chinese.
`;