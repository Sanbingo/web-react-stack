/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { isEqual } from 'lodash';

// 1、纯函数组件
// const fool = ({ value }) => {
//   console.log('render fool component');
//   return (
//     <div>
//       当前数值：
//       {value}
//     </div>
//   );
// };


// 2、class组件 + shouldComponentUpdate函数判断是否重新渲染
// class fool extends React.Component {
//   shouldComponentUpdate(nextProps) {
//     if (!isEqual(nextProps, this.props)) {
//       return true;
//     }
//     return false;
//   }

//   render() {
//     console.log('render fool component');
//     const { value } = this.props;
//     return (
//       <div>
//         当前数值：
//         {value}
//       </div>
//     );
//   }
// }

// 3、React.PureComponent组件，浅比较，避免重复渲染，但还是要写class组件。
// class fool extends React.PureComponent {
//   render() {
//     console.log('render fool component');
//     const { value } = this.props;
//     return (
//       <div>
//         当前数值：
//         {value}
//       </div>
//     );
//   }
// }

// 3、React.PureComponent组件， 深比较，无法判断是否一致，每次都要重新渲染！
// class fool extends React.PureComponent {
//   render() {
//     console.log('render fool component');
//     const { deepValue } = this.props;
//     return (
//       <div>
//         当前数值：
//         {deepValue.num}
//       </div>
//     );
//   }
// }

// 4、React.memo + 纯函数式组件，浅比较，同样存在深比较的重复渲染的问题，所以深比较需要小心。

// const fool = React.memo(({ value }) => {
//   console.log('render fool component');
//   return (
//     <div>
//       当前数值：
//       {value}
//     </div>
//   );
// });

// 4、React.memo + 纯函数式组件，深比较，存在重复渲染的问题，所以深比较需要小心。
const fool = React.memo(({ deepValue }) => {
  console.log('render fool component');
  return (
    <div>
      当前数值：
      {deepValue.num}
    </div>
  );
});


export default fool;
