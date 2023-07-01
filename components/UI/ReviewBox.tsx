import { Rating } from "@mantine/core";

const ReviewBox: React.FC<{
  username: string;
  date: string;
  rating: number;
  title: string;
  description: string;
}> = (props) => {
  return (
    <div className="border border-primary-text max-w-fit p-6 rounded-md border-opacity-50 flex flex-col gap-3">
      <div className="flex items-center justify-center gap-4">
        <div className="font-bold">{props.username}</div>
        <Rating readOnly value={props.rating} />
      </div>
      <span className="text-primary-text">{props.description}</span>
    </div>
  );
};

export default ReviewBox;
