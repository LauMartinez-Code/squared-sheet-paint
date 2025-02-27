# squared-sheet-paint
Desarrolle una pequeña red en pantalla completa, que pueda ser utilizada para pintar imágenes simples.  
La red consiste en pequeñas celdas cuadradas. Debe haber 100 celdas horizontales.  
El número de filas no debe exceder los límites de la ventana. Es decir, la pantalla 
debe estar llena de celdas, pero no deben existir barras de desplazamiento, ya que 
todas las celdas caben en la ventana.

Cuando una celda sea clickeada, la misma debe “activarse” cambiando de color. 
Al volver a clickear la celda, la misma debe desactivarse y removerse el color.

Cuando una celdaseaclickeada con el botón derecho del mouse, debería aparecer 
una ventana emergente donde usted pueda elegir un color. Se requiere un 
mínimo de 5 opciones de colores. El color elegido se convierte en el color por defecto para cada celda activada al dibujar.
- El selector de color aparece (fadeIn) cuando usted presione el botón 
derecho del mouse en la posición que se encuentre el cursor.

- Elmenúcontextual específico del navegador no apareceal hacer clic con el botón derecho del mouse.

- El selector decolor desaparece (fadeOut) cuando el cursor se desplace fuera 
del mismo, o cuando un color sea seleccionado.

Para facilitar el dibujo de imágenes, debe ser posible hacerlo arrastrando el cursor 
del mouse. Cuando una celda sea clickeada, se activa la dicha función. Todas las 
celdas por las que pase el cursor deben seleccionarse.  
Cuando se suelta el mouse, se desactiva la función de arrastre, y todas las celdas por las que pase el cursor ya 
no se verán modificadas. Tener en cuenta que, de todas formas, debe continuar 
siendo posible clickear cada celda individualmente.

El proyecto se puede visualizar y probar desde el siguiente link: [squared-sheet-paint](https://squared-sheet-paint.netlify.app/) (corresponde al último commit de la rama `master`).

## Ejecutar localmente
Es requerido tener instalado **Node.js**  
- En la carpeta del proyecto abrir una terminal y ejecutar `npm install` y luego `npm run dev`.