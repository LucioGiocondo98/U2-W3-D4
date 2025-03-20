const myAPI ='Jdf8MULkITM5dGwcXdS6O0MGLQRE5rAuahRGQWaHsp0OToLvhYjhIbQN'
const urlMountain ='https://api.pexels.com/v1/search?query=mountains'
const loadImage =  document.getElementById('buttonLoad').addEventListener('click',function(){
    fetch(urlMountain,{
        headers: {
            authorization: myAPI,
        },
    })
    .then((response)=>{
        if(response.ok){
            console.log('ci siamoooo',response)
        }else{
            throw new Error('errore d******')
        }
    })
    .catch((err)=>{
        console.log('errore di ?',err)
    })
})
