import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {rootAction} from "../../../controller/sagas/slice/rootSlice";
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router';

const {boardActions} = rootAction;

function BoardDetail() {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const navigate = useNavigate();
    // const [searchParams, setSearchParams] = useSearchParams();
    const boardDetail = useSelector((state) => state.board.boardDetail);
    const [boardInputInfo, setBoardInputInfo] = useState({
        id: undefined,
        title: '',
        content: '',
    });
    const [pageInfo, setPageInfo] = useState('detail');
    useEffect(() => {
        if (!boardDetail.isLoading) {
            if (boardDetail.isSuccess) {
                // 등록 성공
                setBoardInputInfo({
                    ...boardDetail.data,
                });
            }
            if (boardDetail.isCreate) {
                // 등록 성공
                alert('등록 성공');
                dispatch(boardActions.resetBoardDetail({}));
                dispatch(boardActions.getBoardList({}));
                navigate(-1);
                // history.push({ pathname: '/board' });
            }
            if (boardDetail.isUpdate) {
                // 수정 성공
                alert('수정 성공');
                dispatch(boardActions.resetBoardDetail({}));
                dispatch(boardActions.getBoardList({}));
                navigate(-1);
                // history.push({ pathname: '/board' });
            }
            if (boardDetail.isDelete) {
                // 삭제 성공
                alert('삭제 성공');
                dispatch(boardActions.resetBoardDetail({}));
                dispatch(boardActions.getBoardList({}));
                navigate(-1);
                // history.push({ pathname: '/board' });
            }
        }

    }, [boardDetail]);

    useEffect(() => {
      console.log('enter BoardDetail');
      if (location.pathname === '/board/create') {
        // 등록
        setPageInfo('create');

      } else {
        // 상세(수정, 삭제)
        setPageInfo('detail');
        // const id = searchParams.get('id'); // query string
        const id = location.pathname.replace('/board/', '');
        // search
        dispatch(boardActions.getBoardDetail({ id }));
      }
    }, [window.location]);

    const handleBoardCreateClick = () => {
        dispatch(boardActions.postBoardOne({ ...boardInputInfo }));
    }

    const handleBoardUpdateClick = () => {
        console.log(boardInputInfo);
        dispatch(boardActions.putBoardOne({ ...boardInputInfo }));
    }

    const handleBoardDeleteClick = () => {
        console.log(boardInputInfo);
        dispatch(boardActions.deleteBoardOne({ ...boardInputInfo }));
    }

    return (
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Form</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Board</a></li>
                    <li className="breadcrumb-item active">Form</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title">Board Form</h3>
                    </div>
                    <form>
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Title</label>
                          <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Enter Title"
                              value={boardInputInfo?.title}
                              onChange={(e) => setBoardInputInfo({ ...boardInputInfo, title: e.target.value })}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Content</label>
                          <input
                              type="text"
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Enter Content"
                              value={boardInputInfo?.content}
                              onChange={(e) => setBoardInputInfo({ ...boardInputInfo, content: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="card-footer">
                        {
                          pageInfo === 'create'
                              ? <button type="button" className="btn btn-primary" onClick={handleBoardCreateClick}>Create</button>
                              : (
                                  <>
                                    <button type="button" className="btn btn-primary mr-2" onClick={handleBoardUpdateClick}>Update</button>
                                    <button type="button" className="btn btn-primary" onClick={handleBoardDeleteClick}>Delete</button>
                                  </>
                              )
                        }
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
}

export default BoardDetail;
