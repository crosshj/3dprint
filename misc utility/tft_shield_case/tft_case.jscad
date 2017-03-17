// title: OpenJSCAD.org Logo
// author: Rene K. Mueller 
// license: Creative Commons CC BY
// URL: http://openjscad.org/#examples/logo.jscad
// revision: 0.003
// tags: Logo,Intersection,Sphere,Cube

var offsetBack = -16.65+9.15;

function main() {
   return difference (
        cube({size: [45,60,7+9.1], center: true})
            .translate([0,-6,-4.45]), //body
        union(
            //view hole
            cube({size: [30.25,36.5,8], center: true})
                .translate([0,-0.1,0]), 
            // chip hole
            cube({size: [34.6,56.5,22], center: true}) 
                .translate([0,1.5,-8.5]),
            // sd card hole
            cube({size: [12.5,10,5], center: true}) 
                .translate([0,-27,-4.4])
        ).translate([0,offsetBack,0])
    );
   
}


/*
union(
      difference(
         cube({size: 3, center: true}),
         sphere({r:1.8, center: true, fn: 85})
      ),
      sphere({r: 1.3, center: true,fn:85})
   ).translate([0,0,1.5]).scale(10);

*/