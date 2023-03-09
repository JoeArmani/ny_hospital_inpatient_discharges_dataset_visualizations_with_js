export function showSpinner() {
    const button = document.querySelector('button');
    button.disabled = true;
    button.innerHTML = 'Generating image <span class="spinner">...</span>';
  }
  
export function hideSpinner () {
    const button = document.querySelector('button')
    button.disabled = false
    button.innerHTML = 'Generate image'
  }