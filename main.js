const decreaseButtons = document.querySelectorAll('.decrease');
const increaseButtons = document.querySelectorAll('.increase');
const dishInputs = document.querySelectorAll('.dish-input input');

decreaseButtons.forEach(button => {
    button.addEventListener('click', event => {
        const input = event.target.nextElementSibling;
        input.value = Math.max(parseInt(input.value) - 1, 0);
    });
});

increaseButtons.forEach(button => {
    button.addEventListener('click', event => {
        const input = event.target.previousElementSibling;
        input.value = parseInt(input.value) + 1;
    });
});

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
let date = dd + '/' + mm + '/' + yyyy;
var stock = "Lista de compras:<br><br>";

$(document).ready(function(){
    $('#submitButton').on('click', function(){
        var stock = "Lista de compras:<br><br>Data: " + date + "<br><br>";
        var update = false;
        $('.dish-input input').each(function() {
            var dishName = $(this).parent().prev().text();
            var number = $(this).val();
            if(number > 0){
                update = true;
                stock += dishName + ": " + number + "<br>";
            }
        });
        if(update){
          if (confirm("Você tem certeza que deseja enviar a lista de compras?")) {
            Email.send({
                SecureToken: "3B31C70AE847293E8EF6A4B0944DD9EBADC0",
                To : 'restauranteebisucompras@gmail.com',
                From : "restauranteebisucompras@gmail.com",
                Subject : "Lista de compras",
                Body : stock
            }).then(
                message => alert(message)
            );
            }
        }else{
            alert("No updates to send.")
        }
    });
});

