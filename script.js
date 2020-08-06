/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/


class nameElement // Parent class for name and year
{
    constructor (name,yearBuilt)
    {
        this.name = name;
        this.yearBuilt = yearBuilt;
    }
}

class park extends nameElement{   // class for parks
    constructor(name,yearBuilt,numTrees,area)
    {
      super(name,yearBuilt);
        this.numTrees = numTrees;
        this.area = area;
    }

    calculateDensity()
    {
        var density = (this.numTrees/this.area).toFixed(2);
        
        console.log(`Tree density of ${this.name} is ${density}`);
    }

    calculateParkAge()
    {
var age = new Date().getFullYear() - this.yearBuilt;
//console.log(age);
return age;
    }

    


    }


class street extends nameElement{    // class for Streets
    constructor(name,yearBuilt,streetLen,size = 3)
    {
        super(name,yearBuilt);
        this.streetLen = streetLen;
        this.size = size;
    }
    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.yearBuilt}, is a ${classification.get(this.size)} street.`);
    }
    
}

const allparks = [new park('Country Lakes',1990,1200,900),
                  new park('Glen Park',2000,800,200),
                 new park('Fairway Commons',2010,500,350)];

const allstreets = [new street('woodewind dr',2001,5.1),
                    new street('leyland dr',2010,3.1,4),
                    new street('Aurora Ave',1984,3.6,2),
                    new street('Genese Dr',1994,6.3,2)
                ]

                function calculateAvr(arrAges)
    {
        var total = 0;
        var average = 0;
       // console.log(arrAges);
for (i=0;i<arrAges.length;i++)
    {
   total = total + arrAges[i];
    }

    average = total/arrAges.length;
    return total;
}

function townParkReport(p)
{
      // Density
      p.forEach(el => el.calculateDensity());
    
      //Average age
      const ages = p.map(el => el.calculateParkAge());
      const totalAge = calculateAvr(ages);
      console.log(`Our ${p.length} parks have an average of ${totalAge} years.`);
      
      // Which park has more than 1000 trees
      const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
      console.log(`${p[i].name} has more than 1000 trees.`);
}
function townStreetReport(s)
{
     //Total and average length of the town's streets
    const totalSt = calculateAvr(s.map(el => el.streetLen));
    console.log(`Our ${s.length} streets have a total length of ${totalSt.toFixed(2)} km, with an average of ${(totalSt/s.length).toFixed(2)} km.`);

     // CLassify sizes
     s.forEach(el => el.classifyStreet());
}

console.log('------ Parks Report---------------------- ');
townParkReport(allparks);
console.log('------ Street Report---------------------- ')
townStreetReport(allstreets);