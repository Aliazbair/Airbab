import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCrad from "../components/MediumCrad";
import SmallCard from "../components/SmallCard";

export default function Home({ exportData,cardData }) {
  // console.log(cardData,exportData);
  return (
    <div className="">
      <Head>
        <title>Airbnb App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      {/* banner */}
      <Banner />

      {/* main content */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* put some data from a server -api endpoint */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exportData?.map((item)=>(
            <SmallCard key={item.img} item={item} />
          ))}

          </div>
        </section>

        {/* section 2 */}
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide py-8'>
          {cardData.map((item)=>(
            <MediumCrad key={item.img} item={item}/>
          ))}

          </div>
        </section>

        {/* larg card */}
        <section>
          <LargeCard img='https://links.papareact.com/4cj' title='The Greatest Outedoors' description='wishlists curated by Airbnb' buttonText='Get Inspired' />
        </section>
      </main>
      <Footer/>
    </div>
  );
}


export async function getStaticProps(){
  const exportData=await fetch('https://links.papareact.com/pyp').then(res=>res.json())
  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return{
    props:{
      exportData,cardData
    }
  }
}