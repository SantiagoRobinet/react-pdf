import React from 'react';
import PdfCreator from './components/PDFCreator'
import { PDFViewer } from '@react-pdf/renderer';


function App() {
  return (
    <PDFViewer width={"100%"} height={window.innerHeight-20} >
      <PdfCreator />
     </PDFViewer>
);
}

export default App;
