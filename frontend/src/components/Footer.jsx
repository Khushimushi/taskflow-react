function Footer() {
    return (

        <footer className="bg-gray-100 text-black-400 py-6">
            <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-4 justify-center">

                <span className="font-semibold text-black">
                    TaskFlow
                </span>

                <span>© 2026 TaskFlow, Inc.</span>

                <a href="#" className="hover:text-blue-600 transition">Terms</a>

                <a href="#" className="hover:text-blue-600 transition">Privacy</a>

                <a href="#" className="hover:text-blue-600 transition">Security</a>

                <a href="#" className="hover:text-blue-600 transition">Docs</a>

                <a href="#" className="hover:text-blue-600 transition">Contact</a>

            </div>
        </footer>
    );
}

export default Footer;