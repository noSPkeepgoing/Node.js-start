// GET
// 1.전체조회
fetch('http://localhost:3000/comments')
  .then((res) => res.json())
  .then((json) => console.log(json));

// 2.id값으로 조회
fetch('http://localhost:3000/comments/2')
  .then((res) => res.json())
  .then((json) => console.log(json));

// 3.query값으로 조회
fetch('http://localhost:3000/comments?postId=2')
  .then((res) => res.json())
  .then((json) => console.log(json));

// POST
fetch('http://localhost:3000/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'new post!',
    author: 'Choi',
  }),
  headers: {
    'content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json())
  .then((json) => console.log(json));

// PUT
fetch('http://localhost:3000/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'old post -> ✨',
    author: 'sunpaa',
  }),
  headers: {
    'content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json())
  .then((json) => console.log(json));

// DELETE
fetch('http://localhost:3000/posts/1', { method: 'DELETE' });
