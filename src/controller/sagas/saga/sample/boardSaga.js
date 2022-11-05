import {
    takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import { rootAction } from "../../slice/rootSlice";

const { boardActions } = rootAction;

export function* boardSaga() {
    yield takeLatest(boardActions.getBoardList.type, getBoardList);
}

/**
 * 게시판 목록
 * @param payload
 * @return {Generator<*, void, *>}
 */
export function* getBoardList({
   // type,
   payload,
}) {
    try {
        const url = '/board';
        const response = yield axios.get(url, payload);
        console.log(response);
    } catch (e) {

    }
}