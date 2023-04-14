const lang = document.querySelector('.languageSection');
const buttons = document.querySelectorAll('a');
const textTitle = document.querySelector('.title');
const textDesc = document.querySelector('.description');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        lang.querySelector('.active').classList.remove('active');
        button.classList.add('active');

        const attr = button.getAttribute('language');
        textTitle.textContent = data[attr].title;
        textDesc.textContent = data[attr].description;
    });
});

const data = {
    "wolof":
    {
        "title": "Salam Aleykum! Dale lene akk diam si Octobre Cyber by #rootsn ",
        "description": "Octobre Cyber by #rootsn est une activité que nous organisons durant tout le mois de la cybersécurité. C' est une occasion pour nous d'intensifier les messages de sensibilisation que nous faisons passer tous les jours de l'année. Cette année, tout au long du mois d'octobre, nous ferons en sorte que les acteurs engagés dans le Cyber mois vous apportent des clés de lecture pour comprendre les enjeux de la sécurité du numérique et vous permettre d'agir à votre tour pour sécuriser efficacement votre vie numérique personnelle, comme professionnelle. De nombreuses campagnes d'information seront organisées au sein des ministères, des entreprises, des particuliers et de la population pour toucher le maximum de personne possible."

    },

    "french":
    {
        "title": "Bonjour! Bienvenue sur Octobre Cyber by #rootsn ",
        "description": "Octobre Cyber by #rootsn est une activité que nous organisons durant tout le mois de la cybersécurité. C' est une occasion pour nous d'intensifier les messages de sensibilisation que nous faisons passer tous les jours de l'année. Cette année, tout au long du mois d'octobre, nous ferons en sorte que les acteurs engagés dans le Cyber mois vous apportent des clés de lecture pour comprendre les enjeux de la sécurité du numérique et vous permettre d'agir à votre tour pour sécuriser efficacement votre vie numérique personnelle, comme professionnelle. De nombreuses campagnes d'information seront organisées au sein des ministères, des entreprises, des particuliers et de la population pour toucher le maximum de personne possible."

    },
    "english":
    {
        "title": "Hi! Welcome to Octobre Cyber by #rootsn ",
        "description": "October Cyber ​​by #rootsn is an activity that we organize during the whole month of cybersecurity. This is an opportunity for us to intensify the awareness messages that we send out every day of the year. This year, throughout the month of October, we will ensure that the actors involved in Cyber ​​month provide you with reading keys to understand the challenges of digital security and allow you to act in turn to secure efficiently your personal and professional digital life. Numerous information campaigns will be organized within ministries, businesses, individuals and the population to reach as many people as possible."
    }
}