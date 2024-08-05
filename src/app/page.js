import ImageSlider from "@/components/carusel/imageSlider";

export default function Home() {
  const slides = [
    {
      image: 'https://www.judoinside.com/photos/hans/2021/Olympic_Games_Tokyo/831_20210728_ijf_90kg_final_geo_bekauri_vs_ger_trippel_c_edf.jpg',
      title: 'Lasha Bekauri Won Second Olympic Gold in Paris',
      description: 'Georgian judoka Lasha Bekauri has won his second Olympic gold medal at the Paris 2024 Olympics, showcasing exceptional skill and determination.'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2020/04/22/10/40/georgia-5077358_1280.jpg',
      title: 'Spend Your Holiday in Beautiful Batumi',
      description: 'Enjoy a relaxing holiday in Batumi, Georgia,s coastal gem. With its stunning beaches, vibrant nightlife, and rich culture, Batumi offers the perfect getaway for all travelers.'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg',
      title: 'Fast Food Delights',
      description: 'Explore quick, tasty meals from classic burgers to innovative bites, perfect for any craving.'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2017/08/27/15/38/surfing-2686450_1280.jpg',
      title: ' Embrace the Thrill of Surfing',
      description: 'Ride the waves and experience the excitement of surfing, a sport that offers adventure and fun for all levels.'
    }
  ];

  return (
    <div>
      <ImageSlider slides={slides} />
    </div>
  );
}
