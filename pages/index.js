import Head from "next/head";
import PageTitle from "../components/PageTitle/PageTitle";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Home(props) {
    const products = props.products;

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Storefront</title>
            </Head>
            <PageTitle title="StoreFront" tagline="featured products" />
            <main>
                {products.map((product) => (
                    <ProductCard key={product.uid} product={product} />
                ))}
            </main>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(
        "https://game-seller-3fb37-default-rtdb.firebaseio.com/products.json"
    );
    const productData = await res.json();
    const products = Object.values(productData);

    return {
        props: {
            products,
            fallback: false,
        },
    };
}
