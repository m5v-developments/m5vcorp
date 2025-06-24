const JointVenture = () => {
  return (
    <section className="relative h-screen flex items-center px-4 md:px-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/images/m5v_portfolio/the-muskoka/muskoka_aerial.webp')] bg-cover bg-center"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-off-white mb-6 font-medium leading-tight">
            Introducing The Muskoka Lake Houses by M5V Developments
          </h2>
          
          <p className="text-body text-off-white/80 mb-8">
            A curated Niagara Falls townhome community, designed for modern living and lasting value.
          </p>

          <button className="border border-off-white text-off-white hover:bg-accent-blue hover:border-accent-blue px-6 py-2 transition-colors">
            <a href="https://themuskokalakehouses.com" target="_blank" rel="noopener noreferrer">Learn More</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JointVenture; 