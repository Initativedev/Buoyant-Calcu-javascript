const Gravity = 9.8;
const fluidDenisity = 1000; 


function CalaculatorBuoyantForce(volume) {
    const buoyantForce = volume * Gravity * fluidDenisity;
    return buoyantForce;
}


const objectVolume = 0.5;
const buoyantForce = CalaculatorBuoyantForce(objectVolume);
console.log("buoyantForce :", buoyantForce.toFixed(2) ,'N')