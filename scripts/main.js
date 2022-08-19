import {getJournalEntries} from './entries.js';
const entries = getJournalEntries();

let htmlEntries = "";

const displayMood = (mood) => {
      if(mood !== "Sad") {
         return `<p class="mood">Mood: ${mood}</section>`
      } else {
         return `<p class="sadMood">Mood: ${mood}</section>`
      }
}

const displayEntries = () => {
   for(let entry of entries){
      htmlEntries += `<section class="entryBox"><p class="entryActual">Date: ${entry.date}</p>`
      htmlEntries += `<p class="entryActual">Entry: ${entry.entry}</p>`
      htmlEntries += displayMood(entry.mood)
   }
   document.getElementById('entries').innerHTML = htmlEntries;
}

displayEntries()