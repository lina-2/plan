document.getElementById("saveBtn").addEventListener("click", function() {
    // Récupérer les valeurs saisies par l'utilisateur
    var LundiPlat = document.getElementById("LundiPlat").innerText;
    var LundiSalade = document.getElementById("LundiSalade").innerText;
    var LundiDessert = document.getElementById("LundiDessert").innerText;
    // Répétez ces lignes pour les autres jours de la semaine

    // Vous pouvez maintenant faire ce que vous voulez avec les valeurs, par exemple, les enregistrer dans une base de données.
});
document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);

    // Fonction pour ajouter une tâche
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);

            // Réinitialiser le champ de saisie
            taskInput.value = '';
        }
    }

    // Fonction pour créer un élément de tâche
    function createTaskItem(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';

        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.addEventListener('click', function () {
            taskItem.remove();
        });

        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);

        return taskItem;
    }
});
