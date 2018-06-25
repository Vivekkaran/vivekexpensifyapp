import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render expenses summary with one expense', () => {
  const wrapper = shallow(<expenseSummary expenseCount={1} expenseTotal={235}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses summary with multiple expenses', () => {
  const wrapper = shallow(<expenseSummary expenseCount={23} expenseTotal={2359098}/>);
  expect(wrapper).toMatchSnapshot();
});
