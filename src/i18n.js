import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const BRAND_EN = 'NATIONAL UNIVERSITY OF MANAGEMENT';
const BRAND_KM = 'សាកលវិទ្យាល័យជាតិគ្រប់គ្រង';

export const resources = {
  en: {
    translation: {
      brand: {
        short: 'NUM',
        english: BRAND_EN,
        khmer: BRAND_KM,
        primary: BRAND_EN,
        secondary: BRAND_KM,
      },
      language: {
        switchTo: 'Switch to Khmer',
        next: 'ខ្មែរ',
      },
      nav: {
        home: 'Home',
        faculties: 'Faculties',
        admissions: 'Admissions',
        apply: 'Apply for 2026',
        close: 'Close menu',
        toggle: 'Toggle menu',
      },
      common: {
        explorePrograms: 'Explore Programs',
        viewAllPrograms: 'View all programs',
        applyNow: 'Apply Now',
        admissionDetails: 'Admission Details',
        viewAdmissionRequirements: 'View Admission Requirements',
        comparePrograms: 'Compare Programs',
        beginApplication: 'Begin Application',
        viewTuition: 'View Tuition',
        popular: 'Popular',
        step: 'Step',
      },
      home: {
        hero: {
          badge: 'Digital Marketing Campaign for NUM',
          title: BRAND_EN,
          subtitle: BRAND_KM,
          description: 'A modern digital marketing website to promote NUM, increase student interest, and guide future applicants toward programs and admissions.',
          stats: {
            students: 'Students',
            alumni: 'Alumni',
            staff: 'Academic Staff',
            ranking: 'WURI Global',
          },
        },
        campaign: {
          badge: 'Digital Marketing Topic',
          title: 'Promote NUM with a clear student recruitment funnel.',
          description: 'This website is a digital marketing campaign for the National University of Management. It uses official school identity, strong proof points, program benefits, scholarship information, and direct admission calls to action.',
          goals: {
            awareness: {
              label: 'Awareness',
              value: 'Show why NUM is a leading Cambodian university.',
            },
            consideration: {
              label: 'Consideration',
              value: 'Help students compare programs, scholarships, and outcomes.',
            },
            conversion: {
              label: 'Conversion',
              value: 'Move qualified students toward the 2026 application.',
            },
          },
          channels: {
            search: {
              title: 'Search Visibility',
              description: 'Promote NUM programs through search-focused pages for students comparing business, law, technology, and digital economy degrees.',
            },
            video: {
              title: 'Short-Form Video',
              description: 'Turn campus life, student success, labs, and scholarship stories into motion content for high-attention platforms.',
            },
            social: {
              title: 'Social Campaigns',
              description: 'Use clear messaging for Facebook, Instagram, Telegram, and LinkedIn to reach students, parents, alumni, and partners.',
            },
            conversion: {
              title: 'Conversion Tracking',
              description: 'Guide traffic from awareness to program exploration, admission details, and the application form.',
            },
          },
        },
        why: {
          subtitle: 'Why Choose NUM',
          title: 'Built For Ambitious Students',
          description: 'A focused university experience for business, technology, law, public policy, and leadership in the digital economy.',
          cards: {
            ranking: {
              title: 'Globally Ranked Innovation',
              description: 'Recognized in the WURI Global Top 500 and built around practical, future-facing education.',
            },
            pathways: {
              title: 'International Pathways',
              description: 'Study with global exposure through exchange, dual-degree frameworks, and partner universities.',
            },
            digital: {
              title: 'Digital-First Programs',
              description: 'FinTech, blockchain, digital economy, policy, business, law, and computer science programs.',
            },
            network: {
              title: 'Industry-Ready Network',
              description: 'Connect with faculty, alumni, and employers across Cambodia and the wider region.',
            },
          },
        },
        programs: {
          subtitle: 'Academic Excellence',
          title: 'Programs With Momentum',
          description: 'Explore programs designed around real industry needs, international exposure, and practical skill-building.',
          digital: {
            title: 'Faculty of Digital Economy',
            description: 'Future-focused English-based degrees across financial technology, digital business, smart cities, and computing.',
            degrees: ['FinTech & Blockchain', 'Digital Economy', 'Computer Science', 'Smart City Planning'],
          },
          business: {
            title: 'Business, Finance & Law',
            description: 'NUM core programs for students preparing for leadership in commerce, banking, accounting, and legal practice.',
            degrees: ['Business Administration', 'Finance & Banking', 'International Law', 'Accounting'],
          },
          policy: {
            title: 'School of Public Policy',
            description: 'Postgraduate and undergraduate pathways for governance, diplomacy, public policy, and international relations.',
            degrees: ['Public Policy', 'International Relations', 'Digital Governance', 'Development Studies'],
          },
        },
        stats: {
          studentPopulation: 'Student Population',
          degreePrograms: 'Degree Programs',
          academicStaff: 'Academic Staff',
          alumniNetwork: 'Alumni Network',
          globalPartners: 'Global Partners',
        },
        campus: {
          badge: 'Campus Experience',
          title: 'Learn in a campus built for ideas, teams, and momentum.',
          description: 'From innovation labs to clubs and career support, NUM gives students a strong environment to test ideas and build confidence.',
          items: {
            lab: 'Innovation Lab',
            clubs: 'Student Clubs',
            library: 'Digital Library',
            career: 'Career Support',
          },
        },
        testimonials: {
          sokha: {
            quote: 'NUM gave me the confidence and skills to pursue my dream career in FinTech.',
            name: 'Sokha Vann',
            role: 'BSc Digital Economy',
          },
          dara: {
            quote: 'The international exposure and mentorship prepared me for leadership roles.',
            name: 'Dara Pich',
            role: 'MBA Graduate',
          },
          maly: {
            quote: 'The faculty, clubs, and global network made university feel connected to real opportunity.',
            name: 'Maly Chea',
            role: 'International Relations',
          },
        },
        scholarships: {
          subtitle: 'Financial Support',
          title: 'Scholarship Opportunities',
          description: 'Merit-based awards help talented students turn academic potential into real momentum.',
          excellence: {
            name: 'NUM Excellence Scholarship',
            coverage: '100% Tuition',
          },
          innovation: {
            name: 'Digital Innovation Grant',
            coverage: '50% Tuition',
          },
          asean: {
            name: 'ASEAN Partnership Award',
            coverage: '$1,000 Stipend',
          },
        },
        partners: {
          subtitle: 'Global Network',
          title: 'Industry & University Partners',
          description: 'A growing network of institutions and organizations connects NUM students with broader academic and professional pathways.',
          note: '360+ outbound students | 300+ inbound international students | 56+ partner institutions',
        },
        cta: {
          title: 'Your future starts at NUM.',
          description: 'Applications for the 2026 intake are open for students ready to move with purpose.',
        },
      },
      faculties: {
        hero: {
          badge: 'Academic Excellence',
          title: 'Faculties and programs built for modern careers.',
          description: 'Explore technology, business, finance, law, governance, and global pathways designed for students who want practical momentum.',
        },
        tabs: {
          digital: {
            name: 'Faculty of Digital Economy',
            tagline: "Powering Cambodia's Digital Future",
            description: "NUM's flagship innovation faculty builds practical technology, finance, data, and digital economy skills for the next generation of leaders.",
          },
          business: {
            name: 'Business, Finance & Law',
            tagline: 'Legacy Strengths, Modern Edge',
            description: "NUM's core business and law programs prepare students for leadership in commerce, banking, accounting, management, and legal practice.",
          },
          policy: {
            name: 'School of Public Policy',
            tagline: "Shaping Tomorrow's Policy Leaders",
            description: 'The School of Public Policy develops governance, diplomacy, research, and policy talent for Cambodia and Southeast Asia.',
          },
        },
        programMeta: {
          years4: '4 years',
          years2: '2 years',
          english: 'English',
          khmerEnglish: 'Khmer / English',
        },
        programs: {
          fintech: {
            name: 'BSc FinTech',
            description: 'Study blockchain, digital payments, cryptocurrency, financial innovation, and applied fintech projects.',
          },
          digitalEconomy: {
            name: 'BSc Digital Economy',
            description: 'Explore how digital platforms, data, and technology reshape markets, organizations, and public systems.',
          },
          computerScience: {
            name: 'BSc Computer Science',
            description: 'Build software engineering, algorithms, data science, and AI foundations through practical coursework.',
          },
          smartCity: {
            name: 'BSc Smart City Planning',
            description: 'Design smarter urban systems with IoT, GIS mapping, analytics, and sustainable city planning.',
          },
          finance: {
            name: 'BBA Finance & Banking',
            description: 'Develop financial analysis, investment, banking operations, and corporate finance capability.',
          },
          management: {
            name: 'BBA Management',
            description: 'Build leadership, operations, strategy, and entrepreneurship skills for modern organizations.',
          },
          law: {
            name: 'Bachelor of Business Law',
            description: 'Study commercial law, intellectual property, trade rules, contracts, and governance.',
          },
          accounting: {
            name: 'BBA Accounting',
            description: 'Prepare for accounting, auditing, taxation, reporting, and professional certification pathways.',
          },
          mpp: {
            name: 'Master of Public Policy',
            description: 'Advanced study in policy analysis, governance, public administration, and development frameworks.',
          },
          mscDigital: {
            name: 'MSc Digital Economy',
            description: 'Research digital governance, data-driven decisions, platform regulation, and economic transformation.',
          },
          relations: {
            name: 'BA International Relations',
            description: "Study diplomacy, international organizations, security, and Cambodia's role in global affairs.",
          },
          llm: {
            name: 'Master of Laws',
            description: 'Specialize in international law, trade law, and legal frameworks for cross-border commerce.',
          },
        },
        dual: {
          subtitle: 'Global Pathways',
          title: '3+1 Dual Degree Framework',
          description: 'Complete core study at NUM, then continue abroad with selected partner universities for international credentials.',
          cards: {
            num: {
              title: '3 Years at NUM',
              text: 'Build strong foundations in Phnom Penh with international faculty and practical projects.',
            },
            transfer: {
              title: 'Guided Transfer',
              text: 'Prepare documentation, academic planning, and partner-university readiness with support.',
            },
            abroad: {
              title: '1 Year Abroad',
              text: 'Complete the final stage overseas and graduate with broader regional or global exposure.',
            },
          },
        },
        research: {
          subtitle: 'Research & Innovation',
          title: 'Pushing Practical Ideas Forward',
          description: 'Students and faculty work on digital governance, blockchain, public policy, and applied innovation projects.',
          governance: {
            title: 'Digital Governance Lab',
            description: 'AI-assisted policy tools, open data systems, and modern public-service research for Southeast Asia.',
          },
          blockchain: {
            title: 'Blockchain Research Center',
            description: "Applied research in digital finance, DeFi, smart contracts, and Cambodia's growing fintech sector.",
          },
          awards: {
            title: 'Student Innovation Awards',
            description: 'Annual student project showcases with mentoring, funding pathways, and industry feedback.',
          },
        },
      },
      admissions: {
        hero: {
          badge: 'Admissions 2026',
          title: 'Apply with clarity. Start with momentum.',
          description: 'Follow a simple four-step process and prepare for a modern university experience at NUM.',
        },
        timeline: {
          subtitle: 'How To Apply',
          title: '4 Steps To NUM',
          description: 'The process is structured, simple, and designed to keep applicants moving with confidence.',
          submit: {
            title: 'Submit Application',
            description: 'Complete the online form with academic records, personal statement, and supporting documents.',
            detail: 'Applications are open for the 2026 intake.',
          },
          exam: {
            title: 'Entrance Examination',
            description: 'Take the NUM entrance exam covering mathematics, logical reasoning, and English proficiency.',
            detail: 'Exams are held monthly at campus and selected provincial centers.',
          },
          interview: {
            title: 'Personal Interview',
            description: 'Meet the admissions committee for a focused conversation about your goals and readiness.',
            detail: 'Interviews can be in person or online for international applicants.',
          },
          enroll: {
            title: 'Acceptance & Enrollment',
            description: 'Receive your offer, confirm enrollment, and prepare to join the NUM community.',
            detail: 'Successful applicants usually receive a decision within two weeks.',
          },
        },
        tuition: {
          subtitle: 'Investment',
          title: 'Tuition & Financial Aid',
          description: 'Choose the program type that fits your academic path and review scholarships for eligible students.',
          perYear: 'per year',
          khmer: {
            tier: 'Khmer Programs',
            price: '$600 - $800',
            features: ['Khmer-language instruction', 'Local faculty', 'Campus facilities access', 'Student clubs and activities'],
          },
          international: {
            tier: 'International College',
            price: '$1,800 - $2,400',
            features: ['English-language instruction', 'International faculty', 'Innovation Lab access', 'Exchange eligibility'],
          },
          graduate: {
            tier: 'Graduate Programs',
            price: '$2,000 - $3,500',
            features: ['Advanced research access', 'Thesis supervision', 'Conference funding', 'Professional network'],
          },
        },
        scholarships: {
          title: 'Scholarship Opportunities',
          excellence: {
            name: 'NUM Excellence Scholarship',
            coverage: '100% tuition waiver',
            criteria: 'Top entrance exam performance and outstanding interview',
          },
          innovation: {
            name: 'Digital Innovation Grant',
            coverage: '50% tuition reduction',
            criteria: 'Strong technology project, portfolio, or startup experience',
          },
          asean: {
            name: 'ASEAN Partnership Award',
            coverage: '$1,000 annual stipend',
            criteria: 'International applicants from ASEAN member nations',
          },
        },
        faq: {
          subtitle: 'Questions',
          title: 'Frequently Asked Questions',
          description: 'Quick answers to the most common application, language, and dual-degree questions.',
          requirements: {
            q: 'What are the entry requirements for undergraduate programs?',
            a: 'Applicants should hold a Cambodian Baccalaureate or equivalent international qualification, then complete the entrance examination and interview process.',
          },
          international: {
            q: 'Can international students apply?',
            a: 'Yes. International applicants can complete the same application process, with online interview options available when needed.',
          },
          dual: {
            q: 'How does the 3+1 dual degree pathway work?',
            a: 'Students complete three years at NUM, then transfer to a partner university abroad for the final year when eligible.',
          },
          language: {
            q: 'What language are courses taught in?',
            a: 'NUM offers both Khmer and English programs. The Faculty of Digital Economy and International College programs are English-focused.',
          },
          deadline: {
            q: 'When is the application deadline?',
            a: 'Early-action applications for the 2026 intake close on March 31, 2026. Regular admissions continue until August 15, 2026.',
          },
        },
        cta: {
          title: 'Ready to start your application?',
          description: 'Prepare your records, choose your program, and begin the 2026 admissions process.',
        },
      },
      footer: {
        description: "Digital marketing campaign website promoting NUM's programs, student experience, scholarships, and admissions pathway.",
        quickLinks: 'Quick Links',
        faculties: 'Faculties',
        contact: 'Contact',
        academicPrograms: 'Academic Programs',
        admissions: 'Admissions',
        library: 'Library',
        telegram: 'Telegram',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        rights: 'All rights reserved.',
        address: 'St.96 Christopher Howes, Khan Daun Penh, Phnom Penh 12000, Cambodia',
        facultyList: {
          digital: 'Faculty of Digital Economy',
          business: 'Faculty of Business',
          law: 'Faculty of Law',
          policy: 'School of Public Policy',
          economics: 'Faculty of Economics',
          information: 'Faculty of Information Technology',
        },
      },
    },
  },
  km: {
    translation: {
      brand: {
        short: 'NUM',
        english: BRAND_EN,
        khmer: BRAND_KM,
        primary: BRAND_KM,
        secondary: BRAND_EN,
      },
      language: {
        switchTo: 'ប្តូរទៅភាសាអង់គ្លេស',
        next: 'EN',
      },
      nav: {
        home: 'ទំព័រដើម',
        faculties: 'មហាវិទ្យាល័យ',
        admissions: 'ការចូលរៀន',
        apply: 'ដាក់ពាក្យឆ្នាំ ២០២៦',
        close: 'បិទម៉ឺនុយ',
        toggle: 'បើក/បិទម៉ឺនុយ',
      },
      common: {
        explorePrograms: 'ស្វែងរកកម្មវិធីសិក្សា',
        viewAllPrograms: 'មើលកម្មវិធីទាំងអស់',
        applyNow: 'ដាក់ពាក្យឥឡូវនេះ',
        admissionDetails: 'ព័ត៌មានចូលរៀន',
        viewAdmissionRequirements: 'មើលលក្ខខណ្ឌចូលរៀន',
        comparePrograms: 'ប្រៀបធៀបកម្មវិធី',
        beginApplication: 'ចាប់ផ្តើមដាក់ពាក្យ',
        viewTuition: 'មើលថ្លៃសិក្សា',
        popular: 'ពេញនិយម',
        step: 'ជំហាន',
      },
      home: {
        hero: {
          badge: 'Digital Marketing Campaign សម្រាប់ NUM',
          title: BRAND_KM,
          subtitle: BRAND_EN,
          description: 'គេហទំព័រ Digital Marketing សម័យថ្មី ដើម្បីផ្សព្វផ្សាយ NUM បង្កើន student interest និងណែនាំ future applicants ទៅកាន់ programs និង admissions។',
          stats: {
            students: 'និស្សិត',
            alumni: 'អតីតនិស្សិត',
            staff: 'បុគ្គលិកសិក្សា',
            ranking: 'ចំណាត់ថ្នាក់ WURI',
          },
        },
        campaign: {
          badge: 'Digital Marketing Topic',
          title: 'ផ្សព្វផ្សាយ NUM ជាមួយ student recruitment funnel ច្បាស់លាស់។',
          description: 'គេហទំព័រនេះជា Digital Marketing Campaign សម្រាប់សាកលវិទ្យាល័យជាតិគ្រប់គ្រង។ វាប្រើ official brand identity, proof points, program benefits, scholarships និង CTA ដើម្បីជំរុញការដាក់ពាក្យ។',
          goals: {
            awareness: {
              label: 'Awareness',
              value: 'បង្ហាញថា NUM ជាសាកលវិទ្យាល័យឈានមុខមួយនៅកម្ពុជា។',
            },
            consideration: {
              label: 'Consideration',
              value: 'ជួយសិស្សប្រៀបធៀបកម្មវិធី អាហារូបករណ៍ និងលទ្ធផលអាជីព។',
            },
            conversion: {
              label: 'Conversion',
              value: 'នាំសិស្សដែលសមស្របទៅកាន់ការដាក់ពាក្យឆ្នាំ ២០២៦។',
            },
          },
          channels: {
            search: {
              title: 'Search Visibility',
              description: 'ផ្សព្វផ្សាយ NUM programs តាម search-focused pages សម្រាប់សិស្សដែលប្រៀបធៀប Business, Law, Technology និង Digital Economy degrees។',
            },
            video: {
              title: 'Short-Form Video',
              description: 'បម្លែង campus life, student success, labs និង scholarship stories ទៅជា motion content សម្រាប់ high-attention platforms។',
            },
            social: {
              title: 'Social Media Campaigns',
              description: 'ប្រើ messaging ច្បាស់លាស់លើ Facebook, Instagram, Telegram និង LinkedIn ដើម្បីទៅដល់សិស្ស មាតាបិតា alumni និង partners។',
            },
            conversion: {
              title: 'Conversion Tracking',
              description: 'នាំ traffic ពី Awareness ទៅ program exploration, admission details និង application form។',
            },
          },
        },
        why: {
          subtitle: 'ហេតុអ្វីជ្រើសរើស NUM',
          title: 'សម្រាប់និស្សិតដែលមានគោលដៅខ្ពស់',
          description: 'បទពិសោធន៍សាកលវិទ្យាល័យផ្តោតលើពាណិជ្ជកម្ម បច្ចេកវិទ្យា ច្បាប់ គោលនយោបាយសាធារណៈ និងភាពជាអ្នកដឹកនាំក្នុងសេដ្ឋកិច្ចឌីជីថល។',
          cards: {
            ranking: {
              title: 'នវានុវត្តន៍មានចំណាត់ថ្នាក់សកល',
              description: 'ទទួលស្គាល់ក្នុង WURI Global Top 500 និងផ្តោតលើការអប់រំអនុវត្តន៍សម្រាប់អនាគត។',
            },
            pathways: {
              title: 'ផ្លូវសិក្សាអន្តរជាតិ',
              description: 'ទទួលបានបទពិសោធន៍សកលតាមរយៈការផ្លាស់ប្តូរ កម្មវិធីសញ្ញាបត្ររួម និងសាកលវិទ្យាល័យដៃគូ។',
            },
            digital: {
              title: 'Digital-First Programs',
              description: 'FinTech, Blockchain, Digital Economy, Public Policy, Business, Law និង Computer Science។',
            },
            network: {
              title: 'បណ្តាញត្រៀមសម្រាប់ឧស្សាហកម្ម',
              description: 'ភ្ជាប់ជាមួយសាស្ត្រាចារ្យ អតីតនិស្សិត និងនិយោជកនៅកម្ពុជា និងតំបន់។',
            },
          },
        },
        programs: {
          subtitle: 'ឧត្តមភាពសិក្សា',
          title: 'កម្មវិធីសិក្សាដែលមានទិសដៅ',
          description: 'ស្វែងរកកម្មវិធីដែលរចនាតាមតម្រូវការឧស្សាហកម្ម បទពិសោធន៍អន្តរជាតិ និងជំនាញអនុវត្តន៍។',
          digital: {
            title: 'Faculty of Digital Economy',
            description: 'English-based programs សម្រាប់ FinTech, Digital Business, Smart City និង Computer Science។',
            degrees: ['FinTech & Blockchain', 'Digital Economy', 'Computer Science', 'Smart City Planning'],
          },
          business: {
            title: 'Business, Finance & Law',
            description: 'NUM core programs សម្រាប់សិស្សដែលត្រៀម leadership ក្នុង Commerce, Banking, Accounting និង Legal Practice។',
            degrees: ['Business Administration', 'Finance & Banking', 'International Law', 'Accounting'],
          },
          policy: {
            title: 'School of Public Policy',
            description: 'Undergraduate និង postgraduate pathways សម្រាប់ Governance, Diplomacy, Public Policy និង International Relations។',
            degrees: ['Public Policy', 'International Relations', 'Digital Governance', 'Development Studies'],
          },
        },
        stats: {
          studentPopulation: 'ចំនួននិស្សិត',
          degreePrograms: 'កម្មវិធីសញ្ញាបត្រ',
          academicStaff: 'បុគ្គលិកសិក្សា',
          alumniNetwork: 'បណ្តាញអតីតនិស្សិត',
          globalPartners: 'ដៃគូសកល',
        },
        campus: {
          badge: 'បទពិសោធន៍ក្នុងសាកលវិទ្យាល័យ',
          title: 'រៀនក្នុងបរិយាកាសដែលជំរុញគំនិត ក្រុមការងារ និងភាពរីកចម្រើន។',
          description: 'ចាប់ពីមន្ទីរនវានុវត្តន៍ ក្លឹបនិស្សិត រហូតដល់ជំនួយអាជីព NUM ផ្តល់បរិយាកាសរឹងមាំសម្រាប់សាកល្បងគំនិត និងកសាងទំនុកចិត្ត។',
          items: {
            lab: 'Innovation Lab',
            clubs: 'ក្លឹបនិស្សិត',
            library: 'Digital Library',
            career: 'Career Support',
          },
        },
        testimonials: {
          sokha: {
            quote: 'NUM ផ្តល់ទំនុកចិត្ត និងជំនាញឱ្យខ្ញុំដើម្បីបន្តអាជីពក្នុង FinTech។',
            name: 'សុខា វណ្ណ',
            role: 'BSc Digital Economy',
          },
          dara: {
            quote: 'បទពិសោធន៍អន្តរជាតិ និងការណែនាំបានរៀបចំខ្ញុំសម្រាប់តួនាទីដឹកនាំ។',
            name: 'ដារា ពេជ្រ',
            role: 'MBA Graduate',
          },
          maly: {
            quote: 'សាស្ត្រាចារ្យ ក្លឹប និងបណ្តាញសកលធ្វើឱ្យការសិក្សាភ្ជាប់ជាមួយឱកាសពិត។',
            name: 'ម៉ាលី ជា',
            role: 'International Relations',
          },
        },
        scholarships: {
          subtitle: 'ជំនួយហិរញ្ញវត្ថុ',
          title: 'ឱកាសអាហារូបករណ៍',
          description: 'អាហារូបករណ៍ផ្អែកលើសមត្ថភាពជួយនិស្សិតមានទេពកោសល្យបម្លែងសក្តានុពលសិក្សាទៅជាជោគជ័យ។',
          excellence: {
            name: 'NUM Excellence Scholarship',
            coverage: 'ថ្លៃសិក្សា 100%',
          },
          innovation: {
            name: 'Digital Innovation Grant',
            coverage: 'ថ្លៃសិក្សា 50%',
          },
          asean: {
            name: 'ASEAN Partnership Award',
            coverage: 'ប្រាក់ឧបត្ថម្ភ $1,000',
          },
        },
        partners: {
          subtitle: 'បណ្តាញសកល',
          title: 'ដៃគូឧស្សាហកម្ម និងសាកលវិទ្យាល័យ',
          description: 'បណ្តាញដៃគូកំពុងរីកចម្រើនភ្ជាប់និស្សិត NUM ជាមួយផ្លូវសិក្សា និងវិជ្ជាជីវៈទូលំទូលាយ។',
          note: 'និស្សិតចេញទៅក្រៅ 360+ | និស្សិតអន្តរជាតិចូលមក 300+ | ស្ថាប័នដៃគូ 56+',
        },
        cta: {
          title: 'អនាគតរបស់អ្នកចាប់ផ្តើមនៅ NUM។',
          description: 'ការដាក់ពាក្យសម្រាប់ឆ្នាំ ២០២៦ កំពុងបើកសម្រាប់សិស្សដែលត្រៀមដំណើរទៅមុខ។',
        },
      },
      faculties: {
        hero: {
          badge: 'ឧត្តមភាពសិក្សា',
          title: 'មហាវិទ្យាល័យ និងកម្មវិធីសម្រាប់អាជីពសម័យថ្មី។',
          description: 'ស្វែងរក Technology, Business, Finance, Law, Governance និង Global Pathways សម្រាប់និស្សិតដែលចង់មាន practical momentum។',
        },
        tabs: {
          digital: {
            name: 'Faculty of Digital Economy',
            tagline: "Powering Cambodia's Digital Future",
            description: 'NUM innovation faculty កសាង practical skills ក្នុង Technology, Finance, Data និង Digital Economy សម្រាប់ leaders ជំនាន់ក្រោយ។',
          },
          business: {
            name: 'Business, Finance & Law',
            tagline: 'Legacy Strengths, Modern Edge',
            description: 'NUM core Business and Law programs រៀបចំនិស្សិតសម្រាប់ leadership ក្នុង Commerce, Banking, Accounting, Management និង Legal Practice។',
          },
          policy: {
            name: 'School of Public Policy',
            tagline: "Shaping Tomorrow's Policy Leaders",
            description: 'School of Public Policy អភិវឌ្ឍ talent ក្នុង Governance, Diplomacy, Research និង Policy សម្រាប់កម្ពុជា និង Southeast Asia។',
          },
        },
        programMeta: {
          years4: '៤ ឆ្នាំ',
          years2: '២ ឆ្នាំ',
          english: 'English',
          khmerEnglish: 'Khmer / English',
        },
        programs: {
          fintech: {
            name: 'BSc FinTech',
            description: 'សិក្សា Blockchain, Digital Payments, Cryptocurrency, Financial Innovation និង applied FinTech projects។',
          },
          digitalEconomy: {
            name: 'BSc Digital Economy',
            description: 'ស្វែងយល់ពីរបៀបដែល Digital Platforms, Data និង Technology បម្លែង markets, organizations និង public systems។',
          },
          computerScience: {
            name: 'BSc Computer Science',
            description: 'កសាងគ្រឹះ Software Engineering, Algorithms, Data Science និង AI តាមរយៈ practical coursework។',
          },
          smartCity: {
            name: 'BSc Smart City Planning',
            description: 'រចនា smart urban systems ជាមួយ IoT, GIS, Analytics និង sustainable city planning។',
          },
          finance: {
            name: 'BBA Finance & Banking',
            description: 'អភិវឌ្ឍ Financial Analysis, Investment, Banking Operations និង Corporate Finance capability។',
          },
          management: {
            name: 'BBA Management',
            description: 'កសាង Leadership, Operations, Strategy និង Entrepreneurship skills សម្រាប់ modern organizations។',
          },
          law: {
            name: 'Bachelor of Business Law',
            description: 'សិក្សា Commercial Law, Intellectual Property, Trade Rules, Contracts និង Governance។',
          },
          accounting: {
            name: 'BBA Accounting',
            description: 'ត្រៀមខ្លួនសម្រាប់ Accounting, Auditing, Taxation, Reporting និង professional certification pathways។',
          },
          mpp: {
            name: 'Master of Public Policy',
            description: 'Advanced study ក្នុង Policy Analysis, Governance, Public Administration និង Development Frameworks។',
          },
          mscDigital: {
            name: 'MSc Digital Economy',
            description: 'ស្រាវជ្រាវ Digital Governance, Data-driven Decisions, Platform Regulation និង Economic Transformation។',
          },
          relations: {
            name: 'BA International Relations',
            description: "សិក្សា Diplomacy, International Organizations, Security និង Cambodia's role in global affairs។",
          },
          llm: {
            name: 'Master of Laws',
            description: 'Specialize ក្នុង International Law, Trade Law និង legal frameworks សម្រាប់ cross-border commerce។',
          },
        },
        dual: {
          subtitle: 'Global Pathways',
          title: '3+1 Dual Degree Framework',
          description: 'បញ្ចប់ core study នៅ NUM បន្ទាប់មកបន្តទៅ partner universities ក្រៅប្រទេសសម្រាប់ international credentials។',
          cards: {
            num: {
              title: '3 Years at NUM',
              text: 'កសាង strong foundations នៅភ្នំពេញជាមួយ international faculty និង practical projects។',
            },
            transfer: {
              title: 'Guided Transfer',
              text: 'រៀបចំ documentation, academic planning និង partner-university readiness ជាមួយការគាំទ្រ។',
            },
            abroad: {
              title: '1 Year Abroad',
              text: 'បញ្ចប់ final stage ក្រៅប្រទេស និងទទួល regional ឬ global exposure កាន់តែទូលំទូលាយ។',
            },
          },
        },
        research: {
          subtitle: 'Research & Innovation',
          title: 'ជំរុញគំនិតអនុវត្តន៍ទៅមុខ',
          description: 'និស្សិត និងសាស្ត្រាចារ្យធ្វើការលើ Digital Governance, Blockchain, Public Policy និង applied innovation projects។',
          governance: {
            title: 'Digital Governance Lab',
            description: 'AI-assisted policy tools, open data systems និង modern public-service research សម្រាប់ Southeast Asia។',
          },
          blockchain: {
            title: 'Blockchain Research Center',
            description: "Applied research ក្នុង Digital Finance, DeFi, Smart Contracts និង Cambodia's growing FinTech sector។",
          },
          awards: {
            title: 'Student Innovation Awards',
            description: 'Annual student project showcases ជាមួយ mentoring, funding pathways និង industry feedback។',
          },
        },
      },
      admissions: {
        hero: {
          badge: 'Admissions 2026',
          title: 'ដាក់ពាក្យដោយច្បាស់លាស់។ ចាប់ផ្តើមដោយទិសដៅ។',
          description: 'អនុវត្តតាមដំណើរការ ៤ ជំហានងាយស្រួល និងត្រៀមខ្លួនសម្រាប់បទពិសោធន៍សាកលវិទ្យាល័យសម័យថ្មីនៅ NUM។',
        },
        timeline: {
          subtitle: 'How To Apply',
          title: '4 Steps To NUM',
          description: 'ដំណើរការត្រូវបានរៀបចំឱ្យច្បាស់ ងាយស្រួល និងជួយឱ្យអ្នកដាក់ពាក្យបន្តទៅមុខដោយទំនុកចិត្ត។',
          submit: {
            title: 'Submit Application',
            description: 'បំពេញ online form ជាមួយ academic records, personal statement និង supporting documents។',
            detail: 'ការដាក់ពាក្យសម្រាប់ឆ្នាំ ២០២៦ កំពុងបើក។',
          },
          exam: {
            title: 'Entrance Examination',
            description: 'ធ្វើ NUM entrance exam ដែលមាន Mathematics, Logical Reasoning និង English Proficiency។',
            detail: 'ការប្រឡងធ្វើរៀងរាល់ខែនៅសាកលវិទ្យាល័យ និងមណ្ឌលខេត្តជ្រើសរើស។',
          },
          interview: {
            title: 'Personal Interview',
            description: 'ជួប admissions committee ដើម្បីពិភាក្សាអំពី goals និង readiness របស់អ្នក។',
            detail: 'អាច interview ផ្ទាល់ ឬ online សម្រាប់ international applicants។',
          },
          enroll: {
            title: 'Acceptance & Enrollment',
            description: 'ទទួល offer បញ្ជាក់ enrollment និងត្រៀមចូលរួមសហគមន៍ NUM។',
            detail: 'អ្នកជាប់ជ្រើសរើសភាគច្រើនទទួលលទ្ធផលក្នុងរយៈពេលពីរសប្តាហ៍។',
          },
        },
        tuition: {
          subtitle: 'Investment',
          title: 'Tuition & Financial Aid',
          description: 'ជ្រើសរើស program type សមស្របនឹង academic path របស់អ្នក និងពិនិត្យ scholarships សម្រាប់ eligible students។',
          perYear: 'ក្នុងមួយឆ្នាំ',
          khmer: {
            tier: 'Khmer Programs',
            price: '$600 - $800',
            features: ['បង្រៀនជាភាសាខ្មែរ', 'សាស្ត្រាចារ្យក្នុងស្រុក', 'ប្រើប្រាស់សម្ភារៈសាកលវិទ្យាល័យ', 'ក្លឹប និងសកម្មភាពនិស្សិត'],
          },
          international: {
            tier: 'International College',
            price: '$1,800 - $2,400',
            features: ['English-language instruction', 'International faculty', 'Innovation Lab access', 'Exchange eligibility'],
          },
          graduate: {
            tier: 'Graduate Programs',
            price: '$2,000 - $3,500',
            features: ['Advanced research access', 'Thesis supervision', 'Conference funding', 'Professional network'],
          },
        },
        scholarships: {
          title: 'ឱកាសអាហារូបករណ៍',
          excellence: {
            name: 'NUM Excellence Scholarship',
            coverage: 'លើកលែងថ្លៃសិក្សា 100%',
            criteria: 'Top entrance exam performance និង outstanding interview',
          },
          innovation: {
            name: 'Digital Innovation Grant',
            coverage: 'បញ្ចុះថ្លៃសិក្សា 50%',
            criteria: 'Strong technology project, portfolio ឬ startup experience',
          },
          asean: {
            name: 'ASEAN Partnership Award',
            coverage: 'ប្រាក់ឧបត្ថម្ភប្រចាំឆ្នាំ $1,000',
            criteria: 'International applicants មកពី ASEAN member nations',
          },
        },
        faq: {
          subtitle: 'សំណួរ',
          title: 'សំណួរដែលសួរញឹកញាប់',
          description: 'ចម្លើយខ្លីៗចំពោះសំណួរទូទៅអំពីការដាក់ពាក្យ ភាសាបង្រៀន និងកម្មវិធីសញ្ញាបត្ររួម។',
          requirements: {
            q: 'តើលក្ខខណ្ឌចូលរៀនថ្នាក់បរិញ្ញាបត្រមានអ្វីខ្លះ?',
            a: 'អ្នកដាក់ពាក្យគួរមានសញ្ញាបត្របាក់ឌុបកម្ពុជា ឬសមមូលអន្តរជាតិ ហើយបញ្ចប់ការប្រឡងចូល និងសម្ភាសន៍។',
          },
          international: {
            q: 'តើនិស្សិតអន្តរជាតិអាចដាក់ពាក្យបានទេ?',
            a: 'បាន។ អ្នកដាក់ពាក្យអន្តរជាតិអាចអនុវត្តដំណើរការដូចគ្នា ហើយអាចសម្ភាសន៍តាមអនឡាញនៅពេលចាំបាច់។',
          },
          dual: {
            q: 'តើ 3+1 dual degree pathway ដំណើរការយ៉ាងដូចម្តេច?',
            a: 'និស្សិតសិក្សា 3 years at NUM បន្ទាប់មក transfer ទៅ partner university ក្រៅប្រទេសសម្រាប់ final year ប្រសិនបើ eligible។',
          },
          language: {
            q: 'តើមុខវិជ្ជាបង្រៀនជាភាសាអ្វី?',
            a: 'NUM មាន programs ទាំង Khmer និង English។ Faculty of Digital Economy និង International College programs គឺ English-focused។',
          },
          deadline: {
            q: 'តើថ្ងៃផុតកំណត់ដាក់ពាក្យនៅពេលណា?',
            a: 'ការដាក់ពាក្យដំណាក់កាលដំបូងសម្រាប់ឆ្នាំ ២០២៦ បិទនៅថ្ងៃទី 31 ខែមីនា ឆ្នាំ 2026។ ការចូលរៀនទូទៅបន្តរហូតដល់ថ្ងៃទី 15 ខែសីហា ឆ្នាំ 2026។',
          },
        },
        cta: {
          title: 'ត្រៀមចាប់ផ្តើមដាក់ពាក្យហើយឬនៅ?',
          description: 'រៀបចំកំណត់ត្រាសិក្សា ជ្រើសរើសកម្មវិធី ហើយចាប់ផ្តើមដំណើរការចូលរៀនឆ្នាំ ២០២៦។',
        },
      },
      footer: {
        description: 'Digital Marketing Campaign website សម្រាប់ផ្សព្វផ្សាយ NUM programs, student experience, scholarships និង admissions pathway។',
        quickLinks: 'តំណភ្ជាប់រហ័ស',
        faculties: 'មហាវិទ្យាល័យ',
        contact: 'ទំនាក់ទំនង',
        academicPrograms: 'កម្មវិធីសិក្សា',
        admissions: 'ការចូលរៀន',
        library: 'បណ្ណាល័យ',
        telegram: 'Telegram',
        privacy: 'គោលការណ៍ឯកជនភាព',
        terms: 'លក្ខខណ្ឌប្រើប្រាស់',
        rights: 'រក្សាសិទ្ធិគ្រប់យ៉ាង។',
        address: 'ផ្លូវ ៩៦ Christopher Howes, ខណ្ឌដូនពេញ, ភ្នំពេញ 12000, កម្ពុជា',
        facultyList: {
          digital: 'Faculty of Digital Economy',
          business: 'Faculty of Business',
          law: 'Faculty of Law',
          policy: 'School of Public Policy',
          economics: 'Faculty of Economics',
          information: 'Faculty of Information Technology',
        },
      },
    },
  },
};

const initialLanguage = typeof window !== 'undefined'
  ? window.localStorage.getItem('num-language') || 'en'
  : 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

function syncDocumentLanguage(language) {
  if (typeof document === 'undefined') return;

  document.documentElement.lang = language === 'km' ? 'km' : 'en';
  document.title = language === 'km'
    ? `Digital Marketing Campaign សម្រាប់ NUM | ${BRAND_KM}`
    : `Digital Marketing Campaign for NUM | ${BRAND_EN}`;
}

syncDocumentLanguage(initialLanguage);

i18n.on('languageChanged', (language) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('num-language', language);
  }
  syncDocumentLanguage(language);
});

export default i18n;
