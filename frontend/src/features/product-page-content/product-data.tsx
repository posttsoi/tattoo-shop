import React from 'react';
import { Text, Description } from '@geist-ui/react';
import { css } from 'linaria';

import { ProductImageWithFullSize } from '../product-image';
import { Tags } from '../product-tags';
import { AddToCart } from '../add-to-cart-button';
import { beautify } from '../../../lib/beautify-ru-text';
import type { AnyProduct } from '../../domain/products';

const productPageLayout = css`
  display: flex;
  flex-flow: column nowrap;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const productDescription = css`
  font-size: 1.1rem;
  line-height: 1.25;
`;

type ProductPageProps = AnyProduct;

export const ProductData: React.FC<ProductPageProps> = ({
  title,
  image,
  description,
  categoryTitle,
  slug,
  size,
  colour,
  price,
}) => {
  return (
    <div className={productPageLayout}>
      <Text h2>{title}</Text>
      {image && (
        <ProductImageWithFullSize aspectRatio={16 / 9} src={image} alt="" />
      )}
      <Description
        title="О товаре"
        content={
          <Text className={productDescription} type="secondary">
            {beautify(description)}
          </Text>
        }
      />
      <Tags size={size} colour={colour} />
      <AddToCart category={categoryTitle} slug={slug} price={price} />
    </div>
  );
};