const dishes = [
    // Orientais
    {
        name: "Arroz",
        type: "orientais"
    },
    {
        name: "Nori",
        type: "orientais"
    },
    {
        name: "Cream Cheese",
        type: "orientais"
    },
    {
        name: "Gari",
        type: "orientais"
    },
    {
        name: "Gergelim Branco",
        type: "orientais"
    },
    {
        name: "Gergelim Preto",
        type: "orientais"
    },
    {
        name: "Molho de Ostra",
        type: "orientais"
    },
    {
        name: "Tonkatsu",
        type: "orientais"
    },
    {
        name: "Shoyu 20L",
        type: "orientais"
    },
    {
        name: "Shoyu Sachê",
        type: "orientais"
    },
    {
        name: "Wasabi",
        type: "orientais"
    },
    {
        name: "Sake",
        type: "orientais"
    },
    {
        name: "Oleo de Gergelim",
        type: "orientais"
    },
    {
        name: "Tempero p/ Sushi",
        type: "orientais"
    },
    {
        name: "Panko",
        type: "orientais"
    },
    {
        name: "Geleia de Pimenta",
        type: "orientais"
    },
    {
        name: "Guloza",
        type: "orientais"
    },
    {
        name: "Massa p/ Harumaki",
        type: "orientais"
    },
    {
        name: "Kombu",
        type: "orientais"
    },
    {
        name: "Hashi",
        type: "orientais"
    },
    //Peixes
    {
        name: "Tilápia",
        type: "peixes"
    },
    {
        name: "Polvo",
        type: "peixes"
    },
    {
        name: "Kani",
        type: "peixes"
    },
    {
        name: "Camarão",
        type: "peixes"
    },
    {
        name: "Camarão Porção",
        type: "peixes"
    },
    {
        name: "Tilápia Porção",
        type: "peixes"
    },
    //Grafica
    {
        name: "Embalagem 30",
        type: "grafica"
    },
    {
        name: "Embalagem 50",
        type: "grafica"
    },
    {
        name: "Embalagem Temaki",
        type: "grafica"
    },
    {
        name: "Embalagem Yaki",
        type: "grafica"
    },
    {
        name: "Panfleto",
        type: "grafica"
    },
    //Higiene
    {
        name: "Detergente",
        type: "higiene"
    },
    {
        name: "Água Sanitária",
        type: "higiene"
    },
    {
        name: "Desifentante",
        type: "higiene"
    },
    {
        name: "Desengordurante",
        type: "higiene"
    },
    {
        name: "Bucha",
        type: "higiene"
    },
    {
        name: "Papel Toalha",
        type: "higiene"
    },
    {
        name: "Alcool Liquido",
        type: "higiene"
    },
    {
        name: "Esponja abrasiva",
        type: "higiene"
    },
    {
        name: "Limpa Vidros",
        type: "higiene"
    },
    {
        name: "Diabo Verde",
        type: "higiene"
    },
    {
        name: "Brilho Aluminio",
        type: "higiene"
    },
    {
        name: "Saco de Lixo 100L",
        type: "higiene"
    },
    {
        name: "Saco de Lixo 50L",
        type: "higiene"
    },
    //Embalagens
    {
        name: "Elastico",
        type: "embalagens"
    },
    {
        name: "Sacola de Papel M",
        type: "embalagens"
    },
    {
        name: "Sacola de Papel G",
        type: "embalagens"
    },
    {
        name: "Sacola Plastica",
        type: "embalagens"
    },
    {
        name: "Saco Porcionar",
        type: "embalagens"
    },
    {
        name: "Embalagem P/MIX",
        type: "embalagens"
    },
    {
        name: "Marmita",
        type: "embalagens"
    },
    {
        name: "Embalagem HOT",
        type: "embalagens"
    },
    {
        name: "Copos Tarê",
        type: "embalagens"
    },
    {
        name: "Tampa de Compo Tarê",
        type: "embalagens"
    },
    {
        name: "Papel Interfolhado",
        type: "embalagens"
    },
    {
        name: "Saco p/ troco",
        type: "embalagens"
    },
    {
        name: "Bobina",
        type: "embalagens"
    },
    {
        name: "Grampo",
        type: "embalagens"
    },
    {
        name: "Tinta de carimbo",
        type: "embalagens"
    },
    //Ouro Minas
    {
        name: "Cebola Croc",
        type: "ourominas"
    },
    {
        name: "Alho em pó",
        type: "ourominas"
    },
    {
        name: "Chocolate ao leite",
        type: "ourominas"
    },
    {
        name: "Chocolate branco",
        type: "ourominas"
    },
    {
        name: "Creme de avelã",
        type: "ourominas"
    },
    //Bebidas
    {
        name: "Coca lata",
        type: "bebidas"
    },
    {
        name: "Coca zero",
        type: "bebidas"
    },
    {
        name: "Coca mini",
        type: "bebidas"
    },
    {
        name: "Coca 1L",
        type: "bebidas"
    },
    {
        name: "Água",
        type: "bebidas"
    },
    {
        name: "Água c/ gás",
        type: "bebidas"
    },
    {
        name: "Tônica",
        type: "bebidas"
    },
    //Verduras/Legumes
    {
        name: "Pepino",
        type: "verduraslegumes"
    },
    {
        name: "Pimentão Verde",
        type: "verduraslegumes"
    },
    {
        name: "Pimentão Amarelo",
        type: "verduraslegumes"
    },
    {
        name: "Pimentão Vermelho",
        type: "verduraslegumes"
    },
    {
        name: "Brocolis",
        type: "verduraslegumes"
    },
    {
        name: "Chuchu",
        type: "verduraslegumes"
    },
    {
        name: "Alface",
        type: "verduraslegumes"
    },
    {
        name: "Cebolinha",
        type: "verduraslegumes"
    },
    {
        name: "Couve",
        type: "verduraslegumes"
    },
    {
        name: "Alho Poró",
        type: "verduraslegumes"
    },
    {
        name: "Repolho Roxo",
        type: "verduraslegumes"
    },
    {
        name: "Repolho Verde",
        type: "verduraslegumes"
    },
    {
        name: "Acelga",
        type: "verduraslegumes"
    },
    {
        name: "Cenoura",
        type: "verduraslegumes"
    },
    {
        name: "Maracujá",
        type: "verduraslegumes"
    },
    {
        name: "Batata Doce",
        type: "verduraslegumes"
    },
    {
        name: "Batata",
        type: "verduraslegumes"
    },
    {
        name: "Limão",
        type: "verduraslegumes"
    },
    {
        name: "Laranja",
        type: "verduraslegumes"
    },
    {
        name: "Manga",
        type: "verduraslegumes"
    },
    {
        name: "Cebola",
        type: "verduraslegumes"
    },
    {
        name: "Cebola Roxa",
        type: "verduraslegumes"
    },
    {
        name: "Morango",
        type: "verduraslegumes"
    },
    {
        name: "Pimenta Dedo de Moça",
        type: "verduraslegumes"
    },
    //Grãos/Massas
    {
        name: "Arroz (Funcionarios)",
        type: "graosmassas"
    },
    {
        name: "Feijão (Funcionarios)",
        type: "graosmassas"
    },
    {
        name: "Macarrão (Funcionarios)",
        type: "graosmassas"
    },
    {
        name: "Macarrão Yakisoba",
        type: "graosmassas"
    },
    {
        name: "Farinha",
        type: "graosmassas"
    },
    {
        name: "Sal",
        type: "graosmassas"
    },
    {
        name: "Açucar",
        type: "graosmassas"
    },
    //Diversos
    {
        name: "Óleo",
        type: "diversos"
    },
    {
        name: "Azeite",
        type: "diversos"
    },
    {
        name: "Maionese",
        type: "diversos"
    },
    {
        name: "Doritos",
        type: "diversos"
    },
    {
        name: "Goiabada",
        type: "diversos"
    },
    {
        name: "Manteiga",
        type: "diversos"
    },
    {
        name: "Ovo",
        type: "diversos"
    },
    {
        name: "Pimenta Defumada",
        type: "diversos"
    },
    {
        name: "Alho Batido",
        type: "diversos"
    },
    {
        name: "Mel",
        type: "diversos"
    },
    {
        name: "Caldo de Galinha",
        type: "diversos"
    },
    {
        name: "Leite Condensado",
        type: "diversos"
    },
    //Carnes
    {
        name: "Carne p/ Yakisoba",
        type: "carnes"
    },
    {
        name: "Frango p/ Yakisoba",
        type: "carnes"
    },
    {
        name: "Frango (Funcionario)",
        type: "carnes"
    },
    {
        name: "Carne (Funcionario)",
        type: "carnes"
    },
];

