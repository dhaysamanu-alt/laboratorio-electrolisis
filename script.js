const cards = [...document.querySelectorAll(".avatar-card")];

const continueBtn = document.querySelector("#continueBtn");

const selectionStatus = document.querySelector("#selectionStatus");

const introScreen = document.querySelector("#introScreen");

const selectionScreen = document.querySelector("#selectionScreen");

const selectionFooter = document.querySelector("#selectionFooter");

const nextScreen = document.querySelector("#nextScreen");

const selectedPreview = document.querySelector("#selectedPreview");

const backBtn = document.querySelector("#backBtn");

const cofiaBtn = document.querySelector("#cofiaBtn");

const gorraBtn = document.querySelector("#gorraBtn");

const cascoBtn = document.querySelector("#cascoBtn");

const epiCategory = document.querySelector("#epiCategory");

const opcionesOjos = document.querySelector("#opcionesOjos");

const lentesBtn = document.querySelector("#lentesBtn");

const gafasSolBtn = document.querySelector("#gafasSolBtn");

const lecturaBtn = document.querySelector("#lecturaBtn");

const opcionesBarbijo = document.querySelector("#opcionesBarbijo");

const barbijoBtn = document.querySelector("#barbijoBtn");

const mascarillaTelaBtn = document.querySelector("#mascarillaTelaBtn");

const panueloBtn = document.querySelector("#panueloBtn");

const opcionesGuantes = document.querySelector("#opcionesGuantes");

const guantesBtn = document.querySelector("#guantesBtn");

const guantesTelaBtn = document.querySelector("#guantesTelaBtn");

const sinGuantesBtn = document.querySelector("#sinGuantesBtn");

const opcionesDelantal = document.querySelector("#opcionesDelantal");

const delantalBtn = document.querySelector("#delantalBtn");

const delantalTelaBtn = document.querySelector("#delantalTelaBtn");

const opcionesCalzado = document.querySelector("#opcionesCalzado");

const calzadoBtn = document.querySelector("#calzadoBtn");

const zapatillasBtn = document.querySelector("#zapatillasBtn");

const sandaliasBtn = document.querySelector("#sandaliasBtn");

let calzadoEquipado = false;

let delantalEquipado = false;

let guantesEquipados = false;

let barbijoEquipado = false;

let pasoActual = 1;

let lentesEquipados = false;

const nextEpiBtn = document.querySelector("#nextEpiBtn");

const completedScreen = document.querySelector("#completedScreen");

const completedAvatar = document.querySelector("#completedAvatar");

const labIntroScreen = document.querySelector("#labIntroScreen");

const startLabBtn = document.querySelector("#startLabBtn");

const materialsScreen = document.querySelector("#materialsScreen");

const workbenchScreen = document.querySelector("#workbenchScreen");

const draggableBeaker = document.querySelector("#draggableBeaker");

const beakerDropZone = document.querySelector("#beakerDropZone");

const beakerPlaceholder = document.querySelector("#beakerPlaceholder");

const placedBeaker = document.querySelector("#placedBeaker");

const workbenchStatus = document.querySelector("#workbenchStatus");

const nextWorkbenchBtn = document.querySelector("#nextWorkbenchBtn");

const draggableWater = document.querySelector("#draggableWater");

const draggableSalt = document.querySelector("#draggableSalt");

const draggableGraphite = document.querySelector("#draggableGraphite");

const draggableMembrane = document.querySelector("#draggableMembrane");

const draggablePowerSupply = document.querySelector("#draggablePowerSupply");

const draggableCables = document.querySelector("#draggableCables");
const draggablePhenolphthalein = document.querySelector(
  "#draggablePhenolphthalein",
);
const draggablePipette = document.querySelector("#draggablePipette");
const draggableFerricChloride = document.querySelector(
  "#draggableFerricChloride",
);

let ferricChlorideSelected = false;
let ferricChlorideAdded = false;
const sampleTubeStation = document.querySelector("#sampleTubeStation");
const sampleTubeLiquid = document.querySelector("#sampleTubeLiquid");

let pipetteSelected = false;
let sampleCollected = false;
let cablesSelected = false;

let blackCableConnected = false;

let redCableConnected = false;

const powerSupplyDropZone = document.querySelector("#powerSupplyDropZone");

const placedPowerSupply = document.querySelector("#placedPowerSupply");

const powerSupplyGuide = document.querySelector("#powerSupplyGuide");

let powerSupplyPlaced = false;

let powerSupplyOn = false;

let powerSupplySelected = false;

let graphitePlaced = false;

let membranePlaced = false;
let phenolphthaleinSelected = false;
let phenolphthaleinAdded = false;

let membraneSelected = false;

let graphiteSelected = false;

let saltAdded = false;

let workbenchCurrentStep = 1;

const workbenchInstruction = document.querySelector("#workbenchInstruction");

let waterAdded = false;

const continueMaterialsBtn = document.querySelector("#continueMaterialsBtn");

const equipmentProgress = document.querySelector("#equipmentProgress");

const cofiaOverlay = document.querySelector("#cofiaOverlay");

let selected = null;

let cofiaEquipada = false;

// Actualizar imagen del personaje

function actualizarAvatar() {
  if (!selected) return;

  const personaje = selected === "male" ? "tecnico" : "tecnica";

  if (
    cofiaEquipada &&
    lentesEquipados &&
    barbijoEquipado &&
    guantesEquipados &&
    delantalEquipado &&
    calzadoEquipado
  ) {
    selectedPreview.src = `assets/avatares/${personaje}_con_cofia_lentes_barbijo_guantes_bata_calzado.png`;
  } else if (
    cofiaEquipada &&
    lentesEquipados &&
    barbijoEquipado &&
    guantesEquipados &&
    delantalEquipado
  ) {
    selectedPreview.src = `assets/avatares/${personaje}_con_cofia_lentes_barbijo_guantes_bata.png`;
  } else if (
    cofiaEquipada &&
    lentesEquipados &&
    barbijoEquipado &&
    guantesEquipados
  ) {
    selectedPreview.src = `assets/avatares/${personaje}_con_cofia_lentes_barbijo_guantes.png`;
  } else if (cofiaEquipada && lentesEquipados && barbijoEquipado) {
    selectedPreview.src = `assets/avatares/${personaje}_con_cofia_lentes_barbijo.png`;
  } else if (cofiaEquipada && lentesEquipados) {
    selectedPreview.src = `assets/avatares/${personaje}_con_cofia_lentes.png`;
  } else if (cofiaEquipada) {
    selectedPreview.src = `assets/avatares/${personaje}_con_cofia.png`;
  } else {
    selectedPreview.src = `assets/avatares/${personaje}_base.png`;
  }

  if (cofiaOverlay) {
    cofiaOverlay.hidden = true;
  }
}

// Seleccionar personaje

cards.forEach((card) => {
  card.addEventListener("click", () => {
    selected = card.dataset.character;

    cards.forEach((c) => {
      c.setAttribute("aria-pressed", String(c === card));
    });

    continueBtn.disabled = false;

    selectionStatus.textContent =
      selected === "male"
        ? "Técnico seleccionado. Puedes continuar."
        : "Técnica seleccionada. Puedes continuar.";
  });
});

// Entrar al equipamiento

