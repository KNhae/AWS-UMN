import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to AWS Club UMN
            </h1>
            <p className="text-xl mb-8">
              University of Minnesota's premier student organization for cloud computing,
              AWS certification, and hands-on tech experience.
            </p>
            <div className="flex gap-4">
              <Link to="/register" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Join the Club
              </Link>
              <Link to="/events" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition">
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2">Learn AWS</h3>
              <p className="text-gray-600">
                Hands-on workshops and tutorials to master AWS services and earn certifications.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Build Projects</h3>
              <p className="text-gray-600">
                Work on real-world cloud projects and deploy production-ready applications.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Network</h3>
              <p className="text-gray-600">
                Connect with industry professionals and fellow cloud enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Cloud Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join AWS Club UMN and take your tech skills to the next level.
          </p>
          <Link to="/register" className="btn btn-primary text-lg px-8 py-3">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
