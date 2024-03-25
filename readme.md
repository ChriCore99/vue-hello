## installazione e basi di vue

dopo la sua corretta installazione, viene consigliato di scaricare su visualstudio, qualora si usi quel programma per programmare, l'estensione di vue per visualizzare meglio il codice nell'HTML. per poter utilizzare vue bisognerà inserire il seguente codice: <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> in html prima dello script contenente il collegamento a js. il seguente codice indica un modello globale di espressione di un modulo di vue:
<div id="app">{{ message }}</div>

<script>
  const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('Hello vue!')
      return {
        message
      }
    }
  }).mount('#app')
</script>

- chiarimento sul funzionamento delle import maps (possiamo importare del codice esterno a js da poter poi richiamare "come fossero function"?)

per alcuni passaggi, mano a mano che il codice diventerà più complesso, ci potremmo trovare a dover suddividere il lavoro in diversi file js. è importante quindi collegarli fra loro al codice HTML per la correta letura e il loro funzionamento su un browser, altrimenti restituiranno errore

## sintassi vue

il linguaggio usato da vue è perfetaente otimizzato e leggibile su HTML. può inoltre capire in modo intelligente quali elementi modificare mano a mano che le interazioni cambiano. per interpretare i dati come HTML va usata la direttiva v-html. per inserire atributi in html si userà il v-bind, che restituirà sempre un valore e verrà rimosso se quest'ultimo sarà null. 