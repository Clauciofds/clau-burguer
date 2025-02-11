import drinksImage from '../../assets/coca-cola.png';
import hamburgerImage from '../../assets/hamburger.png';
import { ProductInCartProps } from '../../interfaces/productCart.interface';
import { convertToReais } from '../../utils/formatPrice';
import styles from './productInCart.module.css';

export function ProductInCart({ item, deleteItem, updateQuantityProductInCart }: Readonly<ProductInCartProps>): JSX.Element {
  const { title, price, quantity, category } = item;

  return (
    <div className={styles.productInCart}>
      <div className={styles.productInCart__data}>
        {category === 'hamburguer' ?
          <img
            src={hamburgerImage}
            alt="hamburguer"
            className={styles.productInCart__image} />
          :
          <img
            src={drinksImage}
            alt="hamburguer"
            className={styles.productInCart__image} />
        }

        <div className={styles.productInCart__info}>

          <h3 className={styles.productInCart__title}>
            {title}
          </h3>

          <h2 className={styles.productInCart__price}>
            {convertToReais(price)}
          </h2>
        </div>
      </div>
      <select
        defaultValue={quantity}
        onChange={(event) => updateQuantityProductInCart(event, item)}
        className={styles.productInCart__input}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button
        onClick={() => deleteItem(item)}
        className={`${styles.productInCart__button} button--primary button`}>
        excluir
      </button>
    </div>
  )
}