continueBtn.addEventListener("click", () => {
  if (!selected) return;

  actualizarAvatar();

  introScreen.hidden = true;

  selectionScreen.hidden = true;

  selectionFooter.hidden = true;

  nextScreen.hidden = false;

  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Regresar a selección de personaje

backBtn.addEventListener("click", () => {
  nextScreen.hidden = true;

  introScreen.hidden = false;

  selectionScreen.hidden = false;

  selectionFooter.hidden = false;

  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Elegir respuesta incorrecta

function marcarIncorrecto(boton) {
  [cofiaBtn, gorraBtn, cascoBtn].forEach((b) => {
    b.style.color = "";

    b.style.borderColor = "";
  });

  boton.style.color = "#ff6262";

  boton.style.borderColor = "#ff6262";

  cofiaBtn.setAttribute("aria-pressed", "false");

  cofiaEquipada = false;

  nextEpiBtn.disabled = true;

  equipmentProgress.textContent = "Respuesta incorrecta. Intenta nuevamente.";

  actualizarAvatar();
}

// Respuesta correcta: cofia

cofiaBtn.addEventListener("click", () => {
  [cofiaBtn, gorraBtn, cascoBtn].forEach((b) => {
    b.style.color = "";

    b.style.borderColor = "";
  });

  cofiaBtn.setAttribute("aria-pressed", "true");

  cofiaEquipada = true;

  actualizarAvatar();

  equipmentProgress.textContent = "Equipamiento completado: 1 de 6";

  nextEpiBtn.disabled = false;
});

// Respuestas incorrectas

gorraBtn.addEventListener("click", () => {
  marcarIncorrecto(gorraBtn);
});

cascoBtn.addEventListener("click", () => {
  marcarIncorrecto(cascoBtn);
});

// Pasar de cabeza a ojos

nextEpiBtn.addEventListener("click", () => {
  if (pasoActual === 1 && cofiaEquipada) {
    pasoActual = 2;

    epiCategory.textContent = "Protección de ojos";

    cofiaBtn.hidden = true;

    gorraBtn.hidden = true;

    cascoBtn.hidden = true;

    opcionesOjos.hidden = false;

    nextEpiBtn.disabled = true;

    equipmentProgress.textContent = "Equipamiento completado: 1 de 6";
  } else if (pasoActual === 2 && lentesEquipados) {
    pasoActual = 3;

    epiCategory.textContent = "Protección del rostro";

    opcionesOjos.hidden = true;

    opcionesBarbijo.hidden = false;

    nextEpiBtn.disabled = true;

    equipmentProgress.textContent = "Equipamiento completado: 2 de 6";
  } else if (pasoActual === 3 && barbijoEquipado) {
    pasoActual = 4;

    epiCategory.textContent = "Protección de manos";

    opcionesBarbijo.hidden = true;

    opcionesGuantes.hidden = false;

    nextEpiBtn.disabled = true;

    equipmentProgress.textContent = "Equipamiento completado: 3 de 6";
  } else if (pasoActual === 4 && guantesEquipados) {
    pasoActual = 5;

    epiCategory.textContent = "Protección del cuerpo";

    opcionesGuantes.hidden = true;

    opcionesDelantal.hidden = false;

    nextEpiBtn.disabled = true;

    equipmentProgress.textContent = "Equipamiento completado: 4 de 6";
  } else if (pasoActual === 5 && delantalEquipado) {
    pasoActual = 6;

    epiCategory.textContent = "Protección de pies";

    opcionesDelantal.hidden = true;

    opcionesCalzado.hidden = false;

    nextEpiBtn.disabled = true;

    equipmentProgress.textContent = "Equipamiento completado: 5 de 6";
  } else if (pasoActual === 6 && calzadoEquipado) {
    // Mostrar el avatar con todos los EPI

    completedAvatar.src = selectedPreview.src;

    // Ocultar la pantalla de equipamiento

    nextScreen.hidden = true;

    // Mostrar la pantalla de finalización

    completedScreen.hidden = false;

    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  }
});

// Seleccionar lentes de seguridad

lentesBtn.addEventListener("click", () => {
  [lentesBtn, gafasSolBtn, lecturaBtn].forEach((boton) => {
    boton.style.color = "";

    boton.style.borderColor = "";
  });

  lentesBtn.style.color = "#b5f5d3";

  lentesBtn.style.borderColor = "#68d6a1";

  lentesEquipados = true;

  actualizarAvatar();

  equipmentProgress.textContent = "Equipamiento completado: 2 de 6";

  nextEpiBtn.disabled = false;
});

// Respuestas incorrectas de ojos

function marcarOjosIncorrecto(boton) {
  [lentesBtn, gafasSolBtn, lecturaBtn].forEach((b) => {
    b.style.color = "";

    b.style.borderColor = "";
  });

  boton.style.color = "#ff6262";

  boton.style.borderColor = "#ff6262";

  lentesEquipados = false;

  actualizarAvatar();

  equipmentProgress.textContent = "Respuesta incorrecta. Intenta nuevamente.";

  nextEpiBtn.disabled = true;
}

gafasSolBtn.addEventListener("click", () => {
  marcarOjosIncorrecto(gafasSolBtn);
});

lecturaBtn.addEventListener("click", () => {
  marcarOjosIncorrecto(lecturaBtn);
});

// PASO 3: BARBIJO

function limpiarOpcionesBarbijo() {
  [barbijoBtn, mascarillaTelaBtn, panueloBtn].forEach((boton) => {
    boton.style.color = "";

    boton.style.borderColor = "";
  });
}

// Respuesta correcta

barbijoBtn.addEventListener("click", () => {
  limpiarOpcionesBarbijo();

  barbijoBtn.style.color = "#b5f5d3";

  barbijoBtn.style.borderColor = "#68d6a1";

  barbijoEquipado = true;

  actualizarAvatar();

  equipmentProgress.textContent = "Equipamiento completado: 3 de 6";

  nextEpiBtn.disabled = false;
});

// Respuestas incorrectas

function marcarBarbijoIncorrecto(boton) {
  limpiarOpcionesBarbijo();

  boton.style.color = "#ff6262";

  boton.style.borderColor = "#ff6262";

  barbijoEquipado = false;

  actualizarAvatar();

  equipmentProgress.textContent = "Respuesta incorrecta. Intenta nuevamente.";

  nextEpiBtn.disabled = true;
}

mascarillaTelaBtn.addEventListener("click", () => {
  marcarBarbijoIncorrecto(mascarillaTelaBtn);
});

panueloBtn.addEventListener("click", () => {
  marcarBarbijoIncorrecto(panueloBtn);
});

// PASO 4: PROTECCIÓN DE MANOS

function limpiarOpcionesGuantes() {
  [guantesBtn, guantesTelaBtn, sinGuantesBtn].forEach((boton) => {
    boton.style.color = "";

    boton.style.borderColor = "";
  });
}

// Respuesta correcta

guantesBtn.addEventListener("click", () => {
  limpiarOpcionesGuantes();

  guantesBtn.style.color = "#b5f5d3";

  guantesBtn.style.borderColor = "#68d6a1";

  guantesEquipados = true;

  actualizarAvatar();

  equipmentProgress.textContent = "Equipamiento completado: 4 de 6";

  nextEpiBtn.disabled = false;
});

// Respuestas incorrectas

function marcarGuantesIncorrecto(boton) {
  limpiarOpcionesGuantes();

  boton.style.color = "#ff6262";

  boton.style.borderColor = "#ff6262";

  guantesEquipados = false;

  actualizarAvatar();

  equipmentProgress.textContent = "Respuesta incorrecta. Intenta nuevamente.";

  nextEpiBtn.disabled = true;
}

guantesTelaBtn.addEventListener("click", () => {
  marcarGuantesIncorrecto(guantesTelaBtn);
});

sinGuantesBtn.addEventListener("click", () => {
  marcarGuantesIncorrecto(sinGuantesBtn);
});

// PASO 5: PROTECCIÓN DEL CUERPO

function limpiarOpcionesDelantal() {
  [delantalBtn, delantalTelaBtn, mandilCocinaBtn].forEach((boton) => {
    boton.style.color = "";

    boton.style.borderColor = "";
  });
}

// Respuesta correcta

delantalBtn.addEventListener("click", () => {
  limpiarOpcionesDelantal();

  delantalBtn.style.color = "#b5f5d3";

  delantalBtn.style.borderColor = "#68d6a1";

  delantalEquipado = true;

  actualizarAvatar();

  equipmentProgress.textContent = "Equipamiento completado: 5 de 6";

  nextEpiBtn.disabled = false;
});

// Respuestas incorrectas

function marcarDelantalIncorrecto(boton) {
  limpiarOpcionesDelantal();

  boton.style.color = "#ff6262";

  boton.style.borderColor = "#ff6262";

  delantalEquipado = false;

  actualizarAvatar();

  equipmentProgress.textContent = "Respuesta incorrecta. Intenta nuevamente.";

  nextEpiBtn.disabled = true;
}

delantalTelaBtn.addEventListener("click", () => {
  marcarDelantalIncorrecto(delantalTelaBtn);
});

mandilCocinaBtn.addEventListener("click", () => {
  marcarDelantalIncorrecto(mandilCocinaBtn);
});

// PASO 6: PROTECCIÓN DE PIES

function limpiarOpcionesCalzado() {
  [calzadoBtn, zapatillasBtn, sandaliasBtn].forEach((boton) => {
    boton.style.color = "";

    boton.style.borderColor = "";
  });
}

// Respuesta correcta

calzadoBtn.addEventListener("click", () => {
  limpiarOpcionesCalzado();

  calzadoBtn.style.color = "#b5f5d3";

  calzadoBtn.style.borderColor = "#68d6a1";

  calzadoEquipado = true;

  actualizarAvatar();

  equipmentProgress.textContent = "Equipamiento completado: 6 de 6";

  nextEpiBtn.disabled = false;

  nextEpiBtn.textContent = "Finalizar equipamiento ✓";
});

// Respuestas incorrectas

function marcarCalzadoIncorrecto(boton) {
  limpiarOpcionesCalzado();

  boton.style.color = "#ff6262";

  boton.style.borderColor = "#ff6262";

  calzadoEquipado = false;

  actualizarAvatar();

  equipmentProgress.textContent = "Respuesta incorrecta. Intenta nuevamente.";

  nextEpiBtn.disabled = true;

  nextEpiBtn.textContent = "Siguiente EPI →";
}

zapatillasBtn.addEventListener("click", () => {
  marcarCalzadoIncorrecto(zapatillasBtn);
});

sandaliasBtn.addEventListener("click", () => {
  marcarCalzadoIncorrecto(sandaliasBtn);
});

// ETAPA 1: INGRESO AL LABORATORIO

enterLabBtn.addEventListener("click", () => {
  completedScreen.hidden = true;

  labIntroScreen.hidden = false;

  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

// ETAPA 1: MOSTRAR IDENTIFICACIÓN DE MATERIALES

startLabBtn.addEventListener("click", () => {
  labIntroScreen.hidden = true;

  materialsScreen.hidden = false;

  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

// ENTRAR A LA MESA DE TRABAJO

continueMaterialsBtn.disabled = false;

continueMaterialsBtn.addEventListener("click", () => {
  materialsScreen.hidden = true;

  workbenchScreen.hidden = false;

  window.scrollTo({ top: 0, behavior: "smooth" });
});

// SELECCIONAR Y COLOCAR EL VASO

let beakerSelected = false;

let beakerPlaced = false;

draggableBeaker.addEventListener("dragstart", (event) => {
  if (beakerPlaced) {
    event.preventDefault();

    return;
  }

  event.dataTransfer.setData("text/plain", "beaker");

  event.dataTransfer.effectAllowed = "move";
});

beakerDropZone.addEventListener("dragover", (event) => {
  // Permitir colocar el vaso o agregar agua posteriormente

  if (beakerPlaced && waterAdded && workbenchCurrentStep < 3) return;

  event.preventDefault();

  beakerDropZone.classList.add("drag-over");
});

beakerDropZone.addEventListener("dragleave", () => {
  beakerDropZone.classList.remove("drag-over");
});

beakerDropZone.addEventListener("drop", (event) => {
  event.preventDefault();

  beakerDropZone.classList.remove("drag-over");

  if (event.dataTransfer.getData("text/plain") === "beaker") {
    colocarVaso();
  }
});

// Alternativa para móviles: seleccionar y tocar destino

draggableBeaker.addEventListener("click", () => {
  if (beakerPlaced) return;

  beakerSelected = true;

  draggableBeaker.classList.add("selected");

  beakerDropZone.classList.add("selected");
});

beakerDropZone.addEventListener("click", () => {
  if (beakerSelected && !beakerPlaced) {
    colocarVaso();
  }
});

// Accesibilidad por teclado

draggableBeaker.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();

    draggableBeaker.click();
  }
});

beakerDropZone.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();

    beakerDropZone.click();
  }
});

function colocarVaso() {
  if (beakerPlaced) return;

  beakerPlaced = true;

  beakerSelected = false;

  const svgVaso = draggableBeaker.querySelector("svg").cloneNode(true);

  placedBeaker.appendChild(svgVaso);

  placedBeaker.hidden = false;

  beakerPlaceholder.hidden = true;

  draggableBeaker.classList.remove("selected");

  draggableBeaker.classList.add("used");

  beakerDropZone.classList.remove("selected", "drag-over");

  beakerDropZone.classList.add("completed");

  workbenchStatus.textContent = "✓ Vaso colocado correctamente";

  workbenchStatus.style.color = "#92edc0";

  nextWorkbenchBtn.disabled = false;
}

// ======================================

// PASO 2: AGREGAR AGUA DESTILADA

// ======================================

nextWorkbenchBtn.addEventListener("click", () => {
  // PASO 1 → PASO 2: Agua destilada

  if (workbenchCurrentStep === 1 && beakerPlaced) {
    workbenchCurrentStep = 2;

    document.querySelector("#workbenchStep").textContent = "Paso 2";

    workbenchInstruction.textContent =
      "Arrastra el agua destilada hacia el vaso.";

    draggableWater.hidden = false;

    nextWorkbenchBtn.disabled = true;

    workbenchStatus.textContent = "Esperando agua destilada...";

    workbenchStatus.style.color = "#b9d4e2";

    return;
  }

  // PASO 2 → PASO 3: Cloruro de sodio

  if (workbenchCurrentStep === 2 && waterAdded) {
    workbenchCurrentStep = 3;

    document.querySelector("#workbenchStep").textContent = "Paso 3";

    workbenchInstruction.textContent =
      "Arrastra el frasco de NaCl hacia el vaso.";

    draggableWater.hidden = true;

    draggableSalt.hidden = false;

    nextWorkbenchBtn.disabled = true;

    workbenchStatus.textContent = "Esperando cloruro de sodio (NaCl)...";

    workbenchStatus.style.color = "#b9d4e2";

    return;
  }

  // PASO 3 → PASO 4: Electrodos de grafito

  if (workbenchCurrentStep === 3 && saltAdded) {
    workbenchCurrentStep = 4;

    document.querySelector("#workbenchStep").textContent = "Paso 4";

    workbenchInstruction.textContent =
      "Arrastra los electrodos de grafito hacia el vaso.";

    draggableSalt.hidden = true;

    draggableGraphite.hidden = false;

    nextWorkbenchBtn.disabled = true;

    workbenchStatus.textContent = "Esperando colocación de electrodos...";

    workbenchStatus.style.color = "#b9d4e2";

    return;
  }

  // PASO 4 → PASO 5: Membrana separadora

  // PASO 4 → PASO 5: Membrana separadora

  if (workbenchCurrentStep === 4 && graphitePlaced) {
    workbenchCurrentStep = 5;

    document.querySelector("#workbenchStep").textContent = "Paso 5";

    workbenchInstruction.textContent =
      "Selecciona la membrana separadora y colócala entre los electrodos.";

    draggableGraphite.hidden = true;

    draggableMembrane.hidden = false;

    nextWorkbenchBtn.disabled = true;

    workbenchStatus.textContent = "Esperando colocación de la membrana...";

    workbenchStatus.style.color = "#b9d4e2";

    return;
  }

  // PASO 5 → PASO 6: Fuente de 9 V

  if (workbenchCurrentStep === 5 && membranePlaced) {
    workbenchCurrentStep = 6;

    document.querySelector("#workbenchStep").textContent = "Paso 6";

    workbenchInstruction.textContent =
      "Arrastra la fuente de 9 V hacia la mesa.";

    draggableMembrane.hidden = true;

    draggablePowerSupply.hidden = false;

    powerSupplyGuide.hidden = false;

    nextWorkbenchBtn.disabled = true;

    workbenchStatus.textContent = "Esperando colocación de la fuente...";

    workbenchStatus.style.color = "#b9d4e2";

    return;
  }

  // PASO 6 → PASO 7: Conexiones eléctricas

  if (workbenchCurrentStep === 6 && powerSupplyPlaced) {
    workbenchCurrentStep = 7;

    document.querySelector("#workbenchStep").textContent = "Paso 7";

    workbenchInstruction.textContent =
      "Conecta los cables de la fuente a los electrodos de grafito.";

    draggablePowerSupply.hidden = true;

    draggableCables.hidden = false;

    nextWorkbenchBtn.disabled = true;

    workbenchStatus.textContent = "Esperando conexión de los cables...";

    workbenchStatus.style.color = "#b9d4e2";

    return;
  }

  // PASO 7 → PASO 8: Encendido de la fuente

  if (workbenchCurrentStep === 7 && blackCableConnected && redCableConnected) {
    workbenchCurrentStep = 8;

    document.querySelector("#workbenchStep").textContent = "Paso 8";

    workbenchInstruction.textContent =
      "Haz clic en el botón de encendido de la fuente de corriente continua.";

    draggableCables.hidden = true;

    placedPowerSupply.classList.add("power-ready");

    nextWorkbenchBtn.disabled = true;

    workbenchStatus.textContent = "Fuente apagada. Esperando encendido...";

    workbenchStatus.style.color = "#b9d4e2";

    return;
  }

  // PASO 8 → PASO 9: Indicador de fenolftaleína
  if (workbenchCurrentStep === 8 && powerSupplyOn) {
    workbenchCurrentStep = 9;

    document.querySelector("#workbenchStep").textContent = "Paso 9";

    workbenchInstruction.textContent =
      "Selecciona el frasco de fenolftaleína para agregar unas gotas al compartimento del cátodo.";

    draggablePhenolphthalein.hidden = false;

    nextWorkbenchBtn.disabled = true;

    workbenchStatus.textContent =
      "Esperando la aplicación del indicador de fenolftaleína...";

    workbenchStatus.style.color = "#b9d4e2";

    return;
  }

  // PASO 9 → PASO 10: Extracción de muestra
  if (workbenchCurrentStep === 9 && phenolphthaleinAdded) {
    workbenchCurrentStep = 10;

    document.querySelector("#workbenchStep").textContent = "Paso 10";

    workbenchInstruction.textContent =
      "Selecciona la pipeta y haz clic sobre el vaso para representar la extracción de una muestra reservada antes de añadir el indicador.";

    draggablePhenolphthalein.hidden = true;
    draggablePipette.hidden = false;
    sampleTubeStation.hidden = false;

    nextWorkbenchBtn.disabled = true;

    workbenchStatus.textContent = "Esperando la extracción de la muestra...";

    workbenchStatus.style.color = "#b9d4e2";

    return;
  }

  // PASO 10 → PASO 11: Retirar membrana
  if (workbenchCurrentStep === 10 && sampleCollected) {
    workbenchCurrentStep = 11;

    document.querySelector("#workbenchStep").textContent = "Paso 11";

    workbenchInstruction.textContent =
      "Primero apaga la fuente de 9 V. Después selecciona la membrana para retirarla del vaso.";

    draggablePipette.hidden = true;

    nextWorkbenchBtn.disabled = true;

    workbenchStatus.textContent =
      "La fuente sigue encendida. Debes apagarla antes de retirar la membrana.";

    workbenchStatus.style.color = "#f5d68a";

    return;
  }

  // PASO 11 → PASO 12: Ensayo opcional con FeCl3
  if (workbenchCurrentStep === 11 && membraneRemoved) {
    workbenchCurrentStep = 12;

    document.querySelector("#workbenchStep").textContent = "Paso 12";

    workbenchInstruction.textContent =
      "Selecciona el cloruro férrico y haz clic sobre el tubo de ensayo para observar la reacción.";

    draggableFerricChloride.hidden = false;

    nextWorkbenchBtn.disabled = true;

    workbenchStatus.textContent =
      "Esperando la aplicación del cloruro férrico a la muestra.";

    workbenchStatus.style.color = "#b9d4e2";

    return;
  }

  // PASO 12 → PASO 13: Resultados y evaluación
  if (workbenchCurrentStep === 12 && ferricChlorideAdded) {
    workbenchCurrentStep = 13;

    workbenchScreen.hidden = true;
    document.querySelector("#resultsScreen").hidden = false;

    window.scrollTo({ top: 0, behavior: "smooth" });

    return;
  }
});

let waterSelected = false;

// Arrastrar la botella

draggableWater.addEventListener("dragstart", (event) => {
  if (waterAdded) {
    event.preventDefault();

    return;
  }

  event.dataTransfer.setData("text/plain", "water");

  event.dataTransfer.effectAllowed = "move";
});

// Soltar agua sobre el vaso

beakerDropZone.addEventListener("drop", (event) => {
  if (!beakerPlaced || waterAdded) return;

  if (event.dataTransfer.getData("text/plain") === "water") {
    event.preventDefault();

    agregarAgua();
  }
});

// Alternativa para móviles

draggableWater.addEventListener("click", () => {
  if (waterAdded) return;

  waterSelected = true;

  draggableWater.classList.add("selected");
});

beakerDropZone.addEventListener("click", () => {
  if (waterSelected && beakerPlaced && !waterAdded) {
    agregarAgua();
  }
});

draggableWater.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();

    draggableWater.click();
  }
});

