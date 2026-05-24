import AsyncStorage from '@react-native-async-storage/async-storage';
import { IProduct } from "$types/data.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type StoreState = {
    products: IProduct[],
    cart: IProduct[]
}

type StoreActions = {
    setProducts: (products: IProduct[], page?: number) => void;
    addToCart: (id: number) => void;
    removeFromCart: (id: number) => void;
    increaseProductQuantity: (id: number) => void;
    decreaseProductQuantity: (id: number) => void;
}

type Store = StoreState & StoreActions;

export const useAppStore = create<Store>()(
    persist(
        (set, get) => ({
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
                    set((state) => ({ cart: [...state.cart, { ...item, quantity: 1 }] }));
                }
            },
            removeFromCart: (id) => {
                const { cart } = get();
                const item = cart.find((p) => p.id === id)
                if (item) {
                    set((state) => ({ cart: state.cart.filter((p) => p.id !== id) }));
                }
            },
            increaseProductQuantity: (id: number) => {
                set((state) => ({ cart: state.cart.map((p) => p.id === id ? { ...p, quantity: (p.quantity || 0) + 1 } : p) }));
            },
            decreaseProductQuantity: (id: number) => {
                set((state) => ({ cart: state.cart.map((p) => p.id === id ? { ...p, quantity: (p.quantity || 0) - 1 } : p) }));
            }
        }),
        {
            name: 'app-store',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
)