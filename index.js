
const modules = [
  {
    n: 20,
    title: "Datos de seguridad de la red",
    category: "red",
    tag: "Red y monitoreo",
    icon: "⌁",
    color: "#7658e8",
    pale: "#eee9ff",
    short: "Los registros ayudan a investigar la actividad de una red.",
    summary: "Los datos de seguridad permiten conocer qué ocurre entre los dispositivos conectados. Incluyen alertas, registros de sesiones, transacciones, capturas de paquetes y estadísticas. También se utilizan registros de computadoras, servidores y dispositivos de red para investigar comportamientos sospechosos.",
    concepts: [
      "Datos de alerta: avisos generados por herramientas de seguridad.",
      "Datos de sesión: muestran quién se comunicó, cuándo y durante cuánto tiempo.",
      "Datos de transacción: registran solicitudes y respuestas.",
      "Capturas de paquetes: permiten analizar el tráfico de la red.",
      "Registros de host y red: muestran eventos de computadoras y dispositivos.",
      "Syslog ayuda a centralizar y consultar registros."
    ],
    example: "En una escuela, una computadora empieza a enviar grandes cantidades de datos durante la madrugada. El personal revisa los registros y compara su actividad con el comportamiento habitual.",
    takeaway: "Los registros ayudan a comprender lo ocurrido y deben protegerse porque pueden contener información sensible."
  },
  {
    n: 21,
    title: "Evaluación de alertas",
    category: "red",
    tag: "Detección",
    icon: "◉",
    color: "#e85d9e",
    pale: "#ffebf4",
    short: "Las alertas se revisan para comprobar si representan una amenaza real.",
    summary: "Las alertas son avisos de posibles problemas de seguridad. El analista debe revisar su origen, el contexto, los registros relacionados y la gravedad. No todas las alertas representan ataques: algunas son falsas alarmas y otras pueden indicar una amenaza real.",
    concepts: [
      "IDS e IPS pueden generar alertas de seguridad.",
      "Verdadero positivo: se detecta una amenaza real.",
      "Falso positivo: una actividad legítima se marca como peligrosa.",
      "Verdadero negativo: una actividad normal no genera una alerta.",
      "Falso negativo: una amenaza no es detectada.",
      "La prioridad depende de la gravedad y de la evidencia."
    ],
    example: "Una aplicación autorizada genera muchas conexiones y activa una alerta. El analista verifica qué programa las produjo y consulta los registros antes de decidir qué hacer.",
    takeaway: "Investigar las alertas permite distinguir las falsas alarmas de los problemas reales."
  },
  {
    n: 22,
    title: "Gobernanza y cumplimiento",
    category: "gestion",
    tag: "Políticas y ética",
    icon: "⚖",
    color: "#e5a52d",
    pale: "#fff5d9",
    short: "Las normas y responsabilidades ayudan a proteger la información.",
    summary: "La gobernanza establece cómo se toman las decisiones de seguridad y quién es responsable. El cumplimiento consiste en respetar las leyes, normas y políticas aplicables. La ética informática requiere respetar la privacidad, actuar honestamente y utilizar las herramientas solo con autorización.",
    concepts: [
      "Gobernanza: dirección y supervisión de la seguridad.",
      "Políticas: reglas generales de una organización.",
      "Procedimientos: pasos para realizar una tarea correctamente.",
      "Cumplimiento: respeto de las normas y leyes aplicables.",
      "NIST e ISO/IEC 27000 ofrecen marcos de referencia.",
      "La ética incluye privacidad, confidencialidad y responsabilidad."
    ],
    example: "Una empresa establece que solamente el personal autorizado puede consultar los expedientes de sus clientes. También crea un procedimiento para registrar cada acceso.",
    takeaway: "La seguridad necesita tecnología, reglas claras, responsables y decisiones éticas."
  },
  {
    n: 23,
    title: "Pruebas de seguridad de la red",
    category: "red",
    tag: "Evaluación autorizada",
    icon: "⌕",
    color: "#299dc8",
    pale: "#e2f7ff",
    short: "Las pruebas permiten encontrar debilidades antes de que sean aprovechadas.",
    summary: "Las evaluaciones de seguridad ayudan a identificar puntos débiles y comprobar si las defensas funcionan. Se pueden revisar configuraciones, servicios y tráfico. Las pruebas de penetración simulan ataques controlados para comprobar el impacto de ciertas debilidades. Siempre requieren autorización y límites definidos.",
    concepts: [
      "Definir objetivos, permisos y alcance antes de realizar una prueba.",
      "El escaneo permite identificar equipos y servicios.",
      "Las pruebas de penetración evalúan debilidades en condiciones controladas.",
      "Los resultados deben documentarse.",
      "Los problemas se priorizan según el riesgo.",
      "Nunca se deben probar sistemas ajenos sin autorización."
    ],
    example: "Una institución autoriza una revisión de su red. El equipo descubre un servicio desactualizado, documenta el problema y recomienda instalar una actualización segura.",
    takeaway: "Las pruebas autorizadas ayudan a descubrir y corregir fallos antes de que causen daños."
  },
  {
    n: 24,
    title: "Inteligencia contra las amenazas",
    category: "gestion",
    tag: "Información preventiva",
    icon: "✧",
    color: "#8b63d9",
    pale: "#f0e8ff",
    short: "Conocer las amenazas permite prepararse y prevenir posibles ataques.",
    summary: "La inteligencia de amenazas consiste en recopilar y analizar información sobre atacantes, métodos e indicadores de posibles ataques. Las fuentes pueden incluir registros internos, avisos de proveedores e informes especializados. La información debe ser confiable, actual y relevante.",
    concepts: [
      "Los indicadores de compromiso son señales relacionadas con actividad sospechosa.",
      "Las fuentes internas muestran eventos de los propios sistemas.",
      "Las fuentes externas informan sobre amenazas conocidas.",
      "La información debe verificarse y mantenerse actualizada.",
      "Los hallazgos pueden ayudar a ajustar las defensas.",
      "Compartir información de forma segura puede beneficiar a otras organizaciones."
    ],
    example: "Una organización recibe un aviso confiable sobre correos que suplantan a un proveedor. Advierte al personal y revisa si ha recibido mensajes similares.",
    takeaway: "Analizar información sobre amenazas permite prepararse mejor y tomar medidas preventivas."
  },
  {
    n: 25,
    title: "Evaluación de vulnerabilidades de terminales",
    category: "gestion",
    tag: "Equipos y debilidades",
    icon: "▣",
    color: "#26a99a",
    pale: "#def9f3",
    short: "Se revisan computadoras y servidores para detectar y corregir debilidades.",
    summary: "Los terminales incluyen computadoras, portátiles y servidores conectados a una red. La evaluación permite identificar programas desactualizados, configuraciones inseguras y vulnerabilidades conocidas. CVSS ayuda a expresar la gravedad técnica de una vulnerabilidad, pero también debe considerarse el contexto de la organización.",
    concepts: [
      "El inventario identifica los equipos y programas instalados.",
      "Una vulnerabilidad es una debilidad que puede afectar la seguridad.",
      "CVSS ayuda a expresar la gravedad técnica.",
      "La prioridad depende del impacto y la exposición.",
      "Las actualizaciones corrigen muchos problemas conocidos.",
      "Después de corregir una vulnerabilidad, se debe verificar la solución."
    ],
    example: "El equipo técnico descubre computadoras con una versión antigua de un programa. Evalúa el riesgo, instala la actualización aprobada y comprueba que el problema esté corregido.",
    takeaway: "Descubrir una vulnerabilidad es solo el primer paso: también hay que priorizarla y corregirla."
  },
  {
    n: 26,
    title: "Administración de riesgos y controles",
    category: "gestion",
    tag: "Prevención y protección",
    icon: "⬡",
    color: "#ed8060",
    pale: "#fff0e9",
    short: "Se analizan los riesgos y se eligen controles para reducir daños.",
    summary: "La administración de riesgos identifica los recursos que deben protegerse, las amenazas que podrían afectarlos y las vulnerabilidades existentes. Después se evalúan la probabilidad y el impacto, se priorizan los riesgos y se seleccionan controles preventivos, detectivos o correctivos.",
    concepts: [
      "Activo: recurso valioso, como información o equipos.",
      "Amenaza: situación o actor que podría causar daño.",
      "Vulnerabilidad: debilidad que puede ser aprovechada.",
      "Riesgo: posibilidad de que una amenaza cause un impacto.",
      "Los controles preventivos intentan evitar incidentes.",
      "Los controles detectivos identifican problemas y los correctivos ayudan a recuperarse."
    ],
    example: "Una empresa identifica que perder sus archivos sería un problema grave. Establece copias de respaldo, limita los permisos y prueba periódicamente la recuperación de los datos.",
    takeaway: "Administrar los riesgos permite elegir medidas de protección adecuadas para cada situación."
  },
  {
    n: 27,
    title: "Respuesta a incidentes e informática forense",
    category: "respuesta",
    tag: "Investigación y recuperación",
    icon: "⌕",
    color: "#4d8ee8",
    pale: "#e6f0ff",
    short: "Se investigan incidentes, se conserva la evidencia y se recuperan los sistemas.",
    summary: "Cuando ocurre un incidente de seguridad, es necesario investigar qué sucedió, reducir los daños y recuperar los servicios. La informática forense analiza evidencias digitales de forma ordenada. La respuesta a incidentes incluye preparación, detección, análisis, contención, eliminación de la amenaza, recuperación y revisión posterior.",
    concepts: [
      "Preparación: establecer planes, responsables y recursos.",
      "Detección y análisis: reconocer el incidente y comprender su alcance.",
      "Contención: limitar la propagación y los daños.",
      "Erradicación: eliminar la causa o amenaza identificada.",
      "Recuperación: restablecer los sistemas de forma controlada.",
      "La evidencia digital debe conservarse y documentarse adecuadamente."
    ],
    example: "Una organización detecta accesos sospechosos a un servidor. El equipo autorizado registra los hallazgos, limita el incidente, investiga la evidencia y recupera los servicios de forma segura.",
    takeaway: "Una respuesta organizada reduce daños, ayuda a recuperar los sistemas y permite aprender del incidente."
  }
];

