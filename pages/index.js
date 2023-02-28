import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Pizzas Jossepph Parras - Menu</title>
        <meta
          name="description"
          content="Pizzeria Parras de la fuente - Pizzas Jossepph"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Background>
          <Menu data={data} title={"Ingredientes"} />
          <div className="pizzaImg">
            <Image src="/assets/img/pizza1.png" alt="" width={300} height={300} />
          </div>
          <Menu data={data} title={"Especialidades"} />
          <div className="pizzaImg">
            <Image src="/assets/img/pizza2.png" alt="" width={300} height={300} />
          </div>
          <Menu data={data} title={"Tamaños & Precios"} />
        </Background>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "http://phpstack-921351-3198370.cloudwaysapps.com/server/api/products_pizza"
  );

  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
