<script>
    export let sortOrder = 'asc'; // Standard: Aufsteigend ('asc')
    export let onSort; // Callback-Funktion für das Sortieren
  
    function toggleSortOrder() {
      // Wechsel der Sortierreihenfolge
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
      // Callback aufrufen, um die sortierte Liste zurückzugeben
      onSort(sortOrder);
    }
  </script>
  
  <button class="btn btn-secondary" on:click={toggleSortOrder}>
    Nach Alphabet sortieren ({sortOrder === 'asc' ? 'A-Z' : 'Z-A'})
  </button>
  
  <style>
    button {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  </style>