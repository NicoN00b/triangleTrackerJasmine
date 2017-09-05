var Triangle = require('./../js/triangle.js').triagleModule;

describe('Triangle', function(){
  it('should test whether a Triangle has three sides', function(){  //this is a spec; specs begin with it
    var triangle = new Triangle(3,4,5)
    expect(triangle.side1).toEqual(3)
    expect(triangle.side2).toEqual(4)
    expect(triangle.side3).not.toEqual(6)
  });

  it('should correctly determine whether three lengths can be made into a triangle', function(){
    var notTriangle = new Triangle(3,9,22)
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  it('should correctly identify Equilateral', function(){
    var equilateral = new Triangle(4,4,4)
    expect(equilateral.checkType()).toEqual("it's equilateral");
  });

  it('should correctly identify Isoseles', function(){
    var isoseles = new Triangle(3,3,4)
    expect(isoseles.checkType()).toEqual("it's an Isoseles!");
  });

  it('should correctly identify Scalene', function(){
    var scalene = new Triangle(10,13,15)
    expect(scalene.checkType()).toEqual("it's Scalene Yo!");
  });
});
