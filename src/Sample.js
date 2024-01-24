const { Component, Fragment } = require("react");
const { default: MyName } = require("./MyName");
const { default: MyName2 } = require("./MyName2");
const { default: Counter } = require("./Counter");
const { default: Counter2 } = require("./Counter2");
const { default: Counter3 } = require("./Counter3");
const { default: Counter4 } = require("./Counter4");
const { default: State } = require("./State");

class Sample extends Component {
    render() {
        const name = "react";
        const value = 2;
        const style = {
            background: "black",
            padding: "16px",
            color: "#fff",
            fontSize: "12px"
        }

        return(
            <Fragment>
                <div>
                    <input type="text"/>
                </div>
                <div>Hello</div>
                <div>{name}</div>
                <div>
                    {
                        1 + 1 === 2
                        ?
                        (<div>True</div>)
                        :
                        (<div>False</div>)
                    }
                </div>
                <div>
                    {
                        1 + 1 === 2 &&
                        (<div>True</div>)
                    }
                </div>
                <div>
                    {/* 1. I don't understand(함수형식) */}
                    {
                        ( () => {
                            if(value === 1)
                            return(<div>하나</div>);
                            if(value === 2)
                            return(<div>둘</div>);
                            if(value === 3)
                            return(<div>셋</div>);
                        } )()
                    }
                </div>

                {/* style */}
                <div style={style}>style</div>
                <div className="Sample">css 스타일 적용</div>

                {/* component */}
                <div>주석확인</div>
                <MyName name="리액트"/>
                <MyName/>
                <MyName2 name="함수형"/>

                <Counter/>
                <Counter2/>
                <Counter3/>
                <Counter4/>
                <State/>
            </Fragment>
        )
    }
}

export default Sample;