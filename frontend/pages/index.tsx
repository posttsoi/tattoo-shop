import React from 'react';
import { NextSeo } from 'next-seo';
import { serialize, fork, allSettled } from 'effector/fork';

import { Products } from '../src/features/products';
import { PromoBlock } from '../src/features/promo';
import { root } from '../src/core/root';
import { getAllProductsFx } from '../src/core/products/list';

export const getServerSideProps = async () => {
  const scope = fork(root);

  await allSettled(getAllProductsFx, { scope });

  return {
    props: {
      values: serialize(scope),
    },
  };
};

export default function Home() {
  return (
    <>
      <NextSeo
        title="Jeune Pokes"
        description="Jeune Pokes - тут можно выбрать себе клевый скетч и сделать с ним тату! А еще можно заказать клевую кастомную футболку или стикер!"
      />
      <PromoBlock />
      <Products />
    </>
  );
}
