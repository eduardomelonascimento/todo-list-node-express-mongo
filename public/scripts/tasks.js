const setTagAsDone = async (element, taskId) => {
    event.preventDefault();
    try {
        let headers = new Headers({ 'content-type': 'application/json' });
        let body = JSON.stringify({ task: { done: element.checked } });
        let response = await fetch(`/tasks/${taskId}?_method=put`, { headers: headers, body: body, method: 'PUT' });
        let data = await response.json();
        let { task } = data;
        let parent = element.parentNode;

        if (task.done) {
            element.checked = true;
            parent.classList.add('has-text-success');
            parent.classList.add('is-italic');
        } else {
            element.checked = false;
            parent.classList.remove('has-text-success');
            parent.classList.remove('is-italic');
        }
    } catch (error) {
        alert('Erro ao atualizar tarefa, tente novamente.');
        console.log(error);
        console.log(error.errors);
    }
}

