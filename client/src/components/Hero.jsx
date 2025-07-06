import { Link } from 'react-router-dom';
import image from '../assets/banner2.svg';
import { GoDotFill } from "react-icons/go";



const Hero = () => {
  return (
    <main className="flex-1 bg-gray-50/10 relative z-10">
      {/* Dotted Background */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Section 1+2  */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Section 1: Headline & Sub */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className='flex items-center text-center mx-auto w-fit py-1 px-2 rounded-xl gap-2 mb-4 border-1 text-sm'>    
          {/* <p className="flex items-center justify-center mx-auto w-fit py-2 px-4 rounded-xl gap-2 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> */}
              Shorten <span className='font-light'><GoDotFill /></span>
              Share <span className=''><GoDotFill /></span>
              Track 
          </p>

          {/* <h1 className="text-5xl md:text-6xl font-bold text-blue-700 leading-tight mb-6"> */}
          <h1 className="mx-auto w-fit py-2 px-4 text-6xl font-bold"> Shorten URL Effortlessly. </h1>
          <p className="text-xl text-gray-700"> A modern URL shortening platform that helps you share better links, get insights, and grow your reach — all from one simple dashboard. </p>
          <div className="mt-8">
            <Link to="/dashboard" className="inline-block bg-gradient-to-r from-pink-500 to-pink-900 text-white font-semibold px-8 py-4 rounded-xl shadow hover:bg-blue-700 transition"> Get Started Now </Link>
          </div>
        </div>

        {/* Section 2: Illustration */}
        <div className="flex justify-center mb-0">
          <img
            src={image}
            alt="URL Illustration"
            className="w-full max-w-xl drop-shadow-xl"
          />
        </div>
      </div>
      
      
      {/* Section 3: Feature grid with light background */}
      <div className="bg-pink-600/10 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold mb-2 text-pink-800">Custom Short Links</h3>
            <p className="text-gray-600">
              Create branded, memorable short URLs that match your brand’s identity.
            </p>
          </div>
          <div>
            <div className="text-blue-600 text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2 text-pink-800">Click Analytics</h3>
            <p className="text-gray-600">
              Monitor your link performance in real-time with intuitive charts and stats.
            </p>
          </div>
          <div>
            <div className="text-blue-600 text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-2 text-pink-800">Secure Redirects</h3>
            <p className="text-gray-600">
              All redirects are protected from phishing and suspicious activities.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Use Cases */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Who Should Use Shortly?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            From solo creators to enterprise teams — Shortly is built for everyone who shares links on the internet.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-left text-gray-700">
            <div>
              <h4 className="font-semibold text-pink-900 mb-2">📣 Marketers</h4>
              <p>Boost your campaign tracking and shorten UTM links for clean sharing.</p>
            </div>
            <div>
              <h4 className="font-semibold text-pink-900 mb-2">🧑‍💻 Developers</h4>
              <p>Integrate link shortening into your product with our powerful API.</p>
            </div>
            <div>
              <h4 className="font-semibold text-pink-900 mb-2">📱 Influencers</h4>
              <p>Track link clicks from Instagram, YouTube, and more.</p>
            </div>
            <div>
              <h4 className="font-semibold text-pink-900 mb-2">🏢 Enterprises</h4>
              <p>Manage branded links across teams with analytics and security.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Testimonials with gray background :- bg-pink-600/10*/}
      <div className="bg-pink-600/10 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left text-gray-700">
            <div className="bg-white p-6 rounded-xl shadow">
              <p>“Shortly is a game changer. Now all our campaigns use clean, trackable links.”</p>
              <p className="mt-4 font-semibold text-pink-600">— Rina M., Digital Marketer</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <p>“Love the analytics and ease of use. It just works, and the UI is beautiful.”</p>
              <p className="mt-4 font-semibold text-pink-600">— Devansh G., Indie Hacker</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <p>“Finally found a shortener that fits our brand style and lets us scale.”</p>
              <p className="mt-4 font-semibold text-pink-600">— Priya S., Product Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: Final CTA */}
      <div className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4"> Ready to simplify your links?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">Sign up today and get started with your free link dashboard. No credit card required.</p>
        <Link to="/dashboard" className="inline-block bg-gradient-to-r from-pink-500 to-pink-900 text-white font-semibold px-8 py-4 rounded-xl shadow hover:bg-blue-700 transition">Create Your First Link →</Link>
      </div>
    </main>
  );
};





export default Hero;
