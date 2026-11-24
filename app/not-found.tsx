import Link from "next/link";
import PageHead from "./components/head";
import Struck from "./components/strike";

export default function NotFound() {
    return (
        <>
            <PageHead title={<><Struck>Found</Struck> Not found.</>} lede="This page doesn't exist. The old Photos page and chatbot are gone." />
            <section className="wrap block"><p><Link href="/">Go to the home page</Link></p></section>
        </>
    );
}
