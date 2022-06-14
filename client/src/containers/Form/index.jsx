import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { TransactionForm, UpdateForm } from '../../components';
import { TabContainer, CustomTab } from './styles';

const Panel = props => (
  <div hidden={props.value !== props.index}>
    <div>{props.children}</div>
  </div>
);

export default function FormContainer() {
  const [index, setIndex] = useState(0);
  const onTabClicked = (event, index) => {
    setIndex(index);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabContainer>
        <Tabs value={index} onChange={onTabClicked}>
          <CustomTab label='Add A Transaction' />
          <CustomTab label='Update Your Goals' />
        </Tabs>
      </TabContainer>
      <Panel value={index} index={0}>
        <TransactionForm />
      </Panel>
      <Panel value={index} index={1}>
        <UpdateForm />
      </Panel>
    </Box>
  );
}
