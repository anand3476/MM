import React, { useState } from 'react';
import { 
  BookOpen, Menu, X, ArrowRight, Search, ChevronRight,
  Target, LayoutGrid, Users, BarChart, Lightbulb, 
  CheckCircle2, Truck, ShieldCheck, Zap, Package, 
  TrendingUp, ShoppingCart, Award
} from 'lucide-react';

// --- EXACT SOURCE DATA ---
const previousQuestions = {
  unit1: [
    { id: 1, clubbed: "What is societal marketing concept? / Briefly describe... / Explain...", rep: 4, marks: "3, 10", points: "A philosophy where firms identify customer needs and deliver satisfaction better than competitors while protecting consumer welfare and society's long-term interest. Balance of profits + consumer wants + social welfare." },
    { id: 2, clubbed: "What is societal marketing concept? Describe in brief the scope of holistic marketing.", rep: 1, marks: 10, points: "Societal concept as above. Holistic marketing scope: everything matters in marketing. Includes Internal marketing, Integrated marketing, Relationship marketing, Performance marketing." },
    { id: 3, clubbed: "Discuss the holistic approach to marketing planning. / Explain briefly the concept of Holistic Marketing.", rep: 2, marks: 7, points: "Holistic marketing views business as one system. Components: Internal (employee motivation), Integrated (all tools coordinated), Relationship (customers/suppliers/dealers), Performance (profit + ethics + social impact)." },
    { id: 4, clubbed: "Differentiate between selling concept and marketing concept.", rep: 1, marks: 3, points: "Selling: inside-out approach, focus on existing products, aggressive promotion, profit through volume sales. Marketing: outside-in approach, starts with customer needs, integrated efforts, profit through satisfaction." },
    { id: 5, clubbed: "Differentiate between the product concept and production concept in marketing.", rep: 1, marks: 3, points: "Production concept: customers prefer cheap & easily available products; focus on mass production and efficiency. Product concept: customers prefer quality, features, performance; focus on product improvement." },
    { id: 6, clubbed: "Discuss the various philosophies for the development of the marketing concept.", rep: 1, marks: 7, points: "Evolution of concepts: Production -> Product -> Selling -> Marketing -> Societal marketing. Shows shift from product focus to customer and society focus." },
    { id: 7, clubbed: "What do you mean by societal concept of marketing? Explain with examples the environmental factors that affect the marketing system of an organization.", rep: 1, marks: 10, points: "Define societal concept. Environmental factors: Micro: suppliers, intermediaries, competitors, publics, customers. Macro: demographic, economic, natural, technological, political, cultural forces. Example: inflation changes demand." },
    { id: 8, clubbed: "What do you mean by marketing mix? Explain in brief the various elements of marketing mix of a product of your choice.", rep: 1, marks: 10, points: "Marketing mix = set of controllable tools used to influence target market. 4Ps: Product, Price, Place, Promotion. Example mobile phone: features, pricing, online stores, ads." },
    { id: 9, clubbed: "Describe the elements of marketing mix with suitable examples.", rep: 1, marks: 7, points: "Product: design/quality. Price: discounts/list price. Place: channels/logistics. Promotion: advertising, sales promotion, PR. Example shampoo sachet." },
    { id: 10, clubbed: "Explain the product-market matrix.", rep: 1, marks: 3, points: "Ansoff Matrix: growth strategies - Market Penetration, Market Development, Product Development, Diversification." },
    { id: 11, clubbed: "Marketing Environment.", rep: 1, marks: 7, points: "Marketing environment means internal and external forces affecting ability to serve customers. Includes Micro and Macro environment." },
    { id: 12, clubbed: "Describe the concept of macro environment in marketing.", rep: 1, marks: 3, points: "Macro environment = larger societal forces affecting business: Demographic, Economic, Natural, Technological, Political, Cultural factors." }
  ],
  unit2: [
    { id: 1, clubbed: "What is consumer behavior? Explain the five stages in consumer's buying decision process.", rep: 1, marks: 10, points: "Consumer behavior means study of how individuals buy, use and dispose products/services. Five stages: Need recognition, Information search, Evaluation of alternatives, Purchase decision, Post-purchase behavior." },
    { id: 2, clubbed: "Explain in brief the factors influencing the buying decision process of a customer. / What do you mean by consumer behaviour? Explain various factors that influence the customer buying decision process.", rep: 2, marks: "7, 10", points: "Factors influencing buying decision: Cultural (culture, subculture), Social (family, reference groups), Personal (age, income, lifestyle), Psychological (motivation, perception, learning, beliefs)." },
    { id: 3, clubbed: "Explain in brief the importance of studying consumer behaviour in marketing.", rep: 1, marks: 7, points: "Helps understand customer needs, forecast demand, segment markets, improve products, create effective promotion, and increase customer satisfaction." },
    { id: 4, clubbed: "What do you mean by consumer behaviour? Also, briefly describe the Black Box model of buying behaviour.", rep: 1, marks: 10, points: "Consumer behaviour = study of purchase decisions. Black Box Model: Marketing & environmental stimuli enter buyer's mind (black box) consisting of buyer characteristics + decision process, leading to responses like product choice, brand choice, timing, quantity." },
    { id: 5, clubbed: "Write the significance of market segmentation? What will be the suitable base for market segmentation of a mobile phone or a jewelry item?", rep: 1, marks: 10, points: "Segmentation divides market into groups for better targeting and efficient use of resources. Bases: Mobile phone: age, income, tech lifestyle. Jewelry: gender, income, occasion, lifestyle." },
    { id: 6, clubbed: "Explain STP model of marketing. / Describe with examples the term, STP in marketing.", rep: 2, marks: "3, 7", points: "Segmentation: divide market. Targeting: choose best segment. Positioning: create clear image in customer mind. Example: affordable bike for students." },
    { id: 7, clubbed: "What do you mean by market segmentation? Explain briefly the various criteria for effective market segmentation.", rep: 1, marks: 10, points: "Market segmentation = dividing heterogeneous market into homogeneous groups. Effective criteria: Measurable, Accessible, Substantial, Differentiable, Actionable (MASDA)." },
    { id: 8, clubbed: "Explain the importance of market segmentation.", rep: 1, marks: 3, points: "Helps identify profitable groups, better product design, focused advertising, improved customer satisfaction, and stronger competition strategy." },
    { id: 9, clubbed: "Explain marketing information system. / What do you mean by Marketing Information System? / Marketing Information System.", rep: 3, marks: "3, 7", points: "MIS is an organized system of people, equipment, procedures to collect, analyze, store and distribute timely marketing information for decision-making. Components: Internal records, marketing intelligence, marketing research, decision support system." },
    { id: 10, clubbed: "Marketing Research.", rep: 2, marks: 7, points: "Marketing research is systematic collection and analysis of data relating to a marketing problem. Steps: Problem definition, research plan, data collection, analysis, report, decision." }
  ],
  unit3: [
    { id: 1, clubbed: "Explain with examples the levels of a product. / Levels of a Product.", rep: 2, marks: "3, 7", points: "Kotler's 5 Levels of Product: Core benefit (basic need satisfied), Basic product, Expected product, Augmented product (extra benefits), Potential product (future improvements). Example hotel stay." },
    { id: 2, clubbed: "Explain the classification of consumer products.", rep: 1, marks: 3, points: "Consumer products classified as: Convenience goods (soap, bread), Shopping goods (clothes, furniture), Specialty goods (luxury car), Unsought goods (insurance, funeral plans)." },
    { id: 3, clubbed: "What do you mean by product line?", rep: 1, marks: 3, points: "Product line = group of related products sold by a company, similar in function, customers, channels or price range. Example Samsung Galaxy phones." },
    { id: 4, clubbed: "What do you mean by shopping goods?", rep: 1, marks: 3, points: "Shopping goods are products for which buyers compare quality, price, style before purchase. Example furniture, mobiles, shoes." },
    { id: 5, clubbed: "What do you mean by product mix?", rep: 1, marks: 3, points: "Product mix = total number of product lines/items offered by a seller. Dimensions: Width, Length, Depth, Consistency." },
    { id: 6, clubbed: "Describe the different stages of product life cycle by taking an example of a product of your choice and suggest the strategies for its elongation.", rep: 1, marks: 10, points: "PLC stages: Introduction, Growth, Maturity, Decline. Example smartphone. Elongation strategies: product improvement, new uses, new markets, price change, promotion change." },
    { id: 7, clubbed: "Elongation strategies for PLC. / Discuss the strategies to elongate the product life cycle.", rep: 2, marks: 7, points: "Extend maturity stage through market modification, product modification, marketing mix modification, repositioning, finding new users." },
    { id: 8, clubbed: "Describe the various stages of the product life cycle.", rep: 1, marks: 7, points: "Introduction: low sales/high cost. Growth: rising sales/profits. Maturity: peak sales/high competition. Decline: falling sales/profits." },
    { id: 9, clubbed: "New Product Development. / Discuss the various steps in new product development.", rep: 3, marks: 7, points: "Steps: Idea generation -> Screening -> Concept testing -> Marketing strategy -> Business analysis -> Product development -> Test marketing -> Commercialization." },
    { id: 10, clubbed: "What do you mean by 'brand'? Explain the various branding decisions which must be kept in mind before branding any product.", rep: 1, marks: 10, points: "Brand = name, sign, symbol or design identifying seller's product. Branding decisions: brand sponsor, brand name, brand strategy, repositioning." },
    { id: 11, clubbed: "What do you mean by brand extension? Explain the various branding decisions which must be kept in mind before branding any product.", rep: 1, marks: 10, points: "Brand extension = using existing successful brand name for new category product. Example Dove shampoo from Dove soap. Include branding decisions." },
    { id: 12, clubbed: "What do you mean by co-branding?", rep: 1, marks: 3, points: "Co-branding = using two established brands together on one product. Example Visa + SBI credit card." },
    { id: 13, clubbed: "What do you mean by brand equity?", rep: 1, marks: 3, points: "Brand equity = added value given by brand name in consumer perception leading to preference, loyalty and premium pricing." },
    { id: 14, clubbed: "What is brand positioning? Explain the various branding strategies of a product with suitable examples.", rep: 1, marks: 10, points: "Brand positioning = creating distinct place in customer mind based on benefits/attributes. Strategies: line extension, brand extension, multibrand, new brand, co-branding." },
    { id: 15, clubbed: "Explain the concept of brand positioning.", rep: 1, marks: 3, points: "Designing offering and image to occupy meaningful, distinct place in target market's mind." },
    { id: 16, clubbed: "Explain briefly the various branding strategies with suitable examples.", rep: 1, marks: 7, points: "Line extension (new flavors), Brand extension, Multibrands, New brands, Co-branding." },
    { id: 17, clubbed: "Packaging as a silent salesman. / Importance of packaging in Marketing. / Explain briefly the importance of packaging in modern marketing.", rep: 3, marks: "5, 7", points: "Packaging protects product, provides convenience, attracts buyers, communicates features, builds brand image, promotes at point of sale. Called silent salesman." },
    { id: 18, clubbed: "What do you mean by branding? Suggest the branding and promotional strategies to promote the tourism industry in Manipur.", rep: 1, marks: 10, points: "Branding = creating identity/image. Tourism branding for Manipur: unique logo/tagline, promote culture & nature, digital campaigns, influencer marketing, travel fairs." },
    { id: 19, clubbed: "Describe the concept of marginal cost pricing? / Explain the concept of Marginal Cost Pricing.", rep: 2, marks: 3, points: "Pricing where price is based on variable cost / extra cost of one more unit, often used in short-run decisions or excess capacity." },
    { id: 20, clubbed: "What do you mean by skimming pricing?", rep: 1, marks: 3, points: "Charging high initial price for new product to recover costs and target premium buyers first." },
    { id: 21, clubbed: "Describe the pricing strategies in the introductory stage of PLC with suitable examples.", rep: 1, marks: 7, points: "Two strategies: Skimming pricing (high initial price) and Penetration pricing (low initial price to gain market share quickly). Example iPhone vs Jio launch." }
  ],
  unit4: [
    { id: 1, clubbed: "What do you mean by channel of distribution? Describe the factors governing the choice of channel.", rep: 1, marks: 10, points: "Channel of distribution = path through which goods move from producer to consumer. Factors affecting choice: product nature, market size, customer location, company resources, competition, cost, control, environment." },
    { id: 2, clubbed: "Channel Management.", rep: 1, marks: 7, points: "Channel management means selecting, motivating, coordinating and evaluating intermediaries to ensure efficient movement of goods. Includes conflict resolution and performance review." },
    { id: 3, clubbed: "Describe the factors that determine the channel of distribution.", rep: 1, marks: 7, points: "Factors: market factors (number of buyers, buying habits), product factors (perishable, bulky, technical), company factors (finance, reputation), middlemen factors, competition." },
    { id: 4, clubbed: "What is channel management? Describe the different types of distribution strategies adopted by a company with suitable examples.", rep: 1, marks: 10, points: "Channel management = management of intermediaries. Distribution strategies: Intensive (FMCG sold everywhere), Selective (electronics in chosen stores), Exclusive (luxury cars in limited dealers)." },
    { id: 5, clubbed: "Explain briefly the various methods of distribution channel of any FMCG company of your choice.", rep: 1, marks: 7, points: "Example Hindustan Unilever: Manufacturer -> Wholesaler -> Retailer -> Consumer; Direct retail supply; Distributor network; Online channels." },
    { id: 6, clubbed: "Discuss the strategy of using celebrity persons to promote a product with suitable examples.", rep: 1, marks: 7, points: "Celebrity endorsement uses fame, trust and popularity of famous persons to increase awareness and credibility. Example cricketer promoting sports drink." },
    { id: 7, clubbed: "What is direct marketing? Discuss the importance of publicity as a tool for promotion.", rep: 1, marks: 7, points: "Direct marketing = direct communication with target customers through email, phone, SMS, catalogs. Publicity = unpaid media coverage; high credibility and wide reach." },
    { id: 8, clubbed: "Explain direct marketing.", rep: 1, marks: 3, points: "Direct marketing means direct connection with carefully targeted consumers to obtain immediate response and build relationships." },
    { id: 9, clubbed: "Briefly describe publicity in marketing.", rep: 1, marks: 3, points: "Publicity is non-paid promotion through news, events, media reports, product launches etc. It builds goodwill and trust." },
    { id: 10, clubbed: "Explain the AIDA model of advertising.", rep: 1, marks: 3, points: "AIDA model: Attention -> Interest -> Desire -> Action. Used to design effective advertisements." },
    { id: 11, clubbed: "Explain briefly the importance of advertising in modern marketing.", rep: 1, marks: 7, points: "Advertising creates awareness, informs customers, builds brand image, persuades buyers, supports sales force and faces competition." },
    { id: 12, clubbed: "Discuss the advertising strategies to promote a product or a service of your choice.", rep: 1, marks: 7, points: "Strategies: Informative advertising (new product), Persuasive advertising (competitive market), Reminder advertising (mature products), digital/social media ads." },
    { id: 13, clubbed: "What do you mean by integrated marketing communication? Explain the various methods of sales promotions with suitable examples.", rep: 1, marks: 10, points: "IMC = coordinating all promotional tools to deliver consistent message. Sales promotion methods: coupons, discounts, samples, contests, cashback, trade allowances." },
    { id: 14, clubbed: "Integrated Marketing Communication.", rep: 2, marks: 7, points: "IMC combines advertising, PR, personal selling, direct marketing and sales promotion for one clear brand message across all channels." },
    { id: 15, clubbed: "What is do you mean by sales promotion? Describe the different types of sales promotion strategies adopted by a company with suitable examples.", rep: 1, marks: 10, points: "Sales promotion = short-term incentives to increase sales. Types: consumer promotion (discounts, coupons), trade promotion (dealer incentives), business promotion (trade fairs)." },
    { id: 16, clubbed: "Explain briefly the various methods of sales promotional strategies.", rep: 1, marks: 7, points: "Methods include price-off deals, coupons, free samples, premiums, contests, loyalty rewards, cashback, seasonal offers." }
  ],
  unit5: [
    { id: 1, clubbed: "Rural marketing. / Rural Marketing.", rep: 2, marks: "5, 7", points: "Rural marketing means planning, pricing, promoting and distributing goods/services to rural consumers and also marketing rural products to urban markets. Focus on village needs and lower purchasing power." },
    { id: 2, clubbed: "Describe the concept and practices of rural marketing in India with suitable examples. / Explain the concept and practices of rural marketing in India.", rep: 2, marks: 7, points: "Rural marketing in India focuses on 4A's: Affordability, Availability, Acceptability, Awareness. Practices: sachet packs, village fairs, local language ads, mobile vans." },
    { id: 3, clubbed: "What is rural marketing? Discuss the promotional and distribution strategies in rural marketing with suitable examples.", rep: 1, marks: 7, points: "Promotion: wall paintings, haats, melas, radio, local influencers. Distribution: village retailers, cooperatives, company vans, rural distributors." },
    { id: 4, clubbed: "Explain the concept and practices of rural marketing in India. Also, describe briefly the opportunities and challenges of agricultural marketing with suitable examples.", rep: 1, marks: 10, points: "Opportunities: large population, rising income, food processing, exports. Challenges: poor storage, middlemen, transport issues, price fluctuation, lack of market info." },
    { id: 5, clubbed: "What do you understand by digital marketing? Explain briefly the importance of international marketing in the era of globalization.", rep: 1, marks: 10, points: "Digital marketing uses internet and digital media for promotion. International marketing important for market expansion, foreign exchange, economies of scale, risk diversification." },
    { id: 6, clubbed: "Briefly describe internet marketing. / Describe with examples, internet marketing.", rep: 2, marks: 3, points: "Internet marketing means promoting products/services online through websites, email, search engines, social media. Example: online ads, e-commerce offers." },
    { id: 7, clubbed: "Digital Marketing. / Briefly describe digital marketing.", rep: 2, marks: "7, 3", points: "Digital marketing uses channels like SEO, social media, content marketing, email, PPC ads, influencer marketing to reach customers through connected devices." },
    { id: 8, clubbed: "What do you understand by international marketing? Explain briefly the various modes of entry in international marketing.", rep: 1, marks: 10, points: "International marketing = marketing across national borders. Entry modes: Exporting, Licensing, Franchising, Joint Venture, Direct Investment (FDI)." },
    { id: 9, clubbed: "International Marketing.", rep: 1, marks: 7, points: "Application of marketing principles in foreign markets involving adaptation to culture, laws, currency and competition." },
    { id: 10, clubbed: "What is international marketing? Describe the opportunities and challenges of international marketing with suitable examples.", rep: 1, marks: 10, points: "Opportunities: larger markets, growth, brand expansion. Challenges: tariffs, exchange risk, cultural differences, legal barriers, logistics." },
    { id: 11, clubbed: "Consumer Protection Act.", rep: 1, marks: 5, points: "Law to protect consumer interests against unfair trade practices, defective goods, deficiency in services and false advertising. Provides grievance redressal mechanisms in India." },
    { id: 12, clubbed: "What do you mean by Consumerism? / What do you mean by consumerism?", rep: 2, marks: 3, points: "Consumerism is an organized movement of consumers and government to protect buyer rights and increase power against unfair business practices." },
    { id: 13, clubbed: "Consumer Rights. / Describe the concept of consumer rights.", rep: 3, marks: "7, 3", points: "Main rights: Right to Safety, Information, Choice, Be Heard, Redressal, Consumer Education." },
    { id: 14, clubbed: "Consumer Movements.", rep: 1, marks: 7, points: "Organized efforts by consumers to demand quality goods, fair prices, honest advertising and legal protection." },
    { id: 15, clubbed: "Relationship Marketing. / What do you mean by relationship marketing?", rep: 2, marks: "7, 3", points: "Relationship marketing focuses on building long-term profitable relationships with customers, suppliers and distributors through trust, loyalty and satisfaction." },
    { id: 16, clubbed: "Explain the concept of customer relationship management.", rep: 1, marks: 3, points: "CRM is the process of managing customer data and interactions to improve satisfaction, retention, loyalty and profitability." }
  ]
};

