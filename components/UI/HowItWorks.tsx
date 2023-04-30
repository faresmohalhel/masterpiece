import * as Icon from "@tabler/icons-react";
import SubTitle from "./SubTitle";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-24 text-primary-text">
      <SubTitle title="How it works" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex flex-col gap-3 max-w-sm p-12 text-lg">
          <Icon.IconInputSearch size={48} />
          <span className="font-bold">1. Find a product/service</span>
          <p className="font-thin">
            Find a product/service you would like to know more about.
          </p>
        </div>
        <div className="flex flex-col gap-3 max-w-sm p-12 text-lg">
          <Icon.IconBulb size={48} />
          <span className="font-bold">
            2. Read our experts review and rating.
          </span>
          <p className="font-thin">
            Our team of experts is always on the lookout to deliver the highest
            quality and accurate reviews
          </p>
        </div>
        <div className="flex flex-col gap-3 max-w-sm p-12 text-lg">
          <Icon.IconMoodHeart size={48} />
          <span className="font-bold">3. Save time, effort and pain</span>
          <p className="font-thin">
            You will be at ease knowing that the product or service you are
            buying is of top quality and previously tested by a team of experts
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
