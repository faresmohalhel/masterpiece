import Rating from "./Rating";
import SubTitle from "./SubTitle";
import * as Icon from "@tabler/icons-react";

const FeaturedReview = () => {
  return (
    <div className="flex flex-col justify-center items-center py-24 space-y-12">
      <SubTitle title="Featured Item" />

      <div className="flex items-center space-x-6 justify-center mx-auto w-full bg-primary-color h-48">
        <img
          src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="prodcut image"
          className="bg-cover w-auto max-h-36 rounded-md shadow-md"
        />
        <div className="lg:max-w-[25%] gap-2 flex flex-col">
          <p className="font-semibold text-xl">Car Washing Business Name</p>
          <p>
            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur.Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="flex space-x-2">
            <span className="flex space-x-2 bg">
              <Icon.IconStarFilled className="text-gold" />
              <span>4.2 Expert Review</span>
            </span>
            <span>|</span>
            <span className="flex space-x-2 bg">
              <Icon.IconStarFilled className="text-gold" />
              <span>4.1 User Review</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedReview;
