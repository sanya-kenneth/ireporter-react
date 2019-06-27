import React, { Component } from 'react';
import '../../assets/css/records.css';
import { Link } from 'react-router-dom';

export default class ViewReportComponent extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <a className="navbar-brand" href="#">ireporter</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Add intervention</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Add redflag</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav ml-auto">
                            <li>
                                <a><Link className="logout" to="/">logout</Link></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-md-3" />
                    <div className="col-md-6">
                        <div className="view-card">
                            <div className="row">
                                <div className="col-md-3"><label>Incident type: </label></div>
                                <div className="col-md-3"><p>Red-flag</p></div>
                                <div className="col-md-3" />
                                <div className="col-md-3" />

                            </div>

                            <hr />
                            <p>There is a corrupt official with in the mukono district board because several people have raised complaints over being exploited. These officials need to be investigated and then later arrested because it is getting bad every single day that passes by.</p>
                        </div>

                        <div className="view-card">
                            <div className="row">
                                <div className="col-md-3"><label>Incident type: </label></div>
                                <div className="col-md-3"><p>Red-flag</p></div>
                                <div className="col-md-3" />
                                <div className="col-md-3" />

                            </div>

                            <hr />
                            <p>Their are some officials in the land board that need to be investigated. please send your detectives to follow up on this matter</p>
                        </div>

                        <div className="view-card">
                            <div className="row">
                                <div className="col-md-3"><label>Incident type: </label></div>
                                <div className="col-md-3"><p>Intervention</p></div>
                                <div className="col-md-3" />
                                <div className="col-md-3" />
                            </div>
                            <hr />
                            <p> The road going to seeta market is in bad shape. please send people to work on it because it currently has so many pot holes. It has become un usable and this gets worse daily .</p>
                        </div>
                    </div>
                    <div className="col-md-3" />
                </div>
            </>
        );
    }
}
