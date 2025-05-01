export type ProjectType = {
    name: string;
    description: string;
    html_url: string;
    demo_url: string;
    image_url: string;
    type: "web" | "mobile" | "game"; // 👈 Thêm type
  };
  
  export const featuredProjects: ProjectType[] = [
    {
      name: "Manga Recommendation System",
      description:
        "Built a web application that recommends similar manga titles when a user clicks on a manga, using content-based filtering and genre-based similarity.",
      html_url: "https://github.com/LongMyNgoc/Manga-Recommendation-System",
      demo_url: "https://manga-recommendation-system.vercel.app/",
      image_url:
        "https://raw.githubusercontent.com/LongMyNgoc/Manga-Recommendation-System/main/public/assets/MangaList.png",
      type: "web",
    },
    {
      name: "Multiple Choice Exam System",
      description:
        "Built a system to manage multiple-choice question banks, conduct online exams, and monitor test results.",
      html_url: "https://github.com/LongMyNgoc/Multiple-Choice-Exam-System",
      demo_url: "https://multiple-choice-eta.vercel.app/",
      image_url:
        "https://raw.githubusercontent.com/LongMyNgoc/Multiple-Choice-Exam-System/main/public/assets/Home.png",
      type: "web",
    },
    {
      name: "LINEAR PROGRAMMING AND APPLICATIONS",
      description:
        "Designed and developed a digital learning platform supporting the Linear Programming and Applications course for IT students at Ho Chi Minh City University of Education.",
      html_url: "https://github.com/LongMyNgoc/LINEAR-PROGRAMMING-AND-APPLICATIONS",
      demo_url: "https://nckh-qhtt.vercel.app/",
      image_url:
        "https://raw.githubusercontent.com/LongMyNgoc/LINEAR-PROGRAMMING-AND-APPLICATIONS/main/public/assets/Home.png",
      type: "web",
    },
    {
      name: "Pokemon Dictionary App",
      description:
        "Built a mobile Pokédex application that allows users to browse, search, and filter over 1000 Pokémon using data from the PokeAPI. Developed dynamic Pokémon detail views featuring evolutions, Mega and Gigantamax forms, descriptions, stats, abilities, and more.",
      html_url: "https://github.com/LongMyNgoc/Pokemon-Dictionary-App.git",
      demo_url: "https://youtu.be/uoEZRN--LCs?si=t145VHKBQWMe_KzA",
      image_url: "https://raw.githubusercontent.com/LongMyNgoc/Pokemon-Dictionary-App/main/assets/Home.png",
      type: "mobile",
    },
    {
      name: "Pokemon Ball Capture",
      description:
        "Pokemon Ball Capture – A simple 2D Unity game where you catch falling Pokéballs while avoiding misses. The game features increasing difficulty, level progression, and a score-based win condition.",
      html_url: "https://github.com/LongMyNgoc/Pokemon-Ball-Capture",
      demo_url: "https://longmyngoc.itch.io/pokemon-ball-capture",
      image_url: "https://img.itch.zone/aW1hZ2UvMzQ5Njc4MC8yMDg1NTQ3Ny5wbmc=/original/vsYqRG.png",
      type: "game",
    },
  ];
  