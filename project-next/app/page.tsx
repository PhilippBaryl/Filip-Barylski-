import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-full bg-black fixed top-0 z-50 py-2 text-white text-center overflow-hidden">
                <div className="marquee">
                    <span>Dziękuję za przyjęcie projektu, miłego dnia!</span>
                </div>
            </div>
            <div className="flex justify-center">
                <p className="text-center" style={{ fontSize: '30px', color: 'red' }}>
                    Imie i Nazwisko: Filip Barylski
                    <br/>
                    Numer Indeksu: 119749
                    <br/>
                    <br/>
                    <Image
                        src="/doberman.jpg"
                        alt="Buldog"
                        width={547}
                        height={561}
                    />
                </p>
            </div>
        </main>
    );
}
