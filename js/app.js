var counter = 0
function plusDivs(x) {
    var images = ["./images/BTTF/5th pic slide.jpg", "./images/BTTF/4th pic slide.png", "./images/BTTF/3rd pic slide.jpg", "./images/BTTF/2nd pic slide.jpg", "./images/BTTF/1st pic slide.jpg"]
    var size = images.length - 1
    counter = counter + x
    if(counter > size){
        counter = 0
    }else if (counter < 0)
      counter = size
    document.querySelector("#sPic").src=images[counter]
}