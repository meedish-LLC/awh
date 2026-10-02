export const siteData = {
  firm: {
    name: "AWH Architects",
    tagline: "Where place meets purpose",
    shortBio: "AWH is a mission-driven architectural design and planning firm specializing in community-centered spaces, affordable & multifamily housing, commercial, historic preservation, and sustainable design.",
    phone: "(612) 338-2020",
    email: "info@awharchitects.com",
    address: "212 3rd Avenue North, Suite 410, Minneapolis, MN 55401",
    credentials: [
      { code: "AIA", title: "American Institute of Architects" },
      { code: "LEED AP", title: "LEED Accredited Professional" },
      { code: "CPHC®", title: "Certified Passive House Consultant" },
      { code: "NCARB", title: "National Council of Architectural Registration Boards" },
      { code: "SHPO", title: "Historic Preservation Qualified" }
    ],
    values: [
      {
        title: "Community-Centered Impact",
        description: "Architecture must serve the people who inhabit it. We listen deeply to community stakeholders to design spaces of equity, dignity, and civic pride."
      },
      {
        title: "Ecological Stewardship & Passive House",
        description: "We lead in ultra-low energy, climate-resilient architecture, utilizing Passive House principles and carbon-conscious materials to ensure enduring performance."
      },
      {
        title: "Historic Reverence & Adaptive Rebirth",
        description: "Old buildings tell essential human stories. We specialize in adaptive reuse that celebrates historic character while revitalizing economic viability."
      },
      {
        title: "Technical Rigor & Pragmatic Delivery",
        description: "Visionary design succeeds only when backed by meticulous technical documentation, code expertise, zoning mastery, and budget stewardship."
      }
    ]
  },

  markets: [
    {
      id: "community",
      slug: "community",
      title: "Community & Civic",
      shortTitle: "Community",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
      description: "Gathering spaces, cultural centers, and public facilities that strengthen civic bonds and celebrate local identity.",
      audience: "Municipalities, community development corporations, civic foundations, and public agencies.",
      deliverables: ["Community Engagement Charettes", "Civic Master Planning", "Universal Accessibility Design", "Cultural Gathering Halls"],
      featuredQuote: "AWH translated our neighborhood's disparate voices into a cohesive, inspiring community anchor that opened on budget."
    },
    {
      id: "nonprofits",
      slug: "nonprofits",
      title: "Nonprofits & Mission-Driven",
      shortTitle: "Nonprofits",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80",
      description: "High-value, cost-effective spaces designed to maximize our clients' missions and philanthropic investments.",
      audience: "Social service agencies, arts collectives, foundations, educational non-profits, and youth organizations.",
      deliverables: ["Capital Campaign Imagery & Feasibility", "Phased Master Planning", "Trauma-Informed Design", "Optimized Operational Layouts"],
      featuredQuote: "Every square foot of our new headquarters works hard for our mission, thanks to AWH's intentional planning."
    },
    {
      id: "multifamily",
      slug: "multifamily",
      title: "Multi-Family Housing",
      shortTitle: "Multifamily",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      description: "Affordable, workforce, and mixed-income housing developed with dignified amenities, durability, and low utility overhead.",
      audience: "Affordable housing developers, CDCs, public housing authorities, and private multifamily sponsors.",
      deliverables: ["LIHTC Compliance Coordination", "Unit Density Optimization", "Acoustic & Thermal Comfort Design", "Inclusive Common Amenities"],
      featuredQuote: "AWH delivered 84 units of high-performance affordable housing that looks and feels like market-rate luxury."
    },
    {
      id: "commercial",
      slug: "commercial",
      title: "Commercial & Mixed-Use",
      shortTitle: "Commercial",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      description: "Dynamic streetfronts, retail hubs, and commercial spaces engineered for foot traffic, brand identity, and commercial vitality.",
      audience: "Property owners, retail operators, developers, and hospitality entrepreneurs.",
      deliverables: ["Facade Renovations", "Mixed-Use Zoning Entitlements", "Tenant Improvement Guidelines", "Storefront Activation"],
      featuredQuote: "The storefront design transformed our corner presence and increased tenant leasing velocity by 40%."
    },
    {
      id: "interiors",
      slug: "interiors",
      title: "Interiors & Workplace",
      shortTitle: "Interiors",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      description: "Human-centered workplace interiors, wellness-focused layouts, and hospitality spaces with sensory warmth.",
      audience: "Corporate tenants, creative agencies, medical wellness providers, and co-working operators.",
      deliverables: ["Space Planning & Programming", "Custom Architectural Millwork", "Acoustic & Biophilic Integration", "FF&E Selection"],
      featuredQuote: "Our team loves coming into the office. The acoustic balance and natural light make all the difference."
    },
    {
      id: "residential",
      slug: "residential",
      title: "Custom Residential",
      shortTitle: "Residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      description: "Site-specific custom homes and high-performance residences tailored to modern living and natural surroundings.",
      audience: "Private homeowners, estate stewards, and design-forward residential clients.",
      deliverables: ["Net-Zero Energy Strategy", "Custom Architectural Details", "Site & Microclimate Integration", "High-Performance Envelopes"],
      featuredQuote: "AWH crafted a home that feels naturally embedded into the landscape and uses 75% less energy than standard code."
    },
    {
      id: "adaptive-reuse",
      slug: "adaptive-reuse",
      title: "Adaptive Reuse & Revitalization",
      shortTitle: "Adaptive Reuse",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      description: "Reimagining legacy industrial, warehouse, and institutional properties into contemporary, thriving destinations.",
      audience: "Developers, civic trusts, institutional property owners, and urban revitalization funds.",
      deliverables: ["Existing Conditions Assessment", "Code Equivalency Strategies", "Structural Retrofit Integration", "Embodied Carbon Preservation"],
      featuredQuote: "They saw possibilities in a derelict 1910 freight depot where others only saw demolition costs."
    },
    {
      id: "historic",
      slug: "historic",
      title: "Historic Preservation",
      shortTitle: "Historic",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
      description: "Rigorous historical preservation, National Register nominations, and Secretary of the Interior compliance.",
      audience: "Historic district commissions, tax credit investors, educational institutions, and heritage organizations.",
      deliverables: ["Historic Structures Reports (HSR)", "Federal & State Tax Credit Filings", "Masonry & Envelope Restoration", "SHPO Liaison Services"],
      featuredQuote: "AWH's deep knowledge of historic tax credits secured over $3.2M in equity for our rehabilitation project."
    }
  ],

  services: [
    {
      id: "architecture",
      slug: "architecture",
      title: "Architecture",
      tagline: "Comprehensive architectural design from concept to completion.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      description: "Our core architectural practice merges timeless aesthetics with advanced building science. We guide projects from initial feasibility sketches through schematic design, zoning approvals, construction documentation, and rigorous on-site administration.",
      deliverables: [
        "Schematic Design & 3D Visualization",
        "Construction Documents & Technical Specifications",
        "Zoning Variances & Permitting Expediting",
        "Bidding, Negotiation & Contractor Selection",
        "Construction Administration & Field Review"
      ],
      methodology: "We treat architecture as an iterative dialogue. Early design options are tested through digital massing models, daylight studies, and energy benchmarking before committing to structural and mechanical systems."
    },
    {
      id: "historic-consulting",
      slug: "historic-consulting",
      title: "Historic Consulting",
      tagline: "Unlocking value in legacy architecture while preserving cultural memory.",
      image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=1200&q=80",
      description: "We are recognized specialists in navigating municipal, state, and federal historic preservation regulations. Our team prepares National Register nominations, conducts historic fabric condition assessments, and secures federal and state Historic Tax Credits (HTC) that bridge critical funding gaps.",
      deliverables: [
        "Federal & State Historic Tax Credit (Parts 1, 2, 3)",
        "National Register of Historic Places Nominations",
        "Historic Structure Reports (HSR)",
        "Secretary of the Interior's Standards Compliance",
        "Historic Masonry & Fenestration Restoration Plans"
      ],
      methodology: "We combine deep archival research with forensic physical inspection to establish what makes a structure historically significant, ensuring seamless approval from State Historic Preservation Offices (SHPO) and the National Park Service."
    },
    {
      id: "planning",
      slug: "planning",
      title: "Planning & Pre-Development",
      tagline: "De-risking capital investments through strategic site and financial analysis.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      description: "Before laying a single brick, developers and institutions need clarity on yield, zoning restrictions, environmental constraints, and pro forma feasibility. AWH delivers comprehensive pre-development studies that empower informed go/no-go decisions.",
      deliverables: [
        "Site Capacity & Massing Studies",
        "Zoning, Code & Entitlement Roadmaps",
        "Pro Forma Alignment & Cost Projections",
        "Neighborhood & Stakeholder Engagement",
        "Phased Implementation Master Plans"
      ],
      methodology: "We synthesize municipal master plans, market demands, and physical topography to uncover hidden development capacity and streamline municipal approvals."
    },
    {
      id: "passive-house",
      slug: "passive-house",
      title: "Passive House Consulting",
      tagline: "Designing high-performance buildings that slash operational carbon by up to 80%.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      description: "Certified Passive House Consultant (CPHC®) services providing rigorous building envelope design, thermal bridge mitigation, continuous air barrier detailing, and WUFI energy modeling for residential, commercial, and institutional projects.",
      deliverables: [
        "WUFI® Passive Energy Modeling",
        "Thermal Bridge & Hygrothermal Analysis",
        "High-Performance Envelope & Fenestration Detailing",
        "Balanced Heat/Energy Recovery Ventilation (HRV/ERV)",
        "PHIUS / Passive House Institute Certification Management"
      ],
      methodology: "Passive House focuses on the building envelope first—super-insulation, airtight construction, and high-efficiency heat recovery—delivering unmatched occupant comfort, acoustic silence, and resilience against energy cost spikes."
    },
    {
      id: "cannabis",
      slug: "cannabis",
      title: "Cannabis Facility Design",
      tagline: "Highly specialized architectural and MEP coordination for licensed craft and commercial facilities.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80",
      description: "Cannabis cultivation, processing, and dispensary spaces require precision engineering, biosecurity controls, heavy MEP coordination, and compliance with stringent local and state licensing mandates.",
      deliverables: [
        "Cultivation Canopy Optimization & Benching Layouts",
        "Cleanroom & Extraction Lab Architectural Detailing",
        "Odor Mitigation Plans & Municipal Land Use Approvals",
        "Security, Vault & Seed-to-Sale Workflow Mapping",
        "Dispensary Retail Experience & Branding"
      ],
      methodology: "We engineer facilities that maximize yield per square foot while guaranteeing regulatory compliance, strict microclimate stability, and pest-resistant cleanroom envelopes."
    }
  ],

  projects: [
    {
      id: "p1",
      slug: "centro-highland-retail",
      title: "Centro Highland Retail",
      category: "commercial",
      market: "Commercial",
      services: ["Architecture", "Planning & Pre-Development"],
      location: "Saint Paul, MN",
      year: "2024",
      size: "14,500 SF",
      summary: "Modern corner storefront and mixed commercial space with activated pedestrian streetfront.",
      challenge: "An outdated mid-century retail strip with poor visibility, disjointed access, and failing mechanical systems needed to be transformed into a vibrant neighborhood anchor while maintaining operations for two existing legacy tenants during construction.",
      role: "AWH led full architectural design, neighborhood variance approvals, facade redesign, structural opening modifications, and tenant improvement design standards.",
      outcome: "The renovated center leased at 100% occupancy prior to grand reopening, received a local urban design commendation, and increased foot traffic for surrounding businesses by 35%.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
      ],
      highlight: "100% Leased Prior to Reopening"
    },
    {
      id: "p2",
      slug: "heritage-mills-lofts",
      title: "Heritage Mills Lofts",
      category: "adaptive-reuse",
      market: "Adaptive Reuse",
      services: ["Architecture", "Historic Consulting"],
      location: "Minneapolis, MN",
      year: "2023",
      size: "62,000 SF",
      summary: "Conversion of a 1912 grain milling warehouse into 48 affordable artist lofts and community galleries.",
      challenge: "Heavy timber and unreinforced masonry structure with environmental abatement requirements, severe water intrusion, and stringent State Historic Preservation Office (SHPO) criteria for window and timber preservation.",
      role: "Served as Architect of Record and Historic Tax Credit Consultant; authored the Part 2 and Part 3 NPS HTC applications; detailed seismic and thermal upgrades without altering the original brick facade.",
      outcome: "Secured $3.8M in combined federal and state historic tax credits; preserved 100% of historic timber trusses; achieved National Register listing and provided permanent affordable live-work housing for 48 artists.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=1200&q=80"
      ],
      highlight: "Winner of 2023 State Historic Preservation Award"
    },
    {
      id: "p3",
      slug: "oak-ridge-community-center",
      title: "Oak Ridge Community Center",
      category: "community",
      market: "Community & Civic",
      services: ["Architecture", "Passive House Consulting"],
      location: "Duluth, MN",
      year: "2024",
      size: "22,000 SF",
      summary: "Net-zero ready civic center with public library branch, gymnasium, and multipurpose cultural spaces.",
      challenge: "Harsh climate zone 7 conditions with tight municipal budget requiring minimal operational utility costs for the next 50 years, along with extensive public engagement across multiple diverse community factions.",
      role: "Comprehensive architectural design, facilitated 6 community stakeholder workshops, executed WUFI Passive energy modeling, and designed super-insulated airtight building envelope.",
      outcome: "Achieved PHIUS+ Source Zero certification; heating demand reduced by 78% compared to baseline building code; serves over 1,200 neighborhood residents weekly.",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
      ],
      highlight: "PHIUS+ Source Zero Certified"
    },
    {
      id: "p4",
      slug: "avenue-station-apartments",
      title: "Avenue Station Apartments",
      category: "multifamily",
      market: "Multi-Family Housing",
      services: ["Architecture", "Planning & Pre-Development"],
      location: "St. Paul, MN",
      year: "2023",
      size: "98,000 SF",
      summary: "86-unit transit-oriented affordable and workforce housing community along the Green Line light rail.",
      challenge: "Constrained urban infill lot adjacent to light rail right-of-way requiring strict acoustic attenuation, high density unit mix under LIHTC financing formulas, and ground floor community retail.",
      role: "Led zoning rezoning and site plan approvals, full architectural and structural coordination, acoustic wall detailing, and amenity space interior architecture.",
      outcome: "Delivered 3 months ahead of schedule; certified Enterprise Green Communities; 100% occupied with a 400-person waiting list upon opening.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
      ],
      highlight: "Enterprise Green Communities Certified"
    },
    {
      id: "p5",
      slug: "summit-hill-passive-residence",
      title: "Summit Hill Passive Residence",
      category: "residential",
      market: "Custom Residential",
      services: ["Architecture", "Passive House Consulting"],
      location: "Afton, MN",
      year: "2024",
      size: "4,200 SF",
      summary: "A contemporary high-performance residence nestled into a wooded bluff, engineered for net-positive energy.",
      challenge: "Steep topography and sensitive tree canopy preservation required minimal ground disruption while meeting rigorous Passive House air tightness (0.4 ACH50) and expansive south-facing panoramic glazing.",
      role: "Custom residential architectural design, energy modeling, prefabricated panelized wall system detailing, and custom interior millwork design.",
      outcome: "Blower door test achieved 0.38 ACH50; rooftop solar generates 115% of annual electrical needs, exporting clean power back to the local grid.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
      ],
      highlight: "Net-Positive Energy Performance"
    },
    {
      id: "p6",
      slug: "green-craft-cultivation-lab",
      title: "North Star Craft Cultivation Facility",
      category: "cannabis",
      market: "Commercial",
      services: ["Cannabis Facility Design", "Architecture"],
      location: "St. Cloud, MN",
      year: "2024",
      size: "28,000 SF",
      summary: "Tier-1 licensed craft cannabis cultivation, extraction lab, and packaging cleanroom facility.",
      challenge: "Stringent state regulatory licensing deadlines, high electrical heat loads from LED arrays, strict humidity tolerances (VPD), and stringent odor mitigation requirements next to commercial neighbors.",
      role: "Complete architectural facility layout, multi-tier racking envelope coordination, Class 1 Div 1 extraction lab classification, and municipal conditional use permit presentation.",
      outcome: "Approved unanimously by city council; achieved full state operational licensing in record 90-day review period; engineered zero odor emission footprint.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80"
      ],
      highlight: "Unanimous City Council Approval"
    },
    {
      id: "p7",
      slug: "civic-hall-historic-restoration",
      title: "State Municipal Civic Hall",
      category: "historic",
      market: "Historic Preservation",
      services: ["Historic Consulting", "Architecture"],
      location: "Red Wing, MN",
      year: "2023",
      size: "34,000 SF",
      summary: "Forensic restoration and modern life-safety modernization of an 1898 Classical Revival civic landmark.",
      challenge: "Severe deterioration of limestone portico columns, non-compliant ADA access, obsolete boiler heating, and strict preservation easement covenants held by the state historical society.",
      role: "Historic structures report, stone conservation specifications, concealed elevator insertion, and mechanical modernization with zero visible ductwork in public rotunda.",
      outcome: "Preserved original historic fabric; introduced discrete universal accessibility; received Governor's Award for Historic Preservation.",
      image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=1200&q=80"
      ],
      highlight: "Governor's Preservation Commendation"
    },
    {
      id: "p8",
      slug: "apex-nonprofit-hq",
      title: "Apex Community Services HQ",
      category: "nonprofits",
      market: "Nonprofits & Mission-Driven",
      services: ["Architecture", "Interiors & Workplace"],
      location: "Minneapolis, MN",
      year: "2024",
      size: "18,000 SF",
      summary: "Trauma-informed headquarters featuring counseling suites, youth programming, and administrative offices.",
      challenge: "A limited budget required creative resource allocation, while the client's clients required spaces that conveyed psychological safety, warmth, natural light, and dignity.",
      role: "Led programming workshops with counselors and clients; designed intuitive wayfinding, biophilic interior materials, acoustic privacy partitions, and daylight-rich common areas.",
      outcome: "Delivered at $195/SF (20% below regional commercial benchmark); increased client retention and staff satisfaction scores across all departments.",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80"
      ],
      highlight: "Delivered 20% Below Regional Benchmark"
    }
  ],

  team: [
    {
      name: "Alan W. Hendrickson",
      credentials: "AIA, NCARB",
      role: "Founding Principal",
      bio: "With over 30 years leading complex civic, multifamily, and adaptive reuse projects, Alan grounds AWH's design philosophy in community value, structural clarity, and lasting civic craft.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mara Lindqvist",
      credentials: "AIA, CPHC®",
      role: "Principal & Sustainable Design Director",
      bio: "A certified Passive House consultant and climate advocate, Mara directs AWH's building science initiatives, focusing on operational decarbonization and healthy indoor air quality.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Marcus Vance",
      credentials: "RA, LEED AP BD+C",
      role: "Associate Principal & Historic Preservation Lead",
      bio: "Marcus specializes in historic preservation tax credit equity, forensic building analysis, and transforming industrial landmarks into dynamic neighborhood assets.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Elena Rostova",
      credentials: "NCIDQ, WELL AP",
      role: "Director of Interior Architecture",
      bio: "Elena crafts human-centered interior environments that harmonize tactile materials, biophilia, and acoustic balance for workplaces, non-profits, and multifamily communities.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    }
  ],

  resources: {
    guides: [
      {
        id: "g1",
        title: "The Developer's Guide to Federal & State Historic Tax Credits",
        category: "Historic Preservation",
        readTime: "12 min read",
        summary: "A practical roadmap for developers and non-profits seeking 20% federal and matching state tax equity for rehabilitation projects.",
        downloadable: true,
        topics: ["HTC Part 1, 2, 3 Process", "Substantial Rehabilitation Test", "Qualified Rehabilitation Expenses (QRE)", "Common SHPO Pitfalls"]
      },
      {
        id: "g2",
        title: "Passive House Economics: First Costs vs. 30-Year Operational Yield",
        category: "Sustainability",
        readTime: "15 min read",
        summary: "How ultra-low energy building standards reduce mechanical plant sizing, protect against volatility, and accelerate long-term NOI.",
        downloadable: true,
        topics: ["Envelope vs HVAC Cost Tradeoffs", "PHIUS Modeling Workflow", "Utility Bill Reductions", "Resilience & Risk Mitigation"]
      },
      {
        id: "g3",
        title: "Cannabis Cultivation & Processing Facility Architectural Playbook",
        category: "Facility Design",
        readTime: "18 min read",
        summary: "Essential zoning, biosecurity, MEP coordination, and municipal permitting considerations for commercial craft operators.",
        downloadable: true,
        topics: ["Microclimate & VPD Control", "Odor Mitigation Engineering", "Cleanroom Washdown Standards", "Security & Vault Compliance"]
      }
    ],

    articles: [
      {
        id: "a1",
        title: "Where Place Meets Purpose: Designing for Community Resilience in 2026",
        date: "October 2025",
        author: "Alan Hendrickson, AIA",
        category: "Thought Leadership",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
        snippet: "Why community anchor institutions require more than aesthetic polish: they require participatory design, durable materiality, and spatial flexibility."
      },
      {
        id: "a2",
        title: "Embodied Carbon & Adaptive Reuse: The Greenest Building is Already Built",
        date: "August 2025",
        author: "Marcus Vance, RA",
        category: "Historic Preservation",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
        snippet: "Preserving existing concrete, brick, and heavy timber avoids the upfront carbon emissions of demolition and new manufacture."
      },
      {
        id: "a3",
        title: "Crafting High-Performance Multifamily Envelopes Without Budget Blowouts",
        date: "July 2025",
        author: "Mara Lindqvist, AIA, CPHC®",
        category: "Building Science",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
        snippet: "Proven envelope details that simplify air barrier continuity, minimize thermal bridging, and pass blower door tests on the first try."
      }
    ],

    faqs: [
      {
        question: "When should we engage AWH during our project lifecycle?",
        answer: "The earlier we join the process, the more value we can unlock. Engaging us during pre-development allows us to assess zoning capacity, identify historic tax credit eligibility, and run preliminary massing studies that de-risk your capital decisions before you commit to property purchase or major financing."
      },
      {
        question: "How does AWH handle municipal approvals and zoning variances?",
        answer: "We have an extensive track record presenting before city councils, planning commissions, and heritage preservation boards. We prepare clear 3D visualizations, shadow and traffic impact diagrams, and sound code rationale that build consensus and expedite approvals."
      },
      {
        question: "Does building to Passive House standards significantly increase construction cost?",
        answer: "With experienced integrated design, the upfront premium for Passive House is typically between 2% and 5%. This modest initial cost is quickly offset by drastically downsized mechanical heating and cooling equipment and up to 80% lower monthly operational energy bills."
      },
      {
        question: "How do you coordinate with general contractors and consultants?",
        answer: "We advocate for collaborative project delivery. We engage key trade partners early for constructability reviews, coordinate BIM and MEP models in 3D to eliminate field clashes, and maintain rigorous, hands-on construction administration through weekly site observations."
      },
      {
        question: "What is your experience with Historic Tax Credits (HTC)?",
        answer: "We have guided dozens of historic properties through the 3-part National Park Service / SHPO review process, securing millions of dollars in 20% federal credits and state matching equity while designing adaptive solutions that honor historic integrity."
      }
    ]
  },

  testimonials: [
    {
      quote: "Their guidance on our project was invaluable, combining design excellence with real community impact. They helped us navigate complex zoning and delivered a building our neighborhood is proud of.",
      author: "Dorothy Chapman",
      role: "Executive Director, Urban Community Alliance"
    },
    {
      quote: "AWH's deep mastery of Historic Tax Credits was the linchpin that made our 62,000 SF mill conversion financially viable. Their technical documentation sailed through SHPO approval.",
      author: "Robert Chen",
      role: "Managing Principal, Red River Development Group"
    },
    {
      quote: "Working with Mara and the AWH team on our Passive House community proved that high-performance architecture doesn't have to be complicated or cost-prohibitive.",
      author: "Sarah Lindau",
      role: "Vice President of Housing Development, Beacon Communities"
    }
  ]
};
