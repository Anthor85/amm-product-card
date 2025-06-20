import React from 'react';
import render from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('debe mostrar el componente con la imagen', () => {
    const wrapper = render.create(<ProductImage img="https://hola.jpg" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el componente con la imagen del producto', () => {
    const wrapper = render.create(
      <ProductCard product={product2}>
        {() => (
          <>
            <ProductImage />
          </>
        )}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
