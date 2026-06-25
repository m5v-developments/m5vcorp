import Link from 'next/link';

const Founders = () => {
  const founders = [
    {
      firstName: 'Sherard',
      lastName: 'McQueen',
      position: 'Chief Visionary Officer (Entitlement Sales & Marketing)',
      image: '/images/team/sherard-2.webp',
    },
    {
      firstName: 'Yaseen',
      lastName: 'Nimjee',
      position: 'Chief Operating Officer (Construction & Development)',
      image: '/images/team/yaseen.webp',
    },
    {
      firstName: 'Rajeev',
      lastName: 'Viswanathan',
      position: 'Chief Financial Officer (Capital Strategy)',
      image: '/images/team/rajeev.webp',
    }
  ];

  return (
    <section className="bg-accent-blue py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-h2 mb-8 text-off-white font-medium">Our Partners</h2>
        
        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <Link 
              key={index} 
              href="/team"
              className="block"
            >
              <div className="bg-black-primary aspect-[3/4] p-0 relative group">
                <div className="relative w-full h-full">
                  <img src={founder.image} alt={`${founder.firstName} ${founder.lastName}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black-primary opacity-40"></div>
                </div>
                {/* Text Container - Bottom Right */}
                <div className="absolute bottom-8 right-8 text-right">
                  <div className="text-off-white">
                    <p className="text-2xl font-medium mb-1">
                      {founder.firstName}
                    </p>
                    <p className="text-2xl font-medium mb-3 uppercase tracking-wider">
                      {founder.lastName}
                    </p>
                    <p className="text-off-white mb-2">
                      Managing Partner
                    </p>
                    <p className="text-off-white">
                      {founder.position}
                    </p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Meet The Team Button */}
        <div className="text-center mt-12">
          <Link
            href="/team"
            className="inline-block border border-off-white text-off-white bg-accent-blue hover:bg-black-primary px-6 py-2 rounded-sm transition-colors duration-300"
          >
            Meet The Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Founders; 