const glossary = [
  ["Ciberseguridad", "Medidas y prácticas para proteger sistemas, redes y datos."],
  ["Alerta", "Aviso que indica una posible actividad sospechosa."],
  ["SIEM", "Herramienta que reúne y analiza registros de seguridad."],
  ["IDS / IPS", "Sistemas que detectan o ayudan a prevenir actividad sospechosa."],
  ["Vulnerabilidad", "Debilidad que puede afectar la seguridad de un sistema."],
  ["Amenaza", "Algo que podría causar daño a un sistema o a sus datos."],
  ["Riesgo", "Posibilidad de que una amenaza cause consecuencias negativas."],
  ["Control de seguridad", "Medida que ayuda a prevenir, detectar o corregir problemas."],
  ["CVSS", "Sistema que expresa la gravedad técnica de una vulnerabilidad."],
  ["Informática forense", "Análisis ordenado de evidencias digitales."],
  ["Incidente", "Evento que afecta o puede afectar la seguridad."],
  ["Contención", "Acciones para limitar los daños de un incidente."]
];

const quiz = [
  {
    q: "¿Para qué sirven los registros de seguridad de la red?",
    a: [
      "Para decorar el panel de control.",
      "Para investigar eventos y actividades sospechosas.",
      "Para garantizar que nunca habrá ataques."
    ],
    correct: 1,
    why: "Los registros permiten analizar eventos y conexiones para comprender lo ocurrido."
  },
  {
    q: "¿Qué debe hacer un analista al recibir una alerta?",
    a: [
      "Validarla con contexto y evidencia.",
      "Borrarla inmediatamente.",
      "Asumir que siempre es un ataque real."
    ],
    correct: 0,
    why: "Las alertas pueden ser falsas o verdaderas, por eso deben investigarse."
  },
  {
    q: "¿Qué representa la gobernanza de ciberseguridad?",
    a: [
      "Solo comprar computadoras nuevas.",
      "Evitar documentar las decisiones.",
      "Reglas, responsabilidades y supervisión de la seguridad."
    ],
    correct: 2,
    why: "La gobernanza define cómo se toman decisiones y quién es responsable."
  },
  {
    q: "¿Qué condición es esencial para hacer una prueba de penetración?",
    a: [
      "Hacerla en cualquier sitio sin avisar.",
      "Contar con autorización y alcance definido.",
      "No registrar los resultados."
    ],
    correct: 1,
    why: "Las pruebas de seguridad deben ser autorizadas y planificadas."
  },
  {
    q: "¿Qué aporta la inteligencia de amenazas?",
    a: [
      "Información para comprender amenazas y prepararse.",
      "La eliminación automática de todos los riesgos.",
      "Una razón para ignorar las alertas."
    ],
    correct: 0,
    why: "La información confiable ayuda a convertir los hallazgos en medidas preventivas."
  },
  {
    q: "¿Para qué se utiliza CVSS?",
    a: [
      "Para medir la velocidad de internet.",
      "Para crear contraseñas.",
      "Para expresar la gravedad técnica de vulnerabilidades."
    ],
    correct: 2,
    why: "CVSS ayuda a describir la gravedad técnica de una vulnerabilidad."
  },
  {
    q: "¿Cuál es un ejemplo de control preventivo?",
    a: [
      "No hacer nada después de un problema.",
      "Aplicar autenticación multifactor y limitar accesos.",
      "Borrar todos los registros."
    ],
    correct: 1,
    why: "La autenticación multifactor y los permisos limitados reducen el riesgo de accesos no autorizados."
  },
  {
    q: "¿Qué es importante durante la respuesta a un incidente?",
    a: [
      "Conservar evidencia, contener el problema y seguir un plan.",
      "Cambiar los hechos para que parezca menos grave.",
      "Apagar todos los sistemas sin evaluar el impacto."
    ],
    correct: 0,
    why: "Una respuesta organizada reduce daños y facilita la recuperación."
  }
];