// Crear el agua dentro del SVG del vaso

function agregarAgua() {
  if (waterAdded || !beakerPlaced) return;

  waterAdded = true;

  waterSelected = false;

  const vasoSVG = placedBeaker.querySelector("svg");

  if (!vasoSVG) return;

  const svgNS = "http://www.w3.org/2000/svg";

  const agua = document.createElementNS(svgNS, "path");

  agua.setAttribute(
    "d",

    "M 40 108 Q 90 104 140 108 L 141 166 Q 141 186 121 186 H 59 Q 39 186 39 166 Z",
  );

  agua.setAttribute("fill", "#45c4f4");

  agua.setAttribute("fill-opacity", "0.45");

  agua.setAttribute("class", "beaker-water");

  agua.addEventListener("animationend", (event) => {
    if (event.animationName === "waterFill") {
      agua.classList.add("water-filled");
    }
  });

  // Insertar agua detrás de los bordes del vaso

  const primerElementoVisual = vasoSVG.querySelector("path");

  vasoSVG.insertBefore(agua, primerElementoVisual);

  draggableWater.classList.remove("selected");

  draggableWater.classList.add("used");

  workbenchStatus.textContent = "✓ Agua destilada agregada correctamente";

  workbenchStatus.style.color = "#92edc0";

  nextWorkbenchBtn.disabled = false;
}

