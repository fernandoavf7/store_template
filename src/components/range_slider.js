//http://react-component.github.io/slider/
import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
//import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

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


const wrapperStyle = { margin: 50 };

class RangeSlider extends Component {

  onSliderChange(e) {
    console.log(e);
  }


  render() {

    const { title, minValue, maxValue, step } = this.props;

    let marks = {
      0: '0%',
      50000: '50%',
      100000: '100%'
    };

    console.log(marks);
    return (
      <div>
        <label>{title}</label>
        <Range marks={marks} onChange={this.sliderValue} step={step} min={minValue} max={maxValue} defaultValue={[minValue, maxValue]} tipFormatter={value => `${value}%`} />
      </div>
    );
  }
}

export default RangeSlider;