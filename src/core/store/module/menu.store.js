import {parseJsonTree} from '../../utils/utils';

export default {
  namespaced: true,
  state: {
    /**
     * @description 是否折合菜单
     * */
    collapse: false,
    /**
     * @description 当前页面的标题路径
     * */
    currentPaths: [],
    /**
     * @description 菜单列表
     * */
    list: [],
    formatList: []
  },
  getters: {},
  actions: {},
  mutations: {
    /**
     * @description
     * @param state {Object}
     * @param status {Boolean}
     * */
    setCollapseStatus(state, status) {
      state.collapse = status;
    },
    /**
     * @description
     * @param state {Object}
     * @param title {String}
     * */
    setCurrentPaths(state, title) {
      state.currentPaths = title;
    },
    /**
     * @description
     * @param state {Object}
     * @param list {Array}
     * */
    setList(state, list) {
      state.formatList = parseJsonTree(list);
      state.list = list;
    },

  }
};