// Unit theme colors
const unitThemes = {
  1: { bg: '#EDE9FE', border: '#7C3AED', accent: '#5B21B6', light: '#F5F3FF', badge: '#DDD6FE', badgeText: '#4C1D95', pill: '#7C3AED' },
  2: { bg: '#D1FAE5', border: '#059669', accent: '#065F46', light: '#ECFDF5', badge: '#A7F3D0', badgeText: '#064E3B', pill: '#059669' },
  3: { bg: '#FEE2E2', border: '#DC2626', accent: '#991B1B', light: '#FFF5F5', badge: '#FECACA', badgeText: '#7F1D1D', pill: '#DC2626' },
  4: { bg: '#FEF3C7', border: '#D97706', accent: '#92400E', light: '#FFFBEB', badge: '#FDE68A', badgeText: '#78350F', pill: '#D97706' },
  5: { bg: '#DBEAFE', border: '#2563EB', accent: '#1E3A8A', light: '#EFF6FF', badge: '#BFDBFE', badgeText: '#1E3A8A', pill: '#2563EB' },
};

const unitNames = {
  1: 'Unit I', 2: 'Unit II', 3: 'Unit III', 4: 'Unit IV', 5: 'Unit V'
};

// --- STYLED COMPONENTS ---

const DefinitionBox = ({ term, definition, theme }) => (
  <div style={{
    background: theme.light,
    border: `2px solid ${theme.border}`,
    borderLeft: `6px solid ${theme.border}`,
    borderRadius: 10,
    padding: '14px 18px',
    margin: '16px 0',
  }}>
    <div style={{ fontSize: 11, fontWeight: 700, color: theme.accent, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>Definition</div>
    {term && <div style={{ fontWeight: 700, fontSize: 15, color: theme.accent, marginBottom: 4 }}>{term}</div>}
    <div style={{ fontSize: 15, color: '#1a1a1a', lineHeight: 1.7 }}>{definition}</div>
  </div>
);

const ExampleBox = ({ children }) => (
  <div style={{
    background: '#FFFBEB',
    border: '1.5px solid #F59E0B',
    borderLeft: '5px solid #F59E0B',
    borderRadius: 8,
    padding: '10px 16px',
    margin: '10px 0',
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
  }}>
    <span style={{ fontSize: 16, marginTop: 1 }}>💡</span>
    <div style={{ fontSize: 14, color: '#78350F', lineHeight: 1.6 }}><strong style={{ color: '#92400E' }}>Example: </strong>{children}</div>
  </div>
);

const KeyPointBox = ({ points, theme, title }) => (
  <div style={{
    background: theme.bg,
    border: `1.5px solid ${theme.border}`,
    borderRadius: 10,
    padding: '14px 18px',
    margin: '14px 0',
  }}>
    {title && <div style={{ fontSize: 12, fontWeight: 700, color: theme.accent, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>{title}</div>}
    <ul style={{ margin: 0, paddingLeft: 20 }}>
      {points.map((p, i) => (
        <li key={i} style={{ fontSize: 14, color: '#1a1a1a', lineHeight: 1.8, marginBottom: 2 }}>{p}</li>
      ))}
    </ul>
  </div>
);

const MnemonicBox = ({ word, letters, meanings, theme }) => (
  <div style={{
    background: '#F5F3FF',
    border: '2px dashed #7C3AED',
    borderRadius: 12,
    padding: '16px 20px',
    margin: '16px 0',
    textAlign: 'center',
  }}>
    <div style={{ fontSize: 11, fontWeight: 700, color: '#5B21B6', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>🧠 Memory Aid</div>
    <div style={{ fontSize: 28, fontWeight: 800, color: theme.pill || '#7C3AED', letterSpacing: 8, marginBottom: 12 }}>{word}</div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
      {letters.map((l, i) => (
        <div key={i} style={{ background: 'white', border: `2px solid ${theme.pill || '#7C3AED'}`, borderRadius: 8, padding: '8px 14px', minWidth: 80 }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: theme.pill || '#7C3AED' }}>{l}</div>
          <div style={{ fontSize: 11, color: '#4B5563', marginTop: 2 }}>{meanings[i]}</div>
        </div>
      ))}
    </div>
  </div>
);

const CompareTable = ({ headers, rows, theme }) => (
  <div style={{ overflowX: 'auto', margin: '16px 0', borderRadius: 10, border: `1.5px solid ${theme.border}` }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
      <thead>
        <tr style={{ background: theme.bg }}>
          {headers.map((h, i) => (
            <th key={i} style={{ padding: '10px 14px', textAlign: 'left', color: theme.accent, fontWeight: 700, borderBottom: `1.5px solid ${theme.border}`, borderRight: i < headers.length - 1 ? `1px solid ${theme.border}` : 'none' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ background: i % 2 === 0 ? 'white' : theme.light }}>
            {row.map((cell, j) => (
              <td key={j} style={{ padding: '9px 14px', color: '#1a1a1a', borderBottom: `1px solid ${theme.badge}`, borderRight: j < row.length - 1 ? `1px solid ${theme.badge}` : 'none', verticalAlign: 'top' }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SectionHeading = ({ number, title, theme }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '32px 0 14px' }}>
    <div style={{ background: theme.pill, color: 'white', borderRadius: 8, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{number}</div>
    <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: theme.accent, borderBottom: `2px solid ${theme.badge}`, paddingBottom: 4, flex: 1 }}>{title}</h3>
  </div>
);

const SubBox = ({ letter, title, content, example, theme }) => (
  <div style={{ background: 'white', border: `1px solid ${theme.border}`, borderRadius: 10, padding: '12px 16px', margin: '8px 0' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
      <div style={{ background: theme.badge, color: theme.badgeText, borderRadius: 6, width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{letter}</div>
      <div style={{ fontWeight: 700, fontSize: 14.5, color: theme.accent }}>{title}</div>
    </div>
    <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, marginLeft: 36 }}>{content}</div>
    {example && <div style={{ marginLeft: 36, marginTop: 6, fontSize: 13, color: '#92400E', background: '#FEF9C3', borderRadius: 6, padding: '4px 10px', display: 'inline-block' }}>Example: {example}</div>}
  </div>
);

const RevisionBox = ({ items, theme }) => (
  <div style={{ background: theme.light, border: `2px solid ${theme.border}`, borderRadius: 12, padding: '16px 20px', margin: '20px 0' }}>
    <div style={{ fontSize: 12, fontWeight: 700, color: theme.accent, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>⚡ One-Line Revision</div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8 }}>
      {items.map((item, i) => (
        <div key={i} style={{ background: 'white', border: `1px solid ${theme.badge}`, borderRadius: 7, padding: '6px 12px', fontSize: 13, color: '#1a1a1a' }}>
          <span style={{ color: theme.pill, fontWeight: 700 }}>→ </span>{item}
        </div>
      ))}
    </div>
  </div>
);

const ImportantBox = ({ children, theme }) => (
  <div style={{ background: '#FFF7ED', border: '2px solid #EA580C', borderRadius: 10, padding: '12px 18px', margin: '16px 0' }}>
    <div style={{ fontSize: 12, fontWeight: 700, color: '#9A3412', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>⭐ Important for Exam</div>
    <div style={{ fontSize: 14, color: '#431407', lineHeight: 1.6 }}>{children}</div>
  </div>
);

const FlowDiagram = ({ steps, theme }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6, margin: '16px 0', justifyContent: 'center' }}>
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <div style={{ background: theme.badge, border: `1.5px solid ${theme.border}`, borderRadius: 8, padding: '8px 14px', fontSize: 13, fontWeight: 600, color: theme.badgeText, textAlign: 'center', minWidth: 90 }}>{step}</div>
        {i < steps.length - 1 && <span style={{ color: theme.border, fontSize: 18, fontWeight: 700 }}>→</span>}
      </React.Fragment>
    ))}
  </div>
);

const ExamTable = ({ data, theme }) => (
  <div style={{ overflowX: 'auto', margin: '16px 0', borderRadius: 10, border: `1.5px solid ${theme.border}` }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
      <thead>
        <tr style={{ background: theme.pill }}>
          <th style={{ padding: '10px 12px', textAlign: 'left', color: 'white', fontWeight: 700, borderRight: '1px solid rgba(255,255,255,0.3)', width: 40 }}>No.</th>
          <th style={{ padding: '10px 12px', textAlign: 'left', color: 'white', fontWeight: 700, borderRight: '1px solid rgba(255,255,255,0.3)' }}>Clubbed Questions</th>
          <th style={{ padding: '10px 12px', textAlign: 'center', color: 'white', fontWeight: 700, borderRight: '1px solid rgba(255,255,255,0.3)', width: 70 }}>Rep.</th>
          <th style={{ padding: '10px 12px', textAlign: 'center', color: 'white', fontWeight: 700, borderRight: '1px solid rgba(255,255,255,0.3)', width: 70 }}>Marks</th>
          <th style={{ padding: '10px 12px', textAlign: 'left', color: 'white', fontWeight: 700 }}>Key Answer Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={row.id} style={{ background: i % 2 === 0 ? 'white' : theme.light }}>
            <td style={{ padding: '9px 12px', fontWeight: 700, color: theme.accent, borderBottom: `1px solid ${theme.badge}`, borderRight: `1px solid ${theme.badge}`, textAlign: 'center' }}>{row.id}</td>
            <td style={{ padding: '9px 12px', color: '#1a1a1a', borderBottom: `1px solid ${theme.badge}`, borderRight: `1px solid ${theme.badge}`, lineHeight: 1.6 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                <span>{row.clubbed}</span>
                <a href={`https://www.google.com/search?q=${encodeURIComponent(row.clubbed)}`} target="_blank" rel="noopener noreferrer" style={{ color: theme.pill, flexShrink: 0, padding: '2px 6px', border: `1px solid ${theme.badge}`, borderRadius: 5, fontSize: 11, textDecoration: 'none', background: theme.light }}>🔍</a>
              </div>
            </td>
            <td style={{ padding: '9px 12px', color: '#1a1a1a', borderBottom: `1px solid ${theme.badge}`, borderRight: `1px solid ${theme.badge}`, textAlign: 'center' }}>
              {row.rep >= 3 ? <span style={{ background: '#FEE2E2', color: '#991B1B', borderRadius: 12, padding: '2px 8px', fontWeight: 700, fontSize: 12 }}>{row.rep}×</span>
                : row.rep >= 2 ? <span style={{ background: '#FEF3C7', color: '#92400E', borderRadius: 12, padding: '2px 8px', fontWeight: 700, fontSize: 12 }}>{row.rep}×</span>
                : <span style={{ color: '#6B7280', fontSize: 13 }}>{row.rep}×</span>}
            </td>
            <td style={{ padding: '9px 12px', color: theme.accent, fontWeight: 600, borderBottom: `1px solid ${theme.badge}`, borderRight: `1px solid ${theme.badge}`, textAlign: 'center' }}>{row.marks}</td>
            <td style={{ padding: '9px 12px', color: '#374151', borderBottom: `1px solid ${theme.badge}`, lineHeight: 1.6 }}>{row.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SectionDivider = ({ theme }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '36px 0 28px' }}>
    <div style={{ height: 2, flex: 1, background: theme.badge }} />
    <div style={{ background: theme.pill, color: 'white', borderRadius: 20, padding: '4px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>STUDY NOTES</div>
    <div style={{ height: 2, flex: 1, background: theme.badge }} />
  </div>
);

// ============================
// UNIT 1 CONTENT
// ============================
const Unit1Content = ({ theme }) => (
  <div>
    <ExamTable data={previousQuestions.unit1} theme={theme} />
    <SectionDivider theme={theme} />

    <SectionHeading number="1" title="Meaning of Marketing" theme={theme} />
    <DefinitionBox
      term="American Marketing Association:"
      definition="Marketing is the activity, set of institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society."
      theme={theme}
    />
    <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '8px 0' }}>Marketing is not only selling. It begins before production and continues after sale through customer satisfaction.</p>
    <ExampleBox>A smartphone company studies customer demand for better battery life, creates a phone with 6000mAh battery, promotes it, sells it, and provides after-sales service.</ExampleBox>

    <SectionHeading number="2" title="Core Concepts of Marketing" theme={theme} />
    <CompareTable theme={theme} headers={["Concept", "Meaning", "Example"]} rows={[
      ["Needs", "Basic human requirements", "Food, clothing, shelter"],
      ["Wants", "Need shaped by culture/personality", "Pizza instead of food"],
      ["Demand", "Wants backed by purchasing power", "Buying iPhone"],
      ["Product", "Anything offered to satisfy need", "Phone, service"],
      ["Value", "Benefit compared to cost", "Good quality at fair price"],
      ["Exchange", "Getting desired object by offering something", "Money for goods"],
      ["Market", "Buyers with needs and money", "Car market"],
      ["Satisfaction", "Performance vs expectation", "Happy customer after purchase"]
    ]} />

    <SectionHeading number="3" title="Evolution / Philosophies of Marketing Concept" theme={theme} />
    <FlowDiagram steps={["Production", "Product", "Selling", "Marketing", "Societal"]} theme={theme} />

    <SubBox letter="A" title="Production Concept" content="Consumers prefer products that are widely available and affordable. Focus: Mass production, Low cost, Efficiency." example="Low-cost notebooks sold in bulk. Suitable When: Demand > Supply." theme={theme} />
    <SubBox letter="B" title="Product Concept" content="Consumers prefer products with best quality, performance, features. Focus: Continuous improvement, Innovation, Better design. Limitation: Can lead to marketing myopia." example="Premium cameras with advanced lenses." theme={theme} />
    <SubBox letter="C" title="Selling Concept" content="Consumers will not buy enough unless promoted aggressively. Focus: Heavy advertising, Sales push, Persuasion." example="Insurance telemarketing, door-to-door sales." theme={theme} />
    <SubBox letter="D" title="Marketing Concept" content="Company should identify customer needs and satisfy them better than competitors. Focus: Customer orientation, Integrated effort, Profit through satisfaction." example="Restaurant adding healthy menu after customer demand." theme={theme} />
    <SubBox letter="E" title="Societal Marketing Concept" content="Company should satisfy customer needs and protect long-term social welfare. Three Considerations: Profit + Customer wants + Society welfare." example="Eco-friendly packaging, electric vehicles, sugar-free products." theme={theme} />

    <SectionHeading number="4" title="Difference: Selling Concept vs Marketing Concept" theme={theme} />
    <CompareTable theme={theme} headers={["Basis", "Selling Concept", "Marketing Concept"]} rows={[
      ["Starting Point", "Factory", "Target Market"],
      ["Focus", "Existing product", "Customer needs"],
      ["Means", "Selling & promotion", "Integrated marketing"],
      ["End Goal", "Profit through sales volume", "Profit through satisfaction"],
      ["Approach", "Inside-out", "Outside-in"]
    ]} />

    <SectionHeading number="5" title="Difference: Production Concept vs Product Concept" theme={theme} />
    <CompareTable theme={theme} headers={["Basis", "Production Concept", "Product Concept"]} rows={[
      ["Customer Preference", "Cheap & available", "High quality & features"],
      ["Focus", "Efficiency", "Product excellence"],
      ["Strategy", "Mass production", "Improvement & innovation"],
      ["Example", "Low-cost pen", "Premium pen"]
    ]} />

    <SectionHeading number="6" title="Holistic Marketing Concept" theme={theme} />
    <DefinitionBox definition="Holistic marketing means everything matters in marketing and all business activities must work together." theme={theme} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 10, margin: '14px 0' }}>
      {[
        { letter: 'R', title: 'Relationship Marketing', desc: 'Long-term relations with customers, suppliers, dealers, employees.', eg: 'Loyalty reward program' },
        { letter: 'I', title: 'Integrated Marketing', desc: 'All marketing tools give one consistent message.', eg: 'TV ad + Instagram + Packaging = "Healthy & Fresh"' },
        { letter: 'I', title: 'Internal Marketing', desc: 'Employees understand and support company goals.', eg: 'Staff training in hotel' },
        { letter: 'P', title: 'Performance Marketing', desc: 'Measures financial and social results.', eg: 'Sales growth + customer satisfaction + environment' },
      ].map((item, i) => (
        <div key={i} style={{ background: theme.light, border: `1.5px solid ${theme.border}`, borderRadius: 10, padding: '12px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div style={{ background: theme.pill, color: 'white', borderRadius: 6, width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13 }}>{item.letter}</div>
            <div style={{ fontWeight: 700, fontSize: 13, color: theme.accent }}>{item.title}</div>
          </div>
          <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{item.desc}</div>
          <div style={{ marginTop: 6, fontSize: 12, color: '#92400E', background: '#FEF9C3', borderRadius: 5, padding: '3px 8px', display: 'inline-block' }}>e.g. {item.eg}</div>
        </div>
      ))}
    </div>

    <SectionHeading number="7" title="Marketing Mix (4Ps)" theme={theme} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 10, margin: '14px 0' }}>
      {[
        { p: 'Product', color: '#7C3AED', light: '#F5F3FF', desc: 'Design, quality, features, packaging, brand', eg: 'Smartphone with strong battery' },
        { p: 'Price', color: '#059669', light: '#ECFDF5', desc: 'Premium, discount, penetration pricing', eg: 'Introductory discount' },
        { p: 'Place', color: '#DC2626', light: '#FFF5F5', desc: 'Retailers, wholesalers, online stores, logistics', eg: 'Selling through Amazon + local shops' },
        { p: 'Promotion', color: '#D97706', light: '#FFFBEB', desc: 'Advertising, sales promotion, personal selling, PR', eg: 'Festival discount campaign' },
      ].map((item, i) => (
        <div key={i} style={{ background: item.light, border: `2px solid ${item.color}`, borderRadius: 10, padding: '14px 16px' }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: item.color, marginBottom: 6 }}>P</div>
          <div style={{ fontWeight: 700, fontSize: 15, color: item.color, marginBottom: 6 }}>{item.p}</div>
          <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.5, marginBottom: 8 }}>{item.desc}</div>
          <div style={{ fontSize: 12, color: '#78350F', background: '#FEF9C3', borderRadius: 5, padding: '3px 8px' }}>e.g. {item.eg}</div>
        </div>
      ))}
    </div>

    <SectionHeading number="8" title="Product-Market Matrix (Ansoff Matrix)" theme={theme} />
    <CompareTable theme={theme} headers={["", "Existing Market", "New Market"]} rows={[
      ["Existing Product", "Market Penetration — sell more in same market. e.g. More ads for existing soap.", "Market Development — enter new markets. e.g. Selling in another state."],
      ["New Product", "Product Development — new product for current customers. e.g. New flavor chips.", "Diversification — new product in new market. e.g. Electronics company entering food business."]
    ]} />

    <SectionHeading number="9" title="Marketing Environment" theme={theme} />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '14px 0' }}>
      <div style={{ background: '#EDE9FE', border: '1.5px solid #7C3AED', borderRadius: 10, padding: '14px 16px' }}>
        <div style={{ fontWeight: 700, color: '#5B21B6', marginBottom: 8, fontSize: 14 }}>🔵 Micro Environment</div>
        <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7 }}>Forces close to company:<br />Company, Suppliers, Intermediaries, Competitors, Customers, Publics</div>
        <div style={{ marginTop: 8, fontSize: 12, color: '#78350F', background: '#FEF9C3', borderRadius: 5, padding: '3px 8px' }}>e.g. Supplier delays = production suffers</div>
      </div>
      <div style={{ background: '#DBEAFE', border: '1.5px solid #2563EB', borderRadius: 10, padding: '14px 16px' }}>
        <div style={{ fontWeight: 700, color: '#1E3A8A', marginBottom: 8, fontSize: 14 }}>🌐 Macro Environment</div>
        <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7 }}>Larger forces:<br />Demographic, Economic, Natural, Technological, Political/Legal, Cultural</div>
        <div style={{ marginTop: 8, fontSize: 12, color: '#78350F', background: '#FEF9C3', borderRadius: 5, padding: '3px 8px' }}>e.g. Inflation lowers luxury purchases</div>
      </div>
    </div>

    <SectionHeading number="10" title="Answer Writing Structure" theme={theme} />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '14px 0' }}>
      <div style={{ background: theme.light, border: `1.5px solid ${theme.border}`, borderRadius: 10, padding: '14px 16px' }}>
        <div style={{ fontWeight: 700, color: theme.accent, marginBottom: 8, fontSize: 14 }}>3/7-Mark Format</div>
        {['Definition', 'Main points/headings', 'Explanation of each', 'Example', 'Conclusion'].map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#374151', marginBottom: 4 }}>
            <span style={{ color: theme.pill, fontWeight: 700 }}>{i + 1}.</span>{s}
          </div>
        ))}
      </div>
      <div style={{ background: theme.light, border: `1.5px solid ${theme.border}`, borderRadius: 10, padding: '14px 16px' }}>
        <div style={{ fontWeight: 700, color: theme.accent, marginBottom: 8, fontSize: 14 }}>10-Mark Format</div>
        {['Meaning / Definition', 'Features / Components', 'Diagram/Table if possible', 'Example', 'Advantages / Importance', 'Conclusion'].map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#374151', marginBottom: 4 }}>
            <span style={{ color: theme.pill, fontWeight: 700 }}>{i + 1}.</span>{s}
          </div>
        ))}
      </div>
    </div>

    <RevisionBox theme={theme} items={[
      'Production = low cost', 'Product = quality', 'Selling = push selling', 'Marketing = customer need',
      'Societal = customer + society', 'Holistic = everything matters', '4Ps = Product Price Place Promotion',
      'Environment = Micro + Macro', 'Ansoff = Penetration, Development, Diversification'
    ]} />
  </div>
);

