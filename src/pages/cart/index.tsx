import { ChangeEvent, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ProductInCart } from '../../components/ProductInCart';
import { IProductInCart } from '../../interfaces/productCart.interface';
import { formatPrice } from '../../utils/formatPrice';
import { makeRequest } from '../../utils/makeRequest';
import styles from './cart.module.css';

export function Cart(): JSX.Element {
  const initilProductsInCart: IProductInCart[] = useLoaderData() as IProductInCart[];
  const [productsInCart, setProductsInCart] = useState<IProductInCart[]>(initilProductsInCart);
  const [total, setTotal] = useState<string>('R$ 0,00');

  async function deleteItem(productInCart: IProductInCart) {
    const aproved = confirm('Deseja excluir o item?');
    if (aproved) {
      await makeRequest(`/cart/${productInCart.id}`, 'DELETE');
      setProductsInCart(productsInCart.filter(
        product => product.id !== productInCart.id
      ));
    }
  }

  function calculateTotal() {
    const total = productsInCart.reduce(
      (acc: number, product: IProductInCart) =>
        acc + product.price * product.quantity
      , 0);
    setTotal(formatPrice(total));
  }

  async function updateQuantityProductInCart(
    event: ChangeEvent<HTMLSelectElement>,
    productInCart: IProductInCart) {
    const quantity = event.target.value;
    await makeRequest(`/cart/${productInCart.id}`, 'PUT', {
      ...ProductInCart,
      quantity: Number(quantity)
    });

    const newProductsInCart = productsInCart.filter(product => {
      if (product.id === productInCart.id) {
        product.quantity = Number(quantity);
      }
      return product;
    });
    setProductsInCart(newProductsInCart);
  }

  useEffect(() => { calculateTotal() }, [productsInCart]);
  return (
    <main className='main__container container'>
      <section className={styles.products}>
        <h1 className={styles.products__title}>Carrinho</h1>
        <div className={styles.products__body}>
          {productsInCart.map(product =>
            <ProductInCart
              key={product.id}
              item={product}
              deleteItem={deleteItem}
              updateQuantityProductInCart={updateQuantityProductInCart} />)}
        </div>
        <h1 className={styles.products__total}>Total: {total}</h1>
      </section>
    </main>
  )
}
