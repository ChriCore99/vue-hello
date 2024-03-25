const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello World of VUE!',
        img: 'https://i.ytimg.com/vi/qvFG8J7SUDE/maxresdefault.jpg'
      }
    }
  }).mount('#title')