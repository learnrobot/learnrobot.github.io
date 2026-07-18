var links = [
    // Humanoid
    { 
        id: 1, title: "Boston Dynamics<br>(Dynamic Mobility & Industrial Autonomy)", category: "humanoid", source: "Boston Dynamics", url: "https://www.bostondynamics.com/", country: "us",
        description: "A world leader in mobile robots, tackling some of the toughest robotics challenges with highly dynamic and agile designs.",
        businessArea: "Advanced Mobile Robotics & Industrial Autonomy",
        models: ["Atlas", "Spot", "Stretch"]
    }, 
    { 
        id: 6, title: "Engineered Arts<br>(Social AI Humanoid & Lifelike Expressions)", category: "humanoid", source: "Engineered Arts", url: "https://www.engineeredarts.co.uk/", country: "gb",
        description: "Leading designer and manufacturer of humanoid entertainment robots, renowned for incredibly lifelike facial expressions and interactions.",
        businessArea: "Social AI & Entertainment Robotics",
        models: ["Ameca", "Mesmer", "RoboThespian"]
    },
    { 
        id: 104, title: "XPENG Robotics (IRON)", category: "humanoid", source: "XPENG", url: "https://www.xpeng.com", country: "cn",
        description: "An ecosystem company of XPENG focusing on smart robots capable of bipedal walking and complex dexterous manipulations.",
        businessArea: "Smart EV Ecosystem & Humanoid Robotics",
        models: ["PX5 (Iron)"]
    }, 
    { 
        id: 1012, title: "Figure AI<br>(General-Purpose Humanoid & Helix AI)", category: "humanoid", source: "Figure", url: "https://www.figure.ai/", country: "us",
        description: "An AI robotics company building the world's first commercially viable autonomous general-purpose humanoid robot.",
        businessArea: "General-Purpose Embodied AI",
        models: ["Figure 01", "Figure 02"]
    },
    { 
        id: 1013, title: "Apptronik<br>(General-Purpose Industrial Humanoid)", category: "humanoid", source: "Apptronik", url: "https://apptronik.com/", country: "us",
        description: "Developing next-generation general-purpose humanoid robots designed to work alongside humans in industrial and logistics settings.",
        businessArea: "Industrial Humanoids",
        models: ["Apollo", "Astra"]
    },
    { 
        id: 1014, title: "Agility Robotics<br>(Logistics Humanoid)", category: "humanoid", source: "Agility Robotics", url: "https://www.agilityrobotics.com/", country: "us",
        description: "Creators of bipedal robots built to solve labor shortages in logistics and warehouse operations through advanced mobility.",
        businessArea: "Logistics & Warehouse Automation",
        models: ["Digit"]
    },
    { 
        id: 1015, title: "1X Technologies<br>(AI-powered Home Humanoid)", category: "humanoid", source: "1X", url: "https://www.1x.tech/neo/", country: "no",
        description: "An engineering and AI company producing androids capable of human-like movements and behaviors for everyday assistance.",
        businessArea: "Embodied AI & Home Assistance",
        models: ["EVE", "NEO"]
    },
    { 
        id: 1017, title: "Rainbow Robotics<br>(Multipurpose Humanoid & Cobot Platform)", category: "humanoid", source: "Rainbow", url: "https://www.rainbow-robotics.com/", country: "kr",
        description: "A prominent robotics platform company originating from KAIST, specializing in bipedal humanoids and collaborative robotic arms.",
        businessArea: "Humanoids & Collaborative Robots",
        models: ["HUBO", "FX-Series", "RB-Series"]
    },
    { 
        id: 1012, title: "Unitree Robotics<br>(Mass-Market Humanoid & High-Speed Quadruped)", category: "humanoid", source: "Leader in Affordable High-Performance Robotics", url: "https://www.unitree.com/", country: "cn",
        description: "A pioneer in making high-performance quadruped and humanoid robots affordable and accessible for both consumer and industrial markets.",
        businessArea: "Quadruped & Mass-Market Humanoids",
        models: ["H1", "G1", "Go2", "B2"]
    },
    { 
        id: 1019, title: "UBTECH<br>(Industrial & Service Humanoid)", category: "humanoid", source: "UBTECH", url: "https://www.ubtrobot.com/", country: "cn",
        description: "A global leading AI and humanoid robotics company offering smart service robots and educational STEM solutions.",
        businessArea: "Service Humanoids & AI Education",
        models: ["Walker S", "Walker X", "Cruzr"]
    },
    { 
        id: 1020, title: "Xiaomi<br>(Emotion-Sensing Humanoid)", category: "humanoid", source: "Xiaomi", url: "https://www.mi.com/global/discover/article?id=2754", country: "cn",
        description: "A major consumer electronics brand extending into robotics with humanoids capable of advanced environmental semantics and emotion recognition.",
        businessArea: "Consumer Electronics & Smart Ecosystems",
        models: ["CyberOne", "CyberDog 2"]
    },
    { 
        id: 1023, title: "PAL Robotics<br>(Industrial-Grade Torque Controlled Humanoid)", category: "humanoid", source: "PAL Robotics", url: "https://pal-robotics.com/robots/talos/", country: "es",
        description: "Provides robust, customizable humanoid robots and mobile manipulators for research, industry, and intralogistics applications.",
        businessArea: "Research & Industrial Humanoids",
        models: ["TALOS", "REEM-C", "ARI"]
    },
    { 
        id: 1025, title: "Sanctuary AI<br>(General-Purpose Humanoid & Dexterous Hand)", category: "humanoid", source: "Sanctuary AI", url: "https://www.sanctuary.ai/", country: "ca",
        description: "Creating human-like intelligence in general-purpose robots to help individuals and organizations work more safely and efficiently.",
        businessArea: "General-Purpose AI & Dexterous Manipulation",
        models: ["Phoenix"]
    },
    { 
        id: 1026, title: "Meka Robotics (Google DeepMind)", category: "humanoid", source: "Research", url: "https://deepmind.google/discover/blog/", country: "us",
        description: "Historically known for compliant, human-safe robotic arms and humanoid torsos, contributing significantly to modern AI embodied research.",
        businessArea: "Embodied AI Research",
        models: ["M1 Mobile Manipulator"]
    },
    { 
        id: 1027, title: "IIT (iCub)<br>(Open Source Research Humanoid)", category: "humanoid", source: "Research", url: "https://icub.iit.it/", country: "it",
        description: "An open-source cognitive humanoid robot platform developed by the Italian Institute of Technology for advanced AI and robotics research.",
        businessArea: "Cognitive Robotics Research",
        models: ["iCub", "ergoCub"]
    },
    { 
        id: 1029, title: "NEURA Robotics<br>(Cognitive Humanoid & Smart Cobots)", category: "humanoid", source: "Europe's Pioneer in Cognitive Robotics", url: "https://neura-robotics.com/", country: "de",
        description: "Innovator in cognitive robotics, combining advanced AI, sensor technology, and mechatronics to build safe and versatile humanoids.",
        businessArea: "Cognitive Robotics & Smart Automation",
        models: ["4NE-1", "MAiRA"]
    },
    { 
        id: 1060, title: "Agibot<br>(Universal Humanoid)", category: "humanoid", source: "Embodied AI Pioneer", url: "https://www.agibot.com/", country: "cn",
        description: "A startup focused on developing intelligent humanoid robots aimed at universal applications in modern manufacturing and service sectors.",
        businessArea: "Universal Humanoid Platforms",
        models: ["Expedition A1", "Expedition A2"]
    },
    { 
        id: 1130, title: "AeiROBOT<br>(General-Purpose Humanoid Platform)", category: "humanoid", source: "Humanoid Robot Platform", url: "https://eng.arobot4all.com/", country: "kr",
        description: "A platform-driven robotics company aiming to create accessible humanoid solutions for daily life and specialized tasks.",
        businessArea: "Humanoid Platforms",
        models: ["Alice"]
    },
    { 
        id: 1210, title: "Sharpa Robotics<br>(dexterous robotic hand)", category: "humanoid", source: "Dexterous Robotic Hand (SharpaWave)", url: "https://www.sharpa.com/", country: "sg",
        description: "Specializes in advanced dexterous robotic hands and end-effectors designed to grant human-level manipulation capabilities to robotic arms.",
        businessArea: "Advanced Dexterous Manipulation",
        models: ["SharpaWave"]
    },
    { 
        id: 106, title: "Fourier Robotics<br>(General-Purpose Humanoid)", category: "humanoid", source: "Embodied AI & Rehab Origin", url: "https://www.fftai.com/", country: "cn",
        description: "Starting from rehabilitation exoskeletons, Fourier now develops versatile general-purpose humanoid robots for diverse industry applications.",
        businessArea: "General-Purpose Humanoids & Rehab",
        models: ["GR-1", "GR-2"]
    },

    // Industrial
    { 
        id: 201, title: "FANUC Robotics<br>(Global Industrial Infrastructure)", category: "Industrial", source: "FANUC", url: "https://www.fanuc.co.jp/eindex.html", country: "jp",
        description: "One of the world's largest manufacturers of industrial robots, providing comprehensive automated manufacturing systems.",
        businessArea: "Industrial Automation & CNC Systems",
        models: ["R-2000 Series", "CRX Collaborative Series", "M-Series"]
    }, 
    { 
        id: 202, title: "ABB Robotics<br>(Industrial & Collaborative Solutions)", category: "Industrial", source: "ABB", url: "https://new.abb.com/products/robotics", country: "ch",
        description: "A pioneering technology leader in power grids, electrification products, and industrial automation robotics.",
        businessArea: "Robotics & Discrete Automation",
        models: ["YuMi", "GoFa", "IRB Series"]
    }, 
    { 
        id: 2, title: "KUKA Industrial Robots", category: "Industrial", source: "KUKA", url: "https://www.kuka.com/", country: "de",
        description: "A leading global supplier of intelligent automation solutions and heavily relied upon in the automotive manufacturing industry.",
        businessArea: "Intelligent Industrial Automation",
        models: ["KR QUANTEC", "LBR iiwa", "KR AGILUS"]
    }, 
    { 
        id: 204, title: "YASKAWA Robotics", category: "Industrial", source: "YASKAWA", url: "https://www.yaskawa.co.jp/en/products/robotics", country: "jp",
        description: "A global manufacturer of servos, motion controllers, and the widely utilized Motoman industrial robot arms.",
        businessArea: "Motion Control & Robotics",
        models: ["Motoman HC Series", "Motoman GP Series"]
    },
    { 
        id: 205, title: "SIASUN Robotics", category: "Industrial", source: "SIASUN", url: "https://www.siasun.com/", country: "cn",
        description: "One of China's largest robotics companies, providing a comprehensive range of industrial, mobile, and service robotics solutions.",
        businessArea: "Comprehensive Industrial Robotics",
        models: ["SCR Series", "Mobile Robots (AGV)"]
    }, 
    { 
        id: 206, title: "Estun Automation<br>(Motion Control & Industrial Robotics)", category: "Industrial", source: "Estun", url: "https://www.estun.com/", country: "cn",
        description: "A core enterprise in China's motion control sector, delivering high-performance AC servo systems and industrial robotic arms.",
        businessArea: "Motion Control & Automation",
        models: ["ER Series", "SCARA Series"]
    },
    { 
        id: 207, title: "Doosan Robotics<br>(Collaborative & AI Robot Solutions)", category: "Industrial", sub: "Collaborative Robots", url: "https://www.doosanrobotics.com/kr/", country: "kr",
        description: "A leading manufacturer of highly safe and intuitive collaborative robots, recognized globally for superior torque sensor technology.",
        businessArea: "Collaborative Robots (Cobots)",
        models: ["M-SERIES", "H-SERIES", "A-SERIES", "E-SERIES"]
    },
    { 
        id: 208, title: "Neuromeka (Indy)", category: "Industrial", sub: "Collaborative Robots", url: "https://www.neuromeka.com/", country: "kr",
        description: "Provides cost-effective and easy-to-use collaborative robots aimed at automating small and medium-sized manufacturing enterprises.",
        businessArea: "Smart Factory & F&B Automation",
        models: ["Indy", "IndyCB", "Moby"]
    },
    { 
        id: 1101, title: "Universal Robots", category: "Industrial", sub: "Collaborative Robots", url: "https://www.universal-robots.com/", country: "dk",
        description: "The pioneer and dominant market leader in the collaborative robotics industry, empowering businesses of all sizes with flexible automation.",
        businessArea: "Collaborative Robotics",
        models: ["UR3e", "UR5e", "UR10e", "UR20", "UR30"]
    },
    { 
        id: 1108, title: "FBR<br>(Autonomous Construction & Robotic Bricklaying)", category: "Industrial", sub: "Construction Robotics", url: "https://www.fbr.com.au/", country: "au",
        description: "Revolutionizing the construction industry with advanced autonomous robotic bricklaying technology for rapid building.",
        businessArea: "Autonomous Construction",
        models: ["Hadrian X"]
    },
    { 
        id: 210, title: "Epson Robots<br>(High-Speed Precision SCARA & 6-Axis)", category: "Industrial", source: "SCARA Leader", url: "https://epson.com/robots", country: "jp",
        description: "The global leader in SCARA robots, known for extreme precision, high speeds, and integrated vision guidance systems.",
        businessArea: "Precision Assembly Automation",
        models: ["G-Series SCARA", "LS-Series", "VT6L"]
    },
    { 
        id: 211, title: "Kawasaki Robotics", category: "Industrial", source: "Industrial Giants", url: "https://kawasakirobotics.com/", country: "jp",
        description: "A leading supplier of industrial robots and robotic automation systems with a broad payload range for diverse heavy-duty applications.",
        businessArea: "Heavy Industrial Automation",
        models: ["R series", "B series", "duAro"]
    },
    { 
        id: 212, title: "DENSO Robotics<br>(High-Precision Small Assembly & Collaborative Robot)", category: "Industrial", source: "Small Assembly", url: "https://www.denso-robotics.com/", country: "jp",
        description: "Originally developed for automotive component manufacturing, DENSO offers some of the most reliable and precise small assembly robots available.",
        businessArea: "Small Assembly & Inspection",
        models: ["COBOTTA", "VS Series", "HS-A1 Series"]
    },
    { 
        id: 213, title: "Techman Robot", category: "Industrial", source: "AI Cobot", url: "https://www.tm-robot.com/en/", country: "tw",
        description: "The world’s second-largest collaborative robot brand, featuring a built-in smart vision system and AI capabilities straight out of the box.",
        businessArea: "Vision-Integrated Cobots",
        models: ["TM AI Cobot Series", "TM Palletizing Operator"]
    },
    { 
        id: 220, title: "Standard Bots (AI-native Cobots)", category: "Industrial", source: "Low-cost AI Robots", url: "https://standardbots.com/", country: "us",
        description: "A disruptive startup building affordable, AI-native robotic arms that learn tasks intuitively without traditional complex programming.",
        businessArea: "AI-Native Automation",
        models: ["RO1"]
    },
    { 
        id: 221, title: "Rockwell Automation", category: "Industrial", source: "Digital Transformation", url: "https://www.rockwellautomation.com/", country: "us",
        description: "A global leader in industrial automation and digital transformation, seamlessly integrating robotics into comprehensive factory ecosystems.",
        businessArea: "Industrial Digitalization & Control",
        models: ["Independent Cart Technology (MagneMotion)", "Emulate3D"]
    },
    { 
        id: 1102, title: "Robotnik (A URG Company)", category: "Industrial", source: "Mobile & Industrial Robots", url: "https://robotnik.eu/", country: "es",
        description: "Specializes in the development and manufacturing of autonomous mobile robots (AMRs) and mobile manipulators for logistics and inspection.",
        businessArea: "Mobile Manipulation & Logistics",
        models: ["RB-KAIROS", "RB-THERON", "SUMMIT-XL"]
    },
    { 
        id: 215, title: "NAU Robotics<br>(Smart Industrial & Logistics)", category: "Industrial", source: "Leading K-Robot Automation Solutions", url: "https://www.naurobot.com/", country: "kr",
        description: "A Korean automation provider delivering smart plastic injection molding robots and end-to-end industrial logistics systems.",
        businessArea: "Plastic Injection & Smart Logistics",
        models: ["NURO Series", "NAU-AGV"]
    },
    { 
        id: 230, title: "OMRON Robotics<br>(Industrial & Collaborative)", category: "Industrial", source: "Integrated Automation & AI", url: "https://robotics.omron.com/", country: "jp",
        description: "Provides a complete lineup of industrial arms, cobots, and mobile robots seamlessly integrated with their factory sensing technology.",
        businessArea: "Integrated Factory Automation",
        models: ["TM Series Cobots", "LD Series Mobile Robots", "i4H SCARA"]
    },
    { 
        id: 231, title: "Stäubli Robotics<br>(High-Precision & Cleanroom)", category: "Industrial", source: "Swiss Precision Robotics", url: "https://www.staubli.com/en-us/robotics/", country: "ch",
        description: "Renowned for ultra-fast, high-precision industrial robots, particularly excelling in hygienic, cleanroom, and harsh environment applications.",
        businessArea: "High-Precision & Hygienic Robotics",
        models: ["TX2 Series", "TS2 SCARA", "HE (Humid Environment) Series"]
    },
    { 
        id: 232, title: "Comau<br>(Stellantis Automation)", category: "Industrial", source: "Automotive & Industrial Arms", url: "https://www.comau.com/en/", country: "it",
        description: "A global leader in industrial automation, advanced robotics, and e-mobility solutions, backed by a strong heritage in automotive manufacturing.",
        businessArea: "Automotive & Advanced Manufacturing",
        models: ["Racer Series", "AURA", "MATE (Exoskeleton)"]
    },
    { 
        id: 1451, title: "ANYbotics<br>(ANYmal - Industrial Inspection)", category: "Industrial", source: "Autonomous Legged Inspection Robot", url: "https://www.anybotics.com/", country: "ch",
        description: "Develops highly mobile quadruped robots designed to conduct autonomous end-to-end inspections in complex and hazardous industrial facilities.",
        businessArea: "Autonomous Industrial Inspection",
        models: ["ANYmal", "ANYmal X"]
    },
    { 
        id: 1150, title: "Canvas<br>(Drywall Finishing Robot)", category: "Industrial", sub: "Construction Robotics", url: "https://www.canvas.build/", country: "us",
        description: "Innovating the construction industry with a collaborative robot that automates the physically demanding process of drywall finishing.",
        businessArea: "Construction Automation",
        models: ["Canvas System"]
    },
    
   
    // Service
    { 
        id: 401, title: "SoftBank Robotics", category: "service", source: "SoftBank", url: "https://www.softbankrobotics.com/", country: "jp",
        description: "A global leader in robotics solutions, providing humanoid and service robots for education, retail, cleaning, and healthcare.",
        businessArea: "Commercial Service & Social Robotics",
        models: ["Pepper", "NAO", "Whiz"]
    }, 
    { 
        id: 402, title: "Bear Robotics (Serving)", category: "service", source: "Bear Robotics", url: "https://www.bearrobotics.com/", country: "us",
        description: "Pioneers in hospitality robotics, creating self-driving indoor robots that assist staff with running food and bussing tables.",
        businessArea: "Hospitality & F&B Serving",
        models: ["Servi", "Servi Plus", "Servi Lift"]
    }, 
    { 
        id: 4, title: "Aethon Mobile Robots", category: "service", source: "Aethon", url: "https://www.aethon.com/", country: "us",
        description: "A leading provider of autonomous mobile robots (AMRs) for healthcare, manufacturing, and hospitality to automate material delivery.",
        businessArea: "Healthcare & Intralogistics Delivery",
        models: ["TUG"]
    }, 
    { 
        id: 403, title: "Pudu Robotics (Serving Robots)", category: "service", source: "Pudu", url: "https://www.pudurobotics.com/", country: "cn",
        description: "A global high-tech enterprise dedicated to the design, R&D, and production of commercial service and delivery robots.",
        businessArea: "Commercial Service Delivery",
        models: ["BellaBot", "PuduBot 2", "KettyBot"]
    },
    { 
        id: 404, title: "KEENON Robotics (Serving, Delivery)", category: "service", source: "KEENON", url: "https://www.keenon.com/", country: "cn",
        description: "An AI enterprise committed to providing intelligent unmanned delivery solutions for global enterprises and restaurants.",
        businessArea: "Commercial Indoor Delivery",
        models: ["Dinerbot", "Butlerbot", "Guiderbot"]
    }, 
    { 
        id: 405, title: "LG CLOi ServeBot (Serving, Guide)", category: "service", source: "LG Electronics", url: "https://www.lg.com/global/business/robot/servebot", country: "kr",
        description: "LG's robotic brand designed to provide convenient, intelligent delivery and guiding services in everyday life and commercial spaces.",
        businessArea: "Commercial Service & Delivery",
        models: ["CLOi ServeBot", "CLOi GuideBot", "CLOi UV-C Bot"]
    }, 
    { 
        id: 406, title: "KT AI Robot (Serving, Delivery)", category: "service", source: "KT", url: "https://ktrobotech.com/", country: "kr",
        description: "South Korean telecom giant KT provides AI-powered service and delivery robots leveraging advanced 5G and cloud technologies.",
        businessArea: "AI Service & Serving Platforms",
        models: ["KT AI Serving Robot", "KT AI Hotel Robot"]
    }, 
    { 
        id: 407, title: "Woowa Brothers (Baemin Dilly)", category: "service", source: "Woowa Brothers", url: "https://robot.baemin.com/", country: "kr",
        description: "Creators of the Baemin app, deploying autonomous delivery robots for food and parcel delivery in indoor and outdoor environments.",
        businessArea: "Food Delivery & Logistics",
        models: ["Dilly Drive", "Dilly Tower"]
    }, 
    { 
        id: 408, title: "ROBOTIS (Delivery Robot 'Gaemi')", category: "service", source: "Robotis", url: "https://www.robotis.com/sub/business_012.php", country: "kr",
        description: "A comprehensive robotics manufacturer known for the 'Gaemi' outdoor and indoor autonomous delivery robots.",
        businessArea: "Autonomous Delivery Solutions",
        models: ["Gaemi (Indoor)", "Gaemi (Outdoor)"]
    }, 
    { 
        id: 409, title: "Neubility<br>(Delivery & Patrol Robot)", category: "service", source: "Neubility", url: "https://www.neubility.co.kr/ir", country: "kr",
        description: "An autonomous robot delivery startup using advanced camera-based V-SLAM navigation for cost-effective last-mile services.",
        businessArea: "Last-Mile Delivery & Patrol",
        models: ["Neubie"]
    }, 
    { 
        id: 410, title: "XYZ (Barista, Delivery)", category: "service", source: "XYZ", url: "https://xyzcorp.io/", country: "kr",
        description: "A robotics startup applying AI to daily life, notably automating F&B spaces with robotic baristas and ice cream servers.",
        businessArea: "Food & Beverage Automation",
        models: ["Baris", "Aris"]
    }, 
    { 
        id: 411, title: "EOS Korea (Serving Robot)", category: "service", source: "EOS Korea", url: "https://eoskorea.kr/", country: "kr",
        description: "A specialized service robot company in Korea focusing on reliable automated serving and table-bussing solutions.",
        businessArea: "F&B Serving Robotics",
        models: ["EOS Serving Robot"]
    }, 
    { 
        id: 412, title: "Segway Robotics (Delivery & Mobility)", category: "service", source: "Segway-Ninebot", url: "https://robotics.segway.com/", country: "cn",
        description: "Leveraging Segway's mobility expertise to create personal and commercial service robots for delivery, patrolling, and mobility.",
        businessArea: "Mobility & Delivery Robotics",
        models: ["Loomo", "Segway ServeBot"]
    },
    { 
        id: 413, title: "Gausium (Cleaning Robots)", category: "service", source: "Gausium", url: "https://www.gausium.com/", country: "cn",
        description: "A leading company in AI-powered autonomous cleaning and service robots for commercial, industrial, and public properties.",
        businessArea: "Commercial Cleaning Robotics",
        models: ["Scrubber 50", "Vacuum 40", "Phantas"]
    },
    { 
        id: 414, title: "Excelland (Hotel & Delivery Robots)", category: "service", source: "Excelland", url: "https://www.uditech.com.cn/en/", country: "cn",
        description: "A developer of autonomous delivery robots focusing heavily on the hospitality sector, specifically hotel room delivery.",
        businessArea: "Hotel Delivery Robotics",
        models: ["Excelland Delivery Bot"]
    },
    { 
        id: 416, title: "Candela (Delivery & Sanitation)", category: "service", source: "Candela", url: "https://www.candelarobot.com/en/", country: "cn",
        description: "Specializes in developing and manufacturing service robots for delivery, medical disinfection, and security applications.",
        businessArea: "Sanitation & Delivery Services",
        models: ["Candela Disinfection Bot", "Delivery Robot"]
    },
    { 
        id: 417, title: "Reeman Robotics (Platform & Service)", category: "service", source: "Reeman", url: "https://reemanbot.com/", country: "cn",
        description: "Provides a wide range of commercial service robots, including delivery, disinfection, and intelligent humanoid greeting platforms.",
        businessArea: "Commercial Robot Platforms",
        models: ["Deligo", "Spark", "Fly Boat"]
    },
    { 
        id: 1104, title: "Rosenbauer Robotics", category: "service", sub: "Firefighting Robots", url: "https://www.rosenbauer.com/", country: "at",
        description: "A world-leading manufacturer of systems for firefighting and disaster protection, developing remote-controlled tactical robots.",
        businessArea: "Firefighting & Disaster Response",
        models: ["RTE Robot"]
    },
    { 
        id: 450, title: "Diligent Robotics (Moxi)", category: "service", source: "Hospital Service Robot", url: "https://www.diligentrobots.com/", country: "us",
        description: "Developing AI-enabled robot assistants designed to work with healthcare staff by autonomously fetching and delivering supplies.",
        businessArea: "Healthcare Assistive Robotics",
        models: ["Moxi"]
    },
    { 
        id: 1100, title: "United Robotics Group (URG)", category: "service", source: "Service Robotics Ecosystem", url: "https://unitedrobotics.group/en-us", country: "de",
        description: "A European robotics ecosystem integrating hardware and software to offer 'CobiotX' robots for hospitality, healthcare, and labs.",
        businessArea: "Service Robotics Ecosystem",
        models: ["Plato", "uMobileLab"]
    },
    { 
        id: 460, title: "Simbe Robotics<br>(Tally - Retail Inventory Robot)", category: "service", source: "Store Intelligence Solution", url: "https://www.simberobotics.com/", country: "us",
        description: "Automates retail inventory and pricing audits with fully autonomous, computer-vision-powered mobile robots.",
        businessArea: "Retail Intelligence & Inventory",
        models: ["Tally"]
    },
    { 
        id: 1391, title: "Skyline Robotics<br>(OZMO Window Cleaner)", category: "service", source: "High-rise Window Cleaning", url: "https://skylinerobotics.com/", country: "us",
        description: "Automating high-rise window cleaning by combining industrial robotics, AI, and advanced sensors to replace dangerous human labor.",
        businessArea: "Facade Cleaning Automation",
        models: ["OZMO"]
    },
    { 
        id: 1392, title: "Avidbots<br>(Neo Floor Scrubber)", category: "service", source: "Commercial Facility Cleaning", url: "https://www.avidbots.com/", country: "ca",
        description: "Designs and manufactures fully autonomous floor scrubbing robots for commercial, industrial, and institutional large-scale spaces.",
        businessArea: "Autonomous Floor Cleaning",
        models: ["Neo 2", "Neo 2W"]
    },
    { 
        id: 1400, title: "Knightscope<br>(Security Robot)", category: "service", source: "24/7 Building Surveillance", url: "https://www.knightscope.com/", country: "us",
        description: "Develops autonomous security robots providing 24/7 deterrence, recording, and surveillance capabilities for private and public spaces.",
        businessArea: "Autonomous Physical Security",
        models: ["K5", "K3", "K1"]
    },
    { 
        id: 1450, title: "DEEP Robotics<br>(Industrial All-Terrain Inspection Robot)", category: "service", source: "Pioneering Embodied AI Technology", url: "https://www.deeprobotics.cn/en/", country: "cn",
        description: "A pioneer in quadrupedal robots in Asia, providing highly mobile solutions for industrial inspection, rescue, and security patrols.",
        businessArea: "All-Terrain Quadruped Inspection",
        models: ["X20", "Lite3", "X30"]
    },
               
    // Mobility 
    { 
        id: 501, title: "Waymo<br>(Ride-hailing service)", category: "mobility", source: "Alphabet", url: "https://waymo.com/", country: "us",
        description: "An autonomous driving technology company originating from the Google Self-Driving Car Project, operating commercial Level 4 robotaxi services.",
        businessArea: "Autonomous Ride-Hailing",
        models: ["Waymo Driver", "Jaguar I-PACE Robotaxi"]
    },
    { 
        id: 502, title: "Tesla<br>(FSD/Robotaxi)", category: "mobility", source: "Tesla Inc.", url: "https://www.tesla.com/AI", country: "us",
        description: "Pioneering sustainable energy and mobility with electric vehicles equipped with advanced vision-based Full Self-Driving capabilities.",
        businessArea: "Electric Vehicles & Autonomy",
        models: ["Model S/3/X/Y", "Robotaxi Concept"]
    },
    { 
        id: 503, title: "Cruise<br>(Driverless Ride)", category: "mobility", source: "GM Subsidiary", url: "https://www.getcruise.com/", country: "us",
        description: "A self-driving car company backed by General Motors, building purpose-built autonomous vehicles for ride-hailing and urban delivery.",
        businessArea: "Autonomous Urban Mobility",
        models: ["Cruise Origin", "Chevy Bolt AV"]
    },
    { 
        id: 504, title: "Zoox<br>(Amazon Mobility)", category: "mobility", source: "Amazon", url: "https://www.zoox.com/", country: "us",
        description: "An Amazon subsidiary developing symmetrical, bi-directional, and fully autonomous vehicles designed from the ground up for urban ride-hailing.",
        businessArea: "Purpose-Built Robotaxis",
        models: ["Zoox Robotaxi"]
    },
    { 
        id: 505, title: "Baidu Apollo<br>(Apollo Go)", category: "mobility", source: "Baidu", url: "https://apollo.auto/", country: "cn",
        description: "China's leading open-source autonomous driving platform, operating the widespread Apollo Go commercial robotaxi service.",
        businessArea: "Autonomous Driving Platforms",
        models: ["Apollo RT6", "Apollo Go AVs"]
    },
    { 
        id: 506, title: "WeRide<br>(Global L4)", category: "mobility", source: "Smart Mobility", url: "https://www.weride.ai/", country: "cn",
        description: "A global leader in L4 autonomous driving technologies, operating a diverse fleet of robotaxis, robobuses, and robosweepers.",
        businessArea: "L4 Smart Mobility Solutions",
        models: ["WeRide Robotaxi", "Robobus", "Robovan"]
    },
    { 
        id: 507, title: "Aurora<br>(Autonomous Truck)", category: "mobility", source: "Aurora Tech", url: "https://aurora.tech/", country: "us",
        description: "Delivering the benefits of self-driving technology safely and broadly with the Aurora Driver, optimized for heavy-duty freight.",
        businessArea: "Autonomous Trucking & Freight",
        models: ["Aurora Driver", "Peterbilt 579 AV"]
    },
    { 
        id: 508, title: "Kodiak<br>(Self-Driving Freight)", category: "mobility", source: "Kodiak Robotics", url: "https://kodiak.ai/", country: "us",
        description: "A technology company developing a robust, safety-critical autonomous driving system purposefully built for long-haul trucking.",
        businessArea: "Long-Haul Autonomous Freight",
        models: ["Kodiak Driver"]
    },
    { 
        id: 509, title: "Einride<br>(Digital Freight)", category: "mobility", source: "Freight Tech", url: "https://www.einride.tech/", country: "se",
        description: "A freight technology company providing digital, electric, and fully autonomous shipping solutions without a human cabin.",
        businessArea: "Autonomous Electric Freight",
        models: ["Einride Pod"]
    },
    { 
        id: 510, title: "Gatik<br>(Middle-mile Delivery)", category: "mobility", source: "B2B Logistics", url: "https://gatik.ai/", country: "us",
        description: "The market leader in autonomous middle-mile logistics, operating fleets of autonomous box trucks for B2B retail supply chains.",
        businessArea: "Middle-Mile Autonomous Delivery",
        models: ["Gatik Autonomous Box Truck"]
    },
    { 
        id: 550, title: "Einride<br>(Autonomous Electric Freight)", category: "mobility", source: "Autonomous Freight", url: "https://www.einride.tech/", country: "se",
        description: "Pioneering the transition to sustainable freight with grid-integrated, driverless electric pods managed by a smart OS.",
        businessArea: "Sustainable Autonomous Logistics",
        models: ["Autonomous Gen 2 Pod"]
    },
    { 
        id: 1240, title: "Doosan Bobcat<br>(Autonomous & Electric Robotics)", category: "mobility", source: "Unmanned Construction Equipment", url: "https://www.bobcat.com/kr/ko/", country: "kr",
        description: "Innovating the compact equipment industry with autonomous, remote-controlled, and all-electric construction machinery.",
        businessArea: "Autonomous Construction Equipment",
        models: ["RogueX", "AT450"]
    },
    { 
        id: 1220, title: "GoLe Robotics<br>(Smart Construction & Logistics)", category: "mobility", source: "Smart Construction & Logistics", url: "http://golerobotics.com/", country: "kr",
        description: "Developing smart robotics for construction sites, focusing on autonomous material transport and heavy lifting in harsh environments.",
        businessArea: "Construction Logistics Automation",
        models: ["GoLe Lifter"]
    },
    { 
        id: 502, title: "Tesla<br>(Autonomous Ecosystem: Cybercab & Optimus)", category: "mobility", source: "The Future of Autonomous Life", url: "https://www.tesla.com/we-robot", country: "us",
        description: "Expanding the autonomous ecosystem to include dedicated robotaxi platforms and advanced humanoid assistants.",
        businessArea: "Autonomous Mobility Ecosystem",
        models: ["Cybercab", "Optimus"]
    },
    { 
        id: 106, title: "GAC Group<br>(Intelligent Mobility & Flying Robot)", category: "mobility", source: "GAC", url: "https://www.gac.com.cn/", country: "cn",
        description: "A leading Chinese automobile manufacturer advancing intelligent mobility, autonomous driving technology, and eVTOL flying cars.",
        businessArea: "Intelligent Vehicles & eVTOL",
        models: ["GOVE (Flying Car)", "AION LX Plus"]
    },
    
    // Marine (Underwater & Subsea Robots)
    { id: 6001, title: "WHOI<br>(Alvin & Remus - Deep Sea)", category: "Marine", source: "Discovered Titanic", url: "https://www.whoi.edu/what-are-ocean-robots/", country: "us", description: "A premier ocean research institution developing advanced tethered and autonomous underwater vehicles for deep-sea exploration.", businessArea: "Oceanographic Research", models: ["Alvin", "REMUS"] },
    { id: 6002, title: "Eelume<br>(Snake-like Subsea Robot)", category: "Marine", source: "Autonomous Maintenance", url: "https://eelume.com/", country: "no", description: "Pioneering subsea resident robots with snake-like vehicles designed for the maintenance and inspection of underwater infrastructure.", businessArea: "Subsea Infrastructure Maintenance", models: ["Eelume Snake Robot"] },
    { id: 6003, title: "QYSEA<br>(FIFISH Underwater Drones)", category: "Marine", source: "Consumer & Industrial ROVs", url: "https://www.qysea.com/", country: "cn", description: "A leading manufacturer of compact, agile underwater drones and ROVs for both consumer photography and industrial inspection.", businessArea: "Underwater Consumer & Industrial ROVs", models: ["FIFISH V6", "FIFISH PRO W6"] },
    
    // Medical
    { id: 3001, title: "Intuitive Surgical (Da Vinci)", category: "medical", source: "Intuitive Surgical", url: "https://www.intuitive.com/", country: "us", description: "The pioneer of robotic-assisted surgery, known for the universally adopted da Vinci system used in minimally invasive procedures.", businessArea: "Minimally Invasive Robotic Surgery", models: ["da Vinci Xi", "da Vinci SP", "Ion"] }, 
    { id: 3002, title: "Stryker (Mako Surgical Robot)", category: "medical", source: "Stryker", url: "https://www.stryker.com/us/en/joint-replacement/systems/Mako_SmartRobotics_Overview.html", country: "us", description: "A leading medical technology company utilizing robotic-arm assisted technology for highly precise joint replacement surgeries.", businessArea: "Orthopedic Robotic Surgery", models: ["Mako SmartRobotics"] },
    { id: 3003, title: "Medtronic (Surgical Robotics)", category: "medical", source: "Medtronic", url: "https://www.medtronic.com/us-en/c/surgical-robotics.html", country: "ie", description: "A global healthcare technology leader offering robotic-assisted surgical platforms designed for flexibility and precision.", businessArea: "Surgical Robotics & MedTech", models: ["Hugo RAS", "Mazor X"] },
    { id: 3004, title: "CMR Surgical (Versius)", category: "medical", source: "CMR Surgical", url: "https://cmrsurgical.com/", country: "gb", description: "A global medical devices company dedicated to transforming surgery with a versatile, biomimetic, and portable robotic system.", businessArea: "Versatile Surgical Robotics", models: ["Versius"] },
    { id: 3005, title: "Siemens Healthineers (Corindus)", category: "medical", source: "Siemens", url: "https://www.siemens-healthineers.com/endovascular-robotics", country: "de", description: "Advancing precision medicine through endovascular robotic systems that assist physicians in complex vascular procedures.", businessArea: "Endovascular Robotics", models: ["CorPath GRX"] },
    { id: 3006, title: "Curexo (ROBODOC, CUVIS)", category: "medical", source: "Curexo", url: "https://www.curexo.com/", country: "kr", description: "A South Korean medical robotics innovator specializing in automated systems for orthopedic and rehabilitation surgeries.", businessArea: "Orthopedic & Rehab Robotics", models: ["CUVIS-joint", "Morning Walk"] }, 
    { id: 3007, title: "Koh Young Technology", category: "medical", source: "Koh Young Technology", url: "https://www.kohyoung.com/", country: "kr", description: "Initially a leader in 3D measurement, now expanding into high-precision medical robotics for neurological procedures.", businessArea: "3D Measurement & Neurosurgery Robotics", models: ["KYMERO"] }, 
    { id: 3008, title: "MedinTeq (Endoscopy Robot)", category: "medical", source: "MedinTeq", url: "https://medintech.co.kr/", country: "kr", description: "Developing advanced robotic solutions aimed at improving the safety and diagnostic accuracy of endoscopic procedures.", businessArea: "Endoscopic Robotics", models: ["Endo-Robot"] }, 
    { id: 1106, title: "ReWalk Robotics", category: "medical", sub: "Exoskeleton Rehab", url: "https://rewalk.com/", country: "il", description: "Designing wearable robotic exoskeletons that enable individuals with spinal cord injuries to stand, walk, and navigate steps.", businessArea: "Rehabilitation Exoskeletons", models: ["ReWalk Personal 6.0"] },
    { id: 3051, title: "Zimmer Biomet (ROSA Robotics)", category: "medical", source: "Brain & Knee Surgery", url: "https://www.zimmerbiomet.com/en/products-and-solutions/zb-edge/rosa.html", country: "us", description: "Integrating robotics, data, and AI into orthopedic procedures to improve patient outcomes in knee and brain surgeries.", businessArea: "Orthopedic Robotic Technologies", models: ["ROSA Knee", "ROSA Brain"] },
    { id: 3052, title: "Smith+Nephew (Cori Surgical System)", category: "medical", source: "Handheld Robotics", url: "https://www.smith-nephew.com/en-us/health-care-professionals/products/orthopaedics/cori", country: "gb", description: "Providing handheld robotic intelligence for orthopedic surgery, enhancing accuracy without the need for large consoles.", businessArea: "Handheld Orthopedic Robotics", models: ["CORI Surgical System"] },
    { id: 3053, title: "Ekso Bionics (EksoNR)", category: "medical", source: "Rehabilitation Exoskeleton", url: "https://eksobionics.com/", country: "us", description: "Developing wearable bionic suits for clinical rehabilitation and industrial applications to augment human strength.", businessArea: "Rehabilitation & Industrial Exoskeletons", models: ["EksoNR", "Ekso Evo"] },
    { id: 3054, title: "Hocoma (Lokomat)", category: "medical", source: "Robotic Gait Training", url: "https://www.hocoma.com/", country: "ch", description: "The global market leader in robotic and sensor-based devices for functional movement therapy and rehabilitation.", businessArea: "Sensor-based Movement Therapy", models: ["Lokomat", "Armeo"] },
    { id: 3055, title: "Vicarious Surgical", category: "medical", source: "Next-gen Abdominal Surgery", url: "https://www.vicarioussurgical.com/", country: "us", description: "Combining advanced robotics with virtual reality to offer unprecedented visualization and access in abdominal surgeries.", businessArea: "VR-enhanced Abdominal Surgery", models: ["Vicarious Surgical System"] },
    { id: 3056, title: "Asensus Surgical (Senhance)", category: "medical", source: "Digital Laparoscopy", url: "https://www.asensus.com/", country: "us", description: "Pioneering the use of augmented intelligence and machine vision in laparoscopy for safer surgical outcomes.", businessArea: "Digital Laparoscopy", models: ["Senhance Surgical System"] },
    { id: 3057, title: "MicroPort MedBot", category: "medical", source: "Multi-specialty Surgical", url: "https://www.medbot.com.cn/en", country: "cn", description: "A globally active medical robot company covering multiple surgical specialties including orthopedic and vascular procedures.", businessArea: "Multi-specialty Surgical Robots", models: ["Toumai", "Honghu"] },
    { id: 3058, title: "Think Surgical (TMAX)", category: "medical", source: "Orthopedic Surgery", url: "https://thinksurgical.com/", country: "us", description: "Developing active robotic systems for orthopedic surgery that offer an open implant library for surgical planning.", businessArea: "Open-Implant Orthopedic Robotics", models: ["TMAX", "TSolution One"] },
    { id: 3059, title: "ROEN Surgical<br>(Zamenix - Kidney Stone)", category: "medical", source: "Flexible Ureteroscopy", url: "https://roensurgical.com/", country: "kr", description: "Specializing in flexible robotic systems designed to navigate complex anatomical pathways, such as in kidney stone removal.", businessArea: "Flexible Ureteroscopy Robotics", models: ["Zamenix"] },
    { id: 3060, title: "Heimrobot (Elderly Care)", category: "medical", source: "Assistive Care Robot", url: "https://heimrobot.com/", country: "kr", description: "Focusing on the elderly care sector by providing intelligent assistive robots that monitor health and assist with daily tasks.", businessArea: "Assistive Elderly Care Robotics", models: ["Heim Carebot"] },
    { id: 3061, title: "Harmonic Bionics (Shoulder & Arm)", category: "medical", source: "Walking Rehabilitation", url: "https://harmonicbionics.com/", country: "us", description: "Creating intelligent upper extremity exoskeletons to facilitate neurological and musculoskeletal rehabilitation.", businessArea: "Upper-limb Rehabilitation Robotics", models: ["Harmony SHR"] },
    { id: 1101, title: "URG Life Science (uLab Series)", category: "medical", source: "Lab Automation Robotics", url: "https://unitedrobotics.group/industries/life-science", country: "de", description: "Automating laboratory workflows with flexible robotics to improve efficiency and reduce human error in life sciences.", businessArea: "Laboratory Automation", models: ["uLab Series"] },
    { id: 3013, title: "MEERE COMPANY (Revo-i)", category: "medical", source: "Laparoscopic Surgical Robot", url: "https://revosurgical.com/", country: "kr", description: "A South Korean innovator offering a cost-effective laparoscopic surgical robot system to broaden access to robotic surgery.", businessArea: "Laparoscopic Surgical Robotics", models: ["Revo-i"] },
    { id: 3063, title: "Distalmotion (Dexter)", category: "medical", source: "Hybrid Robotic Surgery", url: "https://distalmotion.com/", country: "ch", description: "Empowering surgeons with a hybrid robotic platform that seamlessly integrates laparoscopic and robotic approaches.", businessArea: "Hybrid Robotic Surgery", models: ["Dexter"] },
    { id: 1111, title: "Kinova Medical", category: "medical", source: "Surgical & Assistive Robotics", url: "https://www.kinovarobotics.com/sector/medical-robotics", country: "ca", description: "Designing highly adaptable and lightweight robotic arms to assist individuals with limited upper-limb mobility.", businessArea: "Assistive Robotic Arms", models: ["Jaco", "Kinova Gen3"] },
     
    // Farm
    { id: 501, title: "DJI<br>(Agricultural Drones)", category: "farm", source: "DJI", url: "https://ag.dji.com/", country: "cn", description: "The global leader in civilian drones, dominating the agricultural market with robust aerial spraying and crop monitoring platforms.", businessArea: "Agricultural Aerial Drones", models: ["Agras T40", "Mavic 3 Multispectral"] }, 
    { id: 1420, title: "Blue River Technology<br>(Precision Weeding)", category: "farm", source: "See & Spray™ AI", url: "https://www.bluerivertechnology.com/our-products/", country: "us", description: "A John Deere subsidiary pioneering computer vision and machine learning to enable precise, plant-by-plant agricultural actions.", businessArea: "Precision AI Agriculture", models: ["See & Spray"] },
    { id: 1109, title: "Lely<br>(Dairy Farm Robotics)", category: "farm", sub: "Dairy Farm Robotics", url: "https://www.lely.com/", country: "nl", description: "A leading innovator in dairy farming, providing automated solutions for milking, feeding, and barn cleaning.", businessArea: "Dairy Farm Automation", models: ["Astronaut A5", "Vector"] },
    { id: 503, title: "John Deere<br> (Autonomous Tractor)", category: "farm", source: "John Deere", url: "https://www.deere.com/en/", country: "us", description: "An agricultural machinery giant integrating advanced autonomy, AI, and robotics into traditional farming equipment.", businessArea: "Autonomous Farming Equipment", models: ["Autonomous 8R Tractor"] },
    { id: 504, title: "Harvest CROO<br>(Strawberry Picking)", category: "farm", source: "Harvest CROO", url: "https://harvestcroo.com/", country: "us", description: "Developing automated strawberry harvesting robots to address agricultural labor shortages using vision and delicate gripping.", businessArea: "Automated Fruit Harvesting", models: ["Berry Harvesting Robot"] },
    { id: 505, title: "Carbon Robotics<br>(LaserWeeder)", category: "farm", source: "Carbon Robotics", url: "https://carbonrobotics.com/", country: "us", description: "Revolutionizing weed control with autonomous machines that use thermal energy to eliminate weeds without chemicals.", businessArea: "Laser Weeding Technology", models: ["LaserWeeder"] },
    { id: 506, title: "Naïo Technologies<br>(Weeding Robot)", category: "farm", source: "Naïo Technologies", url: "https://www.naio-technologies.com/en/", country: "fr", description: "Creating autonomous agricultural robots designed to assist farmers with daily tasks like weeding and hoeing to reduce ecological impact.", businessArea: "Eco-friendly Agricultural Robots", models: ["Oz", "Ted", "Orio"] },
    { id: 507, title: "Dogtooth<br>(Fruit Picking)", category: "farm", source: "Dogtooth Robotics", url: "https://dogtooth.tech/", country: "gb", description: "Specializing in autonomous robotic systems for delicate fruit picking, primarily focusing on strawberry harvesting in greenhouses.", businessArea: "Greenhouse Fruit Picking", models: ["Dogtooth Harvester"] },
    { id: 508, title: "BouMatic<br>(Robotic Milking)", category: "farm", source: "BouMatic", url: "https://boumatic.com/", country: "us", description: "Providing advanced dairy equipment and automated milking systems designed to optimize cow comfort and farm productivity.", businessArea: "Robotic Milking Systems", models: ["Gemini Milking Robot"] },
    { id: 509, title: "Priva<br>(Greenhouse Automation)", category: "farm", source: "Priva", url: "https://www.priva.com/", country: "nl", description: "Offering high-tech automation solutions for climate control, water management, and crop handling in controlled environment agriculture.", businessArea: "Greenhouse & Indoor Farming Automation", models: ["Priva Kompano"] },
    { id: 1410, title: "Antobot<br>(mobile platform & fruit counting)", category: "farm", source: "Sustainable Farming", url: "https://www.antobot.ai/", country: "gb", description: "Developing affordable, intelligence-driven mobile robot platforms for precision agriculture and crop scouting in orchards.", businessArea: "Precision Orchard Robotics", models: ["Insight", "Scout"] },
    { id: 512, title: "Daedong<br>(Autonomous Farming)", category: "farm", source: "AI Agriculture Robot", url: "https://daedong-kioti.com/innovation/futureagriculture/", country: "kr", description: "A leading Korean agricultural machinery company integrating AI and autonomous driving into tractors and smart farming solutions.", businessArea: "Smart Farming & Autonomous Machinery", models: ["HX Tractor", "Autonomous Combine"] },
    
    // Logistics
    { id: 1111, title: "Amazon Robotics<br>(Next-Gen Fulfillment)", category: "logistics", source: "Amazon Robotics", url: "https://www.aboutamazon.com/news/operations/amazon-robotics-milestones", country: "us", description: "Operating the world's largest fleet of warehouse robots, utilizing advanced AMRs and robotic arms for end-to-end fulfillment.", businessArea: "E-commerce Fulfillment Automation", models: ["Proteus", "Sparrow", "Robin"] },
    { id: 1108, title: "Locus Robotics<br>(Collaborative AMRs)", category: "logistics", source: "Locus Robotics", url: "https://www.locusrobotics.com/", country: "us", description: "Providing collaborative autonomous mobile robots that work alongside human workers to dramatically increase warehouse picking productivity.", businessArea: "Collaborative Warehouse Picking", models: ["LocusOrigin", "LocusVector"] },
    { id: 1114, title: "Zebra Technologies<br>(Fetch Robotics)", category: "logistics", source: "Zebra", url: "https://www.zebra.com/us/en/products/robotics.html", country: "us", description: "Delivering a comprehensive portfolio of autonomous mobile robots optimizing material handling and inventory tracking.", businessArea: "Data-Driven Material Handling", models: ["Fetch100", "Fetch500"] },
    { id: 620, title: "Toyota (Autopilot Forklifts)", category: "logistics", source: "Toyota Material Handling", url: "https://www.toyotaforklift.com/", country: "jp", description: "A material handling powerhouse advancing automated guided vehicles (AGVs) and autonomous forklifts for seamless operations.", businessArea: "Automated Material Handling", models: ["Autopilot Forklifts"] },
    { id: 621, title: "Linde (Automated Forklifts)", category: "logistics", source: "KION Group", url: "https://www.linde-mh.com/en/Solutions/Automation/", country: "de", description: "Offering intelligent automated industrial trucks that integrate with warehouse management systems for efficient intralogistics.", businessArea: "Automated Industrial Trucks", models: ["L-MATIC", "R-MATIC"] }, 
    { id: 622, title: "VisionNav<br> (Driverless Forklift)", category: "logistics", source: "VisionNav", url: "https://www.visionnav.com/", country: "cn", description: "A global leader in autonomous intralogistics, providing AI-powered driverless forklifts guided by advanced vision technology.", businessArea: "Vision-Guided Autonomous Forklifts", models: ["VNP15", "VNSL14"] },
    { id: 623, title: "Vecna (Autonomous Pallet Handling)", category: "logistics", source: "Vecna Robotics", url: "https://www.vecnarobotics.com/", country: "us", description: "Delivering high-capacity autonomous mobile robots and self-driving forklifts tailored for dynamic material handling.", businessArea: "High-Capacity Pallet Handling", models: ["Autonomous Pallet Truck", "Autonomous Tugger"] },
    { id: 624, title: "Jungheinrich (Automated Warehouse)", category: "logistics", source: "Jungheinrich", url: "https://www.jungheinrich.com/en/solutions/automation", country: "de", description: "Providing comprehensive automated intralogistics solutions, including automated guided vehicle systems and automated storage.", businessArea: "Automated Warehouse Systems", models: ["ERC 213a", "EKS 215a"] },
    { id: 626, title: "Mobyus (Autonomous Fork Lift)", category: "logistics", source: "Mobyus NVC", url: "http://www.mobyus.com/index", country: "kr", description: "A Korean intralogistics innovator focusing on smart automated guided vehicles and autonomous forklifts for industrial sites.", businessArea: "Smart Intralogistics Mobility", models: ["Autonomous Forklift"] },
    { id: 627, title: "Balyo (Robotic Forklift Kits)", category: "logistics", source: "Balyo", url: "https://www.balyo.com/", country: "fr", description: "Transforming standard manual forklifts into fully autonomous robots using innovative infrastructure-free navigation technology.", businessArea: "Robotic Forklift Kits", models: ["VNA Robot", "Reach Robot"] },
    { id: 1110, title: "Hyster-Yale Materials Handling", category: "logistics", source: "Hyster-Yale", url: "https://www.hyster-yale.com/", country: "us", description: "Integrating advanced robotic technology into heavy-duty lift trucks to automate repetitive load transportation in tough environments.", businessArea: "Heavy-Duty Automated Lift Trucks", models: ["Robotic Tow Tractor"] },
    { id: 1112, title: "Mitsubishi Logisnext", category: "logistics", source: "Mitsubishi Group", url: "https://www.logisnext.com/en/", country: "jp", description: "Delivering a wide range of material handling automation, including AGVs and automated forklifts for robust supply chain operations.", businessArea: "Integrated Supply Chain Automation", models: ["A-G-V Systems"] },
    { id: 1102, title: "MiR (Mobile Industrial Robots)", category: "logistics", sub: "Industrial AMR", url: "https://www.mobile-industrial-robots.com/", country: "dk", description: "A leading manufacturer of collaborative autonomous mobile robots dedicated to automating internal transport safely and efficiently.", businessArea: "Collaborative Internal Logistics", models: ["MiR250", "MiR1350"] },
    { id: 626, title: "Hyundai Wia (AMR & Parking Robot)", category: "logistics", source: "Autonomous Solutions", url: "https://en.hyundai-wia.com/main/main.asp", country: "kr", description: "Developing advanced autonomous mobile robots and parking robots to modernize industrial logistics and mobility infrastructure.", businessArea: "Industrial Logistics & Smart Parking", models: ["Smart AMR", "Parking Robot"] },
    { id: 1109, title: "Exotec<br>(3D Skypod Robotic System)", category: "logistics", source: "Exotec", url: "https://www.exotec.com/", country: "fr", description: "Revolutionizing order preparation with a scalable 3D robotic goods-to-person system that climbs storage racks autonomously.", businessArea: "3D Goods-to-Person Automation", models: ["Skypod System"] },
    { id: 1106, title: "Starship Technologies", category: "logistics", source: "Last-Mile Delivery Robot", url: "https://www.starship.xyz/", country: "us", description: "Pioneering autonomous last-mile delivery with fleets of sidewalk robots delivering food and groceries directly to consumers.", businessArea: "Last-Mile Sidewalk Delivery", models: ["Starship Delivery Robot"] },
    { id: 1107, title: "Swisslog<br>(Advanced Logistics)", category: "logistics", source: "Swisslog", url: "https://www.swisslog.com/", country: "ch", description: "Providing data-driven and robotic solutions for logistics automation, including advanced ASRS and automated item picking.", businessArea: "Advanced Intralogistics & Healthcare", models: ["AutoStore integration", "ItemPiQ"] },
    { id: 1113, title: "Symbotic<br>(End-to-End Automation)", category: "logistics", source: "Symbotic", url: "https://www.symbotic.com/", country: "us", description: "Deploying high-speed robotic fleets and AI software to fundamentally restructure and accelerate end-to-end warehouse automation.", businessArea: "AI-Powered End-to-End Automation", models: ["Symbotic System", "Symbots"] },
    { id: 661, title: "Schneider Electric (Industrial AI)", category: "automation", source: "Digital Automation", url: "https://www.se.com/", country: "fr", description: "Integrating AI and robotics into overarching industrial automation software to drive digital transformation and efficiency.", businessArea: "Industrial Digitalization & Automation", models: ["EcoStruxure"] },
    { id: 1115, title: "KION Group<br>(Linde, STILL & Dematic)", category: "logistics", source: "KION Group", url: "https://www.kiongroup.com/en/", country: "de", description: "A global logistics leader offering complete supply chain automation solutions encompassing AGVs, ASRS, and smart software.", businessArea: "Supply Chain Automation Solutions", models: ["Dematic AMRs", "Linde Robotics"] },
    { id: 1104, title: "OTTO Motors<br>(Material Handling AMRs)", category: "logistics", source: "Rockwell Automation", url: "https://ottomotors.com/", country: "ca", description: "Building heavy-duty autonomous mobile robots specifically designed to handle bulky materials in tough manufacturing environments.", businessArea: "Heavy Material Handling AMRs", models: ["OTTO 100", "OTTO 1500"] },
    { id: 1116, title: "Serve Robotics<br>(Sidewalk Delivery)", category: "logistics", source: "Serve Robotics", url: "https://www.serverobotics.com/", country: "us", description: "Operating zero-emissions, autonomous sidewalk robots to make local last-mile delivery more sustainable and efficient.", businessArea: "Sustainable Sidewalk Delivery", models: ["Serve Robot"] },
    { id: 1120, title: "Geek+<br>(Goods-to-Person AMRs)", category: "logistics", source: "Geek+", url: "https://www.geekplus.com/", country: "cn", description: "A global leader in AMR technology, providing smart logistics solutions for picking, sorting, and moving goods in warehouses.", businessArea: "Goods-to-Person AMRs", models: ["P-Series", "S-Series"] },
    { id: 1121, title: "AutoStore<br>(Cube Storage Automation)", category: "logistics", source: "AutoStore", url: "https://www.autostoresystem.com/", country: "no", description: "Inventors of the ultra-high-density cube storage automation system, utilizing top-running robots to retrieve inventory bins.", businessArea: "Cube Storage Automation", models: ["Red Line", "Black Line Robots"] },
    { id: 1122, title: "Zipline<br>(Autonomous Drone Delivery)", category: "logistics", source: "Zipline", url: "https://www.zipline.com/", country: "us", description: "Designing, manufacturing, and operating the world's largest autonomous drone delivery network, specializing in medical supplies.", businessArea: "Autonomous Drone Delivery", models: ["Platform 1 (Fixed-wing)", "Platform 2 (VTOL)"] },
    { id: 1123, title: "Wing<br>(Alphabet Drone Delivery)", category: "logistics", source: "Wing", url: "https://wing.com/", country: "us", description: "An Alphabet company developing lightweight delivery drones and an automated routing system for fast, residential package delivery.", businessArea: "Lightweight Drone Delivery", models: ["Wing Delivery Drone"] },
    { id: 1125, title: "Hai Robotics<br>(Case-handling Robot)", category: "logistics", source: "Hai Robotics", url: "https://www.hairobotics.com/", country: "cn", description: "The pioneer of Autonomous Case-handling Robot (ACR) systems, transforming warehouse storage with high-reach bin picking.", businessArea: "Autonomous Case-handling Robotics", models: ["HaiPick Systems"] },
    { id: 1126, title: "Ocado Group<br>(Grocery Fulfillment)", category: "logistics", source: "Ocado Group", url: "https://www.ocadogroup.com/", country: "gb", description: "Developing highly automated grocery fulfillment centers powered by dense grids of AI-orchestrated mobile robots.", businessArea: "Grocery Fulfillment Automation", models: ["Ocado Smart Platform", "Series 600 Bot"] },
    
    // Wearables
    { id: 1201, title: "Cyberdyne<br>(HAL Assistive Limb)", category: "wearable", source: "Cyberdyne", url: "https://www.cyberdyne.jp/english/", country: "jp", description: "Developing cybernic technology and wearable cyborg systems designed to improve, support, and enhance physical capabilities.", businessArea: "Cybernic Technology for Rehab", models: ["HAL Lower Limb"] },
    { id: 1202, title: "German Bionic<br>(Smart Exoskeleton)", category: "wearable", source: "German Bionic", url: "https://www.germanbionic.com/", country: "de", description: "Developing smart industrial exoskeletons that protect workers' lower backs and reduce fatigue during heavy lifting tasks.", businessArea: "Occupational Health", models: ["Cray X"] },
    { id: 1204, title: "Lifeward (ReWalk)<br>(Mobility Exoskeleton)", category: "wearable", source: "Lifeward", url: "https://www.lifeward.com/", country: "us", description: "Empowering individuals with lower limb disabilities with personal mobility exoskeletons that restore upright walking.", businessArea: "Spinal Cord Rehab", models: ["ReWalk"] },
    { id: 1103, title: "Comau MATE<br>(Upper-limb Work Support)", category: "wearable", source: "Comau", url: "https://www.comau.com/en/competencies/robotics/wearable-robotics/", country: "it", description: "Providing ergonomic, passive wearable exoskeletons that assist workers' upper limbs during repetitive overhead tasks.", businessArea: "Industrial Ergonomics", models: ["MATE-XT"] },
    { id: 1206, title: "SuitX (Ottobock)<br>(Power Assist)", category: "wearable", source: "SuitX", url: "https://www.suitx.com/", country: "de", description: "A leader in workplace ergonomics, creating lightweight exoskeletons that augment human strength in industrial settings.", businessArea: "Workplace Ergonomics", models: ["IXO"] },
    { id: 1207, title: "Marsi Bionics<br>(Pediatric Exoskeleton)", category: "wearable", source: "Marsi Bionics", url: "https://www.marsibionics.com/", country: "es", description: "Creating the world's first pediatric gait exoskeletons specifically designed to help children with neuromuscular diseases walk.", businessArea: "Pediatric Rehab", models: ["ATLAS 2030"] },
    { id: 1208, title: "Hexar Humancare<br>(Support System)", category: "wearable", source: "Hexar", url: "http://hexarhc.com/", country: "kr", description: "Specializing in precision rehabilitation technology with exoskeletons designed for knee and lumbar support and recovery.", businessArea: "Rehab & Assist", models: ["Hexar Knee"] },
    { id: 1209, title: "Hilti (EXO-O1)<br>(Construction Wearable)", category: "wearable", source: "Hilti", url: "https://www.hilti.com/c/CLS_EXOSKELETONS", country: "li", description: "Offering passive exoskeletons tailored for the construction industry to alleviate strain on shoulders and arms during overhead work.", businessArea: "Construction Ergonomics", models: ["EXO-O1", "EXO-S"] },
    { id: 1210, title: "WIRobotics<br>(WIM Everyday Mobility)", category: "wearable", source: "WIRobotics", url: "https://wirobotics.com/", country: "kr", description: "Innovating personal mobility with ultra-lightweight wearable walking assist devices designed for everyday consumer use.", businessArea: "Everyday Mobility", models: ["WIM"] },
    { id: 1211, title: "Bionik Labs<br>(InMotion Rehab Robot)", category: "wearable", source: "Bionik Labs", url: "https://www.bioniklabs.com/", country: "ca", description: "Providing AI-driven neuro-recovery solutions and robotic systems that assist in restoring arm and hand mobility after strokes.", businessArea: "Neuro-Rehabilitation", models: ["InMotion ARM"] },
    { id: 1203, title: "Ekso Bionics<br>(Medical & Industrial)", category: "wearable", source: "Ekso Bionics", url: "https://eksobionics.com/", country: "us", description: "A pioneer in the field of robotic exoskeletons, developing devices that enhance human strength, endurance, and mobility.", businessArea: "Human Augmentation", models: ["EksoNR"] },
    { id: 1212, title: "Wandercraft<br>(Self-Balancing Exoskeleton)", category: "wearable", source: "Wandercraft", url: "https://www.wandercraft.eu/", country: "fr", description: "Building advanced self-balancing exoskeletons that allow individuals with severe mobility impairments to walk completely hands-free.", businessArea: "Hands-free Rehab", models: ["Atalante"] },
    { id: 1213, title: "Innophys<br>(Every Muscle Suit)", category: "wearable", source: "Innophys", url: "https://innophys.jp/en/", country: "jp", description: "Designing electricity-free pneumatic support suits that use compressed air to provide powerful back support for heavy lifting.", businessArea: "Pneumatic Exosuits", models: ["Muscle Suit Every"] },
    { id: 1214, title: "Roam Robotics<br>(Forge Soft Exoskeleton)", category: "wearable", source: "Roam Robotics", url: "https://www.roamrobotics.com/", country: "us", description: "Developing lightweight, air-powered soft exoskeletons that provide knee support and enhance mobility for active lifestyles and labor.", businessArea: "Mobility Support", models: ["Ascend"] },
    { id: 1215, title: "Trexo Robotics<br>(Pediatric Exoskeleton)", category: "Wearable", source: "Trexo Robotics", url: "https://trexorobotics.com/", country: "ca", description: "Creating robotic legs specifically designed for children with disabilities, enabling them to experience walking and active movement.", businessArea: "Pediatric Mobility", models: ["Trexo Plus"] },
    { id: 1217, title: "Angel Robotics<br>(Wearable Suits)", category: "Wearable", source: "Angel Robotics", url: "https://angel-robotics.com/en/", country: "kr", description: "A KAIST spin-off creating highly advanced wearable robots for neurological rehabilitation and industrial muscle support.", businessArea: "Rehab Exoskeletons", models: ["Angel Legs M"] },
    { id: 1218, title: "Open Bionics<br>(Hero Arm - Bionic Hand)", category: "Wearable", source: "Open Bionics", url: "https://openbionics.com/", country: "gb", description: "Transforming bionic prosthetics with highly customizable, 3D-printed multi-grip bionic arms that are accessible and stylish.", businessArea: "Bionic Prosthetics", models: ["Hero Arm"] },
    
    // Home 
    { id: 1001, title: "Amazon<br>(Astro Home Robot)", category: "Home", source: "Amazon", url: "https://www.aboutamazon.com/news/devices/meet-astro-a-home-robot-unlike-any-other", country: "us", description: "An intelligent household robot combining Alexa's AI with mobility for home monitoring, assistance, and entertainment.", businessArea: "Home Monitoring", models: ["Astro"] }, 
    { id: 1002, title: "iRobot<br>(Roomba & Braava)", category: "Home", source: "iRobot", url: "https://www.irobot.com/", country: "us", description: "The pioneer of consumer robotics, universally known for the Roomba line of autonomous vacuum and mopping robots.", businessArea: "Smart Cleaning", models: ["Roomba Combo", "Braava jet"] }, 
    { id: 1003, title: "Sony<br>(aibo Robotic Companion)", category: "Home", source: "Sony", url: "https://us.aibo.com/", country: "jp", description: "An iconic, lifelike robotic dog that uses AI and deep learning to develop a unique personality through interactions with its owner.", businessArea: "Entertainment", models: ["aibo ERS-1000"] }, 
    { id: 1004, title: "Dreame Technology<br>(Window Cleaning)", category: "Home", source: "Dreame", url: "https://global.dreametech.com/", country: "cn", description: "A rapidly growing smart home company providing advanced robotic vacuums and intelligent window cleaning robots.", businessArea: "Home Cleaning", models: ["DreameBot"] },
    { id: 1005, title: "Ecovacs Robotics<br>(Intelligent Home)", category: "Home", source: "Ecovacs", url: "https://www.ecovacs.com/", country: "cn", description: "A global leader in smart home robotics, offering comprehensive floor and window cleaning solutions equipped with AI vision.", businessArea: "Home Cleaning", models: ["DEEBOT", "WINBOT"] },
    { id: 1006, title: "Enabot (EBO)<br>(Family robot)", category: "Home", source: "Enabot", url: "https://www.enabot.com/", country: "cn", description: "Creating compact, agile family companion robots that allow users to monitor their home and interact with pets and family remotely.", businessArea: "Companion Robot", models: ["EBO Air", "EBO X"] },
    { id: 1007, title: "Labrador Systems<br>(Assistive Robot)", category: "Home", source: "Labrador Systems", url: "https://labradorsystems.com/", country: "us", description: "Developing personal assistive robots that autonomously move heavy items and bring essentials within reach for individuals with mobility issues.", businessArea: "Home Assistance", models: ["Retriever"] },
    { id: 1008, title: "LIVING.AI<br>(EMO & AIBI Desktop Pet)", category: "Home", source: "LIVING.AI", url: "https://living.ai/", country: "cn", description: "Designing expressive AI desktop pets that interact with users, play music, and provide lively companionship.", businessArea: "AI Entertainment", models: ["EMO", "AIBI"] },
    { id: 1009, title: "Moxie Robot<br>(AI Social Companion)", category: "Home", source: "Embodied", url: "https://embodied.com/", country: "us", description: "A revolutionary AI companion designed to help children build social, emotional, and cognitive skills through daily play and conversation.", businessArea: "Educational Companion", models: ["Moxie"] },
    { id: 1010, title: "Narwal Robotics<br>(All for Clean Home)", category: "Home", source: "Narwal", url: "https://shop.narwal.com/", country: "cn", description: "Innovating the robot vacuum market with self-cleaning base stations and specialized mopping technologies for effortless home maintenance.", businessArea: "Home Cleaning", models: ["Freo"] },
    { id: 1011, title: "Roborock<br>(Robotic Vacuum Cleaner)", category: "Home", source: "Roborock", url: "https://global.roborock.com/", country: "cn", description: "A premier manufacturer of high-end, intelligent robotic vacuums featuring advanced LiDAR navigation and self-emptying docks.", businessArea: "Home Cleaning", models: ["S8 Pro Ultra"] },
    { id: 1012, title: "Samsung Ballie<br>(Robot companion)", category: "Home", source: "Samsung", url: "https://news.samsung.com/us/samsung-ballie-ai-companion-robot-home-video-ces-2024", country: "kr", description: "A rolling AI home companion that projects content, manages smart devices, and acts as a mobile smart home hub.", businessArea: "AI Home Hub", models: ["Ballie"] },
    { id: 1107, title: "Intuition Robotics<br>(AI care companion)", category: "Home", sub: "Social Companion AI", url: "https://www.intuitionrobotics.com/", country: "il", description: "Creating empathetic AI companions designed to reduce loneliness and foster healthy, active lifestyles for older adults.", businessArea: "Elderly Care", models: ["ElliQ"] },
    { id: 1140, title: "Aiper<br>(Cordless Pool Cleaner)", category: "Home", source: "Aiper", url: "https://aiper.com/", country: "us", description: "Specializing in 100% cordless, intelligent robotic pool cleaners that offer hassle-free automated pool maintenance.", businessArea: "Pool Cleaning", models: ["Seagull Pro"] },
    { id: 1150, title: "Tombot<br>(Jennie - emotional support)", category: "Home", source: "Tombot", url: "https://www.tombot.com/", country: "us", description: "Creating hyper-realistic robotic emotional support animals designed to comfort seniors and individuals with dementia.", businessArea: "Emotional Support", models: ["Jennie"] },
    { id: 1190, title: "Sentigent<br>(Rover X3 Outdoor)", category: "Home", source: "Sentigent", url: "https://www.sentigent.com/", country: "cn", description: "Developing robust outdoor companion robots for property monitoring and interaction in varied weather conditions.", businessArea: "Outdoor Security", models: ["Rover X3"] },
    { id: 1200, title: "SwitchBot Onero H1<br>(Multitasking)", category: "Home", source: "SwitchBot", url: "https://www.switch-bot.com/pages/onero-h1", country: "cn", description: "An upcoming versatile home robot aimed at integrating seamlessly into smart home ecosystems to perform multi-purpose tasks.", businessArea: "Home Automation", models: ["Onero H1"] },
    { id: 1301, title: "Husqvarna Automower<br>(Lawn mowers)", category: "Home", source: "Husqvarna", url: "https://www.husqvarna.com/us/robotic-lawn-mowers/", country: "se", description: "The global pioneer in robotic lawn mowers, offering a wide range of autonomous mowers for perfect, hands-free lawn care.", businessArea: "Outdoor Maintenance", models: ["Automower"] },
    { id: 1303, title: "Mammotion<br>(Lawn Mower)", category: "Home", source: "Mammotion", url: "https://mammotion.com/", country: "cn", description: "Providing innovative wire-free perimeter robotic lawn mowers that utilize advanced RTK-GPS for precise virtual boundary navigation.", businessArea: "Wire-free Lawn Care", models: ["LUBA 2"] },
    { id: 1310, title: "Dyson 360 Vis Nav<br>(robot vacuum)", category: "Home", source: "Dyson", url: "https://www.dyson.com/vacuum-cleaners/robot/360-vis-nav", country: "gb", description: "Combining Dyson's powerful suction technology with a 360-degree vision system for high-performance autonomous cleaning.", businessArea: "Home Cleaning", models: ["360 Vis Nav"] },
    { id: 1311, title: "SharkNinja (Shark AI Robot)", category: "Home", source: "SharkNinja", url: "https://www.sharkclean.com/robot-vacuums/", country: "us", description: "A popular consumer brand offering reliable and affordable robot vacuums with self-emptying bases and matrix cleaning paths.", businessArea: "Home Cleaning", models: ["Shark AI Robot"] },
    { id: 1312, title: "eufy Clean<br>(Robot Vacuum)", category: "Home", source: "eufy", url: "https://www.eufy.com/", country: "cn", description: "An Anker innovations brand delivering smart, quiet, and efficient robotic cleaning solutions for the modern home.", businessArea: "Home Cleaning", models: ["X9 Pro"] },
    { id: 1320, title: "HOBOT Technology<br>(Window Cleaning)", category: "Home", source: "HOBOT", url: "https://www.hobot.com.tw/", country: "tw", description: "A specialized manufacturer of intelligent robotic window cleaners featuring dual-ultrasonic water spray technology.", businessArea: "Window Cleaning", models: ["HOBOT-2S"] },
    { id: 1330, title: "KEYi Robot<br>(Loona & ClicBot)", category: "Home", source: "KEYi Tech", url: "https://keyirobot.com/", country: "cn", description: "Developing highly interactive, emotional smart petbots and modular educational robots that combine learning with entertainment.", businessArea: "Smart Petbot", models: ["Loona", "ClicBot"] },
    { id: 1331, title: "Vector 2.0<br>(Home Robot)", category: "Home", source: "Digital Dream Labs", url: "https://anki.bot/", country: "us", description: "A tiny, always-on, autonomous home robot packed with personality and AI to answer questions and keep you company.", businessArea: "AI Companion", models: ["Vector 2.0"] },
    { id: 1350, title: "Maytronics Dolphin<br>(Robotic Pool)", category: "Home", source: "Maytronics", url: "https://maytronics.com/", country: "il", description: "The industry leader in robotic pool cleaners, delivering powerful scrubbing and filtering performance for residential pools.", businessArea: "Pool Cleaning", models: ["Dolphin Nautilus"] }, 
    { id: 1351, title: "Grillbot<br>(Automatic Grill Cleaner)", category: "Home", source: "Grillbot", url: "https://grillbots.com/", country: "us", description: "Creating niche, fully automated cleaning robots specifically designed to scrub barbecue grills at the push of a button.", businessArea: "Grill Cleaning", models: ["Grillbot"] },
    { id: 1353, title: "Matic Robots<br>(Next-Gen Floor Cleaner)", category: "Home", source: "Matic", url: "https://maticrobots.com/", country: "us", description: "A next-generation autonomous floor cleaner that navigates entirely via 3D cameras and edge AI, ensuring complete data privacy.", businessArea: "Home Cleaning", models: ["Matic"] }, 
    { id: 4010, title: "Alice the Social Robot<br>(Elderly Care)", category: "Home", source: "Social Robotics", url: "https://www.deloittedigital.com/nl/en/work/alice.html", country: "nl", description: "An experimental social robot designed to communicate with and reduce feelings of loneliness among the elderly.", businessArea: "Elderly Care", models: ["Alice"] },
    { id: 4002, title: "LG Electronics<br>(Smart Home AI Agent)", category: "Home", source: "LG", url: "https://www.lgnewsroom.com/2023/12/lg-to-unveil-smart-home-ai-agent-at-ces-2024/", country: "kr", description: "A two-legged mobile smart home hub that expresses emotions, patrols the house, and controls IoT appliances independently.", businessArea: "Smart Home Hub", models: ["LG AI Agent"] },

    // AI
    { id: 801, title: "OpenAI (ChatGPT)", category: "ai", source: "OpenAI", url: "https://openai.com/", country: "us", description: "A leading AI research organization developing state-of-the-art language models and multimodal systems used globally.", businessArea: "Frontier AI Models", models: ["GPT-4o"] }, 
    { id: 802, title: "Google DeepMind", category: "ai", source: "Google", url: "https://deepmind.google/", country: "gb", description: "A premier AI research lab responsible for breakthroughs in reinforcement learning and embodied robotics foundation models.", businessArea: "AI & Robotic Research", models: ["RT-2", "Gemini"] }, 
    { id: 803, title: "Anthropic (Claude)", category: "ai", source: "Anthropic", url: "https://www.anthropic.com/", country: "us", description: "An AI safety and research company building helpful, honest, and harmless advanced AI models.", businessArea: "Safe AI Systems", models: ["Claude 3"] }, 
    { id: 804, title: "Meta AI (Llama)", category: "ai", source: "Meta", url: "https://ai.meta.com/", country: "us", description: "Advancing open-source AI with robust large language models and computer vision research applied to robotics.", businessArea: "Open-Source AI", models: ["Llama 3"] },
    { id: 805, title: "Hugging Face (AI Model's Hub)", category: "ai", source: "Hugging Face", url: "https://huggingface.co/", country: "us", description: "The leading open-source community and hub for machine learning models, datasets, and collaborative AI development.", businessArea: "Machine Learning Hub", models: ["LeRobot Platform"] },
    { id: 806, title: "Gemini (Google DeepMind)", category: "ai", source: "Google DeepMind", url: "https://gemini.google.com/", country: "us", description: "Google's most capable and general multimodal AI model, designed to understand and operate across text, code, audio, and image.", businessArea: "Multimodal AI", models: ["Gemini 1.5 Pro"] },
    { id: 1105, title: "ZenRobotics", category: "ai", sub: "AI Waste Sorting", url: "https://zenrobotics.com/", country: "fi", description: "Applying cutting-edge AI and machine learning to industrial robotic arms for highly efficient, automated waste sorting and recycling.", businessArea: "AI Waste Sorting", models: ["Heavy Picker", "Fast Picker"] },
    { id: 720, title: "Scale AI", category: "ai", source: "Data Infrastructure", url: "https://scale.com/", country: "us", description: "Providing critical data infrastructure and high-quality data labeling services required to train robust AI and autonomous driving models.", businessArea: "AI Data Infrastructure", models: ["Scale Data Engine"] },
    { id: 807, title: "Mistral AI", category: "ai", source: "Frontier AI Models", url: "https://mistral.ai/", country: "fr", description: "A rapidly growing European AI company creating powerful, highly efficient open-weight and commercial language models.", businessArea: "Frontier AI Models", models: ["Mistral Large"] },
    { id: 731, title: "DeepSeek<br>(Open Source AGI)", category: "ai", source: "DeepSeek", url: "https://www.deepseek.com/", country: "cn", description: "Developing advanced open-source AI and vision-language models capable of deep reasoning, applicable as robotic brains.", businessArea: "AGI & Reasoning Models", models: ["DeepSeek-V2"] },
    { id: 999, title: "NVIDIA (Isaac Robotics)", category: "ai", source: "NVIDIA", url: "https://www.nvidia.com/en-us/deep-learning-ai/industries/robotics/", country: "us", description: "Accelerating AI-driven robotics with specialized platforms, highly realistic physical simulations, and edge computing hardware.", businessArea: "AI Computing & Simulation", models: ["Isaac Sim", "Jetson Thor"] },

    // Software
    { id: 701, title: "ROS (Robot Operating System)", category: "software", source: "Open Source", url: "https://www.ros.org/", country: "us", description: "The de facto open-source middleware framework providing libraries and tools to help software developers create robot applications.", businessArea: "Robotics Middleware", models: ["ROS 2"] }, 
    { id: 702, title: "NVIDIA Isaac Sim", category: "software", source: "NVIDIA", url: "https://developer.nvidia.com/isaac", country: "us", description: "A scalable, photorealistic robotics simulation application empowering developers to design, test, and train AI-based robots.", businessArea: "Robotics Simulation", models: ["Isaac Sim"] }, 
    { id: 703, title: "MATLAB & Simulink", category: "software", source: "MathWorks", url: "https://www.mathworks.com/solutions/robotics.html", country: "us", description: "Industry-standard modeling software utilized extensively for algorithm development, control system design, and robot simulation.", businessArea: "Engineering Software", models: ["Robotics System Toolbox"] },
    { id: 704, title: "Gazebo Simulator", category: "software", source: "Open Source Robotics", url: "https://gazebosim.org/", country: "us", description: "A robust 3D open-source robotics simulator that integrates tightly with ROS to accurately and efficiently simulate populations of robots.", businessArea: "3D Robotics Simulation", models: ["Gazebo"] },
    { id: 705, title: "Intrinsic (Alphabet)", category: "software", source: "Google Subsidiary", url: "https://www.intrinsic.ai/", country: "us", description: "An Alphabet company developing intelligent software platforms designed to make industrial robotics more accessible and usable.", businessArea: "Industrial Robotics Software", models: ["Intrinsic Flowstate"] },
    { id: 706, title: "Brain Corp (BrainOS)", category: "software", source: "Autonomous AI", url: "https://www.braincorp.com/", country: "us", description: "Providing cloud-connected AI software that transforms manual commercial machines, like floor scrubbers, into autonomous robots.", businessArea: "Autonomous Navigation OS", models: ["BrainOS"] },
    { id: 707, title: "Clobot (Robot Control)", category: "software", source: "Korea S/W Leader", url: "https://www.clobot.co.kr/", country: "kr", description: "A South Korean software company offering advanced robot autonomous driving solutions and comprehensive control platforms.", businessArea: "Autonomous Navigation Software", models: ["Clobot Navigation OS"] },
    { id: 708, title: "RobotStudio", category: "software", source: "ABB Robotics", url: "https://new.abb.com/products/robotics/robotstudio", country: "ch", description: "ABB's industry-leading offline programming and simulation software, enabling highly realistic robot system modeling.", businessArea: "Offline Programming Simulation", models: ["RobotStudio"] },
    { id: 709, title: "SolidWorks (Robot Design)", category: "software", source: "Dassault Systèmes", url: "https://www.solidworks.com/", country: "fr", description: "A premier 3D CAD design software fundamentally utilized by mechanical engineers worldwide to model and assemble robot hardware.", businessArea: "3D CAD & Engineering", models: ["SolidWorks 3D CAD"] },
    { id: 711, title: "Formant (Cloud Robotics)", category: "software", source: "Robot Management", url: "https://formant.io/", country: "us", description: "A cloud-based robot fleet management platform designed for deploying, operating, and scaling fleets of varied autonomous robots.", businessArea: "Cloud Fleet Management", models: ["Formant Platform"] },
    { id: 712, title: "CloudMinds (HARIX OS)", category: "software", source: "Cloud Robot Pioneer", url: "https://www.cloudminds.com/", country: "cn", description: "Operating cloud-based AI architecture to securely manage and provide intelligence to a diverse range of connected service robots.", businessArea: "Cloud Robot OS", models: ["HARIX Platform"] },
    { id: 713, title: "Clobot (CROMS)", category: "software", source: "Korea Fleet Management", url: "https://www.clobot.co.kr/", country: "kr", description: "Providing an integrated, multi-vendor robot fleet management system capable of orchestrating various brands of robots in one facility.", businessArea: "Multi-Robot Fleet Management", models: ["CROMS"] },
    { id: 714, title: "Orbit (Fleet Software)", category: "software", source: "Boston Dynamics", url: "https://bostondynamics.com/products/orbit/", country: "us", description: "A powerful enterprise software platform designed specifically to manage, deploy, and analyze data from fleets of Spot robots.", businessArea: "Enterprise Fleet Management", models: ["Orbit"] },
    { id: 715, title: "Karelics (Fleet Management)", category: "software", source: "Construction Robotics", url: "https://karelics.fi/", country: "fi", description: "Specializing in software solutions that enable autonomous navigation and fleet management for robots in highly dynamic environments like construction.", businessArea: "Dynamic Fleet Management", models: ["Karelics Brain"] },
    { id: 716, title: "MyRobot.cloud", category: "software", source: "Rocketfarm", url: "https://myrobot.cloud/", country: "no", description: "A dedicated cloud solution aimed at securely monitoring, analyzing, and remotely managing Universal Robots collaborative arms.", businessArea: "Cobot Cloud Monitoring", models: ["MyRobot.cloud"] },
    { id: 717, title: "Applied Intuition", category: "software", source: "Autonomous Vehicle Simulation", url: "https://www.appliedintuition.com/", country: "us", description: "Providing software infrastructure for safely developing, testing, and deploying autonomous vehicle systems at scale.", businessArea: "AV Development Software", models: ["Simian"] },
    { id: 718, title: "Weights & Biases (W&B)", category: "software", source: "AI Developer Platform", url: "https://wandb.ai/", country: "us", description: "A comprehensive developer-first MLOps platform used to track experiments, evaluate models, and manage machine learning pipelines.", businessArea: "MLOps Platform", models: ["W&B Platform"] },
    { id: 730, title: "Mujin<br>(Intelligent Controller)", category: "software", source: "Teach-less Planning", url: "https://www.mujin.co.jp/en/", country: "jp", description: "Offering universal, teach-less intelligent robotic controllers powered by machine vision and real-time motion planning for logistics.", businessArea: "Universal Robot Controllers", models: ["MujinController"] },
    
    // Components
    { id: 901, title: "Lidar by Velodyne", category: "components", source: "Velodyne", url: "https://velodynelidar.com/", country: "us", description: "A pioneer in 3D vision technology, manufacturing high-performance LiDAR sensors essential for autonomous navigation.", businessArea: "LiDAR Sensors", models: ["Puck", "Alpha Prime"] }, 
    { id: 902, title: "Robot Grippers by Robotiq", category: "components", source: "Robotiq", url: "https://robotiq.com/", country: "ca", description: "Designing flexible, plug-and-play end effectors, grippers, and force sensors primarily aimed at collaborative robot applications.", businessArea: "Collaborative End Effectors", models: ["2F-85", "Hand-E"] },
    { id: 903, title: "maxon (Precision Motors)", category: "components", source: "maxon", url: "https://www.maxongroup.com/", country: "ch", description: "A global supplier of high-precision brushed and brushless DC motors and drives used in medical, aerospace, and robotics.", businessArea: "Precision DC Motors", models: ["EC Motors", "DCX"] },
    { id: 904, title: "Harmonic Drive", category: "components", source: "Harmonic Drive", url: "https://www.harmonicdrive.net/", country: "us", description: "The original inventor of strain wave gearing, providing zero-backlash, high-precision reducers essential for robotic arm joints.", businessArea: "High-Precision Gearheads", models: ["CSG", "CSF Series"] },
    { id: 905, title: "Cognex (Machine Vision)", category: "components", source: "Cognex", url: "https://www.cognex.com/", country: "us", description: "The world's leading provider of vision systems, vision software, and industrial barcode readers for manufacturing automation.", businessArea: "Industrial Machine Vision", models: ["In-Sight", "DataMan"] },
    { id: 906, title: "Festo (Automation)", category: "components", source: "Festo", url: "https://www.festo.com/", country: "de", description: "A leading worldwide supplier of pneumatic and electrical automation technology, heavily utilized in industrial robotic workcells.", businessArea: "Pneumatic & Electric Automation", models: ["Festo Actuators"] },
    { id: 907, title: "Universal Robots+ (Tools)", category: "components", source: "Universal Robots", url: "https://www.universal-robots.com/plus/", country: "dk", description: "An ecosystem of certified, third-party end-effectors, software, and accessories perfectly integrated for Universal Robots cobots.", businessArea: "Cobot Ecosystem Platform", models: ["UR+ Ecosystem"] },
    { id: 908, title: "TE Connectivity (Sensors)", category: "components", source: "TE Connectivity", url: "https://www.te.com/", country: "ch", description: "Designing and manufacturing highly reliable sensors, connectors, and electronic components crucial for robotic communication.", businessArea: "Sensors & Connectivity", models: ["TE Sensors"] },
    { id: 910, title: "Harmonic Drive - Precision", category: "components", source: "Global Leader", url: "https://www.harmonicdrive.net/", country: "jp", description: "Manufacturing extreme precision, zero-backlash gearing solutions that serve as the fundamental joint components for industrial robots.", businessArea: "Strain Wave Gearing", models: ["HD Reducers"] },
    { id: 911, title: "Nabtesco - RV Reducers", category: "components", source: "Global Leader", url: "https://www.nabtesco.com/", country: "jp", description: "The world's dominant manufacturer of cycloidal precision RV gear reducers, relied upon for the joints of heavy industrial robots.", businessArea: "Cycloidal Gear Reducers", models: ["RV Series Reducer"] },
    { id: 912, title: "ROBOTIS - Dynamixel", category: "components", source: "Korea Specialty", url: "https://www.robotis.com/", country: "kr", description: "Creators of the popular Dynamixel smart actuators, which integrate DC motors, controllers, and networks into one compact module.", businessArea: "Smart Servo Actuators", models: ["Dynamixel X", "Dynamixel PRO"] },
    { id: 913, title: "SBB Tech - Harmonic Reducers", category: "components", source: "Korea Specialty", url: "http://www.sbb.co.kr/", country: "kr", description: "A South Korean manufacturer specializing in precise harmonic gear reducers and advanced bearings for automated equipment.", businessArea: "Precision Gear Reducers", models: ["SBB Harmonic Drive"] },
    { id: 914, title: "Maxon Motor - Precision Drives", category: "components", source: "Global Specialty", url: "https://www.maxongroup.com/", country: "ch", description: "Delivering world-class precision drive systems that perform reliably in extreme environments, from Mars rovers to surgical tools.", businessArea: "Precision Drive Systems", models: ["maxon EC-flat"] }, 
    { id: 915, title: "SPG<br>(High-Precision Reducer)", category: "components", source: "Korea Specialty", url: "http://www.spg.co.kr/", country: "kr", description: "A specialized motor and gear company in Korea providing high-precision SH and SR reducers to domestic robotics manufacturers.", businessArea: "Motors & Reducers", models: ["SH Reducer", "SR Reducer"] },
    { id: 950, title: "Velodyne Lidar", category: "components", source: "LiDAR Sensors", url: "https://velodynelidar.com/", country: "us", description: "Producing a diverse range of 3D LiDAR sensors that serve as the foundational 'eyes' for autonomous vehicles and mobile robots.", businessArea: "Autonomous Vision LiDAR", models: ["Ultra Puck"] },
    { id: 951, title: "Ouster<br>(Digital LiDAR)", category: "components", source: "Digital LiDAR", url: "https://www.ouster.com/", country: "us", description: "Developing high-resolution digital LiDAR sensors that offer improved reliability and lower costs for robotics and smart infrastructure.", businessArea: "Digital LiDAR Sensors", models: ["OS1", "OS2"] },
    { id: 952, title: "LG Energy Solution", category: "components", source: "Robot Batteries", url: "https://www.lgensol.com/", country: "kr", description: "A global leader in advanced lithium-ion batteries, providing customized, high-density power solutions for various mobile robots.", businessArea: "Advanced Robotics Batteries", models: ["Li-ion Battery Packs"] },
    { id: 953, title: "SOS LAB<br>(High-Performance LiDAR)", category: "components", source: "Solid-state LiDAR", url: "https://www.soslab.co/en/", country: "kr", description: "A South Korean startup developing compact, solid-state LiDAR sensors specifically optimized for autonomous driving and industrial AMRs.", businessArea: "Solid-State LiDAR", models: ["ML Series"] },
    { id: 954, title: "Hesai Technology", category: "components", source: "LiDAR Solutions", url: "https://www.hesaitech.com/", country: "cn", description: "A global leader in three-dimensional LiDAR solutions, supplying high-performance sensors to major robotaxi and autonomous fleets.", businessArea: "Automotive LiDAR Solutions", models: ["Pandar Series", "AT128"] },
    { id: 955, title: "HL Mando", category: "components", source: "Radar, Camera & By-Wire", url: "https://www.hlmando.com/en/solution/autonomous-driving.do", country: "kr", description: "Providing core autonomous driving components including advanced radars, cameras, and complete by-wire chassis systems.", businessArea: "Autonomous Driving Components", models: ["Radar Sensors", "SbW Systems"] },
    { id: 916, title: "Aidin Robotics<br>(Force/Torque Sensor)", category: "components", source: "Physical Interaction", url: "https://www.aidinrobotics.co.kr/", country: "kr", description: "Originating from Sungkyunkwan University, developing highly sensitive multi-axis force/torque sensors for safe robotic physical interactions.", businessArea: "Robotic Multi-Axis Sensors", models: ["AFT Series"] },
    { id: 960, title: "SICK AG<br>(Safety Sensors & LiDAR)", category: "components", source: "Industrial Safety Systems", url: "https://www.sick.com/", country: "de", description: "A leading manufacturer of industrial sensors, renowned for producing the safety laser scanners that allow AMRs to navigate factories safely.", businessArea: "Industrial Safety Sensors", models: ["microScan3", "S3000"] },
    { id: 961, title: "Keyence<br>(Machine Vision & Sensors)", category: "components", source: "Factory Automation", url: "https://www.keyence.com/", country: "jp", description: "Providing highly advanced and reliable factory automation sensors, measuring instruments, and machine vision systems.", businessArea: "Factory Automation Sensors", models: ["Vision Systems", "Laser Sensors"] },

    // Research
    { id: 30001, title: "Carnegie Mellon Robotics Institute", category: "Research", sub: "AI & Autonomy", url: "https://www.ri.cmu.edu/", country: "us", description: "One of the world's most prestigious robotics research centers, advancing the fundamentals of AI, manipulation, and autonomous navigation.", businessArea: "Academic Robotics Research", models: ["Research Programs"] },
    { id: 30002, title: "MIT CSAIL Robotics", category: "Research", sub: "Robot Learning", url: "https://www.csail.mit.edu/research/robotics", country: "us", description: "Pioneering research in robot learning, soft robotics, and human-robot interaction within MIT's Computer Science and AI Lab.", businessArea: "Academic Robotics Research", models: ["Research Programs"] },
    { id: 30003, title: "Stanford Robotics Lab", category: "Research", sub: "Vision & HRI", url: "https://robotics.stanford.edu/", country: "us", description: "Focusing on artificial intelligence, machine vision, and creating robots that can learn and interact naturally with human environments.", businessArea: "Academic Robotics Research", models: ["Research Programs"] },
    { id: 30004, title: "Harvard Biodesign Lab", category: "Research", sub: "Soft Robotics", url: "https://biodesign.seas.harvard.edu/", country: "us", description: "Leading research in the intersection of robotics and biology, specializing in soft, wearable robotic devices for rehabilitation.", businessArea: "Academic Soft Robotics Research", models: ["Research Programs"] },
    { id: 30005, title: "UC Berkeley Robotics (BAIR)", category: "Research", sub: "Biomimetics", url: "https://bair.berkeley.edu/", country: "us", description: "Renowned for deep reinforcement learning in robotics, enabling robots to acquire complex behaviors and robust locomotion skills.", businessArea: "Academic AI & Robotics Research", models: ["Research Programs"] },
    { id: 30006, title: "ETH Zurich Robotics Systems Lab", category: "Research", sub: "System Design", url: "https://rsl.ethz.ch/", country: "ch", description: "Famous for highly dynamic legged robots like ANYmal, combining advanced mechanical design with cutting-edge learning algorithms.", businessArea: "Academic Legged Robotics Research", models: ["Research Programs"] },
    { id: 30007, title: "EPFL Biorobotics Laboratory", category: "Research", sub: "Bio-inspired", url: "https://www.epfl.ch/labs/biorob/", country: "ch", description: "Drawing inspiration from animal locomotion to create bio-inspired robots that navigate complex terrains with agility.", businessArea: "Academic Bio-inspired Robotics", models: ["Research Programs"] },
    { id: 30008, title: "TUM Munich Robotics", category: "Research", sub: "Cognitive Robots", url: "https://www.mirmi.tum.de/", country: "de", description: "An interdisciplinary institute focusing on machine intelligence, cognitive robotics, and human-centered engineering solutions.", businessArea: "Academic Cognitive Robotics", models: ["Research Programs"] },
    { id: 30009, title: "Imperial College Robotics", category: "Research", sub: "Surgical & Space", url: "https://www.imperial.ac.uk/robotics/", country: "gb", description: "Conducting world-leading research across medical robotics, computer vision, and autonomous systems for extreme environments.", businessArea: "Academic Robotics Research", models: ["Research Programs"] },
    { id: 30010, title: "University of Tokyo Robotics", category: "Research", sub: "Human-Centered", url: "https://www.u-tokyo.ac.jp/en/research/robotics.html", country: "jp", description: "Deeply rooted in the development of highly sophisticated, anatomically inspired humanoid robots and human-assistive technologies.", businessArea: "Academic Humanoid Research", models: ["Research Programs"] },
    { id: 30011, title: "KAIST Robotics Program", category: "Research", sub: "Humanoid & Field", url: "https://robotics.kaist.ac.kr/", country: "kr", description: "A premier Korean research institute recognized globally for developing the HUBO humanoid and advancing field robotics.", businessArea: "Academic Robotics Research", models: ["Research Programs"] },
    { id: 30013, title: "IIT (Italian Institute of Tech)", category: "Research", sub: "Advanced Humanoid", url: "https://www.iit.it/research/robotics", country: "it", description: "Home to the open-source iCub platform, advancing research in cognitive robotics, soft robotics, and humanoid mobility.", businessArea: "Academic Cognitive Research", models: ["Research Programs"] },
    { id: 30015, title: "University of Michigan Robotics", category: "Research", sub: "Legged Locomotion", url: "https://robotics.umich.edu/", country: "us", description: "Excelling in bipedal locomotion, autonomous vehicle research, and collaborative robotics to improve human quality of life.", businessArea: "Academic Robotics Research", models: ["Research Programs"] },
    { id: 30016, title: "University of Sydney Robotics", category: "Research", sub: "Field Robotics", url: "https://www.sydney.edu.au/engineering/our-research/robotics.html", country: "au", description: "A global leader in field robotics, applying autonomous systems to solve complex problems in agriculture, mining, and the environment.", businessArea: "Academic Field Robotics", models: ["Research Programs"] },
    { id: 30023, title: "Tsinghua University (Intelligent Systems)", category: "Research", sub: "AI & Manufacturing", url: "https://www.tsinghua.edu.cn/en/Research/Research_Centers.htm", country: "cn", description: "China's top technical university driving significant research in artificial intelligence, intelligent manufacturing, and advanced control.", businessArea: "Academic Robotics Research", models: ["Research Programs"] },
    { id: 30024, title: "Shanghai Jiao Tong University", category: "Research", sub: "Integrated Systems", url: "http://robotics.sjtu.edu.cn/", country: "cn", description: "Focusing heavily on medical robotics, bionic systems, and the integration of smart autonomous systems into industrial applications.", businessArea: "Academic Robotics Research", models: ["Research Programs"] },
    { id: 30025, title: "Harbin Institute of Technology (HIT)", category: "Research", sub: "Space & Industrial", url: "http://en.hit.edu.cn/about/research_centers", country: "cn", description: "A powerhouse in Chinese engineering research, developing advanced robotic systems for aerospace, industrial, and specialized tasks.", businessArea: "Academic Robotics Research", models: ["Research Programs"] },
    { id: 30026, title: "CAS - Shenyang Institute of Automation", category: "Research", sub: "National Robot Base", url: "http://english.sia.cas.cn/", country: "cn", description: "A major state-backed research center in China leading developments in deep-sea submersibles, industrial robots, and space automation.", businessArea: "State Robotics Research", models: ["Research Programs"] },
    { id: 30027, title: "Zhejiang University (Robotics Lab)", category: "Research", sub: "Intelligent Control", url: "https://www.zju.edu.cn/english/research/index.html", country: "cn", description: "Conducting comprehensive research on quadruped robots, intelligent control mechanisms, and fluid power transmission.", businessArea: "Academic Robotics Research", models: ["Research Programs"] },
    { id: 30090, title: "Peking Univ. School of Intelligence", category: "Research", sub: "Robotics & AI Research", url: "https://sai.pku.edu.cn/znxyenglish/Research_Area/Reseach_Themes.htm", country: "cn", description: "Fostering interdisciplinary research that combines artificial intelligence, machine learning, and advanced robotic applications.", businessArea: "Academic AI & Robotics", models: ["Research Programs"] },
    { id: 30030, title: "Seoul National University (Robotics)", category: "Research", sub: "Dynamics & Soft Robotics", url: "http://robotics.snu.ac.kr/", country: "kr", description: "Focusing on robot dynamics, soft robotics design, and biologically inspired robotic mechanisms for enhanced adaptability.", businessArea: "Academic Soft Robotics", models: ["Research Programs"] },
    { id: 30031, title: "KIST Intelligence and Interaction", category: "Research", sub: "Social & Assistive", url: "https://ir.kist.re.kr/", country: "kr", description: "A prominent Korean national institute leading research in social, assistive, and healthcare robots designed for human interaction.", businessArea: "National Robotics Research", models: ["Research Programs"] },
    { id: 30032, title: "Hanyang University (Robot Engineering)", category: "Research", sub: "Industrial & Service", url: "https://robot.hanyang.ac.kr/", country: "kr", description: "Specializing in the practical application of robot engineering across industrial automation, service robotics, and component design.", businessArea: "Academic Robot Engineering", models: ["Research Programs"] },
    { id: 30033, title: "ETRI (Robot & AI Research)", category: "Research", sub: "Intelligence SW & OS", url: "https://www.etri.re.kr/kor/main/main.etri", country: "kr", description: "Korea's leading IT research institute developing foundational AI software, 5G-connected robotics, and autonomous driving technology.", businessArea: "National IT & Robotics Research", models: ["Research Programs"] },
    { id: 30034, title: "Korea University (Intelligent Robotics)", category: "Research", sub: "Machine Learning & HRI", url: "https://isr.korea.ac.kr/", country: "kr", description: "Investigating the intersection of machine learning, computer vision, and robust human-robot interaction in dynamic environments.", businessArea: "Academic Intelligent Robotics", models: ["Research Programs"] },
    { id: 30035, title: "POSTECH Robotics Lab", category: "Research", sub: "Industrial AI", url: "https://robotics.postech.ac.kr/", country: "kr", description: "Driving innovation in industrial artificial intelligence, intelligent control systems, and automated manufacturing processes.", businessArea: "Academic Industrial AI", models: ["Research Programs"] },
    { id: 30050, title: "NTU Singapore (ROSE)", category: "Research", sub: "Service & AI", url: "https://www.ntu.edu.sg/rose", country: "sg", description: "A leading Asian hub for researching service robotics, autonomous systems, and AI applied to smart city environments.", businessArea: "Academic Robotics Research", models: ["Research Programs"] },
    { id: 30060, title: "University of Oxford (Oxford Robotics)", category: "Research", sub: "Mobile & Field Robotics", url: "https://ori.ox.ac.uk/", country: "gb", description: "Pioneering applied research in mobile autonomy, computer vision, and mapping algorithms for field and space robotics.", businessArea: "Academic Mobile Robotics", models: ["Research Programs"] },
    { id: 30063, title: "Delft University of Technology (TU Delft)", category: "Research", sub: "Cognitive Robotics", url: "https://www.tudelft.nl/en/ai/robotics", country: "nl", description: "Focusing heavily on cognitive robotics, swarm intelligence, and enabling robots to operate reliably in unstructured environments.", businessArea: "Academic Cognitive Robotics", models: ["Research Programs"] },
    { id: 30064, title: "Georgia Institute of Technology", category: "Research", sub: "Institute for Robotics", url: "https://robotics.gatech.edu/", country: "us", description: "A highly interdisciplinary institute advancing medical robotics, autonomy, and human-augmentation technologies.", businessArea: "Academic Robotics Research", models: ["Research Programs"] },
    { id: 3020, title: "Johns Hopkins LCSR", category: "Research", source: "Global Leader in Surgical Robotics", url: "https://lcsr.jhu.edu/", country: "us", description: "World-renowned for its foundational research and continuous innovation in medical, surgical, and healthcare robotics.", businessArea: "Academic Surgical Robotics", models: ["Research Programs"] },
    { id: 30071, title: "Wyss Institute (Harvard)", category: "Research", sub: "Soft Medical Robotics", url: "https://wyss.harvard.edu/", country: "us", description: "Specializing in biologically inspired engineering, creating highly flexible soft robotic wearables and medical devices.", businessArea: "Bio-inspired Engineering", models: ["Research Programs"] },
    { id: 30072, title: "Hamlyn Centre (Imperial)", category: "Research", sub: "Robotic Surgery", url: "https://www.imperial.ac.uk/hamlyn-centre/", country: "gb", description: "A specialized center driving the technological evolution of minimally invasive robotic surgery and intelligent medical imaging.", businessArea: "Academic Medical Robotics", models: ["Research Programs"] },
    { id: 3015, title: "RoMeLa (UCLA)", category: "Research", source: "Led by Prof. Dennis Hong", url: "https://www.romela.org/", country: "us", description: "A creative lab known for inventing entirely new, unconventional locomotion mechanisms and award-winning humanoid robots.", businessArea: "Academic Creative Robotics", models: ["Research Programs"] },
    { id: 3016, title: "Clearpath Robotics<br>(Autonomous R&D)", category: "research", source: "Standard for ROS-Based UGV", url: "https://clearpathrobotics.com/", country: "ca", description: "Providing rugged, ROS-ready unmanned ground vehicles that serve as the standard hardware platform for academic and corporate research.", businessArea: "Robotics Research Platforms", models: ["Jackal", "Husky UGV"] },
    { id: 3017, title: "Google DeepMind<br>(Robotic Transformers)", category: "research", source: "Pioneer in Embodied AI", url: "https://deepmind.google/blog/shaping-the-future-of-advanced-robotics/", country: "gb", description: "Driving the frontier of embodied AI by developing vision-language-action models that allow robots to generalize across tasks.", businessArea: "Embodied AI Research", models: ["Robotic Transformers"] },
    
     // Events
    { id: 10001, title: "ROBOT WORLD", category: "events", source: "KINTEX/KIRIA", url: "https://www.robotworld.or.kr/", country: "kr", description: "One of Korea's largest robotics exhibitions showcasing industrial, service, and educational robots from global companies.", businessArea: "Robotics Exhibition", models: [] }, 
    { id: 10002, title: "iREX (Int'l Robot Exhibition)", category: "events", source: "JARA/NEDO", url: "https://irex.nikkan.co.jp", country: "jp", description: "The world's largest robot trade show held biennially in Tokyo, featuring massive displays of industrial and service robotics.", businessArea: "Robotics Exhibition", models: [] },
    { id: 10003, title: "automatica Munich", category: "events", source: "Messe München", url: "https://automatica-munich.com/", country: "de", description: "The leading global trade fair for smart automation, robotics, and highly integrated assembly solutions in Germany.", businessArea: "Automation Trade Fair", models: [] }, 
    { id: 10004, title: "IEEE RAS (ICRA)", category: "events", source: "IEEE", url: "https://2025.ieee-icra.org/", country: "us", description: "The premier international academic conference where the global robotics community gathers to present cutting-edge research.", businessArea: "Academic Conference", models: [] }, 
    { id: 10005, title: "AI EXPO KOREA", category: "events", source: "AI EXPO", url: "https://www.aiexpo.co.kr/", country: "kr", description: "Korea's largest artificial intelligence exhibition, strongly highlighting the intersection of AI software and robotic hardware.", businessArea: "AI & Tech Exhibition", models: [] },
    { id: 10006, title: "DJI Robotics (RoboMaster)", category: "events", source: "DJI", url: "https://www.robomaster.com/en-US", country: "cn", description: "An intense, globally recognized educational robotics competition challenging university students in engineering and strategy.", businessArea: "Robotics Competition", models: [] },
    { id: 10007, title: "World Robot Conference (WRC)", category: "events", sub: "Global Robot Summit", url: "http://www.worldrobotconference.com/en/", country: "cn", description: "China's premier robotics event encompassing a major exhibition, academic forums, and competitive robot contests.", businessArea: "Robotics Conference & Expo", models: [] },
    { id: 10009, title: "CES", category: "events", sub: "Consumer Tech & AI", url: "https://www.ces.tech", country: "us", description: "The world's most influential tech event, increasingly serving as the primary launchpad for consumer robots and autonomous vehicles.", businessArea: "Technology Exhibition", models: [] },
    { id: 10010, title: "Hannover Messe", category: "events", sub: "Integrated Industry", url: "https://www.hannovermesse.de/en/", country: "de", description: "The world's foremost industrial technology trade fair, heavily focusing on Industry 4.0, automation, and industrial robotics.", businessArea: "Industrial Trade Fair", models: [] },
    { id: 10011, title: "RoboCup World Championship", category: "events", sub: "AI & Robot Competition", url: "https://www.robocup.org/", country: "un", description: "An international scientific initiative aiming to advance AI and intelligent robotics through highly competitive robot soccer.", businessArea: "Scientific Robot Competition", models: [] },
    { id: 10012, title: "NVIDIA GTC (Robotics)", category: "events", sub: "Developer Conference", url: "https://www.nvidia.com/gtc/", country: "us", description: "NVIDIA's massive AI conference featuring extensive sessions and announcements on AI simulation and robotic edge computing.", businessArea: "AI Developer Conference", models: [] },
    { id: 10013, title: "The Logistics World (Mexico)", category: "events", sub: "Logistics & Supply Chain", url: "https://thelogisticsworld.com/expo/", country: "mx", description: "Latin America's largest logistics event, increasingly featuring automated material handling and supply chain robotics.", businessArea: "Logistics Exhibition", models: [] },
    { id: 10014, title: "Modex Show", category: "events", sub: "Supply Chain Solutions", url: "https://www.modexshow.com/", country: "us", description: "A massive North American supply chain expo heavily dedicated to showcasing the latest warehouse automation and AMR technologies.", businessArea: "Supply Chain Exhibition", models: [] },
    { id: 10015, title: "Automate Show", category: "events", source: "A3", url: "https://www.automateshow.com/", country: "us", description: "The largest solutions-based showcase of automation, robotics, vision, and motion control in North America.", businessArea: "Automation Exhibition", models: [] },

    // Organization 
    { id: 20001, title: "IFR<br>(International Federation of Robotics)", category: "organization", source: "IFR", url: "https://ifr.org/", country: "de", description: "The authoritative global organization representing the robotics industry, publishing crucial market data and statistical reports.", businessArea: "Global Industry Representation", models: [] }, 
    { id: 20003, title: "Silicon Valley Robotics", category: "organization", source: "SVR", url: "https://www.svrobo.org/", country: "us", description: "A non-profit coalition supporting the innovation and commercialization of robotics startups within the Silicon Valley ecosystem.", businessArea: "Startup Innovation Hub", models: [] },
    { id: 20002, title: "IEEE ICRA<br>(Robotics & Automation Society)", category: "organization", source: "IEEE", url: "https://www.ieee-ras.org/", country: "us", description: "A professional society fostering the development and exchange of scientific knowledge in robotics and automation globally.", businessArea: "Professional Engineering Society", models: [] }, 
    { id: 20004, title: "ISO TC 299 (Robotics)", category: "organization", source: "ISO", url: "https://committee.iso.org/home/tc299", country: "ch", description: "The international technical committee responsible for standardizing the safety and performance of both industrial and service robots.", businessArea: "International Standardization", models: [] },
    { id: 20005, title: "KIRIA (Robot Industry Promotion)", category: "organization", sub: "Gov Agency", url: "https://www.kiria.org/", country: "kr", description: "A South Korean government agency dedicated to formulating policies and supporting the rapid growth of the domestic robot industry.", businessArea: "Government Promotion Agency", models: [] },
    { id: 20006, title: "KAR (Korea Robot Industry Association)", category: "organization", sub: "Trade Association", url: "http://www.korearobot.or.kr/", country: "kr", description: "The primary trade association representing and advocating for the interests of South Korean robotics manufacturers and researchers.", businessArea: "National Trade Association", models: [] },
    { id: 20007, title: "A3<br>(Advancing Automation)", category: "organization", sub: "North America Trade", url: "https://www.automate.org/", country: "us", description: "North America's broadest trade association representing organizations involved in robotics, machine vision, and motion control.", businessArea: "Automation Trade Association", models: [] },
    { id: 20008, title: "JARA (Japan Robot Association)", category: "organization", sub: "Japan Industry Body", url: "https://www.jara.jp/english/", country: "jp", description: "Promoting the research, development, and widespread adoption of industrial and service robots within Japan's highly automated economy.", businessArea: "National Trade Association", models: [] },
    { id: 20009, title: "VDMA Robotics + Automation", category: "organization", sub: "European Standards", url: "https://www.vdma.org/robotics-automation", country: "de", description: "A major European engineering association driving standardizations like OPC UA and promoting the German automation industry.", businessArea: "European Engineering Association", models: [] },
    { id: 20010, title: "TAIROA (Taiwan Robot Association)", category: "organization", sub: "Automation", url: "https://www.tairoa.org.tw/", country: "tw", description: "Advancing Taiwan's transition into intelligent manufacturing by supporting local robotics, automation, and AI enterprises.", businessArea: "National Trade Association", models: [] },
    { id: 20012, title: "MassRobotics<br>(Startup Incubator)", category: "organization", sub: "Innovation Hub", url: "https://www.massrobotics.org/", country: "us", description: "An independent robotics hub providing shared workspace, testing facilities, and resources to accelerate robotics startups in Boston.", businessArea: "Robotics Incubator & Hub", models: [] },
    { id: 20022, title: "BARA (British Automation & Robot)", category: "organization", sub: "UK Industry Body", url: "https://www.bara.org.uk/", country: "gb", description: "Providing a voice for the UK robotics sector and helping British manufacturing industries implement automation successfully.", businessArea: "National Trade Association", models: [] },
    { id: 20023, title: "SIRI (Italian Association of Robotics)", category: "organization", sub: "Italy Association", url: "https://www.ss-siri.it/", country: "it", description: "Promoting Italian excellence in industrial robotics, automation research, and facilitating collaboration between academia and industry.", businessArea: "National Trade Association", models: [] },
    { id: 20011, title: "CMRA<br>(China Mobile Robot Alliance)", category: "organization", source: "AGV/AMR Hub", url: "https://cnmra.com/", country: "cn", description: "The central industry alliance in China focused on standardizing, promoting, and connecting the rapidly growing AGV and AMR sectors.", businessArea: "Mobile Robotics Alliance", models: [] },
   
    //Educational
    { id: 50001, title: "UNESCO STEM Education", category: "Educational", source: "UNESCO", url: "https://www.unesco.org/en/stem", country: "un", description: "A global UN initiative promoting equitable access to science, technology, engineering, and mathematics education worldwide.", businessArea: "Global STEM Initiatives", models: [] },
    { id: 50002, title: "ISTE (EdTech Standards)", category: "Educational", source: "ISTE", url: "https://www.iste.org/", country: "us", description: "Providing globally recognized standards for learning, teaching, and leading with technology in education.", businessArea: "Educational Tech Standards", models: [] },
    { id: 50101, title: "FIRST Robotics (K-12)", category: "Educational", source: "FIRST", url: "https://www.firstinspires.org/", country: "us", description: "A widely celebrated global youth organization inspiring students in engineering and technology through team-based robot competitions.", businessArea: "Youth Robotics Competitions", models: [] },
    { id: 50102, title: "Code.org (Computer Science)", category: "Educational", source: "Code.org", url: "https://code.org/", country: "us", description: "A non-profit dedicated to expanding access to computer science in schools and increasing participation by young women and students from underrepresented groups.", businessArea: "Computer Science Advocacy", models: [] },
    { id: 50103, title: "Khan Academy (STEM Courses)", category: "Educational", source: "Khan Academy", url: "https://www.khanacademy.org/", country: "us", description: "Offering free, world-class online educational content, including extensive courses on mathematics, physics, and basic coding.", businessArea: "Online Educational Content", models: [] },
    { id: 50104, title: "Girls Who Code", category: "Educational", source: "Non-profit", url: "https://girlswhocode.com/", country: "us", description: "An international non-profit organization aiming to support and increase the number of women in computer science and engineering.", businessArea: "Diversity in STEM", models: [] },
    { id: 50105, title: "Scratch Foundation", category: "Educational", source: "MIT Media Lab", url: "https://scratch.mit.edu/", country: "us", description: "Maintaining the world's largest free coding community for kids, allowing them to program interactive stories, games, and animations.", businessArea: "Visual Block Coding", models: [] },
    { id: 50106, title: "MIND Research Institute", category: "Educational", source: "ST Math", url: "https://www.mindresearch.org/", country: "us", description: "A neuroscience and education organization utilizing visual instructional software to fundamentally improve math learning.", businessArea: "Visual Math Education", models: [] },
    { id: 50201, title: "NASA STEM Engagement", category: "Educational", source: "NASA", url: "https://www.nasa.gov/learning-resources/", country: "us", description: "Leveraging NASA's space exploration missions to inspire and educate students through unique STEM resources and challenges.", businessArea: "Space & Aerospace Education", models: [] },
    { id: 50202, title: "NSF STEM Education (EDU)", category: "Educational", source: "NSF", url: "https://new.nsf.gov/edu", country: "us", description: "Funding and directing national efforts to improve STEM education at all levels, from pre-K through graduate and lifelong learning.", businessArea: "STEM Research & Funding", models: [] },
    { id: 50203, title: "Smithsonian Science Center", category: "Educational", source: "Smithsonian", url: "https://ssec.si.edu/", country: "us", description: "Transforming K-12 education through science in collaboration with communities globally, providing inquiry-based science programs.", businessArea: "Science Education Resources", models: [] },
    { id: 50301, title: "Project Lead The Way (PLTW)", category: "Educational", source: "STEM Curriculum", url: "https://www.pltw.org/", country: "us", description: "Providing transformative, hands-on learning experiences in computer science, engineering, and biomedical science for PreK-12 students.", businessArea: "Applied STEM Curriculum", models: [] },
    { id: 50302, title: "STEM.org<br>(Global Accreditation)", category: "Educational", source: "Research Org", url: "https://stem.org/", country: "us", description: "The longest continually operating, privately held STEM education research and credentialing organization in America.", businessArea: "STEM Certification", models: [] },
    { id: 1341, title: "Sphero<br>(Coding & STEM Robots)", category: "Educational", source: "Sphero", url: "https://sphero.com/", country: "us", description: "Creating programmable, spherical robots and comprehensive STEM-based educational tools designed to make learning code fun.", businessArea: "Educational Coding Robots", models: ["Sphero BOLT", "indi"] },
    { id: 50110, title: "Comau e.DO<br>(Educational Arm)", category: "Educational", source: "Comau", url: "https://edo.cloud/", country: "it", description: "An open-source, flexible, and interactive robotic arm created to explore the worlds of robotics, coding, and STEM directly in the classroom.", businessArea: "Open Source Educational Robots", models: ["e.DO Robot"] }
];