import { useAppStore } from "$store/app-store.store";
import { ISummary } from "$types/data.types";
import { useMemo } from "react";

const TAX = 0.05;
const SHIPPING = 5.0;

export const useCart = () => {
    const cart = useAppStore((state) => state.cart);
    const removeFromCart = useAppStore((state) => state.removeFromCart);

    const summary: ISummary = useMemo(() => {
        const total = cart.reduce((acc, item) => acc + Number(item.price) * (item.quantity || 0), 0);
        const discount = cart.reduce((acc, item) => acc + Number(item.price) * (item.discountPercentage / 100) * (item.quantity || 0), 0);
        const tax = total * TAX;

        return {
            total,
            discount,
            tax,
            shipping: cart.length > 0 ? SHIPPING : 0,
            grand: (total - discount) + tax + (cart.length > 0 ? SHIPPING : 0)
        }
    }, [cart])

    return { cart, removeFromCart, summary }
}