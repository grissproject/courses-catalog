import {
  UPDATE_COURSE,
  UPDATE_COURSE_TEXTBOOK,
  TOGGLE_SHOW_EDIT_FORMS
} from '../actions/actions.js';

const initialState = {
  courses: [
    {
      "id": 123,
      "name": "Introduction to Advertising",
      "description": "Learn about advertising",
      "textbooks": [
        {
          "author": "Joe Smith",
          "title": "Mobile Advertising Fundamentals"
        },
        {
          "author": "Eli Hinnegan",
          "title": "Introduction to Location-Based Advertising"
        },
        {
          "author": "Edward Bernays",
          "title": "Public Relations"
        },
      ],
      showEditForms: false,
    },
  ],
};

const courseReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case UPDATE_COURSE : {
      return {
        ...state,
        courses: state.courses.map(course => {
          if (course.id !== payload.course.id) {
            return course;
          }

          return {
            ...course,
            ...payload.course
          }
        })
      }
    }
    case UPDATE_COURSE_TEXTBOOK : {
      const { courseId, index, textbook } = payload;
      return {
        ...state,
        courses: state.courses.map(course => {
          if (course.id !== courseId) {
            return course;
          }
          return {
            ...course,
            textbooks: [
              ...course.textbooks.slice(0, index),
              textbook,
              ...course.textbooks.slice(index + 1),
            ]
          }
        })
      }
    }
    case TOGGLE_SHOW_EDIT_FORMS: {
      const { courseId } = payload;
      return {
        ...state,
        courses: state.courses.map(course => {
          if (course.id !== courseId) {
            return course;
          }
          return {
            ...course,
            showEditForms: !course.showEditForms,
          }
        })
      }
    }
    default: {
      return state;
    }
  }
}

export default courseReducer;
