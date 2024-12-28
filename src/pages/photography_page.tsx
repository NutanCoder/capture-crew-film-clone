function PhotographyPage() {
  const imageUrl = [
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2Fimages%2FWedding-portfolio%2Fagamixsuban.jpg&w=3840&q=75",
      title: "Suban & Agami",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2Fimages%2FWedding-portfolio%2Fbiswojeettxkomal.jpg&w=3840&q=75",
      title: "Biswojeet & Komal",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2Fimages%2FWedding-portfolio%2Flinaxsandip.jpg&w=3840&q=75",
      title: "Sandip & Lina",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2Fimages%2FWedding-portfolio%2Fsambitxabhilipsa.jpg&w=3840&q=75",
      title: "Sambit & Abhilipsa",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2Fimages%2FWedding-portfolio%2Fbishnuxanisha.jpg&w=3840&q=75",
      title: "Bishnu & Anisha",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2Fimages%2FWedding-portfolio%2Fayushxsomambika.jpg&w=3840&q=75",
      title: "Ayush & Somambika",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2Fimages%2FWedding-portfolio%2Fanshuxabhinav.jpg&w=3840&q=75",
      title: "Abhinav & Anshu",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2Fimages%2FWedding-portfolio%2Fabhishekxsudha.jpg&w=3840&q=75",
      title: "Abhishek & Sudha",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="bg-white rounded-lg p-4 my-6">
        <div className="flex flex-wrap">
          {imageUrl.map((item) => {
            return (
              <div className="w-1/3 p-4">
                <img
                  src={item.url}
                  alt=""
                  className="w-full h-[400px] object-cover rounded-md"
                />
                <h1 className="font-medium text-sm text-center">
                  {item.title}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PhotographyPage;