/* ELEMENTOS PRINCIPALES */

const grid = document.getElementById("moduleGrid");
const modal = document.getElementById("moduleModal");

let currentModule = 0;
let activeFilter = "todos";

/* CREAR LAS TARJETAS */

function renderModules() {
  const search = document
    .getElementById("moduleSearch")
    .value.trim()
    .toLowerCase();

  const filteredModules = modules.filter(module => {
    const matchesCategory =
      activeFilter === "todos" ||
      module.category === activeFilter;

    const searchableText = (
      module.title + " " +
      module.tag + " " +
      module.short + " " +
      module.summary
    ).toLowerCase();

    return matchesCategory && searchableText.includes(search);
  });

  document.getElementById("visibleCount").textContent =
    String(filteredModules.length).padStart(2, "0");

  document.getElementById("emptyState")
    .classList.toggle("hidden", filteredModules.length > 0);

  grid.innerHTML = filteredModules.map(module => `
    <button
      class="module-card"
      style="
        --card-color: ${module.color};
        --card-pale: ${module.pale};
      "
      data-module="${module.n}"
      aria-label="Abrir módulo ${module.n}: ${module.title}"
    >
      <span class="card-top">
        <span class="card-icon">${module.icon}</span>
        <span class="card-number">${module.n} / 27</span>
      </span>

      <span class="card-tag">${module.tag}</span>
      <h3>${module.title}</h3>
      <p>${module.short}</p>
      <span class="card-link">Explorar tema ↗</span>
    </button>
  `).join("");

  grid.querySelectorAll("[data-module]").forEach(button => {
    button.addEventListener("click", () => {
      openModule(Number(button.dataset.module));
    });
  });
}

