import { Fragment } from 'react';

type StarInputProps = {
  value: number;
  fieldChangeHandle: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};

const titleMap: { [key: number]: string } = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly',
};

function StarInput({ value, fieldChangeHandle }: StarInputProps): JSX.Element {
  return (
    <Fragment>
      <input
        onChange={fieldChangeHandle}
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={titleMap[value]}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

export default StarInput;
