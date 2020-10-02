---
title: "Condicionales en la programación o codificación con Javascript"
subtitle: "Uso de condiciones para controlar el flujo de su código y hacer que la computadora obedezca"
date: "2017-09-24"
status: "unassigned"
author: ["alesanchezr"]
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
tags: ["conditionals", "logical operations", "if else", "conditions"]
---

Dominar el uso de las condiciones es una de las 5 habilidades fundamentales para construir algoritmos:

1. Variables.
2. `Condicionales`.
3. Arrays(Arreglos).
4. Loops(Bucles).
5. Funciones.

Las condiciones son la única forma en que los desarrolladores tienen para decirle a la computadora cómo tomar decisiones en tiempo real, muy similar a cómo funciona nuestro cerebro.

Digamos que estamos construyendo un programa para ayudarnos a elegir qué color usar para vestirnos y odiamos el color azul, podemos decirle a la computadora que evite el azul usando una condición como esta:
  
  
`If` ***color*** in not **blue**, then... do something.  
`Else`... do nothing or exit.
  
![Condicionales](https://ucarecdn.com/e73b673e-d744-45a7-a1ed-61a1dae49560/)

Y así es como escribiríamos esto en Javascript:

```js
if(color != 'blue'){
    //Cualquier código aquí se ejecutará cuando el color sea diferente al azul.
}
else{
    //solo ejecutará este código si el color es azul.
}
```

## Todo depende de la pregunta: ¿Qué preguntar?

El ejemplo anterior era una condición simple, pero en la vida real elegir qué vestir implica una combinación de varias condiciones para tomar la decisión final, por ejemplo: veamos este algoritmo que indica si tienes gripe
![Hit by a flu or have a cold](https://ucarecdn.com/03ed6b76-0ee0-4b04-bd45-0fb58ae6f800/)

Si quieres representar este algoritmo en Javascript, se vería más o menos así:

```js
let feelsLikeHitByTrain = true;
let youWereHitByTrain = false;

if(feelsLikeHitByTrain == true){
  if(youWasHitByTrain == true){
    console.log("Tú no tienes gripe");
  }
  else{
    console.log("Tú tienes gripe");
  }
}
else{
  console.log("Tú no tienes gripe");
}
```

Básicamente, este algoritmo tiene dos variables a considerar: `feelsLikeHitByTrain` y` youWereHitByTrain`.
Nuestro trabajo como desarrolladores es sentarnos e intentar crear una estrategia y un algoritmo que resuelva un problema.

## Operadores `AND` y `OR`

Otra forma de escribir el algoritmo es combinar preguntas en la misma condición utilizando los operadores `AND` (y) y` OR`(o). En Javascript `AND`se representa con  `&& ` y  `OR` se representa con  `||` :

```js
if(feelsLikeHitByTrain == false || youWereHitByTrain == true){
  console.log("Tú no tienes gripe");
}
else if(feelsLikeHitByTrain == true && youWereHitByTrain == false){
  console.log("Tú tienes gripe")
}
else{
  console.log("No tengo idea");
}
```

Como puedes ver aquí, estamos usando `else if` juntos por primera vez, para codificar más rápidamente. Otro truco que puedes usar para codificar más rápido:

| Original | Equivalente |
| --- | --- |
| en lugar de `if(feelsLikeHitByTrain == true)` | escribes `if(feelsLikeHitByTrain)`  |
| en lugar de `if(feelsLikeHitByTrain == false)` |escribes `if(!feelsLikeHitByTrain)` |

## Operadores mayores que o menores que `>` y `<`

En el caso particular de que esté comparando números, también puede hacerlo si uno de los números comparados es mayor o menor que el otro:

```js
if (goingOut){
  if (canIGetBurger){
    if (placeBotleWine){
      if (coolMix){
          //do something
      }
    }else{
      if (blazers > 3){
      }else{
          //do something
      }
    }
  }else if (shePants){
      //do something
  }else{
      //do something
  }
}else{
  if (nakedSheDoor){
      //do something
  }else if (blazers > 3){
      //do something
  }else{
      //do something
  }
}
```

## Operador Ternario (condiciones en linea)

Otro gran truco para una codificación más rápida es usar ternarios que básicamente nos permiten codificar todo en una sola línea:
```js
const flu = (feelsLikeHitByTrain && !youWereHitByTrain) ? true : false;
```
En este ejemplo, la variable `flu` solo será verdadera si` feelsLikeHitByTrain == true` y `youWereHitByTrain == false` son verdaderas. Si una de esas preguntas no es cierta, entonces flu será falso.

Los ternarios se usan MUCHO en estos días porque te ahorran mucho tiempo.

## Renderizado Condicional

Otro gran uso de las condiciones es generar HTML en base a ciertas condiciones, por ejemplo, digamos que tenemos una alerta de bootstrap que estamos a punto de renderizar en el sitio web:

```js
let alertHTMLCode = "<div>Cuidado! Tu no puedes manejar</div>";
```

Si queremos que esta alerta se muestre solo si el usuario es menor de 16 años, podríamos hacer algo como:

```js
let age = 14;
let alertHTMLCode = (age < 16) ? "<div>Cuidado! Tu no puedes manejar</div>" : "";
```

Ahora nuestra variable `alertHTMLCode` estará vacía si la edad del usuario es menor de 16 años, si es mayor, contendrá todo el HTML.

<script async src="//jsfiddle.net/BreatheCode/bycgsnqt/7/embed/js,html,result/"></script>

