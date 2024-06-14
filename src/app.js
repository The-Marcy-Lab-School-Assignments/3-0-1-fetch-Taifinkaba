import {
  renderStatus,
  setupPageBasics,
  renderUsers,
  renderPosts,
  renderNewUser,
} from './render-functions.js';
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers
} from './fetch-functions.js';

export default function app(appDiv) {
  const {  statusDiv, usersUl, postsUl, newUserForm, newUserDiv } = setupPageBasics(appDiv);

  // Render basic page layout on load
  appDiv.appendChild(statusDiv);
  appDiv.appendChild(usersUl);
  appDiv.appendChild(postsUl);
  appDiv.appendChild(newUserForm);
  appDiv.appendChild(newUserDiv);

  // Render status of user API
  checkResponseStatus()
    .then(statusInfo => renderStatus(statusDiv, statusInfo))
    .catch(error => console.error('Error fetching status:', error));

  // Display all 10 user buttons on load
  getUsers()
    .then(users => renderUsers(usersUl, users))
    .catch(error => console.error('Error fetching users:', error));

  // Initialize a variable to track the currently displayed user's posts
  let currentUserId = null;

  // Load posts on user button click (event delegation)
  usersUl.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      const userId = event.target.dataset.userId;
      
      // Only fetch and render posts if the clicked user button is different from the current one
      if (userId !== currentUserId) {
        currentUserId = userId;
        getUserPosts(userId)
          .then(posts => {
            renderPosts(postsUl, posts);
          })
          .catch(error => console.error(`Error fetching posts for user ${userId}:`, error));
      }
    }
  });

  // Create new user
  newUserForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(newUserForm);
    const newUserData = {
      username: formData.get('username'),
      email: formData.get('email')
    };

    createNewUser(newUserData)
      .then(newUser => {
        renderNewUser(newUserDiv, newUser);
        newUserForm.reset();
      })
      .catch(error => console.error('Error creating new user:', error));
  });
}