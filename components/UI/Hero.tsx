const Hero = () => {
  return (
    <div className="grid w-full place-items-center min-h-screen bg-base-100 relative text-primary-text mx-auto py-24">
      <div className="hero-content flex-col gap-28 lg:flex-row-reverse justify-between">
        <img src="/hero image.png" className="w-full lg:max-w-sm rounded-lg" />
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex space-x-3">
            <button className="btn bg-primary-color border-none hover:bg-info">
              Try Premium
            </button>
            <button className="btn bg-base-100 text-primary-text  hover:bg-base-200">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 items-center pt-14">
        <h2 className="font-semibold text-xl text-center">
          More than 150+ businesses 2200+ products 15000+ user reviews
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex gap-6">
            <img
              src="/talabat-logo.png"
              alt="talabat logo"
              className="w-20 lg:w-36"
            />
            <img
              src="/talabat-logo.png"
              alt="talabat logo"
              className="w-20 lg:w-36"
            />
            <img
              src="/talabat-logo.png"
              alt="talabat logo"
              className="w-20 lg:w-36"
            />
          </div>

          <div className="flex gap-6">
            <img
              src="/talabat-logo.png"
              alt="talabat logo"
              className="w-20 lg:w-36"
            />
            <img
              src="/talabat-logo.png"
              alt="talabat logo"
              className="w-20 lg:w-36"
            />
            <img
              src="/talabat-logo.png"
              alt="talabat logo"
              className="w-20 lg:w-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
