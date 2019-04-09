import { Calculador } from './calculador';
/*
describe('Calculador', () => {
  it('should create an instance', () => {
    expect(new Calculador()).toBeTruthy();
  });
});
*/
describe ('Test for Calculador', ()=>{

  let calculador;
 
  beforeEach(()=>{
    calculador= new Calculador();
  });
  

  fdescribe('Test for multiply',()=>{
      
     it ("should return nine",()=>{
       //Arrange
      
       //Act 
       let result= calculador.multiply(3,3);
       //Assert
       expect(result).toEqual(9);
     });

     it ("should return four",()=>{
      //Arrange
     
      //Act 
      let result= calculador.multiply(1,4);
      //Assert
      expect(result).toEqual(4);
    });
  });

  describe('Test for Divide',()=>{
      
    it ("should return nine",()=>{
      //Arrange
     
      //Act 
      let result= calculador.divide(3,3);
      //Assert
      expect(result).toEqual(1);
    });

    it ("should return four",()=>{
     //Arrange
    
     //Act 
     let result= calculador.divide(4,0);
     //Assert
     expect(result).toEqual(null);
   });

   it ("let of matchers",()=>{
    let name= 'nicolas'
    let name2;
    expect (name).toBeDefined();
    expect(name2).toBeUndefined();

    expect(1+2==3).toBeTruthy();
    expect(1+1==3).toBeFalsy();

    expect(5).toBeLessThan(10);
    expect(20).toBeGreaterThan(10);

    expect('1234567').toMatch(/123/);
    expect(['apples','oranges','pears']).toContain("oranges");



  });
 });
});
