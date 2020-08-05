import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserData, toggleIsFetching} from "../../redux/authReducer";
import {withRouter} from "react-router-dom";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        authAPI.authMe()
            .then(data => {
                this.props.toggleIsFetching(false);
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
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