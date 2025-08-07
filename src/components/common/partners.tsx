import Image from "next/image";

import { Card } from "../ui/card";

const Partners = () => {
  return (
    <>
      <div className="px-5">
        <Card>
          <div className="space-y-6">
            <h3 className="px-5 font-semibold">Marcas Parceiras</h3>
            <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
              <Image
                src="/nikeLogo.svg"
                alt="Nike"
                height={0}
                width={0}
                sizes="100vw"
                className="w-[6rem]"
              />
              <Image
                src="/adidasLogo.svg"
                alt="Adidas"
                height={0}
                width={0}
                sizes="100vw"
                className="w-[6rem]"
              />
              <Image
                src="/pumaLogo.svg"
                alt="Puma"
                height={0}
                width={0}
                sizes="100vw"
                className="w-[6rem]"
              />
              <Image
                src="/nbLogo.svg"
                alt="New Balance"
                height={0}
                width={0}
                sizes="100vw"
                className="w-[6rem]"
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Partners;
