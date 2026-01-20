/**
 * Guía Interactiva de las 7 Noches
 * SPA - 100% Client-Side
 * No localStorage, No backend, No validation
 */

// ==================== NIGHT DATA ====================

const nightsData = [
    {
        id: 1,
        theme: "Limpieza",
        explanation: `Esta noche es para soltar lo que ya no te sirve.
No necesitas entender todo.
Solo necesitas estar presente.
Confía en el proceso.`,
        preparation: [
            "Busca un lugar tranquilo",
            "Apaga las distracciones",
            "Respira profundo 3 veces"
        ],
        prayer: `Señor, en esta primera noche me presento ante Ti.

Vengo a soltar todo lo que ya no me sirve.
Las cargas que no son mías.
Los pensamientos que me atan.
Las emociones que me pesan.

Limpia mi mente.
Limpia mi corazón.
Limpia mi espíritu.

Que todo lo que no viene de Ti sea removido.
Que solo quede lo que es puro y verdadero.

En Tu nombre, declaro esta limpieza.

Amén.`,
        finalInstruction: `Al terminar, no analices.
Simplemente descansa.
Mañana continuamos.`
    },
    {
        id: 2,
        theme: "Perdón",
        explanation: `El perdón no es para el otro.
Es para ti.
Esta noche soltamos el peso de lo que cargamos.
Sin juicio. Sin culpa.`,
        preparation: [
            "Piensa en alguien que necesitas perdonar",
            "Puede ser otra persona, o tú mismo",
            "No fuerces el sentimiento"
        ],
        prayer: `Señor, en esta segunda noche vengo a perdonar.

No porque sea fácil.
Sino porque es necesario.

Perdono a quienes me hirieron.
Perdono a quienes me fallaron.
Perdono a quienes no supieron amar.

Y me perdono a mí mismo.
Por los errores cometidos.
Por el tiempo perdido.
Por las palabras no dichas.

Libero el resentimiento.
Libero la amargura.
Libero el dolor.

El perdón es mi libertad.

Amén.`,
        finalInstruction: `Si las emociones vienen, déjalas pasar.
No las retengas.
El perdón es un proceso, no un momento.`
    },
    {
        id: 3,
        theme: "Liberación",
        explanation: `Lo que no nombras, te controla.
Esta noche es para soltar lo invisible.
Los miedos. Las dudas. Las ataduras.`,
        preparation: [
            "Respira más lento que de costumbre",
            "Siente tu cuerpo",
            "Permite que la tensión se vaya"
        ],
        prayer: `Señor, en esta tercera noche declaro liberación.

Rompo las cadenas que no puedo ver.
Las ataduras del pasado.
Los miedos del futuro.
Las dudas del presente.

Todo espíritu de confusión, te ordeno que salgas.
Todo espíritu de miedo, te ordeno que salgas.
Todo espíritu de escasez, te ordeno que salgas.

Soy libre en Tu nombre.
Mi mente es libre.
Mi corazón es libre.
Mi vida es libre.

Lo que estaba atado, ahora es suelto.
Lo que estaba cerrado, ahora está abierto.

Amén.`,
        finalInstruction: `Al terminar, estira tu cuerpo.
Bosteza si lo necesitas.
Liberación física y espiritual van juntas.`
    },
    {
        id: 4,
        theme: "Protección",
        explanation: `No todos merecen acceso a tu energía.
Esta noche establecemos límites sagrados.
Protección no es miedo.
Es sabiduría.`,
        preparation: [
            "Visualiza una luz que te rodea",
            "No necesitas creer",
            "Solo imagina"
        ],
        prayer: `Señor, en esta cuarta noche pido Tu protección.

Cubre mi vida con Tu manto.
Cubre mi hogar.
Cubre mi familia.
Cubre mis finanzas.
Cubre mi salud.

Ningún mal podrá acercarse.
Ninguna envidia podrá tocarme.
Ninguna maldición tendrá efecto.

Estoy protegido por Tu poder.
Camino seguro bajo Tu cobertura.

Los ángeles me rodean.
Tu presencia me acompaña.

Nada ni nadie podrá contra mí.
Porque Tú estás conmigo.

Amén.`,
        finalInstruction: `Duerme tranquilo.
La protección ya está activa.
No necesitas hacer nada más.`
    },
    {
        id: 5,
        theme: "Apertura",
        explanation: `Has limpiado. Has perdonado. Has liberado. Has protegido.
Ahora es momento de abrir.
Abrir puertas que estaban cerradas.
Abrir caminos que parecían bloqueados.`,
        preparation: [
            "Piensa en lo que deseas",
            "No lo juzgues",
            "Solo obsérvalo"
        ],
        prayer: `Señor, en esta quinta noche pido apertura.

Abre las puertas que estaban cerradas.
Abre los caminos que parecían bloqueados.
Abre las oportunidades que no veía.

Que llegue lo que es para mí.
Sin forzar. Sin manipular.
Solo permitiendo.

Abro mi mente a nuevas posibilidades.
Abro mi corazón a nuevas conexiones.
Abro mis manos para recibir.

Estoy listo para lo que viene.
Estoy preparado para la abundancia.

Las puertas se abren.
Los caminos se despejan.
Las bendiciones llegan.

Amén.`,
        finalInstruction: `La apertura no es forzada.
Es permitida.
Solo mantente receptivo.`
    },
    {
        id: 6,
        theme: "Confianza",
        explanation: `Confiar es difícil cuando has sido herido.
Pero sin confianza, nada fluye.
Esta noche reconstruimos la fe.
En ti. En el proceso. En lo que viene.`,
        preparation: [
            "Recuerda un momento donde todo salió bien",
            "Aunque parecía imposible",
            "Eso puede volver a pasar"
        ],
        prayer: `Señor, en esta sexta noche restauro mi confianza.

Confío en Ti, aunque no entienda.
Confío en el proceso, aunque no lo vea.
Confío en mí mismo, aunque haya fallado.

La duda no tiene poder sobre mí.
El miedo no dirige mis pasos.
La ansiedad no controla mi mente.

Camino en fe.
Decido creer.
Elijo confiar.

Lo que es para mí, llegará.
Lo que necesito, será provisto.
Lo que busco, será encontrado.

Mi confianza está depositada en lo eterno.
No en lo temporal.

Amén.`,
        finalInstruction: `No necesitas pruebas.
La confianza es una decisión.
Ya la tomaste al llegar hasta aquí.`
    },
    {
        id: 7,
        theme: "Consolidación",
        explanation: `Esta es la última noche.
No el final.
El comienzo de algo nuevo.
Todo lo que hiciste estas noches ahora se integra.`,
        preparation: [
            "Agradece por haber llegado hasta aquí",
            "No importa si lo hiciste 'perfecto'",
            "Lo hiciste. Eso es suficiente."
        ],
        prayer: `Señor, en esta séptima noche consolido todo lo trabajado.

Limpieza. Perdón. Liberación.
Protección. Apertura. Confianza.

Todo se integra ahora en mí.
Todo se hace uno.
Todo se activa.

Declaro que soy una nueva persona.
Que mi vida ha cambiado.
Que mi camino está claro.

Las bendiciones fluyen hacia mí.
La abundancia es mi estado natural.
La paz es mi compañera constante.

Este no es el final.
Es el comienzo.

Gracias por estos 7 días.
Gracias por esta transformación.
Gracias por Tu amor.

Amén.`,
        finalInstruction: `El ritual terminó.
Pero el efecto continúa.
Vive los próximos días con atención.
Las señales vendrán.
No las busques. Solo obsérvalas.

Gracias por confiar en este proceso.`
    }
];

