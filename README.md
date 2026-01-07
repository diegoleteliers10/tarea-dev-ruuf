# Tarea Dev Junior - Ruuf

## 🎯 Objetivo

El objetivo de este ejercicio es poder entender tus habilidades como programador/a, la forma en que planteas un problema, cómo los resuelves y finalmente cómo comunicas tu forma de razonar y resultados.

## 🛠️ Problema

El problema a resolver consiste en encontrar la máxima cantidad de rectángulos de dimensiones "a" y "b" (paneles solares) que caben dentro de un rectángulo de dimensiones "x" e "y" (techo).

## 🚀 Cómo Empezar

### Opción 1: Solución en TypeScript
```bash
cd typescript
npm install
npm start
```

### Opción 2: Solución en Python
```bash
cd python
python3 main.py
```

## ✅ Casos de Prueba

Tu solución debe pasar los siguientes casos de prueba:
- Paneles 1x2 y techo 2x4 ⇒ Caben 4
- Paneles 1x2 y techo 3x5 ⇒ Caben 7
- Paneles 2x2 y techo 1x10 ⇒ Caben 0

---

## 📝 Tu Solución

<video width="640" height="480" controls>
  <source src="./assets/panelesRectangulares.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<video width="640" height="480" controls>
  <source src="./assets/panelesTriangulares.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## 💰 Bonus (Opcional)

Si completaste alguno de los ejercicios bonus, explica tu solución aquí:

### Bonus Implementado
*[Indica cuál bonus implementaste: Opción 1 (techo triangular) o Opción 2 (rectángulos superpuestos)]*

El bonus elegido fue: Opción 1 (techo triangular)


### Explicación del Bonus
*[Explica cómo adaptaste tu algoritmo para resolver el bonus]*

La adaptacion se hizo en primer lugar tomando en cuenta que el triangulo es isoceles por lo que como la cantidad de paneles que caben se basan en el area, se puede calcular el area del triangulo y dividirla por el area del panel para obtener la cantidad de paneles que caben en el techo triangular. 

O sea, el area de un triangulo es (base * altura) / 2, por lo que se calcula el area del triangulo y luego se divide por el area del panel (a*b) para obtener la cantidad de paneles que caben en el techo triangular.

De esta manera tomando el primer caso de prueba con techo triangular:

- Paneles 1x2 y techo triangular 10x5 ⇒ Area del triangulo = (10\*5)/2 = 25. Area del panel = 1*2 = 2. Cantidad de paneles = 25/2 = 12,5. Se aproxima hacia abajo por lo que finalmente ⇒ Caben 12 paneles completos.


---

## 🤔 Supuestos y Decisiones

*[Si tuviste que tomar algún supuesto o decisión de diseño, explícalo aquí]*

