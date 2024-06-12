const userUrl = 'https://jsonplaceholder.typicode.com/users'

export const checkResponseStatus = () => {
   return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return {
        status: response.status,
        ok:  response.ok,
        url: response.url
        };
    })
};

export const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json())
};

export const getUserPosts = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((resp) => resp.json())
    .then(post => post)
};

export const createNewUser = (newUserData) => {
    const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newUserData)
    }
    return fetch('https://jsonplaceholder.typicode.com/users', options)
    .then((response) => response.json())

}
