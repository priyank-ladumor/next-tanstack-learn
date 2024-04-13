"use client"
import { useQuery, useIsFetching } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const { data: Products, isLoading } = useQuery<any>({
    queryKey: ["product"],
    queryFn: () =>
      axios.get("https://dummyjson.com/products")
    .then((res) => res.data),
    select: (product) => product?.products.map((p: {id: number, title: string}) => ({ id: p.id, title: p.title }))
  })
 
  const { data: Users } = useQuery<any>({
    queryKey: ["user"],
    queryFn: () =>
      axios.get("https://dummyjson.com/users")
    .then((res) => res.data),
    select: (user) => user?.users.map((p: {id: number, username: string}) => ({ id: p.id, username: p.username })),
    enabled: !!Products,
  })

  if (isLoading) {
    return <p>loading..</p>
  }
  
  return (
    <>
      {Products?.slice(0, 5).map((product: {id: number, title: string}) => {
        return (
          <>
            <h1>{product.title}</h1>
          </>
        )
      })}
      {Users?.slice(0, 5).map((user: {id: number, username: string}) => {
        return (
          <>
            <h1>{user.username}</h1>
          </>
        )
      })}
    </>
  );
}
