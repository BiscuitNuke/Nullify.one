import Link from "next/link";
import PageHead from "./components/head";

export default function NotFound() {
    return (
        <>
            <PageHead title={<><span className="struck">Found</span> Not found.</>} lede="This page doesn't exist. The old Photos page and chatbot are gone." />
            <section className="wrap block"><p><Link href="/">Go to the home page</Link></p></section>
        </>
    );
}
