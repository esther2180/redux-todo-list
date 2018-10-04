import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getListData } from '../actions';

class List extends Component {
    componentDidMount() {
        this.props.getListData();
    }

    render() {
        const { list } = this.props;

        const listElements = list.map(item => {
            return <li key={item._id} className="collection-item">{item.title}</li>
        });

        return (
            <div>
                <h1 className="center">To Do List</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link className="btn blue-grey darken-1" to="/add">Add Item</Link>
                    </div>
                </div>
                <ul className="collection">
                    {listElements}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.list.all
    }
}

export default connect(mapStateToProps, {
    getListData: getListData
})(List);