/* ABRIR VENTANA DE UN MÓDULO */

function openModule(number) {
  currentModule = modules.findIndex(
    module => module.n === number
  );

  if (currentModule < 0) return;

  const module = modules[currentModule];

  modal.style.setProperty("--modal-color", module.color);
  modal.style.setProperty("--modal-pale", module.pale);

  document.getElementById("modalNumber").textContent =
    `MÓDULO ${module.n}`;

  document.getElementById("modalCategory").textContent =
    module.tag.toUpperCase();

  document.getElementById("modalIcon").textContent = module.icon;
  document.getElementById("modalTitle").textContent = module.title;
  document.getElementById("modalSummary").textContent = module.summary;

  const concepts = document.getElementById("modalConcepts");
  concepts.replaceChildren();

  module.concepts.forEach(concept => {
    const li = document.createElement("li");
    li.textContent = concept;
    concepts.appendChild(li);
  });

  document.getElementById("modalExample").textContent =
    module.example;

  document.getElementById("modalTakeaway").textContent =
    module.takeaway;

  document.getElementById("prevModule").disabled =
    currentModule === 0;

  document.getElementById("nextModule").textContent =
    currentModule === modules.length - 1
      ? "Volver al inicio ↗"
      : "Siguiente módulo →";

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  document.getElementById("closeModal").focus();
}

