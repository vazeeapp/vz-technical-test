export interface Product {
  productId: number;
  categoryId: number;
  label: string;
  description: string | null;
  enabled: boolean;
  order: number;
  price1: number;
  price2: number | null;
  price3: number | null;
  price4: number | null;
  price5: number | null;
  price1Label: string | null;
  price2Label: string | null;
  price3Label: string | null;
  price4Label: string | null;
  price5Label: string | null;
  pictogramUrl: string | null;
}

interface Category {
  categoryId: number;
  parentId: number | null;
  description: string;
  order: number;
  enabled: boolean;
}

interface Menu {
  menuId: number;
  categories: Category[];
  products: Product[];
}

export as namespace API;
