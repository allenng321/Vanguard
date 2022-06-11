import { Stack } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Input from '@mui/material/Input';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';


function Inventory() {
  return (
    <div className='right-section-pages'>
      <h1>Inventory</h1>
      <p> The inventory section allows you to manage your collection with ease,
      start by adding your first sneaker down below!</p>

      <Stack spacing={4}>
        <span></span>
        <Box sx={{ flexGrow: 1}}>
          <AppBar position="static">
            <Toolbar>
              <Input placeholder="Search..." color='primary' sx={{width: 150, mr: 5}}></Input>
              <Autocomplete
                id="sneaker-filter"
                sx={{ width: 175, height: 50, marginTop: 0, mr: 5 }}
                options={top100Films}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField {...params} label="Filter type..." />
                )}
                renderOption={(props, option, { inputValue }) => {
                  const matches = match(option.title, inputValue);
                  const parts = parse(option.title, matches);

                  return (
                    <li {...props}>
                      <div>
                        {parts.map((part, index) => (
                          <span
                            key={index}
                            style={{
                              fontWeight: part.highlight ? 700 : 400,
                            }}
                          >
                            {part.text}
                          </span>
                        ))}
                      </div>
                    </li>
                  );
                }}
              />

                <Autocomplete
                id="sneaker-searcher"
                sx={{ width: 225, height: 50, marginTop: 0, mr: 2 }}
                options={top100Films2}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField {...params} label="Add sneaker..." />
                )}
                renderOption={(props, option, { inputValue }) => {
                  const matches = match(option.title, inputValue);
                  const parts = parse(option.title, matches);

                  return (
                    <li {...props}>
                      <div>
                        {parts.map((part, index) => (
                          <span
                            key={index}
                            style={{
                              fontWeight: part.highlight ? 700 : 400,
                            }}
                          >
                            {part.text}
                          </span>
                        ))}
                      </div>
                    </li>
                  );
                }}
              />

              <Autocomplete
                id="sneaker-size"
                sx={{ width: 100, height: 50, marginTop: 0, mr: 3 }}
                options={top100Films2}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField {...params} label="Size" />
                )}
                renderOption={(props, option, { inputValue }) => {
                  const matches = match(option.title, inputValue);
                  const parts = parse(option.title, matches);

                  return (
                    <li {...props}>
                      <div>
                        {parts.map((part, index) => (
                          <span
                            key={index}
                            style={{
                              fontWeight: part.highlight ? 700 : 400,
                            }}
                          >
                            {part.text}
                          </span>
                        ))}
                      </div>
                    </li>
                  );
                }}
              />

              <FormControlLabel control={<Checkbox defaultChecked color='default' />} label="Used" />

              <TextField label="Buying Price" sx={{ width: 125, mr: 1}}/>
              <TextField label="Listing Price" sx={{ width: 125, mr: 2}}/>

              <Button color="inherit">Add</Button>
            </Toolbar>
          </AppBar>
        </Box>

        <span></span>
        <span></span>

        <Paper style={{ height: 400, width: '100%' }}>
          <VirtualizedTable
            rowCount={rows.length}
            rowGetter={({ index }) => rows[index]}
            columns={[
              {
                width: 635,
                label: 'Sneaker',
                dataKey: 'sneaker',
              },
              {
                width: 50,
                label: 'Size',
                dataKey: 'size',
              },
              {
                width: 120,
                label: 'Used',
                dataKey: 'used',
              },
              {
                width: 120,
                label: 'Buying Price',
                dataKey: 'buyingPrice',
                numeric: true,
              },
              {
                width: 120,
                label: 'Listing Price',
                dataKey: 'listingPrice',
                numeric: true,
              },
            ]}
          />
        </Paper>
      </Stack>
    </div>
  )
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }]

  const top100Films2 = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }]


    const classes = {
      flexContainer: 'ReactVirtualizedDemo-flexContainer',
      tableRow: 'ReactVirtualizedDemo-tableRow',
      tableRowHover: 'ReactVirtualizedDemo-tableRowHover',
      tableCell: 'ReactVirtualizedDemo-tableCell',
      noClick: 'ReactVirtualizedDemo-noClick',
    };

    const styles = ({ theme }) => ({
      '& .ReactVirtualized__Table__headerRow': {
        ...(theme.direction === 'rtl' && {
          paddingLeft: '0 !important',
        }),
        ...(theme.direction !== 'rtl' && {
          paddingRight: undefined,
        }),
      },
      [`& .${classes.flexContainer}`]: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
      },
      [`& .${classes.tableRow}`]: {
        cursor: 'pointer',
      },
      [`& .${classes.tableRowHover}`]: {
        '&:hover': {
          backgroundColor: theme.palette.grey[200],
        },
      },
      [`& .${classes.tableCell}`]: {
        flex: 1,
      },
      [`& .${classes.noClick}`]: {
        cursor: 'initial',
      },
    });

    class MuiVirtualizedTable extends React.PureComponent {
      static defaultProps = {
        headerHeight: 48,
        rowHeight: 48,
      };

      getRowClassName = ({ index }) => {
        const { onRowClick } = this.props;

        return clsx(classes.tableRow, classes.flexContainer, {
          [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
      };

      cellRenderer = ({ cellData, columnIndex }) => {
        const { columns, rowHeight, onRowClick } = this.props;
        return (
          <TableCell
            component="div"
            className={clsx(classes.tableCell, classes.flexContainer, {
              [classes.noClick]: onRowClick == null,
            })}
            variant="body"
            style={{ height: rowHeight }}
            align={
              (columnIndex != null && columns[columnIndex].numeric) || false
                ? 'right'
                : 'left'
            }
          >
            {cellData}
          </TableCell>
        );
      };

      headerRenderer = ({ label, columnIndex }) => {
        const { headerHeight, columns } = this.props;

        return (
          <TableCell
            component="div"
            className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
            variant="head"
            style={{ height: headerHeight }}
            align={columns[columnIndex].numeric || false ? 'right' : 'left'}
          >
            <span>{label}</span>
          </TableCell>
        );
      };

      render() {
        const { columns, rowHeight, headerHeight, ...tableProps } = this.props;
        return (
          <AutoSizer>
            {({ height, width }) => (
              <Table
                height={height}
                width={width}
                rowHeight={rowHeight}
                gridStyle={{
                  direction: 'inherit',
                }}
                headerHeight={headerHeight}
                {...tableProps}
                rowClassName={this.getRowClassName}
              >
                {columns.map(({ dataKey, ...other }, index) => {
                  return (
                    <Column
                      key={dataKey}
                      headerRenderer={(headerProps) =>
                        this.headerRenderer({
                          ...headerProps,
                          columnIndex: index,
                        })
                      }
                      className={classes.flexContainer}
                      cellRenderer={this.cellRenderer}
                      dataKey={dataKey}
                      {...other}
                    />
                  );
                })}
              </Table>
            )}
          </AutoSizer>
        );
      }
    }

    MuiVirtualizedTable.propTypes = {
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          dataKey: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          numeric: PropTypes.bool,
          width: PropTypes.number.isRequired,
        }),
      ).isRequired,
      headerHeight: PropTypes.number,
      onRowClick: PropTypes.func,
      rowHeight: PropTypes.number,
    };

    const VirtualizedTable = styled(MuiVirtualizedTable)(styles);

    // ---

    const dataToAdd = [
      ['Frozen yoghurt', 159, 6.0, 24, 4.0],
      ['Ice cream sandwich', 237, 9.0, 37, 4.3],
      ['Eclair', 262, 16.0, 24, 6.0],
      ['Cupcake', 305, 3.7, 67, 4.3],
      ['Gingerbread', 356, 16.0, 49, 3.9],
    ];

    function createData(id, sneaker, size, used, buyingPrice, listingPrice) {
      return { id, sneaker, size, used, buyingPrice, listingPrice };
    }

    const rows = [
    ];

    for (let i=0; i < dataToAdd.length; i += 1) {
      const currentData = dataToAdd[i]
      rows.push(createData(i, ...currentData))
    }

export default Inventory;
