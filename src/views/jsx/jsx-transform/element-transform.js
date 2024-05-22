import React from 'react';

const TestComponent = () => /*#__PURE__*/React.createElement("div", null, "TestComponent");

const Index = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "babel\u8F6C\u6362jsx"), /*#__PURE__*/React.createElement(TestComponent, null));
};

export default Index;