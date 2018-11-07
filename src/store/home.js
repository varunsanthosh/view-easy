import {DO_SOMETHING} from './mutation.types';
import {DO_SOMETHING_ACTION} from './action.types';

const state = {
  getFirstTime: 'Nothing to show',
};

const getters = {
  getFirstTime(state) {
    return state.getFirstTime;
  },
};

const mutations = {
  [DO_SOMETHING](state, data) {
    state.getFirstTime = data;
  },
};

const actions = {
  [DO_SOMETHING_ACTION](context, payload) {
    context.commit(DO_SOMETHING, payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
