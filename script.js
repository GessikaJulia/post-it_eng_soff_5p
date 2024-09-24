document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // impede o envio padrão do formulário
    const title = document.getElementById('title').value;
    const task_description = document.getElementById('task_description').value;
    const due_date = document.getElementById('due_date').value;

    const task = { title, task_description, due_date }; // cria um objeto com os dados da tarefa

    // faz uma requisição POST para o servidor para salvar a tarefa
    fetch('http://localhost:3080/save_task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task) // converte o objeto em uma string JSON
    })
    .then(response => response.json()) // converte a resposta em JSON
    .then(data => {
        console.log('Success:', data);
        alert(data.message);

        // limpa os campos
        document.getElementById('title').value = '';
        document.getElementById('task_description').value = '';
        document.getElementById('due_date').value = '';
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao salvar a tarefa');
    });
});
