const uploadBox = document.querySelector(".upload-box")
const previewImg = uploadBox.querySelector("img");
const fileInput = uploadBox.querySelector("input");
const widthInput = document.querySelector(".width input");
const heightInput = document.querySelector(".height input");
const ratioInput = document.querySelector(".ratio input");
const qualityInput = document.querySelector(".quality input");
const downloadBtn = document.querySelector(".download-btn");

let ogImageRatio;

const loadFile = (e) => {
    document.querySelector(".upload-box i").style.display="none";
    const file = e.target.files[0]; 
    console.log(file.size/(1024*1024));
    if (!file) return; 
    previewImg.src = URL.createObjectURL(file); 
    previewImg.addEventListener("load", () => 
    {
        widthInput.value = previewImg.naturalWidth;
        heightInput.value = previewImg.naturalHeight;
        ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
        document.querySelector(".wrapper").classList.add("active");
    });
}
fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => fileInput.click());

widthInput.addEventListener("input", () => 
{
    const height = ratioInput.checked ? widthInput.value / ogImageRatio : heightInput.value;
    heightInput.value = Math.floor(height);
});

heightInput.addEventListener("input", () => {
    const width = ratioInput.checked ? heightInput.value * ogImageRatio : widthInput.value;
    widthInput.value = Math.floor(width);
});

const downloadthefiles = () => {
    const canvas = document.createElement("canvas");
    const a = document.createElement("a");
    const ctx = canvas.getContext("2d");

    const imgQuality = qualityInput.checked ? 0.5 : 1.0;

    canvas.width = widthInput.value;
    canvas.height = heightInput.value;
    ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);
    
    a.href = canvas.toDataURL("image/jpeg", imgQuality);
    
    a.download = new Date().getTime(); 
    a.click(); 
}
downloadBtn.addEventListener("click", downloadthefiles);
