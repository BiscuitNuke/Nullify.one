export default function PageHead({ title, lede }: { title: React.ReactNode; lede?: React.ReactNode }) {
    return (
        <section className="pagehead wrap">
            <h1>{title}</h1>
            {lede && <p className="lede">{lede}</p>}
        </section>
    );
}
