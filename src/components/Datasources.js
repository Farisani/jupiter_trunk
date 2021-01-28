import DataSourcesDetails from './DataSourcesDetails'
import DataSourcesProgress from './DataSourcesProgress'
import MuiBox from '@material-ui/core/Box'
import MuiContainer from '@material-ui/core/Container'
import MuiDivider from '@material-ui/core/Divider'
import MuiPaper from '@material-ui/core/Paper'

function DataSourcesPage() {
  const placeholderDataSources = {
    id: '2ab1fa1b-048a-4b50-8a25-2ff947bd612d',
    name: 'Olivia Moore',
    username: 'livvy18',
   
  }
  const placeholderProgress = [
    {
      DataSourcesId: '2ab1fa1b-048a-4b50-8a25-2ff947bd612d',
      OrganizationId: 1,
      rowId: 1,
      progress: 1,
    },
    {
      DataSourcesId: '2ab1fa1b-048a-4b50-8a25-2ff947bd612d',
      OrganizationId: 1,
      rowId: 2,
      progress: 1,
    },
    {
      DataSourcesId: '2ab1fa1b-048a-4b50-8a25-2ff947bd612d',
      OrganizationId: 1,
      rowId: 3,
      progress: 1,
    },
    {
      DataSourcesId: '2ab1fa1b-048a-4b50-8a25-2ff947bd612d',
      OrganizationId: 2,
      rowId: 1,
      progress: 1,
    },
    {
      DataSourcesId: '2ab1fa1b-048a-4b50-8a25-2ff947bd612d',
      OrganizationId: 2,
      rowId: 2,
      progress: 0.25,
    },
  ]
  return (
    <MuiContainer component="main" mt={4}>
      <MuiPaper>
        <MuiBox mt={4}>
          <DataSourcesDetails DataSources={placeholderDataSources} />
          <MuiDivider light />
          <DataSourcesProgress progress={placeholderProgress} />
        </MuiBox>
      </MuiPaper>
    </MuiContainer>
  )
}

export default DataSourcesPage
