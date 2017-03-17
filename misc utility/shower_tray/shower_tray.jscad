// title: OpenJSCAD.org Logo
// author: Rene K. Mueller 
// license: Creative Commons CC BY
// URL: http://openjscad.org/#examples/logo.jscad
// revision: 0.003
// tags: Logo,Intersection,Sphere,Cube

var width=4;
var height = 116+12-2;

function bar(len,hi,wid){
    wid = wid||width;
    hi = hi||height;
    return cube({size: [len,wid,hi], center:false});
}

function tray(){
   var lip = 26.7/2+5;
   var mainBar = 49+lip;
   return union([
    //main bar
    bar(mainBar).translate([0,0,0]), 
    //front upper lip
    bar(lip+width).rotateZ(90).translate([0,0,0]),
    //back upper lip
    bar(3*(lip)).rotateZ(90).translate([49+lip,0,0]),
    //front lower lip
    bar(lip+width).rotateZ(90).translate([lip+width,-1*(lip),0]),
    //back front lip
    bar(lip+width).rotateZ(90).translate([mainBar,-1*(lip),0])
   ]).translate([mainBar/-2,-0.5*(3*lip+width),0]).scale(1); 
}

var holes = function(){
    var radius = 4;
    return cylinder({h:60, r1:radius, r2:radius})
            .setColor([1,0,0.5])
            .rotateX(90)
            .translate([20,0,12]);
};

var holesArray = function(){
    var array = [];
    var cols = 3;
    var rows = 6;
    var sep = 22;
    var rsep = 20;
    
    for(var i=0;i<cols;i++){
        for(var j=0;j<rows;j++){
            array.push(holes().translate([-1*i*sep,0,j*rsep]));
        }
    }
    
    
    
    return union(array);
}

function main() {
   return difference(tray(),holesArray());
}
