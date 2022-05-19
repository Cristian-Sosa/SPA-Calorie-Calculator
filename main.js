const totalCalories = document.querySelector('.result h3');

const goals = document.querySelectorAll('.goals li');

// const


document.addEventListener('click', (e) => {
    
    if (e.target.id.match('form-btn')) {
        e.preventDefault;

        console.log('Mostrando resultados...');

        showResults()
    }
});


const showResults = () => {
    totalCalories.textContent = 4000

    goals.forEach(goal => {
        if (goal.className.match('weight_goal-modified')) {
            goal.textContent = `150 kg`
        } else {
            goal.textContent = 'On 3 months'
        }
     });
};