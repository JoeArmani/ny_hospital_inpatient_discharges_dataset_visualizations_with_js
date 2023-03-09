import { fetchApiData } from './repository.js'
import { buildChart1, buildChart2, buildChart3, buildChart4 } from './chart.js'

const query =
  '?$where=UPPER(ccs_diagnosis_description)%20like%27%25CANCER%25%27'
//const query2 ='?&$where=UPPER(ccs_diagnosis_description)%20like%27%2517%25%27'
//const query3 ='?&$where=UPPER(ccs_diagnosis_description)%20like%27%2570%25%27'
const jsonResponse = await fetchApiData(query)

// build the charts
buildChart1(jsonResponse)
buildChart2(jsonResponse)
buildChart3(jsonResponse)
buildChart4(jsonResponse)
