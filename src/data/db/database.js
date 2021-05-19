import Mock from "../mock";

const database = {
  information: {
    name: 'Ed Medina',
    fullName:'Edgardo Medina',
    aboutContent: "I am a frontend web developer.",
    age: 26,
    phone: '719-232-7364',
    nationality: 'American',
    language: 'English, Spanish',
    email: 'Edgardojosemedina2@gmail.com',
    address: '8801 Hunters Lake Dr. Tampa,FL 33647',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.instagram.com/edgardo_medina007/',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/edgardo-medina007/',
      dribbble: '',
      github: 'https://github.com/EMedina24'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/ed-resume.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "jQuery",
      value: 85
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Photoshop",
      value: 65
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Echelonfit.com",
      subtitle: "Multi-Language /Region site Developed  in shopify. transitioned to Gatsby",
      imageUrl: "/images/portfolio-image-10.png",
      largeImageUrl: ["/images/portfolio-image-10.png"],
      url: 'https://echelonfit.com/'
    },
    {
      id: 2,
      title: "IRONMAN.COM",
      subtitle: "Multi-Language /Region site Developed on a Ruby on Rails CMS",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1.jpg"],
      url: 'https://ironman.com'
    },
    {
      id: 3,
      title: "Run Rock N' Roll",
      subtitle: "Awesome marathon site built using SiteCore 9 CMS.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg"
        
      ],
      url: 'https://www.runrocknroll.com/'
    },
    {
      id: 4,
      title: "Club Finder App",
      subtitle: "React Admin Application that searches and manages triathlete clubs",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://preview.competitor.com/clubs/sport/tri?displayedFilters=%7B%22main%22%3Atrue%7D&filter=%7B%7D&order=ASC&page=1&perPage=10&sort=id'
    },
    {
      id: 5,
      title: "Register form",
      subtitle: "A React Register form.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: 'https://preview.competitor.com/club/create'
    },
    {
      id: 6,
      title: "Fintech",
      subtitle: "Fintech Wordpress site created during my time at Sparxoo",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
      url:"https://www.fintech.com/"
    },
   
  ],
  experience: {
    workingExperience: [


      {
        id: 1,
        year: "2021 - Present",
        position: "Web Developer",
        company: "Echelon Fitness",
        details: "Web Developer for Echelonfit.com"
      },
      {
        id: 2,
        year: "2020 - 2021",
        position: "Global Lead Developer",
        company: "IRONMAN - World Triathlon Corp.",
        details: "Lead Developer for IRONMAN.COM and RunRocknRoll.com. Much of the sites functionality made using custom react components."
      },
      {
        id: 3,
        year: "2019 - 2020",
        position: "PHP Web Developer",
        company: "Sparxoo",
        details: "PHP wordpress developer. I excelled at developing and maintaining custom wordpress sites for major companies in the Tampa bay area. "
      },
      
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 ",
        graduation: "Web Development",
        university: "Lambda",
        details: "Full-stack Web Development course provided by Lambda School"
      },
     
      
    ]
  },
  blogs: [
    
  ],
  contactInfo: {
    phoneNumbers: ['719-232-7364'],
    emailAddress: ['edgardojosemedina2@gmail.com'],
    address: "8801 Hunters Lake Dr Tampa,FL"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});