// Data voor het schema
const scheduleItems = [
    {
        time: "09:00",
        emoji: "⏰",
        title: "Opstaan",
        description: "Drink 300 ml lauwwarm water."
    },
    {
        time: "09:05 - 09:35",
        emoji: "🌞",
        title: "Zonlicht Blootstelling",
        description: "30 minuten in direct zonlicht op uw blote huid."
    },
    {
        time: "09:35 - 09:50",
        emoji: "🦶",
        title: "Aarden",
        description: "15 minuten blootsvoets lopen op gras."
    },
    {
        time: "09:50 - 10:10",
        emoji: "🧘",
        title: "Yoga en Stretching",
        description: "20 minuten yoga- en stretchoefeningen."
    },
    {
        time: "10:15",
        emoji: "💧",
        title: "Hydratatie",
        description: "Drink 250 ml water of kruidenthee."
    },
    {
        time: "12:00",
        emoji: "🍽️",
        title: "Hoofdmaaltijd",
        description: `- Gegrilde rundersteak: 250 gram<br>
                      - Gebakken eieren: 3 stuks<br>
                      - Plakjes kaas: 50 gram<br>
                      - Gestoomde groenten: 200 gram<br>
                      - Rauwe honing: 1 eetlepel (20 gram)`
    },
    {
        time: "12:30",
        emoji: "💧",
        title: "Hydratatie",
        description: "Drink 500 ml water."
    },
    {
        time: "15:00 - 16:00",
        emoji: "🏋️‍♂️",
        title: "Krachttraining",
        description: "60 minuten krachttraining voor alle belangrijke spiergroepen."
    },
    {
        time: "16:05",
        emoji: "💧",
        title: "Hydratatie",
        description: "Drink 500 ml water."
    },
    {
        time: "17:00",
        emoji: "🦶",
        title: "Aarden",
        description: "15 minuten blootsvoets lopen op gras."
    },
    {
        time: "18:00",
        emoji: "🍽️",
        title: "Kleine Maaltijd",
        description: `- Omelet met kaas: 2 eieren en 30 gram kaas<br>
                      - Gemengde salade: 150 gram met 30 gram noten<br>
                      - Runderbouillonsoep: 250 ml`
    },
    {
        time: "18:30",
        emoji: "☕",
        title: "Hydratatie",
        description: "Drink 250 ml kruidenthee."
    },
    {
        time: "19:00 - 19:30",
        emoji: "📖",
        title: "Ontspanning",
        description: "Meditatie, lezen of lichte activiteiten zonder schermen."
    },
    {
        time: "22:00",
        emoji: "🌙",
        title: "Slaapvoorbereiding",
        description: "Ga naar bed voor een herstelbevorderende nachtrust."
    }
];

// Functie om schema-items te laden
function loadSchedule() {
    const scheduleContainer = document.getElementById('schedule');

    scheduleItems.forEach((item, index) => {
        // Hoofd container
        const scheduleItem = document.createElement('div');
        scheduleItem.classList.add('schedule-item');

        // Checkbox
        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('checkbox');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `item${index}`;
        checkbox.checked = localStorage.getItem(`item${index}`) === 'true';

        // Event Listener voor checkbox
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                scheduleItem.classList.add('completed');
            } else {
                scheduleItem.classList.remove('completed');
            }
            localStorage.setItem(`item${index}`, this.checked);
        });

        if (checkbox.checked) {
            scheduleItem.classList.add('completed');
        }

        checkboxContainer.appendChild(checkbox);

        // Tijd en details
        const time = document.createElement('div');
        time.classList.add('time');
        time.innerHTML = item.time;

        const details = document.createElement('div');
        details.classList.add('details');
        details.innerHTML = `<span>${item.emoji} <strong>${item.title}</strong></span><p>${item.description}</p>`;

        // Samenvoegen
        scheduleItem.appendChild(checkboxContainer);
        scheduleItem.appendChild(time);
        scheduleItem.appendChild(details);

        // Toevoegen aan container
        scheduleContainer.appendChild(scheduleItem);
    });
}

// Initialiseren bij laden van de pagina
document.addEventListener('DOMContentLoaded', loadSchedule);
