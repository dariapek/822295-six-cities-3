type MarkProps = {
  containerClass?: 'place-card__mark' | 'offer__mark';
}

function Mark({containerClass} : MarkProps): JSX.Element {
  return (
    <div className={containerClass}>
      <span>Premium</span>
    </div>
  );
}

export default Mark;
