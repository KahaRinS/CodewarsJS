// One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

// One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:

// V = max(R,G,B)
// You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!

function brightest(colors){
    let brighestColor='';
    let maxValue=0;
    for (let i of colors){
        let r =parseInt(i[1] + i[2],16);
        let g =parseInt(i[3] + i[4],16);
        let b =parseInt(i[5] + i[6],16);
        let max = Math.max(r,g,b);
        if (max>maxValue) {
            maxValue=max;
            brighestColor=i;
        }
    }
    return(brighestColor);
}

colors = ["#ABFFEF", "#1234FF"];
console.log(brightest(colors));