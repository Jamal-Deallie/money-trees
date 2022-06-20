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
    <Box sx={{ width: '100%' }}>
      <TabContainer>
        <Tabs value={index} onChange={onTabClicked}>
          <CustomTab label='Enter Transaction' />
          <CustomTab label='Update Profile' />
          <CustomTab label='Upload Avatar' />
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
