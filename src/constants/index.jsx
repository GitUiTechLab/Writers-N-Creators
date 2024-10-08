import ContentImage1 from "../assets/content_image1.png";
import ContentImage2 from "../assets/content_image2.png";
import ContentImage3 from "../assets/content_image3.png";
import PhoneIcon from "../assets/phone_icon.png";
import MapIcon from "../assets/map_icon.png";
import MailIcon from "../assets/mail_icon.png";
import ResearchImage from "../assets/research_image.png";
import CreativeDesignImage from "../assets/creative_image.png";
import CopyrightImage from "../assets/copywrite_image.png";
import PrintingImage from "../assets/printing_image.png";
import Brochers from "../assets/brochers.png";
import Posters from "../assets/posters.png";
import Leaflets from "../assets/leaflets.png";
import ShortFilmScript from "../assets/contentScriptWritting_image.png";
import ContentWrittingImage from "../assets/contentWritting_image.png";
import {
  AudioVideo,
  BiharAquaExpo,
  BiharDairyExpo,
  BiharShortFilm,
  BrandingAdvertising,
  EventExhibition,
  GiftsNMisc,
  HandShakeIcon,
  IdeaIcon,
  OutcomesIcon,
  PrintPublications,
  PublicRelations,
  RequestIcon,
  TeamworkIcon,
} from "../assets";

export const contentDetails = [
  {
    id: 1,
    image: ContentImage1,
    path: "/iec-content",
    header: "IEC Material",
    listItems: ["Brochures", "Leaflets", "Storybooks"],
  },
  {
    id: 2,
    image: ContentImage2,
    path: "/content-writting",
    header: "Content Writing",
    listItems: [
      "Script for short films",
      "Script for Doordarshan",
      "Content writing for website",
    ],
  },
  {
    id: 3,
    image: ContentImage3,
    path: "/wnc-home-creation",
    header: "WNC Home Creation",
    listItems: ["KRISHIKA- an agriculture periodical"],
  },
];

export const footerContent = [
  {
    icon: PhoneIcon,
    header: "203-638-8150",
  },
  {
    icon: MailIcon,
    header: "Info@cgn.com ",
  },
  {
    icon: MapIcon,
    header: "Lorem Ipsum is simply dummy text of",
  },
];

export const ourApproachContent = [
  {
    id: 1,
    image: ResearchImage,
    header: "1.Research and Content Development:",
    content: [
      "Conducted in-depth research on Bihar’s tourist attractions.",
      "Collaborated with local historians and tourism experts to gather accurate information.",
      "Developed engaging content that appeals to a wide audience.",
    ],
  },
  {
    id: 2,
    image: CreativeDesignImage,
    header: "2.Creative Design:",
    content: [
      "Designed visually appealing layouts with high-quality images and graphics.",
      "Ensured the brochures reflect the vibrant culture and heritage of Bihar.",
      "Used a consistent and attractive color scheme to enhance readability and visual appeal.",
    ],
  },
  {
    id: 3,
    image: CopyrightImage,
    header: "3.Copywriting and Editing:",
    content: [
      "Crafted compelling narratives and descriptions for each tourist spot.",
      "Emphasized unique aspects of each location to entice potential visitors.",
      "Thoroughly edited and proofread the content to ensure accuracy and clarity.",
    ],
  },
  {
    id: 4,
    image: PrintingImage,
    header: "4.Printing and Production:",
    content: [
      "Selected premium quality paper and printing techniques to ensure durability.",
      "Produced brochures in multiple languages to cater to a diverse audience.",
      "Ensured timely delivery and adherence to the highest production standards.",
    ],
  },
];

