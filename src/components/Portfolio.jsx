// Portfolio
import img1 from "../../filefoto/portfoto/FoodProduct.jpg"
import img2 from "../../filefoto/portfoto/GO.jpg"
import img3 from "../../filefoto/portfoto/NPL-VeloRubyBerry.jpg"
import img4 from "../../filefoto/portfoto/Garuda_Bot_at_DWP_2017.jpg"

export default function Portfolio() {
    return (
        <section id="portfolio" className="pt-28 pb-48 bg-slate-100">
    <div className="container">
        <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
                <h4 className="font-semibold text-lg text-primary mb-2 uppercase lg:text-xl">Portfolio</h4>
                <h2 className="font-bold text-dark1 text-3xl mb-4 sm:text-4xl lg:text-5xl">Latest Project</h2>
                <p className="font-medium text-md text-secondary md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil molestias pariatur numquam asperiores dignissimos vitae illo quidem accusantium earum atque.</p>
            </div>
        </div>
    </div>
    <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
        <div className="mb-12 p-4 md:w-5/12">
            <img src={img1} alt="Food Product" className="w-full rounded-md" />
            <h3 className="font-semibold text-xl text-dark1 mt-5 mb-3 text-center">Food Product</h3>
            <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis sint ipsa ratione aperiam sapiente.</p>
        </div>
  
        <div className="mb-12 p-4 md:w-5/12">
            <img src={img2} alt="Property" className="w-full rounded-md" />
            <h3 className="font-semibold text-xl text-dark1 mt-5 mb-3 text-center">Property</h3>
            <p className="font-medium text-base text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis sunt sequi officiis earum delectus porro natus deserunt adipisci.</p>
        </div>

        <div className="mb-12 p-4 md:w-5/12">
            <img src={img3} alt="Food Product" className="w-full rounded-md" />
            <h3 className="font-semibold text-xl text-dark1 mt-5 mb-3 text-center">Product</h3>
            <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugit?.</p>
        </div>

        <div className="mb-12 p-4 md:w-5/12">
            <img src={img4} alt="Food Product" className="w-full rounded-md" />
            <h3 className="font-semibold text-xl text-dark1 mt-5 mb-3 text-center">Event</h3>
            <p className="font-medium text-base text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quod totam cumque quo aliquam.</p>
        </div>
    </div>  
  </section>
    );
};