export type Project = {
    name: string;
    description: string;
    html_url: string;
    demo_url: string;
    feedback_url: string;
    image_url: string;
    type: "web" | "mobile"; // 👈 Thêm type
  };
  
  export const featuredProjects: Project[] = [
    {
      name: "Manga Recommendation System",
      description:
        "Built a web application that recommends similar manga titles when a user clicks on a manga, using content-based filtering and genre-based similarity.",
      html_url: "https://github.com/LongMyNgoc/Manga-Recommendation-System",
      demo_url: "https://manga-recommendation-system.vercel.app/",
      feedback_url: "https://forms.gle/feedback-link",
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
      feedback_url: "https://forms.gle/feedback-link",
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
      feedback_url: "https://forms.gle/feedback-link",
      image_url:
        "https://raw.githubusercontent.com/LongMyNgoc/LINEAR-PROGRAMMING-AND-APPLICATIONS/main/public/assets/Home.png",
      type: "web",
    },
    {
      name: "Pokedex App",
      description:
        "Designed and developed a personal portfolio website to show-case profile, skills, and featured projects. Built with a responsive layout, optimized performance, and smooth experience across desktop and mobile.",
      html_url: "https://github.com/LongMyNgoc/Pokedex-App",
      demo_url: "https://www.youtube.com/watch?v=sAXsprtoT9U",
      feedback_url: "https://forms.gle/feedback-link",
      image_url: "https://raw.githubusercontent.com/LongMyNgoc/Pokedex-App/main/assets/HomeScreen.png",
      type: "mobile",
    },
  ];
  