 let randomNumber = Math.floor(Math.random() * 50) + 1;
    let No_usuario;
    let adivinado = false;

    while (!adivinado) {

        No_usuario = parseInt(prompt("Adivina el número de 1 a 50"));

        if (No_usuario === randomNumber) {
            alert("¡Muy bien!, adivinaste");
            adivinado = true;
        } 
        else if (No_usuario > randomNumber) {
            let difference = No_usuario - randomNumber;

            if (difference >= 20) {
                alert("Frío");
            } else if (difference >= 5) {
                alert("Tibio, estás cerca");
            } else {
                alert("¡CALIENTE!");
            }
        } 
        else {
            let difference = randomNumber - No_usuario;

            if (difference >= 20) {
                alert("Frío");
            } else if (difference >= 5) {
                alert(" Tibio, estás cerca");
            } else {
                alert("¡CALIENTE!");
            }
        }
    }