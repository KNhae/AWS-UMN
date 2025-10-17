export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About AWS Club UMN</h1>

        <div className="space-y-6">
          <section className="card">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              AWS Club at the University of Minnesota is dedicated to empowering students with
              hands-on cloud computing experience, AWS certification preparation, and real-world
              project opportunities. We bridge the gap between academic learning and industry
              demands by providing a collaborative environment for cloud enthusiasts.
            </p>
          </section>

          <section className="card">
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Weekly workshops on AWS services and cloud architecture</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>AWS certification study groups and exam preparation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Hands-on projects and hackathons</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Industry speaker events and networking opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Resume building and career development support</span>
              </li>
            </ul>
          </section>

          <section className="card">
            <h2 className="text-2xl font-bold mb-4">Join Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you're a complete beginner or an experienced cloud developer, AWS Club UMN
              welcomes all students interested in cloud computing. No prior experience required!
            </p>
            <a href="/register" className="btn btn-primary">
              Become a Member
            </a>
          </section>

          <section className="card">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              Have questions? Reach out to us at{' '}
              <a href="mailto:awsclub@umn.edu" className="text-primary-600 hover:underline">
                awsclub@umn.edu
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
