import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthUserData} from "../../redux/authReducer";
import {withRouter} from "react-router-dom";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
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

export default connect(mapStateToProps, {getAuthUserData})(WithUrlDataContainerComponent);