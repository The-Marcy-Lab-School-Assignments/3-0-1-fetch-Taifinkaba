export const setupPageBasics = (parentEl) => {
    parentEl.innerHTML = `
      <h1>Intro To Fetch!</h1>
      <div id='status'></div>
      <div id='users'>
        <h2>Users</h2>
        <ul id='users-list'></ul>
      </div>
      <div id='posts'>
        <h2>Posts</h2>
        <ul id='posts-list'></ul>
      </div>
      <form id='new-user-form' aria-labelledby='new-user-heading'>
        <h2 id='new-user-heading'>Create A New Blog User!</h2>
        <label for='username'>Username:</label>
        <input type='text' id='username' name='username' />
        <label for='email'>Email:</label>
        <input type='email' id='email' name='email' />
        <button>Submit</button>
      </form>
      <div id='new-user'></div>
    `;

    const statusDiv = parentEl.querySelector('#status');
    const usersUl = parentEl.querySelector('#users-list');
    const postsUl = parentEl.querySelector('#posts-list');
    const newUserForm = parentEl.querySelector('#new-user-form');
    const newUserDiv = parentEl.querySelector('#new-user');

    return { statusDiv, usersUl, postsUl, newUserForm, newUserDiv };
};

export const renderStatus = (statusDiv, statusInfoObj) => {
  const heading = document.createElement('h2');
  const paragraph = document.createElement('p');

  heading.id = 'status-heading';
  paragraph.id = 'status-code';

  heading.textContent = `Info on - ${statusInfoObj.url}`;
  paragraph.textContent = `Status code: ${statusInfoObj.status}, ${statusInfoObj.ok ? 'OK!' : 'FAIL!'}`;

  statusDiv.innerHTML = '';

  statusDiv.appendChild(heading);
  statusDiv.appendChild(paragraph);
}

export const renderUsers = (usersUl, users) => {
  usersUl.innerHTML = '';

  users.forEach(user => {
    const li = document.createElement('li');
    li.className = 'user-card';

    const button = document.createElement('button');
    button.textContent = `Load ${user.username}'s posts`;
    button.dataset.userId = user.id;

    li.appendChild(button);
    usersUl.appendChild(li);
  });
};

export const renderPosts = () => {
}

export const renderNewUser = () => {
}