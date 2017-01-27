import React from 'react';
import styled from 'styled-components';
import * as allActions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AllHeros from '../allheros'
import Hero from '../hero'

export const Title = styled.h1`
  font-size: 1.5em;
  padding: 2em;
  text-align: center;
  color: red;
  margin-top: 0px;
  background-color: whitesmoke;
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

const App = ({ heros, hero, actions }) =>
  <Wrapper>
    <Title>MARVEL</Title>
    <Content heros={heros} hero={hero} actions={actions} />
  </Wrapper>
;

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(allActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
