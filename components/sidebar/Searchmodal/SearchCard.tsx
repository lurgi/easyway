import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { AddressesType } from "../Searchmodal";

interface SearchCardAttrs {
  isLoading: boolean;
  addresses: AddressesType[] | undefined;
}

const SearchCard = ({ isLoading, addresses }: SearchCardAttrs) => {
  return (
    <Card className="mt-4">
      <CardContent className="py-3 px-4 h-48">
        {isLoading ? (
          <div className="flex justify-center">
            <AiOutlineLoading3Quarters className="animate-spin" />
          </div>
        ) : addresses ? (
          addresses.length === 0 ? (
            <CardDescription>
              <p>검색 결과가 없습니다.</p>
              <p>도로명 주소 혹은 지번 주소를 정확하게 입력해주세요</p>
            </CardDescription>
          ) : (
            addresses.map((address, index) => (
              <div className="" key={index}>
                {address.jibunAddress}
              </div>
            ))
          )
        ) : (
          <CardDescription>검색어를 입력해주세요</CardDescription>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchCard;
