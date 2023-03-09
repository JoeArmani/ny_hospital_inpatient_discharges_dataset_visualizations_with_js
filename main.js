import { fetchApiData } from './repository.js'
import { buildCharts } from './chart.js'
import { showSpinner, hideSpinner } from './spinner.js'

// show the loading spinner
showSpinner()
// build the query
// this gets added to the base url in fetchApiData() - see repository.js
const query =
  '?$where=UPPER(ccs_diagnosis_description)%20like%27%25CANCER%25%27'

const jsonResponse = await fetchApiData(query)

// hide the loading spinner
hideSpinner()

// build the charts
buildCharts(jsonResponse)
