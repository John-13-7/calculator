import React from 'react'
import { useState, useEffect } from "react";
import {
    RiNumber0, RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6,
    RiNumber7, RiNumber8, RiNumber9,
} from "react-icons/ri";
import { FaEquals, FaPlus, FaMinus, FaTimes, FaDivide, FaSquareRootAlt } from "react-icons/fa";
import { GrClear } from "react-icons/gr";
import styled from 'styled-components';
function Calculator() {

    const [currentValue, setCurrentValue] = useState([]);
    const [equals, setEquals] = useState([]);
    const [arithmetic, setArithmetic] = useState([]);
    const [expression, setExpression] = useState([]);
    const [temp, setTemp] = useState("");
    const [sol, setSol] = useState("");
    const [clear, setClear] = useState("");

    useEffect(() => {
        getSolution();
    }, [equals]);

    const getSolution = () => {
        let sol;
        let timer = 0;
        while (arithmetic.length != 0) {
            if (timer == 0) {
                let temp = expression.shift();
                sol = temp;
                timer++;
            }
            let a = arithmetic.shift();
            let temp2 = expression.shift();
            if (a == "+") {
                sol = sol + temp2;
            }
            else if (a == "-") {
                sol = sol - temp2;
            }
            else if (a == "*") {
                sol = sol * temp2;
            }
            else if (a == "/") {
                sol = sol / temp2;
            }
        }
        setSol(sol);
        /*setCurrentValue([]);
        setEquals("");
        setTemp("");
        setExpression([]); 
        setArithmetic([]);*/ 
    };

    return (
        <Wrapper>
            <span className='display'>
                {sol}
                {currentValue}
                {clear}
            </span>
            <p>
                <RiNumber0
                    className='button'
                    onClick={() =>
                        setCurrentValue([...currentValue, "0"]) &
                        setTemp(temp + "0") &
                        setClear("")
                    } />
                <RiNumber1
                    className='button'
                    onClick={() =>
                        setCurrentValue([...currentValue, "1"]) &
                        setTemp(temp + "1") &
                        setClear("")
                    } />
                <RiNumber2
                    className='button'
                    onClick={() =>
                        setCurrentValue([...currentValue, "2"]) &
                        setTemp(temp + "2") &
                        setClear("")
                    } />
                <FaPlus
                    className='button'
                    onClick={() =>
                        setCurrentValue([...currentValue, "+"]) &
                        setArithmetic([...arithmetic, "+"]) &
                        setExpression(current => [...current, temp * 1]) &
                        setTemp("") &
                        setClear("")
                    } />
            </p>
            <p>
                <RiNumber3
                    className='button'
                    onClick={() =>
                        setCurrentValue([...currentValue, "3"]) &
                        setTemp(temp + "3") &
                        setClear("")
                    } />
                <RiNumber4
                    className='button'
                    onClick={() =>
                        setCurrentValue([...currentValue, "4"]) &
                        setTemp(temp + "4") &
                        setClear("")
                    } />
                <RiNumber5
                    className='button'
                    onClick={() =>
                        setCurrentValue([...currentValue, "5"]) &
                        setTemp(temp + "5") &
                        setClear("")
                    } />
                <FaMinus
                    className='button'
                    onClick={() =>
                        setCurrentValue([...currentValue, "-"]) &
                        setArithmetic([...arithmetic, "-"]) &
                        setExpression(current => [...current, temp * 1]) &
                        setTemp("") &
                        setClear("")
                    } />
            </p>
            <p>
                <RiNumber6
                    className='button'
                    onClick={() =>
                        setCurrentValue([...currentValue, "6"]) &
                        setTemp(temp + "6") &
                        setClear("")
                    } />
                <RiNumber7
                    className='button'
                    onClick={() =>
                        setCurrentValue([...currentValue, "7"]) &
                        setTemp(temp + "7") &
                        setClear("")
                    } />
                <RiNumber8
                    className='button'
                    onClick={() =>
                        setCurrentValue([...currentValue, "8"]) &
                        setTemp(temp + "8") &
                        setClear("")
                    } />
                <FaTimes
                    className='button'
                    onClick={() =>
                        setCurrentValue([...currentValue, "*"]) &
                        setArithmetic([...arithmetic, "*"]) &
                        setExpression(current => [...current, temp * 1]) &
                        setTemp("") &
                        setClear("")
                    } />
            </p>
            <RiNumber9
                className='button'
                onClick={() =>
                    setCurrentValue([...currentValue, "9"]) &
                    setTemp(temp + "9") &
                    setClear("")
                } />
            <GrClear
                className='button'
                onClick={() =>
                    setCurrentValue([]) &
                    setEquals("") &
                    setTemp("") &
                    setExpression([]) &
                    setArithmetic([]) &
                    setClear("0")
                } />
            <FaEquals
                className='button'
                onClick={() =>
                    setExpression(current => [...current, temp * 1]) &
                    setEquals("=") &
                    setCurrentValue([]) 
                }
            />
            <FaDivide
                className='button'
                onClick={() =>
                    setCurrentValue([...currentValue, "/"]) &
                    setArithmetic([...arithmetic, "/"]) &
                    setExpression(current => [...current, temp * 1]) &
                    setTemp("") &
                    setClear("")
                } />
            <p>

            </p>
        </Wrapper>
    )
}


const Wrapper = styled.div`
   border: 10px solid black;
   .display{
    align-self: start;
    border: 5px solid black;
    background-color: lightgray;
    margin: 25px;
    padding: 10px;
    display: flex;
    justify-content: right;
    height: 1em;
   }
    .button{
    border: 5px solid black;
    border-radius: 20px;
    padding: 50px;
    margin: 10px;
    &:hover{
    opacity: 0.5;
    cursor: pointer;
    }
    p{
    display: flex;
    flex-direction: center;
    justify-content: center;
    }
}
`;
export default Calculator