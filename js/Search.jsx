import React, { Component } from 'react';

import ShowCard from './ShowCard';
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
                <header>
                    <h1>sVideo</h1>
                    <input
                        onChange={this.handleSearchTermChange}
                        value={this.state.searchTerm}
                        type="text"
                        placeholder="Search"
                    />
                </header>
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
