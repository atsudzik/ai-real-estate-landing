export type LanguageCode = "en" | "ru" | "es" | "fr" | "it" | "de";

export type FeatureIconKey = "camera" | "map" | "history" | "forecast";

export type HelpCategory = "bug" | "suggestion" | "help";

export interface Step {
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: FeatureIconKey;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  popular?: boolean;
}

export interface BlogPostPreview {
  title: string;
  category: string;
  excerpt: string;
  href: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface QuickLink {
  label: string;
  href: string;
}

export interface TranslationContent {
  languageName: string;
  languageSelectorLabel: string;
  keywords: string[];
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    home: string;
    howItWorks: string;
    features: string;
    pricing: string;
    faq: string;
    blog: string;
  };
  auth: {
    login: string;
    signUp: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    tagline: string;
    stats: { label: string; value: string }[];
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: Step[];
  };
  features: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  uploadForm: {
    title: string;
    description: string;
    emailLabel: string;
    propertyTypeLabel: string;
    propertyPlaceholder: string;
    propertyOptions: string[];
    fileLabel: string;
    fileHint: string;
    submitLabel: string;
    privacy: string;
    successMessage: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: PricingPlan[];
    footnote: string;
    popularLabel: string;
  };
  blog: {
    title: string;
    subtitle: string;
    viewAll: string;
    readMore: string;
    posts: BlogPostPreview[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: FaqItem[];
    contact: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    quickLinksTitle: string;
    quickLinks: QuickLink[];
    seoText: string;
    rightsTemplate: string;
    socialLabel: string;
  };
  blogPage: {
    heroTitle: string;
    heroSubtitle: string;
    subscribeCta: string;
  };
  helpWidget: {
    label: string;
    form: {
      title: string;
      description: string;
      categoryLabel: string;
      categories: { value: HelpCategory; label: string }[];
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitLabel: string;
      successMessage: string;
    };
  };
}

export const languageOptions: { code: LanguageCode; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
  { code: "de", label: "Deutsch" },
];

export const translations: Record<LanguageCode, TranslationContent> = {
  en: {
    languageName: "English",
    languageSelectorLabel: "Language",
    keywords: [
      "real estate valuation",
      "AI price estimator",
      "property price forecast",
      "apartment price calculator",
      "AI real estate analytics",
    ],
    seo: {
      title: "AI Real Estate Price Estimator | Accurate Apartment Valuations",
      description:
        "Discover instant apartment valuations powered by AI photo analysis, neighborhood comparables, and predictive pricing models.",
      ogTitle: "AI-Powered Apartment Price Estimator",
      ogDescription:
        "Upload photos, analyze renovation quality, explore price history, and forecast your apartment's future value in minutes.",
    },
    nav: {
      home: "Home",
      howItWorks: "How It Works",
      features: "Features",
      pricing: "Pricing",
      faq: "FAQ",
      blog: "Blog",
    },
    auth: {
      login: "Log in",
      signUp: "Sign Up",
    },
    hero: {
      title: "AI-Powered Apartment Price Estimator",
      subtitle:
        "Upload apartment photos and instantly receive data-rich valuations backed by neighborhood trends, renovation scoring, and predictive forecasts.",
      cta: "Get Your Free Estimate",
      tagline: "Trusted by property professionals in 45+ cities",
      stats: [
        { label: "Median error", value: "<4.8%" },
        { label: "Cities covered", value: "120+" },
        { label: "Reports delivered", value: "38k" },
      ],
    },
    howItWorks: {
      title: "How the valuation works",
      subtitle: "Three steps to a precise apartment valuation",
      steps: [
        {
          title: "Upload your apartment photos",
          description:
            "Show the kitchen, living room, bathroom, and facade so our AI can evaluate renovation quality and lighting conditions.",
        },
        {
          title: "Our AI audits every detail",
          description:
            "Computer vision scores finishes, detects upgrades, and compares the home with millions of verified listings and historical deals.",
        },
        {
          title: "Receive value, history, and forecast",
          description:
            "Download a valuation pack with price ranges, comparables, renovation advice, and a 12-month appreciation forecast.",
        },
      ],
    },
    features: {
      title: "Features that level up your pricing",
      subtitle:
        "Everything you need to understand your apartment's market position and future potential.",
      items: [
        {
          title: "AI photo condition scoring",
          description:
            "Detect wear, premium finishes, and renovation potential from high-resolution images in seconds.",
          icon: "camera",
        },
        {
          title: "Neighborhood benchmarking",
          description:
            "Compare performance with verified sales, rentals, and yield data in your micro-market.",
          icon: "map",
        },
        {
          title: "Interactive price history",
          description:
            "Visualize sale and rental prices from the last decade with seasonality and renovation impact filters.",
          icon: "history",
        },
        {
          title: "Future value forecasting",
          description:
            "Predict equity growth using macroeconomic indicators, migration trends, and renovation scenarios.",
          icon: "forecast",
        },
      ],
    },
    uploadForm: {
      title: "Test the demo in 60 seconds",
      description:
        "Upload one room photo and we will email an AI-powered valuation sample tailored to your neighborhood.",
      emailLabel: "Work email",
      propertyTypeLabel: "Property type",
      propertyPlaceholder: "Select property type",
      propertyOptions: ["Apartment", "Loft", "Penthouse", "Studio"],
      fileLabel: "Upload apartment photo",
      fileHint: "JPG or PNG, max 10MB",
      submitLabel: "Send me the sample report",
      privacy: "By submitting you agree to our privacy policy.",
      successMessage: "Thanks! Check your inbox for the sample valuation.",
    },
    pricing: {
      title: "Transparent pricing for every stage",
      subtitle:
        "Start with a free trial and upgrade when you need deeper analytics and collaboration tools.",
      plans: [
        {
          name: "Starter",
          price: "$0",
          period: "/month",
          description: "Perfect for homeowners testing the tool.",
          features: [
            "3 AI valuations per month",
            "Neighborhood price snapshot",
            "Automated renovation scoring",
          ],
          ctaLabel: "Start for free",
        },
        {
          name: "Professional",
          price: "$59",
          period: "/month",
          description: "For agents and investors needing rich insights.",
          features: [
            "Unlimited AI valuations",
            "Comparable sales & rental comps",
            "12-month price forecast & risk score",
            "White-label PDF reports",
          ],
          ctaLabel: "Upgrade to Pro",
          popular: true,
        },
        {
          name: "Enterprise",
          price: "Let's talk",
          period: "",
          description: "Custom solutions for proptech teams and lenders.",
          features: [
            "API & CRM integrations",
            "Dedicated success manager",
            "Portfolio monitoring dashboards",
          ],
          ctaLabel: "Book a demo",
        },
      ],
      footnote: "All paid plans include GDPR-ready data processing and priority support.",
      popularLabel: "Most popular",
    },
    blog: {
      title: "From our real estate intelligence blog",
      subtitle:
        "Stay ahead with actionable insights on pricing strategy, AI adoption, and urban market movements.",
      viewAll: "Visit the blog",
      readMore: "Read more",
      posts: [
        {
          title: "How AI photo analysis is changing renovation scoring",
          category: "AI in real estate",
          excerpt:
            "Discover how computer vision identifies premium finishes, hidden defects, and renovation ROI.",
          href: "/blog/ai-photo-analysis",
        },
        {
          title: "2025 urban market trends to watch",
          category: "Market trends",
          excerpt:
            "We map pricing momentum across European capitals to help you time your investments.",
          href: "/blog/2025-urban-trends",
        },
        {
          title: "Building an investor-grade pricing workflow",
          category: "Real estate tips",
          excerpt:
            "Use automated comps, history charts, and forecast ranges to brief clients in minutes.",
          href: "/blog/investor-pricing-workflow",
        },
      ],
    },
    testimonials: {
      title: "Trusted by forward-thinking teams",
      subtitle:
        "Thousands of valuations delivered for agencies, banks, and proptech startups worldwide.",
      items: [
        {
          quote:
            "The AI renovation scores align with our manual inspections while saving hours every week.",
          name: "Sophie Meyer",
          role: "Broker, Berlin Living",
        },
        {
          quote:
            "We plugged the forecasts into our lending models and increased approval confidence by 18%.",
          name: "Marco Ricci",
          role: "Head of Risk, Milano Bank",
        },
        {
          quote:
            "Clients love the instant reports. Conversion from lead to mandate doubled.",
          name: "Laura Gómez",
          role: "Founder, Madrid Homes",
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      subtitle: "Everything you need to know before estimating your apartment.",
      items: [
        {
          question: "How accurate are the AI valuations?",
          answer:
            "Our median error rate is under 4.8% thanks to cross-validated comparables, renovation scoring, and macroeconomic indicators.",
        },
        {
          question: "Can I upload multiple photos?",
          answer:
            "Yes, paid plans allow up to 15 images per property for a richer condition assessment and room-by-room scoring.",
        },
        {
          question: "Do you cover my city?",
          answer:
            "We currently support 120+ European cities with localized datasets updated every week and US coverage in beta.",
        },
        {
          question: "What file formats are supported?",
          answer:
            "JPEG and PNG up to 10MB per image. HEIC uploads from mobile devices are automatically converted.",
        },
        {
          question: "Is my data secure?",
          answer:
            "We encrypt uploads in transit and at rest, comply with GDPR, and purge raw photos after generating your report.",
        },
      ],
      contact: "Still have questions? Contact our team.",
    },
    finalCta: {
      title: "Estimate Your Property Now",
      subtitle:
        "Join thousands of owners and agents using AI to price faster and win better deals.",
      button: "Sign Up",
    },
    footer: {
      quickLinksTitle: "Quick links",
      quickLinks: [
        { label: "About Us", href: "/#how-it-works" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Contact", href: "/contact" },
      ],
      seoText:
        "AI apartment price estimator delivering instant valuations, renovation scoring, neighborhood benchmarks, and predictive forecasts.",
      rightsTemplate: "© {{year}} Skyline AI Valuator. All rights reserved.",
      socialLabel: "Follow us",
    },
    blogPage: {
      heroTitle: "Real estate intelligence insights",
      heroSubtitle:
        "Deep dives into AI valuations, urban market dynamics, and pricing best practices.",
      subscribeCta: "Subscribe for updates",
    },
    helpWidget: {
      label: "Help",
      form: {
        title: "How can we help?",
        description:
          "Send us a message and our team will get back to you within one business day.",
        categoryLabel: "Category",
        categories: [
          { value: "bug", label: "Bug" },
          { value: "suggestion", label: "Suggestion" },
          { value: "help", label: "Help" },
        ],
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell us how we can support you...",
        submitLabel: "Send message",
        successMessage: "Thanks! We received your request.",
      },
    },
  },
  ru: {
    languageName: "Русский",
    languageSelectorLabel: "Язык",
    keywords: [
      "оценка недвижимости",
      "AI оценка квартир",
      "прогноз цены недвижимости",
      "калькулятор стоимости квартиры",
      "аналитика недвижимости",
    ],
    seo: {
      title: "AI оценка недвижимости | Точная стоимость квартиры",
      description:
        "Получайте мгновенные оценки квартир благодаря анализу фото, рыночным данным района и прогнозным моделям.",
      ogTitle: "AI-сервис оценки стоимости квартиры",
      ogDescription:
        "Загрузите фото, проанализируйте состояние, историю цен и прогноз стоимости квартиры за минуты.",
    },
    nav: {
      home: "Главная",
      howItWorks: "Как это работает",
      features: "Возможности",
      pricing: "Тарифы",
      faq: "FAQ",
      blog: "Блог",
    },
    auth: {
      login: "Войти",
      signUp: "Регистрация",
    },
    hero: {
      title: "AI-сервис оценки стоимости квартиры",
      subtitle:
        "Загрузите фотографии и мгновенно получите подробную оценку с учётом состояния, цен по соседству и прогноза на будущее.",
      cta: "Получить бесплатную оценку",
      tagline: "Нам доверяют инвесторы в 45+ городах",
      stats: [
        { label: "Средняя погрешность", value: "<4,8%" },
        { label: "Города в базе", value: "120+" },
        { label: "Выпущено отчётов", value: "38 тыс." },
      ],
    },
    howItWorks: {
      title: "Как проходит оценка",
      subtitle: "Три шага к точной стоимости квартиры",
      steps: [
        {
          title: "Загрузите фотографии квартиры",
          description:
            "Покажите кухню, гостиную, санузел и фасад, чтобы AI оценил ремонт и освещённость.",
        },
        {
          title: "AI анализирует детали",
          description:
            "Компьютерное зрение оценивает отделку, находит улучшения и сравнивает объект с миллионами сделок.",
        },
        {
          title: "Получите стоимость и прогноз",
          description:
            "Скачайте отчёт с диапазоном цен, аналогами, рекомендациями по ремонту и прогнозом на 12 месяцев.",
        },
      ],
    },
    features: {
      title: "Всё для уверенной оценки",
      subtitle:
        "Понимайте рыночное положение и потенциал роста вашей квартиры.",
      items: [
        {
          title: "AI-оценка состояния по фото",
          description:
            "Определяем износ, премиальную отделку и потенциал ремонта за считанные секунды.",
          icon: "camera",
        },
        {
          title: "Сравнение с ценами района",
          description:
            "Сопоставляем объект с проверенными продажами, арендами и доходностью в микрорайоне.",
          icon: "map",
        },
        {
          title: "Интерактивная история цен",
          description:
            "Просматривайте динамику продаж и аренды за последние 10 лет с учётом сезонности.",
          icon: "history",
        },
        {
          title: "Прогноз будущей стоимости",
          description:
            "Прогнозируем рост капитала с учётом экономики, миграции и сценариев ремонта.",
          icon: "forecast",
        },
      ],
    },
    uploadForm: {
      title: "Протестируйте демо за 60 секунд",
      description:
        "Загрузите фото комнаты, и мы отправим пример отчёта с AI-оценкой вашего района.",
      emailLabel: "Рабочая почта",
      propertyTypeLabel: "Тип недвижимости",
      propertyPlaceholder: "Выберите тип",
      propertyOptions: ["Квартира", "Лофт", "Пентхаус", "Студия"],
      fileLabel: "Загрузить фото квартиры",
      fileHint: "JPG или PNG, до 10 МБ",
      submitLabel: "Получить пример отчёта",
      privacy: "Отправляя форму, вы соглашаетесь с политикой конфиденциальности.",
      successMessage: "Спасибо! Проверьте почту, мы отправили пример оценки.",
    },
    pricing: {
      title: "Прозрачные тарифы",
      subtitle:
        "Начните с бесплатного доступа и переходите на расширенную аналитику, когда будете готовы.",
      plans: [
        {
          name: "Start",
          price: "0 ₽",
          period: "/мес",
          description: "Для собственников, которые тестируют сервис.",
          features: [
            "3 AI-оценки в месяц",
            "Сводка цен по району",
            "Автоматический анализ ремонта",
          ],
          ctaLabel: "Попробовать бесплатно",
        },
        {
          name: "Pro",
          price: "4 990 ₽",
          period: "/мес",
          description: "Для риэлторов и инвесторов, которым нужны глубокие инсайты.",
          features: [
            "Неограниченные AI-оценки",
            "Сравнение продаж и аренды",
            "Прогноз цены и индекс риска",
            "Отчёты в PDF с вашим брендом",
          ],
          ctaLabel: "Перейти на Pro",
          popular: true,
        },
        {
          name: "Enterprise",
          price: "Свяжитесь с нами",
          period: "",
          description: "Для банков и девелоперов, которым нужна интеграция.",
          features: [
            "API и CRM интеграции",
            "Персональный менеджер",
            "Дашборды мониторинга портфеля",
          ],
          ctaLabel: "Запросить демо",
        },
      ],
      footnote: "Во все платные тарифы входит поддержка GDPR и приоритетная помощь.",
      popularLabel: "Самый популярный",
    },
    blog: {
      title: "Блог об аналитике недвижимости",
      subtitle:
        "Получайте практические советы по ценообразованию, AI и трендам городского рынка.",
      viewAll: "Перейти в блог",
      readMore: "Читать далее",
      posts: [
        {
          title: "Как AI меняет оценку ремонта по фотографиям",
          category: "AI в недвижимости",
          excerpt:
            "Узнайте, как компьютерное зрение выявляет премиальную отделку и скрытые дефекты.",
          href: "/blog/ai-photo-analysis",
        },
        {
          title: "Тренды городского рынка 2025",
          category: "Тренды рынка",
          excerpt:
            "Мы анализируем динамику цен в крупных городах Европы, чтобы вы принимали точные решения.",
          href: "/blog/2025-urban-trends",
        },
        {
          title: "Как построить профессиональный процесс оценки",
          category: "Советы риэлторам",
          excerpt:
            "Используйте автоматические аналоги, графики и прогнозы для подготовки клиентов за минуты.",
          href: "/blog/investor-pricing-workflow",
        },
      ],
    },
    testimonials: {
      title: "Нам доверяют лидеры отрасли",
      subtitle:
        "Мы провели тысячи оценок для агентств, банков и proptech-компаний.",
      items: [
        {
          quote:
            "AI-оценка ремонта совпадает с нашими инспекциями и экономит часы работы каждую неделю.",
          name: "София Мейер",
          role: "Брокер, Berlin Living",
        },
        {
          quote:
            "Мы подключили прогноз к моделям кредитования и повысили уверенность на 18%.",
          name: "Марко Риччи",
          role: "Риск-менеджер, Milano Bank",
        },
        {
          quote:
            "Клиентам нравятся мгновенные отчёты — конверсия заявок в сделки удвоилась.",
          name: "Лаура Гомес",
          role: "Основатель, Madrid Homes",
        },
      ],
    },
    faq: {
      title: "Частые вопросы",
      subtitle: "Важная информация перед оценкой квартиры.",
      items: [
        {
          question: "Насколько точны AI-оценки?",
          answer:
            "Средняя погрешность менее 4,8% благодаря проверенным аналогам, анализу ремонта и макропоказателям.",
        },
        {
          question: "Можно ли загрузить несколько фото?",
          answer:
            "Да, в платных тарифах можно загрузить до 15 изображений для детального анализа.",
        },
        {
          question: "Работаете ли вы в моём городе?",
          answer:
            "Мы покрываем более 120 европейских городов с еженедельным обновлением данных. США — в бета-версии.",
        },
        {
          question: "Какие форматы поддерживаются?",
          answer:
            "Поддерживаем JPEG и PNG до 10 МБ. HEIC с мобильных устройств конвертируется автоматически.",
        },
        {
          question: "Безопасны ли мои данные?",
          answer:
            "Мы шифруем загрузки, соблюдаем GDPR и удаляем исходные фото после формирования отчёта.",
        },
      ],
      contact: "Остались вопросы? Напишите нашей команде.",
    },
    finalCta: {
      title: "Оцените свою недвижимость сейчас",
      subtitle:
        "Присоединяйтесь к собственникам и агентам, которые принимают решения быстрее с помощью AI.",
      button: "Зарегистрироваться",
    },
    footer: {
      quickLinksTitle: "Полезные ссылки",
      quickLinks: [
        { label: "О нас", href: "/#how-it-works" },
        { label: "Политика конфиденциальности", href: "/privacy" },
        { label: "Условия использования", href: "/terms" },
        { label: "Контакты", href: "/contact" },
      ],
      seoText:
        "AI-платформа оценки квартир: мгновенные отчёты, анализ ремонта, сравнение по району и прогноз стоимости.",
      rightsTemplate: "© {{year}} Skyline AI Valuator. Все права защищены.",
      socialLabel: "Мы в соцсетях",
    },
    blogPage: {
      heroTitle: "Экспертиза в оценке недвижимости",
      heroSubtitle:
        "Глубокая аналитика по AI-оценке, городским трендам и лучшим практикам ценообразования.",
      subscribeCta: "Подписаться на обновления",
    },
    helpWidget: {
      label: "Помощь",
      form: {
        title: "Чем мы можем помочь?",
        description:
          "Отправьте сообщение, и мы свяжемся с вами в течение одного рабочего дня.",
        categoryLabel: "Категория",
        categories: [
          { value: "bug", label: "Ошибка" },
          { value: "suggestion", label: "Предложение" },
          { value: "help", label: "Помощь" },
        ],
        emailLabel: "Электронная почта",
        emailPlaceholder: "you@example.com",
        messageLabel: "Сообщение",
        messagePlaceholder: "Опишите вопрос или проблему...",
        submitLabel: "Отправить",
        successMessage: "Спасибо! Мы получили ваше сообщение.",
      },
    },
  },
  es: {
    languageName: "Español",
    languageSelectorLabel: "Idioma",
    keywords: [
      "valoración inmobiliaria",
      "estimador de precios con IA",
      "pronóstico de precios",
      "calculadora de apartamentos",
      "analítica inmobiliaria",
    ],
    seo: {
      title: "Valoración inmobiliaria con IA | Calcula el precio de tu piso",
      description:
        "Obtén valoraciones instantáneas gracias al análisis de fotos, datos del barrio y modelos predictivos.",
      ogTitle: "Estimador de precios de apartamentos con IA",
      ogDescription:
        "Sube fotos, analiza el estado, revisa el historial de precios y proyecta el valor futuro en minutos.",
    },
    nav: {
      home: "Inicio",
      howItWorks: "Cómo funciona",
      features: "Funciones",
      pricing: "Precios",
      faq: "FAQ",
      blog: "Blog",
    },
    auth: {
      login: "Iniciar sesión",
      signUp: "Crear cuenta",
    },
    hero: {
      title: "Estimador de precios inmobiliarios con IA",
      subtitle:
        "Sube las fotos del piso y recibe al instante una valoración detallada con análisis del barrio y previsiones de precio.",
      cta: "Obtén tu valoración gratuita",
      tagline: "Confiado por profesionales en más de 45 ciudades",
      stats: [
        { label: "Margen de error", value: "<4,8%" },
        { label: "Ciudades cubiertas", value: "120+" },
        { label: "Informes generados", value: "38 mil" },
      ],
    },
    howItWorks: {
      title: "Cómo realizamos la valoración",
      subtitle: "Tres pasos para conocer el valor real de tu vivienda",
      steps: [
        {
          title: "Sube las fotos del inmueble",
          description:
            "Muestra cocina, salón, baño y fachada para que la IA evalúe el estado de conservación.",
        },
        {
          title: "La IA analiza cada detalle",
          description:
            "La visión artificial puntúa los acabados, detecta mejoras y compara con miles de operaciones reales.",
        },
        {
          title: "Recibe valoración e informe",
          description:
            "Descarga un informe con rango de precios, comparables, recomendaciones y previsión a 12 meses.",
        },
      ],
    },
    features: {
      title: "Funciones clave para valorar mejor",
      subtitle:
        "Comprende la posición de mercado y el potencial de tu propiedad.",
      items: [
        {
          title: "Evaluación del estado con IA",
          description:
            "Detectamos desgaste, acabados premium y potencial de reforma a partir de tus imágenes.",
          icon: "camera",
        },
        {
          title: "Comparativa del barrio",
          description:
            "Compara con ventas, alquileres y rentabilidades verificadas en tu zona.",
          icon: "map",
        },
        {
          title: "Histórico interactivo de precios",
          description:
            "Visualiza evolución de ventas y alquileres de la última década con filtros dinámicos.",
          icon: "history",
        },
        {
          title: "Pronóstico de valor futuro",
          description:
            "Proyecta crecimiento utilizando indicadores económicos y tendencias de movilidad.",
          icon: "forecast",
        },
      ],
    },
    uploadForm: {
      title: "Prueba la demo en 60 segundos",
      description:
        "Sube una foto y te enviaremos por correo un ejemplo de informe con IA adaptado a tu barrio.",
      emailLabel: "Correo profesional",
      propertyTypeLabel: "Tipo de propiedad",
      propertyPlaceholder: "Selecciona el tipo",
      propertyOptions: ["Apartamento", "Loft", "Ático", "Estudio"],
      fileLabel: "Subir foto del piso",
      fileHint: "JPG o PNG, máximo 10 MB",
      submitLabel: "Enviar muestra del informe",
      privacy: "Al enviar aceptas nuestra política de privacidad.",
      successMessage: "¡Gracias! Revisa tu correo para ver la valoración.",
    },
    pricing: {
      title: "Planes transparentes",
      subtitle:
        "Empieza gratis y amplía cuando necesites analítica avanzada y colaboración.",
      plans: [
        {
          name: "Inicio",
          price: "0 €",
          period: "/mes",
          description: "Ideal para propietarios que prueban la herramienta.",
          features: [
            "3 valoraciones con IA al mes",
            "Panorama de precios del barrio",
            "Puntuación automática del estado",
          ],
          ctaLabel: "Comenzar gratis",
        },
        {
          name: "Profesional",
          price: "59 €",
          period: "/mes",
          description: "Para agentes e inversores que necesitan más profundidad.",
          features: [
            "Valoraciones ilimitadas",
            "Comparables de ventas y alquileres",
            "Pronóstico de 12 meses y riesgo",
            "Informes PDF con tu marca",
          ],
          ctaLabel: "Pasar a Pro",
          popular: true,
        },
        {
          name: "Enterprise",
          price: "Hablemos",
          period: "",
          description: "Soluciones a medida para bancos y equipos proptech.",
          features: [
            "Integraciones API y CRM",
            "Gestor de éxito dedicado",
            "Paneles de seguimiento de cartera",
          ],
          ctaLabel: "Solicitar demo",
        },
      ],
      footnote: "Todos los planes incluyen cumplimiento GDPR y soporte prioritario.",
      popularLabel: "Plan más elegido",
    },
    blog: {
      title: "Insights de nuestro blog inmobiliario",
      subtitle:
        "Mantente al día con estrategias de precios, IA y tendencias de mercado urbano.",
      viewAll: "Visitar el blog",
      readMore: "Leer más",
      posts: [
        {
          title: "Cómo la IA cambia la valoración de reformas",
          category: "IA en real estate",
          excerpt:
            "Descubre cómo la visión artificial identifica acabados premium y defectos ocultos.",
          href: "/blog/ai-photo-analysis",
        },
        {
          title: "Tendencias urbanas 2025 que debes seguir",
          category: "Tendencias del mercado",
          excerpt:
            "Analizamos el impulso de precios en capitales europeas para planificar inversiones.",
          href: "/blog/2025-urban-trends",
        },
        {
          title: "Flujo de trabajo profesional de valoración",
          category: "Consejos inmobiliarios",
          excerpt:
            "Automatiza comparables, gráficos históricos y previsiones para asesorar a tus clientes.",
          href: "/blog/investor-pricing-workflow",
        },
      ],
    },
    testimonials: {
      title: "Equipos que confían en nosotros",
      subtitle:
        "Miles de valoraciones entregadas a agencias, bancos y startups proptech.",
      items: [
        {
          quote:
            "Las puntuaciones de reforma con IA coinciden con nuestras inspecciones y ahorran horas de trabajo.",
          name: "Sophie Meyer",
          role: "Agente, Berlin Living",
        },
        {
          quote:
            "Incorporamos los pronósticos a nuestros modelos de crédito y aumentamos la confianza un 18%.",
          name: "Marco Ricci",
          role: "Director de Riesgos, Milano Bank",
        },
        {
          quote:
            "A los clientes les encantan los informes instantáneos. Duplicamos la conversión de leads.",
          name: "Laura Gómez",
          role: "Fundadora, Madrid Homes",
        },
      ],
    },
    faq: {
      title: "Preguntas frecuentes",
      subtitle: "Todo lo que necesitas saber antes de valorar tu propiedad.",
      items: [
        {
          question: "¿Qué precisión tienen las valoraciones?",
          answer:
            "Nuestro error medio es inferior al 4,8% gracias a comparables verificados, análisis del estado y datos macro.",
        },
        {
          question: "¿Puedo subir varias fotos?",
          answer:
            "Sí, los planes de pago permiten hasta 15 imágenes por inmueble para un análisis detallado.",
        },
        {
          question: "¿Cubrís mi ciudad?",
          answer:
            "Actualmente trabajamos en más de 120 ciudades europeas y estamos ampliando cobertura en EE. UU.",
        },
        {
          question: "¿Qué formatos aceptáis?",
          answer:
            "Aceptamos JPEG y PNG de hasta 10 MB. Los archivos HEIC se convierten automáticamente.",
        },
        {
          question: "¿Mis datos están seguros?",
          answer:
            "Ciframos los archivos en tránsito y en reposo, cumplimos con GDPR y eliminamos las fotos tras generar el informe.",
        },
      ],
      contact: "¿Dudas adicionales? Contacta con nuestro equipo.",
    },
    finalCta: {
      title: "Valora tu propiedad ahora",
      subtitle:
        "Únete a propietarios y agentes que utilizan la IA para cerrar operaciones con confianza.",
      button: "Crear cuenta",
    },
    footer: {
      quickLinksTitle: "Enlaces útiles",
      quickLinks: [
        { label: "Sobre nosotros", href: "/#how-it-works" },
        { label: "Política de privacidad", href: "/privacy" },
        { label: "Términos del servicio", href: "/terms" },
        { label: "Contacto", href: "/contact" },
      ],
      seoText:
        "Plataforma de valoración inmobiliaria con IA: informes instantáneos, comparación por barrio y previsiones de precio.",
      rightsTemplate: "© {{year}} Skyline AI Valuator. Todos los derechos reservados.",
      socialLabel: "Síguenos",
    },
    blogPage: {
      heroTitle: "Inteligencia inmobiliaria",
      heroSubtitle:
        "Análisis profundos sobre valoraciones con IA, tendencias urbanas y mejores prácticas de pricing.",
      subscribeCta: "Suscribirme",
    },
    helpWidget: {
      label: "Ayuda",
      form: {
        title: "¿Cómo podemos ayudarte?",
        description:
          "Envíanos un mensaje y nuestro equipo responderá en un día laboral.",
        categoryLabel: "Categoría",
        categories: [
          { value: "bug", label: "Error" },
          { value: "suggestion", label: "Sugerencia" },
          { value: "help", label: "Ayuda" },
        ],
        emailLabel: "Correo electrónico",
        emailPlaceholder: "tu@email.com",
        messageLabel: "Mensaje",
        messagePlaceholder: "Cuéntanos en qué necesitas ayuda...",
        submitLabel: "Enviar mensaje",
        successMessage: "¡Gracias! Hemos recibido tu solicitud.",
      },
    },
  },
  fr: {
    languageName: "Français",
    languageSelectorLabel: "Langue",
    keywords: [
      "estimation immobilière",
      "estimateur de prix IA",
      "prévision de prix immobilier",
      "calculateur d'appartement",
      "analytique immobilière",
    ],
    seo: {
      title: "Estimation immobilière par IA | Prix d'appartement",
      description:
        "Obtenez une estimation instantanée grâce à l'analyse photo, aux données de quartier et aux modèles prédictifs.",
      ogTitle: "Estimateur de prix immobilier alimenté par l'IA",
      ogDescription:
        "Téléchargez vos photos, analysez l'état, l'historique des prix et le potentiel futur en quelques minutes.",
    },
    nav: {
      home: "Accueil",
      howItWorks: "Fonctionnement",
      features: "Fonctionnalités",
      pricing: "Tarifs",
      faq: "FAQ",
      blog: "Blog",
    },
    auth: {
      login: "Connexion",
      signUp: "Créer un compte",
    },
    hero: {
      title: "Estimateur immobilier alimenté par l'IA",
      subtitle:
        "Téléchargez les photos de votre bien et recevez instantanément une estimation enrichie de comparables et de prévisions.",
      cta: "Obtenir mon estimation gratuite",
      tagline: "Plébiscité par les professionnels dans plus de 45 villes",
      stats: [
        { label: "Marge d'erreur", value: "<4,8%" },
        { label: "Villes couvertes", value: "120+" },
        { label: "Rapports livrés", value: "38 k" },
      ],
    },
    howItWorks: {
      title: "Notre méthode d'estimation",
      subtitle: "Trois étapes pour connaître la valeur de votre appartement",
      steps: [
        {
          title: "Téléchargez les photos du bien",
          description:
            "Montrez cuisine, séjour, salle de bain et façade pour évaluer l'état et la luminosité.",
        },
        {
          title: "L'IA inspecte chaque détail",
          description:
            "La vision par ordinateur note les finitions, détecte les travaux et compare avec des milliers de transactions.",
        },
        {
          title: "Recevez valeur et prévisions",
          description:
            "Obtenez un rapport avec fourchette de prix, comparables, conseils et projection à 12 mois.",
        },
      ],
    },
    features: {
      title: "Des fonctionnalités pour décider vite",
      subtitle:
        "Comprenez la position de votre bien et son potentiel de valorisation.",
      items: [
        {
          title: "Scoring de l'état par IA",
          description:
            "Identifiez usure, finitions haut de gamme et potentiel de rénovation depuis vos photos.",
          icon: "camera",
        },
        {
          title: "Benchmark du quartier",
          description:
            "Comparez votre bien aux ventes et loyers vérifiés de votre micro-marché.",
          icon: "map",
        },
        {
          title: "Historique interactif des prix",
          description:
            "Visualisez dix ans de transactions avec filtres saisonniers et impact des travaux.",
          icon: "history",
        },
        {
          title: "Prévision de valeur future",
          description:
            "Projetez la croissance via indicateurs économiques et tendances de mobilité.",
          icon: "forecast",
        },
      ],
    },
    uploadForm: {
      title: "Essayez la démo en 60 secondes",
      description:
        "Téléchargez une photo et recevez par email un exemple de rapport IA adapté à votre quartier.",
      emailLabel: "Email professionnel",
      propertyTypeLabel: "Type de bien",
      propertyPlaceholder: "Sélectionner",
      propertyOptions: ["Appartement", "Loft", "Penthouse", "Studio"],
      fileLabel: "Téléverser une photo",
      fileHint: "JPG ou PNG, 10 Mo max",
      submitLabel: "Envoyer l'exemple",
      privacy: "En envoyant vous acceptez notre politique de confidentialité.",
      successMessage: "Merci ! Consultez votre email pour la valorisation.",
    },
    pricing: {
      title: "Des tarifs clairs",
      subtitle:
        "Commencez gratuitement puis passez à une analyse avancée lorsque vous en avez besoin.",
      plans: [
        {
          name: "Essentiel",
          price: "0 €",
          period: "/mois",
          description: "Idéal pour tester l'outil sans engagement.",
          features: [
            "3 estimations IA par mois",
            "Panorama des prix du quartier",
            "Scoring automatique de l'état",
          ],
          ctaLabel: "Commencer",
        },
        {
          name: "Professionnel",
          price: "59 €",
          period: "/mois",
          description: "Pour agents et investisseurs exigeants.",
          features: [
            "Estimations illimitées",
            "Comparables ventes & locations",
            "Prévision 12 mois et indice de risque",
            "Rapports PDF à votre marque",
          ],
          ctaLabel: "Passer en Pro",
          popular: true,
        },
        {
          name: "Entreprise",
          price: "Sur devis",
          period: "",
          description: "Solutions personnalisées pour banques et proptech.",
          features: [
            "Intégrations API et CRM",
            "Customer success dédié",
            "Tableaux de bord portefeuille",
          ],
          ctaLabel: "Planifier une démo",
        },
      ],
      footnote: "Tous les plans incluent conformité RGPD et support prioritaire.",
      popularLabel: "Offre la plus choisie",
    },
    blog: {
      title: "Analyses de notre blog immobilier",
      subtitle:
        "Restez informé des stratégies de pricing, de l'IA et des tendances urbaines.",
      viewAll: "Voir le blog",
      readMore: "Lire l'article",
      posts: [
        {
          title: "Comment l'IA révolutionne l'évaluation des travaux",
          category: "IA & immobilier",
          excerpt:
            "Comprenez comment la vision par ordinateur détecte finitions haut de gamme et défauts cachés.",
          href: "/blog/ai-photo-analysis",
        },
        {
          title: "Tendances urbaines 2025 à surveiller",
          category: "Tendances du marché",
          excerpt:
            "Cartographie de la dynamique des prix dans les capitales européennes pour guider vos investissements.",
          href: "/blog/2025-urban-trends",
        },
        {
          title: "Construire un workflow de pricing pro",
          category: "Conseils immobiliers",
          excerpt:
            "Automatisez comparables, historiques et prévisions pour briefer vos clients en minutes.",
          href: "/blog/investor-pricing-workflow",
        },
      ],
    },
    testimonials: {
      title: "Ils font confiance à Skyline AI",
      subtitle:
        "Des milliers d'estimations livrées aux agences, banques et startups proptech.",
      items: [
        {
          quote:
            "Les scores de rénovation concordent avec nos visites et réduisent drastiquement le temps d'analyse.",
          name: "Sophie Meyer",
          role: "Courtière, Berlin Living",
        },
        {
          quote:
            "Les prévisions intégrées à nos modèles de crédit ont accru la confiance de 18%.",
          name: "Marco Ricci",
          role: "Directeur des risques, Milano Bank",
        },
        {
          quote:
            "Les rapports instantanés séduisent nos clients. Notre taux de conversion a doublé.",
          name: "Laura Gómez",
          role: "Fondatrice, Madrid Homes",
        },
      ],
    },
    faq: {
      title: "Questions fréquentes",
      subtitle: "Tout savoir avant d'estimer votre bien.",
      items: [
        {
          question: "Quelle est la précision des estimations ?",
          answer:
            "Notre erreur médiane est inférieure à 4,8% grâce aux comparables vérifiés, au scoring de l'état et aux indicateurs macro.",
        },
        {
          question: "Puis-je envoyer plusieurs photos ?",
          answer:
            "Oui, les offres payantes autorisent jusqu'à 15 images par bien pour une analyse complète.",
        },
        {
          question: "Couvrez-vous ma ville ?",
          answer:
            "Nous couvrons plus de 120 villes européennes et déployons progressivement l'Amérique du Nord.",
        },
        {
          question: "Quels formats acceptez-vous ?",
          answer:
            "JPEG et PNG jusqu'à 10 Mo. Les fichiers HEIC sont convertis automatiquement.",
        },
        {
          question: "Mes données sont-elles sécurisées ?",
          answer:
            "Les fichiers sont chiffrés en transit et au repos, conformes RGPD et supprimés après le rapport.",
        },
      ],
      contact: "Encore des questions ? Contactez notre équipe.",
    },
    finalCta: {
      title: "Estimez votre bien dès maintenant",
      subtitle:
        "Rejoignez les propriétaires et agents qui gagnent du temps grâce à l'IA.",
      button: "Créer un compte",
    },
    footer: {
      quickLinksTitle: "Liens rapides",
      quickLinks: [
        { label: "À propos", href: "/#how-it-works" },
        { label: "Politique de confidentialité", href: "/privacy" },
        { label: "Conditions d'utilisation", href: "/terms" },
        { label: "Contact", href: "/contact" },
      ],
      seoText:
        "Plateforme d'estimation immobilière par IA : rapports instantanés, benchmark de quartier et prévisions de prix.",
      rightsTemplate: "© {{year}} Skyline AI Valuator. Tous droits réservés.",
      socialLabel: "Suivez-nous",
    },
    blogPage: {
      heroTitle: "Analyses et tendances immobilières",
      heroSubtitle:
        "Articles dédiés à l'estimation par IA, aux marchés urbains et aux meilleures pratiques de pricing.",
      subscribeCta: "S'abonner",
    },
    helpWidget: {
      label: "Aide",
      form: {
        title: "Comment pouvons-nous vous aider ?",
        description:
          "Envoyez-nous un message et notre équipe vous répondra sous un jour ouvré.",
        categoryLabel: "Catégorie",
        categories: [
          { value: "bug", label: "Bug" },
          { value: "suggestion", label: "Suggestion" },
          { value: "help", label: "Aide" },
        ],
        emailLabel: "E-mail",
        emailPlaceholder: "vous@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Expliquez-nous votre demande...",
        submitLabel: "Envoyer le message",
        successMessage: "Merci ! Nous avons bien reçu votre demande.",
      },
    },
  },
  it: {
    languageName: "Italiano",
    languageSelectorLabel: "Lingua",
    keywords: [
      "valutazione immobiliare",
      "stima prezzi con IA",
      "previsione valore casa",
      "calcolatore appartamenti",
      "analisi immobiliare",
    ],
    seo: {
      title: "Valutazione immobiliare AI | Prezzo appartamento",
      description:
        "Ottieni valutazioni immediate grazie all'analisi fotografica, ai dati di quartiere e ai modelli predittivi.",
      ogTitle: "Stimatore di prezzi immobiliari con IA",
      ogDescription:
        "Carica le foto, analizza lo stato, consulta la storia dei prezzi e il potenziale futuro in pochi minuti.",
    },
    nav: {
      home: "Home",
      howItWorks: "Come funziona",
      features: "Funzionalità",
      pricing: "Prezzi",
      faq: "FAQ",
      blog: "Blog",
    },
    auth: {
      login: "Accedi",
      signUp: "Registrati",
    },
    hero: {
      title: "Stimatore immobiliare potenziato dall'IA",
      subtitle:
        "Carica le foto dell'appartamento e ricevi subito una valutazione completa con analisi del quartiere e previsioni.",
      cta: "Ottieni la valutazione gratuita",
      tagline: "Scelto da professionisti in oltre 45 città",
      stats: [
        { label: "Margine di errore", value: "<4,8%" },
        { label: "Città coperte", value: "120+" },
        { label: "Report consegnati", value: "38 mila" },
      ],
    },
    howItWorks: {
      title: "Il processo di valutazione",
      subtitle: "Tre passi per conoscere il vero valore del tuo immobile",
      steps: [
        {
          title: "Carica le foto della casa",
          description:
            "Mostra cucina, soggiorno, bagno e facciata per valutare finiture e luminosità.",
        },
        {
          title: "L'IA analizza ogni dettaglio",
          description:
            "La computer vision valuta le finiture, rileva upgrade e confronta con migliaia di transazioni.",
        },
        {
          title: "Ricevi valore e previsione",
          description:
            "Scarica un report con range di prezzo, comparabili, consigli di ristrutturazione e forecast a 12 mesi.",
        },
      ],
    },
    features: {
      title: "Strumenti per decisioni rapide",
      subtitle:
        "Comprendi la posizione di mercato e il potenziale futuro del tuo appartamento.",
      items: [
        {
          title: "Valutazione stato con IA",
          description:
            "Individua usura, finiture premium e potenziale di ristrutturazione dalle immagini.",
          icon: "camera",
        },
        {
          title: "Benchmark di quartiere",
          description:
            "Confronta con vendite, affitti e rendimenti certificati nella tua zona.",
          icon: "map",
        },
        {
          title: "Storico prezzi interattivo",
          description:
            "Visualizza dieci anni di prezzi con filtri stagionali e impatto dei lavori.",
          icon: "history",
        },
        {
          title: "Previsione valore futuro",
          description:
            "Prevedi la crescita utilizzando indicatori economici e trend demografici.",
          icon: "forecast",
        },
      ],
    },
    uploadForm: {
      title: "Prova la demo in 60 secondi",
      description:
        "Carica una foto e riceverai via email un esempio di report AI adattato al tuo quartiere.",
      emailLabel: "Email professionale",
      propertyTypeLabel: "Tipologia",
      propertyPlaceholder: "Seleziona",
      propertyOptions: ["Appartamento", "Loft", "Attico", "Monolocale"],
      fileLabel: "Carica foto dell'immobile",
      fileHint: "JPG o PNG, max 10 MB",
      submitLabel: "Invia il report di prova",
      privacy: "Inviando accetti la nostra informativa sulla privacy.",
      successMessage: "Grazie! Controlla la casella email per la valutazione.",
    },
    pricing: {
      title: "Prezzi chiari e flessibili",
      subtitle:
        "Inizia gratis e passa ai piani avanzati quando hai bisogno di più analisi e collaborazione.",
      plans: [
        {
          name: "Start",
          price: "0 €",
          period: "/mese",
          description: "Per proprietari che vogliono provare la piattaforma.",
          features: [
            "3 valutazioni AI al mese",
            "Panoramica prezzi di zona",
            "Analisi automatica dello stato",
          ],
          ctaLabel: "Inizia gratis",
        },
        {
          name: "Professionale",
          price: "59 €",
          period: "/mese",
          description: "Per agenti e investitori che richiedono analisi approfondite.",
          features: [
            "Valutazioni illimitate",
            "Comparabili di vendita e affitto",
            "Forecast 12 mesi e indice di rischio",
            "Report PDF personalizzati",
          ],
          ctaLabel: "Passa a Pro",
          popular: true,
        },
        {
          name: "Enterprise",
          price: "Parliamone",
          period: "",
          description: "Soluzioni dedicate per banche e team proptech.",
          features: [
            "Integrazioni API e CRM",
            "Account manager dedicato",
            "Dashboard di monitoraggio portfolio",
          ],
          ctaLabel: "Prenota una demo",
        },
      ],
      footnote: "Tutti i piani includono conformità GDPR e supporto prioritario.",
      popularLabel: "Il più scelto",
    },
    blog: {
      title: "Dal nostro blog di intelligence immobiliare",
      subtitle:
        "Rimani aggiornato su strategie di pricing, IA e trend dei mercati urbani.",
      viewAll: "Visita il blog",
      readMore: "Leggi tutto",
      posts: [
        {
          title: "Come l'IA trasforma la valutazione delle ristrutturazioni",
          category: "IA nel real estate",
          excerpt:
            "Scopri come la visione artificiale riconosce finiture premium e difetti nascosti.",
          href: "/blog/ai-photo-analysis",
        },
        {
          title: "Trend urbani 2025 da monitorare",
          category: "Trend di mercato",
          excerpt:
            "Mappiamo l'andamento dei prezzi nelle capitali europee per pianificare gli investimenti.",
          href: "/blog/2025-urban-trends",
        },
        {
          title: "Workflow di valutazione per investitori",
          category: "Consigli immobiliari",
          excerpt:
            "Automatizza comparabili, storici e previsioni per informare i clienti in pochi minuti.",
          href: "/blog/investor-pricing-workflow",
        },
      ],
    },
    testimonials: {
      title: "Scelto dai team più innovativi",
      subtitle:
        "Migliaia di valutazioni consegnate ad agenzie, banche e startup proptech.",
      items: [
        {
          quote:
            "I punteggi di ristrutturazione coincidono con le nostre ispezioni e risparmiano ore ogni settimana.",
          name: "Sophie Meyer",
          role: "Agente, Berlin Living",
        },
        {
          quote:
            "Abbiamo integrato i forecast nei modelli di credito aumentando la fiducia del 18%.",
          name: "Marco Ricci",
          role: "Head of Risk, Milano Bank",
        },
        {
          quote:
            "I clienti adorano i report istantanei. Il tasso di conversione è raddoppiato.",
          name: "Laura Gómez",
          role: "Fondatrice, Madrid Homes",
        },
      ],
    },
    faq: {
      title: "Domande frequenti",
      subtitle: "Tutto ciò che serve sapere prima della valutazione.",
      items: [
        {
          question: "Quanto sono precise le valutazioni IA?",
          answer:
            "L'errore medio è inferiore al 4,8% grazie a comparabili certificati, scoring dello stato e indicatori macro.",
        },
        {
          question: "Posso caricare più foto?",
          answer:
            "Sì, i piani a pagamento consentono fino a 15 immagini per immobile per un'analisi completa.",
        },
        {
          question: "Coprite la mia città?",
          answer:
            "Supportiamo oltre 120 città europee con dati aggiornati ogni settimana e stiamo espandendo la copertura USA.",
        },
        {
          question: "Quali formati supportate?",
          answer:
            "JPEG e PNG fino a 10 MB. I file HEIC vengono convertiti automaticamente.",
        },
        {
          question: "I miei dati sono al sicuro?",
          answer:
            "Criptiamo i file in transito e a riposo, siamo conformi al GDPR e cancelliamo le foto dopo il report.",
        },
      ],
      contact: "Hai altre domande? Contattaci.",
    },
    finalCta: {
      title: "Valuta subito la tua proprietà",
      subtitle:
        "Unisciti a proprietari e agenti che sfruttano l'IA per concludere trattative in sicurezza.",
      button: "Registrati",
    },
    footer: {
      quickLinksTitle: "Link utili",
      quickLinks: [
        { label: "Chi siamo", href: "/#how-it-works" },
        { label: "Privacy", href: "/privacy" },
        { label: "Termini di servizio", href: "/terms" },
        { label: "Contatti", href: "/contact" },
      ],
      seoText:
        "Piattaforma di valutazione immobiliare con IA: report istantanei, benchmark di quartiere e previsioni di prezzo.",
      rightsTemplate: "© {{year}} Skyline AI Valuator. Tutti i diritti riservati.",
      socialLabel: "Seguici",
    },
    blogPage: {
      heroTitle: "Approfondimenti di real estate intelligence",
      heroSubtitle:
        "Analisi su valutazioni AI, dinamiche urbane e best practice di pricing.",
      subscribeCta: "Iscriviti",
    },
    helpWidget: {
      label: "Assistenza",
      form: {
        title: "Come possiamo aiutarti?",
        description:
          "Inviaci un messaggio e il nostro team ti risponderà entro un giorno lavorativo.",
        categoryLabel: "Categoria",
        categories: [
          { value: "bug", label: "Bug" },
          { value: "suggestion", label: "Suggerimento" },
          { value: "help", label: "Assistenza" },
        ],
        emailLabel: "Email",
        emailPlaceholder: "tu@email.com",
        messageLabel: "Messaggio",
        messagePlaceholder: "Raccontaci di cosa hai bisogno...",
        submitLabel: "Invia messaggio",
        successMessage: "Grazie! Abbiamo ricevuto la tua richiesta.",
      },
    },
  },
  de: {
    languageName: "Deutsch",
    languageSelectorLabel: "Sprache",
    keywords: [
      "Immobilienbewertung",
      "KI Preisrechner",
      "Immobilienpreis Prognose",
      "Wohnungsbewertung",
      "Immobilienanalyse",
    ],
    seo: {
      title: "KI Immobilienbewertung | Wohnungswert berechnen",
      description:
        "Erhalte sofortige Wohnungsbewertungen dank Fotoanalyse, Quartiersdaten und prognostischen Modellen.",
      ogTitle: "KI-gestützter Wohnungsbewerter",
      ogDescription:
        "Fotos hochladen, Zustand analysieren, Preisverlauf sehen und zukünftigen Wert in Minuten prognostizieren.",
    },
    nav: {
      home: "Startseite",
      howItWorks: "Funktionsweise",
      features: "Funktionen",
      pricing: "Preise",
      faq: "FAQ",
      blog: "Blog",
    },
    auth: {
      login: "Anmelden",
      signUp: "Registrieren",
    },
    hero: {
      title: "KI-gestützter Wohnungsbewertungsrechner",
      subtitle:
        "Lade Wohnungsfotos hoch und erhalte sofort fundierte Bewertungen mit Quartiersvergleich, Zustandsanalyse und Preisprognose.",
      cta: "Kostenlose Bewertung starten",
      tagline: "Vertraut von Profis in über 45 Städten",
      stats: [
        { label: "Fehlerspanne", value: "<4,8%" },
        { label: "Abgedeckte Städte", value: "120+" },
        { label: "Erstellte Reports", value: "38 Tsd." },
      ],
    },
    howItWorks: {
      title: "So funktioniert die Bewertung",
      subtitle: "In drei Schritten zur präzisen Immobilienanalyse",
      steps: [
        {
          title: "Wohnungsfotos hochladen",
          description:
            "Zeige Küche, Wohnzimmer, Bad und Fassade, damit die KI Renovierungsniveau und Lichtverhältnisse bewerten kann.",
        },
        {
          title: "Die KI prüft jedes Detail",
          description:
            "Computer Vision erkennt Ausstattungen, Modernisierungen und vergleicht mit Millionen geprüfter Transaktionen.",
        },
        {
          title: "Wert, Historie und Forecast erhalten",
          description:
            "Erhalte ein Gutachten mit Preisspanne, Vergleichsobjekten, Sanierungstipps und 12-Monats-Prognose.",
        },
      ],
    },
    features: {
      title: "Funktionen für datenbasierte Entscheidungen",
      subtitle:
        "Verstehe die Marktposition und das Potenzial deiner Wohnung.",
      items: [
        {
          title: "KI-Zustandsscore aus Fotos",
          description:
            "Erkennt Abnutzung, hochwertige Ausstattungen und Renovierungspotenzial in Sekunden.",
          icon: "camera",
        },
        {
          title: "Quartiers-Benchmarking",
          description:
            "Vergleiche mit geprüften Verkaufs- und Mietdaten sowie Renditen in deinem Mikromarkt.",
          icon: "map",
        },
        {
          title: "Interaktive Preishistorie",
          description:
            "Visualisiere zehn Jahre Marktverlauf mit Saisonalität und Renovierungseffekten.",
          icon: "history",
        },
        {
          title: "Prognose des zukünftigen Werts",
          description:
            "Prognostiziere Wertentwicklung mit makroökonomischen Kennzahlen und Wanderungsbewegungen.",
          icon: "forecast",
        },
      ],
    },
    uploadForm: {
      title: "Demo in 60 Sekunden testen",
      description:
        "Lade ein Raumfoto hoch und erhalte per E-Mail ein KI-Beispielgutachten für dein Viertel.",
      emailLabel: "Geschäftliche E-Mail",
      propertyTypeLabel: "Immobilientyp",
      propertyPlaceholder: "Typ auswählen",
      propertyOptions: ["Wohnung", "Loft", "Penthouse", "Studio"],
      fileLabel: "Wohnungsfoto hochladen",
      fileHint: "JPG oder PNG, max. 10 MB",
      submitLabel: "Beispielbericht senden",
      privacy: "Mit dem Absenden akzeptierst du unsere Datenschutzerklärung.",
      successMessage: "Danke! Prüfe dein Postfach für die Bewertung.",
    },
    pricing: {
      title: "Transparente Preismodelle",
      subtitle:
        "Starte kostenlos und erweitere auf tiefere Analysen, wenn dein Team bereit ist.",
      plans: [
        {
          name: "Starter",
          price: "0 €",
          period: "/Monat",
          description: "Ideal für Eigentümer, die das Tool testen.",
          features: [
            "3 KI-Bewertungen pro Monat",
            "Preisüberblick im Quartier",
            "Automatischer Zustandsscore",
          ],
          ctaLabel: "Jetzt gratis starten",
        },
        {
          name: "Professional",
          price: "59 €",
          period: "/Monat",
          description: "Für Makler und Investoren mit hohem Analysebedarf.",
          features: [
            "Unbegrenzte KI-Bewertungen",
            "Vergleichbare Verkäufe und Mieten",
            "12-Monats-Prognose & Risikoscore",
            "White-Label PDF-Reports",
          ],
          ctaLabel: "Zu Pro wechseln",
          popular: true,
        },
        {
          name: "Enterprise",
          price: "Kontakt aufnehmen",
          period: "",
          description: "Maßgeschneiderte Lösungen für Banken und Proptech-Teams.",
          features: [
            "API- & CRM-Integrationen",
            "Persönlicher Success Manager",
            "Portfolio-Monitoring-Dashboards",
          ],
          ctaLabel: "Demo anfragen",
        },
      ],
      footnote: "Alle kostenpflichtigen Pläne sind DSGVO-konform und beinhalten Prioritäts-Support.",
      popularLabel: "Beliebteste Wahl",
    },
    blog: {
      title: "Einblicke aus unserem Immobilien-Blog",
      subtitle:
        "Bleib informiert über Pricing-Strategien, KI-Anwendungen und urbane Markttrends.",
      viewAll: "Zum Blog",
      readMore: "Weiterlesen",
      posts: [
        {
          title: "Wie KI die Renovierungsbewertung verändert",
          category: "KI in der Immobilienwelt",
          excerpt:
            "Erfahre, wie Computer Vision hochwertige Ausstattungen und versteckte Mängel erkennt.",
          href: "/blog/ai-photo-analysis",
        },
        {
          title: "Städtische Markttrends 2025",
          category: "Markttrends",
          excerpt:
            "Wir zeigen Preisdynamiken in europäischen Metropolen für bessere Investmententscheidungen.",
          href: "/blog/2025-urban-trends",
        },
        {
          title: "Ein Pricing-Workflow für Profis",
          category: "Immobilien-Tipps",
          excerpt:
            "Automatisiere Vergleichswerte, Historien und Forecasts für überzeugende Kundengespräche.",
          href: "/blog/investor-pricing-workflow",
        },
      ],
    },
    testimonials: {
      title: "Vertrauen von innovativen Teams",
      subtitle:
        "Tausende Bewertungen für Agenturen, Banken und Proptech-Startups geliefert.",
      items: [
        {
          quote:
            "Die KI-Renovierungsscores stimmen mit unseren Inspektionen überein und sparen jede Woche Stunden ein.",
          name: "Sophie Meyer",
          role: "Maklerin, Berlin Living",
        },
        {
          quote:
            "Wir integrierten die Forecasts in unsere Kreditmodelle und steigerten die Sicherheit um 18%.",
          name: "Marco Ricci",
          role: "Leiter Risikomanagement, Milano Bank",
        },
        {
          quote:
            "Kunden lieben die Sofort-Reports – unsere Abschlussquote hat sich verdoppelt.",
          name: "Laura Gómez",
          role: "Gründerin, Madrid Homes",
        },
      ],
    },
    faq: {
      title: "Häufige Fragen",
      subtitle: "Alles Wichtige vor deiner Bewertung.",
      items: [
        {
          question: "Wie genau sind die KI-Bewertungen?",
          answer:
            "Der Medianfehler liegt unter 4,8% dank verifizierter Vergleichswerte, Zustandsscore und makroökonomischer Daten.",
        },
        {
          question: "Kann ich mehrere Fotos hochladen?",
          answer:
            "Ja, in den kostenpflichtigen Plänen kannst du bis zu 15 Bilder je Objekt analysieren lassen.",
        },
        {
          question: "Deckt ihr meine Stadt ab?",
          answer:
            "Wir unterstützen über 120 europäische Städte und erweitern aktuell die Abdeckung in den USA.",
        },
        {
          question: "Welche Dateiformate sind möglich?",
          answer:
            "JPEG und PNG bis 10 MB. HEIC-Dateien werden automatisch konvertiert.",
        },
        {
          question: "Sind meine Daten sicher?",
          answer:
            "Uploads werden verschlüsselt übertragen und gespeichert, sind DSGVO-konform und werden nach dem Report gelöscht.",
        },
      ],
      contact: "Noch Fragen? Unser Team hilft gerne weiter.",
    },
    finalCta: {
      title: "Jetzt Immobilie bewerten",
      subtitle:
        "Schließe dich Eigentümern und Maklern an, die mit KI schneller zum Abschluss kommen.",
      button: "Registrieren",
    },
    footer: {
      quickLinksTitle: "Schnellzugriff",
      quickLinks: [
        { label: "Über uns", href: "/#how-it-works" },
        { label: "Datenschutz", href: "/privacy" },
        { label: "Nutzungsbedingungen", href: "/terms" },
        { label: "Kontakt", href: "/contact" },
      ],
      seoText:
        "KI-Plattform für Immobilienbewertung: sofortige Reports, Zustandsscore, Quartiersvergleich und Preisprognosen.",
      rightsTemplate: "© {{year}} Skyline AI Valuator. Alle Rechte vorbehalten.",
      socialLabel: "Folge uns",
    },
    blogPage: {
      heroTitle: "Insights zur Immobilienintelligenz",
      heroSubtitle:
        "Artikel über KI-Bewertungen, Stadttrends und Best Practices im Pricing.",
      subscribeCta: "Newsletter abonnieren",
    },
    helpWidget: {
      label: "Hilfe",
      form: {
        title: "Wie können wir helfen?",
        description:
          "Schicken Sie uns eine Nachricht und wir melden uns innerhalb eines Werktags.",
        categoryLabel: "Kategorie",
        categories: [
          { value: "bug", label: "Fehler" },
          { value: "suggestion", label: "Vorschlag" },
          { value: "help", label: "Hilfe" },
        ],
        emailLabel: "E-Mail",
        emailPlaceholder: "du@example.com",
        messageLabel: "Nachricht",
        messagePlaceholder: "Beschreiben Sie Ihr Anliegen...",
        submitLabel: "Nachricht senden",
        successMessage: "Danke! Wir haben Ihre Anfrage erhalten.",
      },
    },
  },
};
