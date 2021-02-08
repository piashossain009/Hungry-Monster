const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getMealItem);
// const mealsDetailsDiv = document.getElementById('meals-details');
//             mealsDetailsDiv.style.display='none';


function getMealItem() {
    const mealsDetailsDiv = document.getElementById('meals-details');
            mealsDetailsDiv.style.display='none';
    let inputBox = document.getElementById('input-box').value;
    if ( inputBox == ''){
        alert('Please type meals Name.');
    }
    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputBox} `;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            // const mealsItem = data.meals;
            const mealListDiv = document.getElementById('meal-list');
            mealListDiv.innerHTML = '';
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
        <h4> Your search item meals not found try again. </h4>
        `
                mealListDiv.innerHTML = notFoundMeal;

            }
            //console.log(mealsItem);

        })

    }
    
        // .catch(error => window.alert('test'))
}


const displayDetails = (mname) => {

    // console.log(mname);
    const mealsDetailsDiv = document.getElementById('meals-details');
            mealsDetailsDiv.innerHTML='';
            mealsDetailsDiv.style.display='block';
   
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mname}`)
        .then(res => res.json())
        .then(data => {

            
            data.meals.forEach(mealsItemDetails => {

                const mealsItemListDetails = `
            <img src="${mealsItemDetails.strMealThumb}"> <br>
            <h2>${mealsItemDetails.strMeal}</h2>
            <h4> Ingredients </h4>
            <li>${mealsItemDetails.strMeasure1} ${mealsItemDetails.strIngredient1}</li>
            <li>${mealsItemDetails.strMeasure2} ${mealsItemDetails.strIngredient2}</li>
            <li>${mealsItemDetails.strMeasure3} ${mealsItemDetails.strIngredient3}</li>
            <li>${mealsItemDetails.strMeasure4} ${mealsItemDetails.strIngredient4}</li>
            <li>${mealsItemDetails.strMeasure5} ${mealsItemDetails.strIngredient5}</li>
            <li>${mealsItemDetails.strMeasure6} ${mealsItemDetails.strIngredient6}</li>
            <li>${mealsItemDetails.strMeasure7} ${mealsItemDetails.strIngredient7}</li>
            <li>${mealsItemDetails.strMeasure8} ${mealsItemDetails.strIngredient8}</li>
            <li>${mealsItemDetails.strMeasure9} ${mealsItemDetails.strIngredient9}</li>
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