// About page copy — provided by EMIRAAZ (about page design).
export const aboutIntro = {
  eyebrow: "About Us",
  titleBold: "Ideas Today,",
  titleLight: "A Better Tomorrow.",
  text: "EMIRAAZ is a forward-thinking company built on the belief that ideas, technology, and opportunities can create a more connected and progressive world. Founded in 2019 and headquartered in Dubai, United Arab Emirates, we are committed to building businesses, creating value, and contributing to a brighter future for people, communities, and industries.",
};

export type AboutChapter = {
  eyebrow: string;
  /** Heading, one entry per line. */
  title: [string, string];
  paragraphs: string[];
};

export const aboutChapters: AboutChapter[] = [
  {
    eyebrow: "Our Story",
    title: ["A Journey", "Driven by Purpose"],
    paragraphs: [
      "EMIRAAZ began with a simple idea — to use innovation and technology to solve real problems and create meaningful opportunities. What started as a vision has grown into a diversified group, driven by curiosity, hard work, and a passion for building solutions that make a positive impact.",
      "Our journey has been shaped by learning, adapting, and continuously exploring new possibilities. Every milestone has strengthened our belief that with the right mindset and determination, we can create long-term value for people and communities.",
    ],
  },
  {
    eyebrow: "Our Beliefs",
    title: ["Values That", "Drive Us"],
    paragraphs: [
      "We believe in the power of ideas, the importance of trust, and the value of long-term thinking. Our work is guided by a commitment to integrity, innovation, and people. We aim to build businesses that are not only successful but also create opportunities, simplify lives, and contribute to a more connected and progressive future.",
    ],
  },
  {
    eyebrow: "Our Approach",
    title: ["Building", "with Purpose"],
    paragraphs: [
      "We take a thoughtful and long-term approach to everything we do. By combining innovation with practical solutions, we focus on creating businesses that add real value.",
      "We work with a clear purpose — to identify opportunities, solve challenges, and build sustainable growth that benefits people, industries, and communities.",
    ],
  },
  {
    eyebrow: "Our Commitment",
    title: ["Creating", "a Positive Impact"],
    paragraphs: [
      "At EMIRAAZ, we are committed to making a positive difference. We strive to build businesses that create opportunities, support communities, and contribute to a smarter, more connected world. Our goal is to continue growing, learning, and creating value — today and for the generations to come.",
    ],
  },
  {
    eyebrow: "Looking Ahead",
    title: ["A More", "Connected Future"],
    paragraphs: [
      "We remain focused on the future, with a vision to create lasting impact through innovation, collaboration, and opportunity. At EMIRAAZ, we will continue to explore new possibilities, build meaningful businesses, and contribute to a brighter and more connected tomorrow.",
    ],
  },
];
