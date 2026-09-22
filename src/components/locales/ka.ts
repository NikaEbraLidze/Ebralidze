const ka = {
  title: "ენის სისტემის დემო",
  description: "ეს არის მარტივი მრავალენოვანი React აპლიკაცია",
  button: "ენის შეცვლა",
  header: {
    logo: "ებრალიძე",
    nav: {
      home: "მთავარი",
      blog: "ბლოგი",
      contact: "კონტაქტი",
    },
    mobileMenu: "მეტი",
    availableBadge: "მზად ვარ სამუშაოდ",
    social: {
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    languageToggle: {
      en: "KA",
      ka: "EN",
    },
    logoAria: "ნიკოლოზ ებრალიძის ლოგო",
    navAria: "მთავარი ნავიგაცია",
  },
  home: {
    heroSection: {
      greeting: "გამარჯობა, მე ვარ",
      name: "ნიკოლოზ ებრალიძე",
      title: "Full-Stack დეველოპერი",
      description: {
        main: "Full-stack დეველოპერი ძლიერი backend საფუძვლით. React, TypeScript, NestJS და PostgreSQL ცოცხალ პროდუქტებზე. Authforge-ის ავტორი, Node.js-ის open-source auth ბიბლიოთეკა.",
      },
      cta: {
        primary: "დამიკავშირდი",
        secondary: "ნახე ჩემი ნამუშევრები",
      },
      profileAlt: "ნიკოლოზ ებრალიძის პროფილის ფოტო",
      badge: "ღია ვარ ახალი შესაძლებლობებისთვის",
      bento: {
        stackLabel: "მთავარი სტეკი",
        statValue: "2",
        statLabel: "წელი კოდისა და შიფინგისა",
      },
    },
    exploreWork: {
      heading: "გამოცდილება",
      dateRange: "2025 - დღემდე",
      projects: {
        earthVoyage: {
          title: "Earth Voyage",
          role: "Software Engineer · სრული განაკვეთი, დისტანციური",
          period: "მაისი 2025 - დღემდე",
          description:
            "ცოცხალი პლატფორმა აშშ-ის ბაზრისთვის. ზუსტი UI Figma-დან, PDF გენერაცია და NestJS API-ები ავთენტიფიკაციისა და პროდუქტის ლოგიკისთვის.",
          highlights: [
            "ვიშიფავ production ფიჩერებს React, TypeScript, NestJS და PostgreSQL-ზე",
            "ვაშენებ რესპონსულ UI-ს Figma-დან; ვაუმჯობესებ მნიშვნელოვან flow-ებს",
            "ვმუშაობ PDF გენერაციაზე ბეჭდვადი ბარათებისთვის",
            "ვთანამშრომლობ კვირის agile სპრინტებში senior ინჟინრებთან",
          ],
          imageAlt: "Earth Voyage პლატფორმა",
        },
        tourlify: {
          title: "Tourlify",
          role: "Backend Developer · ნახევარი განაკვეთი, დისტანციური",
          period: "ივნისი 2025 - თებერვალი 2026",
          description:
            "Backend მოგზაურობის სოციალური პლატფორმისთვის. REST API-ები, JWT და სქემები PostgreSQL-სა და MongoDB-ში.",
          highlights: [
            "ავაწყვე REST API-ები, JWT ავთენტიფიკაცია და მონაცემთა მოდელები",
            "გავაუმჯობესე სქემები PostgreSQL-სა და MongoDB-ში",
            "მოგვიანებით გავაუმჯობესე რესპონსული UI და ჩავერთე code review-ებში",
          ],
          imageAlt: "Tourlify პლატფორმა",
        },
      },
    },
    featuredProjects: {
      heading: "რჩეული პროექტები",
      seeAll: "ყველა პროექტი",
      projects: {
        authforge: {
          title: "Authforge",
          tagline: "ღია წყაროს Node.js ავტენტიფიკაციის ბიბლიოთეკა",
          description:
            "ავტენტიფიკაციისა და მომხმარებლის მართვის ბიბლიოთეკა Node.js-ისთვის, შთაგონებული ASP.NET Core Identity-ით. მომხმარებლის ციკლი, როლები, JWT refresh როტაცია, lockout და ელფოსტის ვერიფიკაცია ერთ პაკეტში.",
          imageAlt: "Authforge პროექტის ნიშანი",
          highlights: [
            "UserManager და RoleManager პლაგინურ hasher, email და token სერვისებით",
            "JWT + refresh-token როტაცია, ჰეშირებული ტოკენები და security_stamp",
            "NestJS მოდული და Express middleware; მკაცრი TypeScript",
          ],
        },
        f1AeroLab: {
          title: "F1 AeroLab",
          tagline: "სრულფასოვანი აეროდინამიკის სიმულატორი",
          description:
            "საგანმანათლებლო პლატფორმა, სადაც F1 მანქანის პარამეტრებს აყენებ და აეროდინამიკური ძალები ცოცხლად ახლდება WebSocket-ით, გრაფიკებით სიჩქარის სრულ დიაპაზონზე.",
          imageAlt: "F1 AeroLab პროექტის ნიშანი",
          highlights: [
            "Next.js ფრონტი Zustand-ით, Socket.io-თი და ცოცხალი Recharts გრაფიკებით",
            "NestJS ბექენდი: REST + WebSocket სიმულაცია, Prisma და Swagger",
            "Preset CRUD, EN/KA i18n და SEO Learn/Build გვერდებზე",
          ],
        },
        hotel: {
          title: "Hotel Management System",
          tagline: "ASP.NET Core Web API",
          description:
            "მხოლოდ ბექენდის სასტუმროს სამუშაო პროცესის API: ჯავშნები, სტუმრები, ინვოისები, რეპორტინგი და ადმინ ლოგიკა. საკურსო პროექტი, მაგრამ მთლიანად ჩემი კოდი.",
          imageAlt: "Hotel Management System მიმოხილვა",
          highlights: [
            "C#, ASP.NET Core, Entity Framework და SQL Server",
            "JWT ავტენტიფიკაცია როლებზე დაფუძნებული წვდომით",
            "სუფთა გამიჯვნა ჯავშნის, გადახდისა და რეპორტინგის ნაკადებში",
          ],
        },
        inboxify: {
          title: "Inboxify",
          tagline: "სრულფასოვანი ელ.ფოსტის პლატფორმა",
          description:
            "Gmail-ის სტილის ელ.ფოსტის აპი ბოლომდე: ავტენტიფიკაცია, დაწერა, გაგზავნა, დრაფტები და წაშლა. მხოლოდ GitHub-ზეა; ჯერ არ არის დეპლოი.",
          imageAlt: "Inboxify ელ.ფოსტის პლატფორმის მიმოხილვა",
          highlights: [
            "React + Node.js + PostgreSQL საკუთრება ფრონტიდან ბექამდე",
            "ანგარიში, დაწერა, გაგზავნა, დრაფტები და წაშლა",
            "პატიოსანი სტატუსი: მხოლოდ რეპოზიტორი, არ არის დეპლოი",
          ],
        },
        platrack: {
          title: "Platrack",
          tagline: "მრავალპლატფორმიანი ძებნა",
          description:
            "ერთიანი საძიებო UI YouTube, TikTok, Wikipedia და Spotify-სთვის. YouTube ძებნა მუშაობს; სხვა წყაროები დაგეგმილი იყო, მაგრამ სრულად არ დასრულებულა.",
          imageAlt: "Platrack საძიებო პლატფორმის ინტერფეისი",
          highlights: [
            "React + Node.js REST API დიზაინით ბოლომდე",
            "მესამე მხარის API ინტეგრაცია და შედეგების აგრეგაცია",
            "პატიოსანი სტატუსი: YouTube მუშაობს; სხვები დაუსრულებელია",
          ],
        },
      },
    },
    cta: {
      heading: "შევქმნათ რაიმე ერთად",
      description:
        "ღია ვარ full-stack ან backend როლებისთვის: remote, hybrid ან on-site. მომწერე და მითხარი, რას აშენებ.",
      emailLabel: "nikaebralidze21@gmail.com",
      social: {
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    faq: {
      heading: "ხშირი კითხვები",
      items: {
        who: {
          question: "როგორი დეველოპერი ხარ?",
          answer:
            "Full-stack ვარ ძლიერი ბექენდის საფუძვლით. ბექენდი ყველაზე მეტად მიყვარს, მაგრამ ნამდვილად full-stack ვარ და არჩევანისას full-stack როლებს ვამჯობინებ, ფიჩერებს ვფლობ მონაცემთა ბაზიდან UI-მდე.",
        },
        learning: {
          question: "როგორ ეკიდები სწავლას?",
          answer:
            "როგორც დეველოპერი, მუდმივად ვცდილობ ახალი რამების სწავლას და მრავალფეროვან პროექტებზე მუშაობას. ცოდნას ვავითარებ რამდენიმე მიმართულებით, არა ხაზოვნად, რომ გამოცდილ და მაღალკვალიფიციურ პროგრამულ ინჟინრად ჩამოვყალიბდე.",
        },
        experience: {
          question: "რამდენი გამოცდილება გაქვს?",
          answer:
            "სულ დაახლოებით 2 წელი კოდი: დაახლოებით ერთი წელი პირადი/სწავლა და ერთი წელი პროფესიული. ვარ Software Engineer Earth Voyage-ზე (ცოცხალი US postcard პროდუქტი) და ადრე ვიყავი Backend Developer Tourlify-ზე.",
        },
        stack: {
          question: "რომელ სტეკებთან მუშაობ?",
          answer:
            "ძირითადი სტეკები, რომლებთანაც თავდაჯერებულად ვმუშაობ: Node.js / NestJS / Express + TypeScript, React, PostgreSQL, MongoDB და C# / ASP.NET Core / Entity Framework / SQL Server. ასევე ვაღრმავებ NestJS-ს, Docker-ს და AI-assisted workflow-ებს, არა Java-ს ან Spring-ს.",
        },
        roles: {
          question: "რა როლებს ეძებ?",
          answer:
            "პრიორიტეტი: full-stack (React + Node.js / NestJS), backend Node.js / NestJS, .NET / C# backend, შემდეგ ძლიერი frontend-heavy React როლები. Remote, hybrid ან on-site, ნებისმიერი ფორმატი მისაღებია.",
        },
        authforge: {
          question: "რა არის Authforge?",
          answer:
            "ჩემი ყველაზე ძლიერი სიგნალი ახლა: ღია წყაროს Node.js ავტენტიფიკაციის ბიბლიოთეკა, რომელიც მე დავწერე და შთაგონებულია ASP.NET Core Identity-ით. მოიცავს UserManager/RoleManager-ს, JWT refresh როტაციას, lockout-ს, ელფოსტის ვერიფიკაციას და NestJS + Express ინტეგრაციას. v1 საჯაროა GitHub-ზე; npm პუბლიკაცია დაგეგმილია.",
        },
        location: {
          question: "სად ცხოვრობ და რა ენებზე საუბრობ?",
          answer:
            "თბილისში, საქართველო. ქართული მშობლიურია; ინგლისური B2 პროფესიული კითხვის, წერისა და საუბრისთვის, და აქტიურად ვიუმჯობესებ.",
        },
      },
    },
  },
  footer: {
    socMedia: {
      linkedin: "LinkedIn",
      gmail: "Gmail",
      github: "Github",
      facebook: "Facebook",
    },
    copyright: "© 2026 ებრალიძე. ყველა უფლება დაცულია.",
    signature: {
      design: "დიზაინი & კოდი ჩემ მიერ",
      updated: "ბოლო განახლება: იან 2026",
    },
  },
};

export default ka;
