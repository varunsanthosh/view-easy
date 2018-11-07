import DO_SOMETHING from './mutation.types';

const state = {
  getFirstTime: 'yes',
};

const getters = {
  getFirstTime(state) {
    return state.getFirstTime;
  },
};

const mutation = {
  [DO_SOMETHING](state, data) {
    state.getFirstTime = data;
  },
};

export default {
  state,
  getters,
  mutation,
};
