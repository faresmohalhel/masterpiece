import ReviewBox from "./ReviewBox";
import SubTitle from "./SubTitle";

const RecentUserReviews = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 pb-12 px-12">
      <SubTitle title="Recent User Reviews" />

      <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-3">
        <ReviewBox
          image="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
          rating={4}
          description="i really enjoyed the product would definitely try it again"
        />
        <ReviewBox
          image="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
          rating={4}
          description="i really enjoyed the product would definitely try it again"
        />
        <ReviewBox
          image="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
          rating={4}
          description="i really enjoyed the product would definitely try it again"
        />
        <ReviewBox
          image="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
          rating={4}
          description="i really enjoyed the product would definitely try it again"
        />
        <ReviewBox
          image="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
          rating={4}
          description="i really enjoyed the product would definitely try it again"
        />
        <ReviewBox
          image="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
          rating={4}
          description="i really enjoyed the product would definitely try it again"
        />
        <ReviewBox
          image="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
          rating={4}
          description="i really enjoyed the product would definitely try it again"
        />
        <ReviewBox
          image="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
          rating={4}
          description="i really enjoyed the product would definitely try it again"
        />
      </div>
    </div>
  );
};

export default RecentUserReviews;
