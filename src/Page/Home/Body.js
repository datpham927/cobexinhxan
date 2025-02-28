import React from 'react'
import ProductItem from '../../components/ProductItem'
import { PRODUCTS } from '../../config/product'

const Body = () => {
    // const [products, setProducts] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    // useEffect(() => {
    //     const fetchApi = async () => {
    //         setIsLoading(true)
    //         const res = await getProductByCategory({ category_code: categoryCode })
    //         if (!res?.success) return
    //         setProducts(res.data)
    //         setIsLoading(false)
    //     }
    //     categoryCode && fetchApi()
    // }, [categoryCode])
    // const handleUpdateView = async (pid) => {
    //     await updateView(pid)
    // }

    return (
        <div className='w-full bg-white rounded-sm '>
            <div className='grid p-3 mobile:grid-cols-2 tablet:grid-cols-2 grid-cols-6  h-full flex-1 overflow-y-auto'>
                {PRODUCTS?.map(p =>
                    <ProductItem product={p} />
                )}
            </div>
        </div>
    )
}

export default Body
