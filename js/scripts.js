// seleçaõ dos elementos
const todoForm = document.querySelector("#todo-form"); //Onde adicona novas tarefas
const todoInput = document.querySelector("#todo-input"); //Onde adicona novas tarefas
const todoList = document.querySelector("#todo-list"); 
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const taskList = document.querySelector("#task-list");
const tarefa = document.querySelector(".tarefa");
const toqueSound = document.getElementById("toqueSound"); // Som do toque
const checkSound = document.getElementById("checkSound"); // Som do check

// Funções

const saveTodo = (Text) => {
    const todo = document.createElement("div")
    todo.id = ("todo-list")

    const divTarefa = document.createElement("div") //criando uma div
    divTarefa.classList.add("tarefa") // Adicionando a classe todo
    todo.appendChild(divTarefa)


    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = `<svg id="svg-tarefa" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="check-done"><circle id="fundo" cx="9.5" cy="9.5" r="9.5" /><path id="borda" d="M9.5 0C7.62108 0 5.78435 0.557165 4.22209 1.60104C2.65982 2.64491 1.44218 4.12861 0.723149 5.86451C0.0041162 7.6004 -0.184015 9.51054 0.182544 11.3534C0.549104 13.1962 1.45389 14.8889 2.78249 16.2175C4.11109 17.5461 5.80383 18.4509 7.64665 18.8175C9.48946 19.184 11.3996 18.9959 13.1355 18.2769C14.8714 17.5578 16.3551 16.3402 17.399 14.7779C18.4428 13.2156 19 11.3789 19 9.5C18.9973 6.98126 17.9956 4.56644 16.2146 2.78542C14.4336 1.0044 12.0187 0.00265983 9.5 0ZM9.5 17.5385C7.91015 17.5385 6.35599 17.067 5.03407 16.1837C3.71216 15.3005 2.68185 14.045 2.07343 12.5762C1.46502 11.1073 1.30583 9.49108 1.616 7.93177C1.92616 6.37246 2.69175 4.94015 3.81595 3.81595C4.94015 2.69175 6.37247 1.92616 7.93178 1.61599C9.49109 1.30583 11.1074 1.46502 12.5762 2.07343C14.045 2.68184 15.3005 3.71215 16.1837 5.03407C17.067 6.35599 17.5385 7.91014 17.5385 9.5C17.536 11.6312 16.6884 13.6744 15.1814 15.1814C13.6744 16.6884 11.6312 17.536 9.5 17.5385Z" /><path id="check" d="M14.8335 6.96207L8.94605 13.3984C8.89329 13.4507 8.83065 13.4923 8.7617 13.5206C8.69275 13.549 8.61884 13.5636 8.5442 13.5636C8.46955 13.5636 8.39564 13.549 8.32669 13.5206C8.25774 13.4923 8.1951 13.4507 8.14235 13.3984L4.16645 9.45558C4.05987 9.34989 4 9.20654 4 9.05708C4 8.90761 4.05987 8.76426 4.16645 8.65857C4.27303 8.55289 4.41758 8.49351 4.5683 8.49351C4.71902 8.49351 4.86357 8.55289 4.97015 8.65857L8.5442 12.2036L14.0298 6.16507C14.1364 6.05938 14.281 6 14.4317 6C14.5824 6 14.727 6.05938 14.8335 6.16507C14.9401 6.27075 15 6.4141 15 6.56357C15 6.71304 14.9401 6.85638 14.8335 6.96207Z" /></g></svg>`
    divTarefa.appendChild(doneBtn)


    const tituloTarefa = document.createElement("h3") //criado um h3
    tituloTarefa.innerText = Text //Estou adiconando um text no h3 esse texto é o que vem de text
    divTarefa.appendChild(tituloTarefa);// Adicoinando o h3 criado na div todo

    // Criando o bottao edit e remove todo e adicionando eles dentro do todo
    const editBtn = document.createElement("button");
    editBtn.classList.add("btn-ico", "edit-todo");
    editBtn.innerHTML = `<img src="./svg/pencel-white.svg" alt="">`;
    todo.appendChild(editBtn);

    const deliteBtn = document.createElement("button");
    deliteBtn.classList.add("btn-ico", "remove-todo");
    deliteBtn.innerHTML = `<img src="./svg/trash.svg" alt="">`;
    todo.appendChild(deliteBtn);


    //asdasasddsd
    const teste = document.createElement("div")
    teste.id = ('todo-list')
    teste.innerHTML = `
    <div class="tarefa zoomIn">
        <button class="finish-todo">
            <svg id="svg-tarefa" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="check-done"><circle id="fundo" cx="9.5" cy="9.5" r="9.5" /><path id="borda" d="M9.5 0C7.62108 0 5.78435 0.557165 4.22209 1.60104C2.65982 2.64491 1.44218 4.12861 0.723149 5.86451C0.0041162 7.6004 -0.184015 9.51054 0.182544 11.3534C0.549104 13.1962 1.45389 14.8889 2.78249 16.2175C4.11109 17.5461 5.80383 18.4509 7.64665 18.8175C9.48946 19.184 11.3996 18.9959 13.1355 18.2769C14.8714 17.5578 16.3551 16.3402 17.399 14.7779C18.4428 13.2156 19 11.3789 19 9.5C18.9973 6.98126 17.9956 4.56644 16.2146 2.78542C14.4336 1.0044 12.0187 0.00265983 9.5 0ZM9.5 17.5385C7.91015 17.5385 6.35599 17.067 5.03407 16.1837C3.71216 15.3005 2.68185 14.045 2.07343 12.5762C1.46502 11.1073 1.30583 9.49108 1.616 7.93177C1.92616 6.37246 2.69175 4.94015 3.81595 3.81595C4.94015 2.69175 6.37247 1.92616 7.93178 1.61599C9.49109 1.30583 11.1074 1.46502 12.5762 2.07343C14.045 2.68184 15.3005 3.71215 16.1837 5.03407C17.067 6.35599 17.5385 7.91014 17.5385 9.5C17.536 11.6312 16.6884 13.6744 15.1814 15.1814C13.6744 16.6884 11.6312 17.536 9.5 17.5385Z" /><path id="check" d="M14.8335 6.96207L8.94605 13.3984C8.89329 13.4507 8.83065 13.4923 8.7617 13.5206C8.69275 13.549 8.61884 13.5636 8.5442 13.5636C8.46955 13.5636 8.39564 13.549 8.32669 13.5206C8.25774 13.4923 8.1951 13.4507 8.14235 13.3984L4.16645 9.45558C4.05987 9.34989 4 9.20654 4 9.05708C4 8.90761 4.05987 8.76426 4.16645 8.65857C4.27303 8.55289 4.41758 8.49351 4.5683 8.49351C4.71902 8.49351 4.86357 8.55289 4.97015 8.65857L8.5442 12.2036L14.0298 6.16507C14.1364 6.05938 14.281 6 14.4317 6C14.5824 6 14.727 6.05938 14.8335 6.16507C14.9401 6.27075 15 6.4141 15 6.56357C15 6.71304 14.9401 6.85638 14.8335 6.96207Z" /></g>
            </svg>
        </button>
        <h3>${Text}</h3>
    </div>
    <button class="btn-ico edit-todo zoomIn d-0">
        <img src="./svg/pencel-white.svg" alt="">
    </button>
    <button class="btn-ico remove-todo zoomIn d-1">
        <img src="./svg/trash.svg" alt="">
    </button>
    `
  
    

    console.log(teste)
    taskList.appendChild(teste)

    todoInput.value = ""; // desse modo vai apagar todo que estiver no imput apois enviar submit
}