// ======================================

// PASO 3: INCORPORACIÓN DE NaCl

// ======================================

// Arrastrar el frasco

draggableSalt.addEventListener("dragstart", (event) => {
  if (workbenchCurrentStep !== 3 || saltAdded) {
    event.preventDefault();

    return;
  }

  event.dataTransfer.setData("text/plain", "salt");

  event.dataTransfer.effectAllowed = "move";
});

// Permitir soltar el frasco sobre el vaso

beakerDropZone.addEventListener("dragover", (event) => {
  if (workbenchCurrentStep === 3 && !saltAdded) {
    event.preventDefault();

    event.dataTransfer.dropEffect = "move";
  }
});

// Detectar cuando el frasco llega al vaso

beakerDropZone.addEventListener("drop", (event) => {
  if (workbenchCurrentStep !== 3 || saltAdded) return;

  const material = event.dataTransfer.getData("text/plain");

  if (material !== "salt") return;

  event.preventDefault();

  incorporarSal();
});

// Alternativa para dispositivos táctiles

let saltSelected = false;

draggableSalt.addEventListener("click", () => {
  if (workbenchCurrentStep !== 3 || saltAdded) return;

  saltSelected = true;

  draggableSalt.classList.add("selected");

  workbenchStatus.textContent = "Ahora selecciona el vaso para agregar NaCl.";
});

beakerDropZone.addEventListener("click", () => {
  if (saltSelected && workbenchCurrentStep === 3 && !saltAdded) {
    incorporarSal();
  }
});

// Función de incorporación de NaCl

function incorporarSal() {
  if (saltAdded || !waterAdded) return;

  const vasoSVG = placedBeaker.querySelector("svg");

  if (!vasoSVG) return;

  saltAdded = true;

  saltSelected = false;

  draggableSalt.classList.remove("selected");

  draggableSalt.classList.add("used");

  // Bloquear el avance mientras ocurre la animación

  nextWorkbenchBtn.disabled = true;

  workbenchStatus.textContent = "Incorporando NaCl a la solución...";

  workbenchStatus.style.color = "#b9d4e2";

  const svgNS = "http://www.w3.org/2000/svg";

  // Agrupar los cristales de sal

  const grupoSal = document.createElementNS(svgNS, "g");

  grupoSal.setAttribute("class", "salt-particles");

  // Recortar las partículas al interior del vaso

  const defs = document.createElementNS(svgNS, "defs");

  const clipPath = document.createElementNS(svgNS, "clipPath");

  const clipId = "saltClip-" + Date.now();

  clipPath.setAttribute("id", clipId);

  clipPath.setAttribute("clipPathUnits", "userSpaceOnUse");

  const zonaInterior = document.createElementNS(svgNS, "path");

  // Zona interior del vaso: boca, paredes y fondo

  zonaInterior.setAttribute(
    "d",

    "M 40 32 L 140 32 L 140 165 Q 140 185 120 185 H 60 Q 40 185 40 165 Z",
  );

  clipPath.appendChild(zonaInterior);

  defs.appendChild(clipPath);

  vasoSVG.appendChild(defs);

  grupoSal.setAttribute("clip-path", `url(#${clipId})`);

  // Posiciones dentro del vaso (viewBox 180 x 200)

  const cristales = [
    { x: 75, y: 40, delay: 0.0 },

    { x: 85, y: 35, delay: 0.2 },

    { x: 95, y: 42, delay: 0.4 },

    { x: 105, y: 37, delay: 0.6 },

    { x: 80, y: 45, delay: 0.8 },

    { x: 100, y: 44, delay: 1.0 },

    { x: 90, y: 39, delay: 1.2 },

    { x: 110, y: 43, delay: 1.4 },
  ];

  cristales.forEach((cristal, index) => {
    const particula = document.createElementNS(svgNS, "rect");

    particula.setAttribute("x", cristal.x);

    particula.setAttribute("y", cristal.y);

    particula.setAttribute("width", index % 2 === 0 ? "5" : "4");

    particula.setAttribute("height", index % 2 === 0 ? "5" : "4");

    particula.setAttribute("rx", "0.8");

    particula.setAttribute("class", "salt-crystal");

    particula.style.setProperty("--delay", `${cristal.delay}s`);

    grupoSal.appendChild(particula);
  });

  vasoSVG.appendChild(grupoSal);

  // Animar también el agua

  const aguaSVG = vasoSVG.querySelector(".beaker-water");

  if (aguaSVG) {
    // El agua ya fue agregada: impedir que vuelva

    // a reproducirse la animación de llenado.

    aguaSVG.classList.add("water-filled");

    // Iniciar únicamente el movimiento de disolución.

    aguaSVG.classList.add("salt-water-motion");
  }

  // Duración total: 2.4 s + 1.4 s de retraso

  setTimeout(() => {
    grupoSal.remove();

    defs.remove();

    if (aguaSVG) {
      aguaSVG.classList.remove("salt-water-motion");
    }

    workbenchStatus.textContent =
      "✓ NaCl disuelto: solución de salmuera preparada";

    workbenchStatus.style.color = "#92edc0";

    nextWorkbenchBtn.disabled = false;
  }, 3900);
}

