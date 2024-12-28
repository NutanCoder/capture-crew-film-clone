function CrewPage() {
  const photosUrl = [
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsashank.711ce29d.jpg&w=3840&q=75",
      tittle: "Sashank Shekhar",
      designation: "Lead Photographer & Editor",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmunmay.45766042.jpg&w=3840&q=75",
      tittle: "Munmay Swain",
      designation: "Lead Cinematographer & Editor",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdhuryodhan.427ffeb1.jpeg&w=3840&q=75",
      tittle: "Duryodhan Tudu",
      designation: "Lead Photographer",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftony02.32c04299.jpg&w=3840&q=75",
      tittle: "Sujoy Sen",
      designation: "Drone Pilot",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fankit.e2b6b0c1.jpg&w=3840&q=75",
      tittle: "Ankit Nayak",
      designation: "Photographer",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsandip.3a8840ed.jpg&w=3840&q=75",
      tittle: "Sandeep Kumar",
      designation: "Cinematographer & Editor",
    },
  ];
  return (
    <div className="container mx-auto">
      <h1 className="font-medium text-4xl text-center">Crew</h1>
      <div className="bg-white border rounded-xl p-6 my-4">
        <div className="flex flex-wrap">
          {photosUrl.map((item) => {
            return (
              <div className="w-1/3">
                <img
                  src={item.url}
                  className="w-full h-[400px] p-4 object-cover"
                />
                <h1 className="text-sm font-medium text-center">
                  {item.tittle}
                </h1>
                <p className="text-sm font-light text-center">
                  {item.designation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CrewPage;
