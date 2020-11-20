




let embeddedDoc = document.querySelector('.economic-health-embedded-file')
console.log(embeddedDoc)

let displaySpinner=(()=>{

    let embeddedDiv = document.querySelector('.economic-health-embedded-file-div');

    let spinnerDiv = document.createElement('div')
        spinnerDiv.id = 'spinnerDiv'
        
    let spinner = document.createElement('img');
        spinner.className = 'spinner'
        spinner.src = '/assets/images/Spin-2.9s-210px.gif'
    
    let spinnerText = document.createElement('p')
        spinnerText.innerText = '... Dashboard Loading, Please Wait ...'

    spinnerDiv.appendChild(spinner)
    spinnerDiv.appendChild(spinnerText)

    embeddedDiv.appendChild(spinnerDiv)

    embeddedDoc.style.display = 'none'
    
})();

let loadEmbeddedBoard =(()=>{
    embeddedDoc.addEventListener('load', ()=>{
            let spinnerDiv = document.querySelector('#spinnerDiv')
                spinnerDiv.style.display = 'none'
                embeddedDoc.style.display = 'block'
        })

})()



