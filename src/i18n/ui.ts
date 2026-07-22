export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.stack': 'Stack',
    'nav.projects': 'Projects',
    'nav.log': 'Log',
    'nav.connect': 'Connect',
    'hero.status': '// SYSTEM STATUS: OPTIMIZED',
    'hero.title.backend': 'Backend',
    'hero.title.architect': 'Architect',
    'hero.title.orchestrator': 'AI Orchestrator',
    'hero.view_code': '[ VIEW CODE ]',
    'section.stack': 'Core Stack',
    'section.projects': 'Deployed_Logic',
    'section.log': 'Logic_Log.exe',
    'log.view_credentials': '> VIEW_SYSTEM_CREDENTIALS',
    'modal.warning': '> [WARNING]: Remote credentials server currently unreachable. Displaying cached entries only.',
    'modal.action_locked': '[ LOCKED_IN_OFFICE ]',
    'footer.rights': '© 2026 SYSTEM_ARCHITECT. ALL RIGHTS RESERVED.',
    'footer.linkedin': 'LINKEDIN_LOCKED'
  },
  es: {
    'nav.stack': 'Tecnologías',
    'nav.projects': 'Proyectos',
    'nav.log': 'Bitácora',
    'nav.connect': 'Contacto',
    'hero.status': '// ESTADO DEL SISTEMA: OPTIMIZADO',
    'hero.title.backend': 'Arquitecto',
    'hero.title.architect': 'Backend',
    'hero.title.orchestrator': 'Orquestador IA',
    'hero.view_code': '[ VER CÓDIGO ]',
    'section.stack': 'Stack Principal',
    'section.projects': 'Lógica_Desplegada',
    'section.log': 'Registro_Lógico.exe',
    'log.view_credentials': '> VER_CREDENCIALES_SISTEMA',
    'modal.warning': '> [ADVERTENCIA]: Servidor de credenciales remoto inalcanzable. Mostrando solo entradas en caché.',
    'modal.action_locked': '[ BLOQUEADO_EN_OFICINA ]',
    'footer.rights': '© 2026 ARQUITECTO_SISTEMAS. TODOS LOS DERECHOS RESERVADOS.',
    'footer.linkedin': 'LINKEDIN_BLOQUEADO'
  },
} as const;

