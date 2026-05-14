import atw from "@/assets/images/atw.png";
import bizkeeper from "@/assets/images/bizkeeper.png";
import blog1 from "@/assets/images/blog1.png";
import bookify from "@/assets/images/bookify.png";
import courviaship from "@/assets/images/courviaship.png";
import hop from "@/assets/images/hop.png";
import lernstasy from "@/assets/images/lernstasy.png";
import movizio from "@/assets/images/movizio.png";
import pixenai from "@/assets/images/pixenai.png";
import rellaLuxury from "@/assets/images/rella-luxury.png";

const works = [
    {
        id: "atw",
        image: atw,
        title: "ATW HQ",
        description:
            " ATW HQ is a property hunting platform designed to help users easily find, explore, and manage real estate listings",
        techs: ["MongoDB", "TypeScript", "Vue", "Express.js", "Pinia"],
        link: "https://atwproperties.vercel.app/",
        label: "Full Stack",
        github: "",
        howIMadeIt:
            "Developed a full stack real estate platform with Vue, TypeScript, Express.js, and MongoDB. Designed reusable UI components, centralized application state using Pinia, and implemented property filtering, listing management, and responsive layouts.",
        dateBuilt: "2025",
    },

    {
        id: "bizkeeper",
        image: bizkeeper,
        title: "BizKeeper",
        description: "BizKeeper is a modern business management platform built to help business owners manage purchases, inventory records, analytics, and operational workflows through a centralized digital system.",
        techs: ["MongoDB", "TypeScript", "Vue" ,"Express.js" ,"Pinia"],
        link: "https://bizkeeper.pxxl.click/",
        label: "Business Platform",
        github: "",
        howIMadeIt: "Developed a business management platform focused on purchase tracking, operational organization, and analytics driven workflows. Built reusable dashboard components, structured data management systems, and responsive interfaces to support scalable business operations efficiently.",
        dateBuilt: "2025",
    },

    {
        id: "bookify",
        image: bookify,
        title: "Bookify",
        description:
            "Bookify is a modern booking and reservation platform designed to streamline appointment scheduling and service management with a clean and user friendly experience.",
        techs: ["MongoDB", "TypeScript", "Vue", "Express.js", "Pinia"],
        link: "https://bookifyapp.vercel.app/",
        label: "Full Stack",
        github: "",
        howIMadeIt:
            "Built a responsive booking platform with modern frontend architecture and dynamic scheduling workflows. Implemented reusable UI components, state management, and scalable backend integrations to handle reservations and user interactions efficiently.",
        dateBuilt: "2025",
    },
    {
        id: "courviaship",
        image: courviaship,
        title: "Courvia Ship",
        description:
            "Courvia Ship is a logistics and shipping platform built to simplify package tracking, shipment management, and delivery operations through a modern digital interface.",
        techs: ["MongoDB", "TypeScript", "Vue", "Express.js", "Pinia"],
        link: "https://courvia-ship.vercel.app/",
        label: "Full Stack",
        github: "",
        howIMadeIt:
            "Developed a logistics management platform focused on shipment workflows and tracking experiences. Structured the application with reusable frontend components, centralized state management, and scalable backend architecture for handling delivery operations.",
        dateBuilt: "2025",
    },
    {
        id: "movizio",
        image: movizio,
        title: "Movizio",
        description:
            "Movizio is a movie discovery platform that allows users to explore trending films, search movie collections, and access detailed entertainment information through an engaging interface.",
        techs: ["MongoDB", "TypeScript", "Vue", "Express.js", "Pinia"],
        link: "https://movizio.vercel.app/",
        label: "Frontend",
        github: "",
        howIMadeIt:
            "Built an interactive movie discovery experience with dynamic content rendering and responsive layouts. Integrated movie data handling, search functionality, and optimized UI interactions to create a smooth browsing experience.",
        dateBuilt: "2025",
    },
    {
        id: "hop",
        image: hop,
        title: "House of Peishy",
        description:
            "House of Peishy is a modern fashion and lifestyle brand platform showcasing curated products, elegant visuals, and a premium shopping inspired experience.",
        techs: ["MongoDB", "TypeScript", "Vue", "Express.js", "Pinia"],
        link: "https://houseofpeishy.vercel.app/",
        label: "Frontend",
        github: "",
        howIMadeIt:
            "Designed and developed a visually rich brand experience focused on elegant layouts, responsive design, and premium UI presentation. Structured reusable sections and smooth interactions to strengthen the overall user experience.",
        dateBuilt: "2025",
    },
    {
        id: "pixenai",
        image: pixenai,
        title: "Pixen AI",
        description:
            "Pixen AI is an AI powered creative platform designed to enhance digital workflows through intelligent image generation and modern user interactions.",
        techs: ["MongoDB", "TypeScript", "Vue", "Express.js", "Pinia"],
        link: "https://pixenai.vercel.app/",
        label: "AI Platform",
        github: "",
        howIMadeIt:
            "Built an AI focused platform with a modern frontend architecture and interactive design system. Implemented responsive UI components, optimized user flows, and integrated intelligent creative experiences into the application workflow.",
        dateBuilt: "2025",
    },
    {
        id: "blog1",
        image: blog1,
        title: "TechPulse",
        description:
            "TechPulse is a modern technology blog platform focused on delivering curated articles, industry insights, and engaging reading experiences for tech enthusiasts.",
        techs: ["MongoDB", "TypeScript", "Vue", "Express.js", "Pinia"],
        link: "https://techpulseapp.vercel.app/",
        label: "Frontend",
        github: "",
        howIMadeIt:
            "Developed a content focused platform with responsive article layouts, structured content presentation, and reusable UI patterns. Focused on readability, navigation flow, and modern frontend performance optimizations.",
        dateBuilt: "2025",
    },
    {
        id: "lernstasy",
        image: lernstasy,
        title: "Lernstasy",
        description:
            "Lernstasy is an online learning platform built to provide accessible educational experiences through interactive course presentation and modern learning interfaces.",
        techs: ["MongoDB", "TypeScript", "Vue", "Express.js", "Pinia"],
        link: "https://lernstasy.vercel.app/",
        label: "EdTech",
        github: "",
        howIMadeIt:
            "Built an educational platform with structured course layouts, reusable learning components, and responsive user experiences. Focused on clean navigation systems, scalable UI architecture, and engaging educational workflows.",
        dateBuilt: "2025",
    },
    {
        id: "rella-luxury",
        image: rellaLuxury,
        title: "Rella Luxury",
        description:
            "Rella Luxury is a premium luxury car rental platform designed to showcase high end vehicles, streamline reservations, and deliver a refined digital booking experience.",
        techs: ["MongoDB", "TypeScript", "Vue", "Express.js", "Pinia"],
        link: "https://rella-luxury.vercel.app/",
        label: "Full Stack",
        github: "",
        howIMadeIt:
            "Developed a premium vehicle rental platform with responsive layouts, booking workflows, and scalable frontend architecture. Implemented reusable UI systems, modern animations, and structured application flows to enhance the luxury user experience.",
        dateBuilt: "2025",
    },
];

export type Work = (typeof works)[number];

export default works