// Eventos

todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita que a página seja recarregada quando o formulário é enviado.

    let inputValue = todoInput.value // estou pegando o valor do input o usuario digita

    if (inputValue) {
        saveTodo(inputValue)
        // Reproduzir o som

        toqueSound.currentTime = 0; // Reinicia o som para que possa ser reproduzido várias vezes em sequência
        toqueSound.play();
    }
});

console.log(taskList.outerHTML)


// addEventListener = ouvinte
// (e) será executada quando o evento "click" ocorrer.
document.addEventListener("click", (e) => { // pegando todos elementos da pagina
    const targetEl = e.target // referência ao elemento HTML específico que foi clicado 
    const parentEl = targetEl.closest("div"); // elemneto pai = Div mais proxima

    if (targetEl.classList.contains("finish-todo")) { //para saber se tem a classe finish-todo
        parentEl.classList.toggle("done") // toggle para adicionar e tirar a classe sempre que for clicado
        
        // Reproduzir o som
        checkSound.currentTime = 0; // Reinicia o som para que possa ser reproduzido várias vezes em sequência
        checkSound.play();

        console.log("clicou em finalizar tarefa")
        
    }
    
    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove();
        // Contar quantos elementos com a classe "remove-todo" ainda estão na página
        let teste3 = document.querySelectorAll('.remove-todo').length
        console.log(teste3)

        console.log(`numero de itens ${teste3}`)

        if (teste3 > 1) {
            console.log('itens maior que 1')
            /* 
            const semTarefas = document.createElement('div')
            semTarefas.id = ('semTarefas')
            
            
            const semTarefasH3 = document.createElement('div')
            semTarefasH3.id = (semTarefasH3)

            semTarefas.appendChild(semTarefasH3)
            taskList.appendChild(semTarefas)
             */

        } else {
            console.log('sem tarefas')
        }
    } 

})