export const projectsContent = {
  en: [
    {
      id: "PROJECT_01",
      name: "REAVER",
      description: "Advanced task management system designed to streamline workflows and improve productivity. Implemented with a robust FastAPI backend.",
      tags: ['FastAPI', 'React', 'Tailwind', 'OpenAI API'],
      repoUrl: "https://github.com/Samuel-Urrego/ReaverAPP",
      demoUrl: "https://reaver-9qpb.onrender.com",
      image: "/reaverlogo.jpg"
    },
    {
      id: "PROJECT_02",
      name: "GAIA",
      description: "Automated inventory and cash management system. Facilitates real-time tracking and financial oversight for retail operations.",
      tags: ['FastAPI', 'React', 'Tailwind', 'OpenAI API'],
      repoUrl: "https://github.com/Samuel-Urrego/Gaia",
      demoUrl: "https://amorycerezas-frontend.onrender.com/login",
      image: "/gaialogo.png"
    },
    {
      id: "BOT_01",
      name: "FAQ_BOT",
      description: "Vector-based FAQ bot utilizing RAG architecture to provide precise answers from technical documentation.",
      tags: ['FastAPI', 'RAG', 'Pinecone', 'Telegram'],
      repoUrl: "https://github.com/Samuel-Urrego/ChatBotVectorialDB/tree/FAQTI",
      demoUrl: "https://t.me/FAQTIExampleV1_bot",
      image: "/faqbotlogo.jpeg"
    },
    {
      id: "BOT_02",
      name: "MEDICINE_BOT",
      description: "Medical knowledge bot leveraging RAG and vector databases to navigate complex clinical information.",
      tags: ['FastAPI', 'RAG', 'Pinecone', 'Telegram'],
      repoUrl: "https://github.com/Samuel-Urrego/ChatBotVectorialDB/tree/MedicineBOT",
      demoUrl: "https://t.me/MedicineExampleV1_bot",
      image: "/medicinebotlogo.png"
    },
    {
      id: "LIB_01",
      name: "ARAXYS",
      description: "Enterprise-grade Plug & Play security library for FastAPI. 33+ modules: CORS, JWT, Rate Limiting, MFA, WebAuthn, OAuth2, RBAC, Prompt Injection, Malware Scan, XXE Protection, AWS WAF Bridge, Threat Intelligence (8 sources), GraphQL Security, Dynamic Secrets Rotation, and Encrypted Audit Logging. 1958 tests.",
      tags: ['Python', 'FastAPI', 'Security', 'PyPI', 'AWS WAF'],
      repoUrl: "https://github.com/Samuel-Urrego/Araxys",
      demoUrl: "https://pypi.org/project/araxys/",
      image: "/araxyslogo.png"
    },
    {
      id: "LIB_02",
      name: "SINGULARITYSQL",
      description: "Python library + CLI bridging SQL Server and Pydantic v2. Auto-generates typed data models from stored procedure metadata — zero manual mapping. Three version strategies: Modern (2016+), Legacy (2008-2014), Azure SQL. Dynamic runtime or source code output.",
      tags: ['Python', 'SQL Server', 'Pydantic v2', 'CLI', 'Code Gen'],
      repoUrl: "https://github.com/Samuel-Urrego/Singularity",
      demoUrl: "https://pypi.org/project/singularitysql/",
      image: "/singularity-logo.png"
    },
    {
      id: "MCP_01",
      name: "SQLSERVERMCP",
      description: "MCP (Model Context Protocol) server for SQL Server built with .NET 10. Lets AI agents explore database schemas, indexes, stored procedures, and execute read-only queries. 7 tools with defense-in-depth security: db_datareader + query validator + ReadOnly intent.",
      tags: ['.NET 10', 'MCP', 'SQL Server', 'C#', 'AI Agents'],
      repoUrl: "https://github.com/Samuel-Urrego/SQLSERVERMCP",
      image: "/sqlservermcp-logo.png"
    },
    {
      id: "PROJECT_03",
      name: "SUITE",
      description: "Enterprise corporate portal for Porcicarnes S.A. Built with .NET 10, Blazor, and Clean Architecture. 11 modules: IT Support, Accounting, Transport, HR, Payroll, Marketing, and more. Integrates Microsoft Entra ID, APICENTRAL Gateway, DIAN, SharePoint, and Google Maps. Dapper + stored procedures with audit trail across 83+ SPs and 168 tests.",
      tags: ['.NET 10', 'Blazor', 'Clean Architecture', 'MudBlazor', 'SQL Server', 'Entra ID'],
      repoUrl: undefined
    }
  ],
  es: [
    {
      id: "PROYECTO_01",
      name: "REAVER",
      description: "Sistema avanzado de gestión de tareas diseñado para optimizar flujos de trabajo y mejorar la productividad. Implementado con un backend robusto en FastAPI.",
      tags: ['FastAPI', 'React', 'Tailwind', 'OpenAI API'],
      repoUrl: "https://github.com/Samuel-Urrego/ReaverAPP",
      demoUrl: "https://reaver-9qpb.onrender.com",
      image: "/reaverlogo.jpg"
    },
    {
      id: "PROYECTO_02",
      name: "GAIA",
      description: "Sistema automatizado de gestión de inventarios y caja. Facilita el seguimiento en tiempo real y la supervisión financiera para operaciones minoristas.",
      tags: ['FastAPI', 'React', 'Tailwind', 'OpenAI API'],
      repoUrl: "https://github.com/Samuel-Urrego/Gaia",
      demoUrl: "https://amorycerezas-frontend.onrender.com/login",
      image: "/gaialogo.png"
    },
    {
      id: "BOT_01",
      name: "FAQ_BOT",
      description: "Bot de preguntas frecuentes basado en vectores que utiliza arquitectura RAG para proporcionar respuestas precisas a partir de documentación técnica.",
      tags: ['FastAPI', 'RAG', 'Pinecone', 'Telegram'],
      repoUrl: "https://github.com/Samuel-Urrego/ChatBotVectorialDB/tree/FAQTI",
      demoUrl: "https://t.me/FAQTIExampleV1_bot",
      image: "/faqbotlogo.jpeg"
    },
    {
      id: "BOT_02",
      name: "MEDICINE_BOT",
      description: "Bot de conocimientos médicos que aprovecha bases de datos vectoriales y RAG para navegar por información clínica compleja.",
      tags: ['FastAPI', 'RAG', 'Pinecone', 'Telegram'],
      repoUrl: "https://github.com/Samuel-Urrego/ChatBotVectorialDB/tree/MedicineBOT",
      demoUrl: "https://t.me/MedicineExampleV1_bot",
      image: "/medicinebotlogo.png"
    },
    {
      id: "LIB_01",
      name: "ARAXYS",
      description: "Librería de seguridad Plug & Play de nivel empresarial para FastAPI. 33+ módulos: CORS, JWT, Rate Limiting, MFA, WebAuthn, OAuth2, RBAC, Prompt Injection, Malware Scan, XXE Protection, AWS WAF Bridge, Threat Intelligence (8 fuentes), GraphQL Security, Secrets Rotation y Auditoría Encriptada. 1958 tests.",
      tags: ['Python', 'FastAPI', 'Seguridad', 'PyPI', 'AWS WAF'],
      repoUrl: "https://github.com/Samuel-Urrego/Araxys",
      demoUrl: "https://pypi.org/project/araxys/",
      image: "/araxyslogo.png"
    },
    {
      id: "LIB_02",
      name: "SINGULARITYSQL",
      description: "Librería Python + CLI que conecta SQL Server con Pydantic v2. Auto-genera modelos tipados desde metadatos de stored procedures — sin mapeo manual. Tres estrategias: Modern (2016+), Legacy (2008-2014), Azure SQL. Salida dinámica o código fuente.",
      tags: ['Python', 'SQL Server', 'Pydantic v2', 'CLI', 'Code Gen'],
      repoUrl: "https://github.com/Samuel-Urrego/Singularity",
      demoUrl: "https://pypi.org/project/singularitysql/",
      image: "/singularity-logo.png"
    },
    {
      id: "MCP_01",
      name: "SQLSERVERMCP",
      description: "Servidor MCP (Model Context Protocol) para SQL Server construido con .NET 10. Permite que agentes de IA exploren esquemas de BD, índices, stored procedures y ejecuten consultas read-only. 7 herramientas con seguridad en profundidad.",
      tags: ['.NET 10', 'MCP', 'SQL Server', 'C#', 'AI Agents'],
      repoUrl: "https://github.com/Samuel-Urrego/SQLSERVERMCP",
      image: "/sqlservermcp-logo.png"
    },
    {
      id: "PROYECTO_03",
      name: "SUITE",
      description: "Portal corporativo empresarial para Porcicarnes S.A. Construido con .NET 10, Blazor y Clean Architecture. 11 módulos: Soporte TI, Financiera, Transporte, RH, Nómina, Publicidad y más. Integra Microsoft Entra ID, APICENTRAL Gateway, DIAN, SharePoint y Google Maps. Dapper + stored procedures con auditoría completa. 83+ SPs y 168 tests.",
      tags: ['.NET 10', 'Blazor', 'Clean Architecture', 'MudBlazor', 'SQL Server', 'Entra ID'],
      repoUrl: undefined
    }
  ]
};

