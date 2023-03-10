// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

// > Event Target

// ### 1. Créer un programme qui au clique d'un des éléments de la div l'élément s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur d'événement sur chaque élément !

let content = document.getElementById('content');
content.addEventListener('click', (e) =>{
    console.log(e.target);
});

// ### 2. Créer un programme qui au double click d'un élément son texte est en majuscule
content.addEventListener('dblclick', (e)=>{
    e.target.innerText = e.target.innerText.toUpperCase();
});

// ### 3. Créer un programme qui au hasard choisis parmis les propriétés suivants et l'applique aux éléments quand on clique sur le button GO : 
// - border: 1px solid gold;
// - background-color: blue;
// - background-color: red;
// - border: 5px dotted gold;

let proprietes = ["border: 1px solid gold;", "background-color: blue;", "background-color: red;", "border: 5px dotted gold;"];

let go = document.getElementsByTagName('input')[0];
go.addEventListener('click', () => {
    for(let i = 0; i < content.children.length; i++){
        content.children[i].style.cssText = proprietes[Math.floor(Math.random() * proprietes.length)];
    }
    
});
