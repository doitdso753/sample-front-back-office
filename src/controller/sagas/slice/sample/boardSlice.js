import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialState = {
  boardList: {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  },
  boardDetail: {
    data: {},
    isLoading: false,
    isSuccess: false,
    isUpdate: false,
    isDelete: false,
    isError: false,
    error: null,
  },
};

// eslint-disable-next-line import/prefer-default-export
export const boardSlice = createSlice({
  name: 'product/basicGoods',
  initialState,
  extraReducers: (builder) => {
    // 로그아웃 시 state 초기화
    builder.addCase(PURGE, () => initialState);
  },
  reducers: {
    getBoardList: (state) => ({
      ...state,
      boardList: {
        ...state.boardList,
        data: [],
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: null,
      },
    }),
    getBoardListSuccess: (state, { payload }) => ({
      ...state,
      boardList: {
        data: payload,
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: null,
      },
    }),
    getBoardListFail: (state, payload) => ({
      ...state,
      boardList: {
        data: [],
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: payload,
      },
    }),
    resetBoardList: (state) => ({
      ...state,
      boardList: initialState.boardList,
    }),
  },
});