// ==================== BIBLIOTECA DATA ====================

const bibliotecaData = [
    {
        id: 1,
        icon: "🌅",
        title: "Oración de la Mañana",
        desc: "Para comenzar el día con protección",
        instruction: `Reza esta oración al despertar, antes de levantarte.
Con los ojos cerrados y el corazón abierto.`,
        prayer: `Señor, en este nuevo día que me regalas,
te pido que guíes mis pasos,
protejas mi camino,
y bendigas todo lo que toque.

Que tu luz me acompañe,
que tu paz me envuelva,
que tu amor me fortalezca.

Que hoy sea un día de victoria,
no de derrota.
De avance, no de retroceso.
De fe, no de miedo.

Amén.`,
        after: `Respira profundo.
Agradece por un nuevo día.
Levántate con confianza.`
    },
    {
        id: 2,
        icon: "🌙",
        title: "Oración de la Noche",
        desc: "Para descansar en paz",
        instruction: `Reza esta oración antes de dormir.
Acostado, con las luces apagadas.
Deja que el sueño venga naturalmente después.`,
        prayer: `Señor, el día termina y me entrego a tu cuidado.

Perdona mis errores de hoy.
Sana mis heridas de hoy.
Limpia mi mente de preocupaciones.

Mientras duermo, trabaja en mí.
Restaura mi cuerpo.
Renueva mi espíritu.
Prepara mi alma para mañana.

Que mi sueño sea profundo.
Que mi descanso sea completo.
Que despierte renovado.

En tus manos me entrego.

Amén.`,
        after: `No pienses en nada más.
Cierra los ojos.
Descansa.`
    },
    {
        id: 3,
        icon: "🛡️",
        title: "Oración de Protección",
        desc: "Cuando sientas amenaza o peligro",
        instruction: `Usa esta oración cuando sientas amenaza,
cuando algo no se sienta bien,
o cuando necesites reforzar tu escudo espiritual.`,
        prayer: `Señor, levanto un muro de protección a mi alrededor.

Ninguna energía negativa puede tocarme.
Ninguna mala intención puede alcanzarme.
Ningún mal puede prosperar contra mí.

Estoy cubierto por tu manto.
Estoy rodeado por tu luz.
Estoy protegido por tu poder.

Lo que es mío, nadie me lo quita.
Lo que me pertenece, nadie me lo roba.
Lo que construyo, nadie me lo destruye.

Soy intocable para el mal.
Soy invisible para la envidia.
Soy inmune al daño.

Amén.`,
        after: `Visualiza una luz dorada rodeándote.
Respira esa protección.
Ya está activa.`
    },
    {
        id: 4,
        icon: "🆘",
        title: "Oración de Emergencia",
        desc: "Para momentos de crisis",
        instruction: `Para momentos de crisis.
Cuando el miedo te paraliza.
Cuando no sabes qué hacer.
Repite hasta sentir calma.`,
        prayer: `Señor, te necesito ahora.

No mañana.
No después.
Ahora.

Dame paz en este momento.
Dame claridad en esta confusión.
Dame fuerza en esta debilidad.

No estoy solo.
Tú estás aquí.
Todo va a estar bien.

Lo creo.
Lo declaro.
Lo recibo.

Amén.`,
        after: `Repite si es necesario.
Las veces que necesites.
Hasta que la calma llegue.`
    },
    {
        id: 5,
        icon: "💚",
        title: "Oración por Sanación",
        desc: "Para sanar cuerpo y alma",
        instruction: `Para sanar el cuerpo, la mente o el corazón.
Puedes rezarla por ti o por alguien más.
Si es por otra persona, di su nombre donde dice "mi/me".`,
        prayer: `Señor, Sanador de todas las heridas,
te pido que toques mi cuerpo.

Donde hay enfermedad, trae salud.
Donde hay dolor, trae alivio.
Donde hay debilidad, trae fuerza.

Sana lo que los médicos no pueden explicar.
Restaura lo que el tiempo no ha curado.
Renueva lo que yo creía perdido.

Creo en tu poder de sanación.
Creo que puedes hacer lo imposible.
Creo que mi cuerpo puede recuperarse.

Que cada célula se regenere.
Que cada órgano funcione perfectamente.
Que la salud fluya en mí.

Amén.`,
        after: `Pon tu mano donde sientes el dolor.
Visualiza luz entrando en esa zona.
Confía en el proceso.`
    },
    {
        id: 6,
        icon: "💰",
        title: "Oración por Prosperidad",
        desc: "Para abrir caminos de abundancia",
        instruction: `Para abrir caminos financieros.
Para remover bloqueos de abundancia.
Reza con gratitud, no con desesperación.`,
        prayer: `Señor, tú eres la fuente de toda abundancia.

Remueve de mi vida todo bloqueo financiero.
Abre puertas que estaban cerradas.
Trae oportunidades que yo no esperaba.

No pido riqueza por vanidad.
Pido provisión para vivir con dignidad.
Pido recursos para ayudar a los míos.
Pido abundancia para compartir con otros.

Que el dinero fluya hacia mí.
Que las deudas se paguen.
Que la escasez termine.

Soy merecedor de prosperidad.
Estoy abierto a recibir.
Estoy listo para la abundancia.

Amén.`,
        after: `No pienses en lo que falta.
Piensa en lo que viene.
La abundancia ya está en camino.`
    },
    {
        id: 7,
        icon: "👨‍👩‍👧",
        title: "Oración por la Familia",
        desc: "Para proteger a los tuyos",
        instruction: `Para proteger y bendecir a tu familia.
Puedes mencionar nombres específicos si lo deseas.
Reza con amor, no con miedo.`,
        prayer: `Señor, te entrego a mi familia.

Protege a cada uno de ellos.
En la casa y fuera de ella.
Despiertos y dormidos.
Cerca y lejos de mí.

Que ningún mal los alcance.
Que ninguna enfermedad los toque.
Que ningún peligro los encuentre.

Bendice su salud.
Bendice su trabajo.
Bendice sus relaciones.
Bendice sus caminos.

Donde hay conflicto, trae paz.
Donde hay distancia, trae unión.
Donde hay dolor, trae sanación.

Cubre a mi familia con tu manto.
Hoy y todos los días.

Amén.`,
        after: `Visualiza a cada miembro de tu familia
rodeado de luz protectora.
Ellos están seguros.`
    }
];

