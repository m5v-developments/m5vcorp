const PlatformCards = () => {
  const platforms = [
    {
      title: 'Freehold & Stacked Townhomes',
      description: "Delivering attainable, thoughtfully designed ground-oriented homes that serve growing families and first-time buyers in Ontario's emerging markets.",
      image: '/images/m5v_portfolio/the-niagara-phase-1/drone.webp'
    },
    {
      title: 'Mid-Rise & High-Rise Rentals',
      description: 'Building purpose-built rental communities that support long-term living with modern amenities and walkable, transit-connected locations.',
      image: '/images/m5v_portfolio/sundial-phase2/sundial-phase2-render.webp'
    },
    {
      title: 'Senior Independent Living',
      description: 'Developing senior-focused residences that combine autonomy, comfort, and community for an aging population seeking accessible housing options.',
      image: '/images/m5v_portfolio/sundial-lakeview-retirement/sundial-lakeview-close-up.webp'
    },
    {
      title: 'Single Family Homes',
      description: 'Creating vibrant, efficient vertical living spaces that enhance urban cores and provide long-term value for both residents and investors.',
      image: '/images/m5v_portfolio/the-muskoka/muskoka_siteview.webp'
    }
  ];

  return (
    <section className="bg-off-white py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-sm uppercase tracking-wider font-medium text-left mb-4 text-primary-black">
          What We Do
        </h2>
        <p className="text-h2 font-medium text-left max-w-3xl mb-16 text-primary-black">
          We create lasting value by building homes where people want—and can afford—to live.
        </p>
        
        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="group relative bg-white"
            >
              {/* Image */}
              <div className="h-64 relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${platform.image})` }}
                />
                {/* Blue top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent-blue" />
              </div>

              {/* Content */}
              <div className="py-4 px-6">
                <h3 className="text-xl font-medium mb-3">
                  <span className="text-accent-blue">{platform.title}</span>
                </h3>
                <p className="text-gray-600 mb-4">{platform.description}</p>
                <button className="text-accent-blue hover:underline">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformCards; 