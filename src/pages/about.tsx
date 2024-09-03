import React from 'react'

const AboutPage = () => (
    <div className="about-page p-8 font-sans bg-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen">
        <div className="about-intro">
            <h1 className="text-4xl text-gray-800 mb-4">About Us</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Welcome to our coffee shop, a cozy haven where coffee lovers
                come to unwind and enjoy exceptional brews. Established in 2010,
                our shop has grown from a small local café into a beloved
                community spot. Our journey began with a simple mission: to
                offer high-quality coffee in a warm and inviting atmosphere.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Over the years, we have carefully curated our selection of
                coffees and pastries, sourcing the finest ingredients and
                experimenting with flavors to create unique and delightful
                offerings. Our team is passionate about coffee and dedicated to
                providing an excellent customer experience.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
                Our history is rich with memorable moments and milestones. From
                hosting community events to launching seasonal specials, we’ve
                aimed to be more than just a coffee shop; we strive to be a
                place where people can gather, relax, and enjoy the simple
                pleasures of life. Thank you for being a part of our journey. We
                look forward to many more years of serving you with the best
                coffee in town.
            </p>
        </div>

        <div className="about-team">
            <h2 className="text-3xl text-gray-800 text-center mb-6">
                Meet Our Team
            </h2>
            <div className="team-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="team-member text-center bg-white rounded-lg p-4 shadow">
                    <img
                        src="/images/product1.png"
                        alt="Team Member 1"
                        className="rounded-full w-36 h-36 object-cover mx-auto mb-4"
                    />
                    <h3 className="text-xl text-gray-800">Jane Doe</h3>
                    <p className="text-gray-600">Barista</p>
                </div>
                <div className="team-member text-center bg-white rounded-lg p-4 shadow">
                    <img
                        src="/images/product1.png"
                        alt="Team Member 2"
                        className="rounded-full w-36 h-36 object-cover mx-auto mb-4"
                    />
                    <h3 className="text-xl text-gray-800">John Smith</h3>
                    <p className="text-gray-600">Manager</p>
                </div>
                <div className="team-member text-center bg-white rounded-lg p-4 shadow">
                    <img
                        src="/images/product1.png"
                        alt="Team Member 3"
                        className="rounded-full w-36 h-36 object-cover mx-auto mb-4"
                    />
                    <h3 className="text-xl text-gray-800">Emily Johnson</h3>
                    <p className="text-gray-600">Assistant Manager</p>
                </div>
                <div className="team-member text-center bg-white rounded-lg p-4 shadow">
                    <img
                        src="/images/product1.png"
                        alt="Team Member 4"
                        className="rounded-full w-36 h-36 object-cover mx-auto mb-4"
                    />
                    <h3 className="text-xl text-gray-800">Michael Brown</h3>
                    <p className="text-gray-600">Barista</p>
                </div>
                <div className="team-member text-center bg-white rounded-lg p-4 shadow">
                    <img
                        src="/images/product1.png"
                        alt="Team Member 5"
                        className="rounded-full w-36 h-36 object-cover mx-auto mb-4"
                    />
                    <h3 className="text-xl text-gray-800">Sarah Davis</h3>
                    <p className="text-gray-600">Customer Service</p>
                </div>
                <div className="team-member text-center bg-white rounded-lg p-4 shadow">
                    <img
                        src="/images/product1.png"
                        alt="Team Member 6"
                        className="rounded-full w-36 h-36 object-cover mx-auto mb-4"
                    />
                    <h3 className="text-xl text-gray-800">David Wilson</h3>
                    <p className="text-gray-600">Barista</p>
                </div>
            </div>
        </div>
    </div>
)

export default AboutPage
