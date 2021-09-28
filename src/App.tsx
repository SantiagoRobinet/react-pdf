import React from 'react';
import PdfCreator from './components/PDFCreator'
import { PDFViewer } from '@react-pdf/renderer';


function App() {
  return (
    <PDFViewer width={"100%"} height={700}>
      <PdfCreator />
     </PDFViewer>
);
}

export default App;
