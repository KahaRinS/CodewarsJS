function recycle(array) {
    const materials=['paper', 'glass', 'organic', 'plastic'];
    return materials.map(item =>  array.filter(trash => (trash.material == item|| trash.secondMaterial== item)).map(trash => trash.type));
}

let a = [
    {type: 'rotten apples', material: 'organic'},
    {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
    {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
    {type: 'amazon box', material: 'paper'},
    {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
];

console.log(recycle(a))
