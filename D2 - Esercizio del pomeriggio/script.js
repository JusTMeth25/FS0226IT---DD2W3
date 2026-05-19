/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

const lista = document.querySelector("#lista-task");
const contatore = document.querySelector("#contatore");

function aggiungiTask(testo, priorita) {
  const li = document.createElement("li");
  const prioritaLower = priorita.toLowerCase();
  li.classList.add(`priorita-${prioritaLower}`);
  li.dataset.priorita = prioritaLower;
  console.log(li.dataset.priorita);

  const testoSpan = document.createElement("span");
  testoSpan.textContent = testo;
// crea badge
  const prioritaSpan = document.createElement("span");
  prioritaSpan.textContent = prioritaLower;
  prioritaSpan.classList.add("badge");
// crea data
  const dataSpan = document.createElement("span");
  dataSpan.textContent = new Date().toLocaleString("it-IT");
  dataSpan.classList.add("date");
// crea button
  const btn = document.createElement("button");
  btn.textContent = "Elimina";
  btn.classList.add("btn-elimina");
// append testo, priorita, data e button
  li.append(testoSpan, prioritaSpan, dataSpan, btn);
  lista.appendChild(li);
  aggiornaContatore();
}

function aggiornaContatore() {
  const tasks = lista.querySelectorAll("li");
  contatore.textContent = tasks.length;
}

function eliminaTask(indice) {
  const tasks = lista.querySelectorAll("li");
  if (indice >= 0 && indice < tasks.length) {
    tasks[indice].remove();
    aggiornaContatore();
  }
}

function evidenzia(indice) {
  const tasks = document.querySelectorAll("li");
  if (tasks[indice]) {
    tasks[indice].classList.add("evidenziato");
  }
}

function togliEvidenzia(indice) {
  const tasks = document.querySelectorAll("li");
  if (tasks[indice]) {
    tasks[indice].classList.remove("evidenziato");
  }
}

function contaPerPriorita() {
  const tasks = document.querySelectorAll("li");
  const conteggio = { ALTA: 2, MEDIA: 1, BASSA: 2 };

  tasks.forEach((li) => {
    const priorita = li.dataset.priorita;
    if (conteggio[priorita] !== undefined) {
      conteggio[priorita] += 1;
    }
  });
  return conteggio;
}
console.log(contaPerPriorita());

aggiungiTask("Pagare le bollette", "ALTA");
aggiungiTask("Studiare JavaScript", "MEDIA");
aggiungiTask("Comprare il pane", "BASSA");
aggiungiTask("Bere il caffè", "ALTA");
aggiungiTask("Riposarsi", "BASSA");

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   3. modificaTask(indice, nuovoTesto) // DA NON FARE
   4. rimuoviUltimo() // DA NON FARE
   5. svuotaTutto() // DA NON FARE
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita() // 2 alta, 2 bassa, 1 media
*/
