let cadena =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctiolorem rerum non, in quibusdamlorem mollitia aperiam voluptatum. Ipsum, suscipit aperiam incidunt dolore velit totam facere unde vitae, esse porro eaque illum maxime! Illo consectetur quaerat suscipit, totam aspernatur magni earum quod!";

let expReg = new RegExp("lorem", "ig");
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

let expReg2 = /lorem{1,3}/ig;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
