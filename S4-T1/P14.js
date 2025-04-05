// Was to create 2 functions 
// 1. Gives massage downloading file
// 2. Prints massage file downloaded after 5 seconds. both must be called in given order using event download 

const downloadFile = () => {
    console.log("Downloading file...");
}
const printFileDownloaded = () => {
    console.log("File downloaded");
}
const download = () => {
    downloadFile();
    setTimeout(printFileDownloaded, 5000);
}
download();