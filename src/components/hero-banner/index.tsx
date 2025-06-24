import Image from 'next/image';

const HeroBanner = () => (
  <div className="h-screen bg-black-primary relative flex items-center justify-center">
    <Image
      src="/images/chicago-cityscape.png"
      alt="Chicago Cityscape"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black-primary/60" />
    <div className="relative z-10 px-6 text-center">
      <p className="text-accent-blue tracking-widest uppercase text-xl mb-4 animate-fade-in [animation-delay:0.5s] opacity-0">
        <span className="text-accent-blue text-medium">ACQUIRE. EXECUTE. DELIVER.</span>
      </p>
      <h1 className="text-h1 text-off-white max-w-3xl font-medium">
        <span className="text-accent-blue animate-fade-in [animation-delay:0.8s] opacity-0">We</span>{' '}
        <span className="text-accent-blue animate-fade-in [animation-delay:0.8s] opacity-0">build</span>{' '}
        <span className="animate-fade-in [animation-delay:2s] opacity-0">where</span>{' '}
        <span className="text-accent-blue animate-fade-in [animation-delay:0.8s] opacity-0">growth</span>{' '}
        <span className="animate-fade-in [animation-delay:2s] opacity-0">is going, unlocking value across Ontario's newest markets.</span>
      </h1>
    </div>
  </div>
);

export default HeroBanner; 