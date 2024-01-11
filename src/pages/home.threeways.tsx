const ways = [
  {
    title: 'The Quantrader Weekly Newsletter',
    description:
      'Once a week, I share nuggets of insights related to quantitative trading, personal growth, and coding.',
    btnLink: '/newsletter',
    btnText: 'Subscribe to the newsletter',
  },
  {
    title: 'Hire my skills',
    description:
      'I can help you deploy state of the art quantitative trading systems.',
    btnLink: 'https://calendly.com/piotry/hello',
    btnText: 'Hire me',
  },
  {
    title: 'Use my tools',
    description:
      'With over 10 years of experience in the industry, I have made some of my tools available for you to use.',
    btnLink: '/trading',
    btnText: 'Find more',
  },
];
const Threeways = () => {
  return (
    <div className="bg-[#dae5e6] font-inter">
      <div className="container grid grid-cols-2 gap-6">
        <div className="title w-full font-inter ">
          Three ways I can help
          <span className="ml-4 text-primary">YOU.</span>
        </div>
        <div className="">
          {ways.map((way, index) => (
            <div key={way.title} className="topborder pb-8 pt-4">
              <span className="mr-2 text-3xl font-bold text-primary">
                {index + 1}.
              </span>
              <span className="text-2xl">{way.title}</span>
              <div className="py-4 text-gray-700">{way.description}</div>
              <div className="mt-4">
                <a
                  href={way.btnLink}
                  className="small rounded-full border-2 border-black bg-black px-4 py-2 text-white no-underline hover:bg-gray-800"
                >
                  {way.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Threeways;
