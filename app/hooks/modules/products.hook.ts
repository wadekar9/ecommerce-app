export const useProducts = (searchQuery?: string) => {

    console.log('searchQuery', searchQuery);
    return {
        products: [],
        loading: false,
        page: 1
    }
}

export const useProduct = () => {

}