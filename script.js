
    var tablinks=document.getElementsByClassName("tab-links");
    var tabcontants=document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks)
            {
                tablink.classList.remove("active-link");

            }
        for(tabcontent of tabcontants)
            {
                tabcontent.classList.remove("active-tab")
            }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }


// ------------side-menu-onen-close----------

    var sidemenu=document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right="0";

    }
    function closemenu(){
        sidemenu.style.right="-200px";
        
    }


// -------------comments storing------------------
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzyEu7d48Jv2WvK7OEumz6mRBURoNBOW4myJVa9WrsPsro80cc9xnWRiCBCOJZVbSqMVQ/exec'
    const form = document.forms['submit-to-google-sheet']

    const message=document.getElementById("msg")

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response=>{
            message.innerHTML="Message sent successfully"
            setTimeout(function(){
            message.innerHTML=""
            },2000)
         form.reset()

        })
        
        .catch(error => console.error('Error!', error.message))
    })
 