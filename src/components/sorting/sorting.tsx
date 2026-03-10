import { SortingOptionL10n, SortingOptions } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getSortingOption } from '@/store/app/app.selectors';
import { changeSortingOption } from '@/store/app/app.slice';
import clsx from 'clsx';
import { useState } from 'react';

function Sorting(): JSX.Element {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const activeOption = useAppSelector(getSortingOption);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span onClick={() => setIsOpen(!isOpen)} className="places__sorting-type" tabIndex={0}>
        {SortingOptionL10n[activeOption]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={clsx('places__options places__options--custom', isOpen && 'places__options--opened')}>
        {SortingOptions.map((option) => (
          <li
            key={option}
            className={clsx('places__option', (option === activeOption) && 'places__option places__option--active')}
            tabIndex={0}
            onClick={() => {
              setIsOpen(false);
              dispatch(changeSortingOption(option));
            }}
          >
            {SortingOptionL10n[option]}
          </li>)
        )}
      </ul>
    </form>
  );
}

export default Sorting;
