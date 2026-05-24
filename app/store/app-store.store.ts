import { IProduct } from "$types/data.types";
import { create } from "zustand";

type StoreState = {
    products: IProduct[],
    cart: IProduct[]
}

type StoreActions = {
    setProducts: (products: IProduct[], page?: number) => void;
    addToCart: (id: number) => void;
    removeFromCart: (id: number) => void;
}

type Store = StoreState & StoreActions;

export const useAppStore = create<Store>((set, get) => ({
    products: [],
    cart: [],
    setProducts: (products: IProduct[], page = 1) => {
        if (page > 1) {
            set((state) => ({ products: [...state.products, ...products] }))
        } else {
            set({ products })
        }
    },
    addToCart: (id: number) => {
        const { products } = get();
        const item = products.find((product) => product.id === id)
        if (item) {
            set((state) => ({ cart: [...state.cart, item] }));
        }
    },
    removeFromCart: (id) => {
        const { cart } = get();
        const item = cart.find((p) => p.id === id)
        if (item) {
            set((state) => ({ cart: state.cart.filter((p) => p.id !== id) }));
        }
    }
}))