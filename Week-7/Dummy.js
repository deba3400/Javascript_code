function downloader(url,cb){
        console.log("Started downloading from", url);
        setTimeout(()=>
        {
          console.log("download completed");
          let downloadedData=" dummy content";
          cb(downloadedData)  ;
        },4000)

}
function writeFile(data,cb){
    console.log("Started Writing data",data);
    setTimeout(()=>{
        console.log("writing completed");
        let filename="dummy.txt";
        cb(filename);
    },2000);


}

function uploadFile(fileName,newurl,cb){
    console.log("Started uploading file",filename);
    setTimeout(()=>{
        console.log("uploading completed and uploaded file url is",newurl);
        
    },4000)

}
