import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.username);
        this.props.getUserRepos(this.props.match.params.username);
    }
    render() {
        
        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            following,
            followers,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const { loading, repos } = this.props;
        if(loading){
            return <Spinner />
        }
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>Back to search</Link>
                Hireable: {' '}
                {hireable ? <i className='fas fa-check text-success'></i> :
                            <i className='fas fa-times-circle text-danger'></i>
                            }
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} alt="" className="round-img" style={{ width: "150px"}}/>
                        <h1>{ name }</h1>
                        <p>Location: { location } </p>
                    </div>
                    <div>
                        {bio && <Fragment>
                            <h3>Bio</h3>
                            <p> { bio } </p>
                        </Fragment>}
                        <a href={html_url} className="btn btn-dark my-1">Visit Github profile</a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>Username: </strong> { login }
                                </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment>
                                    <strong>Company: </strong> { company }
                                </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment>
                                    <strong>Website: </strong> { blog }
                                </Fragment>}
                            </li>                                                        
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-light">Public repos: {public_repos}</div>
                    <div className="badge badge-dark">Public gists: {public_gists}</div>
                </div>
                <Repos repos={repos} />
            </Fragment>
        )
    }
}

export default User
