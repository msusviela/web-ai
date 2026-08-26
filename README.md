# Hello Web

## Objetivos

- Repasar conceptos básicos de desarrollo web. 
- Introducir conceptos básicos de programación con IA.

> Importante: Para realizar este práctico es necesario que tengas instalado
> un IDE (Por ejemplo Visual Studio Code), git y Node.js.

## Parte 1: Desarrollo Web

### 1.1 Set up inicial

1. Clona el repositorio desde la página de GitHub.
Pista: Puedes usar los comandos desde una terminal:
```bash
git clone https://github.com/IngSoft-FIS-Ejercicios/web-ai.git
cd hello-ia
code .
```

2. Inicializa la aplicación:
```bash
npm install
npm run dev
```

### 1.2 Ejecutar el proyecto

3. Ejecuta la aplicación desde tu navegador, introduce datos y navega entre las diferentes secciones.
4. Activa las DevTools (`Ctrl + Shift + I` (o `F12` en Windows y Linux; `Cmd + Option + I` en Mac).).
5. Utilizando las DevTools, selecciona la opción para visualizar la web como se haría desde un dispositivo móvil.

### 1.3 Conociendo el proyecto

6. Antes de realizar cambios, responde las siguientes preguntas:
* ¿Qué lenguajes de programación se utilizan? ¿Cuál es la finalidad de uso de cada lenguaje?
* ¿Cuál es la estructura de archivos y directorios de este proyecto?
* ¿Cómo el sistema persiste la información? ¿Dónde se almacenan las canciones? 
* ¿Qué campos son obligatorios? ¿Cómo se define y se muestra el mensaje de error? 

### 1.4 Modificando el proyecto

7. Modifica el método toString de la clase Song para que, en el caso de no tener artista, que no se mencione ese dato (Ejemplo de salida de canción sin artista: `Canción: Bohemian Rhapsody`).

8. Agrega el campo Año al formulario únicamente desde la interfaz de usuario. No es necesario que sea un campo obligatorio.

### 1.5 Debuggeando con breakpoints en DevTools.

9. Utilizando DevTools, agrega un breakpoint en el método `set titulo` de la clase `Song`. Deberás agregarlo en la línea donde se encuentra el siguiente fragmento de código: `this._titulo = trimmed;`. Ejecuta la aplicación desde el navegador y agrega una nueva canción. ¿Qué valor tiene la variable `trimmed` al llegar al breakpoint? ¿Para qué puede servir esta funcionalidad en métodos más complejos?.

### Parte 2: Intro a IA.

10. Verifica que puedas utilizar GitHub Copilot en modo chat en VSCode. En caso de que no, sigue lo siguientes pasos: [Configuración Copilot](https://code.visualstudio.com/docs/setup/copilot)
11. Utiliza GitHub Copilot en modo agente para generar una funcionalidad que permita marcar una canción de la lista como favorita. Vuelve a ejecutar la aplicación una vez terminado el trabajo de la IA. Evalúa los resultados (tanto el comportamiento de la funcionalidad como el código generado).

## Referencias y recursos útiles:
- [DevTools](https://developer.chrome.com/docs/devtools/overview?hl=es-419)
- [Breakpoints - DevTools](https://developer.chrome.com/docs/devtools/overview?hl=es-419#sources)
- [Introducción a Copilot](https://docs.github.com/en/copilot/get-started/quickstart)
