import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {rootAction} from '../../controller/sagas/slice/rootSlice';
import {Link, Outlet} from "react-router-dom";

const {boardActions} = rootAction;

function Board() {
    const dispatch = useDispatch();
    const boardList = useSelector((state) => state.board.boardList);

    useEffect(() => {
        dispatch(boardActions.getBoardList({}));
    }, []);

    useEffect(() => {
        if (boardList.data.length > 0) {
            window.$(function () {
                window.$("#example1").DataTable({
                    "responsive": true, "lengthChange": false, "autoWidth": false,
                    "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
                }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
                // window.$('#example2').DataTable({
                //     "paging": true,
                //     "lengthChange": false,
                //     "searching": false,
                //     "ordering": true,
                //     "info": true,
                //     "autoWidth": false,
                //     "responsive": true,
                // });
            });
        }
    }, [boardList])

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>DataTables</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">DataTables</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Board</h3>
                                </div>
                                <div className="card-body">
                                    <Link to="create"><button type="button" className="btn btn-primary mb-2">Board Create</button></Link>
                                    <table id="example1" className="table table-bordered table-striped">
                                        <thead>
                                        <tr>
                                            <th>NO.</th>
                                            <th>Title</th>
                                            <th>Content</th>
                                            <th>Create Date</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {boardList?.data && (boardList?.data ?? []).map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td><Link to={`/board/${item.id}`}>{item.title}</Link></td>
                                                <td>{item.content}</td>
                                                <td>{item.created_at}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                        {/*<tfoot>*/}
                                        {/*<tr>*/}
                                        {/*    <th>Rendering engine</th>*/}
                                        {/*    <th>Browser</th>*/}
                                        {/*    <th>Platform(s)</th>*/}
                                        {/*    <th>Engine version</th>*/}
                                        {/*    <th>CSS grade</th>*/}
                                        {/*</tr>*/}
                                        {/*</tfoot>*/}
                                    </table>
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
);
}

export default Board;
