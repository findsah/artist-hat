const Progress = (props) => {

    let readings = [
        {
            name: 'Apples',
            value: 40,
            color: '#f81818 5%'
        },
        {
            name: 'Blueberries',
            value: 58,
            color: '#ffea00'
        },
        {
            name: 'Guavas',
            value: 2,
            color: '#2afc00'
        }
    ]

    // let arr = [
    //     {
    //         name: 'Apples',
    //         value: 50,
    //         color: '#eb4d4b'
    //     },
    //     {
    //         name: 'Blueberries',
    //         value: 45,
    //         color: '#22a6b3'
    //     },
    //     {
    //         name: 'Guavas',
    //         value: 5,
    //         color: 'green'
    //     }
    // ]
    // background: `linear-gradient(to right, red, orange 10% 30%, yellow 50% 70%, green 90%)`,

    // arr.map(item => console.log(item.color + " " + item.value + ", "))
    let bars = readings.length > 0 ?
        <div
            className="bar"
            style={{
                background: `linear-gradient(to right, ${readings.map(item => item.color)})`,
                width: "100%",
                height: "25px",
                borderRadius: "10px"
            }}
        >
        </div>
        : ""


    let values = readings && readings.length && readings.map((item, i) => (
        item.value > 0 ?
            <div className="value" style={{ 'color': '#707070', 'width': item.value + '%' }} key={i}>
                <span>{item.value}%</span>
            </div> : ""
    ));

    let calibrations = readings && readings.length && readings.map(function (item, i) {
            return (
                item.value > 0?
                <div className="graduation" style={{ 'color': item.color, 'width': item.value + '%' }} key={i}>
                    <span>|</span>
                </div>:''
            )
    });

    // let bars = readings && readings.length ?
    //     <div
    //         className="bar"
    //         style={{ background: `linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);` }}
    //     >

    //     </div> : ""

    readings && readings.length && readings.map(function (item, i) {
            return (
                item.value > 0?
                <div className="legend" key={i}>
                    <span className="dot" style={{ 'color': item.color }}>●</span>
                    <span className="label">{item.name}</span>
                </div>
                :''
            )
    });

    return (
        <div className="multicolor-bar">
            <div className="bars">
                {bars}
            </div>
            <div className="scale">
                {calibrations === '' ? '' : calibrations}
            </div>
            <div className="values">
                {values === '' ? '' : values}
            </div>
        </div>
    );
}

export default Progress;