import styles from './not-found-page.module.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray">
      <h1 className={`${styles.heading} ${styles['page--not-found']}`}>404. Page not found</h1>;
    </div>
  );
}

export default NotFoundPage;
