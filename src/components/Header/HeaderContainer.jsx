import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserData, toggleIsFetching} from "../../redux/authReducer";
import {withRouter} from "react-router-dom";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching
});

let WithUrlDataContainerComponent = withRouter(HeaderContainer);

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching})(WithUrlDataContainerComponent);