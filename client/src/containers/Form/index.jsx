import { useState } from 'react';
import { Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import { TransactionForm, UpdateForm, DropZone } from '../../components';
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
    <Box sx={{ width: '100%', pb: '5.5rem' }}>
      <TabContainer sx={{ pb: '2.5rem' }}>
        <Tabs value={index} onChange={onTabClicked}>
          <CustomTab label='Transaction' />
          <CustomTab label='Profile' />
          <CustomTab label='Avatar' />
        </Tabs>
      </TabContainer>
      <Panel value={index} index={0}>
        <TransactionForm />
      </Panel>
      <Panel value={index} index={1}>
        <UpdateForm />
      </Panel>
      <Panel value={index} index={2}>
        <DropZone />
      </Panel>
    </Box>
  );
}
