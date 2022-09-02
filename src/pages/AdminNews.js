import React from 'react';
import AdminLayout from "../components/AdminLayout";
import {connect} from "react-redux";
import {updateState} from "../redux/actions/newsAction";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

const AdminNews = (props) => {
    return (
        <AdminLayout>
            <div className="row">
                <div className="col-12">
                    <button type="button" className="btn btn-success d-block ml-auto" onClick={() => props.updateState({open: !props.open})}>Add</button>
                </div>
            </div>

            <Modal isOpen={props.open} toggle={() => props.updateState({open: false})}>
                <ModalHeader>
                    <h3>Yangilik qo'shish</h3>
                </ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                    <button type="submit" className="btn btn-success">Save</button>
                    <button type="button" className="btn btn-secondary" onClick={() => props.updateState({open: false})}>Cancel</button>
                </ModalFooter>
            </Modal>
        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        open: state.news.open
    }
}

export default connect(mapStateToProps, {updateState})(AdminNews);
