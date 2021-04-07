import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { capitalize } from '@my-template/shared';
import { Column } from 'react-table';
import Table from '.';
import ContainerDecorator from '../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `Table`,
  component: Table,
};

const Template: Story<ComponentProps<typeof Table>> = (args) => (
  <Table {...args} />
);

export const TableStory = Template.bind({});

const columns: Column<{
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
}>[] = [
  {
    Header: `ID`,
    accessor: `col1`,
    sortType: `basic`,
  },
  {
    Header: `Email`,
    accessor: `col2`,
    sortType: `basic`,
  },
  {
    Header: `First Name`,
    accessor: `col3`,
    sortType: `basic`,
  },
  {
    Header: `Last Name`,
    accessor: `col4`,
    sortType: `basic`,
  },
  {
    Header: `Role`,
    accessor: `col5`,
    sortType: `basic`,
  },
];
const data = [
  {
    col1: `ID`,
    col2: `Email`,
    col3: `First Name`,
    col4: `Last Name`,
    col5: capitalize(`role`),
  },
];

TableStory.args = {
  caption: `Test Table`,
  data,
  columns,
  tableProps: { minWidth: `80vw` },
};
TableStory.decorators = [ContainerDecorator];