// ======================================

// PASO 4: ELECTRODOS DE GRAFITO

// ======================================

// Arrastrar los electrodos desde la bandeja

draggableGraphite.addEventListener("dragstart", (event) => {
  if (workbenchCurrentStep !== 4 || graphitePlaced) {
    event.preventDefault();

    return;
  }

  event.dataTransfer.setData("text/plain", "graphite");

  event.dataTransfer.effectAllowed = "move";
});

// Permitir soltarlos sobre la mesa

beakerDropZone.addEventListener("dragover", (event) => {
  if (workbenchCurrentStep === 4 && !graphitePlaced) {
    event.preventDefault();

    event.dataTransfer.dropEffect = "move";
  }
});

// Detectar la colocación

beakerDropZone.addEventListener("drop", (event) => {
  if (workbenchCurrentStep !== 4 || graphitePlaced) return;

  const material = event.dataTransfer.getData("text/plain");

  if (material !== "graphite") return;

  event.preventDefault();

  colocarElectrodos();
});

// Alternativa mediante clic

draggableGraphite.addEventListener("click", () => {
  if (workbenchCurrentStep !== 4 || graphitePlaced) return;

  graphiteSelected = true;

  draggableGraphite.classList.add("selected");

  workbenchStatus.textContent =
    "Ahora selecciona el vaso para colocar los electrodos.";
});

beakerDropZone.addEventListener("click", () => {
  if (graphiteSelected && workbenchCurrentStep === 4 && !graphitePlaced) {
    colocarElectrodos();
  }
});

// ======================================

// MEMBRANA SEPARADORA OBLIGATORIA

// ======================================

function colocarMembrana() {
  const vasoSVG = placedBeaker.querySelector("svg");

  if (!vasoSVG || membranePlaced) return;

  const svgNS = "http://www.w3.org/2000/svg";

  const grupo = document.createElementNS(svgNS, "g");

  grupo.setAttribute("id", "membranaSeparadora");
  grupo.style.cursor = "pointer";

  // Membrana situada entre los electrodos

  const membrana = document.createElementNS(svgNS, "rect");

  membrana.setAttribute("x", "87");

  membrana.setAttribute("y", "106");

  membrana.setAttribute("width", "6");

  membrana.setAttribute("height", "79");

  membrana.setAttribute("rx", "2");

  membrana.setAttribute("fill", "#f5d68a");

  membrana.setAttribute("fill-opacity", "0.35");

  membrana.setAttribute("stroke", "#f5d68a");

  membrana.setAttribute("stroke-width", "1");

  membrana.setAttribute("stroke-dasharray", "3 2");

  grupo.appendChild(membrana);
  // Área transparente para facilitar el clic
  const zonaClic = document.createElementNS(svgNS, "rect");

  zonaClic.setAttribute("x", "79");
  zonaClic.setAttribute("y", "106");
  zonaClic.setAttribute("width", "22");
  zonaClic.setAttribute("height", "79");
  zonaClic.setAttribute("fill", "transparent");
  zonaClic.style.cursor = "pointer";

  grupo.appendChild(zonaClic);

  // Ubicarla detrás de los electrodos

  const electrodosSVG = vasoSVG.querySelector("#graphiteElectrodes");

  if (electrodosSVG) {
    vasoSVG.insertBefore(grupo, electrodosSVG);
  } else {
    vasoSVG.appendChild(grupo);
  }

  membranePlaced = true;
}

// ======================================

// PASO 5: COLOCAR MEMBRANA SEPARADORA

// ======================================

// Arrastrar desde la bandeja

draggableMembrane.addEventListener("dragstart", (event) => {
  if (workbenchCurrentStep !== 5 || membranePlaced) {
    event.preventDefault();

    return;
  }

  event.dataTransfer.setData("text/plain", "membrane");

  event.dataTransfer.effectAllowed = "move";
});

// Soltar sobre el vaso

beakerDropZone.addEventListener("drop", (event) => {
  if (workbenchCurrentStep !== 5 || membranePlaced) return;

  if (event.dataTransfer.getData("text/plain") !== "membrane") {
    return;
  }

  event.preventDefault();

  finalizarColocacionMembrana();
});

// Alternativa: seleccionar el material con clic

draggableMembrane.addEventListener("click", () => {
  if (workbenchCurrentStep !== 5 || membranePlaced) return;

  membraneSelected = true;

  draggableMembrane.classList.add("selected");

  workbenchStatus.textContent =
    "Ahora haz clic sobre el vaso para colocar la membrana.";
});

// Colocar mediante clic en el vaso

beakerDropZone.addEventListener("click", () => {
  if (workbenchCurrentStep === 5 && membraneSelected && !membranePlaced) {
    finalizarColocacionMembrana();
  }
});

function finalizarColocacionMembrana() {
  if (workbenchCurrentStep !== 5 || membranePlaced) return;

  colocarMembrana();

  if (!membranePlaced) return;

  membraneSelected = false;

  draggableMembrane.classList.remove("selected");

  draggableMembrane.classList.add("used");

  workbenchStatus.textContent =
    "✓ Membrana separadora instalada correctamente.";

  workbenchStatus.style.color = "#92edc0";

  workbenchInstruction.textContent =
    "La membrana está instalada entre los dos electrodos.";

  nextWorkbenchBtn.disabled = false;
}

// Dibujar los electrodos dentro del vaso

function colocarElectrodos() {
  if (graphitePlaced || !saltAdded) return;

  const vasoSVG = placedBeaker.querySelector("svg");

  if (!vasoSVG) return;

  const svgNS = "http://www.w3.org/2000/svg";

  const grupo = document.createElementNS(svgNS, "g");

  grupo.setAttribute("id", "graphiteElectrodes");

  // Dos varillas de grafito

  const posiciones = [68, 112];

  posiciones.forEach((x) => {
    const varilla = document.createElementNS(svgNS, "rect");

    varilla.setAttribute("x", x - 5);

    varilla.setAttribute("y", "18");

    varilla.setAttribute("width", "10");

    varilla.setAttribute("height", "145");

    varilla.setAttribute("rx", "3");

    varilla.setAttribute("fill", "#303943");

    varilla.setAttribute("stroke", "#7e8b96");

    varilla.setAttribute("stroke-width", "1");

    grupo.appendChild(varilla);

    // Reflejo sobre el grafito

    const reflejo = document.createElementNS(svgNS, "path");

    reflejo.setAttribute("d", `M ${x - 2} 24 V 153`);

    reflejo.setAttribute("stroke", "#9aabb8");

    reflejo.setAttribute("stroke-opacity", ".35");

    reflejo.setAttribute("stroke-width", "2");

    reflejo.setAttribute("stroke-linecap", "round");

    grupo.appendChild(reflejo);
  });

  vasoSVG.appendChild(grupo);

  graphitePlaced = true;

  graphiteSelected = false;

  draggableGraphite.classList.remove("selected");

  draggableGraphite.classList.add("used");

  workbenchStatus.textContent =
    "✓ Electrodos de grafito colocados correctamente";

  workbenchStatus.style.color = "#92edc0";

  nextWorkbenchBtn.disabled = false;
}

// ======================================

// PASO 6: FUENTE DE CORRIENTE CONTINUA

// ======================================

draggablePowerSupply.addEventListener("dragstart", (event) => {
  if (workbenchCurrentStep !== 6 || powerSupplyPlaced) {
    event.preventDefault();

    return;
  }

  event.dataTransfer.setData("text/plain", "powerSupply");

  event.dataTransfer.effectAllowed = "move";
});

powerSupplyDropZone.addEventListener("dragover", (event) => {
  if (workbenchCurrentStep !== 6 || powerSupplyPlaced) return;

  event.preventDefault();

  event.stopPropagation();

  event.dataTransfer.dropEffect = "move";

  powerSupplyDropZone.classList.add("drag-over");
});

powerSupplyDropZone.addEventListener("dragleave", () => {
  powerSupplyDropZone.classList.remove("drag-over");
});

powerSupplyDropZone.addEventListener("drop", (event) => {
  if (workbenchCurrentStep !== 6 || powerSupplyPlaced) return;

  event.preventDefault();

  event.stopPropagation();

  powerSupplyDropZone.classList.remove("drag-over");

  if (event.dataTransfer.getData("text/plain") === "powerSupply") {
    colocarFuente();
  }
});

// Alternativa: seleccionar y pulsar la mesa

draggablePowerSupply.addEventListener("click", () => {
  if (workbenchCurrentStep !== 6 || powerSupplyPlaced) return;

  powerSupplySelected = true;

  draggablePowerSupply.classList.add("selected");

  workbenchStatus.textContent =
    "Ahora selecciona la mesa para colocar la fuente.";
});

