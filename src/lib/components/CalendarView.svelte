<script>
  import { onMount } from "svelte";

  // Array für Events (aktuell auskommentiert)
  let events = [
    /*
    { id: 1, title: "Projekt Kickoff", date: "2024-12-01" },
    { id: 2, title: "Deadline Design Phase", date: "2024-12-05" },
    { id: 3, title: "Review Meeting", date: "2024-12-10" },
    */
  ];

  let today = new Date(); // Aktuelles Datum
  let currentMonth = today.getMonth(); // Aktueller Monat (0-basiert)
  let currentYear = today.getFullYear(); // Aktuelles Jahr

  // Funktion: Anzahl der Tage im Monat berechnen
  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  // Funktion: Kalenderdaten für einen Monat generieren
  const generateCalendar = (month, year) => {
    const days = [];
    const firstDay = new Date(year, month, 1).getDay(); // Wochentag des 1. Tages
    const totalDays = daysInMonth(month, year); // Anzahl der Tage im Monat

    // Leere Felder für die Tage vor dem 1. hinzufügen
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Tage des Monats hinzufügen
    for (let i = 1; i <= totalDays; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  let calendarDays = generateCalendar(currentMonth, currentYear); // Initialer Kalender

  // Funktion: Zum vorherigen Monat wechseln
  const prevMonth = () => {
    currentMonth--;
    if (currentMonth < 0) { // Wenn Januar erreicht, zum Dezember des Vorjahres wechseln
      currentMonth = 11;
      currentYear--;
    }
    calendarDays = generateCalendar(currentMonth, currentYear); // Kalenderdaten aktualisieren
  };

  // Funktion: Zum nächsten Monat wechseln
  const nextMonth = () => {
    currentMonth++;
    if (currentMonth > 11) { // Wenn Dezember erreicht, zum Januar des nächsten Jahres wechseln
      currentMonth = 0;
      currentYear++;
    }
    calendarDays = generateCalendar(currentMonth, currentYear); // Kalenderdaten aktualisieren
  };
</script>

<!-- Kalenderanzeige -->
<div class="calendar">
  <!-- Kopfbereich des Kalenders mit Monat-Navigation -->
  <div class="calendar-header">
    <button on:click={prevMonth}>&lt; Vorheriger Monat</button>
    <h2>
      {new Date(currentYear, currentMonth).toLocaleDateString("de-DE", {
        month: "long",
        year: "numeric",
      })}
    </h2>
    <button on:click={nextMonth}>Nächster Monat &gt;</button>
  </div>

  <!-- Kalendergrid mit Tagen -->
  <div class="calendar-grid">
    <!-- Wochentage anzeigen -->
    {#each ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"] as day}
      <div class="day"><strong>{day}</strong></div>
    {/each}

    <!-- Tage des Monats anzeigen -->
    {#each calendarDays as day}
      <div class="day">
        {#if day}
          <span>{day.getDate()}</span>
          <!-- Events für den aktuellen Tag anzeigen -->
          {#each events.filter((event) => new Date(event.date).toDateString() === day.toDateString()) as event}
            <div class="event">{event.title}</div>
          {/each}
        {/if}
      </div>
    {/each}
  </div>
</div>

<!-- CSS-Styles für den Kalender -->
<style>
  .calendar {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 1rem;
  }

  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5rem;
  }

  .day {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 1px solid #ccc;
    background: #f9f9f9;
    min-height: 4rem;
  }

  .event {
    background: #cc0058;
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  button {
    background: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    cursor: pointer;
  }

  button:hover {
    background: #0056b3;
  }
</style>