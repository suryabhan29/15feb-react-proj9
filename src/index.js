import React from 'react';
import ReactDOM from 'react-dom/client';

// there are two formula to import

//1.  import {someNamedImport} from somelocation/somelibaray


//2. import somedefaultImport from somelocation/somelibaray

  import A from "./components/A.js";


  

const root = ReactDOM.createRoot(document.getElementById('suraj'));
root.render(<A name='suraj' surname='singh'>neemuch</A>);  


