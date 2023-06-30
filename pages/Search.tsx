import SearchCard from "@/components/UI/SearchCard";
import SubTitle from "@/components/UI/SubTitle";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Search = () => {
  const [category, setCategory] = useState("");
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState([]);

  const router = useRouter();

  useEffect(() => {
    // console.log(router.query, category, name);
    setCategory(router.query.category || "");
    setItemName(router.query.name || "");
    async function getData() {
      try {
        const res = (await axios.get("http://localhost:3000/api/items")).data;
        setItems(res.items);

        if (category != "") {
          setItems((prevItems) =>
            prevItems.filter((element) => {
              return element.category === category;
            })
          );
        }
        if (itemName != "") {
          setItems((prevItems) =>
            prevItems.filter((element) => {
              return element.name.includes(itemName);
            })
          );
        }

        console.log(items);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, [router.query, category, itemName]);

  return (
    <div className="flex flex-col items-center justify-center py-12 gap-6 ">
      {itemName && <SubTitle title={"search results for " + itemName} />}
      {category && <SubTitle title={"categorizing for " + category} />}
      {items.length > 0 &&
        items.map((item) => {
          console.log(items);
          return <SearchCard key={item.name} item={item} />;
        })}
      {items.length == 0 && (
        <h3 className="text-3xl font-bold text-gray-700 h-screen">
          No Products Found
        </h3>
      )}
    </div>
  );
};

export default Search;
