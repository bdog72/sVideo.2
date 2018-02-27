// @flow

import React, { Component } from 'react';

import ShowCard from './ShowCard';
import Header from './Header';
// import preload from '../data.json';

type Show = {
    title: string,
    description: string,
    year: string,
    indbID: string,
    trailer: string,
    poster: string
};

class Search extends Component {
    // defaultProps = {
    //     shows: []
    // };

    state = {
        searchTerm: ''
    };

    props: {
        shows: Array<Show>
    };

    // handleSearchTermChange = (
    //     event: SyntheticKeyboardEvent & {
    //         target: HTMLInputElement
    //     }
    // ) => {
    //     this.setState({ searchTerm: event.target.value });
    // };

    handleSearchTermChange = event => {
        this.setState({ searchTerm: event.target.value });
    };

    render() {
        return (
            <div className="search">
                <Header
                    searchTerm={this.state.searchTerm}
                    showSearch
                    handleSearchTermChange={this.handleSearchTermChange}
                />
                <div>
                    {this.props.shows
                        .filter(
                            show =>
                                `${show.title} ${show.description}`
                                    .toUpperCase()
                                    .indexOf(
                                        this.state.searchTerm.toUpperCase()
                                    ) >= 0
                        )
                        .map(show => <ShowCard key={show.imdbID} {...show} />)}
                </div>
            </div>
        );
    }
}

export default Search;
