# AMM-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Antonio Macián

## Patata

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'amm-product-card';
```

```
 <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 9,
          maxCount: 13,
        }}
      >
        {({ count, isMaxCountReached, increaseBy, reset }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```