// ============================
// UNIT 2 CONTENT
// ============================
const Unit2Content = ({ theme }) => (
  <div>
    <ExamTable data={previousQuestions.unit2} theme={theme} />
    <SectionDivider theme={theme} />

    <SectionHeading number="1" title="Consumer Behaviour — Meaning" theme={theme} />
    <DefinitionBox definition="Consumer behaviour is the study of how individuals, groups, or organizations select, buy, use, and dispose of goods, services, ideas, or experiences to satisfy their needs and wants." theme={theme} />
    <ExampleBox>A student compares laptops online, checks reviews, price, battery life, then buys one.</ExampleBox>

    <SectionHeading number="2" title="Factors Influencing Consumer Buying Behaviour" theme={theme} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 10, margin: '14px 0' }}>
      {[
        { letter: 'C', title: 'Cultural Factors', items: ['Culture', 'Subculture', 'Social class'], eg: 'Festive clothing demand during Diwali/Eid', color: '#7C3AED', light: '#F5F3FF' },
        { letter: 'S', title: 'Social Factors', items: ['Family', 'Friends', 'Reference groups', 'Role & status'], eg: 'Student buys shoes recommended by friends', color: '#059669', light: '#ECFDF5' },
        { letter: 'P', title: 'Personal Factors', items: ['Age', 'Occupation', 'Income', 'Lifestyle', 'Personality'], eg: 'Working professionals buy premium watches', color: '#DC2626', light: '#FFF5F5' },
        { letter: 'P', title: 'Psychological Factors', items: ['Motivation', 'Perception', 'Learning', 'Beliefs', 'Attitudes'], eg: 'Person buys herbal toothpaste for safety belief', color: '#D97706', light: '#FFFBEB' },
      ].map((item, i) => (
        <div key={i} style={{ background: item.light, border: `2px solid ${item.color}`, borderRadius: 10, padding: '12px 14px' }}>
          <div style={{ background: item.color, color: 'white', borderRadius: 7, width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, marginBottom: 8 }}>{item.letter}</div>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: item.color, marginBottom: 6 }}>{item.title}</div>
          <ul style={{ margin: 0, paddingLeft: 16 }}>
            {item.items.map((it, j) => <li key={j} style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.6 }}>{it}</li>)}
          </ul>
          <div style={{ marginTop: 8, fontSize: 11.5, color: '#78350F', background: '#FEF9C3', borderRadius: 5, padding: '3px 8px' }}>e.g. {item.eg}</div>
        </div>
      ))}
    </div>

    <SectionHeading number="3" title="Five Stages of Consumer Buying Decision Process" theme={theme} />
    <ImportantBox theme={theme}>Very important — appears frequently in 10-mark questions.</ImportantBox>
    <FlowDiagram steps={['Need Recognition', 'Information Search', 'Evaluation of Alternatives', 'Purchase Decision', 'Post-Purchase Behaviour']} theme={theme} />
    {[
      { n: '1', title: 'Need Recognition', body: 'Buyer realizes a need or problem.', eg: 'Phone battery stops working.' },
      { n: '2', title: 'Information Search', body: 'Buyer collects information. Sources: Personal (friends), Commercial (ads, websites), Public (reviews), Experience.', eg: 'Watching YouTube reviews.' },
      { n: '3', title: 'Evaluation of Alternatives', body: 'Buyer compares options on attributes.', eg: 'Comparing Samsung vs Redmi vs Realme.' },
      { n: '4', title: 'Purchase Decision', body: 'Final choice is made.', eg: 'Buys best value phone.' },
      { n: '5', title: 'Post-Purchase Behaviour', body: 'Buyer evaluates satisfaction after use. If dissatisfied: complaints, returns, negative reviews.', eg: 'Happy customer recommends product.' },
    ].map((s, i) => <SubBox key={i} letter={s.n} title={s.title} content={s.body} example={s.eg} theme={theme} />)}

    <SectionHeading number="4" title="Black Box Model of Consumer Behaviour" theme={theme} />
    <ImportantBox theme={theme}>Very important — appears in 10-mark questions.</ImportantBox>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, margin: '16px 0', alignItems: 'stretch', justifyContent: 'center' }}>
      <div style={{ background: '#EDE9FE', border: '2px solid #7C3AED', borderRadius: 10, padding: '14px 16px', flex: '1 1 160px', minWidth: 140 }}>
        <div style={{ fontWeight: 700, color: '#5B21B6', marginBottom: 8, fontSize: 13 }}>📥 Inputs (Stimuli)</div>
        <div style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.6 }}><strong>Marketing:</strong> Product, Price, Place, Promotion<br /><strong>Environmental:</strong> Economic, Tech, Political, Cultural</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', fontSize: 22, color: '#7C3AED', fontWeight: 800 }}>→</div>
      <div style={{ background: '#1E1B4B', borderRadius: 10, padding: '14px 16px', flex: '1 1 180px', minWidth: 160 }}>
        <div style={{ fontWeight: 700, color: '#A5B4FC', marginBottom: 8, fontSize: 13 }}>🧠 Buyer's Black Box</div>
        <div style={{ fontSize: 12.5, color: '#C7D2FE', lineHeight: 1.6 }}><strong style={{ color: '#E0E7FF' }}>Buyer Characteristics:</strong> Culture, income, age<br /><br /><strong style={{ color: '#E0E7FF' }}>Decision Process:</strong> Need → Search → Evaluate → Buy</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', fontSize: 22, color: '#7C3AED', fontWeight: 800 }}>→</div>
      <div style={{ background: '#EDE9FE', border: '2px solid #7C3AED', borderRadius: 10, padding: '14px 16px', flex: '1 1 160px', minWidth: 140 }}>
        <div style={{ fontWeight: 700, color: '#5B21B6', marginBottom: 8, fontSize: 13 }}>📤 Outputs (Responses)</div>
        <div style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.6 }}>Product choice<br />Brand choice<br />Dealer choice<br />Purchase timing<br />Quantity bought</div>
      </div>
    </div>

    <SectionHeading number="5" title="Market Segmentation" theme={theme} />
    <DefinitionBox definition="Market segmentation means dividing a large heterogeneous market into smaller homogeneous groups with similar needs, wants or behaviour." theme={theme} />
    <SubBox letter="G" title="Geographic" content="By region, city, climate." example="Raincoats in high rainfall areas." theme={theme} />
    <SubBox letter="D" title="Demographic" content="By age, gender, income, education." example="Kids toys by age group." theme={theme} />
    <SubBox letter="P" title="Psychographic" content="By lifestyle, personality, values." example="Luxury cars for status-conscious buyers." theme={theme} />
    <SubBox letter="B" title="Behavioural" content="By usage, loyalty, benefits sought." example="Heavy internet users buying unlimited data plans." theme={theme} />

    <SectionHeading number="6" title="Criteria for Effective Segmentation" theme={theme} />
    <MnemonicBox word="MASDA" letters={['M', 'A', 'S', 'D', 'A']} meanings={['Measurable', 'Accessible', 'Substantial', 'Differentiable', 'Actionable']} theme={theme} />

    <SectionHeading number="7" title="STP Model of Marketing" theme={theme} />
    <ImportantBox theme={theme}>Appears frequently — both 3-mark and 7-mark questions.</ImportantBox>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, margin: '14px 0' }}>
      {[
        { letter: 'S', title: 'Segmentation', desc: 'Divide market into groups based on shared characteristics.' },
        { letter: 'T', title: 'Targeting', desc: 'Select the most attractive segment(s) to serve.' },
        { letter: 'P', title: 'Positioning', desc: 'Create clear, distinct image in customer mind.' },
      ].map((item, i) => (
        <div key={i} style={{ flex: '1 1 160px', background: theme.light, border: `2px solid ${theme.border}`, borderRadius: 10, padding: '14px 16px' }}>
          <div style={{ background: theme.pill, color: 'white', borderRadius: 8, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{item.letter}</div>
          <div style={{ fontWeight: 700, color: theme.accent, fontSize: 14, marginBottom: 6 }}>{item.title}</div>
          <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{item.desc}</div>
        </div>
      ))}
    </div>
    <ExampleBox>Bike Company — Segmentation: students, office, racers → Targeting: students → Positioning: affordable, stylish, fuel-efficient.</ExampleBox>

    <SectionHeading number="8" title="Marketing Information System (MIS)" theme={theme} />
    <DefinitionBox definition="MIS is a continuous system of people, equipment, procedures and technology to collect, analyze and distribute marketing information for decision making. Right information to right manager at right time." theme={theme} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8, margin: '14px 0' }}>
      {[
        { title: 'Internal Records', desc: 'Sales reports, invoices, stock data.' },
        { title: 'Marketing Intelligence', desc: 'Daily external market info — e.g. competitor price changes.' },
        { title: 'Marketing Research', desc: 'Specific studies for specific problems.' },
        { title: 'Decision Support System', desc: 'Software/tools for analysis and forecasting.' },
      ].map((item, i) => (
        <div key={i} style={{ background: theme.light, border: `1.5px solid ${theme.border}`, borderRadius: 8, padding: '10px 14px' }}>
          <div style={{ fontWeight: 700, color: theme.accent, fontSize: 13, marginBottom: 4 }}>{item.title}</div>
          <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{item.desc}</div>
        </div>
      ))}
    </div>

    <RevisionBox theme={theme} items={[
      'Consumer behaviour = why people buy', '5 stages = Need → Search → Evaluate → Buy → Post-buy',
      'Black box = unseen buyer mind', 'Segmentation = divide market',
      'STP = Segment, Target, Position', 'MASDA = effective segmentation criteria',
      'MIS = regular information system', 'Research = solve specific problem'
    ]} />
  </div>
);

