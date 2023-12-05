export const UPDATE_OBJECT = 'UPDATE_OBJECT';

export const updateObject = (newObject: object) => ({
  type: UPDATE_OBJECT,
  payload: newObject,
});
