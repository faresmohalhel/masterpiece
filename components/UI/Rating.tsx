import { ReactElement } from "react";

const Rating: React.FC<{
  stars: number;
  readonly: boolean;
  className?: string;
}> = (props) => {
  let stars: ReactElement[] = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <input
        type="radio"
        name="rating-8"
        className="mask mask-star-2 bg-orange-300"
        // checked={i + 1 === props.stars}
        readOnly={props.readonly}
      />
    );
  }

  return (
    <div className={`rating rating-sm ${props.className}`}>
      {stars.map((element) => element)}
    </div>
  );
};

export default Rating;
