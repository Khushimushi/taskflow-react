function Features() {
    return (
        <div className="bg-gray-100 flex py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    Features
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white p-6 rounded-xl shadow
                                    hover:shadow-lg hover:-translate-y-1 transition">
                        <h3 className="text-xl font-semibold mb-3">
                            📝 Create Tasks
                        </h3>

                        <p className="text-gray-600">
                            Easily add and manage your daily tasks.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow
                                    hover:shadow-lg hover:-translate-y-1 transition">
                        <h3 className="text-xl font-semibold mb-3">
                            📊 Track Progress
                        </h3>

                        <p className="text-gray-600">
                            Monitor completed and pending tasks.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow
                                    hover:shadow-lg hover:-translate-y-1 transition">
                        <h3 className="text-xl font-semibold mb-3">
                            🎯 Stay Organized
                        </h3>

                        <p className="text-gray-600">
                            Keep everything organized in one place.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;