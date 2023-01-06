import { useRouter } from "next/router"

export const RouterImplement = ({children}: {children?: Element})=>{
  const router = useRouter()
  console.log('router', router.asPath)
  return <div><>test: {children}</></div>
}