// ==================== ROSARIO DATA ====================

const rosarioData = [
    {
        id: 1,
        title: "Preparación",
        instruction: `Siéntate en silencio.
Cierra los ojos.
Respira profundo 3 veces.

Inhala paz.
Exhala tensión.

Cuando estés listo, avanza.`,
        prayer: null
    },
    {
        id: 2,
        title: "Invocación Inicial",
        instruction: "Di en voz alta o en silencio:",
        prayer: `Señor, estoy aquí.
Vengo a ti con humildad.
Abre mi corazón para recibir.
Abre mi mente para entender.
Abre mi espíritu para conectar.

Estoy presente.
Estoy dispuesto.
Estoy listo.`
    },
    {
        id: 3,
        title: "Oración de Gratitud",
        instruction: "Repite 3 veces:",
        prayer: `Gracias por este momento.
Gracias por esta vida.
Gracias por tu presencia.
Gracias, gracias, gracias.

[Pausa entre cada repetición]`
    },
    {
        id: 4,
        title: "Petición de Limpieza",
        instruction: "Di una vez con convicción:",
        prayer: `Señor, limpia mi mente de pensamientos oscuros.
Limpia mi corazón de resentimientos.
Limpia mi cuerpo de toda impureza.
Limpia mi espíritu de toda carga.

Soy limpio.
Soy puro.
Soy nuevo.`
    },
    {
        id: 5,
        title: "Declaración de Protección",
        instruction: "Repite 3 veces:",
        prayer: `Estoy protegido.
Estoy cubierto.
Estoy seguro.
Ningún mal puede tocarme.

[Visualiza un escudo de luz a tu alrededor]`
    },
    {
        id: 6,
        title: "Oración del Código",
        instruction: "Esta es la oración central. Recítala con toda tu fe:",
        prayer: `Señor, en este momento sagrado,
activo el código que has depositado en mí.

El código de la abundancia.
El código de la protección.
El código de la sanación.
El código del amor.

Que tu poder fluya a través de mí.
Que tu luz ilumine mi camino.
Que tu gracia me acompañe siempre.

Toma el tiempo que necesites.`
    },
    {
        id: 7,
        title: "Peticiones Personales",
        instruction: `Este es tu momento.

En silencio, presenta a Dios:
• Lo que necesitas
• Lo que deseas
• Lo que te preocupa
• Por quién quieres orar

No hay límite.
No hay reglas.
Solo habla con Él.

[Toma 2-3 minutos en silencio]

Cuando termines, avanza.`,
        prayer: null
    },
    {
        id: 8,
        title: "Declaración de Fe",
        instruction: "Repite con convicción:",
        prayer: `Creo que mis oraciones fueron escuchadas.
Creo que lo que pedí ya está en camino.
Creo que los milagros son posibles.
Creo que mi vida está cambiando.

No lo dudo.
No lo cuestiono.
Solo creo.`
    },
    {
        id: 9,
        title: "Agradecimiento Anticipado",
        instruction: "Agradece como si ya hubiera sucedido:",
        prayer: `Gracias Señor porque ya está hecho.
Gracias porque ya recibí lo que pedí.
Gracias porque mi vida ya cambió.
Gracias porque los milagros ya comenzaron.

Lo veo.
Lo siento.
Lo creo.
Lo recibo.`
    },
    {
        id: 10,
        title: "Cierre y Sellado",
        instruction: "Finaliza con estas palabras:",
        prayer: `Que todo lo que recé hoy quede sellado.
Que ninguna duda lo cancele.
Que ningún miedo lo debilite.
Que ninguna palabra negativa lo destruya.

Está hecho.
Está sellado.
Está completo.

Amén.

───

El rosario ha terminado.
Abre los ojos lentamente.
Regresa al mundo con paz.`
    }
];