draggablePowerSupply.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();

    draggablePowerSupply.click();
  }
});

document.querySelector(".lab-table-area").addEventListener("click", () => {
  if (powerSupplySelected && workbenchCurrentStep === 6 && !powerSupplyPlaced) {
    colocarFuente();
  }
});

function colocarFuente() {
  if (powerSupplyPlaced || !graphitePlaced) return;

  const svgOriginal = draggablePowerSupply.querySelector("svg");

  if (!svgOriginal) return;

  const svgFuente = svgOriginal.cloneNode(true);

  placedPowerSupply.appendChild(svgFuente);

  placedPowerSupply.hidden = false;

  // Ocultar el marco al colocar la fuente

  powerSupplyGuide.hidden = true;

  // Quitar cualquier resaltado de arrastre

  powerSupplyDropZone.classList.remove("drag-over");

  powerSupplyPlaced = true;

  powerSupplySelected = false;

  draggablePowerSupply.classList.remove("selected");

  draggablePowerSupply.classList.add("used");

  workbenchStatus.textContent =
    "✓ Fuente de corriente continua colocada correctamente";

  workbenchStatus.style.color = "#92edc0";

  nextWorkbenchBtn.disabled = false;
}

// ======================================

// PASO 7: CONEXIÓN DE CABLES

// ======================================

const electricalConnections = document.querySelector("#electricalConnections");

const labTableArea = document.querySelector(".lab-table-area");

// Seleccionar los cables desde la bandeja

draggableCables.addEventListener("click", () => {
  if (workbenchCurrentStep !== 7) return;

  cablesSelected = true;

  draggableCables.classList.add("selected");

  workbenchStatus.textContent =
    "Cables seleccionados. Haz clic sobre la mesa para conectarlos.";

  workbenchStatus.style.color = "#b9d4e2";
});

// Accesibilidad mediante teclado

draggableCables.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();

    draggableCables.click();
  }
});

// Dibujar un cable en la capa SVG

function dibujarCable(tipo, inicio, fin) {
  const svgNS = "http://www.w3.org/2000/svg";
  // Ajustar el SVG al tamaño real de la mesa
  const anchoMesa = labTableArea.clientWidth;
  const altoMesa = labTableArea.clientHeight;

  electricalConnections.setAttribute("viewBox", `0 0 ${anchoMesa} ${altoMesa}`);

  electricalConnections.setAttribute("preserveAspectRatio", "none");

  const cable = document.createElementNS(svgNS, "path");

  const controlY = Math.min(inicio.y, fin.y) - 75;

  cable.setAttribute(
    "d",

    `M ${inicio.x} ${inicio.y}

     C ${inicio.x} ${controlY},

       ${fin.x} ${controlY},

       ${fin.x} ${fin.y}`,
  );

  cable.setAttribute(
    "class",

    tipo === "negative" ? "negative-wire" : "positive-wire",
  );

  electricalConnections.appendChild(cable);

  // PINZA DE COCODRILO EN EL EXTREMO DEL ELECTRODO

  const svgNSPinza = "http://www.w3.org/2000/svg";

  const pinza = document.createElementNS(svgNSPinza, "g");

  // La pinza se sitúa donde empieza el cable

  pinza.setAttribute(
    "transform",

    `translate(${inicio.x}, ${inicio.y - 20}) rotate(90)`,
  );

  const colorAislante = tipo === "negative" ? "#252f39" : "#d83f50";

  const colorBorde = tipo === "negative" ? "#7d909e" : "#ff9ca5";

  // Cuerpo aislante de la pinza

  const cuerpo = document.createElementNS(svgNSPinza, "rect");

  cuerpo.setAttribute("x", "-3");

  cuerpo.setAttribute("y", "-7");

  cuerpo.setAttribute("width", "20");

  cuerpo.setAttribute("height", "14");

  cuerpo.setAttribute("rx", "4");

  cuerpo.setAttribute("fill", colorAislante);

  cuerpo.setAttribute("stroke", colorBorde);

  cuerpo.setAttribute("stroke-width", "1.2");

  pinza.appendChild(cuerpo);

  // Mordaza metálica superior

  const mordazaSuperior = document.createElementNS(svgNSPinza, "path");

  mordazaSuperior.setAttribute(
    "d",

    "M 15 -5 L 29 -5 L 35 -1 L 27 -1 L 18 -2 Z",
  );

  mordazaSuperior.setAttribute("fill", "#aebdc7");

  mordazaSuperior.setAttribute("stroke", "#667a88");

  mordazaSuperior.setAttribute("stroke-width", "1");

  pinza.appendChild(mordazaSuperior);

  // Mordaza metálica inferior

  const mordazaInferior = document.createElementNS(svgNSPinza, "path");

  mordazaInferior.setAttribute("d", "M 15 5 L 29 5 L 35 1 L 27 1 L 18 2 Z");

  mordazaInferior.setAttribute("fill", "#d4dfe6");

  mordazaInferior.setAttribute("stroke", "#718592");

  mordazaInferior.setAttribute("stroke-width", "1");

  pinza.appendChild(mordazaInferior);

  // Articulación de la pinza

  const articulacion = document.createElementNS(svgNSPinza, "circle");

  articulacion.setAttribute("cx", "14");

  articulacion.setAttribute("cy", "0");

  articulacion.setAttribute("r", "2.5");

  articulacion.setAttribute("fill", "#8a9da9");

  articulacion.setAttribute("stroke", "#dbe6ec");

  articulacion.setAttribute("stroke-width", ".8");

  pinza.appendChild(articulacion);

  // Reflejo metálico sobre la mordaza

  const brilloMetal = document.createElementNS(svgNSPinza, "path");

  brilloMetal.setAttribute("d", "M 20 -4 L 29 -4");

  brilloMetal.setAttribute("stroke", "#f0f7fb");

  brilloMetal.setAttribute("stroke-width", "1");

  brilloMetal.setAttribute("stroke-linecap", "round");

  brilloMetal.setAttribute("opacity", "0.8");

  pinza.appendChild(brilloMetal);

  // Añadir la pinza sobre el cable

  electricalConnections.appendChild(pinza);
}

// Obtener una posición relativa a la mesa

function obtenerPunto(elemento, xRatio, yRatio) {
  const rect = elemento.getBoundingClientRect();

  const mesa = labTableArea.getBoundingClientRect();

  return {
    x: rect.left - mesa.left + rect.width * xRatio,

    y: rect.top - mesa.top + rect.height * yRatio,
  };
}

// Conectar los cables en orden

function conectarCables() {
  if (workbenchCurrentStep !== 7 || !cablesSelected) return;

  const vasoSVG = placedBeaker.querySelector("svg");

  const fuenteSVG = placedPowerSupply.querySelector("svg");

  if (!vasoSVG || !fuenteSVG) return;

  // Primer cable: negativo

  if (!blackCableConnected) {
    const electrodoNegativo = obtenerPunto(vasoSVG, 0.38, 0.15);

    const terminalNegativo = obtenerPunto(fuenteSVG, 0.275, 0.67);

    dibujarCable("negative", electrodoNegativo, terminalNegativo);

    blackCableConnected = true;

    workbenchStatus.textContent =
      "✓ Cable negativo conectado. Ahora conecta el positivo.";

    workbenchStatus.style.color = "#92edc0";

    return;
  }

  // Segundo cable: positivo

  if (!redCableConnected) {
    const electrodoPositivo = obtenerPunto(vasoSVG, 0.62, 0.15);

    const terminalPositivo = obtenerPunto(fuenteSVG, 0.725, 0.67);

    dibujarCable("positive", electrodoPositivo, terminalPositivo);

    redCableConnected = true;

    cablesSelected = false;

    draggableCables.classList.remove("selected");

    draggableCables.classList.add("used");

    workbenchStatus.textContent = "✓ Ambos cables conectados correctamente";

    workbenchStatus.style.color = "#92edc0";

    nextWorkbenchBtn.disabled = false;
  }
}

// Al hacer clic en la mesa, conectar el siguiente cable

labTableArea.addEventListener("click", () => {
  conectarCables();
});

// ======================================

// PASO 8: ENCENDIDO VIRTUAL DE LA FUENTE

// ======================================

// ======================================

// BURBUJAS DE ELECTRÓLISIS

// ======================================

