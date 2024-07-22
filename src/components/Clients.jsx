// Clients

import img1 from "../../filefoto/clientslogo/grand-orchardz.png"
import img2 from "../../filefoto/clientslogo/Bat_logo20.svg"
import img3 from "../../filefoto/clientslogo/GrandLucky.png"
import img4 from "../../filefoto/clientslogo/Unilever.png"

export default function Clients() {
    return (
        <section id="clients" className="pt-36 pb-48 bg-slate-400">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-primary mb-2 uppercase lg:text-xl">Clients</h4>
                    <h2 className="font-bold text-dark1 text-3xl mb-4 sm:text-4xl lg:text-5xl">Our Partner</h2>
                    <p className="font-medium text-md text-slate-300 md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil molestias pariatur numquam asperiores dignissimos vitae illo quidem accusantium earum atque.</p>
                    </div>
                </div>

                <div className="w-full px-4 items-center justify-center flex-wrap flex">
                    <div className="flex flex-wrap items-center justify-center">
                        <a href="http://rajawali.orchardzhotel.com/" target="_blank" className="max-w-[250px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 sm:mt-1">
                        <img src={img1} alt="Grand Orchardz" />
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-center">
                        <a href="https://www.bat.com/" target="_blank" className="max-w-[250px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 sm:mt-1">
                        <img src={img2} alt="British American Tobacco" />
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-center">
                        <a href="http://rajawali.orchardzhotel.com/" target="_blank" className="max-w-[250px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 sm:mt-1">
                        <img src={img3} alt="Grand Lucky" />
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-center">
                        <a href="https://www.unilever.com/" target="_blank" className="max-w-[250px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 sm:mt-1">
                        <img src={img4} alt="Unilever" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
