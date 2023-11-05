// components/Background.js

import React, { useEffect, useRef } from 'react';


function Background({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const ingredientsList = [
      "/assets/img/0.png",
      "/assets/img/1.png",
      "/assets/img/2.png",
      "/assets/img/3.png",
      // ...otros ingredientes...
    ];

    let elementCount = 0;
    let xPositions = [];  // Array para rastrear las posiciones x de los elementos

    function createIngredient(src) {
      const ingredient = document.createElement('div');
      ingredient.classList.add('ingredient');
      ingredient.style.backgroundImage = `url('${src}')`;
      return ingredient;
    }

    function startFalling(ingredient) {
      if (elementCount >= 15) return;  // No crear más elementos si ya hay 15 en la pantalla

      let startX;
      let isOverlapping;
      do {
        isOverlapping = false;
        startX = Math.random() * (window.innerWidth - 100);  // Posición inicial aleatoria en el eje X
        // Verificar superposición con otros elementos
        for (let xPos of xPositions) {
          if (Math.abs(startX - xPos) < 100) {  // Asumiendo que cada elemento tiene un ancho de 100px
            isOverlapping = true;
            break;
          }
        }
      } while (isOverlapping);

      xPositions.push(startX);  // Agregar la posición x del nuevo elemento al array

      ingredient.style.left = startX + 'px';  // Asignar la posición inicial en el eje X
      container.appendChild(ingredient);  // Agregar el ingrediente al DOM solo si no hay superposición

      elementCount++;  // Incrementar el contador cuando se crea un nuevo elemento

      let posY = -3300;  // Posición inicial fuera de la vista
      const speed = Math.random() + 0.5;  // Velocidad de caída aleatoria entre 0.5 y 1.5

      function fall() {
        posY += speed;  // Actualiza la posición en cada frame
        ingredient.style.transform = `translateY(${posY}px)`;
        if (posY > window.innerHeight) {  // Si el ingrediente está fuera de la vista por abajo
          container.removeChild(ingredient);  // Eliminar el ingrediente del DOM
          elementCount--;  // Decrementar el contador cuando un elemento sale de la pantalla
          xPositions = xPositions.filter(xPos => xPos !== startX);  // Eliminar la posición x del array
        } else {
          requestAnimationFrame(fall);  // Continuar la animación
        }
      }

      fall();  // Iniciar la animación
    }

    const intervalId = setInterval(() => {
      const src = ingredientsList[Math.floor(Math.random() * ingredientsList.length)];  // Seleccionar un ingrediente aleatorio
      const ingredient = createIngredient(src);
      startFalling(ingredient);
    }, 2000);

    return () => clearInterval(intervalId);  // Limpiar el intervalo cuando el componente se desmonte

  }, []);

  return (
    <div className="container" ref={containerRef}>
      {children}
    </div>
  );
}

export default Background;
