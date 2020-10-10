import Mock from "../mock";

const database = {
  information: {
    name: 'Ed Medina',
    fullName:'Edgardo Medina',
    aboutContent: "I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.",
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
      title: "IRONMAN.COM",
      subtitle: "Multi-Language /Region site Developed on a Ruby on Rails CMS",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://ironman.com'
    },
    {
      id: 2,
      title: "Run Rock N' Roll",
      subtitle: "Awesome marathon site built using SiteCore 9 CMS.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg"
        
      ],
      url: 'https://www.runrocknroll.com/'
    },
    {
      id: 3,
      title: "Club Finder App",
      subtitle: "React Admin Application that searches and manages triathlete clubs",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://preview.competitor.com/clubs/sport/tri?displayedFilters=%7B%22main%22%3Atrue%7D&filter=%7B%7D&order=ASC&page=1&perPage=10&sort=id'
    },
    {
      id: 4,
      title: "Register form",
      subtitle: "A React Register form.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: 'https://preview.competitor.com/club/create'
    },
    {
      id: 5,
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
        year: "2019 - Present",
        position: "Global Lead Developer",
        company: "IRONMAN - World Triathlon Corp.",
        details: "Lead Developer for IRONMAN.COM and RunRocknRoll.com. Much of the sites functionality made using custom react components."
      },
      {
        id: 2,
        year: "2018 - 2019",
        position: "PHP Web Developer",
        company: "Sparxoo",
        details: "PHP wordpress developer. I excelled at developing and maintaining custom wordpress sites for major companies in the Tampa bay area. "
      },
      
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - 2020",
        graduation: "Web Development",
        university: "Lambda",
        details: "Full-stack Web Development course provided by Lambda School"
      },
      {
        id: 2,
        year: "2018 - 2020",
        graduation: "Bachelor of Science in Computer Science ",
        university: "Purdue University",
        
      },
      
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+012-3456-7891', '+012-3456-7892'],
    emailAddress: ['admin.sitename@example.com', 'info.sitename@example.com'],
    address: "121 King Street, Melbourne, Victoria 3000, Australia"
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