import type { Metadata } from "next";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function ToS() {
    return (
        <>
            <PageHead title="Terms & Conditions" lede="Short, because there's nothing to buy or sign up for." />
            <section className="wrap block">
                <div className="prose">
                    <p>This site is provided as is, with no warranty. Nothing on it is an offer to sell.</p>
                    <p>The Help page is general information, not professional or legal advice.</p>
                    <p>Links to other sites are there for convenience. I don't control them.</p>
                    <p>You can use the brand kit to link to or write about Nullify. Don't use it to pretend to be Nullify.</p>
                    <p>These terms can change. The date below says when they last did.</p>
                    <p className="meta">Last updated 2026-11-24.</p>
                </div>
            </section>
        </>
    );
}
