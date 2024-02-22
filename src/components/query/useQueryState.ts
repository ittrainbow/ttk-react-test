import { Product } from '@/types'
import { useQuery } from 'react-query'

export const fetchProducts = async () =>
  await fetch('https://fakestoreapi.com/products/').then((response) =>
    response.json()
  )

type QueryType = {
  isLoading: boolean
  isFetching: boolean
  data: Product[] | undefined
}

export const useQueryState = () => {
  const { isLoading, isFetching, data }: QueryType = useQuery(
    'products',
    fetchProducts,
    {
      cacheTime: 360000,
      staleTime: 60000,
      refetchOnMount: true,
      refetchInterval: 60000,
      refetchIntervalInBackground: true,
      enabled: true,
    }
    // прикольный пак настроек, удобно
  )

  return { isLoading, isFetching, data }
}
