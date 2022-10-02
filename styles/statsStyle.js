import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#ffffff',
  },
  head: {
    height: 50,
    backgroundColor: '#6F7BD9',
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: '#e4eaf7',
  },
  result: {
    textAlign: 'right',
  },
  title: {
    textAlign: 'left',
  },
  // .box {
  //   display: flex;
  //   flex-wrap: wrap;
  //   row-gap: 10px;
  //   column-gap: 9em;
  //   margin: auto
  // justify-content: flex-end;
  // }
});

export default styles;
