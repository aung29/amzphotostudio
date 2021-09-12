//Start Navbar
const navbuttons = document.querySelector('.navbuttons');

// for navbutton
navbuttons.addEventListener('click',()=>{
        navbuttons.classList.toggle('changes');
});

// for navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',(e)=>{
    const getScrollY = window.scrollY;


    if(getScrollY >= 200){
        navbar.classList.add('navmenus');
    }else{
        navbar.classList.remove('navmenus');
    }
});
//End Navbar


// Start Gallery Section
    const galleryLists = document.querySelectorAll(".gallerylists");
    const filternews = document.querySelectorAll(".filters.new"),
    filterfrees = document.querySelectorAll('.filters.free'),
    filterpros = document.querySelectorAll(".filters.pro");
    console.log(filternews);
  
        // galleryLists.forEach(galleryList =>{

        //     let datafilter = galleryList.getAttribute("data-filter");
        //     // console.log(galleryList);
        //     galleryList.addEventListener('click',(e)=>{
                
        //         // console.log(datafilter);
        //         if(datafilter == "all"){
        //             removeActiveItem();
        //             e.target.classList.add("activeitems");
        //             filternews.forEach(filternew => {
        //                 filternew.style.display = "finline-block";
        //             });

        //             filterfrees.forEach(filterfree =>{
        //                 filterfree.style.display = "inline-block";
        //             });
                    
        //             filterpros.forEach(filterpro =>{
        //                 filterpro.style.display = "inline-block";
        //             });
        //         }else if(datafilter == "new"){
        //             removeActiveItem();
        //             e.target.classList.add("activeitems");
        //             filternews.forEach(filternew => {
        //                 filternew.style.display = "inline-block";
        //             });

        //             filterfrees.forEach(filterfree =>{
        //                 filterfree.style.display = "none";
        //             });
                    
        //             filterpros.forEach(filterpro =>{
        //                 filterpro.style.display = "none";
        //             });
        //         }else if(datafilter == "free"){
        //             removeActiveItem();
        //             e.target.classList.add("activeitems");
        //             filternews.forEach(filternew => {
        //                 filternew.style.display = "none";
        //             });

        //             filterfrees.forEach(filterfree =>{
        //                 filterfree.style.display = "inline-block";
        //             });
                    
        //             filterpros.forEach(filterpro =>{
        //                 filterpro.style.display = "none";
        //             });
        //         }else{
        //             removeActiveItem();
        //             e.target.classList.add("activeitems");

        //             filternews.forEach(filternew => {
        //                 filternew.style.display = "none";
        //             });

        //             filterfrees.forEach(filterfree =>{
        //                 filterfree.style.display = "none";
        //             });
                    
        //             filterpros.forEach(filterpro =>{
        //                 filterpro.style.display = "inline-block";
        //             });
        //         }
        //         // console.log('hay');

        //     });
        // })
    
        // remove current active item
        function removeActiveItem(){
            galleryLists.forEach(galleryList =>{
                galleryList.classList.remove('activeitems');
            });
        }

        galleryLists.forEach((gallerylist) => {
            console.log(gallerylist);
        
            gallerylist.addEventListener('click', (e) => {
        
                let datafilter = gallerylist.getAttribute('data-filter');
                console.log(datafilter);
        
                removeActiveItem();
                e.target.classList.add('activeitems');
                switch (datafilter) {
                    case 'all':
                        filternews.forEach(filternew => {
                            filternew.style.display = "inline-block";
                        })
                        filterfrees.forEach(filterfree => {
                            filterfree.style.display = "inline-block";
                        })
                        filterpros.forEach(filterpro => {
                            filterpro.style.display = "inline-block";
                        });
                        break;
                    case 'new':
        
                        filternews.forEach(filternew => {
                            filternew.style.display = "inline-block";
                        });
                        filterfrees.forEach(filterfree => {
                            filterfree.style.display = "none";
                        });
                        filterpros.forEach(filterpro => {
                            filterpro.style.display = "none";
                        });
                        break;
                    case 'free':
                        filternews.forEach(filternew => {
                            filternew.style.display = "none";
                        });
        
                        filterfrees.forEach(filterfree => {
                            filterfree.style.display = "inline-block";
                        });
        
                        filterpros.forEach(filterpro => {
                            filterpro.style.display = "none";
                        });
                        break;
                    case 'pro':
                        filternews.forEach(filternew => {
                            filternew.style.display = "none";
                        });
        
                        filterfrees.forEach(filterfree => {
                            filterfree.style.display = "none";
                        });
        
                        filterpros.forEach(filterpro => {
                            filterpro.style.display = "inline-block";
                        });
        
        
                        break;
                }
            })
        });

            
    //End Gallery Section