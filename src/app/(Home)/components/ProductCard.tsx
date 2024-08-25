
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/custom/ui/card';
import React from 'react'
import Image from 'next/image';

export type Product = {
    id:string;
    name:string;
    description:string;
    image:string;
    price:number;
}

type PropTypes ={product : Product};


const ProductCard = ({product }:PropTypes) => {
  return (
    <Card className='border-none rounded'>
  <CardHeader className='flex items-center justify-center'>
    <Image alt ="pizza-image" width={150} height={150} src={product.image} />
  </CardHeader>
  <CardContent>
    <h2 className='text-xl font-bold'>{product.name}</h2>
    <p className='mt-2'>{product.description}</p>
  </CardContent>
  <CardFooter className='flex items-center justify-between mt-4'>
    <p>
      <span>From </span>
      <span className='font-bold'>₹{product.price}</span>
    </p>

    <button className='text-orange-500 bg-orange-200 hover:bg-orange-300  
    px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 '>
      Choose
      </button>
  </CardFooter>
</Card>

  )
}

export default ProductCard 