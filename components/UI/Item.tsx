import * as Icon from "@tabler/icons-react";

type ItemProps = {
  iconName: string;
  description: string;
};

const Item: React.FC<ItemProps> = (props) => {
  return (
    <div className="text-primary-text py-6 px-12 shadow-md">
      <span>{props.description}</span>
    </div>
  );
};

export default Item;
