store.subscribe(render)
var valueEl = document.getElementById('sub-message')
function render() {
  valueEl.innerHTML = store.getState().message.text.toString()
}

// init load
render()

