import BuyersCards from "./components/BuyersCards";
import StarCards from "./components/StarCards";

// since i'm not running an oficial "server", it fails to fetch on build time
// const api = "http://localhost:3000/data.json";

const loadDataFromServer = async () => {
  //const response = await fetch(api);
  return cardData;
};

const App = async () => {
  const card = await loadDataFromServer();

  return (
    <section className=" grid h-screen place-items-center ">
      <article className="max-w-sm xl:max-w-6xl">
        <div className="xl:grid xl:grid-cols-2 xl:place-items-center ">
          <div className="xl:my-24 my-12">
            <h1
              className="mb-6 text-4xl text-veryDarkMagenta font-extrabold text-center leading-7
            xl:text-6xl xl:text-left xl:mr-12
            "
            >
              10,000+ of our users love our products.
            </h1>
            <p
              className="p-2 text-center text-[15px] font-bold text-darkGrayishMagenta 
            xl:max-w-md xl:text-lg xl:text-left xl:p-0 "
            >
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="xl:grid xl:w-full ">
            {card.cardData.map((p) => (
              <div
                key={p.id}
                className="xl:first:place-self-start xl:place-self-center xl:last:place-self-end"
              >
                <StarCards stars={p.stars} company={p.company} />
              </div>
            ))}
          </div>
        </div>

        <div className="xl:grid xl:grid-flow-col xl:h-[235px] xl:w-full xl:gap-4">
          {card.cardData.map((p) => (
            <div
              key={p.id}
              className="xl:first:self-start xl:self-center xl:last:self-end"
            >
              <BuyersCards {...p} />
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default App;
