import hamburgerImage from '../../assets/hamburger.png';
import drinksImage from '../../assets/coca-cola.png';
import { IProduct, ProductProps } from '../../interfaces/product.interface';
import styles from './product.module.css';
import { convertToReais } from '../../utils/formatPrice';
import { makeRequest } from '../../utils/makeRequest';
import { IProductInCart } from '../../interfaces/productCart.interface';


export function Product({ item }: Readonly<ProductProps>): JSX.Element {

  async function verifyProductInCart(product: IProduct): Promise<IProductInCart[]> {
    const productsInCart = await makeRequest('/cart', 'GET') as IProductInCart[];
    const existProductInCart = productsInCart.filter(item => item.idProduct === product.id);

    return existProductInCart
  }

  async function addProductToCart(product: IProduct) {
    const productInCart = await verifyProductInCart(product);
    if (productInCart.length > 0) {
      await makeRequest(`/cart/${productInCart[0].id}`, 'PUt', {
        ...productInCart[0],
        quantity: productInCart[0].quantity + 1
      })

      alert('Produto adicionado ao carrinho');

      return;

    } else {
      const productInCart = {
        id: crypto.randomUUID(),
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
        idProduct: product.id,
        quantity: 1
      }

      await makeRequest('/cart', 'POST', productInCart);

      alert('Produto adicionado ao carrinho');
    }
  }

  const { title, description, price, category } = item;

  return (
    <div className={styles.product}>
      {category != 'bebidas' ? <img
        src={hamburgerImage}
        alt="hamburguer"
        className={styles.product__image} />
        :
        <img
          src={drinksImage}
          alt="bebida"
          className={styles.product__image} />
      }
      <h3 className={styles.product__title}>
        {title}
      </h3>
      <p className={styles.product__description}>
        {description}
      </p>
      <h2 className={styles.product__price}>
        {convertToReais(price)}
      </h2>
      <button
        onClick={() => addProductToCart(item)}
        className={`${styles.product__button} button--primary button`}>
        add ao carrinho
      </button>
    </div>
  )
}