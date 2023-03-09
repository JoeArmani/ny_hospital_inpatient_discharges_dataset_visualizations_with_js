import { fetchApiData } from './repository.js'
import { buildCharts } from './chart.js'

// Hide the spinner initially
document.querySelector('.spinner').style.display = 'none';

// Show the spinner when the page is loading
window.addEventListener('load', function() {
  document.querySelector('.spinner').style.display = 'block';
});

// build the query
// this gets added to the base url in fetchApiData() - see repository.js
const query =
  '?$where=UPPER(ccs_diagnosis_description)%20like%27%25CANCER%25%27'

const jsonResponse = await fetchApiData(query)

// Hide the spinner when the fetch api returns
document.querySelector('.spinner').style.display = 'none';




// build the charts
buildCharts(jsonResponse)
