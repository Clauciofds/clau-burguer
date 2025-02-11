import { useLocation } from 'react-router-dom';
import logoImage from '../../assets/cubos-burger.png';
import styles from './header.module.css';

export function Header(): JSX.Element {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <a href='/'>
          <img src={logoImage} className={styles.logoImage} alt="logo cubos burger" />
        </a>
        {location.pathname === '/cart' ? (
          <a href='/' className='styles.goToCart'>
            Cardápio
          </a>
        ) : (
          <a href='/cart' className='styles.goToCart'>
            Carrinho
          </a>
        )}
      </div>
    </header>
  )
}