// ============================
// UNIT 3 CONTENT
// ============================
const Unit3Content = ({ theme }) => (
  <div>
    <ExamTable data={previousQuestions.unit3} theme={theme} />
    <SectionDivider theme={theme} />

    <SectionHeading number="1" title="Levels of Product (Kotler's 5 Levels)" theme={theme} />
    <ImportantBox theme={theme}>Appears in both 3-mark and 7-mark questions.</ImportantBox>
    <div style={{ position: 'relative', margin: '20px auto', maxWidth: 340, height: 260 }}>
      {[
        { label: 'Potential Product', size: 340, color: '#FEE2E2', border: '#DC2626', text: '#991B1B', desc: 'Future innovations' },
        { label: 'Augmented Product', size: 270, color: '#FECACA', border: '#DC2626', text: '#991B1B', desc: 'Extra benefits' },
        { label: 'Expected Product', size: 200, color: '#FCA5A5', border: '#DC2626', text: '#7F1D1D', desc: 'Minimum expected' },
        { label: 'Basic Product', size: 130, color: '#EF4444', border: '#991B1B', text: 'white', desc: 'Physical item' },
        { label: 'Core Benefit', size: 60, color: '#991B1B', border: '#7F1D1D', text: 'white', desc: '' },
      ].map((item, i) => (
        <div key={i} style={{
          position: 'absolute', borderRadius: '50%',
          width: item.size, height: item.size,
          left: (340 - item.size) / 2, top: (260 - item.size) / 2,
          background: item.color, border: `2px solid ${item.border}`,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
          paddingTop: 6
        }}>
          <div style={{ fontSize: i === 4 ? 8 : 10, fontWeight: 700, color: item.text, textAlign: 'center', lineHeight: 1.2 }}>{item.label}</div>
        </div>
      ))}
    </div>
    <SubBox letter="1" title="Core Benefit" content="Basic need satisfied by product." example="A hotel gives rest and comfort." theme={theme} />
    <SubBox letter="2" title="Basic Product" content="Actual physical item." example="Room, bed, bathroom." theme={theme} />
    <SubBox letter="3" title="Expected Product" content="Minimum expected features." example="Clean room, water, electricity." theme={theme} />
    <SubBox letter="4" title="Augmented Product" content="Extra benefits beyond expectation." example="Free Wi-Fi, breakfast, room service." theme={theme} />
    <SubBox letter="5" title="Potential Product" content="Future improvements and innovations." example="Smart room automation." theme={theme} />

    <SectionHeading number="2" title="Classification of Consumer Products" theme={theme} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 10, margin: '14px 0' }}>
      {[
        { type: 'Convenience', icon: '🛒', desc: 'Frequently purchased with little effort.', eg: 'Soap, bread, toothpaste.' },
        { type: 'Shopping', icon: '🛍️', desc: 'Compared on quality, price, style.', eg: 'Furniture, clothes, mobiles.' },
        { type: 'Specialty', icon: '💎', desc: 'Unique goods with strong brand preference.', eg: 'Luxury cars, premium watches.' },
        { type: 'Unsought', icon: '❓', desc: 'Not normally thought of.', eg: 'Insurance, funeral services.' },
      ].map((item, i) => (
        <div key={i} style={{ background: theme.light, border: `1.5px solid ${theme.border}`, borderRadius: 10, padding: '12px 14px' }}>
          <div style={{ fontSize: 22, marginBottom: 6 }}>{item.icon}</div>
          <div style={{ fontWeight: 700, fontSize: 14, color: theme.accent, marginBottom: 4 }}>{item.type} Goods</div>
          <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.5, marginBottom: 6 }}>{item.desc}</div>
          <div style={{ fontSize: 12, color: '#78350F', background: '#FEF9C3', borderRadius: 5, padding: '3px 8px' }}>e.g. {item.eg}</div>
        </div>
      ))}
    </div>

    <SectionHeading number="3" title="Product Mix Dimensions" theme={theme} />
    <CompareTable theme={theme} headers={["Dimension", "Meaning", "Example"]} rows={[
      ["Width", "Number of product lines", "Soaps, shampoos, tea = 3 lines"],
      ["Length", "Total items in all lines", "All SKUs combined"],
      ["Depth", "Variants of each item", "Shampoo: dry, oily, normal"],
      ["Consistency", "Relatedness of lines", "HUL — all FMCG products"]
    ]} />

    <SectionHeading number="4" title="Product Life Cycle (PLC)" theme={theme} />
    <ImportantBox theme={theme}>Appears frequently — draw the S-curve diagram in exams for extra marks.</ImportantBox>
    <div style={{ margin: '16px 0', background: theme.light, border: `1.5px solid ${theme.border}`, borderRadius: 10, padding: 16 }}>
      <svg viewBox="0 0 500 220" style={{ width: '100%', height: 'auto' }}>
        <defs><marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#6B7280" /></marker></defs>
        <line x1="40" y1="180" x2="480" y2="180" stroke="#6B7280" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="40" y1="185" x2="40" y2="10" stroke="#6B7280" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <text x="260" y="200" textAnchor="middle" fontSize="11" fill="#6B7280">Time →</text>
        <text x="22" y="100" textAnchor="middle" fontSize="11" fill="#6B7280" transform="rotate(-90,22,100)">Sales →</text>
        <path d="M 55 175 C 110 165, 155 90, 235 45 C 295 10, 360 30, 470 155" fill="none" stroke={theme.pill} strokeWidth="3" />
        <line x1="140" y1="15" x2="140" y2="180" stroke="#D1D5DB" strokeDasharray="4,4" strokeWidth="1" />
        <line x1="280" y1="15" x2="280" y2="180" stroke="#D1D5DB" strokeDasharray="4,4" strokeWidth="1" />
        <line x1="390" y1="15" x2="390" y2="180" stroke="#D1D5DB" strokeDasharray="4,4" strokeWidth="1" />
        <rect x="55" y="165" width="85" height="22" rx="4" fill="#FEE2E2" />
        <text x="97" y="180" textAnchor="middle" fontSize="10" fontWeight="700" fill="#991B1B">Introduction</text>
        <rect x="140" y="165" width="85" height="22" rx="4" fill="#D1FAE5" />
        <text x="182" y="180" textAnchor="middle" fontSize="10" fontWeight="700" fill="#065F46">Growth</text>
        <rect x="280" y="165" width="85" height="22" rx="4" fill="#FEF3C7" />
        <text x="322" y="180" textAnchor="middle" fontSize="10" fontWeight="700" fill="#92400E">Maturity</text>
        <rect x="390" y="165" width="75" height="22" rx="4" fill="#F3F4F6" />
        <text x="427" y="180" textAnchor="middle" fontSize="10" fontWeight="700" fill="#374151">Decline</text>
      </svg>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 10, margin: '14px 0' }}>
      {[
        { stage: 'Introduction', color: '#DC2626', light: '#FEE2E2', chars: 'Low sales, high cost, little competition, low profit', strategy: 'Free samples, create awareness, introductory offers' },
        { stage: 'Growth', color: '#059669', light: '#D1FAE5', chars: 'Rapid sales, rising profits, new competitors enter', strategy: 'Improve quality, expand distribution, add variants' },
        { stage: 'Maturity', color: '#D97706', light: '#FEF3C7', chars: 'Peak sales, heavy competition, price pressure', strategy: 'Modify market/product/marketing mix, reposition' },
        { stage: 'Decline', color: '#6B7280', light: '#F3F4F6', chars: 'Falling sales, reduced demand, substitutes rise', strategy: 'Harvest, reposition, or withdraw product' },
      ].map((item, i) => (
        <div key={i} style={{ background: item.light, border: `2px solid ${item.color}`, borderRadius: 10, padding: '12px 14px' }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: item.color, marginBottom: 6 }}>{item.stage}</div>
          <div style={{ fontSize: 12, color: '#374151', lineHeight: 1.5, marginBottom: 8 }}><strong>Characteristics:</strong> {item.chars}</div>
          <div style={{ fontSize: 12, color: '#374151', lineHeight: 1.5 }}><strong>Strategy:</strong> {item.strategy}</div>
        </div>
      ))}
    </div>

    <SectionHeading number="5" title="Strategies to Elongate PLC" theme={theme} />
    <SubBox letter="A" title="Market Modification" content="Find new users or new segments." example="Protein drink marketed to women and seniors." theme={theme} />
    <SubBox letter="B" title="Product Modification" content="Improve quality, features, or design." example="New phone camera upgrade." theme={theme} />
    <SubBox letter="C" title="Marketing Mix Modification" content="Change price, promotion, or channels." example="Festival discounts." theme={theme} />
    <SubBox letter="D" title="Repositioning" content="Change product image to attract new segment." example="Soap repositioned as herbal soap." theme={theme} />

    <SectionHeading number="6" title="New Product Development (NPD)" theme={theme} />
    <FlowDiagram steps={['Idea Generation', 'Idea Screening', 'Concept Testing', 'Marketing Strategy', 'Business Analysis', 'Product Development', 'Test Marketing', 'Commercialization']} theme={theme} />

    <SectionHeading number="7" title="Branding" theme={theme} />
    <DefinitionBox definition="A brand is a name, symbol, sign, design or combination used to identify and differentiate a seller's product." theme={theme} />
    <KeyPointBox theme={theme} title="Branding Decisions" points={['Brand Sponsor — Manufacturer brand or private brand', 'Brand Name Selection — Easy to pronounce and remember', 'Brand Strategy — Extension, multibrand etc.', 'Repositioning — Change old image if needed']} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8, margin: '14px 0' }}>
      {[
        { name: 'Line Extension', desc: 'New variants in same category.', eg: 'Different shampoo flavors' },
        { name: 'Brand Extension', desc: 'Existing brand in new category.', eg: 'Dove soap → Dove shampoo' },
        { name: 'Multi-branding', desc: 'Many brands in same category.', eg: "P&G's multiple detergents" },
        { name: 'New Brands', desc: 'New brand for new category.', eg: '' },
        { name: 'Co-branding', desc: 'Two established brands on one product.', eg: 'Visa + SBI card' },
      ].map((item, i) => (
        <div key={i} style={{ background: theme.light, border: `1.5px solid ${theme.border}`, borderRadius: 8, padding: '10px 12px' }}>
          <div style={{ fontWeight: 700, color: theme.accent, fontSize: 13, marginBottom: 4 }}>{item.name}</div>
          <div style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.5 }}>{item.desc}</div>
          {item.eg && <div style={{ marginTop: 5, fontSize: 11.5, color: '#78350F', background: '#FEF9C3', borderRadius: 5, padding: '2px 8px', display: 'inline-block' }}>e.g. {item.eg}</div>}
        </div>
      ))}
    </div>

    <SectionHeading number="8" title="Packaging — The Silent Salesman" theme={theme} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 8, margin: '14px 0' }}>
      {[
        { icon: '🛡️', title: 'Protection', desc: 'Protects from damage' },
        { icon: '🤝', title: 'Convenience', desc: 'Easy to carry and use' },
        { icon: 'ℹ️', title: 'Information', desc: 'Ingredients, usage, expiry' },
        { icon: '📣', title: 'Promotion', desc: 'Attracts customers in store' },
        { icon: '🏷️', title: 'Brand Identity', desc: 'Recognizable appearance' },
      ].map((item, i) => (
        <div key={i} style={{ background: theme.light, border: `1.5px solid ${theme.border}`, borderRadius: 8, padding: '10px 12px', textAlign: 'center' }}>
          <div style={{ fontSize: 22, marginBottom: 6 }}>{item.icon}</div>
          <div style={{ fontWeight: 700, fontSize: 13, color: theme.accent, marginBottom: 4 }}>{item.title}</div>
          <div style={{ fontSize: 12, color: '#374151' }}>{item.desc}</div>
        </div>
      ))}
    </div>

    <SectionHeading number="9" title="Pricing Strategies" theme={theme} />
    <CompareTable theme={theme} headers={["Strategy", "Meaning", "Suitable When", "Example"]} rows={[
      ["Skimming Pricing", "High initial price", "Innovative, premium product, less competition", "New flagship smartphone"],
      ["Penetration Pricing", "Low initial price", "Mass market, high competition, build market share", "Jio launch plans"],
      ["Marginal Cost Pricing", "Price based on variable cost of extra unit", "Excess capacity, special orders", "Factory sells extra stock cheap"]
    ]} />

    <RevisionBox theme={theme} items={[
      'Product satisfies need', '5 levels Core to Potential', 'PLC = Intro Growth Maturity Decline',
      'NPD = Idea to Commercialization', 'Brand = identity', 'Equity = added value',
      'Packaging = protection + promotion', 'Skimming = high launch price', 'Penetration = low launch price'
    ]} />
  </div>
);

