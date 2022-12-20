// import JsFileDownloader from "js-file-downloader"

//  const download =(filename) =>{
//   new JsFileDownloader({ url: filename })
//   .catch((error)=> { console.log(error); })
// }

// export default download




import _download  from 'downloadjs'

 const download =(filename) =>{
   _download( filename )
}

export default download
