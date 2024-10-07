import { useState } from 'react'

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
)

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
)

const BadgeCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
)

export default function PropertyListingService() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Submitted email:', email)
  }

  const features = [
    { Icon: HomeIcon, title: "Easy Listing Creation", description: "Create detailed property listings in minutes." },
    { Icon: SearchIcon, title: "Enhanced Visibility", description: "Reach thousands of potential tenants." },
    { Icon: BadgeCheckIcon, title: "Tenant Screening", description: "Access comprehensive screening reports." },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-[#1abc9c] text-textWhite w-full py-12 md:py-24 bg-white text-gray-800">
          <div className="container px-4 md:px-6 mx-auto max-w-6xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simplify Your Property Listings
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                Connect with reliable tenants and manage your properties with ease.
              </p>
              <button 
                className="px-6 py-3 text-white bg-textWhite text-[#16a085] rounded-md font-semibold transition-colors"
              >
                List Your Property
              </button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
                  <feature.Icon />
                  <h3 className="text-xl font-semibold mb-2 mt-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 bg-gray-dark text-textWhite">
          <div className="container px-4 md:px-6 mx-auto max-w-6xl text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Ready to Get Started?</h2>
            <p className="mx-auto max-w-[600px] text-white/90 mb-8">
              Join thousands of landlords who&lsquo;ve simplified their rental process.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 border rounded-md w-full sm:w-auto text-gray-800"
                required
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-[#cd4347] text-white rounded-md font-semibold transition-colors w-full sm:w-auto"
              >
                Sign Up Now
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
