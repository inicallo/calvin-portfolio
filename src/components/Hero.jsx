export default function Hero() {
    return (
        <section id="home" className="pt-40">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full self-center px-4 lg:w-1/2">
                <h1 className="text-xl font-semibold text-primary md:text-xl lg:text-4xl">Hi I'am <span className="block font-bold text-dark1 text-3xl mt-1 lg:text-5xl">Calvin Angelo</span></h1>
                <h2 className="font-medium text-secondary text-lg mb-5 pt-1">Fullstack Web Development Student <span className="text-dark1 ">@Purwadhika</span></h2>
                <p className="font-medium text-secondary mb-10 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quo placeat molestiae fugit sapiente consectetur perferendis sunt aspernatur tenetur, numquam sed nam aperiam enim, iste beatae architecto laboriosam illum accusantium.</p>
                <a href="https://wa.me/+628111628881" target="_blank" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Get In Touch</a>
              </div>
              <div className="w-full self-end px-4 lg:w-1/2">
                <div className="relative mt-10">
                  <img src="filefoto/Calvin.png" alt="calvin angelo" className="max-w-full mx-auto" />
                  <span className="absolute rotate-[-15deg] -top-28 -z-10 lg:left-14 md:left-24 -left-10 translate-x-1">
                  <svg width="550" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#CF1919" d="M26,-48.3C32.6,-41.1,36.3,-32.1,34.9,-23.7C33.6,-15.4,27.3,-7.7,24.6,-1.5C22,4.6,23,9.2,27.6,23.2C32.1,37.1,40.2,60.4,36.2,66.7C32.2,72.9,16.1,62.1,3.3,56.4C-9.5,50.7,-19,50,-30.9,48.4C-42.9,46.7,-57.3,44,-60.4,35.8C-63.6,27.6,-55.5,13.8,-57.4,-1.1C-59.2,-15.9,-71,-31.9,-66.4,-37.5C-61.7,-43,-40.5,-38.3,-26.7,-41.3C-12.9,-44.4,-6.4,-55.4,1.6,-58.2C9.7,-61,19.3,-55.6,26,-48.3Z" transform="translate(100 100) scale(1.2)" />
                  </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </section>
    )
};