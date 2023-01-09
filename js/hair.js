function changeSkinTone(elementContainerLeft,hair) {

    const hairWrap = document.createElement("div");
    hairWrap.className = "skincolorsWrap";
    elementContainerLeft.appendChild(hairWrap);
    
    const skincolorsDiv = document.createElement("div");
    skincolorsDiv.className = "skincolorsDiv";
    skincolorsWrap.appendChild(skincolorsDiv);
  
    const skinToneText = document.createElement("h1");
    skinToneText.textContent = "Skintone";
    skinToneText.className = "TypeHeadline skinToneText";
    skincolorsWrap.appendChild(skinToneText);
  

  
    const hair1 = document.createElement("img");
    hair1.className = "skin-color  ";
    hair1.src = "./images/hairs/hair1.png";
    hair1.addEventListener("click", () => setHairStyle(hair1));
  
    const hair2 = document.createElement("img");
    hair2.className = "skin-color";
    hair2.src = "./images/hairs/hair2.png";
    hair2.addEventListener("click", () => setHairStyle(hair2));
  
    const hair3 = document.createElement("img");
    hair3.className = "skin-color ";
    hair3.src = "./images/hairs/hair3.png";
    hair3.addEventListener("click", () => setHairStyle(hair3));
  
    const hair4 = document.createElement("img");
    hair4.className = "skin-color ";
    hair4.src = "./images/hairs/hair4.png";
    hair4.addEventListener("click", () => setHairStyle(hair4));
  
    const hair5 = document.createElement("img");
    hair5.className = "skin-color ";
    hair5.src = "./images/hairs/hair5.png";
    hair5.addEventListener("click", () => setHairStyle(hair5));
  
    skincolorsDiv.append(
      hair1,
      hair2,
      hair3,
      hair4,
      hair5
    );
    function setHairStyle(clickedElement) {
      if (clickedElement === hair1) {
        hair.src = "./images/Hair/1_1.png";
      }
      if (clickedElement === hair2) {
        hair.src = "./images/Hair/2_1.png";
      }
      if (clickedElement === hair3) {
        hair.src = "./images/Hair/3_1.png";
      }
      if (clickedElement === hair4) {
        hair.src = "./images/Hair/4_1.png";
      }
      if (clickedElement === hair5) {
        hair.src = "./images/hair/5_1.png";
      }
    }
  }