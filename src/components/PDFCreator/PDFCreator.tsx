import React from "react";

import { Page, Text, View, Document, StyleSheet, Image} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding:0
  },
  section: {
    flexGrow: 1,
    position: "relative",
    backgroundColor:"white",
  },
  innerSection: {
    flexGrow: 1,
    padding:73
  },
  image:{
      width:225,
      position:"absolute",
      right:215,
      bottom:133
  },
  cyanCloud:{
      height:"100%",
      width:208,
      position:"absolute",
      right:0
  },
  grayCloud:{
    height:"100%",
    width:208,
    position:"absolute",
    right:150,
  },
  logo:{
    width:100,
},
  title:{
    fontSize:30,
    paddingTop:24,
    paddingBottom:16,
    borderBottom:2,
    width:410
},

});

// Create Document Component
export default function MyDocument() {
    const algo = "Pepelandia"
    return(
    <Document>
    <Page size={{width:1014, height: 717}} style={styles.page}>
      <View style={styles.section}>
        <Image style={styles.grayCloud} src="/grayCloud.png" />
        <Image style={styles.cyanCloud} src="/cyanCloud.png" />
        <Image style={styles.image} src="/ESG.png" />
        <View style={styles.innerSection}>
            <Image style={styles.logo} src="/pulse_logo_dark.png" />
            <Text style={styles.title}>Certificate of Completition</Text>
        </View>
      </View>
    </Page>
    </Document>
    )
}
