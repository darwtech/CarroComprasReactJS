import { Component } from "react";

const styles = {
    detallesCarro: {
backgroundColor: '#fff',
position: 'absolute',
marginTop: 30,
boxShadow: ' 1px 5px 5px rgb(0,0,0,0.3)',
borderRadius: '5px',
width: '300px',
right: 50,
    },
    ul:{
margin: 0,
padding: 0
    },
    producto:{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    }
}

class DetallesCarro extends Component{
    render(){
        const {carro} = this.props
        console.log(carro)

        return(
            <div style={styles.detallesCarro}>
                    <ul style={styles.ul}>
                        {carro.map(x=> <li key={x.name} style={styles.producto}>
                            <img alt={x.name} src={x.img} width='50' height='32'/>
                            {x.name}
                            <span>{x.cantidad}</span>
                            
                            </li>)}
                    </ul>
            </div>
        )
    }
}

export default DetallesCarro