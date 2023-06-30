import { useContext } from "react";
import { Stats } from "./Stats";
import { TableOfItems } from "../Items/TableOfItems";
import { RefreshContext } from "../../App";
import { TableOfUsers } from "../Users/TableOfUsers";

export const Main = () => {
  const { refresh, setRefresh } = useContext(RefreshContext);
  return (
    <main className="p-4 px-8  md:ml-60 h-auto py-20 mt-2 ">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 ">
        <Stats setRefresh={setRefresh} refresh={refresh} />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <TableOfItems setRefresh={setRefresh} refresh={refresh} />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <TableOfUsers setRefresh={setRefresh} refresh={refresh} />
      </div>
    </main>
  );
};