/* CERRAR VENTANA */

function closeModule() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

document.getElementById("moduleSearch")
  .addEventListener("input", renderModules);

document.querySelectorAll(".filter-pill").forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    document.querySelectorAll(".filter-pill").forEach(pill => {
      pill.classList.toggle("active", pill === button);
    });

    renderModules();
  });
});

document.getElementById("closeModal")
  .addEventListener("click", closeModule);

modal.querySelector("[data-close-modal]")
  .addEventListener("click", closeModule);

document.addEventListener("keydown", event => {
  if (
    event.key === "Escape" &&
    !modal.classList.contains("hidden")
  ) {
    closeModule();
  }
});

document.getElementById("prevModule")
  .addEventListener("click", () => {
    if (currentModule > 0) {
      openModule(modules[currentModule - 1].n);
    }
  });

document.getElementById("nextModule")
  .addEventListener("click", () => {
    if (currentModule < modules.length - 1) {
      openModule(modules[currentModule + 1].n);
    } else {
      closeModule();
    }
  });

/* GLOSARIO */

const glossaryGrid = document.getElementById("glossaryGrid");

glossary.forEach(([term, description]) => {
  const article = document.createElement("article");
  article.className = "glossary-item";

  const title = document.createElement("h3");
  title.textContent = term;

  const paragraph = document.createElement("p");
  paragraph.textContent = description;

  article.append(title, paragraph);
  glossaryGrid.appendChild(article);
});

/* CASO PRÁCTICO */

const scenarioButtons = document.querySelectorAll(
  "#scenarioOptions button"
);

scenarioButtons.forEach(button => {
  button.addEventListener("click", () => {
    const feedback = document.getElementById("scenarioFeedback");
    const isCorrect = button.dataset.correct === "true";

    scenarioButtons.forEach(option => {
      option.disabled = true;

      if (option.dataset.correct === "true") {
        option.classList.add("correct");
      }
    });

    if (isCorrect) {
      feedback.textContent =
        "¡Correcto! Revisar la evidencia y seguir el procedimiento permite actuar responsablemente.";
      feedback.style.color = "#8af0d6";
    } else {
      button.classList.add("incorrect");
      feedback.textContent =
        "Esa opción no es segura. Lo adecuado es investigar con evidencia y seguir el procedimiento.";
      feedback.style.color = "#ffd2e5";
    }
  });
});

/* CUESTIONARIO */

let questionIndex = 0;
let score = 0;
let answered = false;

const questionText = document.getElementById("questionText");
const answerOptions = document.getElementById("answerOptions");
const nextQuestion = document.getElementById("nextQuestion");

