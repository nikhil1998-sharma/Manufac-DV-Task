import myData from "./Wine-Data.json";

function segregateClassData() {
  let class1 = [],
    class2 = [],
    class3 = [];
  for (let i = 0; i < myData.length; i++) {
    switch (myData[i].Alcohol) {
      case 1:
        class1.push(myData[i].Flavanoids);
        break;
      case 2:
        class2.push(myData[i].Flavanoids);
        break;
      case 3:
        class3.push(myData[i].Flavanoids);
        break;
    }
  }

  return { class1, class2, class3 };
}

function segregateGammaClassData() {
  let class1Gamma = [],
    class2Gamma = [],
    class3Gamma = [];
  for (let i = 0; i < myData.length; i++) {
    switch (myData[i].Alcohol) {
      case 1:
        let gamma1 = (myData[i].Ash * myData[i].Hue) / myData[i].Magnesium;
        class1Gamma.push(gamma1);
        break;
      case 2:
        let gamma2 = (myData[i].Ash * myData[i].Hue) / myData[i].Magnesium;
        class2Gamma.push(gamma2);
        break;
      case 3:
        let gamma3 = (myData[i].Ash * myData[i].Hue) / myData[i].Magnesium;
        class3Gamma.push(gamma3);
        break;
    }
  }

  return { class1Gamma, class2Gamma, class3Gamma };
}

export { segregateClassData, segregateGammaClassData };
