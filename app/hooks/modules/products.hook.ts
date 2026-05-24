import { useAppStore } from "$store/app-store.store";
import { IProductDetails } from "$types/data.types";
import apiServices from "$utils/api-services";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useProducts = (searchQuery?: string) => {

    const products = useAppStore((state) => state.products);
    const cart = useAppStore((state) => state.cart);
    const setProducts = useAppStore((state) => state.setProducts);

    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);

    async function fetchProducts(pageNo = 1) {
        setLoading(true);

        const params = {
            limit: 10,
            skip: (pageNo - 1) * 10,
            select: 'id,title,price,discountPercentage,rating,tags,reviews,thumbnail'
        }

        const res = await apiServices.fetchProducts(params);
        if (res) {
            setProducts(res.products, pageNo);
            if (res.products.length < res.limit) {
                setHasMore(false);
            }
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProducts(1);
    }, []);

    const handleLoadMore = useCallback(() => {
        if (hasMore && !loading) {
            fetchProducts(page + 1);
            setPage((prevPage) => prevPage + 1);
        }
    }, [page, hasMore, loading]);

    const handleRefresh = useCallback(() => {
        setPage(1);
        fetchProducts(1);
        setHasMore(true);
    }, []);

    const productsWithSearch = useMemo(() => {
        const query = searchQuery?.trim().toLowerCase();
        if (query && query.length > 0) {
            return products.filter((product) => product.title.toLowerCase().includes(query));
        }
        return products;
    }, [searchQuery, products]);

    return {
        products: productsWithSearch,
        cartLength: cart.length,
        loading,
        page,
        hasMore,
        handleLoadMore,
        handleRefresh
    }
}

export const useProduct = (id: number) => {

    const products = useAppStore((state) => state.products);
    const cart = useAppStore((state) => state.cart);
    const addToCart = useAppStore((state) => state.addToCart);
    const increaseProductQuantity = useAppStore((state) => state.increaseProductQuantity);
    const decreaseProductQuantity = useAppStore((state) => state.decreaseProductQuantity);

    const hasCartItem = useMemo(() => cart.some((item) => item.id === id), [cart, id]);

    const productFallback = useMemo(() => {
        return products.find((product) => product.id === id) as Partial<IProductDetails>;
    }, [products, id]);

    const [product, setProduct] = useState<Partial<IProductDetails> | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchProduct = useCallback(async () => {
        setLoading(true);
        const res = await apiServices.fetchProduct(id);
        if (res) {
            setProduct(res);
        } else {
            setProduct(productFallback);
        }
        setLoading(false);
    }, [id]);

    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    return {
        product: product ?? productFallback,
        loading,
        cart,
        hasCartItem,
        addToCart,
        increaseProductQuantity,
        decreaseProductQuantity
    }
}
