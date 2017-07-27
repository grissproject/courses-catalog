import fetch from 'isomorphic-fetch';

// Fake backend URL, there is no backend yet.
const baseUrl = 'http://localhost:3000';

const api = {
  courses: {
    async getList() {
      const response = await fetch(`${baseUrl}/courses`);
      const data = await response.json();
      return data;
    },

    async getSingle(id) {
      const response = await fetch(`${baseUrl}/courses/${id}`);
      const data = await response.json();
      return data;
    },

    update(course) {
      const body = JSON.stringify(course);

      console.log(`Sending '${body}' to backend`);

      fetch(`${baseUrl}/course/${course.id}`, {
        method: 'PUT',
        body,
      })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log(response);
        } else {
          console.log('Error. Course could not be updated');
        }
      })
      .catch(error => {
        console.log('Request failed. No backend yet.', error);
      });
    },
  },
}

export default api;
