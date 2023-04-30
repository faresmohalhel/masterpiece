import SearchCard from "@/components/UI/SearchCard";
import SubTitle from "@/components/UI/SubTitle";

const Search = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-6">
      <SubTitle title="Results for pizza" />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
    </div>
  );
};

export default Search;
