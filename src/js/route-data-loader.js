import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';

export class RouteDataLoader extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('this.location__', this.props.location);
    console.log('next.location__', nextProps.location);

    let resultQuery = {};

    if (nextProps.location.pathname !== this.props.location.pathname) {
      matchRoutes(this.props.routes, nextProps.location.pathname).forEach(({route, match}) => {
        console.log('match____', JSON.stringify(match.url));
        const query = this.props.location && this.props.location.search ?
          new URLSearchParams(this.props.location.search) : false;

        if (query && query.has('search')) {
          resultQuery.search = query.get('search');
          if (query.has('searchBy')) {
            resultQuery.searchBy = query.get('searchBy');
          }
        }
        this.props.dispatch(route.fetchInitialData(match.url, resultQuery));
      });
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(RouteDataLoader);
