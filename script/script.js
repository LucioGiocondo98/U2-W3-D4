const myAPI ='Jdf8MULkITM5dGwcXdS6O0MGLQRE5rAuahRGQWaHsp0OToLvhYjhIbQN'
const urlMountain ='https://api.pexels.com/v1/search?query=mountains'
const loadButton = document.getElementById('loadButton')
const allTheDogs = document.querySelectorAll('.card img')
const loadImage = function(){
    fetch(urlMountain,{
        headers: {
            authorization: myAPI,
        },
    })
    .then((response)=>{
        if(response.ok){
            console.log('ci siamoooo',response)
            return response.json()
        }else{
            throw new Error('errore d******')
        }
    })
    .then((data)=>{
        console.log('data',data)
        allTheDogs.forEach((dogPic,i )=> {
            dogPic.setAttribute('src',data.photos[i].src.medium)
            
        });
    })
    .catch((err)=>{
        console.log('errore di ?',err)
    })
}
