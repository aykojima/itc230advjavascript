'use strict'

var movies=[
{title: "the fate of the furious",director:"gary",reldate:2017},
{title: "the godfather",director:"francis",reldate:1972},
{title: "the dark knight",director:"christopher",reldate:2008},
{title: "forrest gump",director:"robert",reldate:1994},
{title: "the matrix",director:"lana",reldate:1999}
          ];

exports.getAll=()=>{   
    return movies;
    };   

exports.get=(title)=>{   
    return movies.find((item)=>{
        return item.title==title;
    });   
}

exports.delete=(title)=>{
    let oldLength=movies.length;
    var newMovie=movies.filter((item)=>{
        return item.title!==title;     
    })    
    movies=newMovie;
    return {deleted:movies.length!==oldLength, totalremain:movies.length};
}

exports.add=(newObject)=>{  
    var added=false;
    
    var found=this.get(newObject.title);
    if(!found){
    movies.push(newObject);
    added=true;
    }
    //console.log({added:added,totalremain:movies.length});
   return {added:added,totalremain:movies.length};
}

//this.add({title:"test",director:"han",reldate:1});