import React from 'react';
import {ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductInfo, ProductImg, ProductTitle, ProductDesc, ProductPrice, ProductButton} from './Products'

export default function Products({heading, data}) {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((item, index)=>(
                    <ProductCard key={index}>
                        <ProductImg  src={item.img} alt={item.alt}/>
                        <ProductInfo>
                            <ProductTitle>{item.name}</ProductTitle>
                        </ProductInfo>
                        <ProductDesc>{item.desc}</ProductDesc>
                        <ProductPrice>{item.price}</ProductPrice>
                        <ProductButton>{item.button}</ProductButton>
                    </ProductCard>
                ))}
            </ProductWrapper>
        </ProductsContainer>
    )
}