// ============================
// UNIT 4 CONTENT
// ============================
const Unit4Content = ({ theme }) => (
  <div>
    <ExamTable data={previousQuestions.unit4} theme={theme} />
    <SectionDivider theme={theme} />

    <SectionHeading number="1" title="Channel of Distribution" theme={theme} />
    <DefinitionBox definition="A channel of distribution is the route or path through which goods move from producer to final consumer." theme={theme} />
    <FlowDiagram steps={['Factory', 'Wholesaler', 'Retailer', 'Consumer']} theme={theme} />

    <SectionHeading number="2" title="Distribution Strategies" theme={theme} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 10, margin: '14px 0' }}>
      {[
        { type: 'Intensive', icon: '🌐', color: '#059669', light: '#ECFDF5', desc: 'Product available in maximum outlets.', suitable: 'FMCG products', eg: 'Soap, chips, soft drinks' },
        { type: 'Selective', icon: '🎯', color: '#D97706', light: '#FFFBEB', desc: 'Selected dealers in chosen locations.', suitable: 'Electronics, Apparel', eg: 'TVs through authorized stores' },
        { type: 'Exclusive', icon: '💎', color: '#7C3AED', light: '#F5F3FF', desc: 'Only one/few dealers in an area.', suitable: 'Luxury goods, Premium autos', eg: 'Luxury car dealerships' },
      ].map((item, i) => (
        <div key={i} style={{ background: item.light, border: `2px solid ${item.color}`, borderRadius: 10, padding: '14px 16px' }}>
          <div style={{ fontSize: 22, marginBottom: 6 }}>{item.icon}</div>
          <div style={{ fontWeight: 700, fontSize: 14.5, color: item.color, marginBottom: 6 }}>{item.type}</div>
          <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.5, marginBottom: 6 }}>{item.desc}</div>
          <div style={{ fontSize: 12, color: item.color, fontWeight: 600, marginBottom: 4 }}>Suitable: {item.suitable}</div>
          <div style={{ fontSize: 12, color: '#78350F', background: '#FEF9C3', borderRadius: 5, padding: '3px 8px' }}>e.g. {item.eg}</div>
        </div>
      ))}
    </div>

    <SectionHeading number="3" title="Factors Governing Choice of Channel" theme={theme} />
    <SubBox letter="A" title="Product Factors" content="Perishable goods need short channel. Expensive goods need direct selling. Technical goods need trained sellers." example="Fresh milk uses fast short channel." theme={theme} />
    <SubBox letter="B" title="Market Factors" content="Number of buyers, location of buyers, buying habits." example="Scattered rural buyers need distributors." theme={theme} />
    <SubBox letter="C" title="Company Factors" content="Financial strength, control desired, reputation, experience." example="Large company may open own stores." theme={theme} />
    <SubBox letter="D" title="Middlemen Factors" content="Availability of dealers, efficiency, and cost." theme={theme} />
    <SubBox letter="E" title="Environmental Factors" content="Competition, laws, and economic conditions." theme={theme} />

    <SectionHeading number="4" title="AIDA Model of Advertising" theme={theme} />
    <ImportantBox theme={theme}>Very important — appears frequently in 3-mark questions.</ImportantBox>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, margin: '16px auto', maxWidth: 320 }}>
      {[
        { letter: 'A', label: 'Attention', width: '100%', color: '#7C3AED', light: '#EDE9FE', desc: 'Attractive poster/headline grabs attention' },
        { letter: 'I', label: 'Interest', width: '85%', color: '#2563EB', light: '#DBEAFE', desc: 'Product details create interest' },
        { letter: 'D', label: 'Desire', width: '70%', color: '#059669', light: '#D1FAE5', desc: 'Benefits create desire to own' },
        { letter: 'A', label: 'Action', width: '55%', color: '#D97706', light: '#FEF3C7', desc: 'Offer leads to purchase action' },
      ].map((item, i) => (
        <div key={i} style={{ width: item.width, background: item.color, borderRadius: i === 0 ? '10px 10px 0 0' : i === 3 ? '0 0 10px 10px' : 0, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10, alignSelf: 'center' }}>
          <div style={{ fontWeight: 800, fontSize: 18, color: 'white', minWidth: 28 }}>{item.letter}</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'white' }}>{item.label}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)' }}>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>

    <SectionHeading number="5" title="Integrated Marketing Communication (IMC)" theme={theme} />
    <ImportantBox theme={theme}>Very important — appears in 7-mark and 10-mark questions.</ImportantBox>
    <DefinitionBox definition="IMC means coordinating all communication tools to deliver one clear, consistent and compelling message across all channels." theme={theme} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 8, margin: '14px 0' }}>
      {[
        { icon: '📺', tool: 'Advertising', eg: 'TV, digital ads' },
        { icon: '📰', tool: 'Public Relations', eg: 'Press releases, events' },
        { icon: '📧', tool: 'Direct Marketing', eg: 'Email, SMS' },
        { icon: '🤝', tool: 'Personal Selling', eg: 'Sales team' },
        { icon: '🎁', tool: 'Sales Promotion', eg: 'Coupons, offers' },
        { icon: '📱', tool: 'Social Media', eg: 'Instagram, YouTube' },
      ].map((item, i) => (
        <div key={i} style={{ background: theme.light, border: `1.5px solid ${theme.border}`, borderRadius: 8, padding: '10px 12px', textAlign: 'center' }}>
          <div style={{ fontSize: 20, marginBottom: 5 }}>{item.icon}</div>
          <div style={{ fontWeight: 700, fontSize: 13, color: theme.accent, marginBottom: 3 }}>{item.tool}</div>
          <div style={{ fontSize: 12, color: '#6B7280' }}>{item.eg}</div>
        </div>
      ))}
    </div>
    <ExampleBox>New smartphone launch — TV ad + Instagram reels + influencer review + retail posters + cashback offer + email campaign. All say: "Best camera under ₹20,000".</ExampleBox>

    <SectionHeading number="6" title="Sales Promotion Methods" theme={theme} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, margin: '14px 0' }}>
      {[
        { type: 'Consumer Promotions', color: '#059669', items: ['Coupons', 'Discounts', 'Free samples', 'Cashback', 'Contests', 'Loyalty points'] },
        { type: 'Trade Promotions', color: '#D97706', items: ['Dealer discounts', 'Display allowance', 'Free stock', 'Trade shows'] },
        { type: 'Business Promotions', color: '#7C3AED', items: ['Trade fairs', 'Exhibitions', 'Business gifts', 'Conferences'] },
      ].map((item, i) => (
        <div key={i} style={{ background: '#F9FAFB', border: `2px solid ${item.color}`, borderRadius: 10, padding: '12px 14px' }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: item.color, marginBottom: 8 }}>{item.type}</div>
          {item.items.map((it, j) => <div key={j} style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.7 }}>• {it}</div>)}
        </div>
      ))}
    </div>

    <SectionHeading number="7" title="Push vs Pull Strategy" theme={theme} />
    <CompareTable theme={theme} headers={["Basis", "Push Strategy", "Pull Strategy"]} rows={[
      ["Target", "Channel members / dealers", "Final consumers"],
      ["Method", "Trade incentives, dealer discounts", "Advertising, consumer promotions"],
      ["Goal", "Move stock through channel", "Create consumer demand"],
      ["Example", "Dealer incentive on refrigerators", "TV ad creates chocolate demand"]
    ]} />

    <SectionHeading number="8" title="Direct Marketing vs Publicity" theme={theme} />
    <CompareTable theme={theme} headers={["Basis", "Direct Marketing", "Publicity"]} rows={[
      ["Meaning", "Direct contact with targeted consumers", "Non-paid media coverage"],
      ["Cost", "Paid (moderate)", "Free / Unpaid"],
      ["Control", "Full control over message", "Limited control"],
      ["Credibility", "Moderate", "High (trusted source)"],
      ["Example", "Email coupon to users", "News article about product launch"]
    ]} />

    <RevisionBox theme={theme} items={[
      'Channel = path to customer', 'Intensive = everywhere', 'Selective = few outlets',
      'Exclusive = one/few dealers', 'AIDA = Attention Interest Desire Action',
      'Direct marketing = direct response', 'Publicity = unpaid media',
      'Sales promotion = short-term incentive', 'Push = target dealers',
      'Pull = target consumers', 'IMC = one clear message everywhere'
    ]} />
  </div>
);

