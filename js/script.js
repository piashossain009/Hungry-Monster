
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click',getMealItem);

function getMealItem(){
    let inputBox = document.getElementById('input-box').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputBox} `;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        // const mealsItem = data.meals;
        const mealListDiv = document.getElementById('meal-list');
        if(data.meals){
        
        // for (let i = 0; i < data.meals.length; i++) {
        //     const mealsItem = data.meals[i];
            data.meals.forEach(mealsItem => {
                
           
            const singleMealItem = document.createElement('div');
            singleMealItem.className = 'single-meal m-3 p-2 card text-center rounded';
            const mealsItemList = `
            <img onclick="displayDetails('event')"src="${mealsItem.strMealThumb}"> <br>
            <h3>${mealsItem.strMeal}</h3>
            `
            singleMealItem.innerHTML = mealsItemList;
            mealListDiv.appendChild(singleMealItem) ;          

            
        });
    }
    else{
        // console.log('not found');
        const notFoundMeal = `
        <h4>Your search item meals not found try again. </h4>
        `
        mealListDiv.innerHTML = notFoundMeal;

    }
        // console.log(mealsItem);
   
    })
}
function displayDetails(event){
    const hhhh =target.event.h4;
    console.log(hhhh);

}

/*if(data.meals){
    const mealsList = document.getElementById('meal-list');
 //    mealsList.innerHTML = '';
    data.meals.forEach(meal => {
        const mealsListItem = document.createElement('div');
        mealsListItem.setAttribute('class','meal-item')
        mealsListItem.innerHTML = `<img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>`
    });
 
}
else{
 console.log('not found');
}*/