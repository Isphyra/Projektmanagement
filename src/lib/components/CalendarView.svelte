<script>
  import { onMount } from "svelte";

  let events = [
    { id: 1, title: "Projekt Kickoff", date: "2024-12-01" },
    { id: 2, title: "Deadline Design Phase", date: "2024-12-05" },
    { id: 3, title: "Review Meeting", date: "2024-12-10" },
  ];

  let today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const generateCalendar = (month, year) => {
    const days = [];
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = daysInMonth(month, year);

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= totalDays; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  let calendarDays = generateCalendar(currentMonth, currentYear);

  const prevMonth = () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    calendarDays = generateCalendar(currentMonth, currentYear);
  };

  const nextMonth = () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    calendarDays = generateCalendar(currentMonth, currentYear);
  };
</script>

<div class="calendar">
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

  <div class="calendar-grid">
    {#each ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"] as day}
      <div class="day"><strong>{day}</strong></div>
    {/each}

    {#each calendarDays as day}
      <div class="day">
        {#if day}
          <span>{day.getDate()}</span>
          {#each events.filter((event) => new Date(event.date).toDateString() === day.toDateString()) as event}
            <div class="event">{event.title}</div>
          {/each}
        {/if}
      </div>
    {/each}
  </div>
</div>

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
  }
</style>
