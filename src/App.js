import React from 'react';
import styled from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import Links from './components/Links';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const LinksWrap = styled.section`
  margin-top: 16px;
`;
 
function App() {
  return (
    <Provider store={store}>
      <LinksWrap>
        <Links></Links>
      </LinksWrap>
    </Provider>
  );
}

export default App;
