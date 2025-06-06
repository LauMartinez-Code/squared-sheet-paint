# squared-sheet-paint
## Consigna
Desarrolle una pequeña red en pantalla completa, que pueda ser utilizada para pintar imágenes simples.  
La red consiste en pequeñas celdas cuadradas. Debe haber 100 celdas horizontales.  
El número de filas no debe exceder los límites de la ventana. Es decir, la pantalla 
debe estar llena de celdas, pero no deben existir barras de desplazamiento, ya que 
todas las celdas caben en la ventana.

Cuando una celda sea clickeada, la misma debe “activarse” cambiando de color. 
Al volver a clickear la celda, la misma debe desactivarse y removerse el color.

![example1](https://github.com/user-attachments/assets/75d40f83-6b1b-4b4d-88f9-7eb50b328a21)


Cuando una celda sea clickeada con el botón derecho del mouse, debería aparecer 
una ventana emergente donde se pueda elegir un color. Se requiere un 
mínimo de 5 opciones de colores. El color elegido se convierte en el color por defecto para cada celda activada al dibujar.
- El selector de color aparece (fade-in) cuando se presione el botón derecho del mouse en la posición que se encuentre el cursor.
- El menú contextual del navegador no aparece al hacer clic con el botón derecho del mouse.
- El selector de color desaparece (fade-out) cuando el cursor se desplace fuera del mismo, o cuando un color sea seleccionado.

![example2](https://github.com/user-attachments/assets/5fc34375-ad18-459a-a05f-f9b3ca08d7c2)


Para facilitar el dibujo de imágenes, debe ser posible hacerlo arrastrando el cursor del mouse. Cuando una celda sea clickeada, se activa la dicha función. Todas las 
celdas por las que pase el cursor deben seleccionarse.  
Cuando se suelta el mouse, se desactiva la función de arrastre, y todas las celdas por las que pase el cursor ya 
no se verán modificadas. Tener en cuenta que, de todas formas, debe continuar siendo posible clickear cada celda individualmente.

### Extra
Se agregó una opción desde la cual el usuario puede seleccionar un color no listado en las opciones predefinidas, mediante una paleta de colores o ingresando el número RGB o hexadecimal del mismo.

![image1](https://github.com/user-attachments/assets/195bf008-860d-4444-b138-0bc2884da1cf)

> [!NOTE]
> El proyecto se puede visualizar y probar desde el siguiente link: [squared-sheet-paint](https://squared-sheet-paint.netlify.app/) (corresponde al último commit de la rama `master`).

![image2](https://github.com/user-attachments/assets/f8cf6000-723c-4815-a6dc-00c2c28d970e)


## Ejecutar localmente
Es requerido tener instalado **Node.js**  
- En la carpeta del proyecto abrir una terminal y ejecutar `npm install` y luego `npm run dev`.
