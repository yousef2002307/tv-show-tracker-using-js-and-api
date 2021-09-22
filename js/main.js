let row = document.querySelector(".row");

document.querySelector(".btn").onclick = function(){
    let i =-1;
    row.innerHTML = '';
fetch(`https://api.tvmaze.com/search/shows?q=${document.querySelector("input").value}`).then(function(response)  {
    return response.json();
}).then(function(data){
  //  console.log(data[0].show.image.medium)
  document.querySelector(".p5").textContent = '';
 data.map(tvshow => {
     i++;
     let col = document.createElement("div");
     document.querySelector("input").value = '';
     let colclass = document.createAttribute("class");
     colclass.value = 'col-md-3';
     col.setAttributeNode(colclass);
  
     let divimg = document.createElement("div");
     let imgclass = document.createAttribute("class");
     imgclass.value = 'img';
     divimg.setAttributeNode(imgclass);
  //   col.appendChild(divimg);
     let overlay = document.createElement("div");
     let overlayclass = document.createAttribute("class");
     overlayclass.value = 'overlay';
     overlay.setAttributeNode(overlayclass);
     let p = document.createElement("p");
     let ptext = document.createTextNode(data[i].show.summary);
     p.appendChild(ptext);
     overlay.appendChild(p);
     let h2 = document.createElement("a");
     let h2text = document.createTextNode(data[i].show.name);
     let h2href = document.createAttribute("href");
     h2href.value = data[i].show.url;
     h2.setAttributeNode(h2href);
     h2.appendChild(h2text);
     let h2target = document.createAttribute("target");
   h2target.value= "_blank";
   h2.setAttributeNode(h2target);
     overlay.appendChild(h2);
     divimg.appendChild(overlay);
     let img = document.createElement("img");
     let imgsrc = document.createAttribute("src");
     imgsrc.value = data[i].show.image.medium;
     img.setAttributeNode(imgsrc);
     divimg.appendChild(img);
     col.appendChild(divimg);
     row.appendChild(col);


 });
 
}).catch(function(){
document.querySelector(".p5").textContent = 'could not find this tv show please try agian';
})

}
