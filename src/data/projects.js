import HeyloFeatured from "../assets/heylo-featured.jpg"
import PalaceFeatured from "../assets/palace-featured.jpg"
import MakioFeatured from "../assets/makio-placeholder.jpg"

export const projects = [
  {
    id: 1,
    title: "The Palace Theatre",
    tags: ["branding", "poster design"],
    img: PalaceFeatured,
    role: "Brand Designer",
    summary: "An experience brand case study about a renovated Indie cinema theatre.",
    description: "",
    featured: true,
    path: "/projects/palace",
    colSpan: 12,
  },
  {
    id: 2,
    title: "Heylo Skin Care",
    tags: ["ui/ux", "branding"],
    img: HeyloFeatured,
    role: "UI/UX Designer",
    summary: "A social app designed to help people find and join local communities around shared interests.",
    description: "",
    featured: true,
    path: "/projects/heylo",
    colSpan: 6,
  },
  {
    id: 3,
    title: "BTS Swim Motion",
    tags: ["motion graphics", "video editing"],
    img: MakioFeatured,
    role: "Motion Designer",
    summary: "A motion graphics project exploring bold typographic animation and visual storytelling.",
    description: "",
    featured: true,
    path: "/projects/motion",
    colSpan: 6,
  },
  {
    id: 4,
    title: "Makio App",
    tags: ["ui/ux", "product design"],
    img: MakioFeatured,
    role: "Product Designer",
    summary: "A community app made for people who enjoy creative hobbies",
    description: "",
    featured: true,
    path: "/projects/makio",
    colSpan: 12,
  },

]