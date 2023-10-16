let kun = document.getElementById('kun')
kun.addEventListener('click', () => {
        document.body.classList.toggle('kun')
        if(kun.innerHTML == 'Kun'){
            kun.innerHTML = 'Tun'
        }
        else{
            kun.innerHTML = 'Kun'
        }
    }
)