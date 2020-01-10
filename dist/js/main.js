function TypeWriter(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;

}




document.addEventListener('DOMContentLoaded', init);


function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

 
  new TypeWriter(txtElement, words, wait);
 

};


TypeWriter.prototype.type = function () {
 
  let typeSpeed = 300;

  
  const currIndex = this.wordIndex % this.words.length;

  
  const fullTxt = this.words[currIndex];


  if (this.isDeleting) {
    
    this.txt = fullTxt.substring(0, this.txt.length - 1);

    
    typeSpeed /= 2;

  } else {
    
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

 
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;




  

  if (this.txt === fullTxt && this.isDeleting === false) {
    
    typeSpeed = this.wait;

   
    this.isDeleting = true

   

  }else if (this.txt === '' && this.isDeleting === true){
    this.isDeleting = false;
    
    this.wordIndex ++;

    
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed)

}