// ============================
// UNIT 5 CONTENT
// ============================
const Unit5Content = ({ theme }) => (
  <div>
    <ExamTable data={previousQuestions.unit5} theme={theme} />
    <SectionDivider theme={theme} />

    <SectionHeading number="1" title="Rural Marketing" theme={theme} />
    <DefinitionBox definition="Rural marketing means planning, pricing, promoting and distributing goods and services in rural areas, and also marketing rural products to urban markets." theme={theme} />

    <SectionHeading number="2" title="4A's of Rural Marketing" theme={theme} />
    <MnemonicBox word="4 A's" letters={['A', 'A', 'A', 'A']} meanings={['Affordability', 'Availability', 'Acceptability', 'Awareness']} theme={theme} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8, margin: '14px 0' }}>
      {[
        { a: 'Affordability', desc: 'Low-price packs, sachets.', eg: 'Shampoo sachet ₹1' },
        { a: 'Availability', desc: 'Products must physically reach villages.', eg: 'Mobile vans, kirana stores' },
        { a: 'Acceptability', desc: 'Product should suit rural needs and culture.', eg: 'Vernacular language label' },
        { a: 'Awareness', desc: 'Use local language and media for promotion.', eg: 'Wall paintings, mela ads' },
      ].map((item, i) => (
        <div key={i} style={{ background: theme.light, border: `1.5px solid ${theme.border}`, borderRadius: 8, padding: '10px 14px' }}>
          <div style={{ background: theme.pill, color: 'white', borderRadius: 6, width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, marginBottom: 6 }}>A</div>
          <div style={{ fontWeight: 700, color: theme.accent, fontSize: 13, marginBottom: 4 }}>{item.a}</div>
          <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.5, marginBottom: 5 }}>{item.desc}</div>
          <div style={{ fontSize: 12, color: '#78350F', background: '#FEF9C3', borderRadius: 5, padding: '2px 8px', display: 'inline-block' }}>e.g. {item.eg}</div>
        </div>
      ))}
    </div>

    <SectionHeading number="3" title="Rural Marketing Strategies" theme={theme} />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '14px 0' }}>
      <div style={{ background: theme.light, border: `1.5px solid ${theme.border}`, borderRadius: 10, padding: '14px 16px' }}>
        <div style={{ fontWeight: 700, color: theme.accent, marginBottom: 8, fontSize: 14 }}>📢 Promotion Strategies</div>
        {['Folk media', 'Loudspeaker campaigns', 'Wall posters', 'Regional language ads', 'Demonstration camps', 'Local events sponsorship', 'Radio ads'].map((s, i) => (
          <div key={i} style={{ fontSize: 13, color: '#374151', lineHeight: 1.8 }}>• {s}</div>
        ))}
      </div>
      <div style={{ background: theme.light, border: `1.5px solid ${theme.border}`, borderRadius: 10, padding: '14px 16px' }}>
        <div style={{ fontWeight: 700, color: theme.accent, marginBottom: 8, fontSize: 14 }}>🚚 Distribution Strategies</div>
        {['Village retailers', 'Cooperative societies', 'Rural stockists', 'Company delivery vans', 'E-commerce expansion', 'Haats and melas'].map((s, i) => (
          <div key={i} style={{ fontSize: 13, color: '#374151', lineHeight: 1.8 }}>• {s}</div>
        ))}
      </div>
    </div>

    <SectionHeading number="4" title="Agricultural Marketing" theme={theme} />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '14px 0' }}>
      <div style={{ background: '#D1FAE5', border: '1.5px solid #059669', borderRadius: 10, padding: '14px 16px' }}>
        <div style={{ fontWeight: 700, color: '#065F46', marginBottom: 8, fontSize: 14 }}>✅ Opportunities</div>
        {['Food processing industry', 'Export demand', 'Organic farming market', 'Cold storage growth', 'Online mandi platforms'].map((s, i) => (
          <div key={i} style={{ fontSize: 13, color: '#374151', lineHeight: 1.8 }}>• {s}</div>
        ))}
      </div>
      <div style={{ background: '#FEE2E2', border: '1.5px solid #DC2626', borderRadius: 10, padding: '14px 16px' }}>
        <div style={{ fontWeight: 700, color: '#991B1B', marginBottom: 8, fontSize: 14 }}>⚠️ Challenges</div>
        {['Middlemen exploitation', 'Poor roads/transport', 'Lack of storage', 'Price fluctuation', 'Lack of market information'].map((s, i) => (
          <div key={i} style={{ fontSize: 13, color: '#374151', lineHeight: 1.8 }}>• {s}</div>
        ))}
      </div>
    </div>

    <SectionHeading number="5" title="Digital Marketing" theme={theme} />
    <DefinitionBox definition="Digital marketing means promoting products and services using internet-connected digital channels." theme={theme} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 8, margin: '14px 0' }}>
      {[
        { icon: '🔍', name: 'SEO', desc: 'Search Engine Optimization' },
        { icon: '📱', name: 'Social Media', desc: 'Instagram, Facebook, YouTube' },
        { icon: '📝', name: 'Content Marketing', desc: 'Blogs, videos, guides' },
        { icon: '📧', name: 'Email Marketing', desc: 'Offers and newsletters' },
        { icon: '💰', name: 'PPC Advertising', desc: 'Pay per click ads' },
        { icon: '🌟', name: 'Influencer Marketing', desc: 'Creator promotions' },
      ].map((item, i) => (
        <div key={i} style={{ background: theme.light, border: `1.5px solid ${theme.border}`, borderRadius: 8, padding: '10px 12px', textAlign: 'center' }}>
          <div style={{ fontSize: 20, marginBottom: 5 }}>{item.icon}</div>
          <div style={{ fontWeight: 700, fontSize: 13, color: theme.accent, marginBottom: 3 }}>{item.name}</div>
          <div style={{ fontSize: 12, color: '#6B7280' }}>{item.desc}</div>
        </div>
      ))}
    </div>

    <SectionHeading number="6" title="International Marketing — Modes of Entry" theme={theme} />
    <ImportantBox theme={theme}>Very important — appears in 10-mark questions.</ImportantBox>
    <FlowDiagram steps={['Exporting', 'Licensing', 'Franchising', 'Joint Venture', 'FDI']} theme={theme} />
    <SubBox letter="1" title="Exporting" content="Selling products to foreign countries. Simplest entry mode." example="Rice export from India." theme={theme} />
    <SubBox letter="2" title="Licensing" content="Allow foreign company to use brand/patent for a fee." theme={theme} />
    <SubBox letter="3" title="Franchising" content="Business model shared with foreign partner." example="McDonald's outlets." theme={theme} />
    <SubBox letter="4" title="Joint Venture" content="Two companies jointly invest in foreign market." theme={theme} />
    <SubBox letter="5" title="Direct Investment (FDI)" content="Company sets up own plant abroad. Maximum control, maximum risk." theme={theme} />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '14px 0' }}>
      <div style={{ background: '#D1FAE5', border: '1.5px solid #059669', borderRadius: 10, padding: '14px 16px' }}>
        <div style={{ fontWeight: 700, color: '#065F46', marginBottom: 8, fontSize: 14 }}>✅ Opportunities</div>
        {['Larger market size', 'Increased profits', 'Foreign exchange earnings', 'Risk diversification', 'Global brand image'].map((s, i) => (
          <div key={i} style={{ fontSize: 13, color: '#374151', lineHeight: 1.8 }}>• {s}</div>
        ))}
      </div>
      <div style={{ background: '#FEE2E2', border: '1.5px solid #DC2626', borderRadius: 10, padding: '14px 16px' }}>
        <div style={{ fontWeight: 700, color: '#991B1B', marginBottom: 8, fontSize: 14 }}>⚠️ Challenges</div>
        {['Tariffs & trade barriers', 'Exchange rate risk', 'Cultural differences', 'Legal restrictions', 'Logistics cost'].map((s, i) => (
          <div key={i} style={{ fontSize: 13, color: '#374151', lineHeight: 1.8 }}>• {s}</div>
        ))}
      </div>
    </div>

    <SectionHeading number="7" title="Consumer Rights" theme={theme} />
    <ImportantBox theme={theme}>Appears in 3-mark, 7-mark questions — must memorize all 6 rights.</ImportantBox>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8, margin: '14px 0' }}>
      {[
        { n: '1', right: 'Right to Safety', desc: 'Protection from harmful goods.' },
        { n: '2', right: 'Right to Information', desc: 'Correct details about product/service.' },
        { n: '3', right: 'Right to Choose', desc: 'Access to variety of alternatives.' },
        { n: '4', right: 'Right to be Heard', desc: 'Complaints must be considered.' },
        { n: '5', right: 'Right to Seek Redressal', desc: 'Compensation or legal remedy.' },
        { n: '6', right: 'Right to Consumer Education', desc: "Knowledge of one's own rights." },
      ].map((item, i) => (
        <div key={i} style={{ background: theme.light, border: `2px solid ${theme.border}`, borderRadius: 8, padding: '10px 14px' }}>
          <div style={{ background: theme.pill, color: 'white', borderRadius: 6, width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, marginBottom: 6 }}>{item.n}</div>
          <div style={{ fontWeight: 700, color: theme.accent, fontSize: 13, marginBottom: 4 }}>{item.right}</div>
          <div style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.5 }}>{item.desc}</div>
        </div>
      ))}
    </div>

    <SectionHeading number="8" title="Relationship Marketing & CRM" theme={theme} />
    <DefinitionBox definition="Relationship marketing focuses on building long-term profitable relationships with customers rather than one-time sales. Focus: Trust, Satisfaction, Retention, Loyalty." theme={theme} />
    <CompareTable theme={theme} headers={["Basis", "Relationship Marketing", "Transaction Marketing"]} rows={[
      ["Focus", "Long-term customers", "One-time sale"],
      ["Goal", "Loyalty and retention", "Immediate sales"],
      ["Communication", "Continuous and personalized", "Limited"],
      ["Example", "Airline loyalty miles program", "One-time discount sale"]
    ]} />
    <DefinitionBox term="CRM — Customer Relationship Management" definition="The process of managing customer data and interactions to improve relationships, satisfaction and profits. Activities: customer database, complaint handling, personalized offers, service reminders." theme={theme} />
    <ExampleBox>E-commerce recommends products based on past purchases — that is CRM in action.</ExampleBox>

    <RevisionBox theme={theme} items={[
      'Rural = village market', '4A = Affordability, Availability, Acceptability, Awareness',
      'Digital = online marketing', 'International = cross-border marketing',
      'Exporting = simplest entry mode', 'Consumerism = protection movement',
      '6 Rights = Safety to Education', 'Relationship marketing = loyalty focus', 'CRM = manage customer relations'
    ]} />
  </div>
);

