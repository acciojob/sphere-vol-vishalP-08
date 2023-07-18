function volume_sphere(radius) {
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);
  console.log(volume);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
