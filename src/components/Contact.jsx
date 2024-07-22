// Contact
export default function Contact() {
    return (
        <section id="contact" className="pt-40 pb-32">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-full mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-primary mb-2 uppercase lg:text-xl">Contact</h4>
                    <h2 className="font-bold text-dark1 text-3xl mb-4 sm:text-4xl lg:text-5xl">Get in Touch</h2>
                    <p className="font-medium text-md text-slate-350 md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil molestias pariatur numquam asperiores dignissimos vitae illo quidem accusantium earum atque.</p>
                    </div>
                </div>

                <form>
                    <div className="w-full lg:w-2/3 lg:mx-auto">
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="name" className="text-base font-bold text-dark1">Name</label>
                            <input type="text" id="name" className="w-full bg-slate-200 text-dark1 p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                            <label htmlFor="Phone" className="text-base font-bold text-dark1">Phone</label>
                            <input type="phone" id="Phone" className="w-full bg-slate-200 text-dark1 p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                            <label htmlFor="email" className="text-base font-bold text-dark1">E-mail</label>
                            <input type="email" id="email" className="w-full bg-slate-200 text-dark1 p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                        </div>

                        <div className="w-full px-4 mb-8">
                            <label htmlFor="message" className="text-base font-bold text-dark1">Message</label>
                            <textarea name="message" id="message" className="w-full bg-slate-200 text-dark1 p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></textarea>
                        </div>
                        <div className="w-full px-4">
                            <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">Sent</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}