import clsx from 'clsx';

type BookmarkProp = {
  isFavorite: boolean;
  blockClass: 'place-card' | 'offer';
}

interface BookmarkSize {
  width: number;
  height: number;
}

const bookmarkSize: Record<BookmarkProp['blockClass'], BookmarkSize> = {
  'place-card': {
    width: 18,
    height: 19,
  },
  'offer': {
    width: 31,
    height: 33,
  }
};

function Bookmark({isFavorite, blockClass} : BookmarkProp): JSX.Element {
  return (
    <button className={clsx(`${blockClass}__bookmark-button`, 'button')} type="button">
      <svg className={clsx(`${blockClass}__bookmark-icon`)} width={bookmarkSize[blockClass].width} height={bookmarkSize[blockClass].height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default Bookmark;
