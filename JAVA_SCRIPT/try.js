let fruits =[1 , 34  , 56, 90 , 100]

fruits.forEach((curr , indx,fruits)=>{
    console.log(curr);
    console.log(fruits[indx]);
});

const b = fruits.map(curr => curr * 2);