function iniciarBurbujasElectrolisis() {
  const vasoSVG = placedBeaker.querySelector("svg");

  if (!vasoSVG) return;

  // Evitar duplicar las burbujas

  if (vasoSVG.querySelector("#burbujasElectrolisis")) return;

  const svgNS = "http://www.w3.org/2000/svg";

  const grupo = document.createElementNS(svgNS, "g");

  grupo.setAttribute("id", "burbujasElectrolisis");

  // Electrodos ubicados en X = 68 y X = 112

  const electrodos = [68, 112];

  electrodos.forEach((xElectrodo, indice) => {
    for (let i = 0; i < 8; i++) {
      const burbuja = document.createElementNS(svgNS, "circle");

      // Distribuir las burbujas cerca de cada varilla

      const desplazamiento = (i % 2 === 0 ? -1 : 1) * (7 + (i % 3) * 2);

      const x = xElectrodo + desplazamiento;

      const y = 124 + (i % 6) * 10;

      burbuja.setAttribute("cx", x);

      burbuja.setAttribute("cy", y);

      burbuja.setAttribute("r", 1.5 + (i % 3) * 0.5);

      burbuja.setAttribute("fill", "#d9f8ff");

      burbuja.setAttribute("fill-opacity", "0.75");

      burbuja.setAttribute("stroke", "#ffffff");

      burbuja.setAttribute("stroke-opacity", "0.55");

      burbuja.setAttribute("stroke-width", "0.4");

      burbuja.classList.add("electrolysis-bubble");

      burbuja.style.animationDelay = `-${(i * 0.29 + indice * 0.17).toFixed(2)}s`;

      burbuja.style.animationDuration = `${1.8 + (i % 5) * 0.35}s`;

      // Aparición progresiva del burbujeo
      burbuja.style.visibility = "hidden";

      const retraso = 2000 + i * 750 + indice * 150;

      setTimeout(() => {
        if (powerSupplyOn && burbuja.isConnected) {
          burbuja.style.visibility = "visible";

          // Última burbuja del segundo electrodo
          if (i === 7 && indice === 1 && workbenchCurrentStep === 8) {
            nextWorkbenchBtn.disabled = false;
            nextWorkbenchBtn.textContent = "Siguiente paso →";

            workbenchStatus.textContent =
              "✓ Burbujeo estabilizado. Puedes continuar.";

            workbenchStatus.style.color = "#92edc0";

            workbenchInstruction.textContent =
              "Se observa la formación de burbujas en ambos electrodos. Continúa con el experimento.";
          }
        }
      }, retraso);

      grupo.appendChild(burbuja);
    }
  });

  // Situar las burbujas encima del agua

  // y detrás de las varillas de grafito

  const electrodosSVG = vasoSVG.querySelector("#graphiteElectrodes");

  if (electrodosSVG) {
    vasoSVG.insertBefore(grupo, electrodosSVG);
  } else {
    vasoSVG.appendChild(grupo);
  }
}

function encenderFuenteVirtual() {
  if (
    workbenchCurrentStep !== 8 ||
    !powerSupplyPlaced ||
    !blackCableConnected ||
    !redCableConnected ||
    powerSupplyOn
  ) {
    return;
  }

  const fuenteSVG = placedPowerSupply.querySelector("svg");

  if (!fuenteSVG) return;

  const svgNS = "http://www.w3.org/2000/svg";

  // Cambiar el texto OFF por ON

  const textos = [...fuenteSVG.querySelectorAll("text")];

  const pantalla = textos.find((texto) => texto.textContent.trim() === "OFF");

  if (pantalla) {
    pantalla.textContent = "ON";

    pantalla.setAttribute("fill", "#79f7ad");

    pantalla.setAttribute("font-weight", "bold");
  }

  // Luz indicadora verde

  const luz = document.createElementNS(svgNS, "circle");

  luz.setAttribute("cx", "100");

  luz.setAttribute("cy", "102");

  luz.setAttribute("r", "5");

  luz.setAttribute("fill", "#64f5a0");

  luz.setAttribute("filter", "drop-shadow(0 0 4px #64f5a0)");

  fuenteSVG.appendChild(luz);

  // Cambiar ligeramente el color de la pantalla

  const pantallaFondo = fuenteSVG.querySelector('rect[x="35"][y="43"]');

  if (pantallaFondo) {
    pantallaFondo.setAttribute("stroke", "#69dca1");
  }

  powerSupplyOn = true;

  // Esperar hasta completar el burbujeo
  nextWorkbenchBtn.disabled = true;
  nextWorkbenchBtn.textContent = "Formando burbujas...";

  // Iniciar la formación de burbujas

  iniciarBurbujasElectrolisis();

  placedPowerSupply.classList.remove("power-ready");

  placedPowerSupply.classList.add("power-on");

  workbenchStatus.textContent =
    "✓ Fuente encendida. Circuito virtual activado.";

  workbenchStatus.style.color = "#92edc0";

  workbenchInstruction.textContent =
    "Fuente encendida correctamente. Continúa para observar la electrólisis.";
}

// Detectar clic sobre el botón circular de encendido

placedPowerSupply.addEventListener("click", (event) => {
  if (workbenchCurrentStep !== 8 || powerSupplyOn) return;

  const fuenteSVG = placedPowerSupply.querySelector("svg");

  if (!fuenteSVG) return;

  const rect = fuenteSVG.getBoundingClientRect();

  // Convertir posición del clic a coordenadas SVG

  const punto = fuenteSVG.createSVGPoint();

  punto.x = event.clientX;

  punto.y = event.clientY;

  const matriz = fuenteSVG.getScreenCTM();

  if (!matriz) return;

  const posicion = punto.matrixTransform(matriz.inverse());

  // Botón circular central: cx=100, cy=102

  const distancia = Math.hypot(posicion.x - 100, posicion.y - 102);

  if (distancia <= 15) {
    encenderFuenteVirtual();
  } else {
    workbenchStatus.textContent =
      "Haz clic en el botón circular central de la fuente.";
  }
});

// ==========================================
// PASO 9: APLICACIÓN DE FENOLFTALEÍNA
// ==========================================

// Seleccionar el frasco de fenolftaleína
draggablePhenolphthalein.addEventListener("click", () => {
  if (workbenchCurrentStep !== 9 || phenolphthaleinAdded) return;

  phenolphthaleinSelected = true;
  draggablePhenolphthalein.classList.add("selected");

  workbenchStatus.textContent =
    "Indicador seleccionado. Haz clic sobre el vaso para agregar unas gotas.";

  workbenchStatus.style.color = "#8cd8fa";
});

// Permitir seleccionar el frasco con el teclado
draggablePhenolphthalein.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    draggablePhenolphthalein.click();
  }
});

function aplicarFenolftaleina() {
  if (
    workbenchCurrentStep !== 9 ||
    !phenolphthaleinSelected ||
    phenolphthaleinAdded ||
    !powerSupplyOn
  ) {
    return;
  }

  const vasoSVG = placedBeaker.querySelector("svg");
  if (!vasoSVG) return;

  const svgNS = "http://www.w3.org/2000/svg";

  // Zona rosada del cátodo (lado izquierdo)
  const zonaRosada = document.createElementNS(svgNS, "path");

  zonaRosada.setAttribute(
    "d",
    "M 40 108 Q 62 106 87 106 L 87 185 H 59 Q 39 185 39 166 Z",
  );

  zonaRosada.setAttribute("fill", "#f472b6");
  zonaRosada.setAttribute("fill-opacity", "0");
  zonaRosada.setAttribute("id", "zonaFenolftaleina");

  zonaRosada.style.transition = "fill-opacity 2s ease";

  // Colocar el color sobre el agua y debajo de los electrodos
  const electrodos = vasoSVG.querySelector("#graphiteElectrodes");

  if (electrodos) {
    vasoSVG.insertBefore(zonaRosada, electrodos);
  } else {
    vasoSVG.appendChild(zonaRosada);
  }

  // Activar el cambio de color progresivo
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      zonaRosada.setAttribute("fill-opacity", "0.5");
    });
  });

  phenolphthaleinAdded = true;
  phenolphthaleinSelected = false;

  draggablePhenolphthalein.classList.remove("selected");
  draggablePhenolphthalein.classList.add("used");

  workbenchInstruction.textContent =
    "Observa la coloración rosada en el compartimento del cátodo, indicando un medio alcalino.";

  workbenchStatus.textContent =
    "✓ Fenolftaleína aplicada. Se observa una coloración rosada en el cátodo.";

  workbenchStatus.style.color = "#92edc0";

  nextWorkbenchBtn.disabled = false;
}

// Aplicar el indicador haciendo clic sobre el vaso
beakerDropZone.addEventListener("click", () => {
  aplicarFenolftaleina();
});

// ==========================================
// PASO 10: EXTRACCIÓN VIRTUAL DE MUESTRA
// ==========================================

draggablePipette.addEventListener("click", () => {
  if (workbenchCurrentStep !== 10 || sampleCollected) return;

  pipetteSelected = true;
  draggablePipette.classList.add("selected");

  workbenchStatus.textContent =
    "Pipeta seleccionada. Haz clic sobre el vaso para tomar la muestra.";

  workbenchStatus.style.color = "#8cd8fa";
});

draggablePipette.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    draggablePipette.click();
  }
});