function renderQuestion() {
  answered = false;

  const question = quiz[questionIndex];

  document.getElementById("questionCounter").textContent =
    `Pregunta ${questionIndex + 1} de ${quiz.length}`;

  document.getElementById("scoreLive").textContent = score;

  document.getElementById("quizProgressBar").style.width =
    `${(questionIndex / quiz.length) * 100}%`;

  questionText.textContent = question.q;

  document.getElementById("answerFeedback").textContent = "";

  answerOptions.replaceChildren();

  question.a.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.textContent =
      `${String.fromCharCode(65 + index)}. ${answer}`;

    button.dataset.answer = index;

    button.addEventListener("click", () => {
      chooseAnswer(index);
    });

    answerOptions.appendChild(button);
  });

  nextQuestion.disabled = true;

  nextQuestion.textContent =
    questionIndex === quiz.length - 1
      ? "Ver resultado →"
      : "Siguiente →";
}

function chooseAnswer(index) {
  if (answered) return;

  answered = true;

  const question = quiz[questionIndex];
  const buttons = answerOptions.querySelectorAll("button");

  buttons.forEach((button, i) => {
    button.disabled = true;

    if (i === question.correct) {
      button.classList.add("correct");
    }

    if (i === index && i !== question.correct) {
      button.classList.add("incorrect");
    }
  });

  if (index === question.correct) {
    score++;
  }

  document.getElementById("scoreLive").textContent = score;

  document.getElementById("answerFeedback").textContent =
    (index === question.correct ? "¡Muy bien! " : "Repasemos. ") +
    question.why;

  nextQuestion.disabled = false;

  document.getElementById("quizProgressBar").style.width =
    `${((questionIndex + 1) / quiz.length) * 100}%`;
}

function finishQuiz() {
  document.getElementById("quizCard").classList.add("hidden");

  const result = document.getElementById("quizResult");
  result.classList.remove("hidden");

  document.getElementById("resultScore").textContent =
    `${score} / ${quiz.length} respuestas correctas`;

  document.getElementById("resultTitle").textContent =
    score >= 7
      ? "¡Excelente trabajo!"
      : score >= 5
        ? "¡Vas por buen camino!"
        : "¡Sigue practicando!";

  document.getElementById("resultText").textContent =
    score >= 7
      ? "Demostraste una buena comprensión. Puedes explorar los módulos para reforzar lo aprendido."
      : score >= 5
        ? "Ya tienes una buena base. Revisa las explicaciones y vuelve a intentarlo."
        : "No te preocupes. Repasa los módulos y vuelve a realizar el reto cuando quieras.";
}

function restartQuiz() {
  questionIndex = 0;
  score = 0;

  document.getElementById("quizResult").classList.add("hidden");
  document.getElementById("quizCard").classList.remove("hidden");

  renderQuestion();
}

nextQuestion.addEventListener("click", () => {
  if (!answered) return;

  if (questionIndex < quiz.length - 1) {
    questionIndex++;
    renderQuestion();
  } else {
    finishQuiz();
  }
});

document.getElementById("restartQuiz")
  .addEventListener("click", restartQuiz);

document.getElementById("tryAgain")
  .addEventListener("click", restartQuiz);

/* MODO OSCURO */

document.getElementById("themeToggle")
  .addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const dark = document.body.classList.contains("dark");
    const button = document.getElementById("themeToggle");

    button.textContent = dark ? "☀" : "☾";

    button.setAttribute(
      "aria-label",
      dark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
    );
  });

/* BARRA DE PROGRESO Y BOTÓN PARA SUBIR */

window.addEventListener("scroll", () => {
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = maxScroll > 0
    ? (window.scrollY / maxScroll) * 100
    : 0;

  document.getElementById("readingProgress").style.width =
    `${progress}%`;

  document.getElementById("backToTop")
    .classList.toggle("hidden", window.scrollY < 500);
});

document.getElementById("backToTop")
  .addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

/* INICIAR LA PÁGINA */

renderModules();
renderQuestion();
