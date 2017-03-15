
// Here we define the user editable parameters: 
function getParameterDefinitions() {
  return [
    { name: 'baseWidth', caption: 'Base Width:', type: 'float', initial: 45.0 }
    // { name: 'size', caption: 'Radius:', type: 'int', initial: 88.945 },
    // { name: 'Xcenter', caption: 'X center:', type: 'float', initial: 0.0 },
    // { name: 'Ycenter', caption: 'Y center:', type: 'float', initial: 0.0 },
    // { name: 'height', caption: 'Height:', type: 'float', initial: 6.3 },
    // { name: 'motorWidth', caption: 'Motor Width:', type: 'float', initial: 37.64 },
    // { name: 'motorDepth', caption: 'Motor Depth:', type: 'float', initial: 57.94 }
  ];
}


var base = function(width){
    return union([
        cube({size: [45,width,3]})
    ]);
};

var platform = function(width){
    return union([
        cube({size: [10,width,3]})
            .rotateY(-90)
            .translate([30,0,3])
    ]);
};

var battery = function(width){
    return union([
        cube({size: [30,width,3], round: false})
            .translate([15,0,10]),
        cube({size: [10,width,3], round: false})
            .rotateY(-90)
            .translate([18,0,3+10]),
        cube({size: [30,width,3], round: false})
            .translate([15,0,20]),    
    ]);
}

function main(params){
    return union([
        base(params.baseWidth),
        platform(params.baseWidth),
        battery(params.baseWidth)
    ]);
}
