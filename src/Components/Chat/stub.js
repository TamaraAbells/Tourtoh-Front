export const chatAttributes = {
    showChatbox: false,
    showIcon: true,
    messages: [
      {
        text: 'user2 has joined the conversation',
        timestamp: 1578366389250,
        type: 'notification',
      },
      {
        author: {
          username: 'Travel_girl_AO',
          id: 1,
          avatarUrl: 'http://localhost:3000/static/media/user.4f0938ab.png',
        },
        text: 'Hi',
        type: 'text',
        timestamp: 1578366393250,
      },
      {
        author: { username: 'user2', id: 2, avatarUrl: null },
        text: 'Show two buttons',
        type: 'text',
        timestamp: 1578366425250,
        buttons: [
          {
            type: 'URL',
            title: 'Yahoo',
            payload: 'http://www.yahoo.com',
          },
          {
            type: 'URL',
            title: 'Example',
            payload: 'http://www.example.com',
          },
        ],
      },
      {
        author: {
          username: 'Travel_girl_AO',
          id: 1,
          avatarUrl: 'http://localhost:3000/static/media/user.4f0938ab.png',
        },
        text: "What's up?",
        type: 'text',
        timestamp: 1578366425250,
        hasError: true,
      },
    ],
  }