export const IceMaterialsContent = [
  {
    mainHeader: "Materials Created/Highlights",
    content: [
      {
        id: 1,
        mainHeader: "1.Brochers",
        image: Brochers,
        header: "Empowering Communities Through Panchayati Raj",
        subHeader:
          "Detailed brochures providing in-depth information on various Panchayati Raj initiatives.",
      },
      {
        id: 2,
        mainHeader: "2.Leaflets",
        image: Leaflets,
        header: "Understanding Panchayati Raj",
        subHeader:
          "A concise guide explaining the structure and functions of the Panchayati Raj system.",
      },
      {
        id: 3,
        mainHeader: "3.Posters",
        image: Posters,
        header: "Roles and Responsibilities of Panchayat Members",
        subHeader:
          "Visual aids illustrating the duties and responsibilities of Panchayat members.",
      },
    ],
  },
];

export const contentWrittingContent = [
  {
    mainHeader: "Materials Created/Highlights",
    content: [
      {
        id: 1,
        image: ShortFilmScript,
        mainHeader: "1.Script for short films/Doordarshan",
        header: "Lorem ipsum dolor sit amet consectetur.",
        subHeader:
          "Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin tortor et nibh mattis feugiat eget.",
      },
      {
        id: 2,
        image: ContentWrittingImage,
        mainHeader: "2.Content writing for website",
        header: "Lorem ipsum dolor sit amet consectetur.",
        subHeader:
          "Lorem ipsum dolor sit amet consectetur. Nisl hendrerit eu quam volutpat.",
      },
    ],
  },
];

export const NavbarContent = [
  {
    item: "About Us",
    link: "/about-us",
  },
  {
    item: "Services",
    subItems: [
      {
        item: "Events & exhibitions",
        link: "/eventsExhibitions",
      },
      {
        item: "Printing & Production",
        link: "/printingProductions",
      },
      {
        item: "Audio & Video",
        link: "/audioVideo",
      },
      {
        item: "Public Realtions",
        link: "/publicRelations",
      },
      {
        item: "Gifts & Misc Articles",
        link: "/giftsMiscarticles",
      },
      {
        item: "Branding & Advertising",
        link: "/brandingAdvertising",
      },
    ],
    link: "/section",
  },
  {
    item: "Portfolio",
    link: "/portfolio",
  },
  {
    item: "Careers",
    link: "/careers",
  },
  {
    item: "Blog",
    link: "/blog",
  },
];

export const HomePortfolioContent = [
  {
    image: BiharAquaExpo,
    header: "Bihar Poultry & Aqua Expo 2019",
  },
  {
    image: BiharShortFilm,
    header: "Short Film for BUIDCO",
  },
  {
    image: BiharDairyExpo,
    header: "Bihar Dairy & Cattle Expo 2023",
  },
];

export const HomeServiceSectionContent = [
  {
    image: EventExhibition,
    header: "Events & Exhibitions",
  },
  {
    image: PrintPublications,
    header: "Print and Production",
  },
  {
    image: AudioVideo,
    header: "Audio and Video",
  },
  {
    image: PublicRelations,
    header: "Public Relation",
  },
  {
    image: GiftsNMisc,
    header: "Gifts & Misc. Articles",
  },
  {
    image: BrandingAdvertising,
    header: "Branding and Advertising",
  },
];

export const WhyChooseUsContent = [
  {
    image: IdeaIcon,
    header: "Innovative Solutions",
    content:
      "We specialize in delivering creative and original content, ensuring your message resonates with your audience.",
  },
  {
    image: RequestIcon,
    header: "Comprehensive serivices",
    content:
      "From crafting compelling write-ups to organizing seamless events, we cover all your content and event management needs.",
  },
  {
    image: OutcomesIcon,
    header: "Proven Success",
    content:
      "Our track record includes a wide range of successful events and high-quality content projects, demonstrating our reliability and dedication to excellence.",
  },
  {
    image: TeamworkIcon,
    header: "Experienced Team",
    content:
      "Our skilled writers, editors, and event planners bring years of experience and a passion for quality to every project.",
  },
  {
    image: HandShakeIcon,
    header: "Client-Centric Approach",
    content:
      "We collaborate closely with you to understand your vision and objectives, tailoring our services to meet your specific goals.",
  },
  {
    image: HandShakeIcon,
    header: "Client-Centric Approach",
    content:
      "We collaborate closely with you to understand your vision and objectives, tailoring our services to meet your specific goals.",
  },
];

