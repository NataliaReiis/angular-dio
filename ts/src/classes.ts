// Classes

class Character {
    private name: string;
    stregth: number;
    skill: number;
  
    constructor(name: string, stregth: number, skill: number){
      this.name = name;
      this.stregth = stregth;
      this.skill = skill
    }
  
    attack(): void {
      console.log(`Attack with ${this.stregth} points`);
    }
  }
  
  class Magic extends Character{
      magicPoints: number
      constructor(name: string, stregth: number, skill: number, magicPoints: number){
          super(name, stregth, skill);
          this.magicPoints = magicPoints;
          
      }
  }
  
  const p1 = new Character('pipiu',10 , 98);
  const p2 = new Magic("Nat", 1, 4, 78)
  p1.attack();