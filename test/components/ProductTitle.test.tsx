import React from 'react';
import render from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('debe mostrar e componente con el título personalizado', () => {
    const wrapper = render.create(
      <ProductTitle
        title="Título personalizado"
        className="titulo-personalizado"
      />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el componente con el nombre del producto', () => {
    const wrapper = render.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
