import {parseJsonTree} from '../../utils/utils';

export default {
  namespaced: true,
  state: {
    /**
     * @description 是否折合菜单
     * */
    collapse: false,
    /**
     * @description 当前页面的菜单父子路径
     * */
    currentPaths: [],
    /**
     * @description 菜单列表
     * */
    list: [],
    /**
     * @description 格式化菜单
     * */
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
     * @param list {Array}
     * */
    setCurrentPaths(state, list) {
      state.currentPaths = list;
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
