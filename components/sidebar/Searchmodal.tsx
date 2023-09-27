"use client";

import { Button } from "@/components/ui/button";
import { AiOutlineClose, AiOutlineLoading3Quarters } from "react-icons/ai";

import useStore from "@/lib/store";
import { useState } from "react";
import SearchForm from "./Searchmodal/SearchForm";
import SearchCard from "./Searchmodal/SearchCard";

type Address = {
  types: string[];
  longName: string;
  shortName: string;
  code: string;
};

export interface AddressesType {
  addressElements: Address[];
  distance: number;
  englishAddress: string;
  jibunAddress: string;
  roadAddress: string;
  x: string;
  y: string;
}

const SearchModal = () => {
  const { closeModal, modeChange } = useStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const clickClose = () => {
    modeChange(undefined);
    closeModal();
  };

  const [addresses, setAddresses] = useState<AddressesType[] | undefined>();

  return (
    <>
      <div className="w-screen h-screen z-50 absolute flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg border-2 w-screen md:w-[600px] relative">
          <Button
            variant={"ghost"}
            className="rounded-full aspect-square p-2 absolute right-8 top-6"
            onClick={clickClose}
          >
            <AiOutlineClose size={15} />
          </Button>
          <SearchForm setIsLoading={setIsLoading} setAddresses={setAddresses} />
          <SearchCard isLoading={isLoading} addresses={addresses} />
        </div>
      </div>
      <div className="hidden md:flex w-screen h-screen z-40 absolute bg-gray-100 opacity-50 backdrop-blur-sm"></div>
    </>
  );
};

export default SearchModal;
