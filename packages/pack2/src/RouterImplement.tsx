import { useRouter } from "next/router"
import { FC, ReactNode } from "react"

export const RouterImplement: FC = ({children}: {children?: Element})=>{
  const router = useRouter()
  console.log('router', router)
  return <div><>test: {children}</></div>
}