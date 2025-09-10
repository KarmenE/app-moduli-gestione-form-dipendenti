// Default user 
const defaultUser = [
    { nome: 1, 
        nome: 'Raffaele', 
        cognome: 'aquila', 
        matricola: 'abc123' 
    },
    { nome: 2, 
        nome: 'Carmen', 
        cognome: 'elena', 
        matricola: '123abc' 
    } 
];

function insertDefaultUsers() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(defaultUser));
    }
}


// prende utente
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

// salva utente
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// genera id
function generateId() {
    const users = getUsers();
    return users.length > 0 ? Math.max(...users.map(user => user.nome)) + 1 : 1;
}

// crea utente
function createUser(nome, cognome, matricola) {
    const users = getUsers();
    const newUser = { nome: generateId(), nome, cognome, matricola };
    users.push(newUser);
    saveUsers(users);
    return newUser;
}

// prendi utente tramite id
function readUser(nome) {
    const users = getUsers();
    return users.find(user => user.nome === nome);
}

// aggiorna utente
function updateUser(nome, updatedData) {
    const users = getUsers();
    const index = users.findIndex(user => user.nome === nome);
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedData };
        saveUsers(users);
        return users[index];
    }
    return null;
}

// cancella utente tramite id
function deleteUserFromStorage(nome) {
    const users = getUsers();
    const index = users.findIndex(user => user.nome === nome);
    if (index !== -1) {
        users.splice(index, 1);
        saveUsers(users);
        return true;
    }
    return false;
}
// lista utenti
function listUsers() {
    return getUsers();
}
