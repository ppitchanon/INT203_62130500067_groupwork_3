const app = {
    data() {
        return {
            tasks: [{title: 'Phuket ,Thailand',url:'images/natural1.jpg',done: false},
                    {title: 'Venice ,Italy',url:'images/natural2.jpg', done: false},
                    {title: 'Helsinki ,Finland',url:'images/natural3.jpg', done: false}
                ] ,
        }
    },
    methods: {
        toggleDone(index) {
          this.tasks[index].done = !this.tasks[index].done;
        },
      },
      computed: {
        countUndone() {
          return this.tasks.filter((t) => t.done).length;
        },
      },
    };
    Vue.createApp(app).mount("#app");

