const express = require('express');
const server = express();

//permite receber requisições ou resposta no formato JSON
server.use(express.json());

const projects = [];

/**
 * Middleware Global para contagem de requisições
 */
server.use((req, res, next) => {
  console.count('Número de requisições')
  next();
});

/**
 * Middeware Local que checa se os dados enviados estão no padrão
 */
function checkProjectData(req, res, next) {
  if (!req.body.id || !req.body.title)
    return res.status(400).json({ error: 'Incorrect data.' });

  return next();
}

/**
 * Middeware Local que checa se id existe
 */
function checkProjectIdExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: `Project ID [${id}] not found.`})
  }

  return next();
}

/**
 * Retorna todos os dados
 */
server.get('/projects', (req, res) => {
  return res.json(projects);
});

/**
 * Request body: id, title
 * Cadastra um novo projeto
 */
server.post('/projects', checkProjectData, (req, res) => {
  const { id, title } = req.body;
  const project = projects.find(p => p.id = id);
  
  if (project)
    return res.status(400).json({ error: `Project id [${id}] exists.`});
  
  const item = {
    id,
    title,
    task: []
  };
  projects.push(item);
  
  return res.json(projects);
});

/**
 * Route param: id
 * Request body: title
 * Altera o titulo do projeto
 */
server.put('/projects/:id', checkProjectIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  
  const project = projects.find(p => p.id = id);
  project.title = title;

  return res.json(project);
});

/**
 * Route param: id
 * Excluí o projeto
 */
server.delete('/projects/:id', checkProjectIdExists, (req, res) => {
  const { id } = req.params;

  const index = projects.findIndex(p => p.id = id);
  projects.splice(index, 1);

  return res.send();
});

/**
 * Route param: id
 * Request body: title
 * Insere uma nova tarefa no projeto
 */
server.post('/projects/:id/tasks', checkProjectIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id = id);
  project.task.push(title);

  return res.json(project);
});

server.listen(3000);