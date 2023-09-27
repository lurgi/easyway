"use client";

import { Card } from "@/components/ui/card";

import SearchModal from "./sidebar/Searchmodal";
import SideBarForm from "./sidebar/SideBarForm";

import useStore from "@/lib/store";

const SideBar = () => {
  const { isModalOpen } = useStore((state) => state);

  return (
    <div className="hidden md:flex w-[520px] flex-col h-full">
      <div className="h-[80%] p-4">
        <div className="mb-4">
          <Card>
            <SideBarForm />
          </Card>
        </div>
      </div>
      <footer>여기엔 설정과 옵션들</footer>
      {isModalOpen ? <SearchModal></SearchModal> : null}
    </div>
  );
};

export default SideBar;
