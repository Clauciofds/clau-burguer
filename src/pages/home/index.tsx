
import { useLoaderData } from 'react-router-dom';
import { Product } from '../../components/Product';
import styles from './home.module.css';
import { IProduct } from '../../interfaces/product.interface';

export function Home(): JSX.Element {
  const products = useLoaderData() as IProduct[];
  const hamburguer = products.filter(product => product.category === 'hamburguer');
  const drinks = products.filter(product => product.category === 'bebidas');

  return (
    <main className='main__container container'>
      <section className={styles.products}>
        <h1 className={styles.products__title}>Hamburguer</h1>
        <div className={styles.products__body}>
          {hamburguer.map(product => <Product item={product} key={product.id} />)}
        </div>
      </section>
      <hr className={styles.space} />
      <section className={styles.products}>
        <h1 className={styles.products__title}>Bebidas</h1>
        <div className={styles.products__body}>
          {drinks.map(product => <Product item={product} key={product.id} />)}
        </div>
      </section>
    </main>
  )
}