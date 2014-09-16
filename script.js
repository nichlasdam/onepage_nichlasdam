/* loader først javascript når hele siden er loaded færdig, så alle elementer på siden er klar til at blive vist & redigeret  */
$(document).ready(function() { 
        /* Kalder pluginttet */
			$('#fullpage').fullpage({
                /* Definerer anchor links som bliver vist i URL for hver sektion */
                anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'], 
                /* Skifter class="active" til den sektion man nu scroller på. */
                menu: '#menu', 
                /* Fortæller hvad der skal ske når en sektion er loaded */
                afterLoad: function(index, nextIndex){ 
                    /* Laver en if sætning som påvirker alle sektions som ikke er sektion 1/firstPage */
                    if(index !='firstPage') { 
                        /* Gemmer classen menu inden i en variabel med navnet div */
                        var div = $(".menu"); 
                        /* Vælger alle elementer med classen logo, fjerner den og tilføjer classen darklogo */
                        $('.logo').removeClass('logo').addClass('darklogo') 
                        /* Henter variablen div som indeholder classen menu, fjerner den og tilføjer classen darkmenu */
                        div.removeClass('menu').addClass("darkmenu");   
                    } /* Lukker if sætning != firstPage */
                    
                    /* laver en if sætning som fortæller hvad der skal ske hvis man er på sektion 1/firstPage */
                    if(index =='firstPage') { 
                        /* Gemmer classen darkmenu inden i en variabel med navnet div */
                        var div = $(".darkmenu"); 
                        /* Vælger alle elementer med classen darklogo, fjerner den og tilføjer classen logo */
                        $('.darklogo').removeClass('darklogo').addClass('logo') 
                        /* Henter variablen div som indeholder classen darkmenu, fjerner den og tilføjer classen menu */
                        div.removeClass('darkmenu').addClass("menu"); 
                        
                    } /* Lukker if sætning == Firstpage */ 
                } /* Lukker afterLoad */
                
			}); /* Lukker plugin kaldet */
		}); /* Lukker document.ready */