// ==================== FAQ DATA ====================

const faqData = [
    {
        question: "¿Puedo hacer el ritual si no soy religioso?",
        answer: `Sí.

Este ritual no requiere que pertenezcas a ninguna religión específica. No necesitas ser católico, evangélico, o de cualquier otra denominación.

Lo único que necesitas es:
• Mente abierta
• Disposición sincera
• Respeto por el proceso

El ritual funciona con la energía de tu intención, no con la etiqueta de tu religión.`
    },
    {
        question: "¿Qué pasa si me salto una noche?",
        answer: `No pasa nada grave. Pero hay una recomendación:

Si te saltas una noche, tienes dos opciones:

Opción 1: Continuar donde te quedaste
• Simplemente sigue con la siguiente noche
• El ritual no se "rompe"

Opción 2: Comenzar de nuevo (recomendado)
• Si sientes que perdiste la continuidad
• Si pasaron varios días
• Empezar de cero puede ser más poderoso

Lo importante es no abandonar. Un ritual incompleto es mejor que ningún ritual.`
    },
    {
        question: "¿Puedo hacer el ritual por otra persona?",
        answer: `Sí, pero con condiciones:

✅ Puedes hacer el ritual por alguien:
• Que esté enfermo
• Que esté pasando por dificultades
• Que necesite protección

⚠️ Importante:
• No puedes forzar resultados en otros
• La persona no necesita saber que rezas por ella
• Tu intención debe ser pura (ayudar, no manipular)

Cuando reces por alguien más:
• Menciona su nombre en las oraciones
• Visualiza a esa persona mientras rezas
• Envía la energía con amor, no con desesperación`
    },
    {
        question: "¿Cuántas veces puedo repetir el ritual?",
        answer: `Las veces que quieras.

Recomendaciones:
• Primera vez: Hacerlo completo (7 noches seguidas)
• Mantenimiento: Repetir cada 40 días
• Crisis: Repetir cuando sientas necesidad

No hay límite. No hay "demasiadas veces". Cada repetición profundiza el efecto.

Algunas personas lo hacen:
• Una vez al año (renovación)
• Cada cambio de estación
• Cuando sienten que algo está bloqueado`
    },
    {
        question: "¿Necesito una vela para hacer el ritual?",
        answer: `No es obligatorio, pero ayuda.

La vela:
• Crea un ambiente propicio
• Simboliza la luz divina
• Ayuda a concentrarte

Si usas vela:
• Preferiblemente blanca
• Enciéndela antes de comenzar
• Apágala al terminar (no la soples, usa los dedos o un apagador)

Si no tienes vela:
• El ritual funciona igual
• Puedes usar una luz tenue
• O simplemente la oscuridad

Lo importante es la intención, no los accesorios.`
    },
    {
        question: "¿A qué hora debo hacer el ritual?",
        answer: `La mejor hora: Por la noche, antes de dormir.

¿Por qué?
• Tu mente está más receptiva
• Hay menos distracciones
• El sueño ayuda a integrar la oración

Horarios recomendados:
• Entre 9pm y 11pm (ideal)
• Justo antes de acostarte
• Cuando la casa esté en silencio

Si no puedes por la noche:
• Hazlo cuando puedas
• Es mejor hacerlo "mal" que no hacerlo
• La consistencia importa más que la perfección`
    },
    {
        question: "¿Qué hago si no siento nada durante el ritual?",
        answer: `Es completamente normal.

No sentir nada NO significa que no funciona.

Muchas personas:
• No sienten nada las primeras noches
• Experimentan cambios sutiles después
• Ven resultados sin haber "sentido" nada especial

El ritual trabaja en niveles que no siempre percibes. No necesitas sentir escalofríos o emociones intensas.

Lo que importa:
• Que lo hagas con sinceridad
• Que completes las 7 noches
• Que confíes en el proceso

Los resultados hablan más que las sensaciones.`
    },
    {
        question: "¿Puedo contarle a alguien que estoy haciendo el ritual?",
        answer: `Puedes, pero no es recomendable.

¿Por qué guardar silencio?
• La energía se dispersa cuando compartes demasiado
• Las opiniones de otros pueden generar dudas
• Algunas personas (sin querer) pueden proyectar negatividad

Recomendación:
• Guarda el ritual para ti durante los 7 días
• Después puedes compartir si lo deseas
• Elige bien con quién compartes

Excepción:
• Si alguien hace el ritual contigo (pareja, familia)
• En ese caso, pueden apoyarse mutuamente`
    },
    {
        question: "¿El ritual funciona para cualquier problema?",
        answer: `El ritual trabaja en tres niveles:

1. Espiritual
• Limpieza de energías negativas
• Protección
• Conexión con lo divino

2. Emocional
• Paz interior
• Liberación de cargas
• Sanación de heridas

3. Práctico
• Apertura de caminos
• Oportunidades inesperadas
• Soluciones que aparecen

¿Para qué sirve?
✅ Problemas de salud
✅ Dificultades financieras
✅ Conflictos familiares
✅ Bloqueos emocionales
✅ Falta de claridad
✅ Protección personal

¿Para qué NO sirve?
❌ Manipular a otras personas
❌ Hacer daño a alguien
❌ Obtener cosas por medios oscuros`
    },
    {
        question: "¿Qué hago después de terminar las 7 noches?",
        answer: `El ritual termina, pero el proceso continúa.

Después de las 7 noches:

1. Observa (primeras 2 semanas)
• Presta atención a señales
• Cambios sutiles en tu vida
• Oportunidades que aparecen
• Sueños significativos

2. Mantén la conexión
• Usa las oraciones de la Biblioteca Sagrada
• Reza el Rosario del Código semanalmente
• No abandones la práctica por completo

3. Agradece
• Cuando veas resultados, agradece
• La gratitud multiplica las bendiciones

4. Repite si es necesario
• Puedes volver a hacer el ritual
• Especialmente en momentos difíciles
• O como mantenimiento (cada 40 días)`
    }
];

