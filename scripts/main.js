import {addNewEntry, fetchEntries, getJournalEntries} from './entries.js';

const mainContainer = document.querySelector('#entries')

mainContainer.addEventListener("stateChanged", event => {
   displayEntries()
})

const displayMood = (mood) => {
      if(mood !== "Sad") {
         return `<p class="mood">Mood: ${mood}</section>`
      } else {
         return `<p class="sadMood">Mood: ${mood}</section>`
      }
}



document.addEventListener('click', (e) => {
   if (e.target.id === "recordEntry") {
      const date = document.getElementById('entryDate').value
      const concepts = document.getElementById('conceptsCoveredtext').value
      const entry = document.getElementById('entriesText').value
      const mood = document.getElementById('mood').value
      const newEntry = {
         date: date,
         concept: concepts,
         entry: entry,
         mood: mood
      }
      addNewEntry(newEntry)
      document.getElementById('entryForm').reset()
   }
})

const displayEntries = async () => {
   await fetchEntries();
   let htmlEntries = "";
   const entries = getJournalEntries();
   for(const entry of entries){
      htmlEntries += `<section class="entryBox"><p class="entryActual">Date: ${entry.date}</p>`
      htmlEntries += `<p class="entryActual">Entry: ${entry.entry}</p>`
      htmlEntries += displayMood(entry.mood)
   }
   document.getElementById('entries').innerHTML = htmlEntries;
}

displayEntries()