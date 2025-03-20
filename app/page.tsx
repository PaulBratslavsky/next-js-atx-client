import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
    return (
        <>
            <div className="container md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto px-7">
                <Hero />
                <Services />
            </div>
        </>
    );
}