// ==================== APP STATE ====================

let currentScreen = 'login';
let currentNight = null;
let currentOracion = null;
let currentRosarioStep = 0;

// ==================== ROUTER ====================

function navigate(screen, data = null) {
    currentScreen = screen;
    if (data !== null) {
        if (screen === 'night') currentNight = data;
        if (screen === 'oracion') currentOracion = data;
        if (screen === 'rosario-step') currentRosarioStep = data;
    }
    render();
    window.scrollTo(0, 0);
}

// ==================== RENDER FUNCTIONS ====================

function render() {
    const app = document.getElementById('app');

    switch (currentScreen) {
        case 'login':
            app.innerHTML = renderLogin();
            attachLoginEvents();
            break;
        case 'verification':
            app.innerHTML = renderVerification();
            startVerification();
            break;
        case 'home':
            app.innerHTML = renderHome();
            attachHomeEvents();
            break;
        case 'selection':
            app.innerHTML = renderSelection();
            attachSelectionEvents();
            break;
        case 'night':
            app.innerHTML = renderNight(currentNight);
            attachNightEvents();
            break;
        case 'biblioteca':
            app.innerHTML = renderBiblioteca();
            attachBibliotecaEvents();
            break;
        case 'oracion':
            app.innerHTML = renderOracion(currentOracion);
            attachOracionEvents();
            break;
        case 'rosario':
            app.innerHTML = renderRosario();
            attachRosarioEvents();
            break;
        case 'rosario-step':
            app.innerHTML = renderRosarioStep(currentRosarioStep);
            attachRosarioStepEvents();
            break;
        case 'faq':
            app.innerHTML = renderFAQ();
            attachFAQEvents();
            break;
    }
}

// ==================== LOGIN SCREEN ====================

function renderLogin() {
    return `
        <div class="screen screen-center fade-in">
            <div class="login-container">
                <p class="login-product-title text-gold text-uppercase" style="font-size: 12px; letter-spacing: 4px; margin-bottom: 20px;">Guía de las 7 Noches</p>
                <div class="login-icon">✝️</div>
                <h1 class="login-title title-serif text-gold">Acceso Exclusivo</h1>
                <p class="login-subtitle text-secondary">Solo para quienes adquirieron El Código del Señor</p>
                
                <form class="login-form" id="loginForm">
                    <input type="text" class="input" id="emailInput" placeholder="Tu correo electrónico" autocomplete="off">
                    <button type="submit" class="btn btn-full">Acceder</button>
                </form>
                
                <p class="login-footer text-muted">Este acceso es privado y reservado.</p>
            </div>
        </div>
    `;
}

