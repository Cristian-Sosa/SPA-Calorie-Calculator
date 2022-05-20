const totalCalories = document.querySelector('.result h3');
const goals = document.querySelectorAll('.goals li');

var unit, gender, age, height, currentWeight, activity, goalWeight, calories

document.addEventListener('click', (e) => {
    
    if (e.target.id.match('form-btn')) {
        e.preventDefault;

        console.log('Mostrando resultados...');

        takeValues();
        calculateCalories()
        showResults();


    }
});


const showResults = () => {
    totalCalories.textContent = 4000;

    goals.forEach(goal => {
        if (goal.className.match('weight_goal-modified')) {
            goal.textContent = goalWeight;
        } else {
            goal.textContent = 'On 3 months';
        }
     });
};


const takeValues = () => {
    // itera sobre cada input name='units'
    // Devuelve el checked en la variable unit
    for (let i = 0; i < document.getElementsByName('units').length; i++) {
        if (document.getElementsByName('units')[i].checked) {    
            unit = document.getElementsByName('units')[i].id;
            
            // console.log(unit);

            break;
        };

    };

    // itera sobre cada input name='gender'
    // Devuelve el checked en la variable gender
    for (let i = 0; i < document.getElementsByName('gender').length; i++) {
        if (document.getElementsByName('gender')[i].checked) {
            gender = document.getElementsByName('gender')[i].id;
            
            // console.log(gender);

            break;
        };
    };
    
    age = document.querySelector('.age input#age').value;
    height = document.querySelector('.height input#height').value;
    currentWeight = document.querySelector('.current_weight input#currect_weight').value;
    activity = document.querySelector('.activity select#activity').value;
    goalWeight = document.querySelector('.weight_goal input#weight_goal').value;

};


const calculateCalories = () => {
    switch
};

