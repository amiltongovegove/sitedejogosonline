            function clickCategorias() {
			  if (menu.style.display == 'block') {
			     menu.style.display = 'none'
				 } else {
				 menu.style.display = 'block'
			  }
			  }
			  
			function clickSlide() {
			  if (xslide.style.display == 'block') {
			     xslide.style.display = 'none'
				 } else {
				 xslide.style.display = 'block'
			  }
			  } 
		    
			 
            function calc_total() {
                 var qtd = parseInt(document.getElementById('cQtd').value);
                 tot = qtd * 100000;
                 document.getElementById('cTot').value = tot;
             }
			 
			 function alertNotice() {
			     alert("Esse site é uma comunidade, com o objectivo de te manter informado sobre os jogos onlines");
			 }
			 
			 
			 function istDow() {
				 alert("As instalaçoes Só estao disponiveis para dispositivos Mobiles");
			 }