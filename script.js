const fname=document.querySelector("#fname");
const lname=document.querySelector("#lname");
const country=document.querySelector("#country");
const playerscore=document.querySelector("#playerscore");
const btn=document.querySelector("#button");
const wrapper=document.querySelector(".wrapper");

let data=[];

 btn.addEventListener("click",function(event){
    event.preventDefault();
    let newdata={
    fname:fname.value,
    lname:lname.value,
    country:country.value,
    playerscore:playerscore.value
    };
    data.push(newdata);
    display_data(data);
});

function display_data(data){
   

    wrapper.innerHTML="";

    data.forEach(element => {

        let info_div=document.createElement("div");
        info_div.classList.add("info_div");

        let name=document.createElement("p");
        name.innerText=element.fname+" "+element.lname;

        let country_name=document.createElement("p");
        country_name.innerText=element.country;

        let score=document.createElement("p");
        score.innerText=element.playerscore;

        let delete_btn=document.createElement("button");
        delete_btn.innerHTML='<i class="fas fa-trash-alt"></i>';
        delete_btn.addEventListener("click", ()=> {
            // Remove the parent div when delete button is clicked
            info_div.parentNode.removeChild(info_div);
            // Remove the data entry from the data array
            const index = data.indexOf(element);
            if (index > -1) {
                data.splice(index, 1);
            }
        });

        let plus_score=document.createElement("button");
        plus_score.innerHTML='<i class="fas fa-plus"></i>';
        plus_score.addEventListener("click", ()=>{
            element.playerscore=parseInt(element.playerscore)+5;
            score.innerText=element.playerscore;
        })

        let minus_btn=document.createElement("button");
        minus_btn.innerHTML='<i class="fas fa-minus"></i>';
        minus_btn.addEventListener("click",()=>{
            element.playerscore=parseInt(element.playerscore)-5;
            score.innerText=element.playerscore;
        })

        info_div.append(name,country_name,score,delete_btn,plus_score,minus_btn);
        wrapper.append(info_div);



    });
}

window.addEventListener("load",()=> display_data(data)); 