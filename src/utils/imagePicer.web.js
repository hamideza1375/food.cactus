
export const imagePicker = (mediaType='photo') => new Promise(async (resolve, reject) => {
 
  const root = document.getElementById('root')
  const input = document.createElement('input')
  input.setAttribute('type','file')
  input.style.visibility = 'hidden'
 
 
 
 
 
  if(mediaType === 'photo'){ 
  input.setAttribute('accept','image/*')
  input.click()
  const interval = setInterval(sum,1000)
  function sum(){
     if(input.files[0]) {
       resolve(input.files[0])
       clearInterval(interval)
       root.removeChild(input)
     }
   }
 }
 
 
 if(mediaType === 'video'){ 
   input.setAttribute('accept','video/*')
   input.click()
   const interval = setInterval(sum,1000)
   function sum(){
      if(input.files[0]) {
        resolve(input.files[0])
        clearInterval(interval)
        root.removeChild(input)
      }
    }
  }
 
 
  if(mediaType === 'mixin'){ 
   input.click()
   const interval = setInterval(sum,1000)
   function sum(){
      if(input.files[0]) {
        resolve(input.files[0])
        clearInterval(interval)
        root.removeChild(input)
      }
    }
  }
 
 
  root.appendChild(input);
 
 })