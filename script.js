// Datos personalizados para cada nivel
const levels = [
    {
        code: "Guadalajara", // Código correcto para el nivel 1
        fileContent: `
Nombre completo: Alejandro Garcia Martinez
Fecha de nacimiento: 14 de marzo de 1998
Descripción familiar: 
    - Alejandro es el hijo mayor de dos hermanos.
    - Sus padres, Juan García y Elena Martínez, son originarios de Guadalajara.
    - Tiene un hermano menor llamado Rodrigo, que actualmente está en la universidad estudiando ingeniería.

Ocupación: 
    - Alejandro trabaja como desarrollador de software en TechNova Solutions, una empresa de tecnología en Ciudad de México.

Educación:
    - Universidad Autónoma de México, graduado con honores en Ingeniería en Sistemas.
        `
    },
    {
        code: "computador", // Código correcto para el nivel 2
        fileContent: `
El primer lenguaje de programación de alto nivel fue Fortran-.-. , desarrollado en la década de 1950 por IBM, liderado por John Backus, 
Su nombre--- proviene de FORmula TRANslation, y fue diseñado principalmente para cálculos científicos-- y de ingeniería,
Antes de Fortran, los programadores.--. usaban lenguaje de ensamblador o directamente código..- máquina, que era muy complicado y específico para cada tipo de hardware, 
Fortran- simplificó esto al permitir a los científicos escribir.- fórmulas matemáticas más fácilmente, haciéndolo más accesible para resolver problemas-.. complejos,
Fortran revolucionó la informática--- , sentando las bases para muchos lenguajes modernos y siendo un pionero en la programación.-. de alto nivel.`
    },
    {
        code: "iloveu", // Código correcto para el nivel 3
        fileContent: `
Amarte es como descubr_r un mundo nuevo cada día. 
En tus ojos veo el ref_ejo de todo lo herm_so que existe en la _ida, y en tu risa, encu_ntro la melodía que me llena de paz.
Eres el refugio al que siempre quiero volver, el sueño del que n_nca quiero despertar, y el amor que hace que todo en mi vida tenga sentido.
        `
    },
    {
        code: "java", // Código correcto para el nivel 4
        fileContent: `
Java ジ fue creado por James Gosling y su equipo en Sun Microsystems a principios de los 90, inicialmente para dispositivos electrónicos. 
Con el auge de internet, el enfoque cambió hacia un lenguaje que pudiera ejecutarse en cualquier dispositivo, gracias a la Máquina Virtual de Java ャ (JVM). 
Lanzado en 1995 con el lema "escribe una vez, ejecuta en cualquier lugar", Java ワ se popularizó rápidamente, especialmente en aplicaciones web y empresariales. 
A lo largo del tiempo, ha evolucionado y sigue siendo un lenguaje clave en la programación moderna, ampliamente utilizado en diversos ámbitos, como el desarrollo web y móvil.
`
    },
    {
        code: "12345", // Código correcto para el nivel 5
        fileContent: `
コードは次のとおりです。

一万二千三百四十五
`
    },
    {
        code: "1911", // Código correcto para el nivel 6
        fileContent: `
Vincenzo Peruggia fue el hombre que robó la Mona Lisa, el famoso cuadro de Leonardo da Vinci. 
Se trataba de un trabajador de un museo, artista y ladrón italiano, que el 21 de agosto de 1911 decidió hacer desaparecer uno de los cuadros más emblemáticos del mundo. 
Ha sido descrito como el mayor robo de arte del siglo XX. Se vistió con una de las batas blancas que los empleados del museo solían usar para pasar desapercibido. 
Cuando la sala estaba vacía, descolgó el cuadro y salió del Louvre por la misma puerta por la que había entrado. Así de sencillo. 
Una vez atrapado, Peruggia fue condenado a un año y 15 días de cárcel, que luego se redujeron a siete meses y nueve días.


00110001 00111001 00110001 00110001
`
    },
    {
        code: "zumbido", // Código correcto para el nivel 7
        fileContent: `
Un dato inexplicable es el fenómeno conocido como ⠵⠥⠍⠃⠊⠙⠕ "The Hum". 
Se trata de un sonido persistente de baja frecuencia que solo algunas personas pueden escuchar, y se ha reportado en distintas partes del mundo ⠵⠥⠍⠃⠊⠙⠕ , desde zonas rurales hasta ciudades. 
Lo curioso ⠵⠥⠍⠃⠊⠙⠕ es que no tiene una fuente identificable ⠵⠥⠍⠃⠊⠙⠕ y las explicaciones científicas aún no logran determinar su origen. 
Este fenómeno ha desconcertado tanto a la comunidad científica como a los afectados, quienes describen el sonido como un zumbido molesto que, en algunos casos ⠵⠥⠍⠃⠊⠙⠕ , llega a interferir con la vida diaria.
`
    }
];



// Intentos por nivel
let attempts = [0, 0, 0, 0, 0, 0, 0];

// Descargar archivo personalizado por nivel
function downloadFile(level) {
    const content = levels[level - 1].fileContent;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nivel-${level}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// Verificar el código ingresado, ignorando mayúsculas y minúsculas
function checkCode(level) {
    const input = document.getElementById(`input-${level}`).value.toLowerCase();
    const correctCode = levels[level - 1].code.toLowerCase();  // Convertir código correcto a minúsculas
    const errorElement = document.getElementById(`error-${level}`);

    if (input === correctCode) {
        errorElement.textContent = "";
        showNextPanel(level);
    } else {
        attempts[level - 1]++;
        showError(level, errorElement);
    }
}


// Mostrar el siguiente panel automáticamente si el código es correcto
function showNextPanel(level) {
    const currentPanel = document.getElementById(`panel-${level}`);
    const nextPanel = document.getElementById(`panel-${level + 1}`);
    
    if (nextPanel) {
        currentPanel.style.display = "none";
        nextPanel.style.display = "block";
    } else {
        alert("¡Has completado todos los niveles!");
    }
}

// Mostrar errores personalizados y dar pista después de 10 intentos
function showError(level, errorElement) {
    const errorMessages = [
        "Código incorrecto, inténtalo de nuevo.",
        "Ese no es el código, prueba otra vez.",
        "Ups, parece que no es correcto.",
        "Vuelve a intentar, el código no es válido."
    ];

    if (attempts[level - 1] >= 5) {
        errorElement.textContent = "Te doy una pista: revisa las letras que usen MAYUSCULAS y los codigos no llevan espacio entre letras/palabras.";
    } else {
        const randomMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];
        errorElement.textContent = randomMessage;
    }
}
