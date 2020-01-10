class TypeWriter {
  constructor(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.wait = parseInt(wait);
    this.txt ='';
    this.wordIndex = 0;
    this.isDeleting = false;
  }

  type(){

    let typeSpeed = 500;
    
    const currentIndex = this.wordIndex % this.words.length;

    const fullTxt = this.words[currentIndex];

    if(this.isDeleting){
      this.txt = fullTxt.substring(0, this.txt.length -1);

      typeSpeed /= 2

    }else{
      this.txt = fullTxt.substring(0, this.txt.length +1);

    }

    if(this.txt === fullTxt && this.isDeleting === false){
      typeSpeed = this.wait;
      this.isDeleting = true;
    }else if(this.txt === '' && this.isDeleting === true){
      this.isDeleting = false;
      typeSpeed = 500;
      this.wordIndex++;
      
    }

    this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`

    setTimeout(()=> this.type(), typeSpeed)

  }
}


document.addEventListener('DOMContentLoaded', init);

function init(){
  const txtElement = document.querySelector('.txt-type');

  const words = JSON.parse(txtElement.getAttribute('data-words'));

  const wait = txtElement.getAttribute('data-wait');

  const type = new TypeWriter(txtElement, words, wait);

  type.type();


}