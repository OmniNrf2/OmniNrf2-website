export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  iconName: string; // Using string to map to Lucide icons dynamically or manually
  imageParams: string; // For picsum
}

export interface TechnologyStep {
  title: string;
  description: string;
  iconName: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}