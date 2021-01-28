import MuiButton from '@material-ui/core/Button'
import MuiPaper from '@material-ui/core/Paper'
import MuiTable from '@material-ui/core/Table'
import MuiTableBody from '@material-ui/core/TableBody'
import MuiTableCell from '@material-ui/core/TableCell'
import MuiTableContainer from '@material-ui/core/TableContainer'
import MuiTableHead from '@material-ui/core/TableHead'
import MuiTableRow from '@material-ui/core/TableRow'
import {Link} from 'react-router-dom'

function DataSourcessTable({learners}) {
  return (
    <MuiTableContainer component={MuiPaper}>
      <MuiTable>
        <MuiTableHead>
          <MuiTableRow>
            <MuiTableCell>Id</MuiTableCell>
            <MuiTableCell>RowId</MuiTableCell>
            <MuiTableCell>ColumnName</MuiTableCell>
            <MuiTableCell>ColumnId</MuiTableCell>
            <MuiTableCell>Value</MuiTableCell>
            <MuiTableCell>Type</MuiTableCell>
            <MuiTableCell>TypeOption</MuiTableCell>
            <MuiTableCell>SourceId</MuiTableCell>
            <MuiTableCell>userId</MuiTableCell>
            <MuiTableCell>OrganizationId</MuiTableCell>
            <MuiTableCell>CreatedAt</MuiTableCell>
            <MuiTableCell>UpdatedAt</MuiTableCell>
          </MuiTableRow>
        </MuiTableHead>
        <MuiTableBody>
          {learners.map((learner) => (
            <MuiTableRow key={DataSourcess.id}>
              <MuiTableCell>{ DataSourcess.rowId }</MuiTableCell>
              <MuiTableCell>{ DataSourcess.columnName}</MuiTableCell>
              <MuiTableCell>{ DataSourcess.columnId }</MuiTableCell>
              <MuiTableCell>{ DataSourcess.value }</MuiTableCell>
              <MuiTableCell>{ DataSourcess.type }</MuiTableCell>
              <MuiTableCell>{ DataSourcess.typeOption }</MuiTableCell>
              <MuiTableCell>{ DataSourcess.sourceId }</MuiTableCell>
              <MuiTableCell>{ DataSourcess.userId}</MuiTableCell>
              <MuiTableCell>{ DataSourcess.organisationId }</MuiTableCell>
              <MuiTableCell>{ DataSourcess.createdAt }</MuiTableCell>
              <MuiTableCell>{ DataSourcess.updatedAt }</MuiTableCell>
              <MuiTableCell>
                <MuiButton
                  component={Link}
                  to={`/DataSourcess/${DataSourcess.id}`}
                  color="primary"
                >
                  View
                </MuiButton>
              </MuiTableCell>
            </MuiTableRow>
          ))}
        </MuiTableBody>
      </MuiTable>
    </MuiTableContainer>
  )
}

export default DataSourcessTable
