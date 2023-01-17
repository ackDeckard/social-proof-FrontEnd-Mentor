import Image from "next/image";
import React from "react";

function BuyersCards({ title, content, imgUrl }) {
  return (
    <article className="m-6 p-7 bg-veryDarkMagenta rounded-lg xl:h-52 xl:m-0 xl:w-full">
      <div className="flex gap-4 mb-5">
        <Image
          src={`${imgUrl}`}
          width="0"
          height="0"
          unoptimized={true}
          alt=""
          className="w-10 h-10 object-cover rounded-full"
        />

        <div>
          <p className="text-lightGrayishMagenta">{title}</p>
          <p className="-mt-1 text-softPink">Verified Buyer</p>
        </div>
      </div>

      <p className="text-lightGrayishMagenta leading-6 pr-5">
        &#8220;{content}&#8220;
      </p>
    </article>
  );
}

export default BuyersCards;
