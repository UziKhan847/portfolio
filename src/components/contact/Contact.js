import { div } from "framer-motion/client";

function Contact() {
    return (
        <div className="h-[100vh] w-[100vw] bg-gradient-to-b from-black to-gray-900">
            <section className=" text-center text-white p-60">
                <h2 className="text-2xl font-semibold mb-2">Contact</h2>
                <ul className="text-sm">
                    <li>Email: uzair.jamiah@proton.me</li>
                    <li>Phone: +1 (289) 300 1652</li>
                    <li>Location: Hamilton, Ontario</li>
                    <li>GitHub: github.com/UziKhan847</li>
                    <li>LinkedIn: linkedin.com/in/xxxxxx</li>
                </ul>
            </section>
        </div>
    )
}

export default Contact;
