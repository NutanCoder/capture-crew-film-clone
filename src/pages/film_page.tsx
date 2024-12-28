function FilmPage() {
  const videosUrl = [
    {
      url: "https://player.vimeo.com/video/1025481605?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "Abhinav & Anshu",
    },
    {
      url: "https://player.vimeo.com/video/1025483665?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "Biswajeet & Komal",
    },
    {
      url: "https://player.vimeo.com/video/1025484683?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "Suban & Agami",
    },
    {
      url: "https://player.vimeo.com/video/1025502039?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "Bishnu & Anisha",
    },
  ];
  return (
    <div className="p-8">
      <h1 className="text-4xl text-center font-medium mb-6">
        Driven by Cinematic Art.
      </h1>
      <div className="bg-white rounded-lg p-4">
        <div className="flex flex-wrap">
          {videosUrl.map((item) => {
            return (
              <div className="w-1/3">
                <iframe
                  src={item.url}
                  className="w-full h-[200px] p-4"
                ></iframe>
                <h1 className="text-md font-semibold text-center">
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

export default FilmPage;
