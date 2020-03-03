import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import {fetchMinList, fetchMaxList} from './actions'
import Loading from './component/Loading'
import Table from './component/Table'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function App({fetchMinList, fetchMaxList, state}) {

  // зафетчил асинхронку
  
  React.useEffect( () => {
    fetchMinList();
    fetchMaxList()
  } , [])

  // таблица с малым объемом данных

  const MinList = () => {
    return (
      state.loading.loadMin ? <Loading/> : 
        <Table data = {state.rowsMin} fetch = {fetchMinList}/>
    )
  }

  // таблица с большим объемом данных

  const MaxList = () => {
    return (
      state.loading.loadMax ? <Loading/> : 
        <Table data = {state.rowsMax} fetch = {fetchMaxList}/>
    )
  }

  const classes = useStyles();
    return (
      <BrowserRouter>
        <div className={classes.root}>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button><Link to = '/min'>Малый список</Link></Button>
            <Button><Link to = '/max'>Большой список</Link></Button>
          </ButtonGroup>
        </div>
        <Route path = '/min' component = {MinList}/>
        <Route path = '/max' component = {MaxList}/>
      </BrowserRouter>
    );
}

const mapDispatchToProps = {
  fetchMinList,
  fetchMaxList
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)