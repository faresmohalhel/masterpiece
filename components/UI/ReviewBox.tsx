import Rating from "./Rating";

const ReviewBox: React.FC<{
  image: string;
  rating: number;
  description: string;
}> = (props) => {
  return (
    <div className="border border-primary-text max-w-fit p-6 rounded-md border-opacity-50 flex flex-col gap-3">
      <div className="flex items-center justify-center gap-4">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src={props.image} />
          </div>
        </div>
        <Rating readonly stars={4} />
      </div>
      <span className="text-primary-text">{props.description}</span>
    </div>
  );
};

export default ReviewBox;
