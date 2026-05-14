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
      demoUrl: "https://reaver-9qpb.onrender.com"
    },
    {
      id: "PROJECT_02",
      name: "GAIA",
      description: "Automated inventory and cash management system. Facilitates real-time tracking and financial oversight for retail operations.",
      tags: ['FastAPI', 'React', 'Tailwind', 'OpenAI API'],
      repoUrl: "https://github.com/Samuel-Urrego/Gaia",
      demoUrl: "https://amorycerezas-frontend.onrender.com/login"
    },
    {
      id: "BOT_01",
      name: "FAQ_BOT",
      description: "Vector-based FAQ bot utilizing RAG architecture to provide precise answers from technical documentation.",
      tags: ['FastAPI', 'RAG', 'Pinecone', 'Telegram'],
      repoUrl: "https://github.com/Samuel-Urrego/ChatBotVectorialDB/tree/FAQTI",
      demoUrl: "https://t.me/FAQTIExampleV1_bot"
    },
    {
      id: "BOT_02",
      name: "MEDICINE_BOT",
      description: "Medical knowledge bot leveraging RAG and vector databases to navigate complex clinical information.",
      tags: ['FastAPI', 'RAG', 'Pinecone', 'Telegram'],
      repoUrl: "https://github.com/Samuel-Urrego/ChatBotVectorialDB/tree/MedicineBOT",
      demoUrl: "https://t.me/MedicineExampleV1_bot"
    }
  ],
  es: [
    {
      id: "PROYECTO_01",
      name: "REAVER",
      description: "Sistema avanzado de gestión de tareas diseñado para optimizar flujos de trabajo y mejorar la productividad. Implementado con un backend robusto en FastAPI.",
      tags: ['FastAPI', 'React', 'Tailwind', 'OpenAI API'],
      repoUrl: "https://github.com/Samuel-Urrego/ReaverAPP",
      demoUrl: "https://reaver-9qpb.onrender.com"
    },
    {
      id: "PROYECTO_02",
      name: "GAIA",
      description: "Sistema automatizado de gestión de inventarios y caja. Facilita el seguimiento en tiempo real y la supervisión financiera para operaciones minoristas.",
      tags: ['FastAPI', 'React', 'Tailwind', 'OpenAI API'],
      repoUrl: "https://github.com/Samuel-Urrego/Gaia",
      demoUrl: "https://amorycerezas-frontend.onrender.com/login"
    },
    {
      id: "BOT_01",
      name: "FAQ_BOT",
      description: "Bot de preguntas frecuentes basado en vectores que utiliza arquitectura RAG para proporcionar respuestas precisas a partir de documentación técnica.",
      tags: ['FastAPI', 'RAG', 'Pinecone', 'Telegram'],
      repoUrl: "https://github.com/Samuel-Urrego/ChatBotVectorialDB/tree/FAQTI",
      demoUrl: "https://t.me/FAQTIExampleV1_bot"
    },
    {
      id: "BOT_02",
      name: "MEDICINE_BOT",
      description: "Bot de conocimientos médicos que aprovecha bases de datos vectoriales y RAG para navegar por información clínica compleja.",
      tags: ['FastAPI', 'RAG', 'Pinecone', 'Telegram'],
      repoUrl: "https://github.com/Samuel-Urrego/ChatBotVectorialDB/tree/MedicineBOT",
      demoUrl: "https://t.me/MedicineExampleV1_bot"
    }
  ]
};

export const logsContent = {
  en: [
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
