const entries = [
   {
      id: 1,
      date: "7-5-22",
      concept: "Introduction to NSS",
      entry: "First day of class! Got to be cool and talk about how cool I am in front of everyone.",
      mood: "Intrigued"
   },
   {
      id: 2,
      date: "7-9-22",
      concept: "Demos of Previous Cohorts",
      entry: "Saw demo of preview Cohort and saw some pretty cool concepts. The MTG card price checker was pretty lit.",
      mood: "Happy"
   },
   {
      id: 3,
      date: "7-12-22",
      concept: "Terminal Day",
      entry: "OMG TERMINAL",
      mood: "Happy"
   },
   {
      id: 4,
      date: "7-14-22",
      concept: "First Group Study Day",
      entry: "First group study day outside of class. I was the coolest and had the most drip.",
      mood: "Sad"
   },
   {
      id: 5,
      date: "7-23-22",
      concept: "Group Project Day",
      entry: "We were put into our groups today and sent off to work on our own. Everyone was a huge help, especially me.",
      mood: "Neutral"
   },
   {
      id: 6,
      date: "7-30-22",
      concept: "New Group Day",
      entry: "We were put into new groups today and sent off to work on our own.",
      mood: "Happy"
   },
   {
      id: 7,
      date: "8-1-22",
      concept: "Daily Journal Scripts",
      entry: "Imagine being able to write JS reliably and neatly. Must be weird.",
      mood: "Intrigued"
   }
]

for (let i=0; i < entries.length; i++) {
   console.log(entries[i])
};

for (let entry of entries) {
   console.log(entry.concept)
};

for (let entryOdd of entries) {
   if (entryOdd.id % 2 !== 0) {
      console.log (entryOdd)
   }
};

let htmlEntries = "";

for(let entry of entries){
   htmlEntries += `<p class="entryActual">Entry: ${entry.entry}</p>`
}

document.getElementById('entries').innerHTML = htmlEntries;