const WhySecondaryMarkets = () => {
  const cards = [
    {
      number: '1',
      title: 'Affordability Advantage',
      text: 'Lower land costs and development charges create better entry points—allowing us to pass on value to homeowners and increase returns for investors.'
    },
    {
      number: '2',
      title: 'Faster Approvals',
      text: 'Smaller municipalities offer streamlined planning processes and fewer bureaucratic delays, getting shovels in the ground faster.'
    },
    {
      number: '3',
      title: 'Surging Demand',
      text: 'Population growth is spilling out of major urban cores. Secondary markets are seeing rising demand for new housing—but lack sufficient supply.'
    }
  ];

  return (
    <section id="why-secondary-markets" className="bg-black-primary py-32 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Headers */}
        <div className="mb-20">
          <h3 className="text-sm uppercase tracking-wider font-medium mb-6 text-accent-blue">
            Why Secondary Markets
          </h3>
          <h2 className="text-[2.75rem] leading-tight font-medium  text-off-white">
            We See Opportunity Outside Big-City Cores
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <article 
              key={index}
              className="group bg-white rounded-lg p-8 min-h-[320px] transition-all duration-300 hover:shadow-lg"
            >
              {/* Number Badge */}
              <div className="text-6xl font-bold text-accent-blue mb-6">
                {card.number}
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-black-primary mb-4">
                {card.title}
              </h3>

              {/* Hover Reveal Content */}
              <div className="overflow-hidden transition-all duration-300 md:h-0 md:opacity-0 md:group-hover:h-auto md:group-hover:opacity-100">
                <p className="text-black-primary/80 leading-relaxed">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySecondaryMarkets; 