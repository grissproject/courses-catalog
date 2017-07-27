/*
 * action types
 */
export const UPDATE_COURSE = 'UPDATE_COURSE';
export const UPDATE_COURSE_TEXTBOOK = 'UPDATE_COURSE_TEXTBOOK';
export const TOGGLE_SHOW_EDIT_FORMS = 'TOGGLE_SHOW_EDIT_FORMS';

function updateCourse(course) {
  return {
    type: UPDATE_COURSE,
    payload: {
      course,
    }
  };
}

function updateCourseTextbook(courseId, index, textbook) {
  return {
    type: UPDATE_COURSE_TEXTBOOK,
    payload: {
      courseId,
      index,
      textbook,
    }
  };
}

function toggleShowEditForms(courseId) {
  return {
    type: TOGGLE_SHOW_EDIT_FORMS,
    payload: {
      courseId,
    }
  }
}

export {
  updateCourse,
  updateCourseTextbook,
  toggleShowEditForms,
};
