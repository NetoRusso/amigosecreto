'use client';

import { GroupContext } from "@/context/group";
import { RangeValueContext } from "@/context/rangeValue";
import { useContext } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: auto;
  margin: 2em auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-family: var(--font-text);
    font-size: clamp(1rem, 0.8571rem + 0.7143vw, 1.5rem);
    color: white;
  }

  p{
    font-family: var(--font-text);
    font-size: clamp(0.75rem, 0.5357rem + 1.0714vw, 1.5rem);
    color: white;
  }
`;

const SliderBox = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundTrack = styled.div<{ min: number; max: number }>`
  position: absolute;
  width: 100%;
  height: 8px;
  background: var(--color-purple);
  border-radius: 5px;

  &::before {
    content: "";
    position: absolute;
    height: 8px;
    border-radius: 5px;
    background: var(--color-yellow);
    left: ${(props) => props.min}%;
    width: ${(props) => props.max - props.min}%;
  }
`;

const StyledRange = styled.input`
  position: absolute;
  width: 100%;
  appearance: none;
  height: 8px;
  background: transparent;
  outline: none;
  pointer-events: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background: var(--color-purple);
    border-radius: 50%;
    cursor: pointer;
    pointer-events: all;
    position: relative;

    &:hover { 
      transform: scale(1.2);
      filter: brightness(1.2);
      transition: all 200ms ease-in-out;
    }
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: var(--color-purple);
    border-radius: 50%;
    cursor: pointer;
    transform: translateY(-50%);
  }

  &::-ms-thumb {
    width: 20px;
    height: 20px;
    background: var(--color-purple);
    border-radius: 50%;
    cursor: pointer;
    transform: translateY(-50%);
  }
`;

const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: var(--font-text);
  color: var(--color-yellow);
  font-weight: 700;
  font-size: 2em;
  margin-top: 1rem;
`;

export default function RangeSlide() {
  const { minValue, maxValue, setMinValue, setMaxValue } = useContext(RangeValueContext);

  const { groupName } = useContext(GroupContext);

  const minRange = 0;
  const maxRange = 500;
  const hop = 5;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - hop);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + hop);
    setMaxValue(value);
  };

  const minPercent = ((minValue - minRange) / (maxRange - minRange)) * 100;
  const maxPercent = ((maxValue - minRange) / (maxRange - minRange)) * 100;

  return (
    <Container>
      <h3>Defina o valor do amigo secreto</h3>

      <SliderBox>
        <BackgroundTrack min={minPercent} max={maxPercent} />

        <StyledRange
          type="range"
          min={minRange}
          max={maxRange}
          step={hop}
          value={minValue}
          onChange={handleMinChange}
        />
        <StyledRange
          type="range"
          min={minRange}
          max={maxRange}
          step={hop}
          value={maxValue}
          onChange={handleMaxChange}
        />
      </SliderBox>

      <Labels>
        <span>R$ {minValue}</span>
        <span>R$ {maxValue}</span>
      </Labels>
      
      <p>O amigo secreto do grupo {groupName} é de R$ {minValue} a R$ {maxValue}</p>

    </Container>
  );
};
