const applicationState = {
   entries: []
}

const API = "http://localhost:8088"

export const addNewEntry = async (entry) => {
   const fetchEntries = {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
   }

   const mainContainer = document.querySelector("#entries")
   const response = await fetch(`${API}/entries`, fetchEntries)
   const responseJson = await response.json()
   mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
   return responseJson
}

export const fetchEntries = async () => {
   const dataFetch = await fetch(`${API}/entries`)
   const journalEntries = await dataFetch.json()
   applicationState.entries = journalEntries
}

export const getJournalEntries = () => {
   return applicationState.entries.map(entry => ({...entry}))
}

