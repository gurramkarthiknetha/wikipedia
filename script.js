let inputsearchEle = document.getElementById('searchinput');
let dabba=document.getElementById('dynamicmain');



function output(result){
    //creating main container
    let maincon=document.createElement('div');
    maincon.classList.add('dabbafor_results');
    dabba.appendChild(maincon);

    // heading for anker wiki
    let {title,link,description}=result;
    let ankerheading=document.createElement('a');
    ankerheading.textContent=title;
    ankerheading.href=link;
    ankerheading.classList.add('headinganker')
    ankerheading.target="_blank";
    maincon.appendChild(ankerheading);
    //break 
    let breakk=document.createElement('br');
    ankerheading.appendChild(breakk);
    //result url for user
    let urlforuser=document.createElement('a');
    urlforuser.href=link;
    urlforuser.textContent=link;
    urlforuser.classList.add('url')
    maincon.appendChild(urlforuser)
    //breakkk 
    let breakkk=document.createElement('br')
    urlforuser.appendChild(breakkk)
    /// paragraph
    let para=document.createElement('p');
    para.classList.add('para');
    para.textContent=description;
    maincon.appendChild(para)

}


function displayresults(results){
    for( let resultt of results){
        output(resultt);
    }
    // let result=results[0];
    // output(result);
}


function wiki(event){
    if(event.key==='Enter'){
        dabba.textContent='';
        searchInput=inputsearchEle.value;
        console.log(searchInput);
        let url="https://apis.ccbp.in/wiki-search?search="+searchInput;
        let options={
            methods:'GET',
        }
        fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
            console.log(jsondata);
            let {search_results}=jsondata;
            displayresults(search_results);
        })
    }

}
inputsearchEle.addEventListener('keydown',wiki)
