export type View = 'login' | 'dashboard' | 'metrics' | 'transactions' | 'config' | 'chat';

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: string;
  pin?: string;
  salary?: {
    amount: number;
    frequency: 'Semanal' | 'Quincenal' | 'Mensual';
    paymentDay: string;
  };
}

export interface Transaction {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  date: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  userAvatar: string;
  payerName: string;
}

export interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  type?: 'text' | 'chart_response';
  chartData?: any;
}