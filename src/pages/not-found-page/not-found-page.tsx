import clsx from 'clsx';
import styles from './not-found-page.module.css';
import Header from '@/components/header/header';

function NotFoundPage(): JSX.Element {
  return (
    <div className={clsx('page', 'page--gray', styles['page--not-found'])}>
      <Header />
      <h1 className={styles.heading}>404. Page not found</h1>;
    </div>
  );
}

export default NotFoundPage;