// ============================
// MAIN APP
// ============================
export default function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const units = [
    { id: 1, name: 'Unit I', desc: 'Basics & Environment', icon: '🌍' },
    { id: 2, name: 'Unit II', desc: 'Consumer Behaviour', icon: '🧠' },
    { id: 3, name: 'Unit III', desc: 'Product & Pricing', icon: '📦' },
    { id: 4, name: 'Unit IV', desc: 'Distribution & Promotion', icon: '📣' },
    { id: 5, name: 'Unit V', desc: 'Rural & Special Mktg', icon: '🌾' },
  ];

  const theme = unitThemes[activeTab];

  const renderContent = () => {
    switch (activeTab) {
      case 1: return <Unit1Content theme={theme} />;
      case 2: return <Unit2Content theme={theme} />;
      case 3: return <Unit3Content theme={theme} />;
      case 4: return <Unit4Content theme={theme} />;
      case 5: return <Unit5Content theme={theme} />;
      default: return <Unit1Content theme={theme} />;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#F3F4F6', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', overflow: 'hidden' }}>
      
      {isMobileMenuOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 40 }} onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside style={{
        position: 'fixed', top: 0, left: 0, bottom: 0,
        width: 260, background: '#111827', color: 'white',
        transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease', zIndex: 50,
        display: 'flex', flexDirection: 'column',
        boxShadow: '4px 0 20px rgba(0,0,0,0.3)',
      }} className="lg:relative lg:translate-x-0">
        <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid #374151' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>📚</span> MM Study Notes
              </div>
              <div style={{ fontSize: 11, color: '#9CA3AF', marginTop: 4, letterSpacing: 1, textTransform: 'uppercase' }}>Exam Edition</div>
            </div>
            <button onClick={() => setIsMobileMenuOpen(true)} 
  		className="p-2 -ml-2 mr-3 text-gray-600 hover:bg-gray-200 rounded"><Menu size={24} /></button>        	</div>
        <nav style={{ flex: 1, overflowY: 'auto', padding: '16px 12px' }}>
          {units.map(unit => {
            const t = unitThemes[unit.id];
            const isActive = activeTab === unit.id;
            return (
              <button key={unit.id} onClick={() => { setActiveTab(unit.id); setIsMobileMenuOpen(false); }}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                  padding: '10px 14px', borderRadius: 10, marginBottom: 6,
                  background: isActive ? t.pill : 'transparent',
                  border: isActive ? `1px solid ${t.pill}` : '1px solid transparent',
                  cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s',
                }}>
                <span style={{ fontSize: 18 }}>{unit.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13.5, color: isActive ? 'white' : '#D1D5DB' }}>{unit.name}</div>
                  <div style={{ fontSize: 11.5, color: isActive ? 'rgba(255,255,255,0.8)' : '#6B7280' }}>{unit.desc}</div>
                </div>
              </button>
            );
          })}
        </nav>
        <div style={{ padding: '14px 20px', borderTop: '1px solid #374151', fontSize: 11, color: '#6B7280', textAlign: 'center' }}>
          Marketing Management · BBA/BCom<br />Colour-coded for better recall
        </div>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Mobile Header */}
        <header style={{ background: 'white', borderBottom: `3px solid ${theme.border}`, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, position: 'sticky', top: 0, zIndex: 30 }} className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20 }}>☰</button>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: theme.accent }}>{units.find(u => u.id === activeTab)?.icon} {units.find(u => u.id === activeTab)?.name}</div>
            <div style={{ fontSize: 12, color: '#6B7280' }}>{units.find(u => u.id === activeTab)?.desc}</div>
          </div>
        </header>

        {/* Desktop Unit Header */}
        <div style={{ background: `linear-gradient(135deg, ${theme.pill} 0%, ${theme.accent} 100%)`, padding: '16px 40px', display: 'none', alignItems: 'center', gap: 16 }} className="hidden lg:flex">
          <div style={{ fontSize: 32 }}>{units.find(u => u.id === activeTab)?.icon}</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 20, color: 'white' }}>{units.find(u => u.id === activeTab)?.name} — {units.find(u => u.id === activeTab)?.desc}</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>Marketing Management · Colour-coded textbook format</div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
            {units.map(u => (
              <button key={u.id} onClick={() => setActiveTab(u.id)}
                style={{ background: activeTab === u.id ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 8, padding: '6px 14px', cursor: 'pointer', color: 'white', fontWeight: activeTab === u.id ? 700 : 400, fontSize: 13 }}>
                {u.name}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Content */}
        <main style={{ flex: 1, overflowY: 'auto', padding: '24px 16px 48px', background: '#F3F4F6' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', background: 'white', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
            {/* Unit Banner */}
            <div style={{ background: theme.bg, borderBottom: `3px solid ${theme.border}`, padding: '20px 28px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: theme.accent, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 }}>Previous Exam Questions + Comprehensive Study Notes</div>
              <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: theme.accent }}>{units.find(u => u.id === activeTab)?.name}: {units.find(u => u.id === activeTab)?.desc}</h2>
            </div>
            <div style={{ padding: '24px 28px 40px' }}>
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
