let start = document.querySelector("#startbtn");
                let reset = document.getElementById("resetbtn");
                let stop = document.getElementById("stopbtn");
                let time = document.getElementById("fourth");
                let ctime = document.getElementById("cleart");
                let count = 0;
                let p = document.createElement('p');
                let id;
                
                let starthandle = ()=> {
                     
                     id = setInterval(()=>{
                            document.querySelector("#inner").innerHTML=`${count++}`;
                      },1000)
                }
                let resethandle=()=>{
                      document.querySelector('#inner').innerText = 0;
                      clearInterval(id);
                      count = 0;
                }

                let stophandle = ()=>{
                      clearInterval(id);
                }
                let gettimeHandle = ()=>{
                      
                      p.innerText=`The get time is ${count - 1}`;
                      document.querySelector(".main_container").appendChild(p);
                     
                }
                let ctimehandle =()=>{
                       let element = document.querySelector(".last_div");
                       element.nextElementSibling.remove();
                }



                start.addEventListener("click",()=>{
                      starthandle();
                })
                
                reset.addEventListener("click",()=>{
                      resethandle();
                })

                stop.addEventListener("click",()=>{
                    stophandle();
                })

                time.addEventListener("click",()=>{
                     gettimeHandle();
                })


                ctime.addEventListener("click",()=>{
                     ctimehandle();
                })