function attachLoginEvents() {
    const form = document.getElementById('loginForm');
    const input = document.getElementById('emailInput');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = input.value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(email)) {
            navigate('verification');
        } else {
            input.style.borderColor = '#ff4444';
            input.placeholder = 'Ingresa un correo válido';
            setTimeout(() => {
                input.style.borderColor = '';
                input.placeholder = 'Tu correo electrónico';
            }, 2000);
        }
    });
}

// ==================== VERIFICATION SCREEN ====================

function renderVerification() {
    return `
        <div class="screen screen-center fade-in">
            <div class="verification-container">
                <div class="spinner"></div>
                <p class="verification-text" id="verificationText">Verificando tu compra…</p>
            </div>
        </div>
    `;
}

function startVerification() {
    const messages = [
        "Verificando tu compra…",
        "Validando acceso…",
        "Preparando tu guía ritual…"
    ];

    const textEl = document.getElementById('verificationText');
    let index = 0;

    function showNextMessage() {
        if (index < messages.length) {
            textEl.style.animation = 'none';
            textEl.offsetHeight;
            textEl.textContent = messages[index];
            textEl.style.animation = 'fadeInOut 1.5s ease-in-out';
            index++;

            if (index < messages.length) {
                setTimeout(showNextMessage, 1500);
            }
        }
    }

    showNextMessage();

    setTimeout(() => {
        navigate('home');
    }, 4000);
}

// ==================== HOME SCREEN ====================

