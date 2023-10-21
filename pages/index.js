import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Background from "@/components/Background";
import Ing from "@/components/Ing";
import Esp from "@/components/Esp";
import Footer from "@/components/Footer";
import Oth from "@/components/Oth";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, data2, data3 }) {
  const SendWp = () => {
    window.location.href =
      "https://wa.me/12345678901?text=Hola,%20%C2%BFc%C3%B3mo%20est%C3%A1s%3F";
  };
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <main>
        <div className="wpbtn">
          <div className="wpbtn-container">
            <a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/528424236403?text=Hola,%20me%20gustaria%20realizar%20un%20pedido"
              target="_blank"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <Header />
        <Background>
           
          <div className="pizzaImg">
            <Image
              src="/assets/img/pizza1.png"
              alt=""
              width={200}
              height={200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <Menu data={data} title={"Tamaños & Precios"} />
          
          <Ing data={data2} title={"Ingredientes"} />
          <div className="pizzaImg">
            <Image
              src="/assets/img/pizza2.png"
              alt=""
              width={200}
              height={200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <Esp data={data2} title={"Especialidades"} />
          <div className="pizzaImg">
            <Image
              src="/assets/img/op.png"
              alt=""
              width={200}
              height={200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <Oth data={data3} title={"Otros Productos"} />
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
  const res2 = await fetch(
    "http://phpstack-921351-3198370.cloudwaysapps.com/server/api/products_materias_primas"
  );
  
  const data2 = await res2.json();
  const res3 = await fetch(
    "http://phpstack-921351-3198370.cloudwaysapps.com/server/api/products_other"
  );
  
  const data3 = await res3.json();
  

  // Pass data to the page via props
  return { props: { data, data2, data3 } };
}
