export const load = async ({ fetch, params }) => {
    const getProducts = async () => {
        const req = await fetch(`https://six-x.shop/wp-json/wc/store/products?_embed&per_page=25`)
        const res = await req.json()
        let p = res.filter((i) => i.id == params.id)
        return p 
        
    }
    const ctx = params
    
    return {
        params: ctx,
        product: getProducts()
    }
}