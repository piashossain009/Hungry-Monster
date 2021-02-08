const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getMealItem);

function getMealItem() {
    let inputBox = document.getElementById('input-box').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputBox} `;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            // const mealsItem = data.meals;
            const mealListDiv = document.getElementById('meal-list');
            if (data.meals) {

                // for (let i = 0; i < data.meals.length; i++) {
                //     const mealsItem = data.meals[i];
                data.meals.forEach(mealsItem => {


                    const singleMealItem = document.createElement('div');
                    singleMealItem.className = 'single-meal m-3 p-2 card text-center rounded';
                    const mealsItemList = `
            <img onclick="displayDetails('${mealsItem.strMeal}')"src="${mealsItem.strMealThumb}"> <br>
            <h3>${mealsItem.strMeal}</h3>
            `
                    singleMealItem.innerHTML = mealsItemList;
                    mealListDiv.appendChild(singleMealItem);


                });
            } else {
                // console.log('not found');
                const notFoundMeal = `
        <h4>Your search item meals not found try again. </h4>
        `
                mealListDiv.innerHTML = notFoundMeal;

            }
            //console.log(mealsItem);

        })
}
const displayDetails = (mname) => {
    console.log(mname);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mname}`)
        .then(res => res.json())
        .then(data => {
            const mealsDetailsDiv = document.getElementById('meals-details');
            data.meals.forEach(mealsItemDetails => {

                const mealsItemListDetails = `
            <img src="${mealsItemDetails.strMealThumb}"> <br>
            <h2>${mealsItemDetails.strMeal}</h2>
            <h4> Ingredients </h4>
            <li>${mealsItemDetails.strIngredient1}</li>
            <li>${mealsItemDetails.strIngredient2}</li>
            <li>${mealsItemDetails.strIngredient3}</li>
            <li>${mealsItemDetails.strIngredient4}</li>
            <li>${mealsItemDetails.strIngredient5}</li>
            <li>${mealsItemDetails.strIngredient6}</li>
            `

                mealsDetailsDiv.innerHTML = mealsItemListDetails;


            });
            // console.log(data.meals);
        })
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