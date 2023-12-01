export const load = async ({ fetch, params }) => {
    const getProducts = async () => {
        const req = await fetch(`https://six-x.shop/wp-json/wc/store/products?_embed&per_page=50`)
        const res = await req.json()
        return res
        
    }
    const ctx = params
    
    return {
        params: ctx,
        products: getProducts()
    }
}