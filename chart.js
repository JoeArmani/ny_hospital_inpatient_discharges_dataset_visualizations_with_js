export function buildCharts (data) {
  buildChart1(data)
  buildChart2(data)
  buildChart3(data)
  buildChart4(data)
}


function buildChart1 (data) {
  const ctx = document.getElementById('chart-1')

  let ageModel = [
    { age: '0 to 17', mortalities: 0, patients: 0 },
    { age: '18 to 29', mortalities: 0, patients: 0 },
    { age: '30 to 49', mortalities: 0, patients: 0 },
    { age: '50 to 69', mortalities: 0, patients: 0 },
    { age: '70 or Older', mortalities: 0, patients: 0 }
  ]

  data.forEach(element => {
    switch (element['age_group']) {
      case '0 to 17':
        ageModel[0].patients++
        if (element['patient_disposition'] === 'Expired') {
          ageModel[0].mortalities++
        }

        break
      case '18 to 29':
        ageModel[1].patients++
        if (element['patient_disposition'] === 'Expired') {
          ageModel[1].mortalities++
        }
        break
      case '30 to 49':
        ageModel[2].patients++
        if (element['patient_disposition'] === 'Expired') {
          ageModel[2].mortalities++
        }
        break
      case '50 to 69':
        ageModel[3].patients++
        if (element['patient_disposition'] === 'Expired') {
          ageModel[3].mortalities++
        }
        break
      case '70 or Older':
        ageModel[4].patients++
        if (element['patient_disposition'] === 'Expired') {
          ageModel[4].mortalities++
        }
        break
      default:
        break
    }
  })

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ageModel.map(entry => entry.age),
      datasets: [
        {
          label: 'Mortality Rate',
          data: ageModel.map(entry => (entry.mortalities/entry.patients) * 100),
          borderWidth: 1
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Moralities (%) by Age Group (1000 Patient Sample)',
          padding: {
            top: 10,
            bottom: 30
          }
        }
      }
    }
  })
}



function buildChart2 (data) {
  const ctx = document.getElementById('chart-2')

  let raceModel = [
    { race: 'Black/African American', diagnoses: 0, patients: 0 },
    { race: 'Multi-racial', diagnoses: 0, patients: 0 },
    { race: 'White', diagnoses: 0, patients: 0 },
    { race: 'Other Race', diagnoses: 0, patients: 0 },
  ]

  data.forEach(element => {
    switch (element['race']) {
      case 'Black/African American':
        raceModel[0].patients++
        if (element['ccs_diagnosis_description'].includes('lung')) {
          raceModel[0].diagnoses++
        }
        break
      case 'Multi-racial':
        raceModel[1].patients++
        if (element['ccs_diagnosis_description'].includes('lung')) {
          raceModel[1].diagnoses++
        }
        break
      case 'White':
        raceModel[2].patients++
        if (element['ccs_diagnosis_description'].includes('lung')) {
          raceModel[2].diagnoses++
        }
        break
      case 'Other Race':
        raceModel[3].patients++
        if (element['ccs_diagnosis_description'].includes('lung')) {
          raceModel[3].diagnoses++
        }
        break
      default:
        break
    }
  })

  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: raceModel.map(entry => entry.race),
      datasets: [
        {
          label: 'Lung Cancer Diagnoses by Race',
          data: raceModel.map(entry => (entry.diagnoses/entry.patients)),
          borderWidth: 1
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Lung Cancer Diagnoses by Race (1000 Patient Sample)',
          padding: {
            top: 30,
            bottom: 30
          }
        }
      }
    }
  })
}


function buildChart3 (data) {
  const ctx = document.getElementById('chart-3')

  let genderModel = [
    { gender: 'M', diagnoses: 0, patients: 0 },
    { gender: 'F', diagnoses: 0, patients: 0 },
  ]

  data.forEach(element => {
    switch (element['gender']) {
      case 'M':
        genderModel[0].patients++
        if (element['ccs_diagnosis_description'].includes('pancreas')) {
          genderModel[0].diagnoses++
        }
        break
      case 'F':
        genderModel[1].patients++
        if (element['ccs_diagnosis_description'].includes('pancreas')) {
          genderModel[1].diagnoses++
        }
        break
      default:
        break
    }
  })

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: genderModel.map(entry => entry.gender),
      datasets: [
        {
          label: 'Pancreatic Cancer by Gender',
          data: genderModel.map(entry => (entry.diagnoses/entry.patients)),
          borderWidth: 1
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Pancreatic Cancer Diagnoses by Gender (1000 Patient Sample)',
          padding: {
            top: 30,
            bottom: 30
          }
        }
      }
    }
  })
}

function buildChart4 (data) {
  const ctx = document.getElementById('chart-4')

  let severityModel = [
    { severity: 'Minor', patients: 0 },
    { severity: 'Moderate', patients: 0 },
    { severity: 'Major', patients: 0 },
    { severity: 'Extreme', patients: 0 },
  ]

  data.forEach(element => {
    switch (element['apr_severity_of_illness_description']) {
      case 'Minor':
        severityModel[0].patients++
        break
      case 'Moderate':
        severityModel[1].patients++
        break
      case 'Major':
        severityModel[2].patients++
        break
      case 'Extreme':
        severityModel[3].patients++
        break
      default:
        break
    }
  })

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: severityModel.map(entry => entry.severity),
      datasets: [
        {
          label: 'Severity Distribution (per 1000 Patients)',
          data: severityModel.map(entry => entry.patients),
          borderWidth: 1
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Severity distribution (1000 Patient Sample)',
          padding: {
            top: 30,
            bottom: 30
          }
        }
      }
    }
  })
}