const questions = [
    {
        question: 'What is your name?',
        options: ['Suzan', 'Joel', 'Justin', 'Rachael'],
        answer: 'Joel'
    },

    {
        question: 'Where do you come from?',
        options: ['Nsambya', 'Namuwongo', 'Kawempe', 'Gayaza'],
        answer: 'Kawempe'
    },

    {
        question: 'What is your favourite color?',
        options: ['pink', 'red', 'blue', 'black', 'green', 'purple'],
        answer: 'blue'
    },

    {
        question: 'What is your best dish? ',
        options: ['chips and chicken', 'pizza', 'posho and beans', 'rice and meat', 'pilawo'],
        answer: 'posho and beans'
    },

    {
        question: 'What do you do during your free time? ',
        options: ['eating', 'sleeping', 'watching', 'walking', 'reading'],
        answer: 'eating'
    },

    {
        question: 'What new thing would love to learn?',
        options: ['swimming', 'kick boxing', 'maging', 'others'],
        answer: 'kick boxing'
    },
];

let question_number = 0;
let correct = 0;

document.addEventListener('DOMContentLoaded', () => {
    load_question();
});

function load_question() {
    document.querySelector('#question').innerHTML = questions[question_number].question;
    const options = document.querySelector('#options');
    options.innerHTML = '';

    for (const option of questions[question_number].options) {
        options.innerHTML += `<button class="option">${option}</button>`;
    }

    document.querySelectorAll('.option').forEach(option => {
        option.onclick = () => {
            alert('clicked something');
        }
    })

}