export const logsContent = {
  en: [
    {
      date: "2026.07.22 @ 14:00:00",
      title: "SUITE V1 — ENTERPRISE PORTAL ARCHITECTURE",
      description: "Delivered SUITE, a corporate portal with 11 modules for IT support, accounting, transport, HR, and marketing. .NET 10 + Blazor + Clean Architecture with 83+ stored procedures, APICENTRAL Gateway integration, and full audit trail."
    },
    {
      date: "2026.07.22 @ 10:00:00",
      title: "SQLSERVERMCP RELEASE",
      description: "Published SqlServerMcp — an MCP (Model Context Protocol) server for SQL Server built with .NET 10. Lets AI agents explore database schemas, indexes, stored procedures, and execute read-only queries with defense-in-depth security."
    },
    {
      date: "2026.05.26 @ 14:30:00",
      title: "SINGULARITYSQL LIB RELEASE",
      description: "Published SingularitySQL to PyPI — a Python library + CLI that auto-generates Pydantic v2 models from SQL Server stored procedure metadata with zero manual mapping."
    },
    {
      date: "2026.05.15 @ 12:00:00",
      title: "ARAXYS V0.14 — AWS WAF, THREAT INTEL, GRAPHQL SECURITY",
      description: "Published Araxys v0.14 to PyPI with AWS WAF Bridge (OpenAPI → WAF rules), Threat Intelligence Feeds (8 sources), GraphQL Security, Security Headers Audit, and Dynamic Secrets Rotation. 1958 tests across 33+ modules."
    },
    {
      date: "2026.05.10 @ 10:00:00",
      title: "SQL SECURITY OPTIMIZATION",
      description: "Facilitated secure and user-friendly SQL script execution for the support area, reducing manual errors and improving response times."
    },
    {
      date: "2026.04.04 @ 12:30:00",
      title: "REAVER SOFTWARE RELEASE",
      description: "Developed and deployed Reaver, significantly streamlining internal task management and process automation."
    },
    {
      date: "2025.12.04 @ 09:00:00",
      title: "ACADEMIC EXCELLENCE RECOGNITION",
      description: "Selected as the top student of the program at SENA, demonstrating high technical proficiency and leadership."
    }
  ],
  es: [
    {
      date: "22.07.2026 @ 14:00:00",
      title: "SUITE V1 — ARQUITECTURA PORTAL CORPORATIVO",
      description: "Entregué SUITE, un portal corporativo con 11 módulos para soporte TI, finanzas, transporte, RH y publicidad. .NET 10 + Blazor + Clean Architecture con 83+ stored procedures, integración con APICENTRAL Gateway y auditoría completa."
    },
    {
      date: "22.07.2026 @ 10:00:00",
      title: "LANZAMIENTO DE SQLSERVERMCP",
      description: "Publicación de SqlServerMcp — un servidor MCP (Model Context Protocol) para SQL Server construido con .NET 10. Permite que agentes de IA exploren esquemas de BD, índices, stored procedures y ejecuten consultas read-only con seguridad en profundidad."
    },
    {
      date: "26.05.2026 @ 14:30:00",
      title: "LANZAMIENTO DE SINGULARITYSQL LIB",
      description: "Publicación de SingularitySQL en PyPI — una librería Python + CLI que auto-genera modelos Pydantic v2 desde metadatos de stored procedures de SQL Server sin mapeo manual."
    },
    {
      date: "15.05.2026 @ 12:00:00",
      title: "ARAXYS V0.14 — AWS WAF, THREAT INTEL, GRAPHQL SECURITY",
      description: "Publicación de Araxys v0.14 en PyPI con AWS WAF Bridge (OpenAPI → reglas WAF), Threat Intelligence Feeds (8 fuentes), GraphQL Security, Security Headers Audit y Dynamic Secrets Rotation. 1958 tests en 33+ módulos."
    },
    {
      date: "10.05.2026 @ 10:00:00",
      title: "OPTIMIZACIÓN DE SEGURIDAD SQL",
      description: "Facilité la ejecución segura y amigable de scripts SQL para el área de soporte, reduciendo errores manuales y mejorando tiempos de respuesta."
    },
    {
      date: "04.04.2026 @ 12:30:00",
      title: "LANZAMIENTO DE SOFTWARE REAVER",
      description: "Desarrollé y desplegué Reaver, optimizando significativamente la gestión de tareas internas y la automatización de procesos."
    },
    {
      date: "04.12.2025 @ 09:00:00",
      title: "RECONOCIMIENTO A LA EXCELENCIA ACADÉMICA",
      description: "Seleccionado como el mejor estudiante de mi programa en el SENA, demostrando alta competencia técnica y liderazgo."
    }
  ]
};

export const credentialsContent = {
  en: [
    {
      title: "SENA ACADEMIC RECOGNITION",
      institution: "SENA - COLOMBIA",
      tags: ['BEST STUDENT', 'TOP PERFORMANCE'],
      actionLabel: "[ LOCKED_IN_OFFICE ]",
      actionUrl: "#"
    }
  ],
  es: [
    {
      title: "RECONOCIMIENTO ACADÉMICO SENA",
      institution: "SENA - COLOMBIA",
      tags: ['MEJOR ESTUDIANTE', 'ALTO RENDIMIENTO'],
      actionLabel: "[ BLOQUEADO_EN_OFICINA ]",
      actionUrl: "#"
    }
  ]
};
