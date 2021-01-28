import Heading from './Heading'
import DataSourcesTable from './DataSourcesTable'
import MuiBox from '@material-ui/core/Box'
import MuiContainer from '@material-ui/core/Container'

function DataSourcesListPage() {
  const placeholderDataSourcess = [
    {
      id: '',
      name: 'Olivia Moore',
    },
    {
      id: '',
      name: 'Alice Moore',
    },
    {
      id: '1',
      name: 'Oliver Watts',
    },
  ]
  return (
    <MuiContainer component="main" mt={4}>
      <MuiBox display="flex" justifyContent="center" mt={4}>
        <Heading>DataSources Dashboard</Heading>
      </MuiBox>
      <MuiBox mt={4}>
        <DataSourcessTable DataSourcess={placeholderDataSourcess} />
      </MuiBox>
    </MuiContainer>
  )
}

export default DataSourcesListPage
