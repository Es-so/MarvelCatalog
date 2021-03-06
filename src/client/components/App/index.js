import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from '../../actions';
import AllHeros from '../allheros';
import Hero from '../hero';

export const Title = styled.h1`
  font-size: 2em;
  padding: 2em;
  text-align: center;
  text-shadow: 2px 2px 8px red;
  color: white;
  margin-top: 0px;
  background-color: black;
`;

const Wrapper = styled.section`
  margin: 0px;
  padding: 0px;
`;

const Content = ({ heros, hero, actions }) =>
  <div style={{ paddingLeft: '7.5em', paddingRight: '7.5em' }} >
    {
      hero.name ?
        <Hero hero={hero} />
      :
        <AllHeros heros={heros} actions={actions} />
    }
  </div>
;

Content.propTypes = {
  heros: React.PropTypes.array.isRequired,
  hero: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};

const App = ({ heros, hero, actions }) =>
  <Wrapper>
    <Title>MARVEL</Title>
    <Content heros={heros} hero={hero} actions={actions} />
  </Wrapper>
;

App.propTypes = {
  heros: React.PropTypes.array.isRequired,
  hero: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(allActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
