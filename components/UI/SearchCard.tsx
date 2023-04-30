import Rating from "./Rating";

const SearchCard = () => {
  return (
    <div className="text-primary-text flex gap-6 border border-gray-300 rounded-md p-4 max-w-sm lg:max-w-lg">
      <img
        className="lg:w-32 w-24 object-cover rounded-md"
        src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="title"
      />
      <div className="flex flex-col gap-1">
        <div className="flex gap-4 items-center">
          <span className="font-semibold text-2xl">Joe's pizza</span>
          <Rating readonly stars={4} />
        </div>

        <p className="font-thin">
          A pizza place knows for its authentic and tasty pizza.
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
