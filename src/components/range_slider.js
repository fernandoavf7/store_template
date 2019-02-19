//http://react-component.github.io/slider/
import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
//import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import CurrencyFormat from 'react-currency-format';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class RangeSlider extends Component {

  constructor() {
    super();
    this.state = {
      current: [0,0]
    }
  }

  onSliderChange = (e) => {
    console.log(e);
    this.setState({
      current: e
    });
  }

  formatCurrency(val){
    return <CurrencyFormat value={val} displayType={'text'} thousandSeparator={true} prefix={'$'} />;
  }

  componentDidMount(){
    this.setState({
      current: [this.props.minValue, this.props.maxValue]
    });
  }

  render() {

    const { marks, title, minValue, maxValue, step } = this.props;

    console.log(marks);
    return (
      <div>
        <label>{title} {this.formatCurrency(this.state.current[0])} - {this.formatCurrency(this.state.current[1])}</label>
        <Range marks={marks} onChange={this.onSliderChange} step={step} min={minValue} max={maxValue} defaultValue={[minValue, maxValue]}  />
      </div>
    );
  }
}

export default RangeSlider;