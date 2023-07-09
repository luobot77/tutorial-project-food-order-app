export interface IMeal {
  id: string;
  name: string;
  description: string;
  price: number;
}

export type TCartItem = Omit<IMeal, 'description'> & { amount: number };
