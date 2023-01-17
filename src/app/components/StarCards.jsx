import Image from "next/image";
import React from "react";

function StarCards({ stars, company }) {
  const items = [...Array(stars)].map((x) => 0);

  let itemList = items.map((item, index) => {
    return (
      <Image
        key={index}
        src="/icon-star.svg"
        width="0"
        height="0"
        alt=""
        className="w-[14px] h-[14px] "
      />
    );
  });

  return (
    <article
      className="
      flex flex-col items-center justify-center bg-lightGrayishMagenta m-6 py-4 rounded-lg
      xl:flex-row xl:gap-4 xl:w-[420px] xl:m-2
      "
    >
      <div className="flex gap-2">{itemList}</div>
      <p className="pt-2 xl:pt-1 text-veryDarkMagenta font-bold">
        Rated {stars} {stars > 2 ? "Stars" : "Star"} in {company}
      </p>
    </article>
  );
}

export default StarCards;