beakerDropZone.addEventListener("click", () => {
  if (workbenchCurrentStep !== 10 || !pipetteSelected || sampleCollected) {
    return;
  }

  sampleCollected = true;
  pipetteSelected = false;

  sampleTubeLiquid.setAttribute("visibility", "visible");

  draggablePipette.classList.remove("selected");
  draggablePipette.classList.add("used");

  workbenchInstruction.textContent =
    "La muestra previa a la aplicación del indicador ha sido reservada para el análisis opcional.";

  workbenchStatus.textContent =
    "✓ Muestra reservada correctamente en el tubo de ensayo.";

  workbenchStatus.style.color = "#92edc0";

  nextWorkbenchBtn.disabled = false;
});

// ==========================================
// PASO 11: APAGAR FUENTE Y RETIRAR MEMBRANA
// ==========================================

let membraneRemoved = false;

function apagarFuenteVirtual() {
  if (workbenchCurrentStep !== 11 || !powerSupplyOn) return;

  const fuenteSVG = placedPowerSupply.querySelector("svg");
  if (!fuenteSVG) return;

  // Cambiar ON por OFF
  const textos = [...fuenteSVG.querySelectorAll("text")];
  const pantalla = textos.find((texto) => texto.textContent.trim() === "ON");

  if (pantalla) {
    pantalla.textContent = "OFF";
    pantalla.setAttribute("fill", "#86a3b5");
  }

  // Detener la representación de la electrólisis
  const burbujas = placedBeaker.querySelector("#burbujasElectrolisis");

  if (burbujas) {
    burbujas.remove();
  }

  placedPowerSupply.classList.remove("power-on");

  powerSupplyOn = false;

  workbenchInstruction.textContent =
    "Fuente apagada. Ahora haz clic sobre la membrana dentro del vaso para retirarla.";

  workbenchStatus.textContent = "✓ Fuente apagada. Puedes retirar la membrana.";

  workbenchStatus.style.color = "#92edc0";
}

// Apagar haciendo clic en el botón central de la fuente
placedPowerSupply.addEventListener("click", (event) => {
  if (workbenchCurrentStep !== 11 || !powerSupplyOn) return;

  const fuenteSVG = placedPowerSupply.querySelector("svg");
  if (!fuenteSVG) return;

  const punto = fuenteSVG.createSVGPoint();
  punto.x = event.clientX;
  punto.y = event.clientY;

  const matriz = fuenteSVG.getScreenCTM();
  if (!matriz) return;

  const posicion = punto.matrixTransform(matriz.inverse());

  const distancia = Math.hypot(posicion.x - 100, posicion.y - 102);

  if (distancia <= 15) {
    apagarFuenteVirtual();
  }
});

// Retirar la membrana manualmente
beakerDropZone.addEventListener("click", (event) => {
  if (
    workbenchCurrentStep !== 11 ||
    powerSupplyOn ||
    !membranePlaced ||
    membraneRemoved
  ) {
    return;
  }

  const membrana = placedBeaker.querySelector("#membranaSeparadora");
  if (!membrana) return;

  // Comprobar que el clic fue sobre la membrana
  if (!membrana.contains(event.target)) return;

  membrana.remove();

  membraneRemoved = true;
  membranePlaced = false;

  workbenchInstruction.textContent =
    "Membrana retirada. Observa que los compartimentos ya no están separados.";

  workbenchStatus.textContent =
    "✓ Membrana retirada correctamente. Puedes continuar.";

  workbenchStatus.style.color = "#92edc0";

  nextWorkbenchBtn.disabled = false;
});

// ==========================================
// PASO 12: ENSAYO CON CLORURO FÉRRICO
// ==========================================

// Seleccionar el reactivo
draggableFerricChloride.addEventListener("click", () => {
  if (workbenchCurrentStep !== 12 || ferricChlorideAdded) return;

  ferricChlorideSelected = true;
  draggableFerricChloride.classList.add("selected");

  workbenchStatus.textContent =
    "Cloruro férrico seleccionado. Haz clic sobre el tubo de ensayo.";

  workbenchStatus.style.color = "#8cd8fa";
});

// Accesibilidad mediante teclado
draggableFerricChloride.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    draggableFerricChloride.click();
  }
});

// Aplicar al tubo de ensayo
sampleTubeStation.addEventListener("click", () => {
  if (
    workbenchCurrentStep !== 12 ||
    !ferricChlorideSelected ||
    ferricChlorideAdded ||
    !sampleCollected
  ) {
    return;
  }

  ferricChlorideAdded = true;
  ferricChlorideSelected = false;

  
// Formación gradual del precipitado Fe(OH)3
const svgNS = "http://www.w3.org/2000/svg";
const tuboSVG = sampleTubeStation.querySelector("svg");

// Cambio de color más lento: turbidez de la muestra
sampleTubeLiquid.style.transition =
  "fill 3s ease, fill-opacity 3s ease";

sampleTubeLiquid.setAttribute("fill", "#a86638");
sampleTubeLiquid.setAttribute("fill-opacity", "0.78");

if (tuboSVG && !tuboSVG.querySelector("#ferricPrecipitate")) {
  const grupo = document.createElementNS(svgNS, "g");
  grupo.setAttribute("id", "ferricPrecipitate");

  // Pequeños flóculos dentro del líquido
  for (let i = 0; i < 15; i++) {
    const floculo = document.createElementNS(svgNS, "circle");

    const x = 39 + ((i * 11) % 22);
    const y = 100 + ((i * 7) % 22);
    const radio = 0.8 + (i % 3) * 0.45;

    floculo.setAttribute("cx", x);
    floculo.setAttribute("cy", y);
    floculo.setAttribute("r", radio);
    floculo.setAttribute(
      "fill",
      i % 2 === 0 ? "#783d24" : "#b96b35"
    );
    floculo.setAttribute("opacity", "0");

    floculo.style.transition =
      "opacity 0.8s ease, transform 3s ease";

    grupo.appendChild(floculo);

    setTimeout(() => {
      if (!floculo.isConnected) return;

      floculo.setAttribute("opacity", "0.85");
      floculo.style.transform = `translateY(${5 + i % 6}px)`;
    }, 600 + i * 140);
  }

  // Sedimento que se acumula en el fondo
  const sedimento = document.createElementNS(svgNS, "path");

  sedimento.setAttribute(
    "d",
    "M35 129 Q42 126 50 129 Q58 125 65 129 V126 Q65 137 50 137 Q35 137 35 126 Z"
  );

  sedimento.setAttribute("fill", "#754025");
  sedimento.setAttribute("opacity", "0");
  sedimento.style.transition = "opacity 2s ease";

  grupo.appendChild(sedimento);
  tuboSVG.appendChild(grupo);

  setTimeout(() => {
    if (sedimento.isConnected) {
      sedimento.setAttribute("opacity", "0.95");
    }
  }, 3000);
}


  draggableFerricChloride.classList.remove("selected");
  draggableFerricChloride.classList.add("used");

  workbenchInstruction.textContent =
    "Observa el precipitado marrón rojizo. Esta reacción es compatible con la presencia de iones OH⁻, pero no confirma hipoclorito.";

  workbenchStatus.textContent =
    "✓ Ensayo virtual completado. Se representa la formación de Fe(OH)₃.";

  workbenchStatus.style.color = "#92edc0";

  nextWorkbenchBtn.disabled = true;
nextWorkbenchBtn.textContent = "Formando precipitado...";

setTimeout(() => {
  nextWorkbenchBtn.disabled = false;
  nextWorkbenchBtn.textContent = "Siguiente paso →";
}, 5000);
});

// ==========================================
// PASO 13: EVALUACIÓN FINAL
// ==========================================

const finalQuiz = document.querySelector("#finalQuiz");
const quizResult = document.querySelector("#quizResult");

finalQuiz.addEventListener("submit", (event) => {
  event.preventDefault();

  const respuestas = new FormData(finalQuiz);

  const correctas = {
    q1: "b",
    q2: "a",
    q3: "b",
  };

  const explicaciones = {
    q1: "La energía eléctrica permite una reacción redox no espontánea.",
    q2: "La fenolftaleína se vuelve rosada en un medio suficientemente alcalino.",
    q3: "Después de añadir cloruro férrico comercial se debe observar la formación de un precipitado.",
  };

  let puntaje = 0;
  let detalle = "";

  for (const [pregunta, respuesta] of Object.entries(correctas)) {
    const acertada = respuestas.get(pregunta) === respuesta;

    if (acertada) puntaje++;

    detalle += `
      <p>
        <strong>${pregunta.toUpperCase()}:
        ${acertada ? "✓ Correcta" : "✗ Incorrecta"}</strong>
        — ${explicaciones[pregunta]}
      </p>
    `;
  }

  quizResult.hidden = false;
  quizResult.innerHTML = `
    <h3>Resultado: ${puntaje} de 3 respuestas correctas</h3>
    ${detalle}
    <p><strong>¡Laboratorio virtual finalizado!</strong></p>
  `;

  quizResult.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
});
