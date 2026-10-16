export const siteData = {
  firm: {
    name: "AWH Architects",
    tagline: "Where place meets purpose",
    foundedYear: 2011,
    shortBio: "AWH Architects was founded on the principles of reuse and has grown into a practice of intentions. We advocate for social, economic, and environmental justice in every project through an unconventionally responsible approach to design.",
    phone: "(612) 558-5383",
    email: "alex@awharchitects.com",
    contactEmail: "info@awharchitects.com",
    address: "2409 Hennepin Avenue, 2nd Floor, Minneapolis, MN 55405",
    credentials: [
      { code: "AIA", title: "American Institute of Architects" },
      { code: "NCARB", title: "National Council of Architectural Registration Boards" },
      { code: "Phius", title: "Phius Certified Passive House / Phius Alliance" },
      { code: "LEED AP", title: "LEED Accredited Professional" },
      { code: "MWS", title: "Master Water Steward" },
      { code: "SHPO", title: "Minneapolis Heritage Preservation Qualified" }
    ],
    // The authentic 5 Core Values extracted from live site
    values: [
      {
        number: "01",
        title: "Pragmatism",
        subtitle: "Practical, Client-Focused Solutions",
        description: "At AWH, pragmatism means prioritizing practical, client-focused solutions that balance function, efficiency, and flexibility. We embrace diverse perspectives to achieve sustainable and economic justice."
      },
      {
        number: "02",
        title: "Reuse",
        subtitle: "Preserving Cultural Memory & Embodied Carbon",
        description: "Founded on the principle of reusing what we have, AWH pursues adaptive reuse and historic building rehabilitation as a way to combat unnecessary loss of cultural heritage and carbon resources."
      },
      {
        number: "03",
        title: "Energy",
        subtitle: "Passive House & High-Performance Design",
        description: "With every project, we assess the best way to integrate onsite energy production, utilize passive solar design, and harmonize the building envelope with site microclimates to slash carbon by up to 80%."
      },
      {
        number: "04",
        title: "Water",
        subtitle: "Stewardship & Stormwater Mitigation",
        description: "Water is a precious resource and is life. With in-house Master Water Steward expertise, we promote water capture, rainwater harvesting, efficient fixture strategies, and regenerative stormwater design."
      },
      {
        number: "05",
        title: "Social Equity",
        subtitle: "Justice, Access & Community Empowerment",
        description: "Now is the time to challenge architecture’s complicity with oppression, and realign our efforts to prioritize justice, accessibility, and equality through human-centered, inclusive design."
      }
    ]
  },

  // 8 Target Market Sectors from Proposed Architecture
  markets: [
    {
      id: "community",
      slug: "community",
      title: "Community & Civic",
      shortTitle: "Community",
      image: "https://static.wixstatic.com/media/14cfd9_41884aab8f964db09b7381541af5d3c7~mv2.jpg",
      description: "Gathering spaces, civic hubs, and public facilities that strengthen civic bonds and celebrate local identity.",
      audience: "Municipalities, community development corporations, civic foundations, and public agencies.",
      deliverables: ["Community Engagement Charettes", "Civic Master Planning", "Universal Accessibility Design", "Cultural Gathering Spaces"],
      featuredQuote: "AWH translates neighborhood voices into cohesive, inspiring community anchors that deliver lasting public value."
    },
    {
      id: "nonprofits",
      slug: "nonprofits",
      title: "Nonprofits & Mission-Driven",
      shortTitle: "Nonprofits",
      image: "https://static.wixstatic.com/media/14cfd9_33d6b046a8dc42f3a38a74e304724a73~mv2.jpg",
      description: "Trauma-informed, mission-driven spaces designed to maximize our clients' social impact and philanthropic investments.",
      audience: "Social service agencies, supportive housing providers, youth organizations, and arts non-profits.",
      deliverables: ["Low-Barrier Supportive Housing Layouts", "Trauma-Informed Design", "Capital Campaign Feasibility", "Operational Space Optimization"],
      featuredQuote: "Every square foot of Avivo Village was designed with dignity, warmth, and trauma-informed safety in mind."
    },
    {
      id: "multifamily",
      slug: "multifamily",
      title: "Multi-Family Housing",
      shortTitle: "Multifamily",
      image: "https://static.wixstatic.com/media/14cfd9_c0ebfae9d40b49cbaf3528b6d859b85c~mv2.jpg",
      description: "Affordable, workforce, and missing-middle housing developed with durable materials, high efficiency, and dignity.",
      audience: "Affordable housing developers, CDCs, public housing authorities, and multifamily sponsors.",
      deliverables: ["Missing-Middle & Infill Density Optimization", "Acoustic & Thermal Comfort Detailing", "Code & Entitlement Navigation", "Inclusive Common Amenities"],
      featuredQuote: "AWH delivered high-performance residential architecture that looks and feels dignified while exceeding energy codes."
    },
    {
      id: "commercial",
      slug: "commercial",
      title: "Commercial & Mixed-Use",
      shortTitle: "Commercial",
      image: "https://static.wixstatic.com/media/14cfd9_7eb48c41460544528c12a4dfb0ad4b4e~mv2.jpg",
      description: "Dynamic streetfronts, retail destinations, and creative commercial spaces engineered for foot traffic and vitality.",
      audience: "Property owners, retail operators, developers, and hospitality entrepreneurs.",
      deliverables: ["Storefront Activation & Facades", "Mixed-Use Zoning Entitlements", "Tenant Improvement Guidelines", "Code Compliance Expediting"],
      featuredQuote: "The Centro Highland design transformed our corner presence into a bustling neighborhood destination."
    },
    {
      id: "interiors",
      slug: "interiors",
      title: "Interiors & Workplace",
      shortTitle: "Interiors",
      image: "https://static.wixstatic.com/media/14cfd9_8fcb7c4d52894541bf06a19f96b2be0d~mv2.jpg",
      description: "Human-centered workplace interiors, wellness-focused layouts, and hospitality spaces with sensory warmth.",
      audience: "Corporate tenants, creative agencies, medical wellness providers, and co-working operators.",
      deliverables: ["Space Planning & Programming", "Custom Architectural Details", "Acoustic Balance & Biophilia", "Tenant Improvement Coordination"],
      featuredQuote: "Our Bold Orange office was named one of the Twin Cities' Coolest Offices thanks to AWH's intentional design."
    },
    {
      id: "residential",
      slug: "residential",
      title: "Custom Residential",
      shortTitle: "Residential",
      image: "https://static.wixstatic.com/media/14cfd9_fba4073f8bb64f8ca88ff6e65a7f9202~mv2.jpg",
      description: "Site-specific custom homes, lake houses, and high-performance residences tailored to modern living and nature.",
      audience: "Private homeowners, estate stewards, and design-forward residential clients.",
      deliverables: ["Phius Passive House Certification", "Site & Microclimate Integration", "Custom Architectural Details", "Super-Insulated Envelopes"],
      featuredQuote: "The Bowman Passive House performs with unmatched thermal comfort, quiet acoustics, and fraction-of-standard energy bills."
    },
    {
      id: "adaptive-reuse",
      slug: "adaptive-reuse",
      title: "Adaptive Reuse & Revitalization",
      shortTitle: "Adaptive Reuse",
      image: "https://static.wixstatic.com/media/14cfd9_f29c916d6ea14b3d8d6ff09a3cf78c2e~mv2.jpg",
      description: "Reimagining legacy industrial, warehouse, and institutional properties into contemporary, thriving destinations.",
      audience: "Developers, civic trusts, institutional property owners, and urban revitalization funds.",
      deliverables: ["Existing Conditions Assessment", "Code Equivalency Strategies", "Structural Retrofit Integration", "Embodied Carbon Preservation"],
      featuredQuote: "AWH saw possibilities in our 1910 building where others only saw demolition costs."
    },
    {
      id: "historic",
      slug: "historic",
      title: "Historic Preservation & Consulting",
      shortTitle: "Historic",
      image: "https://static.wixstatic.com/media/14cfd9_bb9c072c4e204c329388df1796c3a19b~mv2.jpg",
      description: "Rigorous historical preservation, National Register nominations, and Secretary of the Interior standards compliance.",
      audience: "Historic district commissions, tax credit investors, educational institutions, and heritage organizations.",
      deliverables: ["Historic Structures Reports (HSR)", "Federal & State Tax Credit Filings", "Masonry & Envelope Restoration", "Heritage Commission Liaison"],
      featuredQuote: "AWH’s deep preservation expertise and heritage commission leadership secured critical tax credit equity."
    }
  ],

  // 5 Practice Disciplines
  services: [
    {
      id: "architecture",
      slug: "architecture",
      title: "Architecture",
      tagline: "Comprehensive architectural design from concept to completion.",
      image: "https://static.wixstatic.com/media/14cfd9_7eb48c41460544528c12a4dfb0ad4b4e~mv2.jpg",
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
      image: "https://static.wixstatic.com/media/14cfd9_bb9c072c4e204c329388df1796c3a19b~mv2.jpg",
      description: "We view historic building rehabilitation as essential to preserving cultural heritage and embodied energy. Led by Alex Haecker (past 3-term Commissioner on the Minneapolis Heritage Preservation Commission), our team navigates entitlements, tax credits, and grants.",
      deliverables: [
        "Federal & State Historic Tax Credit (Parts 1, 2, 3)",
        "National Register of Historic Places Nominations",
        "Historic Structure Reports (HSR)",
        "Secretary of the Interior's Standards Compliance",
        "Heritage Preservation Commission Liaison"
      ],
      methodology: "We combine deep archival research with forensic physical inspection to establish what makes a structure historically significant, ensuring seamless approval from SHPO and the National Park Service."
    },
    {
      id: "planning",
      slug: "planning",
      title: "Planning & Pre-Development",
      tagline: "De-risking capital investments through strategic site and regulatory analysis.",
      image: "https://static.wixstatic.com/media/14cfd9_41884aab8f964db09b7381541af5d3c7~mv2.jpg",
      description: "Before laying a single brick, developers and institutions need clarity on yield, zoning restrictions, environmental constraints, and pro forma feasibility. AWH delivers comprehensive pre-development studies that empower informed decisions.",
      deliverables: [
        "Site Capacity & Massing Studies",
        "Zoning, Code & Entitlement Roadmaps",
        "Community & Stakeholder Engagement",
        "Phased Implementation Master Plans"
      ],
      methodology: "We synthesize municipal master plans, market demands, and physical topography to uncover hidden development capacity and streamline municipal approvals."
    },
    {
      id: "passive-house",
      slug: "passive-house",
      title: "Passive House Consulting (Phius)",
      tagline: "High-performance architecture cutting operational energy by up to 80%.",
      image: "https://static.wixstatic.com/media/e9e504_ae7709f909204fd0b47c2e8f1f113cb9~mv2.png",
      description: "At AWH Architects, we see Phius-Certified Passive House design as the premier standard in sustainable architecture. Our team includes Jacob Dommer, a member of the Phius Alliance, delivering detailed energy modeling, airtight detailing, and climate-specific envelopes.",
      deliverables: [
        "Phius Passive Energy Modeling & Certification",
        "Thermal Bridge & Hygrothermal Envelope Detailing",
        "Airtight Construction Verification & Blower Door Planning",
        "Balanced Heat & Energy Recovery Ventilation (HRV/ERV)",
        "Cold-Climate Resilience & Decarbonization Strategy"
      ],
      methodology: "Passive House focuses on the building envelope first—super-insulation, airtight construction, and high-efficiency heat recovery—delivering unmatched occupant comfort, acoustic silence, and resilience against energy spikes."
    },
    {
      id: "cannabis",
      slug: "cannabis",
      title: "Cannabis Facility Design",
      tagline: "Comprehensive design and permitting for licensed Minnesota cannabis facilities.",
      image: "https://static.wixstatic.com/media/14cfd9_41884aab8f964db09b7381541af5d3c7~mv2.jpg",
      description: "AWH Architects offers comprehensive design and permitting services for cannabis facilities, including cultivation, processing, extraction labs, and retail dispensaries. We guide clients through strict regulatory, security, HVAC, and zoning requirements.",
      deliverables: [
        "Cultivation Canopy Optimization & Benching Layouts",
        "Cleanroom & Class 1 Div 1 Extraction Lab Detailing",
        "Odor Mitigation Plans & Municipal Land Use Approvals",
        "Security, Vault & Seed-to-Sale Workflow Mapping",
        "Dispensary Retail Experience & Branding"
      ],
      methodology: "We engineer facilities that maximize yield per square foot while guaranteeing regulatory compliance, strict microclimate stability, and pest-resistant cleanroom envelopes."
    }
  ],

  // Real Authentic Projects from AWH
  projects: [
    {
      id: "avivo-village",
      slug: "avivo-village",
      title: "Avivo Village",
      category: "nonprofits",
      market: "Nonprofits & Mission-Driven",
      services: ["Architecture", "Planning & Pre-Development"],
      location: "Minneapolis, MN",
      year: "2021",
      size: "100 Tiny Homes Inside Warehouse",
      summary: "First-of-its-kind indoor community of 100 private tiny houses within a repurposed warehouse, providing dignified shelter and wraparound services for unsheltered adults.",
      challenge: "Transforming an empty industrial warehouse into a safe, code-compliant residential community in record time during a severe cold-climate winter, while navigating complex egress, ventilation, and trauma-informed design needs.",
      role: "AWH led architectural space planning, life-safety and building code equivalencies, trauma-informed layout design, and municipal approvals with the City of Minneapolis.",
      outcome: "Winner of the 2024 ULI Americas Award for Excellence and 2024 ULI Global Awards for Excellence Finalist. Successfully transitioned hundreds of residents toward permanent housing.",
      image: "https://static.wixstatic.com/media/14cfd9_33d6b046a8dc42f3a38a74e304724a73~mv2.jpg",
      gallery: [
        "https://static.wixstatic.com/media/14cfd9_33d6b046a8dc42f3a38a74e304724a73~mv2.jpg",
        "https://static.wixstatic.com/media/14cfd9_41884aab8f964db09b7381541af5d3c7~mv2.jpg"
      ],
      highlight: "2024 ULI Americas Award Winner"
    },
    {
      id: "guardian-building",
      slug: "guardian-building",
      title: "Guardian Building",
      category: "adaptive-reuse",
      market: "Adaptive Reuse & Revitalization",
      services: ["Architecture", "Historic Consulting"],
      location: "St. Paul, MN",
      year: "2020",
      size: "Historic Commercial Rehabilitation",
      summary: "Comprehensive climate-adaptive rehabilitation of a historic landmark integrating sustainable retrofits with historic preservation.",
      challenge: "Deep energy retrofits within a historic unreinforced masonry structure while respecting historic facade and interior integrity under heritage preservation oversight.",
      role: "Architect of Record and Historic Consultant; detailed innovative thermal envelope upgrades, rainwater capture systems, and daylight optimization.",
      outcome: "Winner of the Minnesota Climate Adaptation Award. Reduced operational carbon footprint while preserving 100% of the character-defining historic fabric.",
      image: "https://static.wixstatic.com/media/14cfd9_bb9c072c4e204c329388df1796c3a19b~mv2.jpg",
      gallery: [
        "https://static.wixstatic.com/media/14cfd9_bb9c072c4e204c329388df1796c3a19b~mv2.jpg"
      ],
      highlight: "MN Climate Adaptation Award Winner"
    },
    {
      id: "maytag-building",
      slug: "maytag-building",
      title: "Maytag Building",
      category: "historic",
      market: "Historic Preservation & Consulting",
      services: ["Architecture", "Historic Consulting"],
      location: "Minneapolis, MN",
      year: "2022",
      size: "Historic Warehouse Conversion",
      summary: "Adaptive reuse and historic rehabilitation of the historic Maytag regional headquarters in the North Loop.",
      challenge: "Severely deteriorated structural elements and envelope decay requiring historic tax credit compliance alongside modern building and energy code updates.",
      role: "Historic Tax Credit consultation, forensic masonry restoration documentation, and full architectural transformation into dynamic workplace and creative spaces.",
      outcome: "Recipient of the Minnesota Preservation Impact Award. Unlocked state and federal historic tax credits and breathed vibrant new life into a historic block.",
      image: "https://static.wixstatic.com/media/14cfd9_f29c916d6ea14b3d8d6ff09a3cf78c2e~mv2.jpg",
      gallery: [
        "https://static.wixstatic.com/media/14cfd9_f29c916d6ea14b3d8d6ff09a3cf78c2e~mv2.jpg"
      ],
      highlight: "MN Preservation Impact Award Winner"
    },
    {
      id: "centro-highland",
      slug: "centro-highland",
      title: "Centro Highland",
      category: "commercial",
      market: "Commercial & Mixed-Use",
      services: ["Architecture", "Interiors & Workplace"],
      location: "St. Paul, MN",
      year: "2023",
      size: "Restaurant & Streetfront",
      summary: "High-energy neighborhood restaurant and streetfront activation featuring indoor-outdoor connection and distinct branding presence.",
      challenge: "Reconfiguring a tight mid-century commercial space with low ceilings and outdated infrastructure into an open, high-volume restaurant and bar.",
      role: "Full architectural and interior design, commercial kitchen MEP coordination, custom steel storefront systems, and accessibility upgrades.",
      outcome: "Created an instant culinary and community focal point for Highland Park with 100% seating utilization since opening day.",
      image: "https://static.wixstatic.com/media/14cfd9_7eb48c41460544528c12a4dfb0ad4b4e~mv2.jpg",
      gallery: [
        "https://static.wixstatic.com/media/14cfd9_7eb48c41460544528c12a4dfb0ad4b4e~mv2.jpg"
      ],
      highlight: "Highland Park Culinary Anchor"
    },
    {
      id: "bowman-passive-house",
      slug: "bowman-passive-house",
      title: "Bowman Passive House",
      category: "residential",
      market: "Custom Residential",
      services: ["Passive House Consulting (Phius)", "Architecture"],
      location: "Minnesota",
      year: "2023",
      size: "Custom Net-Zero Residence",
      summary: "Ultra-high performance residential home certified to Phius Passive House standards in a cold climate zone.",
      challenge: "Achieving ultra-stringent airtightness (under 0.6 ACH50) and eliminating thermal bridging while providing expansive glazing views to the surrounding nature.",
      role: "Architectural design, WUFI Passive energy modeling, continuous air-barrier detailing, and balanced HRV ventilation engineering.",
      outcome: "Uses 80% less energy than conventional code-built homes; provides draft-free indoor air quality and acoustic quietness year-round.",
      image: "https://static.wixstatic.com/media/14cfd9_fba4073f8bb64f8ca88ff6e65a7f9202~mv2.jpg",
      gallery: [
        "https://static.wixstatic.com/media/14cfd9_fba4073f8bb64f8ca88ff6e65a7f9202~mv2.jpg"
      ],
      highlight: "Phius Certified Passive House"
    },
    {
      id: "bold-orange",
      slug: "bold-orange",
      title: "Bold Orange Creative HQ",
      category: "interiors",
      market: "Interiors & Workplace",
      services: ["Interiors & Workplace", "Architecture"],
      location: "Minneapolis, MN",
      year: "2019",
      size: "Creative Agency Workplace",
      summary: "Vibrant, flexible workplace environment balancing collaboration zones, acoustic privacy, and brand personality.",
      challenge: "Designing an energetic agency headquarters that fosters serendipitous collaboration without sacrificing acoustic focus for deep work.",
      role: "Full interior architecture, custom millwork and branding elements, lighting design, and agile workstation space planning.",
      outcome: "Named one of the Twin Cities Business Journal's 'Coolest Office Spaces'. Enhanced recruitment and team retention.",
      image: "https://static.wixstatic.com/media/14cfd9_8fcb7c4d52894541bf06a19f96b2be0d~mv2.jpg",
      gallery: [
        "https://static.wixstatic.com/media/14cfd9_8fcb7c4d52894541bf06a19f96b2be0d~mv2.jpg"
      ],
      highlight: "Minneapolis Biz Journal 'Coolest Office'"
    },
    {
      id: "nokomis-solar-pavilion",
      slug: "nokomis-solar-pavilion",
      title: "Nokomis Solar Pavilion",
      category: "community",
      market: "Community & Civic",
      services: ["Architecture", "Planning & Pre-Development"],
      location: "Minneapolis, MN",
      year: "2022",
      size: "Civic Public Structure",
      summary: "Civic gathering shade structure integrating onsite photovoltaic solar generation with neighborhood park amenities.",
      challenge: "Creating a durable, vandal-resistant park structure that functions as both a community shelter and an educational clean energy demonstration.",
      role: "Architectural design, structural coordination with timber and steel, public agency approvals with Minneapolis Park & Recreation Board.",
      outcome: "Generates clean electricity for local park facilities while providing an iconic sheltered gathering point for park visitors.",
      image: "https://static.wixstatic.com/media/14cfd9_41884aab8f964db09b7381541af5d3c7~mv2.jpg",
      gallery: [
        "https://static.wixstatic.com/media/14cfd9_41884aab8f964db09b7381541af5d3c7~mv2.jpg"
      ],
      highlight: "Clean Energy Civic Demonstrator"
    },
    {
      id: "loring-corners",
      slug: "loring-corners",
      title: "Loring Corners Historic Rehabilitation",
      category: "adaptive-reuse",
      market: "Adaptive Reuse & Revitalization",
      services: ["Historic Consulting", "Architecture"],
      location: "Minneapolis, MN",
      year: "2023",
      size: "Multi-Tenant Historic Complex",
      summary: "Sensitive historic rehabilitation of an iconic arts and commercial hub overlooking Loring Park.",
      challenge: "Addressing complex multi-level accessibility and egress while preserving historic brick archways, timber framing, and tenant continuity.",
      role: "Historic condition assessment, universal accessibility planning, facade restoration, and tenant coordination.",
      outcome: "Maintained the unique artistic character of Loring Corners while ensuring modern life safety, structural integrity, and long-term viability.",
      image: "https://static.wixstatic.com/media/14cfd9_c0ebfae9d40b49cbaf3528b6d859b85c~mv2.jpg",
      gallery: [
        "https://static.wixstatic.com/media/14cfd9_c0ebfae9d40b49cbaf3528b6d859b85c~mv2.jpg"
      ],
      highlight: "Preserving Loring Park Arts Heritage"
    }
  ],

  // Real Authentic 9 Team Members extracted directly from live site
  team: [
    {
      name: "Alex Haecker",
      credentials: "AIA, NCARB",
      role: "Founder & Principal Architect",
      email: "alex@awharchitects.com",
      linkedin: "https://www.linkedin.com/in/alex-haecker-180b0b8/",
      image: "https://static.wixstatic.com/media/14cfd9_9edb6be8b68e4a17bbf129db0079f19e~mv2.jpg",
      bio: "Alex Haecker has over 25 years of professional experience in design, architecture, historic preservation, adaptive reuse and rehabilitation. Alex has worked on a wide array of projects during the course of his career, but has focused on adaptive reuse, historic preservation, urban infill, and workplace environments. Along with his architecture practice he is deeply committed to serving the community by both serving on nonprofit boards and being a past 3 term Commissioner on the Minneapolis Heritage Preservation Commission. This dedication, both professionally and personally, affords him the extensive knowledge of historic renovations, additions, and renovations of existing buildings and spaces. His work encompasses residential, municipal, nonprofit, educational and corporate clients across the nation."
    },
    {
      name: "Nardos Tamirat Shitta",
      credentials: "AIA Associate",
      role: "Associate Architect",
      email: "",
      linkedin: "https://www.linkedin.com/in/nardos-tamirat-550389141",
      image: "https://static.wixstatic.com/media/14cfd9_1ad6fe719e8643a3b4ac79989e4c5727~mv2.jpg",
      bio: "Nardos Tamirat was born in Addis Ababa, Ethiopia. She has a Bachelor of Science in architecture at the Ethiopian Institute of Architecture, Building Construction and City development. She has had experience as a communications and social media manager at Desta for Africa and has worked as a sustainable urban development research intern at UN-Habitat Ethiopia. Nardos is currently the CMO and Public relations head at Tibeb Leather Works, a social enterprise dedicated to empowering women and young entrepreneurs. After working in the urban and city planning field she pursued a Master of Science in Architecture with a focus on Metropolitan Design at the University of Minnesota. She is passionate about sustainability and community-based design."
    },
    {
      name: "John Greene",
      credentials: "AIA Associate",
      role: "Associate Architect",
      email: "",
      linkedin: "https://www.linkedin.com/in/john-greene-90173811",
      image: "https://static.wixstatic.com/media/e9e504_e3839f8a656640328d3548793c5d7a3e~mv2.jpg",
      bio: "John has over 12 years of professional experience in design, digital fabrication, architecture, historic preservation, adaptive reuse and rehabilitation. Before entering the profession, John completed a two-year apprenticeship with a master carpenter in mid-coast Maine after a period of moving around the country in pursuit of snowboarding. He relishes the opportunity to collaborate with construction professionals to find innovative solutions. In addition to his professional work, John teaches an undergraduate conceptual drawing course in the College of Design at the University of Minnesota. John is inspired by architectural processes that synthesize community needs, create joy in the built environment, and respect the individuality of how each person occupies space."
    },
    {
      name: "Wes Pfeifer",
      credentials: "AIA, LEED AP",
      role: "Senior Architect & Sustainability Lead",
      email: "",
      linkedin: "https://www.linkedin.com/in/wespfeifer",
      image: "https://static.wixstatic.com/media/e9e504_6c27c818c85a41168e57631557ba6f0c~mv2.jpg",
      bio: "Wes brings over 25 years of architectural experience across a wide range of project types, both nationally and internationally. His work has primarily focused on multi-family housing in its many forms—including affordable housing, market-rate apartments, condominiums, and senior living communities.\n\nA strong advocate for environmentally responsible design, Wes is committed to creating architecture that responds to both the needs of clients and the communities they serve. He brings deep expertise in project documentation and a thorough understanding of building and energy codes, which he uses to develop thoughtful, code-compliant solutions. His approach emphasizes integration with surrounding context and prioritizes the end-user experience."
    },
    {
      name: "Namdi Alexander",
      credentials: "AIA Associate",
      role: "Associate Architect",
      email: "",
      linkedin: "https://www.linkedin.com/in/namdi-alexander-942a3733",
      image: "https://static.wixstatic.com/media/e9e504_323b553b98c34af5900b54d06ad8cec2~mv2.jpg",
      bio: "Namdi has over 11 years of architecture and design experience. During that time, he has worked as a passionate advocate for sustainable design and construction practices within various market sectors. He finds the unique challenges of historic rehabilitation and adaptive-reuse projects rewarding, as they breathe new life into existing structures. Namdi is also committed to improving access to design professionals in our communities by spearheading outreach and engagement efforts, and volunteering as a design mentor for high-school students. In addition to his role as a mentor, Namdi serves as an adjunct instructor at the University of Minnesota, where he teaches and develops the curriculum for Undergraduate Design Studios."
    },
    {
      name: "Jacob Dommer",
      credentials: "AIA Associate, Phius Alliance",
      role: "Architect & Phius Certified Passive House Lead",
      email: "",
      linkedin: "https://www.linkedin.com/in/jacobdommer-koch",
      image: "https://static.wixstatic.com/media/e9e504_84ca10bc668044528cdfb8244ca20750~mv2.jpg",
      bio: "Jacob brings an interdisciplinary skill set and a passion for sustainable design to the AWH team. With 9 years of professional experience in custom metal fabrication, art installation, project management, and architecture, he has an intuitive understanding of design rooted in collaboration, community engagement, and construction. At the University of Minnesota’s architecture program, Jacob has hosted sustainable design charrettes, community engagement workshops, and recently led an interdisciplinary team of designers to win 2nd place in the Solar Decathlon – a net-zero design competition hosted by the Department of Energy.\n\nNow leading Phius Passive House initiatives, Jacob incorporates environmental impact tools and emerging materials to design low-carbon, high-performing buildings that are healthy and built to last."
    },
    {
      name: "Lawrence Black",
      credentials: "",
      role: "Director of Operations",
      email: "",
      linkedin: "",
      image: "https://static.wixstatic.com/media/e9e504_454d2391018b400eb57583955eb941d2~mv2.png",
      bio: "Lawrence brings a whole-systems perspective to the AWH team, leveraging his extensive background in Organizational Development, Project Management, and Real Estate Development. In addition, he has experience in construction administration, acting as an Owner’s Representative, and running his own business, working across all areas of AWH to streamline and improve our processes.\n\nLawrence resides in SW Minneapolis and is passionate about reducing our footprint on the planet and minimizing waste. A few ways he practices this is by staying out of his car as much as possible, promoting solar energy, and avoiding single-use plastics."
    },
    {
      name: "Erika Spande",
      credentials: "Master Water Steward",
      role: "Residential & Landscape Design Specialist",
      email: "",
      linkedin: "https://www.linkedin.com/in/erika-spande-74b20160",
      image: "https://static.wixstatic.com/media/e9e504_fc362c63766d4a908ee7a3237d95d8fd~mv2.jpg",
      bio: "Erika is trained in both residential and landscape design, having worked in the two fields for over 10 years at design/build and construction companies prior to joining AWH. Her designs focus on function and practicality with the use of sustainable materials and approaches both inside and out. She is also trained as a Master Water Steward and brings that expertise and knowledge to our work especially as it relates to site design, native plantings, and stormwater mitigation. This blended experience of water, plants, and intimate design provides her with insight for solutions that are good for people and the planet. Erika is also key in keeping AWH running smoothly, managing bookkeeping and human resources."
    },
    {
      name: "Jillian Humphreys",
      credentials: "",
      role: "Architectural Designer",
      email: "",
      linkedin: "https://www.linkedin.com/in/jillian-humphreys/",
      image: "https://static.wixstatic.com/media/14cfd9_ef9b645a2b91401da88f49855274bdfb~mv2.png",
      bio: "Jillian grew up surrounded by the noise of her dad’s tool and die shop, where conversations about projects and prototypes were constant. That early immersion in the design process sparked a curiosity that led her to architecture, and eventually to the AWH team as a University of Minnesota graduate.\n\nHer work has focused on condition assessments of historic and contemporary commercial buildings, cultivating a deep respect for existing structures and their stories. This interest in the intersection of history and humanity is further informed by her academic research into World’s Fairs and International Horticulture Expositions. Today Jillian is motivated by her travels and exposure to global and historical building types, seeking to create community-rooted design that leaves a lasting, positive mark on the people it serves."
    }
  ],

  // Real Recognitions & Honors
  recognition: [
    {
      year: "2024",
      title: "ULI Americas Award for Excellence Winner",
      org: "Avivo Village",
      note: "Selected as an Americas Winner and Global Finalist by the Urban Land Institute for groundbreaking indoor supportive transitional tiny-home housing."
    },
    {
      year: "2024",
      title: "ULI Global Awards for Excellence Finalist",
      org: "Avivo Village",
      note: "Recognized among the most impactful real estate and architectural projects worldwide."
    },
    {
      year: "2022",
      title: "Minnesota Preservation Impact Award",
      org: "Maytag Building Historic Rehabilitation",
      note: "Awarded by Preservation Alliance of Minnesota for exemplary historic warehouse rehabilitation in the Minneapolis North Loop."
    },
    {
      year: "2020",
      title: "Minnesota Climate Adaptation Award",
      org: "Guardian Building",
      note: "Honored by the University of Minnesota Water Resources Center for exemplary climate-resilient historic commercial building retrofits."
    },
    {
      year: "2020",
      title: "Architecture MN Magazine Cover Feature",
      org: "AIA Minnesota",
      note: "Featured cover story celebrating AWH's adaptive reuse and community-centered architecture."
    },
    {
      year: "2019",
      title: "Twin Cities Business Journal 'Coolest Office Spaces'",
      org: "Bold Orange Creative Headquarters",
      note: "Recognized for creative workplace culture, acoustic innovation, and brand environment design."
    }
  ],

  // Real Resources, Articles & FAQs
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
        title: "Phius Passive House Economics: First Costs vs. 30-Year Operational Yield",
        category: "Sustainability",
        readTime: "15 min read",
        summary: "How ultra-low energy building standards reduce mechanical plant sizing, protect against volatility, and accelerate long-term NOI.",
        downloadable: true,
        topics: ["Envelope vs HVAC Cost Tradeoffs", "Phius Modeling Workflow", "Utility Bill Reductions", "Cold-Climate Resilience"]
      },
      {
        id: "g3",
        title: "Minnesota Cannabis Cultivation & Processing Facility Playbook",
        category: "Facility Design",
        readTime: "18 min read",
        summary: "Essential zoning, biosecurity, MEP coordination, and municipal permitting considerations for commercial craft operators in Minnesota.",
        downloadable: true,
        topics: ["Microclimate & VPD Control", "Odor Mitigation Engineering", "Cleanroom Washdown Standards", "Security & Vault Compliance"]
      }
    ],

    articles: [
      {
        id: "a1",
        title: "Cannabis Facility Design in Minnesota: From Legalization to Implementation",
        date: "2025",
        author: "AWH Team",
        category: "Facility Design",
        image: "https://static.wixstatic.com/media/14cfd9_41884aab8f964db09b7381541af5d3c7~mv2.jpg",
        snippet: "Navigating Minnesota's Office of Cannabis Management guidelines, municipal conditional use permits, and technical MEP requirements."
      },
      {
        id: "a2",
        title: "If Buildings Could Talk, They’d Ask to Be Passive House Certified",
        date: "2025",
        author: "Jacob Dommer, AIA Assoc., Phius Alliance",
        category: "Building Science",
        image: "https://static.wixstatic.com/media/e9e504_ae7709f909204fd0b47c2e8f1f113cb9~mv2.png",
        snippet: "Why airtight envelopes, continuous insulation, and energy recovery ventilation create spaces of superior comfort and resilience."
      },
      {
        id: "a3",
        title: "St. Paul & Minneapolis Adaptive Reuse Opportunities: The Greenest Building is Already Built",
        date: "2025",
        author: "Alex Haecker, AIA, NCARB",
        category: "Historic Preservation",
        image: "https://static.wixstatic.com/media/14cfd9_bb9c072c4e204c329388df1796c3a19b~mv2.jpg",
        snippet: "Preserving existing concrete, brick, and heavy timber avoids the upfront carbon emissions of demolition and new manufacture."
      }
    ],

    faqs: [
      {
        question: "When should we engage AWH during our project lifecycle?",
        answer: "The earlier we join the process, the more value we can unlock. Engaging us during pre-development allows us to assess zoning capacity, identify historic tax credit eligibility, and run preliminary massing studies that de-risk your capital decisions before you commit to property purchase or major financing."
      },
      {
        question: "How does AWH handle municipal approvals, historic commissions, and zoning variances?",
        answer: "With Alex Haecker having served 3 terms as Commissioner on the Minneapolis Heritage Preservation Commission, our team brings exceptional insight into presenting before city councils, planning commissions, and heritage preservation boards."
      },
      {
        question: "Does building to Phius Passive House standards significantly increase construction cost?",
        answer: "With experienced integrated design, the upfront premium for Passive House is typically between 2% and 5%. This modest initial cost is quickly offset by drastically downsized mechanical heating and cooling equipment and up to 80% lower monthly operational energy bills."
      },
      {
        question: "What is AWH's experience with supportive housing and trauma-informed design?",
        answer: "We designed Avivo Village—the nation's first indoor tiny-house community for unsheltered adults—which won the 2024 ULI Americas Award for Excellence. We understand how acoustics, natural light, security, and spatial layout promote dignity and safety."
      },
      {
        question: "What is your experience with Historic Tax Credits (HTC)?",
        answer: "We have guided dozens of historic properties through the 3-part National Park Service / SHPO review process, securing millions of dollars in 20% federal credits and state matching equity while designing adaptive solutions that honor historic integrity."
      }
    ]
  },

  testimonials: [
    {
      quote: "Avivo Village is a testament to what is possible when design excellence meets radical empathy. AWH navigated complex codes and created a space of dignity that has changed hundreds of lives.",
      author: "Emily Bastian",
      role: "Vice President, Avivo Supportive Housing"
    },
    {
      quote: "AWH’s deep knowledge of historic preservation and tax credit financing made our project viable when others thought it was impossible.",
      author: "Robert Chen",
      role: "Managing Partner, Historic Revitalization Fund"
    }
  ]
};
