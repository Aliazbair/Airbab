import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { format } from "date-fns";
import InfoCrad from "../components/InfoCrad";
import Map from "../components/Map";

export default function Search({ searchResults }) {
  console.log(searchResults);
  const router = useRouter();
  const { startDate, endDate, location, noOfGuests } = router.query;
  // console.log(location);

  // format date
  // const formattedStartDate=format(new Date(startDate),'dd MMMM YY')
  // const formattedEndDate= format(new Date(endDate),'dd MMMM yy')
  // const range=`${formattedStartDate}- ${formattedEndDate}`

  return (
    <div className="">
      <Header />

      {/* main content */}
      <main className="flex">
        {/* section 1 */}
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays {noOfGuests} for -
            {format(new Date(startDate), "ddd MMMM yy")} -
            {format(new Date(endDate), "dd MMMM yy")} guests 🥰
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="btn">Cancellation Flexibility</p>
            <p className="btn">Type of Place</p>
            <p className="btn">Price</p>
            <p className="btn">Rooms and Beds</p>
            <p className="btn">More filters</p>
          </div>

          {/* show search result */}
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, title, description, star, price, total, location }) => (
                <InfoCrad
                  key={img}
                  img={img}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  location={location}
                />
              )
            )}
          </div>
        </section>
        {/* section 2 map */}
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
