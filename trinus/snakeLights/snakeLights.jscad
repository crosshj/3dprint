
// Here we define the user editable parameters: 
function getParameterDefinitions() {
  return [
    { name: 'baseWidth', caption: 'Base Width:', type: 'float', initial: 55.15 },
    { name: 'baseHeight', caption: 'Base Height:', type: 'float', initial: 51 }
    // { name: 'size', caption: 'Radius:', type: 'int', initial: 88.945 },
    // { name: 'Xcenter', caption: 'X center:', type: 'float', initial: 0.0 },
    // { name: 'Ycenter', caption: 'Y center:', type: 'float', initial: 0.0 },
    // { name: 'height', caption: 'Height:', type: 'float', initial: 6.3 },
    // { name: 'motorWidth', caption: 'Motor Width:', type: 'float', initial: 37.64 },
    // { name: 'motorDepth', caption: 'Motor Depth:', type: 'float', initial: 57.94 }
  ];
}


var base = function(width, height){
    return union([
        difference([
            cube({size: [45,width,3]}),
            // left chamfer
            cube({size: [4.75,4.75,10], center: true}).rotateZ(45),
            //right chamfer
            cube({size: [4.75,4.75,10], center: true}).rotateZ(45).translate([0,width,0]),
            //left screw
            cylinder({r: 1.3, h: 10, center: true}).translate([3.35,3.35+1.3,0]),
            //right screw
            cylinder({r: 1.3, h: 10, center: true}).translate([3.35,width-3.35-1.3,0]),
            //center screw
            cylinder({r: 1.3, h: 10, center: true}).translate([3.35,width/2,0])
        ])
    ]);
};

var platform = function(width, height){
    return difference([
        cube({size: [9+3,width,19]})
            .rotateY(-90)
            .translate([45,0,0]),
        // trim rail
        cube({size: [6,width,5]})
            .rotateY(-87)
            .translate([45,0,11.75]),
        // lights hole
        cube({size: [7.6,8.8,19]}) 
            .rotateY(-90)
            .translate([45,8.8/-2+width/2,3]),
        // lights hole
        cube({size: [10,0.5,19]}) 
            .rotateY(-90)
            .translate([45,0.5/-2+width/2,3])
    ]);
};

var battery = function(width, height){
    return union([
        cube({size: [34.1+3,width,3], round: false}).translate([10,0,12]),
        cube({size: [10,width,3], round: false})
            .rotateY(-90)
            .translate([18,0,3+10]),
        cube({size: [30,width,3], round: false})
            .translate([15,0,20]),    
    ]);
}

function main(params){
    return union([
        base(params.baseWidth, params.baseHeight),
        platform(params.baseWidth, params.baseHeight).setColor(1,0,0),
        //battery(params.baseWidth, params.baseHeight).setColor(0,1,0)
    ]).translate([params.baseHeight/-2, params.baseWidth/-2, 0]);
}
