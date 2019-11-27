import React from 'react'
import { Grid, Paper } from 'material-ui'
import LeftPane from './LeftPane'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
}

export default props => (
  <Grid container>
    <Grid item sm>
      <LeftPane styles={styles} />
    </Grid>

    <Grid item sm>
      <Paper>Right Pane</Paper>
    </Grid>
  </Grid>
)