const dishContainer = document.getElementById("dish-section");
const categorySelect = document.getElementById("category-select");

// Create a dish element for each dish in the dishes array
dishes.forEach((dish, index) => {
    const dishDiv = document.createElement("div");
    dishDiv.classList.add("dish", dish.type);
    dishDiv.innerHTML = `
        <span class="dish-name">${dish.name}</span>
        <div class="dish-input">
            <button class="decrease">-</button>
            <input type="number" value="0" id="dishInput${index}">
            <button class="increase">+</button>
        </div>
    `;
    dishContainer.appendChild(dishDiv);

    const decreaseButton = dishDiv.querySelector(".decrease");
    decreaseButton.addEventListener("click", event => {
    const input = event.target.nextElementSibling;
    input.value = Math.max(parseInt(input.value) - 1, 0);
    });

    const increaseButton = dishDiv.querySelector(".increase");
    increaseButton.addEventListener("click", event => {
    const input = event.target.previousElementSibling;
    input.value = parseInt(input.value) + 1;
    });
});

// Filter dishes based on the selected category
categorySelect.addEventListener("change", event => {
    const selectedCategory = event.target.value;
    const dishes = document.querySelectorAll(".dish");
    dishes.forEach(dish => {
        if (selectedCategory === "all" || dish.classList.contains(selectedCategory)) {
            dish.style.display = "flex";
        } else {
            dish.style.display = "none";
        }
    });
});
