/**
 * @name Search Page
 *
 * @description Search through github on this page
 */
import React, { Component } from 'react';
import { GithubSearchContainer } from '/src/Features/GithubSearch';


class SearchPage extends Component {

  constructor(props) {

    super(props);
  }

  render() {

    return (
      <section>
        <h1 className="mt0">Search Page</h1>
        <GithubSearchContainer />
      </section>
    );
  }
}

export default SearchPage;
