import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {productsArray} from '../ProductsStore'
import { ProductsCard } from '../components/ProductsCard'

export const Store = () => {
  return (
    <>
    <h1 align='center' className='p-3'>Welcome to the store !</h1>
    <Row xs={1} md={3} className='g-4 p-0'>
        {productsArray.map((product, idx) => (
            <ProductsCard key={idx} product={product} />
        ))}
        
    </Row>
    </>
  )
}
