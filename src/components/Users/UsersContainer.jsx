import React from "react"
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize} `, {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false)
                /*this.props.setTotalUsersCount(response.data.totalCount); берем столько юзеров, сколько есть на сервере*/
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize} `, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users currentPage={this.props.currentPage} totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize} users={this.props.users}
                   onPageChanged={this.onPageChanged} unfollow={this.props.unfollow}
                   follow={this.props.follow}/>
        </>
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
})

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);