function renderHome() {
    return `
        <div class="screen screen-center fade-in">
            <div class="home-container">
                <div class="home-icon">🌙</div>
                <h1 class="home-title title-serif">Guía Interactiva de las 7 Noches</h1>
                <p class="home-subtitle text-gold text-italic">Un ritual guiado. Sin registros. Sin seguimiento.</p>
                
                <div class="home-description text-secondary">
                    <p>Cada noche tiene un propósito.</p>
                    <p>No avances con prisa.</p>
                    <p>El ritual no es una carrera.</p>
                    <p>Es un proceso.</p>
                </div>
                
                <button class="btn" id="startBtn">🌙 Comenzar el Ritual</button>
                
                <div class="home-divider"></div>
                
                <div class="secciones-extras">
                    <div class="seccion-card" id="btnBiblioteca">
                        <span class="seccion-icon">📚</span>
                        <div class="seccion-info">
                            <span class="seccion-titulo">Biblioteca Sagrada</span>
                            <span class="seccion-subtitulo">Oraciones para cada momento</span>
                        </div>
                        <span class="seccion-arrow">→</span>
                    </div>
                    
                    <div class="seccion-card" id="btnRosario">
                        <span class="seccion-icon">📿</span>
                        <div class="seccion-info">
                            <span class="seccion-titulo">El Rosario del Código</span>
                            <span class="seccion-subtitulo">Práctica devocional completa</span>
                        </div>
                        <span class="seccion-arrow">→</span>
                    </div>
                    
                    <div class="seccion-card" id="btnFAQ">
                        <span class="seccion-icon">❓</span>
                        <div class="seccion-info">
                            <span class="seccion-titulo">Preguntas Frecuentes</span>
                            <span class="seccion-subtitulo">Dudas sobre el ritual</span>
                        </div>
                        <span class="seccion-arrow">→</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function attachHomeEvents() {
    document.getElementById('startBtn').addEventListener('click', () => navigate('selection'));
    document.getElementById('btnBiblioteca').addEventListener('click', () => navigate('biblioteca'));
    document.getElementById('btnRosario').addEventListener('click', () => navigate('rosario'));
    document.getElementById('btnFAQ').addEventListener('click', () => navigate('faq'));
}

// ==================== SELECTION SCREEN ====================

function renderSelection() {
    const nightItems = nightsData.map(night => `
        <div class="night-item" data-night="${night.id}">
            <span class="night-number">${night.id}</span>
            <div class="night-info">
                <span class="night-title">Noche ${night.id}</span>
                <span class="night-theme">${night.theme}</span>
            </div>
            <span class="night-arrow">→</span>
        </div>
    `).join('');

    return `
        <div class="screen fade-in">
            <div class="selection-header">
                <button class="back-button" id="backToHome">← Volver</button>
            </div>
            
            <div class="selection-title-container text-center">
                <h1 class="selection-title title-serif">Las 7 Noches</h1>
            </div>
            <p class="selection-subtitle text-muted text-center">Elige conscientemente. No hay prisa.</p>
            
            <div class="nights-list">
                ${nightItems}
            </div>
        </div>
    `;
}

function attachSelectionEvents() {
    document.getElementById('backToHome').addEventListener('click', () => navigate('home'));

    document.querySelectorAll('.night-item').forEach(item => {
        item.addEventListener('click', () => {
            const nightId = parseInt(item.dataset.night);
            navigate('night', nightId);
        });
    });
}

// ==================== NIGHT PAGE ====================

function renderNight(nightId) {
    const night = nightsData.find(n => n.id === nightId);

    if (!night) {
        navigate('selection');
        return '';
    }

    const explanationHtml = night.explanation.split('\n').map(line =>
        line.trim() ? `<p>${line}</p>` : ''
    ).join('');

    const preparationHtml = night.preparation.map(item =>
        `<li>${item}</li>`
    ).join('');

    const prayerHtml = night.prayer.split('\n').map(line =>
        line.trim() ? `<p>${line}</p>` : '<p>&nbsp;</p>'
    ).join('');

    const finalHtml = night.finalInstruction.split('\n').map(line =>
        line.trim() ? `<p>${line}</p>` : ''
    ).join('');

    return `
        <div class="screen fade-in">
            <div class="night-header">
                <button class="back-button" id="backToSelection">← Volver</button>
            </div>
            
            <p class="night-label text-gold text-uppercase">Noche ${night.id}</p>
            <h1 class="night-page-title title-serif">${night.theme}</h1>
            
            <div class="night-explanation text-secondary">
                ${explanationHtml}
            </div>
            
            <div class="night-preparation">
                <p class="section-divider text-gold text-uppercase text-center">─── Preparación ───</p>
                <ul class="preparation-list">
                    ${preparationHtml}
                </ul>
            </div>
            
            <div class="prayer-section">
                <p class="section-divider text-gold text-uppercase text-center">─── La Oración ───</p>
                <div class="prayer-container">
                    <div class="prayer-text">
                        ${prayerHtml}
                    </div>
                </div>
            </div>
            
            <div class="night-final">
                <p class="section-divider text-gold text-uppercase text-center">─── Después de la oración ───</p>
                <div class="final-text text-muted">
                    ${finalHtml}
                </div>
            </div>
            
            <div class="night-footer">
                <p class="night-footer-divider text-muted">───</p>
                <div class="night-footer-text text-muted text-italic">
                    <p>Este aplicativo no guarda tu progreso.</p>
                    <p>El ritual no ocurre aquí.</p>
                    <p>Ocurre en ti.</p>
                </div>
            </div>
        </div>
    `;
}

function attachNightEvents() {
    document.getElementById('backToSelection').addEventListener('click', () => navigate('selection'));
}

// ==================== BIBLIOTECA SAGRADA ====================

function renderBiblioteca() {
    const oracionItems = bibliotecaData.map(oracion => `
        <div class="oracion-card" data-oracion="${oracion.id}">
            <span class="oracion-icon">${oracion.icon}</span>
            <div class="oracion-info">
                <span class="oracion-titulo">${oracion.title}</span>
                <span class="oracion-desc">${oracion.desc}</span>
            </div>
            <span class="oracion-arrow">→</span>
        </div>
    `).join('');

    return `
        <div class="screen fade-in">
            <div class="selection-header">
                <button class="back-button" id="backToHome">← Volver</button>
            </div>
            
            <div class="selection-title-container text-center">
                <h1 class="selection-title title-serif">Biblioteca Sagrada</h1>
            </div>
            <p class="selection-subtitle text-muted text-center">Oraciones para cada momento de tu vida</p>
            
            <div class="oraciones-list">
                ${oracionItems}
            </div>
        </div>
    `;
}

function attachBibliotecaEvents() {
    document.getElementById('backToHome').addEventListener('click', () => navigate('home'));

    document.querySelectorAll('.oracion-card').forEach(item => {
        item.addEventListener('click', () => {
            const oracionId = parseInt(item.dataset.oracion);
            navigate('oracion', oracionId);
        });
    });
}

// ==================== ORACION PAGE ====================

function renderOracion(oracionId) {
    const oracion = bibliotecaData.find(o => o.id === oracionId);

    if (!oracion) {
        navigate('biblioteca');
        return '';
    }

    const instructionHtml = oracion.instruction.split('\n').map(line =>
        line.trim() ? `<p>${line}</p>` : ''
    ).join('');

    const prayerHtml = oracion.prayer.split('\n').map(line =>
        line.trim() ? `<p>${line}</p>` : '<p>&nbsp;</p>'
    ).join('');

    const afterHtml = oracion.after.split('\n').map(line =>
        line.trim() ? `<p>${line}</p>` : ''
    ).join('');

    return `
        <div class="screen fade-in">
            <div class="night-header">
                <button class="back-button" id="backToBiblioteca">← Volver</button>
            </div>
            
            <div class="oracion-page-icon">${oracion.icon}</div>
            
            <h1 class="night-page-title title-serif text-center">${oracion.title}</h1>
            
            <div class="oracion-instruccion">
                ${instructionHtml}
            </div>
            
            <p class="section-divider text-gold text-uppercase text-center">─── La Oración ───</p>
            
            <div class="oracion-container">
                <div class="oracion-texto">
                    ${prayerHtml}
                </div>
            </div>
            
            <p class="section-divider text-gold text-uppercase text-center">─── Después de rezar ───</p>
            
            <div class="oracion-despues">
                ${afterHtml}
            </div>
        </div>
    `;
}

function attachOracionEvents() {
    document.getElementById('backToBiblioteca').addEventListener('click', () => navigate('biblioteca'));
}

// ==================== ROSARIO ====================

function renderRosario() {
    return `
        <div class="screen fade-in">
            <div class="selection-header">
                <button class="back-button" id="backToHome">← Volver</button>
            </div>
            
            <div class="selection-title-container text-center">
                <h1 class="selection-title title-serif">El Rosario del Código</h1>
            </div>
            <p class="selection-subtitle text-muted text-center">Una práctica devocional completa</p>
            
            <div class="rosario-intro">
                <p>Este rosario es diferente.</p>
                <p>No necesitas cuentas físicas.</p>
                <p>No necesitas experiencia previa.</p>
                <p>Solo necesitas fe y disposición.</p>
            </div>
            
            <div class="rosario-info">
                <p>⏱️ Duración aproximada: 15-20 minutos</p>
                <p>🌅 Mejor momento: Al amanecer o antes de dormir</p>
            </div>
            
            <p class="section-divider text-gold text-uppercase text-center">─── Cómo Rezar Este Rosario ───</p>
            
            <div class="rosario-intro" style="margin-top: 20px;">
                <p>1. Busca un lugar tranquilo</p>
                <p>2. Siéntate cómodamente</p>
                <p>3. Cierra los ojos</p>
                <p>4. Respira profundo 3 veces</p>
                <p>5. Sigue la secuencia de oraciones</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <button class="btn" id="btnComenzarRosario">Comenzar el Rosario</button>
            </div>
        </div>
    `;
}

function attachRosarioEvents() {
    document.getElementById('backToHome').addEventListener('click', () => navigate('home'));
    document.getElementById('btnComenzarRosario').addEventListener('click', () => navigate('rosario-step', 0));
}

// ==================== ROSARIO STEP ====================

function renderRosarioStep(stepIndex) {
    const step = rosarioData[stepIndex];
    const totalSteps = rosarioData.length;
    const isFirst = stepIndex === 0;
    const isLast = stepIndex === totalSteps - 1;

    const instructionHtml = step.instruction.split('\n').map(line =>
        line.trim() ? `<p>${line}</p>` : ''
    ).join('');

    let prayerHtml = '';
    if (step.prayer) {
        prayerHtml = `
            <div class="rosario-oracion">
                ${step.prayer.split('\n').map(line =>
            line.trim() ? `<p>${line}</p>` : '<p>&nbsp;</p>'
        ).join('')}
            </div>
        `;
    }

    return `
        <div class="screen fade-in">
            <div class="rosario-paso">
                <p class="rosario-numero">Paso ${stepIndex + 1} de ${totalSteps}</p>
                <h1 class="rosario-titulo">${step.title}</h1>
                
                <div class="rosario-texto">
                    ${instructionHtml}
                </div>
                
                ${prayerHtml}
                
                <div class="rosario-nav">
                    ${isFirst ? '<div></div>' : '<button class="btn-anterior" id="btnAnterior">← Anterior</button>'}
                    <button class="btn-siguiente" id="btnSiguiente">${isLast ? 'Finalizar Rosario' : 'Siguiente →'}</button>
                </div>
            </div>
        </div>
    `;
}

function attachRosarioStepEvents() {
    const btnAnterior = document.getElementById('btnAnterior');
    const btnSiguiente = document.getElementById('btnSiguiente');
    const totalSteps = rosarioData.length;

    if (btnAnterior) {
        btnAnterior.addEventListener('click', () => {
            navigate('rosario-step', currentRosarioStep - 1);
        });
    }

    btnSiguiente.addEventListener('click', () => {
        if (currentRosarioStep < totalSteps - 1) {
            navigate('rosario-step', currentRosarioStep + 1);
        } else {
            navigate('home');
        }
    });
}

// ==================== FAQ ====================

function renderFAQ() {
    const faqItems = faqData.map((item, index) => `
        <div class="faq-item" data-faq="${index}">
            <div class="faq-pregunta">
                <span>${item.question}</span>
                <span class="faq-icon">+</span>
            </div>
            <div class="faq-respuesta">
                <div class="faq-respuesta-inner">
                    ${item.answer.split('\n').map(line =>
        line.trim() ? `<p>${line}</p>` : ''
    ).join('')}
                </div>
            </div>
        </div>
    `).join('');

    return `
        <div class="screen fade-in">
            <div class="selection-header">
                <button class="back-button" id="backToHome">← Volver</button>
            </div>
            
            <div class="selection-title-container text-center">
                <h1 class="selection-title title-serif">Preguntas Frecuentes</h1>
            </div>
            <p class="selection-subtitle text-muted text-center">Todo lo que necesitas saber sobre el ritual</p>
            
            <div class="faq-list">
                ${faqItems}
            </div>
        </div>
    `;
}

function attachFAQEvents() {
    document.getElementById('backToHome').addEventListener('click', () => navigate('home'));

    document.querySelectorAll('.faq-pregunta').forEach(pregunta => {
        pregunta.addEventListener('click', () => {
            const item = pregunta.parentElement;
            item.classList.toggle('active');
        });
    });
}

// ==================== INITIALIZE ====================

document.addEventListener('DOMContentLoaded', () => {
    render();
});
