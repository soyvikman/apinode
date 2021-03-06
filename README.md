# API Node/Express para proyecto inicial HackSpace.
Para el proyecto inicial se desarrollará una API en Node usando Express, que tiene la función de emitir comentarios acerca de las condiciones de salubridad en playas, si cumplen los protocolos COVID19, están en buenas condiciones o son accesibles, todo ello a través de los siguientes parámetros:

- **Nombre:** Identificador de la playa a calificar.
- **Bioseguridad:** Si están instauradas medidas de bioseguridad en la playa antes mencionada.
- **Aforo:** Se puede calificar como Alto, Medio o Bajo, de acuerdo a la cantidad de gente presente.
- **Condiciones:** Evaluación básica general de las condiciones de la playa, pudiendo ser Buenas, Regulares o Malas.
- **Transporte:** Si existe transporte que permita el traslado a la playa.


## Estructura JSON
Un ejemplo de la estructura JSON sería el siguiente:

```bash
 {
     "nombre": "Mollendo",
     "condiciones": "Buenas",
     "transporte": true,
     "aforo":"Bajito",
     "bioseguridad":false
} 
```