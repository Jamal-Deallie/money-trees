import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TransactionForm, GoalForm } from '../../components';

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
      <Box>
        <Tabs value={index} onChange={onTabClicked}>
          <Tab label='Add A Transaction' />
          <Tab label='Update Your Goals' />
        </Tabs>
      </Box>
      <Panel value={index} index={0}>
        <TransactionForm />
      </Panel>
      <Panel value={index} index={1}>
        <GoalForm />
      </Panel>
    </Box>
  );
}
